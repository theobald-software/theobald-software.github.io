---
ref: xu-parquet-01
layout: page
title: Einstellungen
description: Einstellungen der Zielumgebung
product: xtract-universal
parent: parquet
permalink: /:collection/:path
weight: 3
lang: de_DE
---

### Destination Settings öffnen

1. Wählen Sie eine bestehende Extraktion oder legen Sie eine neue an (siehe auch [Erste Schritte mit Xtract Universal](../../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Parquet-Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![XU_flatfile_JSON_Destination](/img/content/xu/parquet/parquet_destination_settings.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}
{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}        
{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

### Existing files
Die Option *Existing files* ist mit der Option *Directory* (Verzeichnis) verbunden, die in den [Destination Details](../parquet#destination-details---destinationendetails) definiert ist.<br>
**Replace file** - ersetzt die vorhandene Datei in dem Verzeichnis, in dem die Parquet-Datei gespeichert ist.<br>
**Abort extraction** - bricht die Extraktion ab, wenn die Parquet-Datei bereits im definierten Verzeichnis existiert.
