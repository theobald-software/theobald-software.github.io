---
ref: destinations-108
layout: page
title: SQL Server Reporting Services
description: SQL Server Reporting Services (SSRS)
product: xtract-universal
parent: destinations
childidentifier: ssrs
permalink: /:collection/:path
weight: 108
lang: en_GB
progressstate: 5
---

The following section describes the usage of Xtract Universal for SAP integration in SSRS.

## Requirements


To use the SSRS destination, you need the following components:

- Visual Studio 2017 or higher
- the [Microsoft Reporting Services Projects](https://marketplace.visualstudio.com/items?itemName=ProBITools.MicrosoftReportProjectsforVisualStudio) plugin (version 2.6.11 or higher) for Visual Studio.
- Power BI Report Server (January 2020 or later)
- Xtract Universal (version 4.29 or higher)

{: .box-note }
**Note:** The Power BI Report Builder is not supported.

## Installation

To use the SSRS destination, install the [Microsoft Reporting Services Projects](https://marketplace.visualstudio.com/items?itemName=ProBITools.MicrosoftReportProjectsforVisualStudio)
plugin in Visual Studio. After the installation is complete, close Visual Studio.

Microsoft SQL Server Reporting Services supports a wide variety of data sources out of the box.
To add Xtract Universal to the list of data sources, install the [Xtract Universal Data Extension](#installation-using-the-xtract-universal-data-extension) for Visual Studio **and** the Report Server.
The data extension must be installed on both environments to consume the data extracted by Xtract Universal, see graphic below:

![XU-Setup](/img/content/xu/ssrs/XUDataExtensionInstallation.png){:class="img-responsive" width="600px" }

The data extension is installed automatically when using the [Xtract Universal Setup](../introduction/installation-and-update).
To complete the installation close all Visual Studio windows.
 
 {: .box-warning }
**Warning!** Make sure to install the latest version of the *Microsoft Reporting Services Projects* plugin and Xtract Universal.  

After installation of `C:\Program Files\XtractUniversal\ssrs\SSRSDataExtensionSetup.exe` the setup creates the following entries and extensions in the Visual Studio installation directory:
- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\SSRS\XUDataExtension2020.05.dll`
- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\SSRS\Theobald.Common.dll`
- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\SSRS\Theobald.Distillery.Common.dll`
- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\SSRS\Theobald.Net.dll`
- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\SSRS\RSReportDesigner.config`

### Installation using the Xtract Universal Data Extension

To install the Xtract Universal extension on multiple environments without installing the Xtract Universal Designer, follow these steps:

1. Make sure the *Microsoft Reporting Services Projects* plugin for Visual Studio is already installed and activated. 
2. Close Visual Studio.
3. [Install Xtract Universal](../introduction/installation-and-update) on the environment on which the license runs.
4. After the installation is complete, navigate to the Xtract Universal directory e.g., `C:\Program files\Xtract Universal\`and copy the `\ssrs` folder from the directory to any environment on which Visual Studio is used to design reports or on which the Report Server runs.
5. Run *SSRSDataExtensionSetup.exe* as administrator to install the Xtract Universal Data Extension on all compatible versions of Visual Studio and/or Report Server found on the environment. 
6. After the installation on the Report Server is complete, restart the Report Server for the changes to take effect. 
You can restart the server in the Report Server Configuration Manager by clicking **[stop]** and then **[start]**.

To uninstall the Data Extension use the *uninstall.bat* file from the `\ssrs`folder in the Xtract universal directory.  

{: .box-note }
**Note:** If the *Reporting Services Projects* plugin for Visual Studio is updated, the Xtract Universal Data Extension won't be available anymore. The Data Extension must be reinstalled.


Should you encounter issues with the installation of the Xtract Universal Data Extension, send the log file located in `C:\Program Files\XtractUniversal\ssrs\log.txt` to [Theobald Support](mailto:support@theobald-software.com).


## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	 

### Destination Details
To use the SSRS destination, no further settings have to be made.

![ssrs-create-destination](/img/content/ssrs-create-destination.png){:class="img-responsive"}

## Settings

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![ssrs-configuration](/img/content/ssrs-configuration.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

## SSRS in Visual Studio

The following section contains step-by-step instructions on how to access SAP data in the SQL Server Reporting Services (SSRS) environment via Xtract Universal.

### Extracting SAP Data in Xtract Universal Designer

To make SAP data available in the SQL Server Report Server (SSRS) environment, the first step is to create an extraction in the Xtract Universal Designer.

For information on how to set up an extraction, see [Getting Started](../getting-started).<br>
Make sure the extraction uses the [*SQL Server Reporting Services* destination](#connection).


### Adding an Extraction as a Data Source in Visual Studio

The following steps guide you through the creation of an Xtract Universal data source in Visual Studio: 

1. Create a new "Report Server Project" in Visual Studio.
![New-Project](/img/content/xu/ssrs/New-Project.png){:class="img-responsive"}
2. Right-click on the *Shared Data Sources* folder in the *Solution Explorer* and select **Add New Data Source**. The window "Shared Data Source Properties" opens.
3. In the tab *General*, assign a name of your choice or leave the default one for the new data source (1).
4. Select the type *Xtract Universal* from the drop-down list (2). <br>If *Xtract Universal* is not available or displayed in all caps, make sure that the latest Xtract Universal version and *Microsoft Reporting Services Projects* plugin are both installed.
5. Enter a *connection string* (3) to XU's [Web Server](../security/server-security) in the format `Url=http://[host]:[port]/` e.g, `Url=http://localhost:8065/`. Note that the *connection string* is case sensitive.
![Shared-Data-Source-Properties](/img/content/xu/ssrs/Shared-Data-Source-Properties.png){:class="img-responsive"}
6. Optional (only required if the XU [Web server security](../security/server-security) is configured or the SAP source requires SAP credentials): Switch to the *Credentials* tab (4) and enter your [username and password](../security/user-management) for Xtract Universal.
7. Confirm your input with **[OK]**.

If *Xtract Universal* is not available in the drop-down list (2) even though the *Microsoft Reporting Services Projects* plugin (version 2.6.11 or higher) and the latest version of Xtract Universal are both installed, send the log file located in `C:\Program Files\XtractUniversal\ssrs\log.txt` to [Theobald Support](mailto:support@theobald-software.com).

 {: .box-tip }
**Tip:** The *connection string* is part of the URL string displayed in the "Run Extraction" window of the Designer. Copy the URL string up to '?' and paste it as the *connection string* into Visual Studio.

{: .box-note }
**Note:** When **https Restricted...** or **https Unrestricted** is activated in the [XU Webserer settings](../security/server-security#prerequisite-activating-tls-encryption), make sure to modify the Registry of the machine that the SSRS server is running on according to the [Microsoft Help (Configure Strong cryptography)](https://docs.microsoft.com/en-us/mem/configmgr/core/plan-design/security/enable-tls-1-2-client#configure-for-strong-cryptography).

### Creating a Report using an Xtract Universal Data Source

The following steps guide you through the creation of a Report in Visual Studio using an Xtract Universal data source: 

1. [Add an SSRS extraction as a data source in Visual Studio](#add-an-extraction-as-a-data-source-in-visual-studio).
2. Right-click on the *Reports* folder in the *Solution Explorer* and select **Add New Report**. The "Report Wizard" opens.
3. In the wizard, select a data source and click **[Next]**.
4. Click **[Query Builder...]**. The window "Query Designer" opens.
5. Select an Xtract Universal extraction from the drop-down menu (5). <br>If no extractions are available, make sure the *connection string* (3) in the data source is correct and an extraction with an *SQL Server Reporting Server* destination exists in Xtract Universal.
If you don't see the editor shown below, click **Edit as Text**.
![Query-Designer](/img/content/xu/ssrs/Query-Designer.png){:class="img-responsive"}
6. Optional: Change [runtime parameters](../execute-and-automate-extractions/extraction-parameters) of the extraction (6). Parameter changes are visible in the Query string (7).
Invalid input is marked with a red circle that displays an error message when hovering over it.
7. Click **[Preview]** (8) to run the extraction in preview mode.
8. Confirm your input with **[OK]**. The Query Builder closes. 
9. Make sure the Query string from the Query Builder is displayed in the Report Wizard before clicking **[Next]**.
![Report-Wizard](/img/content/xu/ssrs/Report-Wizard.png){:class="img-responsive"}
10. Complete the Report Wizard according to your preferences.

After creating the report, you can access the Query Builder by right-clicking the *Dataset* in *Report Data* and selecting **Query...**.


{: .box-tip }
**Tip:** Passing the (Windows) user that runs a report on the report server or in Visual Studio is supported. For this, you need to set up the [web server authentication](../server/server-settings#web-server) in Xtract Universal. 
Single Sign On in SAP is also supported, see [Single Sign On]](../advanced-techniques/sap-single-sign-on).


### Parameterization

Xtract Universal Designer uses [runtime parameters](../execute-and-automate-extractions/extraction-parameters) for parameterization.

Runtime parameters are accessible in the Query Builder. They can have one of the following **Behaviors**: <br>
- *Default:* Uses the value specified in Xtract Universal Designer.
- *Constant:* Enter a constant value to be used during runtime.
- *Parameterized:* Enter the name of a dynamic query parameter to use as a runtime parameter. 
The value of that parameter can either come from an input field, from the user or from a computed parameter using a formula.

 {: .box-note }
**Note:** Every runtime parameter with *Parameterized Behaviour* allows only one query parameter name as its input. 
If you want to use multiple inputs for a runtime parameter, you can use VS Report Designer tools to combine multiple parameters into a single *Computed Query Parameter*, see [Using Computed Query Parameters for SSRS with Xtract Universal](https://kb.theobald-software.com/xtract-universal/xu-ssrs-parameterizing-in-vs). 


#### How to set dynamic Runtime Parameters

Use VS query parameters as input for Xtract runtime parameters.

1. To create a new query parameter right-click the data set in the *Report Data* section and select **Dataset Properties**. The window "Dataset Properties" opens.
2. Switch to the tab *Parameters* and press **[Add]**.
![Query-Parameter](/img/content/xu/ssrs/query-parameters.png){:class="img-responsive"}
3. Enter a *Parameter Name* (1) and a *Parameter Value* or use the **[f(x)]** button to use formulas and/or combine multiple input values.
4. Switch to the *Query* tab and press **[Query Designer...]**. The window "Query Designer" opens.
![Query-Designer](/img/content/xu/ssrs/QueryDesigner.png){:class="img-responsive"}
5. Select *Parameterized* as the **Behaviour** of the runtime parameter you want to dynamize.
6. Enter the name of the new query parameter (1) under **Value**.
7. Confirm your input with **[OK]**.


#### How to make Parameters optional

If a query parameter is NULL, that parameter is not passed at runtime and thus will be ignored.

 {: .box-note }
**Note:** Depending on the extraction type some runtime parameters cannot be ignored e.g., most custom parameters are mandatory.

1. Right-click the input field of the parameter you want to be optional and select *Parameter Properties*. The window "Report Parameter Properties" opens.
![Input-Field](/img/content/xu/ssrs/optional-params.png){:class="img-responsive"}
2. In the *General* tab, activate the checkbox **Allow null value**.
3. Confirm your input with **[OK]**. A checkbox **NULL** appears next to the input field.
4. If the checkbox **NULL** is activated, the parameter will be ignored at runtime.

 {: .box-tip }
**Tip:** You can also use a computed query parameter to create a value of NULL. Create a formula that returns *Nothing* as the value.

*****
## Related Links
- [Report Design Tips](https://docs.microsoft.com/en-us/sql/reporting-services/report-design/report-design-tips-report-builder-and-ssrs?view=sql-server-ver15)
- [Reporting Services Tutorials (SSRS)](https://docs.microsoft.com/en-us/sql/reporting-services/reporting-services-tutorials-ssrs?view=sql-server-ver15)
- [Add a Query Parameter to Create a Report Parameter](https://docs.microsoft.com/en-us/sql/reporting-services/tutorial-add-a-parameter-to-your-report-report-builder?view=sql-server-ver15#Query)
- [Using Computed Query Parameters for SSRS with Xtract Universal](https://kb.theobald-software.com/xtract-universal/xu-ssrs-parameterizing-in-vs)