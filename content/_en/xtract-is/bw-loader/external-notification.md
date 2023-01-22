---
ref: xi-bw-loader-06
layout: page
title: External Notification
description: External Notification
product: xtract-is
parent: bw-loader
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=external-notification
---
Generally speaking there are two options on how data can be loaded into SAP BW.

1. The InfoPackage which initiates the data load is triggered from SSIS.
2. The InfoPackage is started from within SAP.

For the second scenario there are again two options:

Option 1: Set the setting *No InfoPackage start (Only wait)? to true.*

![External-Notification-02](/img/content/External-Notification-02.png){:class="img-responsive"}

In this case the SSIS package must be started and running. Then you can start the InfoPackage in BW manually or by scheduler and the process in SSIS will continue.


Option 2: What if you want to trigger multiple SSIS packages from BW or if you don't want the SSIS packages to run all the time for waiting for notifications? In this case you should use the BI Notification Receiver. This is a small application that registers itself to BW as an external system and waits for notification. Please have look at chapter [BI Notification Server](../the-bi-notification-server) for more information.