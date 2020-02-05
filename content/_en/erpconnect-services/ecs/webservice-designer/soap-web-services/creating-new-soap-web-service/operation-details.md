---
ref: ecs-wd-sws-creating-new-soap-web-service-02
layout: page
title: Operation Details
description: Operation Details
product: erpconnect-services
parent: creating-new-soap-web-service
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=operation_details
---

In the following steps, we will examine the *EXECUTE FUNCTION* step of the *GetCustomers* operation more closely.
Right-click on the *EXECUTE FUNCTION* step and select *Edit*.

![WSD-ExecuteFunctionEdit](/img/content/WSD-ExecuteFunctionEdit.png){:class="img-responsive"}

In the *Execute Function Activity Dialog*, you can see the name of the function module being executed in *SAP (SD_RFC_CUSTOMER_GET)*.
Below the name are the *IMPORTS, EXPORTS, TABLES* and *Output* parameters of the function module, with their mappings.

The *EXPORTS* structure has two *Input* parameters. Parameter *NAME1* is mapped to the web service parameter *namePattern*.
This parameter *namePattern* will be available when the web service is called.

![WSD-FM-Exports](/img/content/WSD-FM-Exports.PNG){:class="img-responsive"}

The *TABLES* structure has table *CUSTOMER_T* as *Output* parameters. The table of the SAP function module is mapped to the web service parameter *customerList*.
This parameter *customerList* will be available when the web service is called.

![WSD-FM-Tables](/img/content/WSD-FM-Tables.PNG){:class="img-responsive"}

Click *OK* to close the *Execute Function Activity Dialog*.

In the *ECS Web Service Designer dialog*, select the *Parameters* button.

![WSD-WebServiceDesigner2](/img/content/WSD-WebServiceDesigner2.PNG){:class="img-responsive"}

The *Parameters Dialog* will display the same web service parameters that we saw in the previous step. Use this dialog to assign a default value to a parameter.

![WSD-Parameters](/img/content/WSD-Parameters.PNG){:class="img-responsive"}

Click *OK* to close the *Parameters Dialog*.

In the *ECS Web Service Designer* dialog, select the *Custom Data Types* button.
The *Custom Data Types Dialog* will be displayed.

![WSD-CustomerDataTypes](/img/content/WSD-CustomerDataTypes.PNG){:class="img-responsive"}

Select the data type *Customer* and click *Edit*.  
The data type *Customer* has two properties - *ID* and *Name*.

![WSD-CustomDataTypesEdit](/img/content/WSD-CustomDataTypesEdit.PNG){:class="img-responsive"}

Select *OK* to close all open dialogs.