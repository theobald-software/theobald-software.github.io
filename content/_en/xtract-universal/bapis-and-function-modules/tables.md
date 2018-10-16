---
ref: xu-bapis-function-04
layout: page
title: Tables
description: Tables
product: xtract-universal
parent: bapis-and-function-modules
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=tables
---

Tables can be entered in and extracted from the function module / BAPI. Therefore, there are two types of behavior for tables: Input Type and Output Type.

![Bapi-Table-Type](/img/content/Bapi-Table-Type.png){:class="img-responsive"}

The following options are possible:

**Skip**<br>
This simply means that the table is ignored.

**Static** (just for input type)<br>
This means that the table values are static and independent of all pipeline types. Use the Edit link to open a dialog to define static table values.

**Pipeline** (just for output type)<br>
This means that the table is exported and is available later as a data source.

The following screenshot shows the table IDRANGE, which is filled through the Input Type Static with static values. These values are passed to the BAPI later.

![Bapi-Table-Static-Input](/img/content/Bapi-Table-Static-Input.png){:class="img-responsive"}
![Bapi-Table-Edit](/img/content/Bapi-Table-Edit.png){:class="img-responsive"}

The following screenshot shows the Output Type Pipeline. The table ADDRESSDATA serves as a data provider.

![Bapi-Table-Output-Pipeline](/img/content/Bapi-Table-Output-Pipeline.png){:class="img-responsive"}
