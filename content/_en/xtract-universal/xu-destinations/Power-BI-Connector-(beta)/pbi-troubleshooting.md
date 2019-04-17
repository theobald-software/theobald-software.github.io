---
ref: xu-pbi_connector-02
layout: page
title: Troubleshooting
description: Troubleshooting
product: xtract-universal
parent: Power-BI-Connector-(beta)
permalink: /:collection/:path
weight: 8
lang: en_GB
old_url:
---
Xtract Universal extractions that return a large data volume may lead to multiple calls from Power BI to Xtract Universal. This will result in multiple entries for the same extraction in the extraction log.

To prevent this kind of behaviour, please increase the Power BI cache.
![Power BI cache](/img/content/XU_PBI_PBI_Cache.png){:class="img-responsive"}