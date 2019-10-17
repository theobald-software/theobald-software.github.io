---
ref: xu-pbi_connector-03
layout: page
title: Power BI custom connector
description: Connection in Power BI
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: 
---

### Setup 
Along with the *Power BI Connector* destination in Xtract Universal comes a custom extension file for Power BI . This file is named *XtractUniversalExtension.pqx* and can be found in the *powerbi* folder inside the installation directory of Xtract Universal. 

This connector has been developed following Microsoft's guidelines for [custom connectors in Power BI](https://docs.microsoft.com/en-US/power-bi/desktop-connector-extensibility). 

When using *Power BI Desktop* the .pqx file needs to be copied to *[Documents]\Power BI Desktop\Custom Connectors*. Please create this directory manually if it does not exist. After copying the file you may need to restart Power BI. <br>

Also, you need to change the security level for [Data Extensions](https://docs.microsoft.com/en-us/power-bi/desktop-connector-extensibility#data-extension-security) within Power BI to *Allow any extension to be load without validation or warning*. Otherwise the *Xtract Universal (beta)* datasource will not be visible within Power BI.

![powerbi-datasource](/img/content/XU_pbi_connector_xu_datasouce.png){:class="img-responsive"}

### Connecting Power BI with Xtract Universal

* Enter the URL of the Xtract Universal web server (that's the first part of the URL that is displayed in the web browser when you run an extraction in Xtract Universal and select *Run in Browser*)  
![powerbi-XU_URL](/img/content/XU_pbi_connector_XU_URL.jpg){:class="img-responsive"}

* See [Single Sign On and SAP authentication](./pbi-SSO) if you are prompted for *Anonymous*, *Basic* or *Windows* authentication.

* The Navigator window will display all extractions that have been set to *Power BI Connector (beta)* destination in Xtract Universal. The preview data displayed will show the actual SAP column headers and preview data (real data or dummy data, depending on the extraction type).

Loading the data will trigger an extraction in Xtract Universal and write the extracted data to Power BI.

![powerbi-navigator](/img/content/XU_pbi_connector_navigator.jpg){:class="img-responsive"}

