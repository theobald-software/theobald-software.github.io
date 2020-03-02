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
4. Rechtsklick auf den Ordner *Shared Data Sources* und *Add New Data Source* auswählen.
5. Vergeben Sie im Reiter *General* (1) einen Namen für die neue Datenquelle (optional), als default Wert wird *DataSource1* vergeben (3).
6. Auswählen des Typs *Xtract RS* (4).
![Report-Data-Source-001](/img/content/Report-Data-Source-001.png){:class="img-responsive"}
7. Angabe eines Connection String zur SAP Quelle in folgendem Form (5)
```
ApplicationHost=sap.theobald.local;SYSNR= 00;LANG=EN;Client=800;SNC_MODE=1;SNC_PARTNERNAME=p:SAPserviceERP/do_not_care@[domain];SNC_LIB=gx64krb5.dll - SSO mit SNC
ApplicationHost=saperp.theobald.local; SYSNR=00; CLIENT=800;LANG=EN- ohne SNC
```
8. Wechseln Sie zum Reiter *Credentials* und geben Ihren SAP Benutzer sowie Passwort an (2).
![Report-Data-Source-002](/img/content/Report-Data-Source-002.png){:class="img-responsive"}
9. Bestätigen Sie die Eingaben mit **[OK]** (6).

{: .box-note }
**Note:** Falls Sie sich direkt mit einem einzelnen Applikationsserver verbinden möchten, füllen Sie bitte die Parameter *ApplicationHost* und *SystemNumber* aus. Für eine Anmeldung per Load Balancing müssen die Parameter *MessageServer, SID* und *LogonGroup* im Connection String mitgegeben werden. Des Weiteren muss der Parameter *UseLoadBalancing* auf *true* stehen. Falls Sie Schwierigkeiten beim Ausfüllen dieser technischen Parameter haben, fragen Sie bitte in ihrer SAP-Basis nach.

### Die Kerberos DLLs herunterladen

{: .box-note }
**Note:** Sie müssen die relevanten DLLs von der [SAP ONE Support Launchpad](https://launchpad.support.sap.com/#/notes/2115486) herunterladen. 
Die Kereros Bibliotheken bitte in folgenden lokalen Pfad abspeichern: `C:\SNC\gx64krb5.dll` (64-bit) oder `C:\SNC\gsskrb5.dll` (32-bit).

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
