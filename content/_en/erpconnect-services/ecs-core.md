---
ref: erpconnect-services-05
layout: page
title: ECS Core (Replaced version)
description: ECS Core (Replaced version)
product: erpconnect-services
parent: erpconnect-services
childidentifier: ecs-core
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs_core
---

**Note:** This section refers to the Cloud Connector **ECS Core** only up to version 1.x <br>

ERPConnect Services Core (Short: **ECS Core**) is a programming interface which enables the development of integrated business applications in SharePoint Online. With ECS Core the Sharepoint App Model is used to design innovative and integrative web parts which can be deployed and installed in SharePoint Online/ Office 365. A easy to use java script library is made available therefore. 

The apps developed with ECS Core can both be SharePoint hosted ore provider hosted. The so called *App Model* for SharePoint is a common way to provide remote web applications in SharePoint. Theobald Software has adopted this approach and expanded it with a concept for integrating SAP data. 

The architecture of the software is as follows. ECS Core - which can be installed on any remote webserver - uses the client APIs of the SharePoint model to connect SharePoint Online with the remote webserver. It acts as a link between a locally installed SAP system and *Azure Service Bus* which is a high performant cloud service hosted on the *Windows Azure* platform. Azure Service Bus is used in order to communicate with SharePoint Online. 

Application security also is a core capability of ECS Core. To gain authorized access to ECS Core and the underlying SAP system, a provider-hosted app for SharePoint must be registered with the Azure Active Directory (AD) tenant which is created for each Office 365 subscription. OAuth 2.0 protocol is used to ensure save communication between ECS Core and Azure. 

For authorization to the underlying SAP System a service application is used which has to be created on the ECSCore management website. Within this service application different authentication methods such as Secure Store, SSO Ticket or SNC can be configured.

**All in all ECS Core is a powerful, flexibel and highly secure tool for enabling SAP-based business applications integrated in SharePoint online.**

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
