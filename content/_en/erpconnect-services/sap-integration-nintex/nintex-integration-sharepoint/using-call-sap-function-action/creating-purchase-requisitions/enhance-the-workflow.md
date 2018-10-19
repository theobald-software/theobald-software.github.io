---
ref: ecs-sin-nis-creating-purchase-requisitions-04
layout: page
title: Enhance the workflow
description: Enhance the workflow
product: erpconnect-services
parent: creating-purchase-requisitions
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=enhance_the_workflow
---

Go back into the workflow designer and add the following standard workflow actions, right below the Call SAP Function action:

**Query XML** – use this action to parse the XML return message from the SAP BAPI call

**Log in history list** – use this action to write the XML return message to the workflow history of the **Purchasing Requests** list

**Update item** –  use this action to update the **Purchase Requisition** column of the **Purchasing Requests** list with the purchase requisition number from SAP.

![ECS-Nintex-Scenario-SAPFunction-15](/img/content/ECS-Nintex-Scenario-SAPFunction-15.png){:class="img-responsive"}

Modify the configuration of the **Call SAP Function** action.

Create a new workflow variable with name **BAPIReturn** and with type **Multiple lines of text** to capture the return message from the SAP function call.

![ECS-Nintex-Scenario-SAPFunction-16](/img/content/ECS-Nintex-Scenario-SAPFunction-16.png){:class="img-responsive"}

Create two more workflow variables:

Variable **LogMessage** with type **Single line of text**

Variable **PurchaseRequisition** type **Single line of text**

![ECS-Nintex-Scenario-SAPFunction-17](/img/content/ECS-Nintex-Scenario-SAPFunction-17.png){:class="img-responsive"}

In the **Call SAP Function** action, select the table **RETURN** for XML output and map the output to variable **BAPIReturn**, as shown below.


![ECS-Nintex-Scenario-SAPFunction-18](/img/content/ECS-Nintex-Scenario-SAPFunction-18.png){:class="img-responsive"}

Finally, add the output parameter **NUMBER** and map it to the workflow variable **PurchaseRequisition**.


![ECS-Nintex-Scenario-SAPFunction-19](/img/content/ECS-Nintex-Scenario-SAPFunction-19.png){:class="img-responsive"}

Save the configuration for the action **Call SAP Function**.

Configure the **Query XML** action.

Select **XML** as the source for the action and insert the reference to the workflow variable **Return**.

As output, specify the XPath expression **/TABLES/TABLE/RETURN/MESSAGE**. This will output only the message portion of the SAP BAPI return structure.

Select **Text** as return results and store the results in the **LogMessage** variable.

![ECS-Nintex-Scenario-SAPFunction-20](/img/content/ECS-Nintex-Scenario-SAPFunction-20.png){:class="img-responsive"}

**Save** the configuration of the **Query XML** action.

Configure the **Log in history list** action.

Insert a reference to the **LogMessage** variable in the workflow. This will write the contents of the **LogMessage** variable to the workflow history of the list item.

![ECS-Nintex-Scenario-SAPFunction-21](/img/content/ECS-Nintex-Scenario-SAPFunction-21.png){:class="img-responsive"}

**Save** the configuration of the **Log in history list** action.

Configure the **Update** item action.

Select **Current** item for update, and **Purchase Requisition** as the field to update.

Set the **Purchase Requisition** field to the value of the workflow variable **PurchaseRequisition**.

![ECS-Nintex-Scenario-SAPFunction-22](/img/content/ECS-Nintex-Scenario-SAPFunction-22.png){:class="img-responsive"}

**Save** the configuration of the **Update** item action.

**Save** and **Publish** the workflow.