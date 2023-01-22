---
ref: xi-ohs-extractions-02
layout: page
title: Preparing the XML file
description: Preparing the XML file
product: xtract-is
parent: executing-ohs-extractions
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=preparing-the-xml-file
---
Edit the BINotificationReceiver.config.xml file as shown in the following screenshot. When the BINotificationServer receives an OHS notification, it looks up the SSIS package to be executed in the config file according to the name of the OHS destination.

Please note, that the value of the variable is set via the place holder %REQUESTID%

![Notification-Server-OHS-XmlConfig-01](/img/content/Notification-Server-OHS-XmlConfig-01.png){:class="img-responsive" }