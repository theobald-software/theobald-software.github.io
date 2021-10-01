---
ref: destinations-11
layout: page
title: Webservice - CSV
description: CSV (via HTTP)
product: xtract-universal
parent: destinationen
permalink: /:collection/:path
weight: 12
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=csv-via-http
---

Die Destination *HTTP - CSV*  liefert die extrahierten Daten im generischen CSV-Format über einen HTTP-Stream bzw. Webservice. 
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

****
## Weiterführende Links
- KNIME Integration via [SAP Reader (Theobald Software)](https://kb.theobald-software.com/xtract-universal/knime-integration-via-sap-reader)
- [Dynamic Runtime Parameter within KNIME Workflow](https://kb.theobald-software.com/xtract-universal/dynamic-runtime-paramater%20within-KNIME-workflow)

