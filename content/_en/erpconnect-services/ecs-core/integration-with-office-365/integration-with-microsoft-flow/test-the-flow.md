---
ref: ecs-core-integration365-microsoft-flow-05
layout: page
title: Test the Flow
description: Test the Flow
product: erpconnect-services
parent: integration-with-microsoft-flow
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=test_the_flow
---

You can test the flow by triggering it through the start event. Enter some valid input values in the form and submit it.

Please note that input values have to be in SAP-compliant format. If you haven't entered conversion routines for *Delivery Date* and *Cost Center* you have to enter these fields in an SAP-compliant manner ("yyyyMMdd" for the date format and leading zeros for the 10 digits cost center).

![ecscore_flow_6](/img/content/ecscore_flow_6.png){:class="img-responsive"}

You can check in the run history if the workflow was successfully completed and a purchase requisition ID was created.

![ecscore_flow_13](/img/content/ecscore_flow_13.png){:class="img-responsive"}
