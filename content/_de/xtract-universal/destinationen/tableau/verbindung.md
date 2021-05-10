---
ref: xu-tableau-data-extract-02
layout: page
title: Verbindung
description: Verbindung
product: xtract-universal
parent: tableau
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=verbindung
---


{% include _content/de/xu-specific/destinationen/general/connection.md %}	

### Destination Details

![tableauDestinationDetails-hyper](/img/content/tableauDestinationDetails-hyper.png){:class="img-responsive"}

### Output directory
Geben Sie das Verzeichnis auf dem Xtract Universal Server an, in das die exportierten Tableau-Dateien gespeichert werden sollen.

{: .box-note }
**Hinweis:** Stellen Sie sicher, dass das Verzeichnis existiert.

### Tableau Server
- **Upload to Tableau Server** <br>
Option zum Hochladen der extrahierten Datei (als Datenquelle) auf Tableau Server oder Tableau Online.
- **Delete local file after upload**
Option zum Entfernen der lokalen Datei nach einem erfolgreichen Upload.

**Host** <br>
Die IP-Adresse oder der Domainname des Servers, beginnend mit `http://` oder `https://`.

**Username** <br>
Ihr Benutzername für Tableau Server/Online eingeben.

**Password** <br>
Ihr Passwort für Tableau Server/Online eingeben.

**Site (for Tableau online)** <br>
Die ID der Website für die Veröffentlichung Ihrer Datenquelle eingeben. 
Das Feld ist obligatorisch und kann nicht leer gelassen werden.

Erhalten Sie die korrekte Website-URL von [Tableau Online](https://online.tableau.com/#/site/Site/workbooks).

Für die Extraktion von Daten nach Tableau Online ist die Rolle "Server Administrator" als "Site Role" erforderlich.
![Tableau_Server_Admin](/img/content/xu/tableau_server_admin.png){:class="img-responsive"}

**[Test Connection]**<br>
Schaltfläche zur Überprüfung, ob die Verbindungsdaten korrekt sind und eine Verbindung hergestellt werden kann.

### Tableau Server Settings
**Site**<br>
Eine Dropdown-Liste mit Sites, die auf dem verbundenen On-Prem-Server gespeichert sind. Die Auswahl eines Sites ist für das Hochladen von Dateien obligatorisch. 

**Project**<br>
Das Projekt zum Veröffentlichen der Datenquelle. 