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

For installing the Power BI Custom Connector follow the steps under *Manul Setup* or *Automatic Setup*.

### Manual Setup 
When using *Power BI Desktop*:
1. Check if the directory *[Documents]\Power BI Desktop\Custom Connectors* exists.
2. Create this directory if it doesn't exist.
3. Open the *powerbi* folder located in the Xtract Univesal installation directory.
4. Copy the *XtractUniversalExtension.pqx* file to *[Documents]\Power BI Desktop\Custom Connectors*.
5. Restart Power BI.
6. Change the security level for [Data Extensions](https://docs.microsoft.com/en-us/power-bi/desktop-connector-extensibility#data-extension-security) in Power BI to *Allow any extension to be load without validation or warning*. <br>
Otherwise the *Xtract Universal* datasource will not be visible within Power BI.


![powerbi-datasource](/img/content/XU_pbi_connector_xu_datasouce.png){:class="img-responsive"}

### Automatic Setup
1. Open the *powerbi* folder located in the Xtract Univesal installation directory.
2. Run the *install-connector* PowerShell script. <br>
This script copies the *XtractUniversalExtension.pqx* file to the *[Documents]\Power BI Desktop\Custom Connectors* folder. The script creates the folder first if it doesn't exist.
3. Run the *trust-connector* PowerShell script. <br>
This script modifies the registry at HKLM:\SOFTWARE\Policies\Microsoft\Power BI Desktop\. The script adds or modifies the registry value *TrustedCertificateThumbprints* with the thumbprint of the *XtractUniversalExtension.pqx* file. This procedure follows Microsoft's recommendations for [trusting third-party connectors](https://docs.microsoft.com/en-us/power-bi/desktop-trusted-third-party-connectors).


### Connecting Power BI with Xtract Universal

1. Select Xtract Universal from the *Get Data* menu
2. Click on the *Connect* button.
3. Enter the URL of the Xtract Universal web server `<Protocol>://<HOST or IP address>:<Port>/`.
   ![powerbi-XU_URL](/img/content/XU_pbi_connector_XU_URL.png){:class="img-responsive"}

   When prompted for *Anonymous*, *Basic* or *Windows* authentication, follow the steps as outlined in [Single Sign On and SAP authentication](./pbi-SSO) 
   The Navigator window lists all extractions that are set to *Power BI Connector* destination in Xtract Universal. 
4. Select an extraction from the list. The preview data shows the actual SAP column headers and preview data (real data or dummy data, depending on the extraction type).
5. Click the *Load* button. This triggers an extraction in Xtract Universal and writes the extracted data to Power BI.

![powerbi-navigator](/img/content/XU_pbi_connector_navigator.png){:class="img-responsive"}

****
#### Related Links
- [Youtube Tutorial: Use your SAP data in Microsoft Power BI with Xtract Universal](https://www.youtube.com/watch?v=al1FOtJjVIM){:target="_blank"}