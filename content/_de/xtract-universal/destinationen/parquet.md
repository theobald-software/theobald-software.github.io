---
ref: destinations-80
layout: page
title: Parquet
description: Parquet
product: xtract-universal
parent: destinationen
childidentifier: parquet
permalink: /:collection/:path
weight: 80
lang: de_DE
---

## Verbindung

Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in eine Parquet-Zieldatenbank.

{% include _content/de/xu-specific/destinationen/general/connection.md %}	

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

## Einstellungen

### Destination Settings öffnen

1. Wählen Sie eine bestehende Extraktion oder legen Sie eine neue an (siehe auch [Erste Schritte mit Xtract Universal](../../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Parquet-Destination definiert werden. 

![XU_flatfile_JSON_Destination](/img/content/xu/parquet/parquet_destination_settings.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}
{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}        
{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

### Existing files
Die Option *Existing files* ist mit der Option *Directory* (Verzeichnis) verbunden, die in den [Destination Details](../parquet#destination-details---destinationendetails) definiert ist.<br>
**Replace file** - ersetzt die vorhandene Datei in dem Verzeichnis, in dem die Parquet-Datei gespeichert ist.<br>
**Abort extraction** - bricht die Extraktion ab, wenn die Parquet-Datei bereits im definierten Verzeichnis existiert.
