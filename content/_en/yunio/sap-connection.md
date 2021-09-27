---
ref: yunio-introduction-05
layout: page
title: SAP Connection
description: SAP Connection
product: yunio
parent: yunio
permalink: /:collection/:path
weight: 10
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=sap-connection
progressstate: 5
---

### Creating an SAP connection

{: .box-warning}
**Warning!** **Missing Authorization**
To establish a connection to SAP the access to general authority objects (RFC) must be available.
Make sure to gain access to the general authority objects. For more information, see the knowledge base article on [SAP User Rights](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).

The SAP connection settings are in the *Connection* section of the Web UI.
- To add a new SAP connection, click **[Add Connection]** (1).<br>
- To edit an existing connection, click on the name of the connection you want to edit (2).

![YunIO-Create-Connection](/img/content/yunio/web-ui.png){:class="img-responsive" }

### Connection Details

The menu to create and edit SAP connections is divided into 3 sections:
- [System](#system) (3)
- [Authentication](#authentication) (4)
- [Test Connection](#test-the-sap-connection) (5)

Fill out the connection details and click **[Save]** to establish an SAP connection.<br>
![YunIO-Create-Connection](/img/content/yunio/yunio-connections.png){:class="img-responsive" width="750px" }

### System
There are two possibilities to connect to an SAP source system:
- Use a Single Application Server
	- **Host**:  host name or IP address of the application server (Property Host). 
	- **Instance No**: a two-digit number between 00 und 99 (Property SystemNumber).
	- **Client**: a three-digit number of the SAP client between 000 and 999, e.g., 800.
	- **Language**: the logon language for the SAP system, e.g., EN for English or DE for German.

- Use a Load Balancing Server (message server)
	- **Logon group**: property LogonGroup, usually *PUBLIC*.
	- **Message Server**: name or IP address of the message server (Property MessageServer).
	- **System ID**: three-digit System ID (Property SID e.g.,  MSS).
	- **Client**: a three-digit number of the SAP client between 000 and 999, e.g., 800.
	- **Language**: the logon language for the SAP system, e.g., EN for English or DE for German.
	
For more information on Load Balancing, see [SAP online help: Load Balancing](https://help.sap.com/saphelp_nwpi711/helpdata/en/c4/3a644c505211d189550000e829fbbd/content.htm?no_cache=true).


#### Accessing via SAP router

If you access the SAP source system (Application server or Message server) via an SAP router, set the router string before the host name. <br>
If the application server is "hamlet" and the router string is ``/H/lear.theobald-software.com/H/``, set the host property to ``/H/lear.theobald-software.com/H/hamlet``.

For more information on SAP routers, see [SAP online help: SAP-Router](https://help.sap.com/saphelp_snc700_ehp01/helpdata/en/48/6e2ef629540e27e10000000a421937/frameset.htm) in the SAP online help.


### Authentication
<!----- The following authentication methods are supported:
-  Plain - SAP username and password (system or dialogue user).
-  HTTP Basic Authentication - Basic authentication when executing the extraction. --->
<!----- SNC (Secure Network Communication) (2) with username and password --->
<!----- [SNC with SSO](../advanced-techniques/sap-single-sign-on) (Single Sign On) (3) --->

**User**<br>
SAP username. 

**Passwort**<br>
Password of the SAP user.

**Pass-through SAP credentials (HTTP Basic authentication)**<br>
When this checkbox is active, the SAP credentials entered in the *User* and *Password* fields are not applied.
Instead, SAP credentials need to be provided via basic authentication when executing an extraction. 


### Test the SAP Connection

Click **[Test Connection]** to validate the connection parameters. <br>
A window with a status message opens in the bottom right corner of the window.
