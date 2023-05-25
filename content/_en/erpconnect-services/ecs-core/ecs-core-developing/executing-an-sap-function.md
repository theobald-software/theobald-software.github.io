---
ref: ecs-core-developing-02
layout: page
title: Executing an SAP function
description: Executing an SAP function
product: erpconnect-services
parent: ecs-core-developing
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecsc-executing-an-sap-function
---

In the last sample we have used the function tEcs.executeXql() to extract data from an SAP table.
Now we will repeat the last sample to execute an SAP function using the function tEcs.executeFunction(). 

For all other basics please refer to the sample in [Getting started with ECS Core and SharePoint Online](./getting-started-with-ecs-core-and-sharepoint-online). 
For the following section the knowledge about the basic usage is assumed!


Let's check the following demo function module on the SAP side: SD_RFC_CUSTOMER_GET.<br> 
We will set the input parameter NAME1 e.g. to X* . <br>
The table CUSTOMER_T contains the result of 5 entries.

![ecscore-gettingstarted-11](/img/content/ecscore-gettingstarted-11.png){:class="img-responsive"}

![ecscore-gettingstarted-12](/img/content/ecscore-gettingstarted-12.png){:class="img-responsive"}

For this sample we would repeat all the steps of the sample Getting started.
We will only change the JavaScript code in Step 3 to call the SAP function. 


**Step 3: Add Javascript code for SAP connectivity**  


As you can you see below in the JavaScript code, the method *tEcs.executeFunction()* is used to call the SAP function module *SD_RFC_CUSTOMER_GET*. 
The input will be set to the parameter *NAME1*. 
The result is displayed using the table *CUSTOMER_T* . 

![ecscore-gettingstarted-13](/img/content/ecscore-gettingstarted-13.png){:class="img-responsive"}

Deploy the project an run the App. You should have the following result:

![ecscore-gettingstarted-14](/img/content/ecscore-gettingstarted-14.png){:class="img-responsive"}

