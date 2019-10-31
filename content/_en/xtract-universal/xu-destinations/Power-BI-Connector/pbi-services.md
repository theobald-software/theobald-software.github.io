---
ref: xu-pbi_connector-05
layout: page
title: Power BI service
description: PBI service
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url:
---


### Requirements

For using the Power BI service you require:
* a [Power BI account](https://powerbi.microsoft.com/en-us/landing/signin/). 
* a [Power BI on-premises data gateway](https://powerbi.microsoft.com/en-us/gateway/).

Connection from Power BI service to Xtract Universal is possible via Power BI custom connector **or** Power Query M-script.

When using the Power BI custom connector, proceed as follows:
1. Configure the [on-premises data gateway](https://docs.microsoft.com/en-us/power-bi/service-gateway-custom-connectors).
2. Configure the Power BI service gateway to support custom data connectors. 


![datagw_custom_conn](/img/content/XU_PBI_datagateway_config.png){:class="img-responsive"}
---
<br>

![datagw_service_custom_conn](/img/content/XU_PBI_datagateway_service_config.png){:class="img-responsive"}

When using the Power Query M-script, no further configuration is required.
<br>

### Adding Xtract Universal as data source

![datagw_service_datasource](/img/content/XU_PBI_datagateway_service_datasource.png){:class="img-responsive"}

**Data Source Name**: Enter a random name for your Xtract Universal Power BI data source.

**Data Source Type**: Select *Xtract Universal Extraction* from the drop down menu. 
<br> If this entry is not visible, make sure the settings in the section *Requirements*, at the top of the page, are correct.

**Xtract Universal Server**: Type in the address of your on-premises Xtract Universal (web) server. 

**Authentication Method**: see [Single Sign On and SAP authentication](./pbi-SSO)

**Advanced settings**: Leave default.

<br>
After filling the fields with the correct information, click on *Apply* button.
A *Connection Succesful* message is displayed, if the data source is setup correctly.
<br>
![datagw_service_datasource_successful](/img/content/XU_PBI_datagateway_service_datasource_successful.png){:class="img-responsive"}