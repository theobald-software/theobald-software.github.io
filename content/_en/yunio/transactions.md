---
ref: yunio-transaction-01
layout: page
title: Transactions
description: Transactions
product: yunio
parent: yunio
permalink: /:collection/:path
weight: 19
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=define-a-bapi-extraction
---

With the *Transaction* component, SAP transactions can be accessed, configured and parameterized for automation.<br>
This feature is currently still in the *experimental* state and will soon be available and fully documented.

### How to run SAP Transactions in yunio

1. Create a new Service of type *Transaction*.  
2. Enter a transaction code and click **[Start]** to run the transaction . Click **[Stop]** to cancel a running transaction.<br>
![web-ui](/img/content/yunio/transaction.png){:class="img-responsive"}
3. Content from the SAP GUI is displayed in the sections *Labels* and *Input*.
Use *Labels* to... <br>
Use *Input* to...
4. Select an action from the drop-down-menu at the end of the *Transaction* section.<br>
The actions available in the drop-down-menu correspond to...
5. Click **[Next]** to execute the selected action. All executed actions are logged in the **GUI Steps** section.

### Editing and Running a BAPI using Transactions

Or other examples...


****
#### Related Links
- [Function Module / BAPI](./bapis-and-function-modules)