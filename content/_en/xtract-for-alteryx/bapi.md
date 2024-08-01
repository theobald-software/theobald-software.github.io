---
ref: xtract-for-alteryx-06
layout: page
title: Xtract BAPI 
description: BAPI and Function module
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: bapi
permalink: /:collection/:path
weight: 6
lang: en_GB
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract for Alteryx.<br>
Make sure to use the documentation within the new [Xtract for Alteryx](https://helpcenter.theobald-software.com/xtract-for-alteryx/documentation/introduction/).

The following section describes the functions of the BAPI component of Xtract for Alteryx.<br>
The Xtract BAPI component is used for executing SAP BAPIs or Function Modules via RFC.

{: .box-warning}
**Warning!** **Missing Authorization**
To use the Xtract BAPI component, access to the designated authority objects (RFC) in SAP must be available.
For more information, refer to the knowledge base article [SAP User Rights: BAPI](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#bapi).

{: .box-tip }
**Tip:** To get information on the basics of Xtract for Alteryx, refer to [Getting Started with Xtract for Alteryx](./getting-started).

{% include _content/en/bapis-and-function-modules/support-disclaimer.md %}

### How to use the Xtract BAPI component
{% include _content/en/alteryx-component-intro.md %}

### Input and Output Anchors of Xtract BAPI

The Xtract BAPI has the following input and output options:
- Input anchor "I" - input for runtime parameters (1).
- Input anchor "P" - input for tables (2).
- Output anchor "1" to "5" - custom output (3).
- Output anchor "E" - output for export parameters (4).

![bapi-input](/img/content/xfa/bapi-input.png){:class="img-responsive" }


****

More information on working with the Xtract BAPI component is provided in the following sections.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
