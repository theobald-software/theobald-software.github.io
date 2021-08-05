---
ref: ec-administration-04
layout: page
title: SAP Setup for using SOAP services
description: SAP Setup for using SOAP services
product: erpconnect
parent: administration
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=sap-setup-for-using-soap-services
---

**Warning:** SOAP Protocol is obsolete in ERPConnect since version 4.25.0 (Mai 2015). 

If you want to use the SOAP protocol for communication between ERPConnect/ERPConnectPocket and SAP, please use the following transactions to administrate the wanted services.
If you want to know whether the HTTP service is running or activate it, please use transaction *SMICM -> Goto -> Services*.

There you can find out the port on which the HTTP server is listening (e.g. 80).  

![SOAP-Administration_001](/img/content/SOAP-Administration_001.png){:class="img-responsive" width="800px"}

Use transaction SICF to make sure that at least the following service is activated:

*default host -> sap -> bc -> soap -> rfc*

If the service is deactivated, select the service and click on the right mouse button -> activate service.

![SOAP-Administration_002](/img/content/SOAP-Administration_002.png){:class="img-responsive" width="600px"}

