---
ref: yunio-report-01
layout: page
title: Report (Preview)
description: Defining a Report Extraction
product: yunio
parent: yunio
childidentifier: report
permalink: /:collection/:path
weight: 20
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=where-clause
progressstate: 5
---

This section shows how to use the integration type *Report*. <br>
The integration type *Report* extracts data from most standard and custom ABAP reports and SAP transactions.
A report extraction is possible if the report returns a table-like structure in SAP.

{: .box-note}
**Note:** The integration type *Report* is still in preview mode. This means that breaking changes can be released any time. 

<!---
{: .box-note }
**Note:** The Report component requires installation of the custom function module `Z_XTRACT_IS_REMOTE_REPORT` in your SAP system. 
For more information, see [Installation of Z_XTRACT_IS_REMOTE_REPORT](#sap-customizing).
-->

{: .box-warning}
**Warning!** **Missing Authorization**
To use Reports in yunIO, access to the designated authority objects (RFC) in SAP must be available.
For more information, refer to the knowledge base article [SAP User Rights: Report](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#report).

## General Workflow
The following graphic shows the general workflow of setting up report services with yunIO:<br>
![Report-Workflow](/img/content/report-general-workflow-yunIO.png){:class="img-responsive" width="400px"}


## Look Up a Report

1. Create a new *Service* of type *Report (preview)*. 
2. Click **[Save and edit]**. The *Search SAP Reports* menu opens.
3. Enter the name of a report or the TCODE of a report in the field **Search by a report name or an exact TCODE** (1). The use of wildcards ( * ) is only supported for report names.
![SAP-Table-or-Views](/img/content/yunio/report-lookup.png){:class="img-responsive" width="750px"}
4. To look up report names, click **[Search]** (2).
To look up TCODES, click **[By TCODE]**.
5. Select a source file from the list of available search results (3). 
The extraction settings of *Report (preview)* open automatically.<br>

## Settings
The *Report* settings consist of the following subsections:
- [Report](#report) (4) displays the name and description of the selected report.
- [Advanced Settings](#advanced-settings) (5) define how the data is extract from SAP.
- [Selection Parameters](#selection-parameters) (6) define input parameter for the yunIO service.
- [Output Columns](#output-columns) (7) define the output of the yunIO service.

![yunIO-table](/img/content/yunio/report.png){:class="img-responsive"}


### Report

The **Report** section displays the name and description of the selected report.<br>
To select a different source file, click **Select** in the upper right corner of the section.

### Advanced Settings

#### Run in background
If this checkbox is checked, the report extraction is executed as a background job in SAP. 
Activate the setting **Run in background** for large amounts of data that may run into a timeout error (“Time limit exceeded”), when using the foreground mode.

#### Dynamic column width and offset
If this option is active, the column width and offset is adjusted dynamically at report runtime. 
This can be required for reports that have varying column widths depending on the report’s selection criteria.

#### Skip rows from top
Enter the number of rows you want to skip at the beginning of the report. 
Some reports display meta information in the header section of the report, before the actual report body. 
This setting allows skipping the meta information.

#### Skip rows from bottom

Similar to **skip rows from top**. Enter the number of rows you want to skip in the footer section of the report.

#### Variant

If available, select a variant from the drop-down-list.<br>

A variant contains a set of [selections parameters](#selection-parameters) that limit the result set of the report to records that match the selection.
A selection variant can be created in SAP at the input screen of an ABAP report. 
The purpose of a variant is to minimizes the need to enter selections each time you run a report.

{: .box-note}
**Note:** Manual selections and variants can be combined. Manual selections overwrite any selections in the variant.

#### Detect Columns
Click **[Automatically detect columns]** to execute the report based on the selected variant or selections and detect columns automatically.
Detecting columns is mandatory for using the service.

{: .box-note}
**Note:** If a report has variants, the variant must be selected, before using **[Automatically detect columns]**.


### Selection Parameters
This section corresponds to the report’s input screen in SAP. <br>
Some selection fields only have a technical name and no description. 
To understand which field corresponds to a field in SAP, take a look at the report’s input screen in SAP. 
Click on a selection field and press function key F1. 
This displays the technical name of a selection field.

{: .box-note}
**Note:** If a selection parameter is left empty, the report uses the value that is defined in the report. 


### Output Columns

This section displays the length and names of the detected report columns. 

{: .box-tip }
**Tip:** To manually adjust the length and names of columns, download and edit the service definition of the report service.

## Example Service

The following example shows how to set up a yunIO service that extracts the SAP ABAP report RLT10010 (Evaluation of Movements per Storage Type):
1. Create a new service of integration type *Report*, see [Getting Started: Creating a Service](./getting-started#creating-a-service).
2. Look up the report RLT10010, see [Look Up a Report](#look-up-a-report).
3. Select a variant or enter selection parameters. This example uses a variant *VAR01*.<br>
![report-rlt10010](/img/content/yunio/report-rlt10010.png){:class="img-responsive"}
4. Set **Skip rows from top** to 10 to skip the header of the report. Run the report in SAP to determine the number of rows that need to be skipped.
![SAP-Table-or-Views](/img/content/yunio/report-sap.png){:class="img-responsive"}
5. Click **[Detect Columns]** to automatically detect the columns of the report. The detected columns are displayed in the section *Output Columns*.
6. Click **[Save]** to save the service.
7. To test the output of the service, run the service in your browser, see [Getting Started: How to Run a Service](./getting-started#how-to-run-a-service).<br>
![report-response.png](/img/content/yunio/report-response.png){:class="img-responsive"}

<!---
## SAP Customizing

{% include _content/en/sap-customizing/install-report-custom-function-module.md  %}
-->