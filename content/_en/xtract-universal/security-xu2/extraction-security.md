---
ref: xu-security-xu2-04
layout: page
title: Extraction Security
description: Extraction Security
product: xtract-universal
parent: security-xu2
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=extraction-security
---

Each extraction dialog has the link *General Settings*, which provides general settings that are independent of the extraction type. Please open the security tab to modify the security settings.

**Security tab**

![Extraction-Security-Settings](/img/content/Extraction-Security-Settings.png){:class="img-responsive"}

**Allow everybody to access this extraction**<br>
Everybody can access this extraction. There are no restrictions on the extraction level.

**Allow only specific users/groups**<br>
On the extraction level the right of users/user groups will be restricted.

The list *Allowed* contains users and user groups with access according to their rights. The user admin admin and the user group administrators has admin rights and can not be deleted. 
The list *Available* contains all defined users and users groups. With the buttons < and > you can switch users and users groups between the two lists. 

**Allow all machines to execute this extraction** <br>
There are no limitations. Every machine is allowed to execute extractions.

**Restrict execution to specified machines**<br>
Only defined computers are allowed to execute extractions.

To define a restriction select *Restrict HTTP access to specific machines*  and click the *Add* button.

![Extraction-Security-Machine-Network](/img/content/Extraction-Security-Machine-Network.png){:class="img-responsive"}

**Require SAP Credentials**

The SAP credentials (SAP user and password) are required to run the extraction.

![Require-SAP-Credentials](/img/content/Require-SAP-Credentials.jpg){:class="img-responsive"}