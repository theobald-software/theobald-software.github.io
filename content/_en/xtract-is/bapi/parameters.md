---
ref: xi-bapi-02
layout: page
title: Parameterization
description: Parameters
product: xtract-is
parent: bapi
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=scalar-parameters
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract IS.<br>
Make sure to use the documentation within the new [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

{% include _content/en/bapis-and-function-modules/parameters.md %}

### Custom Properties

The *Custom Properties* define the properties unique to the component. When parameterizing the component using SSIS variables, the *Custom Properties* are overwritten.

The *Custom Properties* of the Xtract BAPI component are displayed in the "Properties" window of the component. 

![bapi-properties.png](/img/content/xis/bapi-properties.png){:class="img-responsive"}

**Transaction Commit**<br>
Set this option to *true* to call the function module BAPI_TRANSACTION_COMMIT after processing the selected Function Module / BAPI.
Some SAP Function Modules require this commit function to successfully update data in the database, e.g., BAI_PO_CREATE.

*****
#### Related Links
- [How to Post Data in SAP with Xtract BAPI](https://kb.theobald-software.com/bapis/xtract-is-how-to-post-data-in-sap)
- [Uploading CATS data by using Xtract IS BAPI](https://kb.theobald-software.com/bapis/xtract-is-uploading-cats-data)

