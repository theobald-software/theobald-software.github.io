---
ref: xu-destinations-12
layout: page
title: Webservice - OData
description: OData
product: xtract-universal
parent: xu-destinationen
childidentifier: odata-atom
permalink: /:collection/:path
weight: 14
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=odata-atom
---

Die Destination HTTP - OData  liefert die extrahierten Daten in einem generischen Format über einen HTTP-OData-Stream bzw. Webservice. 
### OData Destination hinzufügen
1. Navigieren Sie im Hauptfenster des Designers zu **[Server] > [Manage Destinations]**. Das Fenster "Manage Destinations" wird geöffnet.
2. Klicken Sie auf **[Add]**, um eine neue Destination hinzuzufügen. Das Fenster "Destination Details" wird geöffnet.
3. Wähen Sie die Destination *OData Destination* aus der Drop-Down-Liste aus.
4. Klicken Sie auf **[OK]** zum Bestätigen. 

Folgende getesteten Programme können Daten über OData erfolgreich konsumieren: <br>
- PowerPivot / Excel
- Datazen
- [Tableau Software](./tableau) 

### Einstellungen von OData-Destination
Folgende Einstellungen können für das Ziel OData Atom definiert werden.
![Odata-Atom-Destination-Details](/img/content/Odata-Atom-Destination-Details.png){:class="img-responsive"}
### Column name style
{% include _content/de/xu-specific/xu-destinations/general/column-name-style.md %}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
