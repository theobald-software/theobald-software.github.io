---
ref: ecs-core-integration365-microsoft-flow-05
layout: page
title: Test Flow
description: Test Flow
product: ecs-core
parent: integration_with_microsoft_flow
permalink: /:collection/:path
weight: 5
lang: en_GB
---

You can test the flow by triggering the start event. Enter valid input values in the Microsoft Forms form and submit it.

Note that the input values must be in SAP-compliant data format. If you have not defined conversion routines for the Delivery Date and Cost Center fields in the Web service, you must enter these in SAP-compliant format ("yyyyMMdd" as the date format and leading zeros for the 10-digit cost center).

![ecscore_flow_6](/img/content/ecscore_flow_6.png){:class="img-responsive"}

In the workflow history, you can check whether the flow was completed successfully and whether a purchase requisition number was created in SAP.  

![ecscore_flow_13](/img/content/ecscore_flow_13.png){:class="img-responsive"}
