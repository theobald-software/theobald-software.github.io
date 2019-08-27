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

{% include _content/de/xu-specific/xu-destinations/general/table-name.md %}

{% include _content/de/xu-specific/xu-destinations/general/column-name-style.md %}

{% include _content/de/xu-specific/xu-destinations/general/date-conversion.md %}

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

