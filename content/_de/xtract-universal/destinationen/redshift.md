---
ref: destinations-23
layout: page
title: Amazon Redshift
description: Amazon Redshift
product: xtract-universal
parent: destinationen
childidentifier: redshift
permalink: /:collection/:path
weight: 23
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=redshift
progressstate: 5
---
Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in [Amazon Redshift](https://aws.amazon.com/de/redshift/).<br>
Für mehr Informationen über Amazon Redshift, siehe [Erste Schritte mit Amazon Redshift](https://docs.aws.amazon.com/de_de/redshift/latest/gsg/getting-started.html).

## Voraussetzungen
- Sie benötigen eine laufende Instanz und gültige Anmeldedaten.
- Ihr Client-Rechner muss für den Zugriff auf den Cluster autorisiert sein.
- Für den Aufbau einer Verbindung zu Redshift wird ein geeigneter Datenbanktreiber benötigt.
- Laden Sie den 64-Bit-Amazon-Redshift-ODBC-Treiber von der offiziellen [Website](https://docs.aws.amazon.com/redshift/latest/mgmt/install-odbc-driver-windows.html) herunter und installieren Sie ihn.

{: .box-note }
**Hinweis:** Wenn der Treiber fehlt, schlägt der Verbindungstest fehl.

![XU-fehlender-redshift-treiber](/img/content/XU-fehlender-redshift-treiber.png){:class="img-responsive"}

Vor Xtract Universal Version 2.102.0 müssen Sie die Mono.Security.dll Assembly anstelle des oben genannten ODBC-Treibers installieren.
Sie können das komplette Mono-Paket von [der offiziellen Projektseite](http://download.mono-project.com/archive/2.0/download/) des Herstellers, oder die Mono.Security.dll von einer beliebigen Quelle Ihrer Wahl herunterladen. Bitte stellen Sie sicher, dass Sie die Mono.Security-Assembly installieren, die auf .NET 2.0 kompiliert wurde. Andere Versionen könnten Probleme mit den Assemblies verursachen, die für den Zugriff auf die Redshift-Datenbank verwendet werden.

### Installation
Um die Datei zu installieren, gibt es zwei Möglichkeiten:

1. Registrieren Sie die Mono.Security assembly im global assembly cache (gac):
- Öffnen Sie ein Kommandozeilenfenster und wechseln Sie in das Xtract Universal Installationsverzeichnis<br>
	`cd "C:\Program Files\XtractUniversal"`
- Installieren Sie die Mono.Security.dll Datei mit Hilfe des gacutil in Ihren global assembly cache <br>
	`gacutil -i "C:\Program Files (x86)\Mono-2.0\lib\mono\2.0\Mono.Security.dll"`<br>
Weitere Informationen finden Sie in dem Artikel über das [Installieren einer Assembly im globalen Assemblycache]https://docs.microsoft.com/en-us/dotnet/framework/app-domains/install-assembly-into-gac).
2. Kopieren Sie die Mono.Security.dll in das Xtract Universal Installationsverzeichnis.

## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	 

### Destination Details

![XU_redshift_destination](/img/content/XU_redshift_destination.png){:class="img-responsive"}

**Endpoint**<br>
Server-Adresse des Redshift-Systems.<br>
(Zu finden in der Redshift Management Console)

**Port**<br>
Portnummer für die Verbindung.

**Username / Password**<br>
Benutzername und Passwort des Datenbanknutzers.

**Database**<br>
Name der Datenbank, auf die zugegriffen werden soll.

**Test Connection**<br>
Klicken Sie auf die Schaltfläche, um die Verbindung zu testen.

## Einstellung
### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen).
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![ext_spec_set_de_form](/img/content/redshift-configurations.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}
{% include _content/de/xu-specific/destinationen/general/file-name-script-expressions.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

{% include _content/de/xu-specific/destinationen/general/sql-commands.md %}

{% include _content/de/xu-specific/destinationen/general/debugging-bulk-insert.md %}

{% include _content/de/xu-specific/destinationen/general/transaction-style.md %}

## Daten Mergen
{% include _content/de/xu-specific/destinationen/merge-data/db-merge-data.md  %}


## AnySQL Maestro konfigurieren

Diese Anleitung zeigt, wie Sie AnySQL Maestro konfigurieren müssen, um auf Ihre Amazon Redshift Datenbank zugreifen zu können.<br>
Sie können natürlich auch andere [DB Clients](https://docs.aws.amazon.com/redshift/latest/mgmt/connecting-using-workbench.html) verwenden. Die Einstellungen sollten zum Teil vergleichbar sein. 

- Zunächst müssen Sie AnySQL Maestro herunterladen und installieren. [Link](https://www.sqlmaestro.com/products/anysql/maestro/download/)
- Zusätzlich sollten Sie die neueste Version des PostgreSQL ODBC Treibers herunterladen und installieren. [Link](http://ftp.postgresql.org/pub/odbc/versions/msi/psqlodbc_08_04_0200.zip)
- Starten Sie AnySQL Maestro.
- Klicken Sie auf "Create Database Profiles".

![RS-Configure-AnySQL-Add-Profile-Button](/img/content/RS-Configure-AnySQL-Add-Profile-Button.png){:class="img-responsive"}

- Im Create Database Profiles Wizard klicken Sie auf den Button neben dem Feld für den Connection String.

![RS-Configure-AnySQL-Database-Profiles-Wizard](/img/content/RS-Configure-AnySQL-Database-Profiles-Wizard.png){:class="img-responsive"}

- Gehen Sie auf "Connection", wählen Sie "Use connection string" aus und klicken Sie anschließend auf "Build...".
- Gehen Sie auf "Machine Data Source" und klicken Sie auf "New..." (Unter Umständen erscheint ein Pop-Up Fenster mit einer Warnung.
  Dieses können Sie einfach mit einem Klick auf **[OK]** schließen)
  

- Klicken Sie auf "Next" und wählen Sie "PostgreSQL Unicode", anschließend klicken Sie auf "Next" und im nächsten Fenster auf "Finish".

![RS-Configure-AnySQL-Choose-Driver](/img/content/RS-Configure-AnySQL-Choose-Driver.png){:class="img-responsive"}

- Geben Sie Ihre Zugangsdaten ein, klicken Sie auf "Test" um sie zu überprüfen und speichern Sie die Daten mit "Save".

![RS-Configure-AnySQL-Enter-Credentials](/img/content/RS-Configure-AnySQL-Enter-Credentials.png){:class="img-responsive"}

- Wählen Sie Ihre Verbindung aus und klicken Sie auf "Ok".
- Geben Sie den Datenbanknamen und Ihre Zugangsdaten ein und wählen Sie im Feld SSL-Mode "allow", anschließend bestätigen Sie die Eingaben mit "Ok".


- Geben Sie Ihre Zugangsdaten ein und wählen Sie Ihren initial catalog, klicken Sie dann auf "Ok".

![RS-Configure-AnySQL-Data-Link-Properties](/img/content/RS-Configure-AnySQL-Data-Link-Properties.png){:class="img-responsive"}

- Klicken Sie auf "Next" und dann auf "Ready".
- Die Konfiguration ist abgeschlossen und Sie können nun auf Ihre Datenbank zugreifen. 

## Weiterführende Links
- [Amazon Redshift: Erste Schritte mit Amazon Redshift](https://docs.aws.amazon.com/de_de/redshift/latest/gsg/getting-started.html)
- [Amazon AWS: Erste Schritte mit Backup und Wiederherstellung mit AWS](https://aws.amazon.com/de/backup-restore/getting-started/?nc1=h_ls)
