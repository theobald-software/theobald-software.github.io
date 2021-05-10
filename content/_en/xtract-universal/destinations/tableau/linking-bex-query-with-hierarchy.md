---
ref: xu-tableau-03
layout: page
title: Linking a BEx query with a Hierarchy
description: Linking a BEx query with a Hierarchy
product: xtract-universal
parent: tableau
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=linking-bex-query-with-hierarchy
---

In this section we will extract a BEx query and a BW hierarchy and create a relationship to link both data sources.

### Step 1: Create an BEx query extraction. 

![XU-Tableau-BExQuery](/img/content/XU-Tableau-BExQuery.png){:class="img-responsive"}

Check the General Settings:

![XU-Tableau-BExQuery-Settings](/img/content/XU-Tableau-BExQuery-Settings.png){:class="img-responsive"}

For more information refer to Define a [BW Cube Extraction](). 

### Step 2: Create a BW hierarchy extraction. 

![XU-Tableau-Hierarchy](/img/content/XU-Tableau-Hierarchy.png){:class="img-responsive"}

Check the General Settings to get a *Natural* representation of the BW hierarchy:

![XU-Tableau-Hierarchy-Settings](/img/content/XU-Tableau-Hierarchy-Settings.png){:class="img-responsive"}

For more information refer to [Define a Hierarchy Extraction](../../bw-hierarchies/hierarchy-extraction-define).

### Step 3: Create a relation

Load both extractions into Tableau and create a relation between them.
![Tableau-BExQuery-Datasource](/img/content/Tableau-BExQuery-Datasource.png){:class="img-responsive"}

![Tableau-BWHierarchy-Datasource](/img/content/Tableau-BWHierarchy-Datasource.png){:class="img-responsive"}

Let's create a relationship between the data sources linking the fields *Sold to party key* (bexquery) to *Node Name* (bwhierarchy).<br> 
Select the menu *Data -> Edit Relationships*.<br>
Select *Custom* and Click on *Add*.<br>
Select *Node Name* as the primary field. Select *Sold to party Key* as the secondary field.<br>
Click OK. 

![Tableau-Edit-Relationships](/img/content/Tableau-Edit-Relationships.png){:class="img-responsive"}

The data sources are now linked and you can blend data from both data sources on a single sheet. 

![Tableau-Linked-Data-Sources](/img/content/Tableau-Linked-Data-Sources.png){:class="img-responsive"}

For more information about defining relationships refer to [Tableau Online Help](https://www.tableau.com/support/help).

### "Not Assigned" Nodes
With BW hierarchies, the different values of a Characteristc InfoObject are assigned to different hierarchy nodes. Those values of a characteristic, that were not assigned to a hierarchy node will be grouped under the so called "Not Assigned" node.

![BExQuery_notAssigned_node](/img/content/BExQuery_notAssigned_node.png){:class="img-responsive"}

When linking a BEx Query with a BW Hierarchy in Tableau the "Not Assigned" node is displayed depending on which data source (BWCube extract or BW Hierarchy extract) acts as the so called primary source.

The primary source is defined as follows in Tableau's Online Help:<br>
"The primary data source is the connection that you first use in the view. After you drag fields to the view, the primary data source is marked with a blue check mark."

The "Not Assigned" node is only displayed if the BEx Query extract acts as the primary data source. In Tableau the "Not Assigend" node is labelled "Null".

![Tableau_Relationship_with_Null_Node](/img/content/Tableau_Relationship_with_Null_Node.png){:class="img-responsive"}

If the BW Hierarchy extract is acting as primary data source, the "Null" node is not displayed.

![Tableau_Relationship_without_Null_Node](/img/content/Tableau_Relationship_without_Null_Node.png){:class="img-responsive"}

