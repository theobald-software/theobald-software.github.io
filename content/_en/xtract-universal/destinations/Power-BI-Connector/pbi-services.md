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
### Prerequisites
The connection of the Power BI Service requires the following components:

- [Power BI Account](https://powerbi.microsoft.com/en-us/landing/signin/)
- [On-premises Data Gateway](https://powerbi.microsoft.com/en-us/gateway/)

### Setup On-premises Data Gateway

To set up the On-premises Data Gateway using the Power BI Custom Connector, follow the steps below.

{: .box-note }
**Note:** The connection to Xtract Universal can be created using Power Query M-script or Power BI Custom Connector. Using Power Query M-script does not require any further configuration.

1. Install the on-premises Data Gateway on the Xtract Universal application server. 2. configure the Data Gateway.
2. Configure the Data Gateway, see [Use the on-premises data gateway app](https://docs.microsoft.com/en-us/data-integration/gateway/service-gateway-app).
3. Switch to the *Connectors* tab and store the path to the Power BI Custom Connector, e.g. `C:\Program Files\XtractUniversal\powerbi`.<br> The *XtractUniversalExtension* should then be displayed as a Custom Data Connector.
![Data-Gateway Connectors](/img/content/xu/data-gateway-connectors.png){:class="img-responsive"}


### Add Xtract Universal as data source
The configured on-premises data gateway is then integrated into the Power BI service environment. A Data Source to the Xtract Universal server must then be set up.

1. Open the Power BI Service **Settings > Manage Gateways**.
2. Open the *GATEWAY CLUSTERS* menu using **[...]**. 
3. Create a data source with **[ADD DATA SOURCE]** (1).
![ADD DATA SOURCE](/img/content/xu/add-data-source.png){:class="img-responsive"}
4. Selection of the data source type *Xtract Universal Extraction*. 
![NEW DATA SOURCE](/img/content/xu/new-data-source.png){:class="img-responsive"}
5. Specify the Xtract Universal Server URL in the form `<protocol>://<HOST or IP address>:<port>/` e.g. `https://todd.theobald.local:8165/`.
6. Specify the authentication method, e.g. *Basic*, *Windows* or *Anonymous*. 
7. Confirm the entries with **[ADD]** (2).
![Configure DATA SOURCE](/img/content/xu/configure-data-source.png){:class="img-responsive"}

**Data Source Name**<br> Enter any name for the Xtract Universal Power BI data source.

**Data Source Type**<br> Select the *Xtract Universal Extraction* entry from the drop-down menu. 

{: .box-note }
**Note:** If the Xtract Universal entry is not available in the drop-down menu, check the configuration in the *Setup On-premises Data Gateway* section.

**Xtract Universal Server**<br> Specify the Xract Universal Server URL, see [Web Server](../server/server_settings#web-server).

**Authentication Method**<br> 
Selection of an authentication method, see [Single Sign On and SAP Authentication](./pbi-SSO):
- Basic
- Windows
- Anonymous

**Advanced settings**<br> Leave at default settings.

### Data Source Status
Check the data source status and other settings, e.g. **Schedules Refresh**.  
![DATA SOURCE Settings](/img/content/xu/data-source-settings.png){:class="img-responsive"}

****
#### Related Links:
- [What is an on-premises data gateway?](https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem)
- [Use custom data connectors with the on-premises data gateway](https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-custom-connectors)
- [Configure scheduled refresh](https://docs.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh)

