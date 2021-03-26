---
ref: xu-destinations-82
layout: page
title: Power BI Connector
description: Power BI Connector
product: xtract-universal
parent: xu-destinations
childidentifier: Power-BI-Connector
permalink: /:collection/:path
weight: 82
lang: en_GB
old_url: 
progressstate: 5
---
### Introduction

This section contains information on connecting Power BI and Xtract Universal via the *Power BI Connector* target environment of Xtract Universal. 

The target environment *Power BI Connector* offers two ways to connect Power BI with Xtract Universal:
- Power BI custom connector
- Generic Power Query M-script

![Power-BI-Connector-](/img/content/xu/PowerBI_Connector_Architecture_SSO.png){:class="img-responsive"}

### Supported Power BI environments

Xtract Universal supports the following environments:
- [Power BI Desktop](https://powerbi.microsoft.com/en-us/desktop/) via [Power BI Custom Connector](./pbi-custom-connector)
- [Power BI service](https://docs.microsoft.com/en-us/power-bi/power-bi-overview#the-parts-of-power-bi) via [Power BI on-premises data gateway](https://docs.microsoft.com/en-us/data-integration/gateway/service-gateway-onprem)
- [Power BI Report Server](https://docs.microsoft.com/en-us/power-bi/report-server/get-started) via [Power Query M-script](./pbi-script)


|                        | Custom Connector | M-script |
|------------------------|:-----------------:|:----------:|
| Power BI Desktop       |         X        |     X    |
| Power BI service       |         X        |     X    |
| Power BI Report Server |         -        |     X    |


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
