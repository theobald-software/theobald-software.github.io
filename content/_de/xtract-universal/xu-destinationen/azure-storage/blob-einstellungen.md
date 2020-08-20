---
ref: xu-azure-blob-storage-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: azure-storage
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=blob-einstellungen
---
### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![xu-azure-blob-con-03](/img/content/xu-azure-blob-con-03.png){:class="img-responsive"}

{% include _content/de/xu-specific/xu-destinations/general/file-name.md %}

### Column name style
{% include _content/de/xu-specific/xu-destinations/general/column-name-style.md %}

{% include _content/de/xu-specific/xu-destinations/general/date-conversion.md %}

#### Compression

**None**<br>
Die Daten werden unkomprimiert übertragen und als csv-Datei abgelegt.

**gzip**<br>
Die Daten werden komprimiert übertragen und  als gz-Datei abgelegt. 

#### Blob Type

**Append Blob**<br>
Erstelt ein [Append Blob](https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs#about-append-blobs).


**Block Blob**<br>
Erstellt ein [Block Blob](https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs#about-block-blobs).

{: .box-note }
**Note:** Für beide Dateitypen wird beim Hochladen nach Azure-Storage automatisch ein MD5-Hash erstellt.

#### Folder Path

Wenn die Extraktionsdaten in einen Ordner innerhalb eines Azure-Blob-Containers geschrieben werden sollen, geben Sie hier einen Ordnernamen ohne Schrägstriche ein.
Unterordner werden ebenfalls unterstützt und können wie folgt eingegeben werden: `[ordner]/[unterordner_1]/[unterordner_2]/…`


### CSV File Splitting

**No Splitting**<br>
Schreibt die Extraktionsdaten einer einzelnen Extraktion in eine einzelne Datei im Azure-Storage.

**Split**<br>
Schreibt die Extraktionsdaten einer einzelnen Extraktion in mehrere Dateien im Azure-Storage. 
Dabei wird an jeden Dateinamen *_part[nnn]* angehägt. 
Beim Verwenden von .csv-Dateien, bestimmt der Wert eingestellt in *Max. CSV file size* die Größe der Dateien. 

**Max. CSV file size** <br>
Maximalgröße der .csv-Datei gespeichert im Azure-Storage. 

{: .box-note }
**Note:** Die Option *Max. CSV file size* wird nicht von gzip-Dateien unterstützt.
Die Größe von durch gzip-Verfahren komprimierten Dateien kann nicht im Voraus bestimmt werden.


