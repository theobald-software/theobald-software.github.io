---
ref: xtract-is-13
layout: page
title: Xtract Report
description: Xtract IS Report
product: xtract-is
parent: xtract-is
childidentifier: report
permalink: /:collection/:path
weight: 13
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=report
---
The following section describes the functions of the Xtract Report component of Xtract IS.<br>
The Xtract IS Report component is a data source for SSIS that enables ABAP report execution and processing of the output in SSIS data flow.

{: .box-note }
**Note:** The Report component requires installation of the custom function module `Z_XTRACT_IS_REMOTE_REPORT` in your SAP system. For detailed information, see [Install Report Custom Fuction Module](./sap-customizing/install-report-custom-function-module).

{: .box-warning}
**Warning!** **Missing Authorization**
To use the Report component, access to the designated authority objects (RFC) in SAP must be available.
For more information, refer to the knowledge base article [SAP User Rights: Report](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#report).

{: .box-tip }
**Tip:** To get information on the basics, refer to [Getting Started with Xtract IS](./getting-started). <br>

{% include _content/en/abap-reports/report-workflow.md %}

### How to use the Xtract Report component
{% include _content/en/xis-specific/define-extraction.md %}


---

More information on working with the Xtract Report component is provided in the following sections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
