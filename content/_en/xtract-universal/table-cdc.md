---
ref: xtract-universal-19
layout: page
title: Table CDC
description: Table
product: xtract-universal
parent: xtract-universal
childidentifier: tablecdc
permalink: /:collection/:path
weight: 86
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=tablejoin
progressstate: 5
---
The following section describes the functions of the **Table CDC** component of Xtract Universal. <br>
The component can be used to extract delta contents from SAP tables and views.
The component creates a log table in SAP that record insert, update, and delete activities that apply to a selected SAP table or view<br>

{: .box-warning}
**Warning!** **Missing Authorization**
To use the Table component, access to the designated authority objects (RFC) in SAP must be available.
For more information, see the knowledge base article on [SAP User Rights: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).


{: .box-tip }
**Tip:** To get information on the basics of Xtract Universal, refer to [Getting Started with Xtract Universal](./getting-started). <br>

### Requirements

- SAP version x.xx or higher.
- access to the designated authority objects (RFC) in SAP, see [SAP User Rights: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table) must be granted.
- The user must have the right to create SAP Tables, see []().

### How to use the Table component
{% include _content/en/xu-specific/define-extraction.md %}

More information on working with the Table CDC component is provided in the following sections.

---

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}