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

Laden Sie die Tableau Export Library und die Visual C++ 2015 Runtime [hier](https://s3.eu-central-1.amazonaws.com/cdn-files.theobald-software.com/download/XtractUniversal/tableau.zip) herunter.<br>
Wenn die Visual C++ 2015 Runtime noch nicht auf Ihrer Maschine installiert ist, führen Sie die vc_redist.x64.exe aus, um die Visual C++ 2015 Runtime zu installieren.<br>
Kopieren Sie den `tableau`-Ordner in Ihr Xtract Universal Verzeichnis, sodass folgende Ordnerstruktur entsteht: `C:\Program Files\XtractUniversal\tableau\hyper`.

## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	

### Destination Details

![tableauDestinationDetails-hyper](/img/content/tableauDestinationDetails-hyper.png){:class="img-responsive"}

### Output directory
Geben Sie das Verzeichnis auf dem Xtract Universal Server an, in das die exportierten Tableau-Dateien gespeichert werden sollen.

{: .box-note }
**Hinweis:** Stellen Sie sicher, dass das Verzeichnis existiert.

### Tableau Server
**Upload to Tableau Server** <br>
Option zum Hochladen der extrahierten Datei auf Tableau Server oder Tableau Cloud (Tableau Online).<br>

**Delete local file after upload**<br>
Option zum Entfernen der lokalen Datei nach einem erfolgreichen Upload.

**Host** <br>
Die IP-Adresse oder der Domainname des Servers, beginnend mit `http://` oder `https://`.

**PAT name**<br>
Geben Sie den Namen Ihres [Individuellen Zugangstokens (PAT)](https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_auth.htm#make-a-sign-in-request-with-a-personal-access-token) an.<br>
Um Daten nach Tableau Server zu schreiben, ist die Benutzerrolle "Server Administrator" als "Site Role" erforderlich.<br>

**PAT secret**<br>
Geben Sie ein gültiges Token-Geheimnis für Ihren Token-Namen ein.

**Site (for Tableau Cloud)** <br>
Die ID der Website für die Veröffentlichung Ihrer Datenquelle eingeben. 
Das Feld ist obligatorisch und kann nicht leer gelassen werden.<br>
Erhalten Sie die korrekte Website-URL von [Tableau Cloud](https://online.tableau.com/#/site/Site/workbooks).

**[Test Connection]**<br>
Schaltfläche zur Überprüfung, ob die Verbindungsdaten korrekt sind und eine Verbindung hergestellt werden kann.

### Tableau Server Settings
**Site**<br>
Eine Dropdown-Liste mit Sites, die auf dem verbundenen On-Prem-Server gespeichert sind. Die Auswahl eines Sites ist für das Hochladen von Dateien obligatorisch. 

**Project**<br>
Wählen Sie das Projekt, in dem die extrahierten Daten veröffentlicht werden. 


## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen, siehe [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen).
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen
![Tableau-Extraction-Specific-Settings](/img/content/Tableau-Extraction-Specific-Settings.png){:class="img-responsive"}                    
  
{% include _content/de/xu-specific/destinationen/general/file-name.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

{% include _content/de/xu-specific/destinationen/general/existing-files.md %}

{% include _content/de/xu-specific/destinationen/general/column-mapping.md %}

{: .box-note }
**Hinweis:** Spalten, bei denen *Not Mapped* aktiv ist, werden mit NULL gefüllt.

## Weiterführende Links:
- [Webinar: Visualize your SAP data in Tableau](https://www.youtube.com/watch?v=X6T3NfVDhJE)
