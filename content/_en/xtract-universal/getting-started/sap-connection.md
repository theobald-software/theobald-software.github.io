---
ref: xu-introduction-05
layout: page
title: Step 2 - Create an SAP Connection
description: SAP Connection
product: xtract-universal
parent: getting-started
permalink: /:collection/:path
weight: 2
lang: en_GB
redirect_from:
  - en/xtract-universal/introduction/sap-connection
old_url: /Xtract-Universal-EN/default.aspx?pageid=sap-connection
progressstate: 5
---

{: .box-warning}
**Warning!** **Missing Authorization**
To establish a connection to SAP the access to general authority objects (RFC) must be available.
Make sure to gain access to the general authority objects. For more information, refer to the knowledge base article [SAP User Rights](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).

### Creating a Source

{: .box-note}
**Note:** When Xtract Universal is installed for the first time and no extractions are defined, click **[New]** in the main window of the Designer.
The source settings open automatically.

If extractions are already available:

1. Navigate to the menu bar of the main window of the Designer and select **Server > Manage Sources**. The window "Manage Sources" opens.  
![XU-Create-Connection-1](/img/content/server_manage_sources.png){:class="img-responsive"}
2. Click **[Add]** to add a new SAP connection or click ![pen](/img/content/icons/pen.png) to edit an existing connection. The window "Change Source" opens. <br>
![XU-Create-Connection-2](/img/content/xu_manage_source.png){:class="img-responsive"}


{% include _content/en/xu-specific/advanced-techniques/sap-connection.md %}
