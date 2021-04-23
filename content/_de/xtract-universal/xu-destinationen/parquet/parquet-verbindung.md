---
ref: xu-parquet-01
layout: page
title: Verbindung
description: Verbindung
product: xtract-universal
parent: parquet
permalink: /:collection/:path
weight: 2
lang: de_DE
progressstate: 5
---

{% include _content/de/xu-specific/xu-destinations/general/connection.md %}	

### Destination Details
 
![JSON-Parquet-Destination-Details](/img/content/xu/parquet/parquet_destination_details.png){:class="img-responsive"}

**Output directory**<br>
Angabe eines vorhandenen Verzeichnisses, in das die Zieldateien abgelegt werden.

{: .box-note }
**Hinweis:** Das Ausfüllen des Feldes **Output directory** erstellt einen neuen Ordner, falls er nicht existiert. 

**Compatibability mode**<br>
Sie können zwischen *Pure* und *Spark* für den Kompatibilitätsmodus wählen. *Spark* unterstützt nicht die im Pure-Mode verwendeten Datentypen, daher müssen andere Datentypen verwendet werden.

### Überprüfen des Extraktionsergebnisses 

1. Überprüfen Sie das zuvor definierte Verzeichnis zum Speichern von Parquet Files.
2. Öffnen Sie die Parquet-Datei mit einem Editor Ihrer Wahl

