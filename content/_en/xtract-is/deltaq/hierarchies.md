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

1. Look Up a Hierarchy, see [Defining an extractor](./extraction-define#l#look-up-extractors).<br>
Example: Data source *0COSTCENTER_0101_HIER*.
![DeltaQ-Hierarchy-001](/img/content/DeltaQ-Hierarchy-002.png){:class="img-responsive"}
2. In the editor "Look UP Hierarchy Details" select a **Hierarchy Name**.
Example: Hierarchy Name *0001C2000*. <br>
![DeltaQ-Hierarchy-002](/img/content/DeltaQ-Hierarchy-0022.png){:class="img-responsive"}
In main window "Extract SAP DataSources and Extractors" displays the structure that is the same in every Hierarchy. 
3. Optional: click on **[Extraction Settings]** to set the language of the Hierarchy.
4. Define the details of the extraction as shown in [Defining a deltaQ Extraction](./extraction-define#defining-a-deltaq-extraction).

### Preview Extraction
Click **[Run]** to display the **Run Extraction** window and enable the **Preview** runtime parameter
![DeltaQ-Hierarchy-004](/img/content/DeltaQ-Hierarchy-004.png){:class="img-responsive"}

**NodeID** is the sequential number of a node in the Hierarchy.<br>
**NodeName** is the actual value. <br>
The hierarchy can be reconstructed with the **ParentID** and **ChildID**.<br>
**Short/Medium/Long Text** can be found in the backend area.

{: .box-tip }
**Tip:** Unlike attributes and transactions, Hierarchies do not have to be activated.

