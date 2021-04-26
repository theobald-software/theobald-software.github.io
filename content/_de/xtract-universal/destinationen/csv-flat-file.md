---
ref: xu-destinations-14
layout: page
title: Flat File - CSV
description: Flat File - CSV
product: xtract-universal
parent: destinationen
childidentifier: csv-flat-file
permalink: /:collection/:path
weight: 10
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=zielumgebungen
---

Die Destination *Flat File* erzeugt eine generische CSV-Datei. 

### Eine Destination hinzufügen

1. Navigieren Sie im Hauptfenster des Designers zu **Server > [Manage Destinations](./ziele-verwalten)**. Das Fenster "Manage Destination" wird geöffnet.
2. Klicken Sie auf **[Add]**, um eine neue Destination hinzufügen. Das Fenster "Destination Details" wird geöffnet.
3. Geben Sie einen **Namen** für die Destination ein.
4. Wählen Sie den Destinationstyp aus dem Dropdown-Menü aus.


### Destination Details - Destinationsdetails
![CSV-Flat-Destination-Details](/img/content/xu/CSV-Flat-Destination-Details.png){:class="img-responsive"}


**File output path**<br>
Geben Sie das Verzeichnis an, in dem die Flat Files gespeichert werden sollen. 

{: .box-note }
**Hinweis:** Das Ausfüllen des Feldes **Directory** erstellt einen neuen Ordner, falls er nicht existiert.

{% include _content/de/xu-specific/xu-destinations/general/csv-settings.md %}														 

{% include _content/de/xu-specific/xu-destinations/general/convert-encoding.md %}	

### Column encryption
{% include _content/de/xu-specific/xu-destinations/general/column-encryption.md %}

