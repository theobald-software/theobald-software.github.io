---
layout: page
title: OHS Destinations and Data Transfer Processes (BI 7.0)
description: OHS Destinations and Data Transfer Processes (BI 7.0)
product: xtract-is
parent: preparation-in-bw
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=ohs-destinations-and-data-transfer-processes-bi-7_0_1
---

From BW 7.0 on, SAP does not recommend using InfoSpokes anymore. Instead, OHS destinations should be created as described in following.
In the Administrator Workbench RSA1, click *Open Hub Destination* in the left-hand tree. With the right-hand mouse button, click an InfoArea and select *Create Open Hub Destination* in the context menu.

![OHS-Destination-01](/img/content/OHS-Destination-01.png){:class="img-responsive" }

In the editing mode, set the destination type to *third-party*, enter the previously created RFC destination, and save and activate the destination.

![OHS-Destination-02](/img/content/OHS-Destination-02.png){:class="img-responsive" }

Click the newly created destination in the center tree of the InfoArea and select *Create data transfer* process. This action creates a new data transfer and the corresponding transmission rules (see screenshots).

![OHS-Destination-03](/img/content/OHS-Destination-03.png){:class="img-responsive" }


The DTP can be stored and activated as recommended by the system (depending on your particular needs, the extraction type should be changed from Delta to full prior to activation). In the OHS tree destination, the transmission rules and the DTP are then arranged as shown below:

![OHS-Destination-04](/img/content/OHS-Destination-04.png){:class="img-responsive" }


To activate the transfer process from SSIS, we now need a process chain. From the RSA1 transaction, go to the menu *Edit -> Process Chains*. Create a new process chain here. In the variant for the chain, *start via API* must be checkmarked. The DTP then has to be added in the process chain. Once activated, the chain is ready to be run.

![OHS-Destination-05](/img/content/OHS-Destination-05.png){:class="img-responsive" }