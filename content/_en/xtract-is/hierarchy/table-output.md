---
ref: xi-hierarchy-02
layout: page
title: Table Output
description: Table Output
product: xtract-is
parent: hierarchy
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=table-output
---
Compared to other source components, the output of hierarchy components is fixed. It always has the same columns for every hierarchy, as described in the following:

**NodeID**<br>
Unique node key.

**ParentNodeID**<br>
Key for parent node.

**FirstChildNodeID**<br>
Key for first child.

**NextNodeID**<br>
Key for next node in the same hierarchical level.

**InfoObjectName**<br>
Name of infoObject behind the corresponding node.

**NodeName**<br>
The node's (technical) name.

**NodeText**<br>
The descriptive text in the respective logon language (only when FetchText is set to true in the settings).

![Hierarchy-Table-Export](/img/content/Hierarchy-Table-Export.png){:class="img-responsive" }