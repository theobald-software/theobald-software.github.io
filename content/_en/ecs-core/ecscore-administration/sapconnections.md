---
ref: ecs-core-administration-03
layout: page
title: SAP Connections
description: SAP Connections
product: ecs-core
parent: ecscore-administration
permalink: /:collection/:path
weight: 3
lang: en_GB
---

In the *SAP Connections* tab, connections to one or more SAP systems can be created and managed.  

Click on *New SAP Connection* to create a new connection.

![ecscore-managementsite_sapconnection-1.jpg](/img/content/ecscore-managementsite_sapconnection-1.jpg){:class="img-responsive"}

First make the entries for the following fields:

**Name** - Freely definable name for the SAP connection.

**Client** - SAP client number.	Example: 800

**Language** - The SAP logon language. Example: EN <br>


Then enter the values for the connection settings to your SAP System. You have the following alternatives:

**Use Single Application** - A single application server is used for the connection. Enter the host name and the system number.

**Use Load Balancing** - Select this option if you are using SAP Load Balancing and want to get SAP to use a particular server for the connection. Enter the message server, the logon group, and the SAP System ID (SID). <br>

Enter the details of the authentication method that is to be used for the connection to the SAP system. You have the following options:

**Use Secure Store** - ECS Core uses a Secure Store to obtain the SAP logon data of the logged on Windows user.
					To do this, choose the option Secure Store Application ID to select an existing Secure Store application. 
					For information on how to create a Secure Store for ECS Core, see [here](./ecscore-secure-store). 

**Use SSO Ticket** - A SAP SSO ticket is used for authentication. Enter the Ticket Issuer URL. 

**Use SSO Ticket (pass-through)** - SSO Ticket (pass through) is used for authentication.
 

**Use SNC** - If your SAP system is configured to access via SSO with SNC, you can select the SNC option and set the partner name. The partner name is in the form: p:sapservicensp@theobald-software.com. 

**Use technical access** - For *Use technical access* as authentication method, enter the user name and the password in the fields Username and Password of the SAP user.

You can define an SAP connection with *Set instance as the default service* as the default connection (useful for multiple connections). <br>


The created connections are then listed on the left edge of the screen and can be adapted or deleted at any time.

For each connection you create, you must add the Windows users or user groups that are allowed to use the connection. By default, the Windows user group *Everyone* is already added. 
Click on the new connection and then on *Users*:

![ecscore-managementsite_sapconnection-2.jpg](/img/content/ecscore-managementsite_sapconnection-2.jpg){:class="img-responsive"}

Added Windows users or user groups can be removed at any time.