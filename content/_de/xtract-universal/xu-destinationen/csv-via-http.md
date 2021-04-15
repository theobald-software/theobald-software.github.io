---
ref: xu-destinations-11
layout: page
title: Webservice - CSV
description: CSV (via HTTP)
product: xtract-universal
parent: xu-destinationen
permalink: /:collection/:path
weight: 12
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=csv-via-http
---

Die Destination *HTTP - CSV*  liefert die extrahierten Daten im generischen CSV-Format über einen HTTP-Stream bzw. Webservice. 

CSV (via HTTP) wird von mehreren Produkten unterstützt. Folgende Produkte wurden u.a. getestet: Layer2 und INFONEA. 

### HTTP - CSV Destination hinzufügen
1. Navigieren Sie im Hauptfenster des Designers zu **[Server] > [Manage Destinations]**. Das Fenster "Manage Destinations" wird geöffnet.
2. Klicken Sie auf **[Add]**, um eine neue Destination hinzuzufügen. Das Fenster "Destination Details" wird geöffnet.
3. Wähen Sie die Destination *HTTP - CSV* aus der Drop-Down-Liste aus.
4. Klicken Sie auf **[OK]** zum Bestätigen. 

### Destination Details - Destinationsdetails
Das Fenster "Destination Details" besteht aus vier Unterabschnitten:
- Name (Dateiname)
- Type (Typ der Destination)
- CSV Settings (s. u.)
- Convert / Encoding (s. u.)
![CSV-Destination-Details](/img/content/xu/CSV-Destination-Details.png){:class="img-responsive"}

{% include _content/de/xu-specific/xu-destinations/general/csv-settings.md %}														 

{% include _content/de/xu-specific/xu-destinations/general/convert-encoding.md %}	

****
#### Weiterführende Links
- [KNIME Integration via SAP Reader (Theobald Software)](https://kb.theobald-software.com/xtract-universal/knime-integration-via-sap-reader)

