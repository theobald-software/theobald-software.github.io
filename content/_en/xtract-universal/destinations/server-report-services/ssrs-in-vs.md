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

The following section contains step-by-step instructions on how to access SAP data in the SQL Server Reporting Services (SSRS) environment via Xtract Universal.

### Extract SAP Data in Xtract Universal Designer

To make SAP data available in the SQL Server Report Server (SSRS) environment, the first step is to create an extraction in the Xtract Universal Designer.

For information on how to set up an extraction, see [Getting Started](../../getting-started).<br>
Make sure the extraction uses the [*SQL Server Reporting Services* destination](./connection).


### Add an Extraction as a Data Source in Visual Studio

The following steps guide you through the creation of an Xtract Universal data source in Visual Studio: 

1. Create a new "Report Server Project" in Visual Studio.
![New-Project](/img/content/xu/ssrs/New-Project.png){:class="img-responsive"}
2. Right-click on the *Shared Data Sources* folder in the *Solution Explorer* and select **Add New Data Source**. The window "Shared Data Source Properties" opens.
3. In the tab *General*, assign a name of your choice or leave the default one for the new data source (1).
4. Select the type *Xtract Universal* from the drop-down list (2). <br>If *Xtract Universal* is not available or displayed in all caps, make sure that the latest Xtract Universal version and *Microsoft Reporting Services Projects* plugin are both installed.
5. Enter a *connection string* (3) in the format `Url=http://[host]:[port]/` e.g, `Url=http://localhost:8065/`.
![Shared-Data-Source-Properties](/img/content/xu/ssrs/Shared-Data-Source-Properties.png){:class="img-responsive"}
6. Switch to the *Credentials* tab (4) and enter your [username and password](../../security/user-management) for Xtract Universal.
7. Confirm your input with **[OK]**.

If *Xtract Universal* is not available in the drop-down list (2) even though the *Microsoft Reporting Services Projects* plugin (version 2.6.11 or higher) and the latest version of Xtract Universal are both installed, send the log file located in `C:\Program Files\XtractUniversal\ssrs\log.txt` to [Theobald Support](mailto:support@theobald-software.com).

 {: .box-note }
**Note:** Depending on the settings of XU's [Web server](../../server/server-settings#web-server) use either `http://` or `https://` in the connection string.


### Create a Report using an Xtract Universal Data Source

The following steps guide you through the creation of a Report in Visual Studio using an Xtract Universal data source: 

1. [Add an SSRS extraction as a data source in Visual Studio](./ssrs-in-vs/#add-an-extraction-as-a-data-source-in-visual-studio).
2. Right-click on the *Reports* folder in the *Solution Explorer* and select **Add New Report**. The "Report Wizard" opens.
3. In the wizard, select a data source and click **[Next]**.
4. Click **[Query Builder...]**. The window "Query Designer" opens.
5. Select an Xtract Universal extraction from the drop-down menu (5). <br>If no extractions are available, make sure the *connection string* (3) in the data source is correct and an extraction with an *SQL Server Reporting Server* destination exists in Xtract Universal.
If you don't see the editor shown below, click **Edit as Text**.
![Query-Designer](/img/content/xu/ssrs/Query-Designer.png){:class="img-responsive"}
6. Optional: Change [runtime parameters](../../execute-and-automate-extractions/extraction-parameters) of the extraction (6). Parameter changes are visible in the Query string (7).
Invalid input is marked with a red circle that displays an error message when hovering over it.
7. Click **[Preview]** (8) to run the extraction in preview mode. If the runtime parameter *preview* is set to True, the preview shows the actual data of the extraction.
8. Confirm your input with **[OK]**. The Query Builder closes. 
9. Make sure the Query string from the Query Builder is displayed in the Report Wizard before clicking **[Next]**.
![Report-Wizard](/img/content/xu/ssrs/Report-Wizard.png){:class="img-responsive"}
10. Complete the Report Wizard according to your preferences.

After creating the report, you can access the Query Builder by right-clicking the *Dataset* in *Report Data* and selecting **Query...**.

 {: .box-tip }
**Tip:** Experienced users can enter the Query string directly in the Report Wizard without using the Query Builder, see [Metadata access via HTTP](../../advanced-techniques/metadata-access-via-http-json).


#### Related Links
- [Report Design Tips](https://docs.microsoft.com/en-us/sql/reporting-services/report-design/report-design-tips-report-builder-and-ssrs?view=sql-server-ver15)
- [Reporting Services Tutorials (SSRS)](https://docs.microsoft.com/en-us/sql/reporting-services/reporting-services-tutorials-ssrs?view=sql-server-ver15)
