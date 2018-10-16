---
ref: ec-administration-02
layout: page
title: Setting Up an Environment for Sending Test IDocs 
description: Setting Up an Environment for Sending Test IDocs 
product: erpconnect
parent: administration
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=setting-up-an-environment-for-sending-test-idocs
---

If you want to receive some test IDocs, please follow the steps below to set up a test environment in your SAP system that can send MATMAS IDocs for distributing material master data. 


**Step 1: Define a Logical System**

First off, we need to define a logical system to which the IDocs can be sent. Please go to the customizing (transaction SPRO) and follow the path *SAP Web Application Server -> ALE -> Sending and Receiving Systems -> Logical Systems -> Define Logical System* (this path is valid for Release 4.7). Create a new line and fill in the name of the system (e.g. ERPCONNECT) and a short description.

**Step 2: Create an RFC Destination**

Please refer to the chapter [Maintaining RFC Destinations](./maintaining-rfc-destinations) and set up a new RFC destination.

**Step 3: Create an IDoc Port**

Please use transaction WE21 to configure an IDoc port. The port type must be transactional. The name of the port must be unique and refer to the RFC destination defined in step 2. 

![IDoc-Test-Environment_001](/img/content/IDoc-Test-Environment_001.png){:class="img-responsive" width="800px"}

**Step 4: Create a Partner Profile**

Use transaction WE20 to create a new partner profile for the logical system that was created in step 1. We also need to add one outbound parameter (use the green plus to create one). As shown in the figure below, please select MATMAS as message type and MATMAS05 as the IDoc basic type. You also have to define the logical receiver port for this outbound parameter. Please fill in the name of the port created in step 3.

![IDoc-Test-Environment_002](/img/content/IDoc-Test-Environment_002.png){:class="img-responsive" width="600px"}

**Step 5: Send a Test IDoc**

When all steps are completed, please use transaction BD10 to send a test IDoc for a specified material number. Before you run the program (F8) you have to fill in the logical system as shown in the figure below.

![IDoc-Test-Environment_003](/img/content/IDoc-Test-Environment_003.png){:class="img-responsive" width="800px"}

