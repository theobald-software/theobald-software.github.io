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

In the following example, the download has been made from the hierarchical data in the data source 0Costcenter_0101_Hier. Select this data source by using the search help (first binocular button in the editor).

![DeltaQ-Hierarchy-001](/img/content/DeltaQ-Hierarchy-001.png){:class="img-responsive"}

In the following window you then select a hierarchy (in this example we've chosen 0001C2000).

![DeltaQ-Hierarchy-002](/img/content/DeltaQ-Hierarchy-002.png){:class="img-responsive"}

In the next mask, you'll then see the structure that is the same in every hierarchy. Now set the logical target system and make the technical settings for the RFC destination on the top right. The language of the hierarchy also has to be set. Click *Settings* to do this.

![DeltaQ-Hierarchy-003](/img/content/DeltaQ-Hierarchy-003.png){:class="img-responsive"}


Unlike attributes and transactions, hierarchies do not have to be activated. A preview can immediately be displayed. Our preview outputs the following result:

![DeltaQ-Hierarchy-004](/img/content/DeltaQ-Hierarchy-004.png){:class="img-responsive"}

The NodeID is the sequential number of a node in the hierarchy. NodeName is the actual value. The hierarchy can be reconstructed with the ParentID and ChildID. The texts can be found in the backend area.
