---
ref: ecs-wd-odata-web-services-04
layout: page
title: Working with operations
description: Working with operations
product: erpconnect-services
parent: odata-web-services
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=working_with_operations
---

Because of the limitations of the OData protocol in particular regarding parameter mapping with the standard operations *GetAll, Create, Update* and *Delete*, it might be necessary to work with additional operations when creating an OData web service. There is a separate Operations section in the WebService Designer's overview screen: 

![WSD-OData-Operations1](/img/content/WSD-OData-Operations1.png){:class="img-responsive"}

As an example we want to expand the above created scenario for purchase requisition creation using the standard function *Create* with an operation.  
The aim is to write the document number back in a return parameter in addition to the creation. Mapping of return parameters is not supported within the OData standard functions and only works by using an operation.  

Create a new operation named *ReqItem*. 

![WSD-OData-Operations2](/img/content/WSD-OData-Operations2.png){:class="img-responsive"}

You are then taken to the WebService Designer page. *Create an Execute Function* activity that calls up SAP BAPI BAPI_REQUISITION_CREATE. 

![WSD-OData-Operations3](/img/content/WSD-OData-Operations3.png){:class="img-responsive"}

Manually create the following parameters. The creation of *list of*- parameters  is not supported here. 


**Material:** Type: String, Direction: Input

**DocType:** Type: String, Direction: Input

**Plant:** Type: String, Direction: Input

**Quantity:** Type: Decimal, Direction: Input

**DeliveryDate:** Type: String, Direction: Input

**AccAssCat:** Type: String, Direction: Input

**CostCenter:** Type: String, Direction: Input

**Result:** Type: String, Direction: Return

![WSD-OData-Operations4](/img/content/WSD-OData-Operations4.png){:class="img-responsive"}

After that, map the parameters Material, DocType, Plant, Quantity, DeliveryDate, AccAssCat and CostCenter according the previous example to the items of input table REQUISTION_ITEMS and REQUISITION_ACCOUNT_ASSIGNMENT. Because the parameters are not named alike, the Automap function doesn't work here. 

Using parameter *DocType* as an example we demonstrate how to do the mapping. Following this procedure you can also map the other parameters. 


![WSD-OData-Operations5](/img/content/WSD-OData-Operations5.png){:class="img-responsive"}

![WSD-OData-Operations6](/img/content/WSD-OData-Operations6.png){:class="img-responsive"}

![WSD-OData-Operations7](/img/content/WSD-OData-Operations7.png){:class="img-responsive"}

![WSD-OData-Operations8](/img/content/WSD-OData-Operations8.png){:class="img-responsive"}

After that map output parameter NUMBER to return parameter *Result*. Return parameter *Result* will be selectable in the dropdown-list in the *Mapping* column.

![WSD-OData-Operations9](/img/content/WSD-OData-Operations9.png){:class="img-responsive"}

With this the mapping is finished and you can deploy the we service to your SharePoint server.

![WSD-OData-Operations10](/img/content/WSD-OData-Operations10.png){:class="img-responsive"}

When testing the web service in a REST client please note that you use HTTP-method *GET* because only this method can be processed when calling operations. All the predefined input parameters have to be inserted to the request. Please also note that you comply with the Odata regulations: [http://www.odata.org/documentation/odata-version-2-0/overview/](http://www.odata.org/documentation/odata-version-2-0/overview/) 
For decimal values (parameter *Quantity*) you have to add an *M* and leave the inverted commas for example. 

In ECS transferring parameters for OData has been optimized. Optional parameters are automatically supported for OData service operations by means of nullable data types. If no default value has been defined for a parameter the system value (mostly 0 for numeric data types) is used.  
 
If the execution of the web service was successful, the return parameter will be displayed in the return message. You can check in your SAP system afterwards if the purchase requisition with the given document number has been created.  

![WSD-OData-Operations11](/img/content/WSD-OData-Operations11.png){:class="img-responsive"}

