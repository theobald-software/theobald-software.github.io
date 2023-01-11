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

Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in [Hadoop](https://hadoop.apache.org/).

## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	 

### Destination Details

![XU_Hadoop_DestinationDetails](/img/content/xu/hadoop/hadoop-destination-details.png){:class="img-responsive"}

### Hadoop Settings

#### HDFS Web API

**Web Hdfs URL**<br>
Geben Sie die URL der REST API an. Die URL enthält das Präfix `/webhdfs/v1/` und das folgende Format:
`http://[host]:[port]/webhdfs/v1/[path]` <br>
Für nähere Informationen zu Hdfs URLs, siehe [WebHDFS REST API: FileSystem URIs vs HTTP URLs](http://hadoop.apache.org/docs/r3.3.1/hadoop-project-dist/hadoop-hdfs/WebHDFS.html#FileSystem_URIs_vs_HTTP_URLs).

**User name**<br>
Geben Sie einen Hadoop-Benutzer mit Schreibrechten an. 
Wenn kein Benutzer eingetragen wird, wird der Standard-Benutzer *dr.who* verwendet.

**Connect**<br>
Klicken Sie auf **[Connect]**, nachdem Sie die URL der Web API und den Benutzer eingetragen haben, um zu prüfen ob eine Verbindung hergestellt werden kann.


### File Format

**File type**<br>
Wählen Sie das gewünschte Dateiformat zwischen *CSV*, *Parquet* und *Json*.

![XU_Hadoop_DestinationDetails2](/img/content/xu/hadoop/hadoop-destination-details2.png){:class="img-responsive"}

#### CVS Settings - Einstellungen
Die *CSV* Einstellungen entsprechen denen der allgemeinen [Flat File CSV Einstellungen](./csv-flat-file).

#### Parquet Settings - Einstellungen

Die folgenden Kompatibilitätsmodi sind verfügbar:
- *Pure* 
- *Spark* 
- *BigQuery*

Spark unterstützt nicht die im Pure-Mode verwendeten Datentypen, daher müssen andere Datentypen verwendet werden. <br>
Sonderzeichen und Leerzeichen werden im Spark-Modus durch einen Unterstrich `_` ersetzt. 

| SAP | Pure / BigQuery | Spark |
|------|-------------|-------|-------|
| INT1 | UINT_8 | INT16 |
| TIMS | TIME_MILLIS | UTF8 |

#### Json Settings - Einstellungen

Um Daten im json-Format zu schreiben, sind keine weiteren Einstellungen nötig.


## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![XU_Hadoop_DestinationEinstellungen](/img/content/xu/hadoop/hadoop-destination-settings.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}

{: .box-note }
**Hinweis:** Wenn der Name eines Objekts nicht mit einem Buchstaben beginnt, wird 'x' als Präfix ergänzt, z.B. wird das Objekt `_namespace_tabname.csv` zu `x_namespace_tabname.csv`, wenn es auf die Destination hochgeladen wird.
Damit wird die Kompatibilität zu Azure Data Factory, Hadoop und Spark sichergestellt, die mit Buchstaben beginnende Objektnamen voraussetzen oder die nicht alphabetischen Zeichen besondere Bedeutungen zuweisen.

{% include _content/de/xu-specific/destinationen/general/file-name-script-expressions.md %}
{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}
{% include _content/de/xu-specific/destinationen/general/existing-files.md %}

{: .box-note }
**Hinweis:** Die Operation **Append results**, bei der Daten in einer Zieldatei ergänzt werden, funktioniert nur für csv-Dateien.

### Hadoop Remote Folder

Geben Sie den Namen des Ordners an, in den die Daten geschrieben werden sollen.<br>
Unterordner werden ebenfalls unterstützt und können wie folgt eingegeben werden:`Ordner/Unterordner1/Unterordner2/`.
Falls nicht vorhanden, wird ein neuer Ordner erstellt.
Wenn kein Ordner angegeben wird, werden die Daten in das root-Verzeichnis geschrieben.

{% include _content/de/xu-specific/destinationen/general/folder-script-expressions.md %}


*****
### Weierführende Links
- [Hadoop Documentation](http://hadoop.apache.org/docs/r3.3.1/index.html)
- [HDFS Users Guide](http://hadoop.apache.org/docs/r3.3.1/hadoop-project-dist/hadoop-hdfs/HdfsUserGuide.html)
