---
ref: xi-report-01
layout: page
title: Setup of the Custom Function Module
description: Setup of the Custom Function Module
product: xtract-is
parent: report
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=setup-of-the-custom-function-module
---

Unlike the other components, the Xtract IS Report component requires the installation of a custom function module in your SAP system before use.
If you can't do this on your own, please ask your SAP system administrator for help.

First, create a new function group to place the function module in (name it ZXTRACT or change the name if you like). Create a new function module called Z_XTRACT_IS_REMOTE_REPORT. Set the attribute remote enabled to true.

The screenshots below show how the import, export and tables parameters must be created.

![Report-CustomFunction-01](/img/content/Report-CustomFunction-01.png){:class="img-responsive" }

![Report-CustomFunction-02](/img/content/Report-CustomFunction-02.png){:class="img-responsive" }

![Report-CustomFunction-03](/img/content/Report-CustomFunction-03.png){:class="img-responsive" }

Copy the source code from the file Z_XTRACT_REMOTE_REPORT.txt into the text box for the source code using Ctrl+C and Ctrl+V. You can find the file in the Xtract IS installation directory. Now the function module is ready to use.
If you are interested in how the function module works, have a look at the source code. Each step (Execution, Job Monitoring, Spool Reading etc.) is commented there.