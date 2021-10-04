---
ref: destinations-13
layout: page
title: Flat File - JSON
description: Flat File - JSON
product: xtract-universal
parent: destinationen
childidentifier: json-flat-file
permalink: /:collection/:path
weight: 11
lang: de_DE

---
Die JSON-Flat-File-Destination erzeugt eine generische JSON-Datei.

## Verbindung

### Eine Destination hinzufügen

1. Navigieren Sie im Hauptfenster des Designers zu **Server > [Manage Destinations](./ziele-verwalten)**. Das Fenster "Manage Destination" wird geöffnet.
2. Klicken Sie auf **[Add]**, um eine neue Destination hinzufügen. Das Fenster "Destination Details" wird geöffnet.
3. Geben Sie einen **Namen** für die Destination ein.
4. Wählen Sie den Destinationstyp aus dem Dropdown-Menü aus.

### Destination Details

![JSON-Flat-Destination-Details](/img/content/xu/json/json-flat-Destination-Details.png){:class="img-responsive"}

**File output path**<br>
Geben Sie das Verzeichnis an, in dem die Flat Files gespeichert werden sollen.
Wenn das Verzeichnis nicht existiert, wird es erstellt.

{: .box-note }
**Hinweis:** Um Flat-Files auf ein Netzlaufwerk zu schreiben, muss Folgendes gegeben sein: <br>
\- Das Verzeichnis in **File output path** muss im [UNC-Format](https://docs.microsoft.com/de-de/dotnet/standard/io/file-path-formats#unc-paths) angegeben sein, z.B. `\\Server2\Share\Test\`.<br>
\- Der Benutzer, unter dem der [Xtract Universal Dienst](../fortgeschrittene-techniken/service-account) läuft, muss Schreibrechte auf das Verzeichnis haben. 

### Überprüfen des Extraktionsergebnisses
1. Überprüfen Sie das zuvor definierte Verzeichnis zum Speichern von JSON-Flat-Files.
2. Öffnen Sie die JSON-Flat-Datei mit einem Editor Ihrer Wahl.
![JSON-Flat-File](/img/content/xu/json/json_flat-file.png){:class="img-responsive"}

## Einstellungen

### Destination Settings öffnen

1. Wählen Sie eine bestehende Extraktion oder legen Sie eine neue an  (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die JSON-Flat-File-Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen
Das Fenster "Destination Settings" besteht aus den folgenden Unterabschnitten:
- File Name
- Column Name Style
- Date Conversion
- Existing files

![XU_flatfile_JSON_Destination](/img/content/xu/json/XU_flatfile_JSON_Destination.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}
{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}        
{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

### Existing files
Die Option *Existing files* ist mit der Option *Directory* (Verzeichnis) verbunden, die in den [Destination Details](#destination-details---destinationendetails) definiert ist.<br>
**Replace file** - ersetzt die vorhandene Datei in dem Verzeichnis, in dem die JSON-Datei gespeichert ist.<br>
**Abort extraction** - bricht die Extraktion ab, wenn die JSON-Datei bereits im definierten Verzeichnis existiert.
