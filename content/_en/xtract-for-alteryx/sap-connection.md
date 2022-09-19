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

To use any Xtract for Alteryx component an SAP connection is required.

### Creating an SAP Connection
1. Drag any Xtract for Alteryx component, e.g., Xtract Table (1), from the Alteryx Designer tool box. The configuration window opens. 
![Create-New-Table-Extraction](/img/content/xfa/xfa_create_table_extraction_01.png){:class="img-responsive"}
2. In the subsection **Connection**, open the drop-down menu (2) to display all SAP systems connected to the local machine.
3. Click **[New]** to create a new connection. The window "SAP Connection Details" opens.

### Connection Details
The window "SAP Connection Details" consists of four subsections:
- System
- Client and Language
- Authentication
- Miscellaneous

![Connection details](/img/content/xfa/xfa_connection-det.png){:class="img-responsive"}

Fill out the connection details to establish an SAP connection.

{: .box-tip }
**Tip:** Values to fill out the fields can be found in the SAP Logon Pad in the *Properties* or acquired from SAP Basis team.

{: .box-note }
**Note:** The connection details of an SAP connection are stored in a JSON file in the following directory:<br>
`C:\Users\<UserName>\AppData\Roaming\Theobald Software\Xtract for Alteryx\Connections\<SAPSourceName>.json`

### System
There are two possibilities to connect to an SAP source system:
- Use a Single Application Server (1)
	- **Host**:  host name or IP address of the application server (Property Host) 
	- **Sys. No.:**: a two-digit number between 00 und 99 (Property SystemNumber)

- Use a Load Balancing Server (message server) (2)
	- **Message Server**: name or IP address of the message server (Property MessageServer) 
	- **Group**: property LogonGroup, usually *PUBLIC*
	- **SID**: three-digit System ID (Property SID e.g.,  MSS) 
See also SAP online help: [Load Balancing](https://help.sap.com/saphelp_nwpi711/helpdata/en/c4/3a644c505211d189550000e829fbbd/content.htm?no_cache=true).

#### Accessing via SAP router

If you access the SAP source system (Application server or Message server) via an SAP router, set the router string before the host name. <br>
Example:<br>
If the application server is "hamlet" and the router string is ``/H/lear.theobald-software.com/H/``, set the host property to ``/H/lear.theobald-software.com/H/hamlet``.

See also SAP online help: [SAP-Router](https://help.sap.com/viewer/6d9a59096c4b1014b507f15bed51571f/7.01.22/en-US/486b41efb74c07bee10000000a42189d.html).


![Details](/img/content/xfa/xfa_connection-det-02.png){:class="img-responsive"}<br> 

### Client and Language
- Client - a three-digit number of the SAP client between 000 and 999, e.g., 800.
- Language - the logon language for the SAP system, e.g., EN for English or DE for German.

### Authentication
The following authentication methods are supported:
-  SNC (3) (Secure Network Communication) -  encrypted connection between Xtract for Alteryx and SAP with username and password. For more details see the official [SAP Help Site](https://help.sap.com/viewer/6f3e0bea6c4b101484fcf5305b4d624b/7.01.22/en-US/e656f466e99a11d1a5b00000e835363f.html).
-  Plain (4) - SAP username and password (system or dialogue user)

#### SNC
1. Check the SAP parameter *snc/gssapi_lib* to determine, which library is used for encryption in your SAP system.
Your SAP basis has to import and configure the same library on the application server and on the machine with the installed Xtract for Alteryx.
2. When using SNC, make sure to enter the complete path of the library in the field SNC library e.g., ``C:\SNC\gx64krb5.dll``.
3. Fill in the SAP Partner Name configured for the SAP application server e.g., ``p:SAPserviceERP/do_not_care@THEOBALD.LOCAL``.

You can additionally use [SAP Log On Ticket](https://kb.theobald-software.com/erpconnect-samples/how-to-login-to-sap-with-an-sso-logonticket) (5) for authentication. 

### Miscellaneous
Select a library and optionally define a trace directory for debug logging.

#### RFC libraries (6)
The RFC API (Remote Function Call) allows to establish an RFC connection to an SAP system from an external system that communicates as Client or Server with the SAP system.  
There are two options for using RFC libraries:
- Use classic RFC library (librfc32.dll)
- Use NetWeaver RFC libraries (sapnwrfc.dll)


See additional information on SAP libraries on the [SAP Help Site - RFC Libraries](https://help.sap.com/saphelp_nwpi71/helpdata/de/45/18e96cd26321a1e10000000a1553f6/frameset.htm). <br>

SAP has stopped [supporting librfc32.dll](https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/). 

{: .box-note }
**Note:** When using the NetWeaver RFC library with DeltaQ or OHS extractions, the RFC destination in SM59 must be set to Unicode. 

#### Trace Directory (Debug Logging)

You can log debug information and save it locally. Fill the **Trace directory** field with a local path to a folder, where you want to save the debug information.
See further details in the knowledge base article [*How to activate tracing for Xtract Products*](https://support.theobald-software.com/helpdesk/KB/View/14455-how-to-activate-tracing-for-xtract-products).

Make sure to clear the **Trace Directory** field, when it is not needed.

{: .box-warning }
**Warning!: Increase of used hard drive memory** <br>
A big amount of information is collected when debug logging is activated. This can decrease the capacity of your hard drives dramatically.
Activate the debug logging only when necessary e.g., upon request of the support team.


### To check the New SAP Connection
1. Click [Test Connection] (7) to test the successful connection. The confirmation window opens.
The SAP connection is set up successfully.
![Connection test](/img/content/xfa/xfa_test-con.png){:class="img-responsive"}
2. In the configuration window (left hand-side) check if created SAP connection is listed.<br>

