---
ref: xu-ssrs-04
layout: page
title: SSRS in Visual Studio
description: SSRS in Visual Studio
product: xtract-universal
parent: ssrs
permalink: /:collection/:path
weight: 4
lang: en_GB
progressstate: 5
---

The following section guides you through the creation of an SAP data source in the SQL Server Report Server (SSRS) environment. 

### Create an SSRS Extraction in XU Designer

To use ... in Visual Studio, create an extraction in Xtract universal.

 {: .box-tip }
**Tip:** Experienced users can   


### Add an SSRS Extraction as a Data Source in Visual Studio

1. Create a new "Report Server Project" in VS. If *Reporting Services* is not available, make sure that the [*Microsoft Reporting Services Projects* extension](./requirements#installation) version 2.6.11 or higher is installed and activated in VS.
![Destination-settings](/img/content/xu/ssrs/New-Project.png){:class="img-responsive"}
2. Right-click on the **Shared Data Sources** folder in the *Solution Explorer* and select *Add New Data Source*. The window "Shared Data Source Properties" opens.
3. In the tab *General*, assign a name for the new data source (optional), the default value is DataSource1 (1).
4. Select the type *Xtract Universal* from the dropdown list (2). If *Xtract Universal* is not available or displayed in all caps, make sure that the latest Xtract Universal version and *Microsoft Reporting Services Projects* extension are both installed.
5. Enter a *connection string* (3) in the format ```Url=http://[host]:[port]/``` e.g, ```Url=http://localhost.8065/```.
![Destination-settings](/img/content/xu/ssrs/Shared-Data-Source-Properties.png){:class="img-responsive"}
6. Optional: Switch to the *Credentials* tab (4) and enter your [Xtract Universal username and password](../../security/user-management).
7. Confirm your input with **[OK]**.

 {: .box-note }
**Note:** If *Xtract Universal* is not available... Log file from to mailto support... 
Microsoft Reporting Services Projects extension is installed and activated in VS


 {: .box-note }
**Note:** Depending on the settings of Xtract Universal's [Web server](../../server/server-settings#web-server] use either ```http://``` or ```https://``` in the connection string.


### Create a new Report

1. [Add an SSRS extraction as a data source in Visual Studio](./ssrs-in-vs/#add-an-ssrs-extraction-as-a-data-source-in-visual-studio).
2. Right-click on the **Reports** folder in the *Solution Explorer* and select *Add New Report*. The "Report Wizard" opens.
3. In the wizard, select a data source and click **[Next]**.
4. Click **[Query Builder...]**. The window "Query Designer" opens.
5. Select an extraction from Xtract Universal from the dropdown menu. If no extractions are available, make sure