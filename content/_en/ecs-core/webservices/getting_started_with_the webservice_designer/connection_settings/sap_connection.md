---
ref: ecscore-wd-connection-settings-01
layout: page
title: SAP connection
description: SAP connection
product: ecs-core
parent: connection_settings
permalink: /:collection/:path
weight: 1
lang: en_GB
---

In the main screen of the WebService Designer click on *SAP...* in the ribbon at *Connections*. The *SAP Connection Dialog* opens.

![WSD-SAPConnection](/img/content/ecscore-wsd_19.jpg){:class="img-responsive"}

The SAP connection defined here is required to retrieve SAP metadata when creating a new Web service.
The SAP connection for the Web service call is defined in the main menu under *SAP connection name to use*.  


Add the following parameters:

**Client** - The SAP Client. Example: 800<br>
**Language** - The SAP logon language. Example: EN<br>
**User name** - The user name for the SAP connection.
**Password** - The password for the SAP connection.

Choose one of the following options to connect to your SAP system:

**Use Single Application Server** - Select this option to connect to a single SAP server via RFC.
**Host** - Name of the SAP Server.<br>
**System** - The SAP system number (00...99).<br>
**Use Load Balancing** - Select this option if you are using SAP Load Balancing and want to get SAP to use a particular server for the connection.
**Message Server** - Name of the SAP Message Server. <br>
**Group / SID** - Group and system ID for the SAP server selection.<br>
**Use HTTP / Web Service** - Select this option if you want to access the SAP Web Services.<br>
**HTTP URL** - The URL for the SAP Web Services.

Use the *Test* button to check the connection.

A confirmation window should now appear when the connection to the SAP system has been successfully established. Click *OK* to hide the message.


