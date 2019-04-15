---
ref: xu-destinations-50
layout: page
title: Power BI Connector (beta)
description: Power BI Connector (beta)
product: xtract-universal
parent: xu-destinations
childidentifier: Power-BI-Connector-(beta)
permalink: /:collection/:path
weight: 16
lang: en_GB
old_url: 
---

#### *Attention: This functionality is still in <span style="color:red">beta</span>.*<br>

### Introduction

In this section we describe connectivity between Power BI and Xtract Universal through Xtract Universal's *Power BI Connector* destination. <br>

The *Power BI Connector* destination offers two ways for connecting Power BI to Xtract Universal:

1. Power BI custom connector
2. Generic Power Query M-script

### Power BI custom connector and Power Query M-script

The Power BI custom connector will add an Xtract Universal data source to Power BI's list of data connectors. This allows convenient and guided selection of Xtract Universal extractions from within Power BI. <br>

In addition to this custom connector, we deliver a Power Query M-script for those scenarios where the use of a custom connector is not possible. <br>

In both cases Xtract Universal extractions will be triggered from Power BI and extracted data will be directly loaded into Power BI for further processing.<br>

### Supported Power BI environments

The Xtract Universal Power BI custom connector supports *Power BI Desktop* and the [Power BI service](https://docs.microsoft.com/en-us/power-bi/power-bi-overview#the-parts-of-power-bi) (through [Power BI on-premises data gateway](https://docs.microsoft.com/en-us/power-bi/service-gateway-onprem)). In addition to these environments, the Xtract Universal Power Query M-script supports the [Power BI Report Server](https://docs.microsoft.com/en-us/power-bi/report-server/get-started).<br>


|                        | Custom Connector | M-script |
|------------------------|------------------|----------|
| Power BI Desktop       |         X        |     X    |
| Power BI service       |         X        |     X    |
| Power BI Report Server |         -        |     X    |







{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
