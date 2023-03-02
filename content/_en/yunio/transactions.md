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

### Prerequisites

The SAP connection assigned to a transaction service must use an SAP dialog user. 

{: .box-tip }
**Tip:** The transaction feature offers the same functionality as the SAP GUI. 
Therefore knowing how to navigate the SAP GUI makes it easier to use the transaction feature.

### Record Transactions

1. Create a new service of type *Transaction*.  
2. Enter a transaction code (1). <br>
![transaction](/img/content/yunio/transaction.png){:class="img-responsive"}
3. Click **[Start]** to run the transaction. Content from the SAP GUI is displayed. 
4. Fill out the input fields as you would in the SAP GUI. Input fields can be parameterized once the transaction is recorded, see [Parameterize Transactions](parameterize-transactions).
5. Click **[Submit]** (2) to enter your input.
All executed actions are logged in the section *GUI Steps* (3). <br>
![transaction-va02](/img/content/yunio/transaction-va02.png){:class="img-responsive"}
6. Click **[Save]** once you finished recording.<br>
Alternatively, click **[Stop]** to start parameterizing, see [Parameterize Transactions](#parameterize-transactions).

### Parameterize Transactions

{: .box-note }
**Note:** All fields that need to be parameterized must be available in the transaction service as *GUI Steps*. To parameterize a field in a specific tap or menu, the tab or menu must be accessed when recording the transaction.

Follow the steps below to assign input and output parameters to a transaction service. <br>

1. Open the transaction service. 
2. In the *SAP GUI* section click on the action you want to parameterize. The corresponding input screen opens.<br>
3. Click on the fields you want to parameterize. The window "Parameterize Element" opens.
All fields that can be parameterized are highlighted in green when hovering over them. <br>
![transaction-actions](/img/content/yunio/va02param.gif)
4. Select **Input** to override the value when running the service. Fields that are set to **Input** become available as input parameters in the request body of the service.
5. Select **Output** to return the value of this field when running the service. Fields that are set to **Output** become available in the response body of the service.
6. Optional: Under **Parameter name** you can edit the name of the parameter.<br>
![transaction-parameterize](/img/content/yunio/transaction-parameterize.png){:class="img-responsive"}
7. Click **[OK]** to confirm your input.
8. Click **[Save]** to save your changes.

Input parameters are now accessible in the request body of the service.<br>
Ouput parameters are now accessible in the response body of the service.<br>

Example: <br>
The following screenshot shows where to edit the input parameter *Input_Order* and where to access the output parameter *Output_Weight* in Swagger Inspector.<br>
![transaction-copy-download](/img/content/yunio/transaction-swagger-inspector.png){:class="img-responsive"}


****
#### Related Links
- [Knowledge Base Article: Working with Transactions](https://kb.theobald-software.com/yunio/working-with-transactions)
- [Knowledge Base Article: Working with Transaction VA02](https://kb.theobald-software.com/yunio/transaction-va02)
- [Knowledge Base Article: Working with Transaction XD02](https://kb.theobald-software.com/yunio/transaction-xd02)