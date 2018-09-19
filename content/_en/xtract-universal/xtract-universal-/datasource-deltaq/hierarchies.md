---
layout: page
title: Hierarchies
description: Hierarchies
product: xtract-universal
parent: datasource-deltaq
permalink: /:collection/:path
weight: 7
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=hierarchies
---

In the following example, the download has been made from the hierarchical data in the data source 0COSTCENTER_0101_HIER. Select this data source by using the search help (first binocular button in the editor).

![Look-Up-Deltaq-Oltp-Source](/img/content/Look-Up-Deltaq-Oltp-Source.png){:class="img-responsive"}

In the following window you then select a hierarchy (in this example 0001C2000).

![Look-Up-Deltaq-Hierarchy-Details](/img/content/Look-Up-Deltaq-Hierarchy-Details.png){:class="img-responsive"}

In the next mask, you’ll then see the structure that is the same in every hierarchy. Now set the logical target system and make the technical settings for the RFC destination on the top right. The language of the hierarchy also has to be set. Click *Settings* to do this.

![Deltaq-Hierarchy-Selected](/img/content/Deltaq-Hierarchy-Selected.png){:class="img-responsive"}

Unlike attributes and transactions, hierarchies do not have to be activated. A local test can immediately be displayed. Our local test outputs the following result:

![Deltaq-Hierarchy-Preview](/img/content/Deltaq-Hierarchy-Preview.png){:class="img-responsive"}

The NodeID is the sequential number of a node in the hierarchy. NodeName is the actual value. The hierarchy can be reconstructed with the ParentID and ChildID. The texts can be found in the back-end area.

