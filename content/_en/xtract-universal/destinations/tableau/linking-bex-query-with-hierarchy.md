---
ref: xu-tableau-03
layout: page
title: Linking a BEx query with a Hierarchy
description: Linking a BEx query with a Hierarchy
product: xtract-universal
parent: tableau
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=linking-bex-query-with-hierarchy
---

This articles shows how to link BEx Query and BW hierarchy extractions in the tableau destination.
By linking the extractions, you can blend data from both data sources in a single sheet. 

### Prerequisites in Xtract Universal

1. Create a BEx Query extraction as described in [Define a BW Cube Extraction](../../bwcube/bw-cube-extraction-define). 
<!--- ![XU-Tableau-BExQuery](/img/content/XU-Tableau-BExQuery.png){:class="img-responsive"} -->
2. Check the General Settings of the BEx Query and activate *Use Description for Pipeline* and *Use formatted Values*.
![XU-Tableau-BExQuery-Settings](/img/content/XU-Tableau-BExQuery-Settings.png){:class="img-responsive"}
3. Create a BW Hierarchy extraction as described in [Define a Hierarchy Extraction](../../bw-hierarchies/hierarchy-extraction-define). 
<!--- ![XU-Tableau-Hierarchy](/img/content/XU-Tableau-Hierarchy.png){:class="img-responsive"} -->
4. Check the General Settings and set **representation** to *Natural*:
![XU-Tableau-Hierarchy-Settings](/img/content/XU-Tableau-Hierarchy-Settings.png){:class="img-responsive"}


### Create a Relationship in Tableau

1. Load both extractions into Tableau (1).
![Tableau-BExQuery-Datasource](/img/content/Tableau-BExQuery-Datasource.png){:class="img-responsive"}
2. Create a relationship between the data sources by dragging the sheets into the canvas (2). The window "Edit Relationships" opens.
3. Select *Node Name* as the field. Select *Sold to party* as the field of .
![Tableau-Edit-Relationships](/img/content/Tableau-Edit-Relationships.png){:class="img-responsive"}
4. Close "Edit Relationships" and switch to the Worksheet view (3).

The data sources are now linked and data from both data sources can be blended in a single sheet. 
<!--- ![Tableau-Linked-Data-Sources](/img/content/Tableau-Linked-Data-Sources.png){:class="img-responsive"}-->

### "Not Assigned" Nodes

In BW Hierarchies, the values that are not assigned to a hierarchy node are gathered under the "Not Assigned" node.

In Tableau the "Not Assigend" node is labelled "Null" and is only displayed if the BEx Query extraction acts as the primary data source. 
If the BW Hierarchy extraction is acts as primary data source, the "Null" node is not displayed.
<!---![Tableau_Relationship_with_Null_Node](/img/content/Tableau_Relationship_with_Null_Node.png){:class="img-responsive"} -->
<!---![Tableau_Relationship_without_Null_Node](/img/content/Tableau_Relationship_without_Null_Node.png){:class="img-responsive"} -->

#### Related Links
- [How to Create Relationships in Tableau](https://help.tableau.com/current/pro/desktop/en-us/relate_tables.htm#create-a-relationship)
- [Tutorial: Relationships in Tableau](https://www.tableau.com/learn/tutorials/on-demand/relationships)
