---
ref: xi-q-delta-08
layout: page
title: Hierarchies
description: Hierarchies
product: xtract-is
parent: deltaq
permalink: /:collection/:path
weight: 8
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=hierarchies
---

### Select Data Source
As shown in [Defining an extractor](../deltaq/extractor-define), select in the editor "Look Up OLTP Source" by using the **[magnifying glass symbol]** an **OLTP Source Name**.
The download would be done frome the hierarchical data set the data source.

Example: Data source *0COSTCENTER_0101_HIER*.
![DeltaQ-Hierarchy-001](/img/content/DeltaQ-Hierarchy-001.png){:class="img-responsive"}

In the editor "Look UP Hierarchy Details" select a **Hierarchy Name**.
Example: *0001C2000*
![DeltaQ-Hierarchy-002](/img/content/DeltaQ-Hierarchy-002.png){:class="img-responsive"}


In main window "Define Data Source for DeltaQ Extraction" displays the structure that is the same in every hierarchy. See [Customizing Check](../deltaq/customizing-check).

1. Fill in the fields on the top right. Search for the settings from the drop-down menu by using the (magnifying glass symbol). The settings are defined in [SAP Customizing/DeltaQ Customizing](../sap-customizing/customizing-for-deltaq).
2. Click on **Settings** to set the language of the hierarchy.
![DeltaQ-Hierarchy-003](/img/content/DeltaQ-Hierarchy-003.png){:class="img-responsive"}

3. Click **[Local Test]** to display the results.
Unlike attributes and transactions, hierarchies do not have to be activated.
![DeltaQ-Hierarchy-004](/img/content/DeltaQ-Hierarchy-004.png){:class="img-responsive"}

**NodeID** is the sequential number of a node in the hierarchy.
**NodeName** is the actual value. The hierarchy can be reconstructed with the **ParentID** and **ChildID**.
**Short/Medium/Long Text** can be found in the backend area.
