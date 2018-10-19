---
ref: ecs-sin-nis-creating-purchase-requisitions-05
layout: page
title: Test the enhanced workflow
description: Test the enhanced workflow
product: erpconnect-services
parent: creating-purchase-requisitions
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=test_the_enhanced_workflow
---

Create a new item in the **Purchasing Requests** list and start the workflow.

Approve the workflow task.

In the **Purchasing Requests** list, notice how the **Purchase Requisition** field is now populated with the requisition number from SAP.

![ECS-Nintex-Scenario-SAPFunction-23](/img/content/ECS-Nintex-Scenario-SAPFunction-23.png){:class="img-responsive"}

Select the **Completed** status link of the item and notice the entry in the workflow history.

The **Description** field is populated with the return message from the SAP function module.