---
ref: ecs-runtime-designer-02
layout: page
title: First Steps
description: First Steps
product: erpconnect-services
parent: ecs-designer
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-designer-first-steps
---

The next time when you start Visual Studio, you will find a new item *ERPConnect Services Designer* in your installed templates that you can add to your Visual Studio project.

![ECS-Designer-New-Item-01](/img/content/ECS-Designer-New-Item-01.png){:class="img-responsive" }

![ECS-Designer-New-Item-02](/img/content/ECS-Designer-New-Item-02.png){:class="img-responsive" }

Open the ECS Designer by double-clicking on the .ecs item in the Solution Explorer. With the Designer you can add components of the following types:

- RFC Functions
- Tables
- XtractQLs

![ECS-Designer-New-Item-03](/img/content/ECS-Designer-New-Item-03.png){:class="img-responsive" }

The components will be available within the specified context (*ERPConnectServicesContext*) and will also be shown in the *ECS Explorer* window in Visual Studio.

As a first step, select the *Edit* button next to Connection to specify the SAP connection parameters.

![ECS-Designer-Connection](/img/content/ECS-Designer-Connection.png){:class="img-responsive" }

You can also load existing SAP connection parameters from ERPConnect Services using the *Load Connection Data from ECS* button.
Specify the SAP account details in the *Client, Username, Password* and *Language* fields. For a single application server connection, specify the *Hostname* and *Systemnummer*or for a load balanced connection, specify the *MessageServer, Group* and *SID*.

You can use the Test Connection button to verify your settings.