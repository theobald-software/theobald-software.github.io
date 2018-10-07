---
layout: page
title: Configure the NWC workflow
description: Configure the NWC workflow
product: erpconnect-services
parent: nintex-workflow-cloud-nwc
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=configure_the_nwc_workflow
---

Create a new NWC workflow. The newly created custom connector is located on the lefthand side among the standard connectors. You can change the order of the actions in the NWC settings under *Action and connector sorting*.

*PurchaseRequisiton* is the name of the web service operation previously created in the [WebService Designer](../../ecs-core/webserivce-designer/rest-web-services). Optional: The other actions displayed in the custom connector are generic functions that can additionally be created by checking the *Add default actions to the definition* option in the WebService Designer's OpenAPI Options.  

Drag & drop the *PurchaseRequisition* action to the designer and open the configuration screen by clicking on the connector: 

![ecscore-nwc_5](/img/content/ecscore-nwc_5.png){:class="img-responsive"}

You will find the following configuration fields there:

**Connection**<br>
Select the connection to your SAP system here. How to create a new connection is described [here](./create-a-new-connection). 

**Custom Service Application**<br>
You can explicitly define here which service application from ECS Core for the SAP connection is used. If you have neither selected a service application in the WebService designer nor in this section the default service application is used. 

**Input parameters**<br>
Below the connection the web service's input parameters are listed. 
Scalar input parameters are displayed as single values whereas complex parameters are displayed in the list or structure they are in.  

**Output parameters**<br>
The web service's output parameters correspond to the web service's response body. 

Input and output parameters can either be filled with fixed values directly in the configuration screen (this only applies to scalar parameters) or mapped to workflow variables.  <br>
Depending on if the option *Use variable names as "title" names* was selected in the OpenAPI settings, the parameters will be listed with the full technical path (i.e. result error message) or abbreviated (i.e. error message).

*Configuration of the connector*

First select the previously created connection under *Connection*. It is also possible to create the connection directly from the configuration screen by clicking on *Add new connection*. 

After that map the connector's input parameters. We want to enter the input parameters with a Nintex Web form. 
Click on *Start Event* and select *Nintex* as Connector and *Form* as Event. For availabilty select *Web*. 

Design the form containing the following parameters:

**Material Number**: Text 

**Plant**: Text

**Quantity**: Number 

**Delivery Date**: Text

**Cost Center**: Text 


![ecscore-nwc_10](/img/content/ecscore-nwc_10.png){:class="img-responsive"}

After saving the form these fields are available as start event variables in the worfklow.  

Map the start event variables to the input parameters in the custom connector's configuration screen. Enter fixed values for DOC_TYPE (=NB) and ACCTASSCAT (=K).
You can leave the *Custom Service Application* field empty. 


![ecscore-nwc_11](/img/content/ecscore-nwc_11.png){:class="img-responsive"}

After that map the output parameters. Click on parameter *Result Result* and add a workflow variable from type *Text*. 
In the *Result* output parameter the Purchase Requisition ID will be written if the item was sucessfully created. The other output parameters are merely for error logging and can be mapped optionally. 


![ecscore-nwc_12](/img/content/ecscore-nwc_12.png){:class="img-responsive"}

The output variable can be logged with the *Log to instance details* standard workflow action. 
Save and publish the workflow afterwards.