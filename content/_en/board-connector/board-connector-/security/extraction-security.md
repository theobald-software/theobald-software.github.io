---
layout: page
title: Extraction Security
description: Extraction Security
product: board-connector
parent: security
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=extraction-security
---

Each extraction dialog has the link *General Settings*, which provides general settings that are independent of the extraction type. Please open the security tab to modify the security settings.

**Security tab**

![Security-Tab-03](/img/content/Security-Tab-03.png){:class="img-responsive"}

**Allow everybody to access this extraction**

Everybody can access this extraction. There are no restrictions on the extraction level.

**Allow only specific users/groups**

On the extraction level the right of users/user groups will be restricted.

The list *Allowed* contains users and user groups with access according to their rights. The user admin admin and the user group administrators has admin rights and can not be deleted. <br>
The list *Available* contains all defined users and users groups. With the buttons < and > you can switch users and users groups between the two lists. 

**Allow all machines to execute this extraction**

There are no limitations. Every machine is allowed to execute extractions.

**Restrict execution to specified machines**

Only defined computers are allowed to execute extractions.

To define a restriction select *Restrict HTTP* access to specific machines  and click the *Add* button.

**Require SAP Credentials**

The SAP credentials (SAP user and password) are required to run the extraction.   
