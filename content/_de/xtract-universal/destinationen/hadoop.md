---
ref: destinations-35
layout: page
title: Hadoop
description: Hadoop
product: xtract-universal
parent: destinationen
permalink: /:collection/:path
weight: 35
lang: de_DE
progressstate: 5
---

Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in den Cloud-Speicher [Amazon S3](https://aws.amazon.com/de/s3/).

## Voraussetzungen

- Hadoop-Benutzer mit Schreibrechten


## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	 

### Destination Details

![XU_Hadoop_DestinationDetails](/img/content/xu/hadoop/hadoop-destination-details.png){:class="img-responsive"}

### Hadoop Settings

#### HDFS Web API

**Web Hdfs URL**<br>

**User name**<br>
Option zur Authentifizierung gegenüber Amazon AWS. Über das Identity and Access Management ([IAM](https://console.aws.amazon.com/iam/home#/home)) können Sie die notwendige Werte ermitteln.<br>
Nähere Informationen finden Sie in der [AWS Dokumentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).

**Connect**<br>
Klicken Sie auf **[Connect]**, nachdem Sie die Adresse der Web API und den Benutzer eingegeben haben, um zu prüfen ob eine Verbindung hergestellt werden kann.


### File Format

**File type**<br>
Wählen Sie das gewünschte Dateiformat zwischen *CSV*, *Parquet* und *Json*.

![XU_Hadoop_DestinationDetails2](/img/content/xu/hadoop/hadoop-destination-details2.png){:class="img-responsive"}

#### CVS Settings - Einstellungen
Die *CSV* Einstellungen entsprechen denen der allgemeinen [Flat File CSV Einstellungen](./csv-flat-file).

#### Parquet Settings - Einstellungen

**Compatibility mode**<br>
Sie können zwischen *Pure* und *Spark* für den Kompatibilitätsmodus wählen.
Spark unterstützt nicht die im Pure-Mode verwendeten Datentypen, daher müssen andere Datentypen verwendet werden.

| SAP | Pure | Spark |
|------|-------------|-------|
| INT1 | UINT_8 | INT16 |
| TIMS | TIME_MILLIS | UTF8 |

#### Json Settings - Einstellungen

Um Daten im json-Format zu schreiben, sind keine weiteren Einstellungen nötig.


## Einstellungen
### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![XU_Hadoop_DestinationEinstellungen](/img/content/xu/hadoop/hadoop-destination-settings.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}

{: .box-note }
**Hinweis:** Wenn der Name eines Objekts nicht mit einem Buchstaben beginnt, wird 'x' als Präfix ergänzt, z.B. wird das Objekt `_namespace_tabname.csv` zu `x_namespace_tabname.csv`, wenn es auf die Destination hochgeladen wird.
Damit wird die Kompatibilität zu Azure Data Factory, Hadoop und Spark sichergestellt, die mit Buchstaben beginnende Objektnamen voraussetzen oder die nicht alphabetischen Zeichen besondere Bedeutungen zuweisen.

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

### Hadoop Remote Folder

Geben Sie hier einen Ordnernamen ohne Schrägstriche ein, wenn die Extraktion in einen Ordner innerhalb eines S3 Buckets extrahiert werden soll.<br>
Unterordner werden ebenfalls unterstützt und können wie folgt eingegeben werden:`Ordner/Unterordner1/Unterordner2/`<br>

Anstatt eines festen Verzeichnisses, kann der Verzeichnispfad mithilfe von [Skript-Ausdrücken](../fortgeschrittene-techniken/script-ausdruecke#skript-ausdrücke-als-dynamische-ordnerpfade-verwenden) definiert werden. 
Hierbei wird der Verzeichnispfad dynamisch beim Ausführen der Extraktion ermittelt.

