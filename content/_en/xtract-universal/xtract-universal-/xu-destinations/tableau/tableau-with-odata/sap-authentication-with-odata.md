---
layout: page
title: SAP Authentication with OData
description: SAP Authentication with OData
product: xtract-universal
parent: tableau-with-odata
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=sap-authentication-with-odata
---

OData extractions can be executed in the SAP user context by providing the SAP user credentials.  

To do so, please open the General Settings of the extraction and select 
- the option *Disable Buffer* in the *Misc.* tab, and 
- the option Require *SAP Credentials* in the [Security]() tab.

![Require-SAP-Credentials](/img/content/Require-SAP-Credentials.jpg){:class="img-responsive"}

In the OData Connection dialog the user must provide his SAP username and password. Using those credentials the data will be extracted from SAP. 

![Tableau-Odata-Credentials](/img/content/Tableau-Odata-Credentials.jpg){:class="img-responsive"}

Invalid SAP credentails delivers the following error message.

![Tableau-SAP-Credentials-Error](/img/content/Tableau-SAP-Credentials-Error.jpg){:class="img-responsive"}

