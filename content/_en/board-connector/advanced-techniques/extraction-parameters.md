---
ref: bc-advanced-techniques-02
layout: page
title: Extraction Parameters
description: Extraction Parameters
product: board-connector
parent: advanced-techniques
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=extraction-parameters
progressstate: 5
---

The following section contains information about the extraction parameters that can be edited in the window "Run extractions".

### Run an Extraction

The extraction parameters define how data is extracted from the source. 
![Extraction parameters](/img/content/board/Run-Extraction.png){:class="img-responsive"}

To open the "Run extractions" window, select an extraction in the main window of the Designer and click **[Run]** (see details in [Running an extraction](../getting-started/run-an-extraction)).


### Extraction

The amount of available parameters depends on the extraction type and destination. e.g., *decimalSeparator* is a parameter specific to CSV destination.

Parameter name | Description | Special information
------------ | ------------- | -------------
clearBuffer | to clear/keep the result buffer | default value -  false
preview | to enable/disable preview mode | default value - false
source | to dynamically select the source SAP system from which data is extracted (e.g., SAP_DEV and SAP_PROD). Applies only if more than one SAP system is used. | -
destination | to dynamically select the destination to which extraction is written (e.g., db_1 and db_2). Applies only if more than one destination is used.| -
rows | to set the maximum number of rows to be extracted | available in [Table](../table/extraction-settings#extraction-settings)
where | to set a where clause | available in [Table](../table/where-clause) 
packageSize | to set the package size | available in [Table](../table/extraction-settings#extraction-settings)  
updateMode | Update mode to use for the run| verfügbar in [ODP](../odp/odp-functions-ov#update-mode)
subscriptionSuffix | Suffix to use multiple inits on a single SAP system | verfügbar in [ODP](../odp/odp-functions-ov#subscriptions)
extractDataOnDeltaInit | Whether to extract data if request is delta init| verfügbar in [ODP](../odp/odp-functions-ov#update-mode)
hierarchyName | The name of the hierarchy to extract | available in ODP, DeltaQ & Hierarchy
representation | The representation / output format of the hierarchy to extract: "ParentChild", "Natural" or "ParentChildWithNodeNames"  | available in [Hierarchy](../bw-hierarchies/table-output)
dateTo | The valid-to-date of the hierarchy to extract in the format YYYYMMDD | available in [Hierarchy](../bw-hierarchies/hierarchy-extraction-define#format-the-output)
variant | Name of a variant | verfügbar in [Report](../abap-reports/variants-and-selections) & [SAP Query](../sap-queries/variant-selections)
batchJobName | Name of the Batch Job| verfügbar in [Report](../abap-reports/report-extraction-settings)
gatwewayHost | Gateway Host | verfügbar in [DeltaQ](../datasource-deltaq/deltaq-customizing#customizing-check)
gatewayService | Gateway Service | verfügbar in [DeltaQ](../datasource-deltaq/deltaq-customizing#customizing-check)
programID | Program ID | verfügbar in [DeltaQ](../datasource-deltaq/deltaq-customizing#customizing-check)
logicalDestination | Logical Destination | verfügbar in [DeltaQ](../datasource-deltaq/deltaq-customizing#customizing-check)
requestID | Request ID (for Repair Request only) | verfügbar in [DeltaQ](../datasource-deltaq/deltaq-customizing#customizing-check)
updateType | F (Full), C (Delta Init), S (Init no data), D (Delta Update), R (Repeat)| verfügbar in [DeltaQ](../datasource-deltaq/update-mode)
decimalSeparator | to set a symbol between integer and fractional part | available in CSV destinations
columnSeparator |  to set a symbol which indicates the start of a new column | available in CSV destinations

### Source

![Source parameters](/img/content/board/Run-Extraction-Source.png){:class="img-responsive"}

The connection settings to an SAP source can be changed dynamically via the URL. 
In the *Source* tab you can override the values that are defined in [SAP source details](../introduction/sap-connection).

Parameter name | Parameter description 
------------ | ------------- 
lang | to dynamically change the logon language of the source SAP system  
logonTicket | to dynamically change the ticket issuer of the [SAP logon ticket](https://kb.theobald-software.com/sap-connection/sso-with-logon-ticket)

{: .box-note }
**Note:** The parameter **logonTicket** can only be set if SAP logon ticket is selected as the authentication method in [SAP source details](../introduction/sap-connection).

#### Example
1. Select the checkbox of the parameter you want to override.
2. Enter the value and confirm by pressing enter. 
- Extraction URL before changing the parameter:<br>
`http://localhost:8065?name=Plants`
- Extraction URL after editing the parameter **lang**:<br>
`http://localhost:8065/?name=Plants&lang=DE` 


### Custom

{: .box-note }
**Note:** The tab *Custom* is only active when a [User-Defined Variable](../advanced-techniques/user-defined-variables) was created. 

Check the checkbox of the parameter and enter a new value to set the user defined parameter.

![Custom parameters](/img/content/board/Run-Extraction-Custom.png){:class="img-responsive"}

#### Example
1. Select the checkbox of the parameter you want to override.
2. Enter the value and confirm by pressing enter. 
- Extraction URL before changing the parameter:<br>
`http://localhost:8065?name=Plants`
- Extraction URL after editing the parameter **myParameter**:<br>
`http://localhost:8085/?name=Plants&myParameter=EN`  
