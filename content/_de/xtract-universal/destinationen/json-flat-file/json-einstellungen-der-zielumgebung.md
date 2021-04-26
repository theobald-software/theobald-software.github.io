---
ref: xu-json-flat-file-01
layout: page
title: Destinationseinstellungen
description: Einstellungen der Zielumgebung
product: xtract-universal
parent: json-flat-file
permalink: /:collection/:path
weight: 1
lang: de_DE
---

### Destination Settings öffnen

1. Wählen Sie eine bestehende Extraktion oder legen Sie eine neue an  (siehe auch [Erste Schritte mit Xtract Universal](../../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die JSON-Flat-File-Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen
Das Fenster "Destination Settings" besteht aus den folgenden Unterabschnitten:
- File Name
- Column Name Style
- Date Conversion
- Existing files

![XU_flatfile_JSON_Destination](/img/content/xu/json/XU_flatfile_JSON_Destination.png){:class="img-responsive"}

{% include _content/de/xu-specific/xu-destinations/general/file-name.md %}
{% include _content/de/xu-specific/xu-destinations/general/column-name-style.md %}        
{% include _content/de/xu-specific/xu-destinations/general/date-conversion.md %}

### Existing files
Die Option *Existing files* ist mit der Option *Directory* (Verzeichnis) verbunden, die in den [Destination Details](../json-flat-file#destination-details---destinationsdetails) definiert ist.<br>
**Replace file** - ersetzt die vorhandene Datei in dem Verzeichnis, in dem die JSON-Datei gespeichert ist.<br>
**Abort extraction** - bricht die Extraktion ab, wenn die JSON-Datei bereits im definierten Verzeichnis existiert.
