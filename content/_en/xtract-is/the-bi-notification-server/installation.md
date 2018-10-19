---
ref: xi-bi-notification-server-01
layout: page
title: Installation
description: Installation
product: xtract-is
parent: the-bi-notification-server
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=installation7
---

All tools can be found in the BINoticationReceiver sub directory of the Xtract IS installation directory. The tool can be started via double click on the console program (BINotification-ReceiverConsole.exe) or it can be installed as windows service (BINotificationReceiverService.exe). It is strongly recommended to use the console program for evaluation purpose because it is easier to handle. Later on in productive environment, you can install the windows service. To set up the service on the windows system execute *installutil.exe BINotifi-cationReceiverService.exe* on the command line.

![Notification-Server-Install-01](/img/content/Notification-Server-Install-01.png){:class="img-responsive" }


Fill the config file BINotificationReceiver.config.xml to define one or more BW systems to register on. You have to fill in the host name, gateway service and program id.

![Notification-Server-Install-02](/img/content/Notification-Server-Install-02.png){:class="img-responsive" }


Then you can start the program / service.

![Notification-Server-Install-03](/img/content/Notification-Server-Install-03.png){:class="img-responsive" }