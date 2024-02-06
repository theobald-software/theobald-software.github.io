---
ref: destinations-11
layout: page
title: HTTP - CSV
description: CSV (via HTTP)
product: xtract-universal
parent: destinationen
permalink: /:collection/:path
weight: 12
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=csv-via-http
---

Die Destination *HTTP-CSV*  liefert die extrahierten Daten im generischen CSV-Format über einen HTTP-Stream bzw. Webservice. 
CSV (via HTTP) wird von mehreren Produkten unterstützt. Die folgenden Produkte wurden getestet: Layer2, INFONEA und KNIME. 

## Verbindung

### Eine Destination hinzufügen

1. Navigieren Sie im Hauptfenster des Designers zu **Server > [Manage Destinations](./ziele-verwalten)**. Das Fenster "Manage Destination" wird geöffnet.
2. Klicken Sie auf **[Add]**, um eine neue Destination hinzufügen. Das Fenster "Destination Details" wird geöffnet.
3. Geben Sie einen **Namen** für die Destination ein.
4. Wählen Sie den Destinationstyp aus dem Dropdown-Menü aus.

### Destination Details 

![CSV-Destination-Details](/img/content/xu/CSV-Destination-Details.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/csv-settings.md %}														 

{% include _content/de/xu-specific/destinationen/general/convert-encoding.md %}	

## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen, siehe [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen).
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![XU_http-csv_Destination](/img/content/XU_http-csv_Destination.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}
{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

