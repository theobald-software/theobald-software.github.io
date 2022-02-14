---
ref: xu-introduction-05
layout: page
title: SAP Connection
description: SAP Connection
product: xtract-universal
parent: introduction
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=sap-connection
progressstate: 5
---

### Creating an SAP connection

{: .box-warning}
**Warning!** **Missing Authorization**
To establish a connection to SAP the access to general authority objects (RFC) must be available.
Make sure to gain access to the general authority objects. For more information, see the knowledge base article on [SAP User Rights](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).


1. In the main window of the Designer, navigate to the menu bar and select **Server > Manage Sources**. 
![XU-Create-Connection-1](/img/content/server_manage_sources.png){:class="img-responsive"}
The window "Manage Sources" opens.  
![XU-Create-Connection-2](/img/content/xu_manage_source.png){:class="img-responsive"}

2. Click **[Add]**. The window "Change Source" opens. <br>
3. Enter a name of your added connection.

{% include _content/en/xu-specific/advanced-techniques/sap-connection.md %}

