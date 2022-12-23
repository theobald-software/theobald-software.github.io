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

Running the extration for the first time, creates a log table in SAP that records any changes made to the original table or view.
The name of the log table is...
The content of the log table is cleared after every run of the extraction (?)

### Requirements

- SAP version x.xx or higher.
- Access to the designated authority objects (RFC) in SAP, see [SAP User Rights: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table) must be granted.
- The user that connects to SAP must have the right to create SAP Tables, see [SAP Connection - Authentication](./getting-started/sap-connection#authentication).

### How to use the Table CDC component
{% include _content/en/xu-specific/define-extraction.md %}

More information on working with the Table CDC component is provided in the following sections.

---

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}