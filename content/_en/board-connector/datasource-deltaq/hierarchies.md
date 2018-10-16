---
ref: bc-datasource-deltaq-05
layout: page
title: Hierarchies
description: Hierarchies
product: board-connector
parent: datasource-deltaq
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=hierarchies
---

In the following example, the download has been made from the hierarchical data in the data source 0COSTCENTER_0101_HIER. Select this data source by using the search help (first binocular button in the editor).

![DeltaQ-Hierarchies-01](/img/content/DeltaQ-Hierarchies-01.png){:class="img-responsive"}

In the following window you then select a hierarchy (in this example 0001C2000).

![DeltaQ-Hierarchies-02](/img/content/DeltaQ-Hierarchies-02.png){:class="img-responsive"}

In the next mask, you’ll then see the structure that is the same in every hierarchy. Now set the logical target system and make the technical settings for the RFC destination on the top right. The language of the hierarchy also has to be set. Click *Settings* to do this.

![DeltaQ-Hierarchies-03](/img/content/DeltaQ-Hierarchies-03.png){:class="img-responsive"}

Unlike attributes and transactions, hierarchies do not have to be activated. A local test can immediately be displayed. Our local test outputs the following result:

![DeltaQ-Hierarchies-04](/img/content/DeltaQ-Hierarchies-04.png){:class="img-responsive"}

The NodeID is the sequential number of a node in the hierarchy. NodeName is the actual value. The hierarchy can be reconstructed with the ParentID and ChildID. The texts can be found in the back-end area.

