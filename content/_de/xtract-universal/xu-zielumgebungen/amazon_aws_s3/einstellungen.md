---
ref: xu-amazon-aws-s3-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: amazon_aws_s3
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=einstellungen5
---
### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Table](../../erste-schritte-mit-table/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![XU_S3_DestinationEinstellungen](/img/content/XU_S3_DestinationEinstellungen.png){:class="img-responsive"}

{% include _content/de/xu-specific/xu-destinations/general/file-name.md %}

### Column name style
{% include _content/de/xu-specific/xu-destinations/general/column-name-style.md %}

{% include _content/de/xu-specific/xu-destinations/general/date-conversion.md %}


#### Folder Path

Geben Sie hier einen Ordnernamen ohne Schrägstriche ein, wenn die Extraktion in einen Ordner innerhalb eines S3 Buckets extrahiert werden soll.<br>
Unterordner werden ebenfalls unterstützt und können wie folgt eingegeben werden: Ordner/Unterordner1/Unterordner2/...

#### Compression

**None**<br>
Die Daten werden unkomprimiert übertragen und auf S3 als csv-Datei abgelegt.

**gzip**<br>
Die Daten werden [komprimiert](http://www.gzip.org/) übertragen und auf S3 als .gz-Datei abgelegt.