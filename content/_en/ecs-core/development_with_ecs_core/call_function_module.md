---
ref: ecs-core-developing-02
layout: page
title: Call function module 
description: Call function module
product: ecs-core
parent: development_with_ecs_core
permalink: /:collection/:path
weight: 2
lang: en_GB
---

In the previous example, we read data from an SAP table using the function tEcs.executeXql(). <br>
Now we want to repeat the scenario, but call a function module using the function tEcs.executeFunction() to read SAP customer data.
It would also be possible to use a function module to write data to SAP. 

All knowledge from the previous example [Getting started with ECS Core and SharePoint Online](./getting_started_with_ecscore_and_sharepoint_online) is assumed here. <br>
In this example, we will only change the step to call the SAP function module. 


In SAP, we first check the function module SD_RFC_CUSTOMER_GET to read customer data. <br>
The input parameter NAME1 is set to X* as an example. 
After execution, the result table CUSTOMER_T contains the 5 data records of the customer data.  

![ecscore-gettingstarted-11](/img/content/ecscore-gettingstarted-11.jpg){:class="img-responsive"}

![ecscore-gettingstarted-12](/img/content/ecscore-gettingstarted-12.jpg){:class="img-responsive"}

Now let's take a look at the step with JavaScript code for calling the SAP function module.  


**Step 3: Insert JavaScript code for calling the SAP function module**. 


The function tEcs.executeFunction() is used to call the function module *SD_RFC_CUSTOMER_GET*. <br>
The input is assigned to the input parameter *NAME1*. <br>
The table *CUSTOMER_T* returns the result. 

![ecscore-gettingstarted-13](/img/content/ecscore-gettingstarted-13.jpg){:class="img-responsive"}

Now run the SharePoint Add-in. You will get the following result:

![ecscore-gettingstarted-14](/img/content/ecscore-gettingstarted-14.jpg){:class="img-responsive"}