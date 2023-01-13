---
ref: xtract-universal-19
layout: page
title: Table CDC
description: Table
product: xtract-universal
parent: xtract-universal
childidentifier: table-cdc
permalink: /:collection/:path
weight: 86
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=tablejoin
progressstate: 5
---
The following section describes the functions of the **Table CDC** component of Xtract Universal. <br>
The component can be used to extract delta contents from SAP tables and views.
It creates a log table in SAP that record insert, update, and delete activities that apply to a selected SAP table or view<br>

{: .box-warning}
**Warning!** **Missing Authorization**
To use the Table component, access to the designated authority objects (RFC) in SAP must be available.
For more information, see the knowledge base article on [SAP User Rights: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).


{: .box-tip }
**Tip:** To get information on the basics of Xtract Universal, refer to [Getting Started with Xtract Universal](./getting-started). <br>

### About Table CDC

Change Data Capture (CDC) is a method to keep track of data changes such as insert, update and delete in SAP tables.
The Table CDC component creates a log table in SAP that records any changes made to a selected table or view. 
The content of the log table is cleared after every successful run of the extraction. Data that was not extracted is not cleared.

Note that clusters and pool tables are not supported by the Table CDC component. 

### Requirements

The installation of the custom function modules Z_THEO_DELETE_LOG_ENTRIES and Z_THEO_READ_TABLE is mandatory. The SAP transport requests for the installation is provided in the installation directory: <br>
`C:\ProgramFiles\[XtractProduct]\ABAP\`.


<!---
- Access to the SAP authority object `S_TABU_NAM ACTVT=02` must be granted.
- SAP version x.xx or higher.
- The SAP user must have the right to create SAP Tables, see [SAP Connection - Authentication](./getting-started/sap-connection#authentication).
- Access to the designated authority objects (RFC) in SAP, see [SAP User Rights: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table) must be granted.
-->


### How to use the Table CDC component
{% include _content/en/xu-specific/define-extraction.md %}

---
More information on working with the Table CDC component is provided in the following sections.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}