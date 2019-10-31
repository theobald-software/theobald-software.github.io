---
ref: xu-pbi_connector-03
layout: page
title: Power BI Custom Connector
description: Connection in Power BI
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: 
---


The *Power BI Connector* destination in Xtract Universal works in combination with a custom extension file for Power BI. This file is named *XtractUniversalExtension.pqx*. This file can be found in the *powerbi* folder inside the installation directory of Xtract Universal. 

The Power BI Custom Connector was developed following Microsoft's guidelines for [custom connectors in Power BI](https://docs.microsoft.com/en-US/power-bi/desktop-connector-extensibility). 

### Setup 

When using *Power BI Desktop*:
1. Check if the directory *[Documents]\Power BI Desktop\Custom Connectors* exists.
2. Create this directory if it doesn't exist.
3. Copy the .pqx file to *[Documents]\Power BI Desktop\Custom Connectors*.
4. Restart Power BI. <br>
5. Change the security level for [Data Extensions](https://docs.microsoft.com/en-us/power-bi/desktop-connector-extensibility#data-extension-security) in Power BI to *Allow any extension to be load without validation or warning*. Otherwise the *Xtract Universal* datasource will not be visible within Power BI.

![powerbi-datasource](/img/content/XU_pbi_connector_xu_datasouce.png){:class="img-responsive"}

### Connecting Power BI with Xtract Universal

1. Select Xtract Universal from the *Get Data* menu
2. Click on the *Connect* button.
3. Enter the URL of the Xtract Universal web server   
![powerbi-XU_URL](/img/content/XU_pbi_connector_XU_URL.jpg){:class="img-responsive"}

When prompted for *Anonymous*, *Basic* or *Windows* authentication, follow the steps as outlined in [Single Sign On and SAP authentication](./pbi-SSO) 

The Navigator window lists all extractions that are set to *Power BI Connector* destination in Xtract Universal. 
5. Select an extraction from the list. The preview data shows the actual SAP column headers and preview data (real data or dummy data, depending on the extraction type).

6. Click on the *Load* button. This triggers an extraction in Xtract Universal and writes the extracted data to Power BI.

![powerbi-navigator](/img/content/XU_pbi_connector_navigator.jpg){:class="img-responsive"}

