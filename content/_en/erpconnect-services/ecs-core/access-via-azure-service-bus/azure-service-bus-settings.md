---
ref: ecs-core-access-via-azure-service-bus-01
layout: page
title: Azure Service Bus settings
description: Azure Service Bus settings
product: erpconnect-services
parent: access-via-azure-service-bus
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=azure_service_bus
---

To start with the Azure Service Bus conifguration create a new Service Bus instance inside of the Azure [Management Portal:](https://portal.azure.com/)

![ecscore-managementsite28](/img/content/ecscore-managementsite28.png.png){:class="img-responsive"}

Note, that there are another ways to create and manage Azure Resources (e. g. with the help of Powershell, if you need to automate the process).


The Connection String (aka Service Bus Credentials) can be found under the key-symbol (Connection Information) at the bottom of the page:

![ecscore-managementsite29](/img/content/ecscore-managementsite29.png.png){:class="img-responsive"}

![ecscore-managementsite30](/img/content/ecscore-managementsite30.png.png){:class="img-responsive"}

Now you must copy the whole connection string (Endpoint=sb://...), name serves solely for the description (human readable value) to tell the one string from another.


On the Management Site go to *Settings>Azure Service Bus* and Add a new Service Bus registration:

![ecscore-managementsite31](/img/content/ecscore-managementsite31.png.png){:class="img-responsive"}

Paste the copied Connection String from the Azure Management Portal to the window and save the entry by clicking *Add Service Bus Registration*:

![ecscore-managementsite32](/img/content/ecscore-managementsite32.png.png){:class="img-responsive"}

![ecscore-managementsite33](/img/content/ecscore-managementsite33.png.png){:class="img-responsive"}

Now you can go to the Services Site (default port 8080) and check whether the Service Bus was registered and is connected.

![ecscore-managementsite34](/img/content/ecscore-managementsite34.png.png){:class="img-responsive"}

If so, you can see a new Service Bus Relay inside the Azure Management Portal:

![ecscore-managementsite35](/img/content/ecscore-managementsite35.png.png){:class="img-responsive"}