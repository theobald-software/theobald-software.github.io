---
ref: xu-destinations-12
layout: page
title: Web Service - OData
description: OData
product: xtract-universal
parent: xu-destinations
childidentifier: odata
permalink: /:collection/:path
weight: 12
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=odata-atom
---

The destination HTTP - OData delivers the extracted data in a generic format via an HTTP OData stream or web service. 
### Adding OData Destination
1. In the main window of the Designer, navigate to **[Server] > [Manage Destinations]**. The window "Manage Destinations" opens.
2. Click **[Add]** to add a new destination. The window "Destination Details" opens.
3. Select the *OData* destination from the drop-down list.
4. Click **[OK]** to confirm.

The following tested programs can successfully consume data via OData: <br>
- PowerPivot (Excel)
- Datazen
- [Tableau](./tableau)
  
### OData destination settings
The following settings can be defined for the OData destination. 
![Odata-Atom-Destination-Details](/img/content/Odata-Atom-Destination-Details.png){:class="img-responsive"}
### Column name style
{% include _content/en/xu-specific/xu-destinations/general/column-name-style.md %}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}