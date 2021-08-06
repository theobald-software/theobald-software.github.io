---
ref: ec-sap-connection-01
layout: page
title: Verbindungsaufbau
description: Verbindungsdaten
product: erpconnect
parent: sap-verbindung
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=verbindungsdaten
---

### Zugangsdaten
Für die Anmeldung an einem SAP-System müssen Sie folgende Daten angeben:

**Client** <br>
Die dreistellige Mandantennummer Ihres SAP-Systems, z.B. 800. 

**Language**<br>
Der Sprachenschlüssel für die von Ihnen verwendete Sprache, z.B. DE für Deutsch oder EN für Englisch. 

**Authentifizierung**<br>
Folgende Authentifizierungsformen werden unterstützt: 
- SAP-Benutzername und Passwort
- [SNC (Secure Network Communication)](./sso-und-snc) mit Benutzername und Passwort
- [SNC mit NTLM und Kerberos](./sso-mit-snc)
- [SAP Log On Ticket](./sso-mit-logon-ticket) (verfügbar nur für ERPConnect und ERPConnect Services)

Für weitere Informationen zu SNC, siehe [SNC](https://help.sap.com/saphelp_nw70ehp1/helpdata/de/e6/56f466e99a11d1a5b00000e835363f/frameset.htm?original_fqdn=help.sap.de) und [SNC Parameters](https://help.sap.com/saphelp_nw73ehp1/helpdata/de/d9/e8a740bbaa4d8f8bee6f7b173bd99f/frameset.htm).

### SAP- Zielsystem
Das SAP-Zielsystem kann ein Application Server oder ein Message Server (Load Balancing) sein.

Im Fall eines Applikationsservers werden folgende Angaben benötigt: 
- Name oder IP-Adresse des Applikationsservers (Eigenschaft Host) 
- Systemnummer, eine Zahl zwischen 0 und 99 (Eigenschaft SystemNumber)

Im Fall eines Message Servers (Load Balancing) werden folgende Angaben benötigt: 
- Dreistellige System-ID (Eigenschaft SID, z.B. MSS) 
- Name oder IP-Adresse des Message-Servers (Eigenschaft MessageServer) 
- Logon-Gruppe (Eigenschaft LogonGroup, i.d.R. ist das PUBLIC)

Für weitere Informationen zu Message Servern, siehe [Load Balancing](https://help.sap.com/saphelp_dm40/helpdata/de/22/04295c488911d189490000e829fbbd/content.htm?no_cache=true).


#### Verbindung aufbauen via Application Server

siehe engl. Version.

#### Verbindung aufbauen via  Load Balancing

siehe engl. Version.

### SAP-Router
Falls Sie auf das SAP-System (Application-Server oder Message-Server) über einen SAP-Router zugreifen, setzen Sie den Route String unmittelbar vor den Hostnamen bzw. den Message-Server. 

Für weitere Informationen zur Verwendung eines SAP-Routers, siehe [SAP-Router](https://help.sap.com/viewer/6d9a59096c4b1014b507f15bed51571f/7.01.22/de-DE/486ccbed672d07dbe10000000a42189b.html) und [Route Strings](https://help.sap.com/viewer/6d9a59096c4b1014b507f15bed51571f/7.01.22/de-DE/486c62b71d5a350ce10000000a42189d.html).

### ConnectionString

Rufen Sie die Methode `R3Connection.Open(string connectionString)` auf und übergeben Sie einen ConnectionString.
Für die Verbindung mit einem Single Application Server nutzen Sie z.B. den ConnectionString 
`"USER=YourUser LANG=EN CLIENT=800 SYSNR=00 ASHOST=ecc.theobald-software.com PASSWD=YourPassword"`

Weitere Beispiele für eine Verbindung mit dem ConnectionString finden Sie in der Datei *saprfc.ini* des *classic RFC SDKs* bzw. *sapnwrfc.ini* des *NW RFC SDKs schauen*. 


