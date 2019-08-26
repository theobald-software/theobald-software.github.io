---
ref: xu-azure-blob-storage-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: azure_blob_storage
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=blob-einstellungen
---

Wenn Sie auf die **Destination** Schaltfläche klicken, können Sie extraktionsspezifische Einstellungen bezüglich des Ziels festlegen.

![xu-azure-blob-con-03](/img/content/xu-azure-blob-con-03.png){:class="img-responsive"}

#### Table Name

bestimmt den Namen der Zieltabelle. Sie haben die folgenden Optionen:
- **Same as name of SAP object**: Name des SAP-Objekts übernehmen
- **Same as name of extraction**: Name der Extraktion übernehmen
- **Custom**: Hier können Sie einen eigenen Namen definieren.  

- **Append timestamp**: fügt den aktuellen Zeitstempel im Format [_YYYY_MM_DD_hh_mm_ss_fff] dem Dateinamen der Extraktion hinzu.

#### Column Name Style

Definiert den Spaltennamen. Folgende Optionen sind verfügbar: 

![Ex-Spec-Settings-Makt-ColumnName](/img/content/column_name_style_options.png){:class="img-responsive"}

**Code**: Der technische Spaltenname aus SAP wird als Spaltenname verwendet, z.B. MAKTX.<br>
**PrefixedCode**: Der technische Name der Tabelle wird mit dem Tilde Zeichen und dem entsprechenden Spaltennamen verbunden, z. B. T001W~MANDT<br>
**CodeAndText**: Der technische Name und die Beschreibung der Spalte aus SAP werden mit einem Unterstrich verbunden als Spaltennamen verwendet, z.B. MAKTX_Material Description (Short Text).<br>
**TextAndCode**: Die Beschreibung und der technische Name der Spalte SAP werden mit einem Unterstrich verbunden als Spaltennamen verwendet, z.B. Material Description (Short Text)_MAKTX.

#### Date conversion

**Convert date strings**<br>
Konvertiert das zeichenartige SAP-Datum (YYYYMMDD, z.B. 19900101) zu einem formatierten Datum (YYYY-MM-DD, z.B. 1990-01-01). Im Datenziel hat das SAP-Datum keinen String-Datentyp sondern einen echten Datumstyp.

**Convert invalid dates to**<br>
Falls ein SAP-Datum nicht in ein gültiges Datum konvertiert werden kann, wird dieser Standard-Datumswert verwendet.<br>
ungültige Wert wird dann in das eingegebene Datum konvertiert. NULL wird als Wert unterstützt.

Bei der Konvertierung eines ungültigen SAP-Datums werden zuerst die beiden Sonderfälle 00000000 und 9999XXXX überprüft.

**Convert 00000000 to**<br>
Konvertiert das SAP-Datum 00000000 zu diesem Wert.

**Convert 9999XXXX to**<br>
Konvertiert das SAP-Datum 9999XXXX zu diesem Wert.

#### Compression

**None**<br>
Die Daten werden unkomprimiert übertragen und als csv-Datei abgelegt.

**gzip**<br>
Die Daten werden komprimiert übertragen und  als gz-Datei abgelegt. 

#### Blob Type

**Append Blob**<br>
Bestehend aus Blöcken, analog zu Blob Type, und sind optimiert für Anhängevorgänge.

**Block Blob**<br>
Text- und Binärdaten bestehend aus Datenblöcken, die einzeln verwaltet werden können.



Nach der erfolgreichen Extraktion finden Sie die Daten im Azure BLOB Storage.

![azure-blob-file-gz](/img/content/azure-blob-file-gz.png){:class="img-responsive"}

