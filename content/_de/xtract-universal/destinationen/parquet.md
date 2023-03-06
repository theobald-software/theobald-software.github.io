---
ref: destinations-80
layout: page
title: Flat File - Parquet
description: Parquet
product: xtract-universal
parent: destinationen
childidentifier: parquet
permalink: /:collection/:path
weight: 11
lang: de_DE
---

## Verbindung

Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in eine Parquet-Zieldatenbank.

{% include _content/de/xu-specific/destinationen/general/connection.md %}	

### Destination Details

![JSON-Parquet-Destination-Details](/img/content/xu/parquet/parquet_destination_details.png){:class="img-responsive"}

**Output directory**<br>
Geben Sie das Verzeichnis an, in dem die Flat Files gespeichert werden sollen. Wenn das Verzeichnis nicht existiert, wird es erstellt.

{: .box-note }
**Hinweis:** Um Flat-Files auf ein Netzlaufwerk zu schreiben, muss Folgendes gegeben sein: <br>
\- Das Verzeichnis in **File output path** muss im [UNC-Format](https://docs.microsoft.com/de-de/dotnet/standard/io/file-path-formats#unc-paths) angegeben sein, z.B. `\\Server2\Share\Test\`.<br>
\- Der Benutzer, unter dem der [Xtract Universal Dienst](../fortgeschrittene-techniken/service-account) läuft, muss Schreibrechte auf das Verzeichnis haben. 

**Compatibability mode**<br>
Sie können zwischen *Pure* und *Spark* für den Kompatibilitätsmodus wählen. 
*Spark* unterstützt nicht die im Pure-Mode verwendeten Datentypen, daher müssen andere Datentypen verwendet werden.
*BigQuery* formatiert Spaltennamen so, dass sie mit Google BigQuery kompatibel sind, siehe [BigQuery Documentation: Column Names](https://cloud.google.com/bigquery/docs/schemas?hl=en#column_names).


### Überprüfen des Extraktionsergebnisses 

1. Überprüfen Sie das zuvor definierte Verzeichnis zum Speichern von Parquet Files.
2. Öffnen Sie die Parquet-Datei mit einem Editor Ihrer Wahl

## Einstellungen

### Destination Settings öffnen

1. Wählen Sie eine bestehende Extraktion oder legen Sie eine neue an, siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen).
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

### Destination Settings - Destinationseinstellungen

Die folgenden Einstellungen können für die Parquet-Destination definiert werden. 

![XU_flatfile_JSON_Destination](/img/content/xu/parquet/parquet_destination_settings.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}
{% include _content/de/xu-specific/destinationen/general/file-name-script-expressions.md %}
{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}        
{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

### Existing files
Die Option *Existing files* ist mit der Option *Directory* (Verzeichnis) verbunden, die in den [Destination Details](#destination-details---destinationendetails) definiert ist.<br>
**Replace file** - ersetzt die vorhandene Datei in dem Verzeichnis, in dem die Parquet-Datei gespeichert ist.<br>
**Abort extraction** - bricht die Extraktion ab, wenn die Parquet-Datei bereits im definierten Verzeichnis existiert.
