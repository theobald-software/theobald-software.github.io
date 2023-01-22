---
ref: xi-bw-loader-packages-01
layout: page
title: Preparing the SSIS side
description: Preparing the SSIS side
product: xtract-is
parent: executing-bw-loader-packages
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=preparing-the-ssis-side
---
To set up the SSIS package for the external trigger, create a variable for the RequestID.

![Notification-Server-SSIS-Package-Prepare-01](/img/content/Notification-Server-SSIS-Package-Prepare-01.png){:class="img-responsive" }

Go to your existing data flow and open the settings dialog of the BW Loader component. Check the Use external Notifier option and fill in the name of your variable where the component is looking up the Request ID.

![BWLoader-Notification-Server](/img/content/BWLoader-Notification-Server.png){:class="img-responsive" }


**Debug Details**<br>
This option create a detail output of the single steps in the SSIS protocol.

**Enable Parallel Processing**<br>
This option prepare multiple packages to be sent simultaneous. This option increase the overall performance, but also increase the need of physical memory.

**Allow multiple SAP connections**<br>
This option allows the component to establish multiple connections to SAP to send packages. This option increase the overall performance and also increase the load of the SAP system.

**Max. Number of Threads**<br>
This value defines the maximum number of simultaneous packages to be sent. It should not be larger than 10 and only be set after consulting a SAP basic administrator.