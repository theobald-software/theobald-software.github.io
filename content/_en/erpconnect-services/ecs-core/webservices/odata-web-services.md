---
ref: ecs-core-webservice-designer-07
layout: page
title: OData web services
description: OData web services
product: erpconnect-services
parent: webservices
permalink: /:collection/:path
weight: 7
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=odata_web_services1
---

To create an OData web service for ECS Core click *New* in the *Package* section of start screen and select the option *Creates Odata specific web service*. 

Note that the creation of OData web services has serious limitations compared to REST web service that's why we recommend to use REST web services for your cloud scenarios. You find more detailed information about the exact limitations in the following section. 

![ecscore-webservices7](/img/content/ecscore-webservices7.png){:class="img-responsive"}

Name your web service and create a new Custom Data Type. For creating purchase requisitions in SAP we use the standard function BAPI_REQUISITION_CREATE. Use the import button to import the following parameters in the *New Custom Data Type* Dialog. These parameters are the minimum required fields for creating purchase requisitions in SAP. 

**DOC_TYPE**       (Document Type)<br>
**MATERIAL**        (Material)<br>
**PLANT**              (Plant)<br>
**QUANTITY**       (Quantity)<br>
**DELIV_DATE**    (Delivery Date)<br>
**ACCTASSCAT**   (Account Assignment Category)<br>

![ecscore-webservices9](/img/content/ecscore-webservices9.png){:class="img-responsive"}

Save your entries with *Finish* and manually create an additional parameter named **COST_CTR**.  

![ecscore-webservices10](/img/content/ecscore-webservices10.png){:class="img-responsive"}

After that create a new entity and select the above created Custom Data Type in the New Entity Dialog window. It is unimportant which parameter you enter in the *Key* field (i.e. DOC_TYPE). Enter an *Entity Set Name* and select CRUD operation Create with a double click. 

![ecscore-webservices11](/img/content/ecscore-webservices11.png){:class="img-responsive"} 

Use the *Execute Function Activity* for calling BAPI_REQUISITION_CREATE.  

![ecscore-webservices12](/img/content/ecscore-webservices12.png){:class="img-responsive"}  

Important note: You may notice that in the *Parameters* section you have no option to create or edit any parameters. This is a restriction imposed by OData format. Thus the creation of return parameters and output parameters is not possible which means that OData webservices with ECS Core cannot be used for writing any SAP output parameters back to SharePoint.        

You have to do the parameter mapping with the above created Custom Data Type which is available as a structure parameter in the *Parameters* section.

Open the *Execute Function* activity and scroll down to input table REQUISITION_ITEMS. Click through the mapping dialog until you get to the mapping table. Do the mapping manually for parameters  **DOC_TYPE, MATERIAL, PLANT, QUANTITY, DELIV_DATE** and **ACCTASSCAT**. The mapping of structure parameters to table fields is described in detail [here](../../ecs/webservice-designer/input-parameter-mapping/structure-parameters).


![ecscore-webservices13](/img/content/ecscore-webservices13.png){:class="img-responsive"} 

After that map parameter **COST_CTR** to the corresponding field of input table REQUISITION_ACCOUNT_ASSIGNMENT.

Save your entries with OK and go back to the starting screen. You can deploy the web service to ECSCore then. 

You will find the web service in the Extensions section of your ECSCore management site or in subdirectory WSD of port 8080 site in the IIS manager. 

How to test the web service in a REST client is described in the following chapter.  

How to call the web service in Nintex for Office 365 is described in chapter [SAP integration with Nintex](../../sap-integration-nintex).  