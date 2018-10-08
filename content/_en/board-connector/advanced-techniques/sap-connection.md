---
layout: page
title: SAP Connection
description: SAP Connection
product: board-connector
parent: advanced-techniques
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=sap-connection
---	

Select the menu item *Server -> Manage Sources* to manage the SAP connections, where you can create, edit and delete connections.

![Manage-Sources](/img/content/Manage-Sources.jpg){:class="img-responsive"} 

To create a connection template, click on *Add*.  

![SAP-Connection-02](/img/content/SAP-Connection-02.png){:class="img-responsive"}

If you filled in all required information you can check the connection by clicking the *Test Connection* button. If the connection is established the following info window will be displayed.

![SAP-Connection-03](/img/content/SAP-Connection-03.png){:class="img-responsive"}

Give the template a name and fill in the necessary fields, see [Step I: Define a Table Extraction](../getting-started-table/step1-define-table-extraction).

If you have installed the SAP GUI, you can click on the link *Get parameters from SAP GUI* to choose a connection from the list of the saved ones. To edit or delete a template, click on Edit or Delete accordingly.

**Authentication via SSO/SNC**

When your SAP system is configured to be accessed via [SSO with SNC](./sso-with-snc), select SNC and set Partner Name and Mechanism instead of User and Password. 

![SAP-Connection-04](/img/content/SAP-Connection-04.png){:class="img-responsive"}