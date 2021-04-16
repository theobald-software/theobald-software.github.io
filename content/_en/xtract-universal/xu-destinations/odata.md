---
ref: xu-destinations-12
layout: page
title: Web Service - OData
description: OData
product: xtract-universal
parent: xu-destinations
childidentifier: odata
permalink: /:collection/:path
weight: 14
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=odata-atom
progressstate: 5
---

The destination HTTP - OData delivers the extracted data in a generic format via an HTTP OData stream or web service. 
### Adding OData Destination
1. To add a new destination, see [Managing Destinations](../managing-destinations)
2. Fill in **Name**.
3. Select the *OData* destination from the drop-down list.


The following tested programs can successfully consume data via OData: <br>
- PowerPivot (Excel)
- Datazen
- [Tableau](./tableau)
  
### OData destination settings
The following settings can be defined for the OData destination. 
![Odata-Atom-Destination-Details](/img/content/Odata-Atom-Destination-Details.png){:class="img-responsive"}


{% include _content/en/xu-specific/xu-destinations/general/column-name-style.md %}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}