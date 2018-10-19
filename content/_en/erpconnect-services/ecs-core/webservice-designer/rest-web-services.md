---
ref: ecs-core-webservice-designer-03
layout: page
title: REST web services
description: REST web services
product: erpconnect-services
parent: webservice-designer
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=rest_web_services
---

To create a REST web service for ECS Core choose the option *Creates default web service* when starting a new web service and confirm with *OK*.
 
In the following example we want to design a REST web service for Purchase Requisition creation in SAP.  

Start by creating a new web service operation. For creating purchase requisitions we call the standard BAPI BAPI_REQUISITION_CREATE with the *Execute Function* activity:  

![ecscore-webservices2](/img/content/ecscore-webservices2.png){:class="img-responsive"}

Create the following parameters manually in the Parameters dialogue and map them to the corresponding fields of input table REQUISITION_ITEMS. These parameters are the minimum required fields for creating purchase requisitions in SAP:

**DOC_TYPE**       (Document Type)<br>
**MATERIAL**        (Material)<br>
**PLANT**              (Plant)<br>
**QUANTITY**       (Quantity)<br>
**DELIV_DATE**    (Delivery Date)<br>
**ACCTASSCAT**   (Account Assignment Category)<br>

Furthermore create input parameter **COST_CTR** and map it on the corresponding field of input table REQUISITION_ACCOUNT_ASSIGNMENT.

Because field conversion is not necessarily supported in the cloud solution (i.e. Nintex for Office 365) we can do that in the WebService Designer. In this example we would need field conversion for the input fields *Delivery Date and Cost Center*. SAP requires date format yyyyMMdd and leading zeros for the 10-digit cost center number. 

Enter the following expression in the mapping dialog for field DELIV_DATE:

![ecscore-webservices18](/img/content/ecscore-webservices18.png){:class="img-responsive"}

Enter the following expression in the mapping dialog for field COST_CTR:

![ecscore-webservices19](/img/content/ecscore-webservices19.png){:class="img-responsive"}

The field conversion will now take place within the webservice, when input values are passed from the external system. Instead of formula *ToString("0000000000")* you can also use formula *PadLeft(10, '0')* to automatically generate leading zeros for the 10-digit cost center. 


Finally create return parameter **ReqItemID** and map it to the output parameter NUMBER.

![ecscore-webservices3](/img/content/ecscore-webservices3.png){:class="img-responsive"}

Note that you could also create a *Custom Data Type* containing the minimum required fields. In this case you would use a list parameter in the parameters dialog (List of [Custom Data Type name]) instead of scalar parameters. By using list parameters it is possible to create multiple positions. 

Before the deployment of the web service you can explicitly choose which Service Application for the SAP connection from ECS Core should be taken. 

Open the ECS Service Application Selection Dialog:

![ecscore-webservices32](/img/content/ecscore-webservices32.png){:class="img-responsive"}

All Service Applications maintained on the ECS Core Management Site are listed here. If you don't select one, the default application is taken.

![ecscore-webservices33](/img/content/ecscore-webservices33.png){:class="img-responsive"}

After that deploy the web service with the *Deploy* button. 
The web service will be listed then in the *Extensions* section on the ECS Core Management Site:

![ecscore-webservices5](/img/content/ecscore-webservices5.png){:class="img-responsive"}

You will also find it in the IIS Manager on the port 8080 site in subdirectory WSD:

![ecscore-webservices6](/img/content/ecscore-webservices6.png){:class="img-responsive"}

How to call the web service in Nintex for Office 365 or Nintex Workflow Cloud is described in chapter [SAP integration with Nintex](../../sap-integration-nintex). 