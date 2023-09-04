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
This section shows how to use the integration type *Transaction*.<br>
Use *Transaction* to access, configure and parameterize SAP transactions for automation.

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
4. Fill out the input fields as you would in the SAP GUI. Input fields can be parameterized once the transaction is recorded, see [Parameterize Transactions](#parameterize-transactions).
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
2. In the *SAP GUI* section click the action you want to parameterize. The corresponding input screen opens.<br>
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
![transaction-copy-download](/img/content/yunio/transaction-swagger-inspector.png){:class="img-responsive"}

#### Skip Popups
When recording a transaction workflow, dynamic popup screens can be displayed by SAP. The popup screens can vary depending on input values.<br>
The input parameter `SkipPopups` defines how to handle unexpected popup messages that show up at runtime.<br>


When `SkipPopups` is set to *true*, the following actions apply:

| Popup in Recording | Popup during a service run | Action |
| :------: |:---: | :--- |
| x | x | The popup is handled like a regular screen. |
| x |  | The service ignores the recorded screen and continues to the next screen. |
|  | x | The popup is skipped/confirmed. |


****
#### Related Links
- [Knowledge Base Article: Working with Transactions - Table Parameters](https://kb.theobald-software.com/yunio/transaction-table-parameters)
- [Knowledge Base Article: Working with Transaction IE01](https://kb.theobald-software.com/yunio/transaction-ie01)
- [Knowledge Base Article: Working with Transaction PA40](https://kb.theobald-software.com/yunio/transaction-pa40)
- [Knowledge Base Article: Working with Transaction VA02](https://kb.theobald-software.com/yunio/transaction-va02)
- [Knowledge Base Article: Working with Transaction XD02](https://kb.theobald-software.com/yunio/transaction-xd02)
