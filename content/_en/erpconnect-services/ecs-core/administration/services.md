---
ref: ecs-core-administration-03
layout: page
title: Services
description: Services
product: erpconnect-services
parent: administration
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=services
---

In the Services ribbon you can add a new or modify an existing (SAP) Service. Services are ECS web services that are connected to a SAP system. 


Click *Add Service* to create a new service. 

![ecscore-managementsite4](/img/content/ecscore-managementsite4.jpg.png){:class="img-responsive"}

First of all do the entries for the following fields:

| Field     | Description               |
|--------------|--------------------------------------------------------|
| **Name**     | Free selectable service name                           |
| **Client**   | The SAP client.<br> Example: 800                       |
| **Language** | The logon language for the SAP system.<br> Example: EN |

![ecscore-managementsite5](/img/content/ecscore-managementsite5.jpg.png){:class="img-responsive"}
Next enter the connection data for the SAP system. 

You have the following options:

| Option | Description                                                                                                                                                                |
|-----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Use Single Application Server** | Choose this option to connect to a single SAP server using an RFC type connection.                                                                                                                                                                |
| **Use Load Balancing**            | Choose this option if you have SAP load balancing configured in your landscape  and want SAP to determine the appropriate server             				 for your connection. Enter information for SAP Message Server, Logon Group and Sap System ID (SID). |


![ecscore-managementsite6](/img/content/ecscore-managementsite6.jpg.png){:class="img-responsive"}

Next define the authentication method to connect to the SAP system. 

You have the following options:

| Option                      | Description |
|-------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Use Secure Store**                      | ECSCore will use a Secure Store  to get the SAP credentials of the logged windows user. In this case use the option **Application ID** to select an existing Secure Store  Application. How to create a Secure Store can be found 						 here. |
| **Use SSO Ticket**                        | You can use an SAP SSO Ticket to connect to the SAP system. S et the field *Ticket Issuer URL** then.                                                                                                                                    |
| **Use SSO Ticket**<br> **(pass-through)** | SSO Ticket (pass through) will be used for authentication.                                                                                                                                                                               |
| **Use SNC**                               | When your SAP system is configured to be accessed via SSO with SNC, select SNC and set Partner Name. Partner Name has the form:**p:sapservicensp@theobald-software.com** .                                                               |
| **Use technical access**                  | Use this option and set the the fields (SAP) **Username**  and (SAP) **Password** .                                                                                                                                                      |

![ecscore-managementsite7](/img/content/ecscore-managementsite7.jpg.png){:class="img-responsive"}

Newly created Services are shown on the left side of the screen and can be deleted or maintained. 

![ecscore-managementsite8](/img/content/ecscore-managementsite8.jpg.png){:class="img-responsive"}

Important: At this step no user has access to the service. To allow some windows user or windows user group to use this service click the service and switch to the *Users* tab.

![ecscore-managementsite9](/img/content/ecscore-managementsite9.jpg.png){:class="img-responsive"}

Click *Add User* to add new users or user groups. With *Users* the local Windows User and User groups are meant. 

![ecscore-managementsite10](/img/content/ecscore-managementsite10.jpg.png){:class="img-responsive"}

Added Users or User groups can be removed at any time.  

![ecscore-managementsite11](/img/content/ecscore-managementsite11.jpg.png){:class="img-responsive"}