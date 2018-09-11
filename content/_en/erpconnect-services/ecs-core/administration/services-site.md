---
layout: page
title: Services Site
description: Services Site
product: erpconnect-services
parent: administration
permalink: /:collection/:path
weight: 8
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=service_site
---

The Services site can be found by default under http://localhost:8085. This page is especially for testing the ECSCore configuration made on the *Management Site*.  

Note that only a local Windows user can be used to connect to the Services site no domain user. 

The *Services Site* can be opened via IIS Manager which is available in your Windows start menu.
Default port is 8080  (http://localhost:8080). You can bookmark the web site in your internet browser then. 

![ecscore-servicessite1](/img/content/ecscore-servicessite1.jpg.png){:class="img-responsive"}

You can use the following services:

**Clear caches**

IIS tends to do much Caching to spare CPU on compiling and fetching the page each time. That means, that if you update a setting on Management Site you have to Clear caches to insure effective settings are being propagated to clients.

![ecscore-servicessite2](/img/content/ecscore-servicessite2.jpg.png){:class="img-responsive"}

![ecscore-servicessite3](/img/content/ecscore-servicessite3.jpg.png){:class="img-responsive"}

**Test services**

Checks the reachability of a particular SAP-System as well as the validity of provided Credentials.

![ecscore-servicessite5](/img/content/ecscore-servicessite5.jpg.png){:class="img-responsive"}

**Setup Azure Service Bus**

This section shows the current state of the Azure Service Bus registration (*connected or not connceted*). To connect manually from here is only necessary when the Azure Service Bus registration is set to false in the web.config file or it was disconnected somehow unintentionally.


![ecscore-servicessite6](/img/content/ecscore-servicessite6.jpg.png){:class="img-responsive"}