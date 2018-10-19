---
ref: xu-tableau-03
layout: page
title: Linking a BEx query with a Hierarchy
description: Linking a BEx query with a Hierarchy
product: xtract-universal
parent: tableau
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=linking-bex-query-with-hierarchy
---

In this section we will extract a BEx query and a BW hierarchy and create a relationship to link both data sources.

**Step 1**: Create an BEx query extraction. 

![XU-Tableau-BExQuery](/img/content/XU-Tableau-BExQuery.jpg){:class="img-responsive"}

Check the General Settings:

![XU-Tableau-BExQuery-Settings](/img/content/XU-Tableau-BExQuery-Settings.jpg){:class="img-responsive"}

For more information refer to Define a [BW Cube Extraction](). 

**Step 2**: Create a BW hierarchy extraction. 

![XU-Tableau-Hierarchy](/img/content/XU-Tableau-Hierarchy.jpg){:class="img-responsive"}

Check the General Settings to get a *Natural* representation of the BW hierarchy:

![XU-Tableau-Hierarchy-Settings](/img/content/XU-Tableau-Hierarchy-Settings.jpg){:class="img-responsive"}

For more information refer to [Define a Hierarchy Extraction](../../bw-hierarchies/hierarchy-extraction-define).

**Step 3**: Load both extractions into Tableau and create a relation between them. 

![Tableau-BExQuery-Datasource](/img/content/Tableau-BExQuery-Datasource.jpg){:class="img-responsive"}

![Tableau-BWHierarchy-Datasource](/img/content/Tableau-BWHierarchy-Datasource.jpg){:class="img-responsive"}

Let's create a relationship between the data sources linking the fields *Sold to party key* (bexquery) to *Node Name* (bwhierarchy).<br> 
Select the menu *Data -> Edit Relationships*. 
Select *Custom* and Click on *Add*. 
Select *Node Name* as the primary field. Select *Sold to party Key* as the secondary field.
Click OK. 

![Tableau-Edit-Relationships](/img/content/Tableau-Edit-Relationships.jpg){:class="img-responsive"}

The data sources are now linked and you can blend data from both data sources on a single sheet. 

![Tableau-Linked-Data-Sources](/img/content/Tableau-Linked-Data-Sources.jpg){:class="img-responsive"}

For more information about defining relationships refer to [Tableau Online Help](https://www.tableau.com/support/help).