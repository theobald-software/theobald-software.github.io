---
ref: ecs-business-integration-apps-03
layout: page
title: SAP Quotation
description: SAP Quotation
product: erpconnect-services
parent: business-integration-apps
childidentifier: sap-quotation
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=sap-quotation
---

With the Business Integration App SAP Quotation, it is possible to create quotations for materials or services in SAP or to use a convenient search function to obtain data already generated from the SAP system. Whereas the SAP transaction for quotation creation consists of multiple input levels and ribbons the Business Integration App’s user interface is kept as simple as possible. Only the minimum required input fields for quotation creation are provided. It is therefore possible for users without any specific SAP knowledge to create data records which can be processed further by SAP specialists. 


**App structure**

The App consists of one single selection screen with a manageable number of input fields. In the main section all fields which are necessary to create a qoutation in SAP are listed and in the lower part of the screen material positions can be added to the quotation. Furthermore, there is also the possibility to display already created quotations with a simple search function. 

![ECS-BIA-SAPQuotation1](/img/content/ECS-BIA-SAPQuotation1.png){:class="img-responsive"}

**Create a quotation**

To prepare a quotation all mandatory fields have to be filled with data. By clicking a field, the user gets informed if the field is required. 

![ECS-BIA-SAPQuotation2](/img/content/ECS-BIA-SAPQuotation2.png){:class="img-responsive"}

The entries have to be valid values in the SAP system. For some entry boxes there is an input help which can be used to search for specific values like the SAP key or long text.

![ECS-BIA-SAPQuotation3](/img/content/ECS-BIA-SAPQuotation3.png){:class="img-responsive"}

By using the button *Add new Item* it is possible to add material positions to the quotation. There is also an input help available to search for all customized materials in the SAP system.  

Adding a new item:

![ECS-BIA-SAPQuotation4](/img/content/ECS-BIA-SAPQuotation4.png){:class="img-responsive"}

It is possible to add multiple positions to the quotation. When all data entries have been made the quotation can be saved with the disk symbol. When you save the quotation the entered data is validated. False entries cannot be saved and an error message is thrown. After successful saving the data is posted to the SAP system into the corresponding tables (e.g. VBAP and VBAK) and databases.    

Data validation after saving:

![ECS-BIA-SAPQuotation5](/img/content/ECS-BIA-SAPQuotation5.png){:class="img-responsive"}

Successful quotation creation:

![ECS-BIA-SAPQuotation6](/img/content/ECS-BIA-SAPQuotation6.png){:class="img-responsive"}

**Display a quotation**


Besides the creation of new quotations the app also offers the possibility to display already created quotations by searching for a specific document number. To display a quotation, you just have to click the magnifier symbol and enter the document number of the quotation you want to display.  

Call up a quotation:

![ECS-BIA-SAPQuotation7](/img/content/ECS-BIA-SAPQuotation7.png){:class="img-responsive"}

All quotations with the status open or already completed can be displayed with their core information. 

Display a specific document number:

![ECS-BIA-SAPQuotation8](/img/content/ECS-BIA-SAPQuotation8.png){:class="img-responsive"}

The other fields in the menu bar contain functionalities such as resetting the input fields, creating new quotations or listing the last SAP messages generated during data validation. 

Menu bar:

![ECS-BIA-SAPQuotation9](/img/content/ECS-BIA-SAPQuotation9.png){:class="img-responsive"}

**Application example**


With the button *Init inputs* in the menu bar the input fields are filled with test data, which can be used for testing the creation of a quotation.  

Init inputs:

![ECS-BIA-SAPQuotation10](/img/content/ECS-BIA-SAPQuotation10.png){:class="img-responsive"}

Save the quotation with the disc symbol. The quotation will be posted to the SAP system and a document number will be created. 

Creation of a new document number:

![ECS-BIA-SAPQuotation11](/img/content/ECS-BIA-SAPQuotation11.png){:class="img-responsive"}

To write down the document number for checking the quotation creation in the SAP system you can reload the SAP message by clicking the button *Last SAP message*. 

Reload the last SAP message:

![ECS-BIA-SAPQuotation12](/img/content/ECS-BIA-SAPQuotation12.png){:class="img-responsive"}

With transaction VA23 you can call up the created quotation in your SAP system. Open transaction VA23 in the transaction field.

Transaction VA23:


![ECS-BIA-SAPQuotation13](/img/content/ECS-BIA-SAPQuotation13.png){:class="img-responsive"}

In the initial screen click on Quotations.

Initial screen display quotations:

![ECS-BIA-SAPQuotation14](/img/content/ECS-BIA-SAPQuotation14.png){:class="img-responsive"}

In the following screen enter the basic parameters of the quotation you just created: Sold-To-Party, Material, Valid-From-Date. 

![ECS-BIA-SAPQuotation15](/img/content/ECS-BIA-SAPQuotation15.png){:class="img-responsive"}

Confirm your entries with Enter and you will get a list of open quotations belonging to these selection criteria. 

List of open quotations:

![ECS-BIA-SAPQuotation16](/img/content/ECS-BIA-SAPQuotation16.png){:class="img-responsive"}

Alternatively you can enter the document number directly in the initial screen and in that way call up detailed information about the created quotation. 

Call up a specific document number:

![ECS-BIA-SAPQuotation17](/img/content/ECS-BIA-SAPQuotation17.png){:class="img-responsive"}

By clicking the buttons *Sales, Item overview* and *Ordering party* you will always come to the overview screen for displaying quotations but you will end up in different ribbons with different information in it.

Display screen quotations:

![ECS-BIA-SAPQuotation18](/img/content/ECS-BIA-SAPQuotation18.png){:class="img-responsive"}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}