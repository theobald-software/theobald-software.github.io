---
ref: xu-azure-blob-storage-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: azure-storage
permalink: /:collection/:path
weight: 3
progressstate: 5
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

{% include _content/de/xu-specific/destinationen/general/file-name.md %}

{: .box-note }
**Hinweis:** Wenn der Name eines Objekts nicht mit einem Buchstaben beginnt, wird 'x' als Präfix ergänzt, z.B. wird das Objekt `_namespace_tabname.csv` zu `x_namespace_tabname.csv`, wenn es auf die Destination hochgeladen wird.
Damit wird die Kompatibilität zu Azure Data Factory, Hadoop und Spark sichergestellt, die mit Buchstaben beginnende Objektnamen voraussetzen oder die nicht alphabetischen Zeichen besondere Bedeutungen zuweisen.


<!-- ### Column name style -->
{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}
<!-- ### Date Conversion -->
{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}


### Blob Type

**Append Blob**<br>
Erstelt ein [Append Blob](https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs#about-append-blobs).


**Block Blob**<br>
Erstellt ein [Block Blob](https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-block-blobs--append-blobs--and-page-blobs#about-block-blobs).

{: .box-note }
**Note:** Für beide Dateitypen wird beim Hochladen nach Azure-Storage automatisch ein MD5-Hash erstellt.

### Folder

Wenn die Extraktionsdaten in einen Ordner innerhalb eines Azure-Blob-Containers geschrieben werden sollen, geben Sie hier einen Ordnernamen ohne Schrägstriche ein: `[Ordner]` <br>
Unterordner werden ebenfalls unterstützt und können wie folgt eingegeben werden: `[ordner]/[unterordner_1]/[unterordner_2]/…`

Anstatt eines festen Verzeichnisses, kann der Verzeichnispfad mithilfe von [Skript-Ausdrücken](./../../fortgeschrittene-techniken/script-ausdruecke#definierte-eigenschaften) definiert werden. Hierbei wird der Verzeichnispfad dynamisch beim Ausführen der Extraktion ermittelt. <br>

### Compression

**None**<br>
Die Daten werden unkomprimiert übertragen und als csv-Datei abgelegt.

**gzip**<br>
Die Daten werden komprimiert übertragen und  als gz-Datei abgelegt. 


### File Splitting

**File Splitting**<br>

Schreibt die Extraktionsdaten einer einzelnen Extraktion in mehrere Dateien im Azure-Storage. 
Dabei wird an jeden Dateinamen *_part[nnn]* angehägt. 

**Max. file size** <br>
Der Wert eingestellt in *Max. file size* bestimmt die Maximalgröße der Datei gespeichert im Azure-Storage. 

{: .box-note }
**Note:** Die Option *Max. file size* wird nicht von gzip-Dateien unterstützt.
Die Größe von durch gzip-Verfahren komprimierten Dateien kann nicht im Voraus bestimmt werden.


