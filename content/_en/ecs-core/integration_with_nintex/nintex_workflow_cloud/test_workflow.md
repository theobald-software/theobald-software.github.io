---
ref: ecscore-nintex-workflow-cloud-nwc-06
layout: page
title: Test workflow
description: Test workflow
product: ecs-core
parent: nintex_workflow_cloud
permalink: /:collection/:path
weight: 6
lang: en_GB
---

Test the workflow by filling out and submitting the web form. You receive the URL for the web form after publishing the workflow.

Note that the input values must be in SAP-compliant data format. If you have not defined conversion routines for the Delivery Date and Cost Center fields in the Web service, you must enter these in SAP-compliant format ("yyyyMMdd" as the date format and leading zeros for the 10-digit cost center).

![ecscore-nwc_13](/img/content/ecscore-nwc_13.png){:class="img-responsive"}

You can now see in the workflow instance details whether the workflow was completed successfully and a return value was generated. If this is the case, you can be sure that the purchase requisition was created successfully in SAP. 

![ecscore-nwc_14](/img/content/ecscore-nwc_14.png){:class="img-responsive"}