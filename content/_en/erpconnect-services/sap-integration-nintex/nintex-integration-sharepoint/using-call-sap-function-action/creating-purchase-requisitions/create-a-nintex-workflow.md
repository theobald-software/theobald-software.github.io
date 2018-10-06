---
layout: page
title: Create a Nintex workflow
description: Create a Nintex workflow
product: erpconnect-services
parent: creating-purchase-requisitions
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=create_a_nintex_workflow
---

Navigate to your new **Purchasing Requests** list and under **List -> Workflow Settings** select **Create a Workflow in Nintex Workflow**.

![ECS-Nintex-Scenario-SAPFunction-2](/img/content/ECS-Nintex-Scenario-SAPFunction-2.png){:class="img-responsive"}

Select the **Blank** workflow template.

In the Nintex Workflow designer, add the following two workflow actions as shown below:

**Request approval** (from the **User interaction** group)

**Call SAP Function** (from the **ERPConnect Services** group)

![ECS-Nintex-Scenario-SAPFunction-3](/img/content/ECS-Nintex-Scenario-SAPFunction-3.png){:class="img-responsive"}

Configure the **Request approval** action with the following properties:

**Approvers** = ApprovalManagers (group of approvers)

**Approval options** = Only one approval is required

**Save** the configuration.

![ECS-Nintex-Scenario-SAPFunction-4](/img/content/ECS-Nintex-Scenario-SAPFunction-4.png){:class="img-responsive"}

Configure the **Call SAP Function** action.<br>
Specify the **ERPConnect Service Application** for your SAP system. You can configure one or more ERPConnect Service Applications in SharePoint **Central Administration**

For the SAP function, specify **BAPI_REQUISITION_CREATE**, the standard SAP BAPI for creating a purchase requisition.

Click on **(Re-)Load Parameters**.

![ECS-Nintex-Scenario-SAPFunction-5](/img/content/ECS-Nintex-Scenario-SAPFunction-5.png){:class="img-responsive"}

Configure the function-specific parameters:

            
Expand the **Tables** section and click table Table **REQUISITION_ITEMS** next to *Table Input*.

![ECS-Nintex-Scenario-SAPFunction-25](/img/content/ECS-Nintex-Scenario-SAPFunction-25.png){:class="img-responsive"}

Open the editor screen to map the following fields to values and references:

**DOC_TYPE** = **NB** (type **NB** in the field as a constant value)

![ECS-Nintex-Scenario-SAPFunction-7](/img/content/ECS-Nintex-Scenario-SAPFunction-7.png){:class="img-responsive"}

Scroll down and map the following fields to values and references:

**MATERIAL** = Select **Insert Reference -> Item Properties -> Material**

**PLANT** = Select **Insert Reference -> Item Properties -> Plant**

**MAT_GRP** = Select **Insert Reference -> Item Properties -> Material Group**

**QUANTITY** = Select **Insert Reference -> Item Properties -> Qty**

**DELIV_DATE** = Select **Insert Reference -> Item Properties -> Delivery Date**

Format the **Delivery Date** value using the built-in function: **fn-FormatDate(Delivery Date, yyyyMMdd)**

**ACCTASSCAT = K** (type K in the field as a constant value for cost center assignment)

![ECS-Nintex-Scenario-SAPFunction-8](/img/content/ECS-Nintex-Scenario-SAPFunction-8.png){:class="img-responsive"}

In the **Table input** section open table **REQUISITION_ACCOUNT_ASSIGNMENT**.

Open the editor screen and map the following fields to values and references:

**COST_CTR** = Select **Insert Reference -> Item Properties -> Cost Center**

Format the **Cost Center** value using the built-in function: **fn-PadLeft(Cost Center, 10, 0)**

![ECS-Nintex-Scenario-SAPFunction-9](/img/content/ECS-Nintex-Scenario-SAPFunction-9.png){:class="img-responsive"}

**Save** the configuration of the **Call SAP Function** action.

Under **Workflow Settings**, verify that the workflow is configured to **Start** manually.

![ECS-Nintex-Scenario-SAPFunction-10](/img/content/ECS-Nintex-Scenario-SAPFunction-10.png){:class="img-responsive"}

**Save** the workflow, e.g. as **SAP Purchasing Requests**, then **Publish** the workflow.