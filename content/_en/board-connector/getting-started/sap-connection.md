---
ref: bc-introduction-04
layout: page
title: Step 2 - SAP Connection
description: SAP Connection
product: board-connector
parent: getting-started
permalink: /:collection/:path
weight: 2
redirect_from:
  - en/board-connector/introduction/sap-connection
lang: en_GB
old_url: /Board-Connector-EN/default.aspx?pageid=sap-connection
---	

{: .box-warning}
**Warning!** **Missing Authorization**
To establish a connection to SAP the access to general authority objects (RFC) must be available.
Make sure to gain access to the general authority objects. For more information, see the knowledge base article on [SAP User Rights](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).

### Creating an SAP connection

1. In the main window of the Designer, navigate to the menu bar and select **Server > Manage Sources**. 
![BC-Create-Connection-1](/img/content/bc_server_manage_sources.png){:class="img-responsive"}
The window "Manage Sources" opens.  
![BC-Create-Connection-2](/img/content/bc_manage_sources.png){:class="img-responsive"}

2. Click **[Add]**. The window "SAP Source Details" opens. <br>
3. Enter a name of your added connection.

{% include _content/en/xu-specific/advanced-techniques/sap-connection.md %}