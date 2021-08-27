---
ref: ec-prerequisites-01
layout: page
title: Prerequisites
description: Prerequisites in SAP
product: erpconnect
parent: receiving-and-sending-idocs
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=example-receiving-an-idoc
progressstate: 5

---

### Setting Up an RFC Destination

To enable calls from an SAP system to a subsystem, the subsystem must be known to SAP.<br>
This can be done with an RFC destination.

An existing RFC destination is necessary for sending IDocs.
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


### Setting Up a Test Environment for IDocs 

To receive test IDocs, you can set up a test environment in your SAP system.<br>
Follow the steps below to set up a test environment that can send *MATMAS* IDocs for distributing material master data: 
1. Define a Logical System to which the IDocs can be sent.<br>
Use the transaction **SPRO** to open *Customizing* and follow the path *SAP Web Application Server -> ALE -> Sending and Receiving Systems -> Logical Systems -> Define Logical System* (this path is valid for Release 4.7).
Create a new line and enter the name of the system e.g., ERPCONNECT and a short description.
2. Use the transaction **SM59** create an RFC Destination, see [Maintaining RFC Destinations](./maintaining-rfc-destinations).
3. Use the transaction **WE21** to create a *Transactional RFC* IDoc Port. <br>
The name of the port must be unique and refer to the RFC destination defined in step 2. <br>
![IDoc-Test-Environment_001](/img/content/IDoc-Test-Environment_001.png){:class="img-responsive" width="800px"}
4. Use the transaction **WE20** to create a Partner Profile for the logical system created in step 1.<br>
Add an outbound parameter using the **[+]** button. 
Select *MATMAS* as the message type, *MATMAS05* as the IDoc basic type and enter the name of the port created in step 3 as the logical receiver port. <br>
![IDoc-Test-Environment_002](/img/content/IDoc-Test-Environment_002.png){:class="img-responsive" width="600px"}
5. Use the transaction **BD10** to send a Test IDoc for a specified material number. 
The IDocs are created and sent to the specified port.
Enter the logical system as shown in the figure below and run the program via **[F8]**.<br>
![IDoc-Test-Environment_003](/img/content/IDoc-Test-Environment_003.png){:class="img-responsive" width="800px"}

### Setting Up Receiving IDocs

The following instructions show how to customize your SAP system for processing IDocs and creating sales orders.

1. Use the transaction **WE20** to create a Partner Profile. <br>
In case of a SalesOrder IDoc, the external system acts like a customer.
The customer number is the appropriate partner number. <br>
Use *KU* as the partner type. 
![IDoc-Receive-001](/img/content/IDoc-Receive-001.png){:class="img-responsive" width="600px"}<br>
Add an inbound parameter and select *ORDERS* as the message type and *ORDE* as the process code.
That enables the SAP system to find the right routines for creating a sales order, when an IDoc is received.<br>
![IDoc-Receive-002](/img/content/IDoc-Receive-002.png){:class="img-responsive" width="600px"}
2. Use the transaction **VOE2** to process the incoming data. The transaction creates a line in the *EDSDC table*.
Assign the following parameters for the customer number that sends the IDoc: 
Sales organization, distribution channel, division, sales type.<br>
![IDoc-Receive-003](/img/content/IDoc-Receive-003.png){:class="img-responsive" width="800px"}

****
#### Related Links
- [Sending an ORDER IDoc](../receiving-and-sending-idocs/example-sending-an-idoc-from-your-net-application) 
