---
layout: page
title: Part 2 - Linking a BEx query with a Hierarchy
description: Part 2 - Linking a BEx query with a Hierarchy
product: xtract-universal
parent: tableau
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=part_2___linking_a_bex_query_with_a_hierarchy
---

With BW hierarchies, the different values of a Characteristc InfoObject are assigned to different hierarchy nodes. Those values of a characteristic, that were not assigned to a hierarchy node will be grouped under the so called "Not Assigned" node.

![BExQuery_notAssigned_node](/img/content/BExQuery_notAssigned_node.jpg){:class="img-responsive"}

When linking a BEx Query with a BW Hierarchy in Tableau the "Not Assigned" node is displayed depending on which data source (BWCube extract or BW Hierarchy extract) acts as the so called primary source.

The primary source is defined as follows in [Tableau's Online Help]():<br>
"The primary data source is the connection that you first use in the view. After you drag fields to the view, the primary data source is marked with a blue check mark."

The "Not Assigned" node is only displayed if the BEx Query extract acts as the primary data source. In Tableau the "Not Assigend" node is labelled "Null".

![Tableau_Relationship_with_Null_Node](/img/content/Tableau_Relationship_with_Null_Node.jpg){:class="img-responsive"}

If the BW Hierarchy extract is acting as primary data source, the "Null" node is not displayed.

![Tableau_Relationship_without_Null_Node](/img/content/Tableau_Relationship_without_Null_Node.jpg){:class="img-responsive"}

