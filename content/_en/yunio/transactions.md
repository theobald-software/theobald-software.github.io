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
The integration type *Transaction* is currently marked as “Preview” and is not fully functional. Future versions will work with any SAP transaction code.

### Prerequisites

The SAP connection assigned to a transaction service must use an SAP dialog user. 

{: .box-tip }
**Tip:** The transaction feature offers the same functionality as the SAP GUI. 
Therefore knowing how to navigate the SAP GUI makes it easier to use the transaction feature.

### Record Transactions

1. Create a new service of type *Transaction*.  
2. Enter a transaction code (1) and click **[Start]** to run the transaction. Content from the SAP GUI is displayed. <br>
Click **[Stop]** to cancel the transaction.<br>
![transaction](/img/content/yunio/transaction.png){:class="img-responsive"}
3. Fill out the input fields as you would in the SAP GUI. Input fields can be parameterized once the transaction is recorded, see [Parameterizing Transactions](parameterizing-transactions).
4. Click **[Submit]** (2) to enter your input.
All executed actions are logged in the section *GUI Steps* (3). <br>
![transaction-va02](/img/content/yunio/transaction-va02.png){:class="img-responsive"}
5. Click **[Save]** once you finished recording.<br>
Alternatively, click **[Stop]** to start parameterizing, see [Parameterize Transactions](#parameterize-transactions).

### Parameterize Transactions

Follow the steps below to assign input and output parameters to a transaction service.

1. Record a transaction, see [Record Transactions](#record-transactions).<br>
Make all fields that you want to parameterize available in the section *GUI Steps*. 
Example: If you want to parameterize an input field in a specific tap or menu, the tab or menu must be accessed when recording the transaction.
2. Open the transaction service. To edit a service in the *service* menu, click **[Edit]** ( ![edit-cog-icon](/img/content/yunio/edit-cog-icon.png){:class="img-responsive" style="display:inline"} icon). 
3. In the *SAP GUI* section click on the action you want to parameterize. The corresponding input screen opens.<br>
![transaction-actions](/img/content/yunio/transaction-actions.png){:class="img-responsive"}
4. Click on the fields you want to parameterize. The window "Parameterize Element" opens.<br>
All fields that can be parameterized are highlighted in green when hovering over them. <br>
5. Select **Input** to override the value when running the service. Fields that are set to **Input** become available as input parameters in the request body of the service.<br>
Select **Output** to return the value of this field when running the service. Fields that are set to **Output** become available in the response body of the service.<br>
![transaction-parameterize](/img/content/yunio/transaction-parameterize.png){:class="img-responsive"}
6. Optional: edit the name of the parameter.
7. Click **[OK]** to confirm your input.
8. Click **[Save]** to save your changes.

Input parameters are now accessible in the request body of the service.<br>
Ouput parameters are now accessible in the response body of the service.

Example: the following screenshot shows where to edit the input parameter *Input_Order* and where to access the output parameter *Output_Weight* in Swagger Inspector.<br>
![transaction-copy-download](/img/content/yunio/transaction-swagger-inspector.png){:class="img-responsive"}


****
#### Related Links
- [Knowledge Base Article: Working with Transactions](https://kb.theobald-software.com/yunio/working-with-transactions)
- [Knowledge Base Article: Working with Transaction VA02](https://kb.theobald-software.com/yunio/transaction-va02)
- [Knowledge Base Article: Working with Transaction XD02](https://kb.theobald-software.com/yunio/transaction-xd02)