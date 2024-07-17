---
ref: xfa-bapi-define
layout: page
title: Defining a BAPI Extraction
description: Define BAPI
product: xtract-for-alteryx
parent: bapi
permalink: /:collection/:path
weight: 1
lang: en_GB
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract for Alteryx.<br>
Make sure to use the documentation within the new [Xtract for Alteryx](https://helpcenter.theobald-software.com/xtract-for-alteryx/documentation/introduction/).

The following section shows how to use the Xtract BAPI component. 

{% include _content/en/bapis-and-function-modules/bapi-extraction-define.md %}

### Transaction Commit

Some SAP Function Modules require calling the function module BAPI_TRANSACTION_COMMIT to successfully update data in the database, e.g., BAI_PO_CREATE.
To automatically call BAPI_TRANSACTION_COMMIT after the selected Function Module / BAPI is processed, activate the option **Commit work in SAP after execution** in the configuration menu of the Xtract BAPI component.

![xtract-bapi-commit-transaction](/img/content/xfa/xtract-bapi-commit-transaction.png){:class="img-responsive"}