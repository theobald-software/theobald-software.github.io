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
5. Enter a *connection string* (3) to XU's [Web Server](../../security/server-security) in the format `Url=http://[host]:[port]/` e.g, `Url=http://localhost:8065/`. Note that the *connection string* is case sensitive.
![Shared-Data-Source-Properties](/img/content/xu/ssrs/Shared-Data-Source-Properties.png){:class="img-responsive"}
6. Optional (only required if the XU [Web server security](../../security/server-security) is configured or the SAP source requires SAP credentials): Switch to the *Credentials* tab (4) and enter your [username and password](../../security/user-management) for Xtract Universal.
7. Confirm your input with **[OK]**.

If *Xtract Universal* is not available in the drop-down list (2) even though the *Microsoft Reporting Services Projects* plugin (version 2.6.11 or higher) and the latest version of Xtract Universal are both installed, send the log file located in `C:\Program Files\XtractUniversal\ssrs\log.txt` to [Theobald Support](mailto:support@theobald-software.com).

 {: .box-tip }
**Tip:** The *connection string* is part of the URL string displayed in the "Run Extraction" window of the Designer. Copy the URL string up to '?' and paste it as the *connection string* into Visual Studio.


### Create a Report using an Xtract Universal Data Source

The following steps guide you through the creation of a Report in Visual Studio using an Xtract Universal data source: 

1. [Add an SSRS extraction as a data source in Visual Studio](./ssrs-in-vs#add-an-extraction-as-a-data-source-in-visual-studio).
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

### Parameterization

Xtract Universal Designer uses [runtime parameters](../../execute-and-automate-extractions/extraction-parameters) for parameterization.

Runtime parameters are accessible in the Query Builder. They can have one of the following **Behaviors**: <br>
- *Default:* Uses the value specified in Xtract Universal Designer.
- *Constant:* Enter a constant value to be used during runtime.
- *Parameterized:* Enter the name of a dynamic query parameter to use as a runtime parameter. 
The value of that parameter can either come from an input field, from the user or from a computed parameter using a formula.

 {: .box-note }
**Note:** Every runtime parameter with *Parameterized Behaviour* allows only one query parameter name as its input. 
If you want to use multiple inputs for a runtime parameter, you can use VS Report Designer tools to combine multiple parameters into a single *Computed Query Parameter*. 


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


#### Related Links
- [Report Design Tips](https://docs.microsoft.com/en-us/sql/reporting-services/report-design/report-design-tips-report-builder-and-ssrs?view=sql-server-ver15)
- [Reporting Services Tutorials (SSRS)](https://docs.microsoft.com/en-us/sql/reporting-services/reporting-services-tutorials-ssrs?view=sql-server-ver15)
- [Add a Query Parameter to Create a Report Parameter](https://docs.microsoft.com/en-us/sql/reporting-services/tutorial-add-a-parameter-to-your-report-report-builder?view=sql-server-ver15#Query)
