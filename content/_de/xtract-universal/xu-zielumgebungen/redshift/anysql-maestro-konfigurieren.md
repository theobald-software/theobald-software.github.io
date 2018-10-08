---
layout: page
title: AnySQL Maestro konfigurieren
description: AnySQL Maestro konfigurieren
product: xtract-universal
parent: redshift
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=anysql-maestro-konfigurieren
---

Diese kurze Anleitung zeigt, wie Sie AnySQL Maestro konfigurieren müssen, um auf Ihre Amazon Redshift Datenbank zugreifen zu können.<br>
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
  Dieses können Sie einfach mit einem Klick auf "Ok" schließen)


- Klicken Sie auf "Next" und wählen Sie "PostgreSQL Unicode", anschließend klicken Sie auf "Next" und im nächsten Fenster auf "Finish".

![RS-Configure-AnySQL-Choose-Driver](/img/content/RS-Configure-AnySQL-Choose-Driver.png){:class="img-responsive"}

- Geben Sie Ihre Zugangsdaten ein, klicken Sie auf "Test" um sie zu überprüfen und speichern Sie die Daten mit "Save".

![RS-Configure-AnySQL-Enter-Credentials](/img/content/RS-Configure-AnySQL-Enter-Credentials.png){:class="img-responsive"}

- Wählen Sie Ihre Verbindung aus und klicken Sie auf "Ok".
- Geben Sie den Datenbanknamen und Ihre Zugangsdaten ein und wählen Sie im Feld SSL-Mode "allow", anschließend bestätigen Sie die     Eingaben mit "Ok".


- Geben Sie Ihre Zugangsdaten ein und wählen Sie Ihren initial catalog, klicken Sie dann auf "Ok".

![RS-Configure-AnySQL-Data-Link-Properties](/img/content/RS-Configure-AnySQL-Data-Link-Properties.png){:class="img-responsive"}

- Klicken Sie auf "Next" und dann auf "Ready".
- Die Konfiguration ist abgeschlossen und Sie können nun auf Ihre Datenbank zugreifen. 