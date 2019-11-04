---
ref: xu-pbi_connector-07
layout: page
title: Troubleshooting
description: Troubleshooting
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 8
lang: en_GB
old_url:
---
Xtract Universal extractions that return a large data volume can lead to multiple calls from Power BI to Xtract Universal. This results in multiple entries for the same extraction in the Xtract Universal extraction log.

To prevent this kind of behaviour, please increase the Power BI cache.
![Power BI cache](/img/content/XU_PBI_PBI_Cache.png){:class="img-responsive"}