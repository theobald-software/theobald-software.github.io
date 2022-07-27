---
ref: destinations-110
layout: page
title: Tableau
description: Tableau
product: xtract-universal
parent: destinationen
childidentifier: tableau
permalink: /:collection/:path
weight: 110
lang: de_DE
progressstate: 5
---
Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in die Tableau Analytikplattform. 

Mit der Tableau Destination können Sie die extrahierten SAP-Daten als Data Extract im Hyper-Format ablegen.

Optional ist es auch möglich, die erzeugte Data Extract-Datei zu einem Tableau-Server oder Tableau Online hochzuladen.

## Voraussetzungen

- Tableau Export Library
- Visual C++ 2015 Runtime

Laden Sie die Tableau Export Library und die Visual C++ 2015 Runtime von [Amazon AWS - Xtract Universal:Tableau](https://s3.eu-central-1.amazonaws.com/cdn-files.theobald-software.com/download/XtractUniversal/tableau.zip) herunter.<br>
Führen Sie die vc_redist.x64.exe aus, um die Visual C++ 2015 Runtime zu installieren und kopieren Sie den `tableau`-Ordner in das Xtract Universal Verzeichnis (`C:\Program Files\XtractUniversal`).

## Verbindung

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


## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen
![Tableau-Extraction-Specific-Settings](/img/content/Tableau-Extraction-Specific-Settings.png){:class="img-responsive"}                    
  
{% include _content/de/xu-specific/destinationen/general/file-name.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

{% include _content/de/xu-specific/destinationen/general/existing-files.md %}

{: .box-note }
**Hinweis:** Wenn *Append results* aktiv ist, weist Xtract Universal die Spalten der laufenden Extraktion den Spalten der vorhandenen Tableau-Datei zu.
Dieses Datenmapping basiert auf den Namen der jeweiligen Spalten.
Um diese Mapping-Funktion zu nutzen, stellen Sie sicher, dass der Tableau-Ordner im Installationsverzeichnis von Xtract Universal auf dem aktuellen Stand ist, siehe [Download des aktuellen Tableau-Ordners](https://s3.eu-central-1.amazonaws.com/cdn-files.theobald-software.com/download/XtractUniversal/tableau.zip). 


## Weiterführende Links:
- [Webinar: Visualize your SAP data in Tableau](https://www.youtube.com/watch?v=X6T3NfVDhJE)