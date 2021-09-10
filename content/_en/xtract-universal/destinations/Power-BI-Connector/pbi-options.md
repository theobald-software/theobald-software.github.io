---
ref: xu-pbi_connector-07
layout: page
title: Power BI Options
description: Options
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 8
lang: en_GB
old_url:
---

Set the following settings in Power BI:

1. Navigate to **File > Options and settings > Options** to open the option menu.
2. Check the box **(Not Recommended) Allow any extension to load without validation or warning** in the tab *Security*.<br>
![Power BI cache](/img/content/XU_PBI_PBI_Security.png){:class="img-responsive"}
3. Optional: Increase the Power BI cache in the tab *Load Data* to prevent multiple calls from Power BI to Xtract Universal when extracting large data volumes.
Multiple calls to Xtract Universal result in in multiple entries for the same extraction in the Xtract Universal extraction log.<br>
![Power BI cache](/img/content/XU_PBI_PBI_Cache.png){:class="img-responsive"}