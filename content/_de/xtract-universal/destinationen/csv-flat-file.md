---
ref: destinations-14
layout: page
title: Flat File - CSV
description: Flat File - CSV
product: xtract-universal
parent: destinationen
childidentifier: csv-flat-file
permalink: /:collection/:path
weight: 10
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=zielumgebungen
---

Die Destination *Flat File* erzeugt eine generische CSV-Datei. 

## Verbindung

### Eine Destination hinzufügen

1. Navigieren Sie im Hauptfenster des Designers zu **Server > [Manage Destinations](./ziele-verwalten)**. Das Fenster "Manage Destination" wird geöffnet.
2. Klicken Sie auf **[Add]**, um eine neue Destination hinzufügen. Das Fenster "Destination Details" wird geöffnet.
3. Geben Sie einen **Namen** für die Destination ein.
4. Wählen Sie den Destinationstyp aus dem Dropdown-Menü aus.


### Destination Details - Destinationsdetails
![CSV-Flat-Destination-Details](/img/content/xu/CSV-Flat-Destination-Details.png){:class="img-responsive"}


**File output path**<br>
Geben Sie das Verzeichnis an, in dem die Flat Files gespeichert werden sollen. 
Wenn das Verzeichnis nicht existiert, wird es erstellt.

{: .box-note }
**Hinweis:** Um Flat-Files auf ein Netzlaufwerk zu schreiben, muss Folgendes gegeben sein: <br>
\- Das Verzeichnis in **File output path** muss im [UNC-Format](https://docs.microsoft.com/de-de/dotnet/standard/io/file-path-formats#unc-paths) angegeben sein, z.B. `\\Server2\Share\Test\`.<br>
\- Der Benutzer, unter dem der [Xtract Universal Dienst](../fortgeschrittene-techniken/service-account) läuft, muss Schreibrechte auf das Verzeichnis haben. 

{% include _content/de/xu-specific/destinationen/general/csv-settings.md %}														 

{% include _content/de/xu-specific/destinationen/general/convert-encoding.md %}	

### Column encryption
{% include _content/de/xu-specific/destinationen/general/column-encryption.md %}


## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![XU_flatfile_csv_Destination](/img/content/XU_flatfile_csv_Destination.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

### Existing files 

**Replace file**: eine vorhandene Zieldatei wird überschrieben. <br>
**Append results**: Daten werden an eine bereits bestehende Zieldatei angehängt. <br>
**Abord extraction**: Der Prozess wird abgebrochen, falls eine Zeildatei bereits existiert.   
