---
ref: board-connector-18
layout: page
title: Table
description: Table
product: board-connector
parent: board-connector
childidentifier: table
permalink: /:collection/:path
weight: 18
lang: en_GB
---

The following section describes the functions of the Table Component of Board Connector.<br>
The component *SAP Table or View* can be used to extract contents from SAP tables and views. <br>

{: .box-warning}
**Warning!** **Missing Authorization**
To use the Table component, access to the designated authority objects (RFC) in SAP must be available.
For more information, see the knowledge base article on [SAP User Rights: Table](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table).

{: .box-tip }
**Tip:** To get information on the basics of Board Connector, refer to [Getting Started with Board Connector](./getting-started).

{% include _content/en/tables/supported-objects.md %}

### How to use the Table component
{% include _content/en/board-specific/define-extraction.md %}

More information on working with the Table component is provided in the following sections.

---

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
