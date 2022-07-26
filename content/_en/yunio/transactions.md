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
The integration type *Transaction* is currently marked as “experimental” and is not fully functional. Future versions will work with any SAP transaction code.

### Prerequisites

- The SAP connection asigned to a transaction service must use an SAP dialog user. 
If necessary create a new connection.
- Log off the SAP GUI.<br>
When running transactions, a connection to your SAP system is established using the credentials in your connection settings. 
It is not possible to run multiple instances of SAP with the same user in parallel with yunIO.

{: .box-tip }
**Tip:** The transaction feature offers the same functionality as the SAP GUI. 
Therefore knowing how to navigate the SAP GUI makes it easier to use the transaction feature.

### Running SAP Transactions

1. Create a new Service of type *Transaction*.  
2. Enter a transaction code (1) and click **[Start]** to run the transaction. Content from the SAP GUI is displayed. <br>
Click **[Stop]** to cancel a running transaction.<br>
![transaction](/img/content/yunio/transaction.png){:class="img-responsive"}
3. Fill out the input fields as you would in the SAP GUI.
4. Click **[Submit]** (2) to enter your input.
All executed actions are logged in the section *GUI Steps* (3). <br>
![transaction-ie01](/img/content/yunio/transaction-ie01.png){:class="img-responsive"}
5. Click **[Save]** once all actions are completed.

{: .box-note }
**Note:** When editing a *Transaction* service you have to rebuild all actions of the transaction. It is not possible to edit single GUI steps.


****
#### Related Links
- [Knowledge Base Article: Working with Transactions](https://kb.theobald-software.com/yunio/working-with-transactions)