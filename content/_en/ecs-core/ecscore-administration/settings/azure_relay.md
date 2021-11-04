---
ref: ecs-core-administration-settings-04
layout: page
title: Azure Relay
description: Azure Relay
product: ecs-core
parent: settings
permalink: /:collection/:path
weight: 4
lang: en_GB
---

**Azure Relay** is a service that is based on the *Azure Service Bus* and with which it is possible to tunnel on-premises web services through the firewall into the cloud. 

With the help of Azure Relay you can set up a secure system environment, decoupled from your business system with ECS Core and SAP.
Azure Relay connects to a dedicated server via TCP and provides an endpoint that is visible to client applications. This endpoint can be used for data exchange with ECS Core and your SAP system. 
The advantage of such a system architecture is that no ports need to be opened from the cloud to the SAP system installed on-premises. 

{: .box-tip }
**Important note**: To use this functionality, a standard Tier Subscription for Microsoft Azure is required, which is not included in ECS Core. Only the registration with Azure Relay is supported, not Azure Service Bus. 

Setting up *Azure Relay* with ECS Core works as follows:

Start by creating a new relay as a resource in the Azure Management Portal (>*create a resource*).

![ecscore-azurerelay_1](/img/content/ecscore-azurerelay_1.png){:class="img-responsive"}

Note that there are alternative methods to create and manage Azure resources (e.g. with Powershell if you want to automate this process).

Then click on the newly created resource. The connection string required for Azure Relay registration with ECS Core can be found at *SharedAccessPolicies* and *RootManagedShared AccessKey*.
Copy the complete *Primary Connection String* (Endpoint=sb://...). 

![ecscore-azurerelay_2](/img/content/ecscore-azurerelay_2.png){:class="img-responsive"}

Go to *Settings>Azure Relay* on the ECS Core Management Site and perform a new registration with *Add Relay Registration*.
Paste the copied connection string into the field and save the entry with *Add Azure Relay Registration*.

![ecscore-azurerelay_3](/img/content/ecscore-azurerelay_3.png){:class="img-responsive"}

Important: After adding a new Azure Relay registration it is mandatory to recycle the ECS Core Application Pools into the IIS. You can do this manually or on the *Management Site* under *Settings>System Operations* with the function *Clear consumer website caches*.

The Azure Management Portal should now list the relay with the registration.

![ecscore-azurerelay_4](/img/content/ecscore-azurerelay_4.png){:class="img-responsive"}

{: .box-tip }
**Tip:** For a load balanced architecture Azure Relay can be registered with multiple ECS Core installations. In this case more than one listener will be displayed in the *WCF Relays* section. 
Note that for such a scenario the ECS Core configuration need to be identical on all machines.

 

