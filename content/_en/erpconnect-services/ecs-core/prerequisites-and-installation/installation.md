---
ref: ecs-core-prerequisites-and-installation-02
layout: page
title: Installation
description: Installation
product: erpconnect-services
parent: prerequisites-and-installation
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=installation1
---

The Installation Wizard is being used to guide the user through the process.
Launch *ERPConnectServicesSetupCore.exe*.

Click *Next* to confirm the license agreement.


Choose an installation folder.


Select both components and click *Install*. 


The installation process will start. Note that **Microsoft SQL Server Compact** will be installed  automatically dring installation of ECSCore. 


With the term *Installation or ECSCore* we understand copying and registering required modules on a target machine. No configuration is directly available after the installation process is completed. To start with the configuration the ECSCore components must be deployed, which means the UI (Web Site) and resources have to be installed into IIS (Internet Information Services) with your specific parameters (such as ports and existing databases).

After the basic installation of ECSCore proceed with the [Deployment Manager](./ecs-core-deployment). You also have to start the Deployment Manager after doing a software update or a re-installation. 