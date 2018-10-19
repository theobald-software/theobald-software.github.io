---
ref: bc-bapis-and-function-modules-04
layout: page
title: Tables
description: Tables
product: board-connector
parent: bapis-and-function-modules
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=bapi-tables
---

Tables can be entered in and extracted from the function module / BAPI. Therefore, there are two types of behavior for tables: Input Type and Output Type.

![BAPI-Table-01](/img/content/BAPI-Table-01.png){:class="img-responsive"}

The following options are possible:

**Skip**<br>
This simply means that the table is ignored.

**Static** (just for input type)<br>
This means that the table values are static and independent of all pipeline types. Use the Edit link to open a dialog to define static table values.

**Pipeline** (just for output type)<br>
This means that the table is exported and is available later as a data source.

The following screenshot shows the table IDRANGE, which is filled through the Input Type Static with static values. These values are passed to the BAPI later.

![BAPI-Table-02](/img/content/BAPI-Table-02.png){:class="img-responsive"}
![BAPI-Table-03](/img/content/BAPI-Table-03.png){:class="img-responsive"}

The following screenshot shows the Output Type Pipeline. The table ADDRESSDATA serves as a data provider.

![BAPI-Table-04](/img/content/BAPI-Table-04.png){:class="img-responsive"}
