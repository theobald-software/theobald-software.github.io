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

{: .box-warning}
**Warning!** **Missing Authorization**
To establish a connection to SAP, the access to general authority objects must be available.
For more information, refer to the knowledge base article [SAP User Rights](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).

### Creating an SAP Connection

SAP connections are located in the *Connection* section of the yunIO Designer.
- To add a new SAP connection, click **[Add Connection]** (1).<br>
- To edit an existing connection, click ![Edit](/img/content/yunio/edit.png).

![yunIO-Create-Connection](/img/content/yunio/web-ui.png){:class="img-responsive" }

### Connection Details

The menu to create and edit SAP connections is divided into 3 sections:
- [System](#system) (2)
- [Authentication](#authentication) (3)
- [Test Connection](#test-the-sap-connection) (4)

Fill out the connection details and click **[Save]** to establish an SAP connection.<br>
![yunIO-Create-Connection](/img/content/yunio/yunio-connections.png){:class="img-responsive" }

### System
There are two possibilities to connect to an SAP source system:
- Use a Single Application Server
	- **Host**:  host name or IP address of the application server (Property Host). 
	- **Instance No**: a two-digit number between 00 and 99 (Property SystemNumber).
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

For more information on SAP routers, see [SAP online help: SAP-Router](https://help.sap.com/viewer/6d9a59096c4b1014b507f15bed51571f/7.01.22/en-US/486b41efb74c07bee10000000a42189d.html) in the SAP online help.


### Authentication

The following authentication methods are supported:
- Plain - SAP username and password (system or dialogue user).
- Secure Network Communication (SNC) - username and password via basic authentication.
<!----- [SNC with SSO](../advanced-techniques/sap-single-sign-on) (Single Sign On) (3) --->

#### Plain

**User**<br>
SAP username. 

**Password**<br>
Password of the SAP user.

**Request credentials from callers when running services**<br>
If this checkbox is active, SAP credentials are used to restrict service access. 
Any valid SAP credentials can be passed via Basic Authentication to allow access to a yunIO service.

{: .box-note }
**Note:** To use *Request credentials from callers when running services* the [*Anonymous Access*](./server-settings#anonymous-access) option must be activated.

#### SNC

Secure Network Connection (SNC) enables authentication and transport encryption between SAP systems and third-party tools like yunIO.

1. Check the SAP parameter *snc/gssapi_lib* to determine, which library is used for encryption in your SAP system. 
Your SAP Basis has to import and configure the same library on the application server and on the machine that runs yunIO.
2. Enter the complete path to the library location in the field **SNC library path**, e.g., `C:\Program Files\SAP\FrontEnd\SecureLogin\lib\sapcrypto.dll`.
3. Enter the SAP partner name configured for the SAP application server in the field **SNC partner name**, e.g., `p:SAPserviceERP/Alice@THEOBALD.LOCAL`.

### Test the SAP Connection

Click **[Test Connection]** to validate the connection parameters. <br>
A window with a status message opens in the bottom right corner of the window.
