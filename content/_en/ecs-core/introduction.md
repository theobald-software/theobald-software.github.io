---
ref: ecs-core-01
layout: page
title: Introduction
description: Introduction
product: ecs-core
parent: ecs-core
permalink: /:collection/:path
weight: 1
lang: en_GB
---

**ECS Core** is a connector for SAP integration with cloud environments and other autonomous enterprise portals, cloud-based or not. On the one hand, the application offers the possibility to integrate SAP data and business processes without programming knowledge via standardized REST services in different platforms and applications, cloud based or not. On the other hand, the development of individual SAP-based applications in the cloud (e.g. Office365) is made possible. Developers are provided with an easy-to-use Javascript library for this purpose.

The software architecture looks as follows: ECS Core is installed on a local or cloud-hosted Windows server environment and provides a configuration platform for setting up connectivity between SAP and cloud applications. An Azure Relay registration can be used as a secure gateway to connect the local SAP system to the respective cloud application.  

![ecscore-architecture](/img/content/ecscore-architecture.jpg){:class="img-responsive"}

This software architecture enables countless integration scenarios for read and write access to all common SAP ERP systems. SAP integration is possible both for developers and with non-code concepts for power users and software architects without any programming knowledge. 
Regardless of the integration approach chosen, application security is one of the core elements of ECS Core - the support of various authentication methods enables secure connection of cloud applications to the local SAP system. No additional installations or customizing are required on the SAP side to establish connectivity.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}