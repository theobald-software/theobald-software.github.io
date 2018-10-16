---
ref: ec-administration-03
layout: page
title: Receiving Order IDocs
description: Receiving Order IDocs
product: erpconnect
parent: administration
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=receiving-order-idocs
---

The sample program in Chapter [Sending an ORDER IDoc](../receiving-and-sending-idocs/example-sending-an-idoc-from-your-net-application) shows how to send an ORDER IDoc. The two steps below show how to customize your SAP system for processing the IDoc and creating a sales order.

**Step 1: Define Partner Profiles**

In case of a SalesOrder IDoc, the external system acts like a customer. Therefore, you must define a partner profile using transaction WE20. The customer number is the appropriate partner number. Use KU as the partner type.
Within the partner profile, an inbound parameter also has to be defined (see second screenshot). The correct message type is ORDERS. Please choose ORDE as process code to enable the SAP system to find the right routines for creating a sales order when an IDoc is received.

![IDoc-Receive-001](/img/content/IDoc-Receive-001.png){:class="img-responsive" width="600px"}

![IDoc-Receive-002](/img/content/IDoc-Receive-002.png){:class="img-responsive" width="600px"}

**Step 2: Edit EDSDC Table**

Every sales document has to be assigned to a sales organization, a distribution channel, and a division. These parameters and the sales type must be defined for the customer that sends the IDoc. Please use transaction VOE2 to create a line in the EDSDC table that holds these assignments.

![IDoc-Receive-003](/img/content/IDoc-Receive-003.png){:class="img-responsive" width="800px"}