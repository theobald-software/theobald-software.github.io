---
ref: xu-google-cloud-storage-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: google-cloud-storage
permalink: /:collection/:path
weight: 3
lang: de_DE
progressstate: 5
---

### Destination Settings öffnen
1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 

### Destination Settings - Destinationseinstellungen

![xu-google-cloud-dest-01](/img/content/xu/googlecloudstorage/xu-google-cloud-dest-01.png){:class="img-responsive"}

{% include _content/en/xu-specific/xu-destinations/general/file-name.md %}

### Column name style
{% include _content/en/xu-specific/xu-destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/xu-destinations/general/date-conversion.md %}

#### Folder name - Verzeichnisname

Um Extraktionsdaten an einen Speicherort innerhalb eines bestimmten Ordners in einem Google Cloud Storage-Bucket zu schreiben, geben Sie einen Ordnernamen ohne Slashes ein.
Unterordner werden unterstützt und können mit der folgenden Syntax definiert werden: 
`[Verzeichnis]/[Unterverzeichnis_1]/[Unterverzeichnis_2]/…`

#### Compression

**None**<br>
Die Daten werden unkomprimiert übertragen und als csv-Datei abgelegt.

**gzip**<br>
Die Daten werden komprimiert übertragen und  als gz-Datei abgelegt. 

### CSV File Splitting

**No Splitting**<br>
Schreibt Extraktionsdaten einer einzelnen Extraktion in eine einzelne Datei in Google Cloud Storage.

**Split**<br>
Schreibt Extraktionsdaten einer einzelnen Extraktion in mehrere Dateien in Google Cloud Storage. Jeder Dateiname wird angehängt durch *_part[nnn]*. <br> Im Falle von csv-Dateien wird die Dateigröße durch den Wert bestimmt, der in *Max. CSV file size* steht.

**Max. CSV file size** <br>
Maximale Größe einer im Google Cloud Storage-Konto gespeicherten csv-Datei. 

{: .box-note }
**Hinweis:** Die Option *Max. CSV file size* gilt nicht für gzip-Dateien. Die Größe einer gezippten Datei kann nicht im Voraus bestimmt werden.
