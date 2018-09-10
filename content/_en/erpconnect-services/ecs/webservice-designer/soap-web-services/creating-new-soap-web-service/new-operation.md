---
layout: page
title: New Operation
description: New Operation
product: erpconnect-services
parent: creating-new-soap-web-service
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=new_operation
---

The *WebService Designer* comes with a pre-built sample of a web service that returns customer data from an SAP ECC system.
The sample web service definition can be found in the catalog of the *WebService Designer*.
For this *Getting Started* scenario, we will use this pre-built sample.

Below the *Operations* window, select the *New* button.

The *New Operation Dialog* will be shown.
Select *Catalog* to browse the web service catalog.

![WSD-NewOperationDialog](/img/content/WSD-NewOperationDialog.PNG){:class="img-responsive"}

            

In the *Catalog Dialog*, select the *CustomerWebService* as the web service, then select *GetCustomers* as operation.
Select *OK*.

![WSD-CatalogDialog](/img/content/WSD-CatalogDialog.PNG){:class="img-responsive"}
             
            
    
Select *OK* in the *New Operation Dialog* to confirm your selection.
            
![WSD-NewOperationGetCustomer](/img/content/WSD-NewOperationGetCustomer.PNG){:class="img-responsive"}
       
            

The GetCustomer operation will be displayed in the *ECS Web Service Designer* window.
The operation has a *START* item with the name of the operation.
Following the *START* item is an *EXECUTE FUNCTION* activity which calls the remote-enabled function module *SD_RFC_CUSTOMER_GET* in SAP.
We will more closely examine this activity in the next steps.
After the *EXECUTE FUNCTION* activity the web service process will terminate.

![WSD-WebServiceDesigner1](/img/content/WSD-WebServiceDesigner1.PNG){:class="img-responsive"}