---
ref: xtract-rs-03
layout: page
title: Report-Datenquelle konfigurieren
description: Report-Datenquelle konfigurieren
product: xtract-rs
parent: xtract-rs
childidentifier: report-datenquelle-konfigurieren
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-RS-DE/default.aspx?pageid=report-datenquelle-konfigurieren
---

Der folgende Abschnitt führt durch die Neuanlage einer SAP Datenquelle im SQL Server Report Server (SSRS) Umfeld. 
Die Abbildungen können leicht abweichen, je nach dem, ob Sie den Wizard oder die manuelle Anlage nutzen.

1. Führen Sie die Anwendung *XtractRSSetup.exe* auf der identischen Umgebung aus, in der auch Visual Studio installiert wurde.
2. Stellen Sie sicher, dass die Erweiterung *Microsoft Reporting Services Projects* in VS2019 installiert und aktiviert wurde.
3. Erstellen Sie eine neues *Report Server Project* in VS2019.
4. Klicken Sie mit der rechten Maustaste auf den Ordner *Shared Data Sources* und wählen Sie *Add New Data Source* aus.
5. Vergeben Sie im Tab *General* einen Namen für die neue Datenquelle (optional), als Standardwert wird *DataSource1* vergeben (1).
6. Wählen Sie den Typ *Xtract RS* (2).
![Report-Data-Source-001](/img/content/Report-Data-Source-001.png){:class="img-responsive"}
7. Geben Sie einen Connection String zur SAP Quelle (3) an.
8. Wechseln Sie zum Tab **Credentials** und geben Ihren SAP Benutzer sowie Passwort an (4).
![Report-Data-Source-002](/img/content/Report-Data-Source-002.png){:class="img-responsive"}
9. Klicken Sie auf **[OK]** zum Bestätigen.

### Connection String Parameter 

{: .box-note }
**Hinweis:** Weitere Informationen entnehmen Sie der offiziellen [SAP Dokumentation](https://help.sap.com/doc/saphelp_nwes72/7.2.3/de-DE/44/0ebf6c9b2b0d1ae10000000a114a6b/content.htm?no_cache=true).

Server |Parameter | Beispielwert
------------ |------------ | -------------
 Application | ApplicationHost | `saperp.theobald.local`
<!----> | SystemNumber | `00`
<!----> | LANG | `EN`
<!----> | Client | `800`
Secure Network Communication | SNCMode | `1` - enable
<!----> | SNCPartnerName | `p:SAPserviceERP/do_not_care@THEOBALD.LOCAL` - Partnername des konfigurierten SAP Systems
<!----> | SNCLibrary | `C:\SNC\gsskrb5.dll` - lokaler Pfad zur Kerberos lib
<!----> | SSOType | `2` - SSO mit Kerberos
Message | MessageServer | `saperp.theobald.local`
<!----> | UseLoadBalancing | `true`
<!---->  | LogonGroup | `PUBLIC`
<!----> | SID | `MBS`

### Connection String Beispiele: 
#### SNC

ApplicationHost=saperp.theobald.local;SystemNumber=00;LANG=EN;Client=800;SNCMode=1;
SNCPartnerName=p:SAPserviceERP/do_not_care@THEOBALD.LOCAL;SNCLibrary="C:\SNC\gsskrb5.dll";SSOType=2

#### Single Application Server

LANG=EN;ApplicationHost=ec5.theobald-software.com;SystemNumber=00;Client=800


### Die Kerberos DLLs herunterladen

{: .box-note }
**Hinweis:** Sie können die relevanten DLLs von der [SAP ONE Support Launchpad](https://launchpad.support.sap.com/#/notes/2115486) herunterladen. 

Die Kerberos Bibliotheken in folgenden lokalen Pfad abspeichern: `C:\SNC\gx64krb5.dll` (64-bit) sowie `C:\SNC\gsskrb5.dll` (32-bit).

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
