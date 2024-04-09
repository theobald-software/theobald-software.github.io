---
ref: ec-rfc-server-01
layout: page
title: Prerequisites
description: Maintaining RFC Destinations
product: erpconnect
parent: rfc-server
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=maintaining-rfc-destinations
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for ERPConnect.<br>
Make sure to use the documentation within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/documentation/introduction/).

To enable calls from an SAP system to a subsystem, the subsystem must be known to SAP.<br>
This can be done with an RFC destination.

### Setting Up an RFC Destination

An existing RFC destination is necessary for calling BAPIs/Function modules.
1. Use the transaction **SM59** to create a new RFC destination.
2. Fill the following fields of the destination: 
![Maintain-RFC-Destination-001](/img/content/Maintain-RFC-Destination-001.png){:class="img-responsive"}  
- Unique name of the new destination e.g., ERPTEST.
- Connection Type = T (for TCP/IP).
- Description.
- ProgramID: A unique name that the server program uses to register on the SAP gateway. 
- Choose the option *Registered Server Program*.
3. Save the destination.
4. To test the RFC-Destination, click the button **[Test Connection]** while the program is running.<br> 
If everything works well, you should see a screen like the one below:
![rfcdestination02](/img/content/Maintain-RFC-Destination-002.png){:class="img-responsive"}  

An example for a simple RFC server program can be found in section [RFC-Server](../rfc-server/example)

{: .box-note }
**Note**: If the RFC Destination is set to Unicode, the property *IsUnicode* of the RFCServer object must be set to *true*.
