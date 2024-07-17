---
ref: xi-ohs-extractions-01
layout: page
title: Preparing the SSIS side
description: Preparing the SSIS side
product: xtract-is
parent: executing-ohs-extractions
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=preparing-the-ssis-side1
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract IS.<br>
Make sure to use the documentation within the new [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

To set up the SSIS package for the external trigger, create a variable for the RequestID.

![Notification-Server-OHS-ExtractExe-01](/img/content/Notification-Server-OHS-ExtractExe-01.png){:class="img-responsive" }

In the OHS component, set the *Execution Mode* to E and fill in the name of the *Request ID* variable. It is not necessary to provide any host information or process chain.

![Notification-Server-OHS-ExtractExe-02](/img/content/Notification-Server-OHS-ExtractExe-02.png){:class="img-responsive" }

