---
ref: ec-sap-connection-05
layout: page
title: SSO mit SNC
description: SNC mit NTLM und Kerberos
product: erpconnect
parent: sap-verbindung
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=sso-mit-snc
progressstate: 5
---

Eine SAP-Verbindung ist ab ERPConnect Version 4.1.59 über Single-Sign-On (SSO) und Secure Network Communication (SNC) möglich. 
Bei dem SNC-Mechanismus haben Sie die Optionen [NTLM](#ntlm) und [Kerberos5](#Kerberos). 

### Voraussetzungen

Die folgenden DLLs müssen heruntergeladen und in dem Verzeichnis `%SYSTEMROOT%\System32` des Rechners liegen, auf dem der Xtract Server läuft bzw. die SAP-Verbindung stattfindet: 

Für 32-Bit: 
 - Kerberos: gsskrb5.dll 
 - NTLM: gssntlm.dll
 
Für 64-Bit x86: 
 - Kerberos gx64krb5.dll 
 - NTLM: gx64ntlm.dll

Die DLLs werden mit dem [SAP-Hinweis 2115486](http://service.sap.com/sap/support/notes/2115486) zur Verfügung gestellt.

Lesen Sie die notwendigen Einstellungen für Kerberos SNC in der [SAP Hilfe - - Single Sign-On mit Microsoft Kerberos SSP](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/DE-DE/440ebf6c9b2b0d1ae10000000a114a6b.html) nach. 
Ein Anhaltspunkt dafür, ob die Einstellungen stimmen ist, dass Sie sich mit dem SAP-Logon-Pad per SSO am SAP System anmelden können.

{: .box-note }
**Hinweis**: Wir empfehlen, die Verbindung zwischen SAP und Client zu testen, bevor Sie fortfahren.

### Über SNC in ERPConnect

Das R3-Connection Objekt ermittelt auf Basis der Einstellung *SNCMechanism* selbständig die benötigte SNC DLL. 
Mit der Eigenschaft *SNCLibraryPath* können Sie den Pfad zur SNC DLL manuell angeben. 
In diesem Fall wird die automatische Ermittlung der DLL deaktiviert und die Einstellung für *SNCMechanism* ignoriert. 

Bei der Angabe des *SNCMechanism* können Sie zwischen dem [NTLM](#ntlm) und dem [Kerberos5](#Kerberos) Mechanismus wählen. 
Wenn eine Kerberos Authentication nicht möglich ist, wird automatisch NTML verwendet.

Wenn Sie die voreingestellten Eigenschaften und die SNC Verbindung nicht nutzen wollen, können Sie diese über die Eigenschaft *SNCEnabled* = false deaktivieren, ohne die übrigen SNC Parameter zu ändern.

### Beispiele
Die folgenden Beispielcodes zeigen wie man Parameter für eine SNC-Verbindung an ein R3Connection-Objekt übergibt.

****

**SNC Mechanismus (ERPConnect Version 4.1.1.0):**

```csharp
using (R3Connection con = new R3Connection()) 
{
	con.Host = "sap-erp-as05.example.com";
	con.SystemNumber = 7;
	con.Client = "800";
	con.Language = "DE";
	con.SNCPartnerName = "p:SAPServiceNSP@THEOBALD";
	con.SNCMechanism = SNCMechanism.NTLM;
	con.SNCEnabled = true;
	con.Open();
	// do something with con
}
```

**Individueller Pfad zu einer SNC DLL (ERPConnect Version 4.1.1.0):**
```csharp
using (R3Connection con = new R3Connection())
{
	con.Host = "sap-erp-as05.example.com";
	con.SystemNumber = 7;
	con.Client = "800";
	con.Language = "DE";
	con.SNCPartnerName = "p:SAPServiceNSP@THEOBALD";
	con.SNCLibraryPath = @"C:\Windows\SysWOW64\sncgss32.dll";
	con.SNCEnabled = true;
	con.Open();
	// do something with con
}
```

**SNC Mechanismus (ERPConnect Version 4.2.3):**
```csharp
using (R3Connection con = new R3Connection())
{
    con.Host = "sap-erp-as05.example.com";
    con.SystemNumber = 7;
    con.Client = "800";
    con.Language = "DE";
    con.SNCSettings.Enabled = true;
    con.SNCSettings.PartnerName = "p:SAPServiceNSP@THEOBALD";
    con.SNCSettings.Mechanism = SNCMechanism.NTLM;
    con.SNCSettings.QualityOfProtection = SNCQualityOfProtection.Maximum;
    con.Open();
    // do something with con
}
```

**Individueller Pfad zu einer SNC DLL (ERPConnect Version 4.2.3):**

```csharp
using (R3Connection con = new R3Connection())
{
    con.Host = "sap-erp-as05.example.com";
    con.SystemNumber = 7;
    con.Client = "800";
    con.Language = "DE";
    con.SNCSettings.Enabled = true;
    con.SNCSettings.PartnerName = "p:SAPServiceNSP@THEOBALD";
    con.SNCSettings.LibraryPath = @"C:\Windows\SysWOW64\sncgss32.dll";
    con.SNCSettings.QualityOfProtection = SNCQualityOfProtection.Maximum;
    con.Open();
    // do something with con
}
```

{: .box-note }
**Hinweis**: Mit der neuen Eigenschaft *QualityOfProtection* können Sie die bevorzugte Sicherheitsstufe einstellen. 

### NTLM

NTLM (kurz für NT LAN Manager) ist ein Authentifizierungsverfahren für Rechnernetze. <br>
Bei NTLM wird die SSO Authentifizierung über eine Challenge-Response-Authentifizierung zwischen dem Client und dem Server durchgeführt. 

Für weitere Informationen zu NTML, siehe [Microsoft Documentation - Kerberos Authentication](https://docs.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview).

### Kerberos

Bei der Kerberos Methode erfolgt die Authentifizierung des Clients über einen Kerberos Server. <br>
Dabei werden sog. Tickets zur Authentifizierung erstellt und an den Client übermittelt. 
Mit diesem Ticket authentifiziert sich der Client beim Server.

Für weitere Informationen zu Kerberos, siehe [Microsoft Documentation - Kerberos Authentication](https://docs.microsoft.com/en-us/windows-server/security/kerberos/kerberos-authentication-overview).

### Double Hop-Problem

Double Hop beschreibt die Weitergabe der Authentifizierungsdaten über zwei oder mehr Rechner (Hops).<br>
NTLM funktioniert aus technischen Gründen nur über einen Hop. 
Kerberos gibt aus Sicherheitsgründen die Authentifizierungsdaten standardmäßig ebenfalls nur über einen Hop weiter, aber man kann Kerberos so konfigurieren, dass die Authentifizierungsdaten auch über zwei oder mehr Hops weitergegeben werden.

Beispiel 1: Wenn Sie einen Xtract Server einsetzen, müssen sich der Konsument der SAP-Daten und der Xtract Server auf demselben Rechner befinden, 
während der Domain-Controller und das SAP-System jeweils auf unterschiedlichen Rechern laufen können. 
In diesem Szenarion können Sie sowohl NTLM als auch Kerberos verwenden.

Beispiel 2: Wenn Sie einen Xtract Server einsetzen, wobei der Konsument der SAP-Daten und der Xtract Server auf unterschiedlichen Rechnern laufen, dann müssen Sie Kerberos verwenden, um das Double-Hop Problem zu lösen. <br>
Für weitere Informationen zur Kerberos Konfiguration, siehe [Microsoft Techcommunity - Understanding Kerberos Double Hop](https://techcommunity.microsoft.com/t5/ask-the-directory-services-team/understanding-kerberos-double-hop/ba-p/395463).

Für weitere Informationen zur SSO Konfiguration, siehe [SAP Help - Single Sign-On Configuration](https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/48/ca0fe42fbb5c97e10000000a42189d/content.htm?no_cache=true)

****
#### Weiterführende Links
- [Knowledge Base Article - SNC/SSO User Rights](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).
- [SAP Hilfe - Secure Network Communications (SNC)](https://help.sap.com/viewer/6f3e0bea6c4b101484fcf5305b4d624b/7.01.22/de-DE/e656f466e99a11d1a5b00000e835363f.html).
- [SAP Hilfe - Single Sign-On](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/de-DE/89d115110d444d85a94dff7ffd0e2b7f.html)
