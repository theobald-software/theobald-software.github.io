---
ref: ecscore-nintex-workflow-cloud-nwc-05
layout: page
title: Configure NWC Workflow
description: Configure NWC Workflow
product: ecs-core
parent: nintex_workflow_cloud
permalink: /:collection/:path
weight: 5
lang: en_GB
---

Create a new NWC workflow. The newly created connector is located on the left side in the toolbox between the standard connectors. You can change the order of the Toolbox actions in the NWC settings under *Action and connector sorting*.

The name of the Web service operation that was previously created in [WebService Designer](../../webservices) is *PurchaseRequisiton*. Optional: The additional actions displayed in the connector are generic services that are generated if the option *Add default actions* to the definition is checked in the WebService Designer's OpenAPI settings.  

Drag the *PurchaseRequisition* action to the Designer canvas and open the configuration screen on the right side of the screen by clicking on the connector: 

![ecscore-nwc_5](/img/content/ecscore-nwc_5.png){:class="img-responsive"}

You will find the following setting options in the configuration screen:

**Connection**

Select the connection to your SAP system here. How to create a new connection is described here. The system also works directly via the configuration screen.  

**Custom Service Application**

Here you can explicitly choose which service is to be used in ECS Core for the SAP connection. If you do not specify a service in the WebService Designer or here, the standard service is used. 

**Input Parameters**

The connection settings list the input parameters of the Web service. The input parameters are listed in the format in which they were defined in the WebService Designer (scalar, lists, or structure).

**Output parameters**

The output parameters correspond to the return values of the Web service in the response body. 

Input and output parameters can be filled with values directly in the configuration screen (only possible for scalar parameters) or mapped to workflow variables.
Depending on whether the option Use variable names as "title" names was selected in the WebService Designer, the parameters are displayed with full path (e.g. result error message) or abbreviated (e.g. error message).  


**Configuration of the Connector**

First select the previously created connection under Connection. It is also possible to create the connection directly in the configuration screen with *Add new connection*. 

Then map the input parameters of the connector. In this example, we want to use a Nintex Web Form for the input. 

Click on Start Event and select Nintex as connector and Form as event. Select *Web* as availability. 

Complete the Web form with the following input fields:


**Material Number**: Text 

**Plant**: text

**Quantity**: number 

**Delivery Date**: text

**Cost Center**: Text 

{ecscore-nwc_10](/img/content/ecscore-nwc_10.png){:class="img-responsive"}

After saving, the input fields of the form are available as start event variables in the workflow. 

Map the variables to the input parameters of the connector in the configuration settings. Enter fixed values for the fields DOC_TYPE (=NB) and ACCTASSCAT (=K). In principle, you could also use the Web service. You can leave the field *Custom Service Application* empty; the default service is then used in ECS Core. 

![ecscore-nwc_11](/img/content/ecscore-nwc_11.png){:class="img-responsive"}

Then map the output parameters. Click on the *Result Result* parameter and add a workflow variable of type Text. 

In the *Result* output parameter, the purchase requisition is output if the purchase requisition was successfully created in SAP. The other output parameters are intended for error logging and can be mapped optionally.  
![ecscore-nwc_12](/img/content/ecscore-nwc_12.png){:class="img-responsive"}

You can write the variable just created for the output parameter to the workflow log using the *Log to instance details* action. 
Then save and publish the workflow.


You can now execute the workflow with the Nintex web form. Please note that the input values must be SAP-compliant. If you have not entered any conversion routines for the delivery date and the cost center in the web service, you must enter these fields SAP-conform ("yyyyyMMdd" for the date format and leading zeros for the 10-digit cost center).

![ecscore-nwc_13](/img/content/ecscore-nwc_13.png){:class="img-responsive"}

In the instance details of the workflow, you can see whether it was completed and whether the result parameter was logged successfully. If an ID is logged, you can be sure that the purchase requisition was created in SAP. 

![ecscore-nwc_14](/img/content/ecscore-nwc_14.png){:class="img-responsive"}

