---
ref: destinations-40
layout: page
title: Huawei Cloud OBS (Preview)
description: Huawei Cloud OBS (Preview)
product: xtract-universal
parent: destinationen
permalink: /:collection/:path
weight: 40
lang: de_DE
progressstate: 5
---
Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in den Huawei Cloud Object Storage Service (OBS).

{: .box-warning }
**Warnung!** **Grundlegende Änderungen möglich** <br>
Die Komponente befindet sich in der Beta-Phase. Grundlegende Änderungen sind jederzeit möglich. 
Erstellen Sie regelmäßige Backups der Konfigurationsdateien, um bei Bedarf auf die vorige Version wechseln zu.


{: .box-warning }
**Warnung! Dateifragmente im Cloud-Speicher**<br>
Huawei Cloud OBS Destination verwendet Multipart-Upload. Das bedeutet, dass die Daten in Fragmenten hochgeladen werden, die am Ende der Extraktion in einer einzigen Datei zusammengeführt werden. 
Wenn eine Extraktion aufgrund von Verbindungsproblemen fehlschlägt, kann die Aufforderung zum Abbrechen des mehrteiligen Uploads fehlschlagen. 
In diesem Fall müssen die hochgeladenen Fragmente manuell gelöscht werden, siehe [Huawei Cloud Support: Deleting Fragments Directly](https://support.huaweicloud.com/intl/en-us/obs_faq/obs_faq_0046.html#section1). 


## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	 

### Destination Details

![huawei-destination-details](/img/content/xu/huawei-destination-details.png){:class="img-responsive"}


### Authentification (Authentifizierung)

**Access Key ID (AK)** <br>
Geben Sie den Zugangsschlüssel für das Huawei Cloud OBS-Konto ein.  Weitere Informationen zum Erstellen von Zugangsschlüsseln finden Sie unter [Huawei Cloud Support: Creating Access Keys (AK and SK)](https://support.huaweicloud.com/intl/en-us/clientogw-obs/obs_03_0405.html)
 
**Secret Access Key ID (SK)** <br>
Geben Sie den geheimen Zugangsschlüssel für das Huawei Cloud OBS-Konto ein. Weitere Informationen zum Erstellen von Zugangsschlüsseln finden Sie unter [Huawei Cloud Support: Creating Access Keys (AK and SK)](https://support.huaweicloud.com/intl/en-us/clientogw-obs/obs_03_0405.html)

**Region**<br>
Wählen Sie die Region des Datenspeichersystems.

**Connect** <br>
Klicken Sie auf **[Connect]**, um eine Verbindung zum Storage-Account herzustellen. 
Wenn die Verbindung erfolgreich ist, wird neben der Schaltfläche "Connected" angezeigt.

### Bucket

**Bucket**<br>
Diese Einstellung ist erst verfügbar, nachdem eine Verbindung zum Storage-Account hergestellt wurde.<br>
Wählen Sie einen Bucket. Die SAP-Daten werden in den ausgewählten Bucket extrahiert. 
Click ![refresh](/img/content/icons/refresh.png){:class="img-responsive" style="display:inline"} to refresh the list of available buckets.

### Misc

**Folder path** <br>
Option zur Erstellung einer Ordnerstruktur zur Dateispeicherung innerhalb des Containers. Mehr Details dazu finden Sie auch in [**Destination Settings > Folder Path**](#folder-path).. <br>
Um einen einzelnen Ordner zu erstellen, geben Sie einen Ordnernamen ohne Slashes ein: `[folder]`<br>
Unterordner werden unterstützt und können mit der folgenden Syntax definiert werden: `[folder]/[subfolder_1]/[subfolder_2]/[..]`

{% include _content/de/xu-specific/destinationen/general/folder-script-expressions.md %}

### File Format

**File type**<br>
Wählen Sie das gewünschte Dateiformat. Die folgenden Optionen sind möglich: *CSV*, *Parquet* und *JSON*.

![huawei-destination-details2](/img/content/xu/huawei-destination-details2.png){:class="img-responsive"}


#### CVS Settings

Die Einstellungen für *CSV* entsprechen den Einstellungen von [Flat File CSV](./csv-flat-file).

#### Parquet 

Die folgenden Kompatibilitätsmodi sind verfügbar:
- *Pure* 
- *Spark* 
- *BigQuery*

Spark unterstützt die im Pure Mode verwendeten Datentypen nicht, sodass andere Datentypen verwendet werden müssen. Sonderzeichen (z.B. ~) können in Spaltennamen verwendet werden, wenn die Option *Allow special characters in column name* aktiviert ist.<br>

![huawei-destination-details3](/img/content/xu/huawei-destination-details3.png){:class="img-responsive"}

<!--
In spark mode special characters and spaces are replaced with an underscore `_`. -->

| SAP | Pure / BigQuery | Spark |
|------|-------------|-------|-------|
| INT1 | UINT_8 | INT16 |
| TIMS | TIME_MILLIS | UTF8 |

### Retry- und Rollback-Funktion

<!---- The following section is copied 1:1 from Azure Storage --->

Die Retry- und Rollback-Funktionen sind eingebaute Wiederholungsmechanismen der Huawei Cloud OBS Destination, die automatisch aktiviert sind. 

Die Retry-Funktion verhindert, dass Extraktionen fehlschlagen wenn kurzzeitige Verbindungsunterbrechungen zu Huawei auftreten.


Sollte eine Ausnahme (Exception) ausgelöst werden, verfolgt Xtract Universal eine exponentielle Strategie der Wiederholversuche.
Das bedeutet, dass 7 Verbindungsversuche gestartet werden in einem Zeitraum von 140 Sekunden. 
Sollte in diesem Zeitraum keine Verbindung zustande kommen, wird die Extraktion abgebrochen.

Die Rollback-Funktion deckt Szenarien ab, bei denen eine Extraktion nicht wegen eines Verbindungsfehlers zu Huawei fehlschlägt, sondern z.B. wegen eines Verbindungsfehlers zu SAP.
In solchen Fällen versucht Xtract Universal alle Dateien aus dem Huawei Cloud Storage zu entfernen, die im Laufe der Extraktion erstellt wurden.


## Einstellungen

### Destination Settings öffnen
1. Eine bestehende Extraktion anlegen oder auswählen, siehe auch [Erste Schritte mit Xtract Universal](../destinationen/ziele-verwalten).
2. Klicken Sie auf**[Destination]**. Das Fenster “Destination Settings” wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden:  

### Destination Settings - Destinationseinstellungen

![huawei-destination-settings](/img/content/xu/huawei-destination-settings.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}

{: .box-note }
**Hinweis:** Wenn der Dateiname das Zeichen `/` enthält, wird es durch einen Unterstrich ersetzt.

{% include _content/de/xu-specific/destinationen/general/file-name-script-expressions.md %}

<!-- ### Column name style -->
{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}


<!-- ### Date Conversion -->
{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}


### Folder

Option zur Erstellung einer Ordnerstruktur zur Dateispeicherung innerhalb des Containers, siehe auch [Connection > Folder Path](#connection). <br>
Um einen einzelnen Ordner zu erstellen, geben Sie einen Ordnernamen ohne Slashes ein: `[folder]` <br>
Unterordner werden unterstützt und können mit der folgenden Syntax definiert werden: `[folder]/[subfolder_1]/[subfolder_2]/[..]`

{% include _content/de/xu-specific/destinationen/general/folder-script-expressions.md %}


{% include _content/de/xu-specific/destinationen/general/compression.md %}

{% include _content/de/xu-specific/destinationen/general/file-splitting.md %}
