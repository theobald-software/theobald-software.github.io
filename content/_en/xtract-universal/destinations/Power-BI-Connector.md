---
ref: destinations-82
layout: page
title: Power BI Connector
description: Power BI Connector
product: xtract-universal
parent: destinations
childidentifier: Power-BI-Connector
permalink: /:collection/:path
weight: 82
lang: en_GB
old_url: 
progressstate: 5
---
## Introduction

This section contains information on connecting Power BI and Xtract Universal via the *Power BI Connector* target environment of Xtract Universal. 

The target environment *Power BI Connector* offers two ways to connect Power BI with Xtract Universal:
- Power BI custom connector
- Generic Power Query M-script

![Power-BI-Connector-](/img/content/xu/PowerBI_Connector_Architecture_SSO.png){:class="img-responsive"}

### Supported Power BI environments

Xtract Universal supports the following environments:
- [Power BI Desktop](https://powerbi.microsoft.com/en-us/desktop/) via [Power BI Custom Connector](#pbi-custom-connector)
- [Power BI service](https://docs.microsoft.com/en-us/power-bi/power-bi-overview#the-parts-of-power-bi) via [Power BI on-premises data gateway](https://docs.microsoft.com/en-us/data-integration/gateway/service-gateway-onprem)
- [Power BI Report Server](https://docs.microsoft.com/en-us/power-bi/report-server/get-started) via [Power Query M-script](#pbi-script)


|                        | Custom Connector | M-script |
|------------------------|:-----------------:|:----------:|
| Power BI Desktop       |         X        |     X    |
| Power BI service       |         X        |     X    |
| Power BI Report Server |         -        |     X    |


## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	 

### Destination Details
To use the Power BI Connector destination, no further settings have to be made.

![Power BI Connector (beta) destination](/img/content/XU_pbi_connector_connection.png){:class="img-responsive"}
The extractions are now visible in the Power BI Custom Connector.

## Settings

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction)).
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

![pbi-configuration](/img/content/XU_pbi_connector_destination.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}
{% include _content/en/xu-specific/destinations/general/date-conversion.md %}


## Power BI Custom Connector

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
This script modifies the registry at `HKLM:\SOFTWARE\Policies\Microsoft\Power BI Desktop\`. The script adds or modifies the registry value *TrustedCertificateThumbprints* with the thumbprint of the *XtractUniversalExtension.pqx* file. This procedure follows Microsoft's recommendations for [trusting third-party connectors](https://docs.microsoft.com/en-us/power-bi/desktop-trusted-third-party-connectors).


### Connecting Power BI with Xtract Universal

1. Select Xtract Universal from the *Get Data* menu
2. Click on the *Connect* button.
3. Enter the URL of the Xtract Universal web server `<Protocol>://<HOST or IP address>:<Port>/`.
   ![powerbi-XU_URL](/img/content/XU_pbi_connector_XU_URL.png){:class="img-responsive"}

   When prompted for *Anonymous*, *Basic* or *Windows* authentication, follow the steps as outlined in [Single Sign On and SAP authentication](#pbi-SSO) 
   The Navigator window lists all extractions that are set to *Power BI Connector* destination in Xtract Universal. 
4. Select an extraction from the list. The preview data shows the actual SAP column headers and preview data (real data or dummy data, depending on the extraction type).
5. Click the *Load* button. This triggers an extraction in Xtract Universal and writes the extracted data to Power BI.

![powerbi-navigator](/img/content/XU_pbi_connector_navigator.png){:class="img-responsive"}


## Power Query M-script

Instead of the Power BI Custom Connector, you can also use the Custom Power Query M-script to connect Power BI to Xtract Universal. 

The Power BI Query M-script is located inside the Xtract Universal installation directory: `C:\Program Files\XtractUniversal\powerbi\loading_script.txt`.

{: .box-warning }
**Warning! Use of the Custom Connector & Query M-script**<br>
Power Query M-script and Power BI Custom Connector do not belong together.<br>
Use either the Power Query M-script **or** the Power BI Custom Connector.

### Set up the Power Query M-script in Power BI

{: .box-note }
**Note:** Only use the extractions with the [Power BI Connector destination](#pbi-connection).

1. Create a new Power BI report using **Home > Get Data > Blank Query** as data source.
2. Open the **[Advanced Editor]**.
![Advanced Editor](/img/content/pbi_advanced_editor.png){:class="img-responsive"}
3. Open the Xtract Universal *loading_script* in any text editor.
4. Copy the complete content into the *Advanced Editor* window in Power BI.
5. Change the values for **ExtractionName** and the **ServerURL** to match the names of your Xtract Universal extraction and web server (1).
![PowerQueryEditor](/img/content/XU_PBI_PowerQueryEditor.png){:class="img-responsive"}
6. Confirm the script by clicking **[Done]** (2) within *Advanced Editor*.}
7. Click on **{Close & Apply]**.
8. When prompted for *Anonymous*, *Basic* or *Windows* authentication, follow the steps as outlined in [Single Sign On and SAP authentication](#pbi-SSO) 

## Power BI Service

### Prerequisites
The connection of the Power BI Service requires the following components:

- [Power BI Account](https://powerbi.microsoft.com/en-us/landing/signin/)
- [on-premisess Data Gateway](https://powerbi.microsoft.com/en-us/gateway/)

### Setup on-premisess Data Gateway

To set up the on-premisess Data Gateway using the Power BI Custom Connector, follow the steps below.

{: .box-note }
**Note:** The connection to Xtract Universal can be created using Power Query M-script or Power BI Custom Connector. Using Power Query M-script does not require further configuration.

1. Install the on-premisess Data Gateway on the Xtract Universal application server.
2. Configure the Data Gateway, see [Use the on-premises data gateway app](https://docs.microsoft.com/en-us/data-integration/gateway/service-gateway-app).
3. Switch to the *Connectors* tab and define the path to the Power BI Custom Connector, e.g. `C:\Program Files\XtractUniversal\powerbi`.<br> The *XtractUniversalExtension* will then be displayed as a Custom Data Connector.
![Data-Gateway Connectors](/img/content/xu/data-gateway-connectors.png){:class="img-responsive"}


### Add Xtract Universal as a Data Source
The configured on-premisess Data Gateway is then integrated into the Power BI service environment. A Data Source to the Xtract Universal server must then be set up.

1. Open the Power BI Service menu **Settings > Manage Gateways**.
2. Open the *GATEWAY CLUSTERS* menu using **[...]**. 
3. Create a data source with **[ADD DATA SOURCE]** (1).
![ADD DATA SOURCE](/img/content/xu/add-data-source.png){:class="img-responsive"}
4. Select the Data Source Type *Xtract Universal Extraction*. 
![NEW DATA SOURCE](/img/content/xu/new-data-source.png){:class="img-responsive"}
5. Enter the Xtract Universal Server URL in the format `<protocol>://<HOST or IP address>:<port>/` e.g., `https://todd.theobald.local:8165/`.
6. Specify the Authentication Method e.g., *Basic*, *Windows* or *Anonymous*. 
7. Confirm the entries with **[ADD]** (2).
![Configure DATA SOURCE](/img/content/xu/configure-data-source.png){:class="img-responsive"}

**Data Source Name**<br> Enter any name for the Xtract Universal Power BI data source.

**Data Source Type**<br> Select *Xtract Universal Extraction* from the drop-down menu. 

{: .box-note }
**Note:** If Xtract Universal is not available in the drop-down menu, check the configuration in the [Setup on-premisess Data Gateway](#setup-on-premisess-data-gateway) section.

**Xtract Universal Server**<br> Enter the Xract Universal Server URL, see [Web Server](../server/server-settings#web-server).

**Authentication Method**<br> 
Selection of an authentication method, see [Single Sign On and SAP Authentication](#pbi-SSO):
- Basic
- Windows
- Anonymous

**Advanced settings**<br> Leave at default settings.

### Data Source Status
Check the data source status and other settings e.g., **Schedules Refresh**.  
![DATA SOURCE Settings](/img/content/xu/data-source-settings.png){:class="img-responsive"}

## Single Sign On and SAP authentication

When setting up the Xtract Universal data source in Power BI for the first time, you are prompted for one of the following auhtorization methods. Select an auhtorization method according to your landscape:

* *Anonymous*: Select this option if the Xtract Universal server settings don't require any authentication for running an extraction.
* *Basic*: Select this option if the *Require SAP Credentials to be explicitly supplied for execution* checkbox is marked in the [SAP Source Settings](../introduction/sap-connection#authentication) in Xtract Universal. Enter your SAP credentials in the respective input fields.
* *Windows*: Select this option if you want to use [SSO](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/sap-single-sign-on) or if you have restricted access to extractions in the Xtract Universal server settings. Enter \<domain>\\\<Windows AD user> in the *user* field and your Windows password in the *Password* field.

Xtract Universal and the *Power BI Connector* destination support single sign on (SSO) to SAP. If SSO is set up correctly, the Windows credentials of the executing Power BI user are mapped to this user's SAP credentials. This leverages the user's SAP authorizations and Power BI will only show data that matches the user's SAP authorizations.

![XU_PBI_EN_SSO](/img/content/XU_PBI_EN_SSO.png){:class="img-responsive"}

## Parameterizing

The Power BI Custom Connector exposes Xtract Universal custom parameters in Power BI Desktop.
Using the Power BI Custom Connector Xtract Universal custom parameters can be populated with values when executing an extraction from Power BI Desktop.

### Power BI Custom Connector 
When using the Power BI Custom Connector, XU custom parameters can be populated when setting up the connection in Power BI.

You created an extraction containing XU custom parameters. The list of custom parameters of the selected extraction is displayed under the *Custom* tab in the *Run Extraction* window. 
In the depicted example the list contains one entry *BUKRS_low*. <br>

![XU-Custom-Parameter-exposed](/img/content/XU_PBI_XU_Parameters_1.png){:class="img-responsive"}

The list of XU custom parameters is exposed in Power BI Desktop when creating a report based on the selected extraction. The exposed XU parameters can be filled with values from within Power BI Desktop. 
![XU-Custom-Parameter-exposed](/img/content/XU_PBI_XU_Parameters_2.png){:class="img-responsive"}

### Power Query M-script

1. Open the Power Query M-script.
2. Navigate to "Parameters" and replace the values with actual values or with parameters defined in Power BI.

```
    // Record containing run parameters with corresponding values, can be empty
    // Usage: <XU parameter name>= <value or Power BI parameter>
    // MUST NOT use "name" as a record field here
    Parameters = [ /*rows= "300", myparameter= SomePowerBIParameter*/ ],
```

Replacement with actual values:
![XU-Custom-Parameter-exposed](/img/content/XU_PBI_XU_Parameters_3.png){:class="img-responsive"}


Replacement with Power BI parameters:
![XU-Custom-Parameter-exposed](/img/content/XU_PBI_XU_Parameters_4.png){:class="img-responsive"}

![XU-Custom-Parameter-exposed](/img/content/XU_PBI_XU_Parameters_5.png){:class="img-responsive"}

## Power BI Options and Settings

Set the following settings in Power BI:

1. Navigate to **File > Options and settings > Options** to open the option menu.
2. Check the box **(Not Recommended) Allow any extension to load without validation or warning** in the tab *Security*.<br>
![Power BI cache](/img/content/XU_PBI_PBI_Security.png){:class="img-responsive"}
3. Optional: Increase the Power BI cache in the tab *Load Data* to prevent multiple calls from Power BI to Xtract Universal when extracting large data volumes.
Multiple calls to Xtract Universal result in in multiple entries for the same extraction in the Xtract Universal extraction log.<br>
![Power BI cache](/img/content/XU_PBI_PBI_Cache.png){:class="img-responsive"}

****
## Related Links
- [Youtube Tutorial: Use your SAP data in Microsoft Power BI with Xtract Universal](https://www.youtube.com/watch?v=al1FOtJjVIM){:target="_blank"}
- [What is an on-premises data gateway?](https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem)
- [Use custom data connectors with the on-premises data gateway](https://docs.microsoft.com/en-us/power-bi/connect-data/service-gateway-custom-connectors)
- [Configure scheduled refresh](https://docs.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh)
- [Parameters in Power BI Desktop](https://docs.microsoft.com/en-us/power-query/power-query-query-parameters)
