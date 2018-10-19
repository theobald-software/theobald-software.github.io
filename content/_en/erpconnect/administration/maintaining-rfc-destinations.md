---
ref: ec-administration-01
layout: page
title: Maintaining RFC Destinations
description: Maintaining RFC Destinations
product: erpconnect
parent: administration
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=maintaining-rfc-destinations
---

To create a new destination, please use transaction SM59 and click the Create button. The fields have to be filled in with following values: 

* Unique name of the new destination (e.g. ERPTEST).
* Connection Type = T (for TCP/IP).
* Description.
* ProgramID: A unique name that the server program uses to register itself on the SAP gateway (can be the same as the destination name). 
* Choose option Registered Server Program.

You have to save the destination first before the connection can be tested.

![rfcdestination01](/img/content/maintain-rfc-destination-001.png){:class="img-responsive"}  

Click the button Test Connection while the program is running. If everything works well, you should see a screen like the one below.

![rfcdestination02](/img/content/maintain-rfc-destination-002.png){:class="img-responsive"}  

**Unicode**

If the RFC Destination is set to Unicode, the property IsUnicode of the RFCServer object must be set to true.
