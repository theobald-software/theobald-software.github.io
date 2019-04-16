---
ref: xu-pbi_connector-02
layout: page
title: Power BI service
description: PBI service
product: xtract-universal
parent: Power-BI-Connector-(beta)
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url:
---


### Requirements

For using the Power BI service you will need a [Power BI account](https://powerbi.microsoft.com/en-us/landing/signin/). Also, you need to [download](https://powerbi.microsoft.com/en-us/gateway/) the Power BI on-premises data gateway.

When using our Power BI custom connector please [configure](https://docs.microsoft.com/en-us/power-bi/service-gateway-custom-connectors) the on-premises data gateway **as well as** the Power BI service gateway to support custom data connectors. 

When using our Power Query M-script, not further configuration is required.
<br>


![datagw_custom_conn](/img/content/XU_PBI_datagateway_config.png){:class="img-responsive"}

<br>

![datagw_service_custom_conn](/img/content/XU_PBI_datagateway_service_config.png){:class="img-responsive"}

### Adding Xtract Universal as data source

![datagw_service_datasource](/img/content/XU_PBI_datagateway_service_datasource.png){:class="img-responsive"}

**Data Source Name**
A random name for your Xtract Universal Power BI data source.

**Data Source Type**
Select *Xtract Universal Extraction* from the drop down menu. If that entry is not visible, make sure the settings in the *Requirements* section above are correct.

**Data Source Information**
Type in the address of your on-premises Xtract Universal (web) server. 

**Authentication Method**
* *Anonymous*: Select if your Xtract Universal server settings don't require any authentication for running an extraction
* *Basic*: Select if your Xtract Universal server or extraction settings require SAP credentials for extraction execution. Enter your SAP credentials here.
* *Windows*: Select if you want to use [Single Sign On](../advanced-techniques/SAP-Single-Sign-On). Enter <domain>\<Windows AD user> in the *user* field and your Windows password in the *Password* field.

**Advanced settings**
Leave default.

<br>
When you click *Apply* You will get a *Connection Succesful* message if the data source has been setup correctly.
![datagw_service_datasource_successful](/img/content/XU_PBI_datagateway_service_datasource_successful.png){:class="img-responsive"}
