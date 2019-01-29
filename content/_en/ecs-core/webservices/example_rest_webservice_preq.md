---
ref: ecs-core-webservice-designer-04
layout: page
title: Example scenario
description: Example scenario
product: ecs-core
parent: webservices
permalink: /:collection/:path
weight: 5
lang: en_GB
---

In the following example, we would like to create a REST service that can be used to create purchase requisitions (PReqs) in SAP. 

To create a new REST web service for ECS Core, open the WebService Designer and define your server and SAP connection (in the menu bar at *Connections*). 
For detailed information on web service authentication, see the section [Web Service Authentication](./webservice_authentication). 

The SAP connection is required to access the SAP metadata when creating the web service.

Enter your connection information in the *SAP Connection Dialog*. 

You must enter the following data: 
- Client 
- Language
- Username 
- Password

If you want to connect to a single application server, fill the *Host* and *System Number* fields. 
If you want to connect to a message server using load balancing, fill the Message Server , Group, and SID fields. 
It is also possible to connect to the SAP system using an HTTP web service. In this case, fill the *HTTP URL* field. 

If you do not know these parameters, look in your SAP GUI or ask your SAP Basis.

![ecscore-webservices1](/img/content/ecscore-wsd_1.png){:class="img-responsive"}

Start by creating a new operation called *PurchaseRequisition* in which you call the SAP module BAPI_REQUISITION_CREATE with the *Execute Function* activity. First save the activity without configuring parameters:

![ecscore-webservices2](/img/content/ecscore-wsd_2.png){:class="img-responsive"}

Under *Parameters*, create the following input parameters: 
- MATERIAL (Data Type: String)
- DOC_TYPE (Data Type: String)
- QUANTITY (Data Type: Decimal)
- PLANT (Data Type: String)
- DELIV_DATE (Data Type: DateTime)
- ACCTASSCAT (Data Type: String)

Map these to the corresponding values of the input table REQUISITION_ITEMS in the Execute Function activity.

Also create the input parameter COST_CTR and map it to the corresponding field of the input table REQUISITION_ACCOUNT_ASSIGNMENT.

Since a field conversion is not necessarily supported on the consumer side (for example, not in Nintex for Office365), it can be carried out in the WebService Designer. In this example, a field conversion is required for the input fields *Delivery Date* and *Cost Center*. SAP requires the date format *yyyyMMdd* and leading zeros for the 10-digit cost center.     

Define the following mapping expression after the parameter for the DELIV_DATE field: ToString("yyyyMMdd")
This converts the date to the SAP-compliant date format. 

![ecscore-webservices18](/img/content/ecscore-wsd_3.png){:class="img-responsive"}

Define the following mapping expression for the field COST_CTR: *ToString("0000000000")*. <br>
This converts the cost center to the SAP-compliant format with leading zeros. Alternatively, you can use the formula *PadLeft(10, '0')* to generate the leading zeros. 


![ecscore-webservices19](/img/content/ecscore-wsd_4.png){:class="img-responsive"}

Finally, create the return parameter ReqItemID (Data Type: String) and map it to the output parameter NUMBER.

![ecscore-webservices3](/img/content/ecscore-wsd_5.png){:class="img-responsive"}

Note that you can also create a *Custom Data Type* that contains the required fields. In this case, you would create a list parameter instead of scalar parameters in the parameter Dialog (List of [Custom Data Type]). You can use list parameters to create several items. The SAP module must allow this. 

Before deployment, you can explicitly choose which SAP connection maintained in ECS Core is to be used by the web service.

Open the *Server defined SAP connections dialog*:

![ecscore-webservices32](/img/content/ecscore-wsd_6.png){:class="img-responsive"}

All services created on the ECS Core site are listed here. If you do not explicitly select one, the default service application is used. 

![ecscore-webservices33](/img/content/ecscore-wsd_7.png){:class="img-responsive"}

Then transfer the web service to ECS Core with the *Deploy* button (in the menu bar of *Server actions for web services*). 

After successful deployment you will find the web service on the management site of your ECS Core installation under *Web Services*.
The web service can be exported here to an OpenAPI definition and the web service definition can be saved locally. In addition, the web service can also be removed with *Remove*. 

![ecscore-webservices6](/img/content/ecscore-wsd_8.png){:class="img-responsive"}

You can also find it in the IIS Manager under the Management Site (default port 8080) in the *bin>WebServices> submenu.

![ecscore-webservices6](/img/content/ecscore-wsd_9.png){:class="img-responsive"}