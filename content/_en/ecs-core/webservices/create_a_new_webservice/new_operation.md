---
ref: ecscore-wd-creating-new-web-service-01
layout: page
title: New operation
description: New operation
product: ecs-core
parent: create_a_new_webservice
permalink: /:collection/:path
weight: 1
lang: en_GB
---

The WebService Designer uses the web service catalog to provide a finished example of a web service that delivers customer data from SAP. <br>
In this scenario we will use this finished example. 

Under the *Operations* section, click the *Create a new operation* button.
The *New Operation Dialog* dialog box appears. Click on *Catalog*. <br>

Choose *SAPCustomerWebService* as the Web service, then choose the operation *GetCustomers* and Click OK. <br>

![WSD-CatalogDialog](/img/content/ecscore-wsd_27.png){:class="img-responsive"}

Click OK again in the *New Operation Dialog* window. 

The *GetCustomer* operation is displayed in the WebService Designer window.<br>
The operation has a START point with the name of the operation.
This is followed by an *EXECUTE FUNCTION* activity that calls the remote-enabled function module SD_RFC_CUSTOMER_GET in SAP. <br>
In the next steps we will take a closer look at the activity. <br>
After the EXECUTE FUNCTION activity, the web service operation is terminated. 

![WSD-OperationDialog](/img/content/WSD-WebServiceDesigner1.PNG){:class="img-responsive"}