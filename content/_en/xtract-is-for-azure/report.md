---
ref: xtract-is-for-azure16
layout: page
title: Xtract Report
description: Xtract Report
product: xtract-is-for-azure
parent: xtract-is-for-azure
childidentifier: report
permalink: /:collection/:path
weight: 13
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=report
---
The following section describes the functions of the Xtract Report component of  Xtract IS for Azure.<br>
The Xtract IS Report component is a data source for SSIS that enables ABAP report execution and processing of the output in SSIS data flow.

{: .box-note }
**Note:** The Report component requires installation of the custom function module `Z_XTRACT_IS_REMOTE_REPORT` in your SAP system. For detailed information, see [Install Report Custom Fuction Module](./sap-customizing/install-report-custom-function-module).

{: .box-tip }
**Tip:** To get information on the basics, refer to [Getting Started](./getting-started). <br>

### How to use the Xtract Report component
{% include _content/en/xis-specific/define-extraction.md %}

{% include _content/en/xis-specific/report/workflow.md %}

---

More information on working with the Xtract Report component is provided in the following sections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
