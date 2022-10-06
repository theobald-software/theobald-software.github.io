---
ref: xfa-bwhier-define
layout: page
title: Defining a Hierarchy Extraction
description: Defining a BW Hierarchy Extraction
product: xtract-for-alteryx
parent: bwhierarchy
permalink: /:collection/:path
weight: 1
lang: en_GB
---
The following section shows how to use the Xtract Hierarchy component.<br>

{% include _content/en/bw-hierarchies/hierarchy-extraction-define.md %}

### Format and Preview Output
1. Click **[Extraction Settings]** to define the output format of the Hierarchy, see [Extraction Settings](./bwhier-settings).
2. Click **[Load live preview]** to display a live preview of the data without running an extraction.<br>
![Define-Data-Source-Hierarchy](/img/content/extractors.bwhier/Define-Data-Source-Hierarchy.png){:class="img-responsive"}
3. Optional: The default value for **Date To** is 99991231. To change the value, ....

#### Default Settings

The default output of the Xtract Hierarchy component contains the following columns:
- **NodeID:**
Unique node key.
- **ParentNodeID:**
Key for parent node.
- **FirstChildNodeID:**
Key for first child node.
- **NextNodeID:**
Key for next node in the same hierarchical level.
- **InfoObjectName:**
Name of InfoObject behind the corresponding node.
- **NodeName:**
The node’s (technical) name.
- **NodeText:** 
The description text of the node. This column is only created when the extraction setting **Fetch description texts** is active.<br>

The original Hierarchy PM_COUNTRY has the following format in SAP:<br>
![Hierarchy-Table-SAP](/img/content/Hierarchy-Table-Output.png){:class="img-responsive"}


****
#### Related Links
- [BW Hierarchy Settings](./bwhier-settings)
- [SAP Online Help - Uploading Hierarchies from Flat Files](https://help.sap.com/saphelp_scm700_ehp02/helpdata/en/fa/e92637c2cbf357e10000009b38f936/frameset.htm)
