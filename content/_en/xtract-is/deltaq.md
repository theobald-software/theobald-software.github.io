---
ref: xtract-is-09
layout: page
title: Xtract DeltaQ
description: Xtract IS DeltaQ
product: xtract-is
parent: xtract-is
childidentifier: deltaq
permalink: /:collection/:path
weight: 9
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=deltaq
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract IS.<br>
Make sure to use the documentation within the new [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).


The following section describes the functions of the Xtract DeltaQ component of Xtract IS.<br>
The Xtract IS DeltaQ component allows to conduct a real delta management between the productive system and the BI/staging layer.
DeltaQ extracts DataSources (OLTP) and extractors from ERP and ECC systems.

{: .box-warning } 
**Warning! Newer component available.**<br>
DeltaQ is an old component. If possible, use the newer component **[ODP](./odp)**.

{: .box-warning}
**Warning!** **Missing Authorization**
To use the DeltaQ component, access to the designated authority objects (RFC) in SAP must be available.
For more information, refer to the knowledge base article [SAP User Rights: DeltaQ](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#deltaq).

{: .box-tip }
**Tip:** To get information on the basics, refer to [Getting Started with Xtract IS](./getting-started). <br>

### How to use the Xtract DeltaQ component
{% include _content/en/xis-specific/define-extraction.md %}

{% include _content/en/datasource-deltaq/misc-deltaq.md %}

---

More information on working with the Xtract DeltaQ component is provided in the following sections.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
