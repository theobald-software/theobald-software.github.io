---
layout: page
title: Test the workflow
description: Test the workflow
product: erpconnect-services
parent: creating-purchase-requisitions
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=test_the_workflow
---

Navigate back to the **Purchasing Requests** list and create a new item with the following sample values:

![ECS-Nintex-Scenario-SAPFunction-11](/img/content/ECS-Nintex-Scenario-SAPFunction-11.png){:class="img-responsive"}

Select the new item in the list, then from the **Items** menu, select **Workflows**.

![ECS-Nintex-Scenario-SAPFunction-12](/img/content/ECS-Nintex-Scenario-SAPFunction-12.png){:class="img-responsive"}

**Start** the workflow.

The **Purchasing Request** item will be shown with a workflow status **In Progress**. You can click on the status to see that the workflow created a **Request approval** task which is Pending.

![ECS-Nintex-Scenario-SAPFunction-13](/img/content/ECS-Nintex-Scenario-SAPFunction-13.png){:class="img-responsive"}

**Approve** the workflow task and verify that a purchase requisition has been created in SAP.

![ECS-Nintex-Scenario-SAPFunction-14](/img/content/ECS-Nintex-Scenario-SAPFunction-14.png){:class="img-responsive"}
