---
ref: xtract-for-alteryx-04
layout: page
title: SAP Connection 
description: SAP Connection
product: xtract-for-alteryx
parent: xtract-for-alteryx
permalink: /:collection/:path
weight: 4
redirect_from:
  - en/xtract-for-alteryx/introduction/sap-connection
lang: en_GB
progressstate: 5
---

The following section shows how to create an SAP connection.<br>
An SAP connection is required to use any Xtract for Alteryx component.

### Creating an SAP Connection
1. Drag&drop an Xtract for Alteryx component from the Alteryx Designer tool box onto the canvas (1). The configuration window of the component opens. <br>
![Create-New-Table-Extraction](/img/content/xfa/xfa_create_table_extraction_02.png){:class="img-responsive"}
2. Click **[New]** (2) to create a new connection. The window "SAP Connection Details" opens.
3. Fill out the connection details to establish an SAP connection. <br>
The connection details consist of four subsections: [System](#system), [Client and Language](#client-and-language), [Authentication](#authentication) and [Miscallaneous](#miscellaneous).<br>
![Connection details](/img/content/xfa/xfa_connection-det.png){:class="img-responsive"}
4. Click **[Test Connection]** to test the SAP connection. A confirmation window opens.<br>
![Connection test](/img/content/xfa/xfa_test-con.png){:class="img-responsive"}
5. Click **[OK]** to save the SAP connection.

The SAP connection is now available for selection in the configuration window (2).<br>
To edit the SAP connection, select the SAP connection from the dropdown list (2) and click **[Edit]**.

{: .box-tip }
**Tip:** Values to fill out the connection details can be found in the SAP Logon Pad in the *Properties* or acquired from SAP Basis team.

{: .box-note }
**Note:** The connection details of an SAP connection are stored in a JSON file in the following directory:<br>
`C:\Users\<UserName>\AppData\Roaming\Theobald Software\Xtract for Alteryx\Connections\<SAPSourceName>.json`

### System
There are two possibilities to connect to an SAP source system:
- Use a Single Application Server
	- **Host**:  host name or IP address of the application server (Property Host) 
	- **Sys. No.:**: a two-digit number between 00 und 99 (Property SystemNumber)

- Use a Load Balancing Server (message server)
	- **Message Server**: name or IP address of the message server (Property MessageServer) 
	- **Group**: property LogonGroup, usually *PUBLIC*
	- **SID**: three-digit System ID (Property SID e.g.,  MSS) 
	
For more information, see [SAP Help: Load Balancing](https://help.sap.com/saphelp_nwpi711/helpdata/en/c4/3a644c505211d189550000e829fbbd/content.htm?no_cache=true).

#### Access via SAP router

If you access the SAP source system (Application server or Message server) via an SAP router, set the router string before the host name. <br>
Example: If the application server is "hamlet" and the router string is ``/H/lear.theobald-software.com/H/``, set the host property to ``/H/lear.theobald-software.com/H/hamlet``.

For more information, see [SAP Help: SAP-Router](https://help.sap.com/viewer/6d9a59096c4b1014b507f15bed51571f/7.01.22/en-US/486b41efb74c07bee10000000a42189d.html).

### Client and Language
- **Client**: a three-digit number of the SAP client between 000 and 999, e.g., 800.
- **Language**: the logon language for the SAP system, e.g., *EN* for English or *DE* for German.

### Authentication
The following authentication methods are supported:
- **SNC** (1):  encrypted connection between Xtract for Alteryx and SAP with username and password. For more information, see [SAP Help: Secure Network Communications (SNC)](https://help.sap.com/viewer/6f3e0bea6c4b101484fcf5305b4d624b/7.01.22/en-US/e656f466e99a11d1a5b00000e835363f.html).
- **Plain** (2): SAP username and password (system or dialogue user)
- **SAP Log On Ticket** (3): uses SAP Logon-Tickets in place of user credentials. This connection is not encrypted.

![Connection details](/img/content/xfa/xfa_connection-auth.png){:class="img-responsive"}

#### SNC (1)
1. Check the SAP parameter *snc/gssapi_lib* to determine which library is used for encryption in your SAP system.
Your SAP basis has to import and configure the same library on the application server and on the machine that runs Xtract for Alteryx.
2. When using SNC, make sure to enter the complete path of the library in the field **SNC library** e.g., ``C:\SNC\gx64krb5.dll``.
3. Enter the SAP **Partner Name** configured for the SAP application server e.g., ``p:SAPserviceERP/do_not_care@THEOBALD.LOCAL``.

For more information on SNC, see the knowledge base article [Enabling Secure Network Communication (SNC) via X.509 certificate](https://kb.theobald-software.com/sap/enable-snc-using-pse-file).

#### Plain (2)
Enter your SAP username and password.

#### SAP Log On Ticket (3)
Enter the URL of an Application Server Java (AS Java) that is configured to issue logon tickets in the field **Ticket issuer**. <br>
For more information, see [SAP Documentation: Configuring the AS Java to Issue Logon Tickets](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/4a/412251343f2ab1e10000000a42189c/frameset.htm).

### Miscellaneous

Select an RFC library. The following RFC libraries are supported:
- **Use classic RFC library (librfc32.dll)**
- **Use NetWeaver RFC libraries (sapnwrfc.dll)**

The RFC API (Remote Function Call) allows to establish an RFC connection to an SAP system from an external system that communicates as Client or Server with the SAP system. 
For more information on SAP libraries, see [SAP Help: RFC Libraries](https://help.sap.com/saphelp_nwpi71/helpdata/de/45/18e96cd26321a1e10000000a1553f6/frameset.htm). 

SAP does not [support the librfc32.dll](https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/) anymore. 

{: .box-note }
**Note:** When using the NetWeaver RFC library with DeltaQ or OHS extractions, the RFC destination in SM59 must be set to Unicode. 

**Trace Directory (Debug Logging)**<br>
You can log debug information and save it locally. In the field **Trace directory** enter a local path to a folder, where you want to save the debug information.
For more information, see the knowledge base article [How to activate tracing for Xtract Products](https://support.theobald-software.com/helpdesk/KB/View/14455-how-to-activate-tracing-for-xtract-products).<br>
Clear the **Trace Directory** field when it is not needed.

{: .box-warning }
**Warning!: Increase of used hard drive memory** <br>
A big amount of information is collected when debug logging is activated. This can decrease the capacity of your hard drives dramatically.
Activate the debug logging only when necessary e.g., upon request of the support team.
