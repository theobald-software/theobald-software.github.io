

### Connection Details

The "Change Source" window contains the connection details and is divided into four sections:
- [General](#general)
- [Authentication](#authentication)
- [RFC Options](#rfc-options)
- [Access Control](#access-control)

Fill out the connection details to establish an SAP connection.

{: .box-tip }
**Tip:** Values to fill out the fields can be found in the SAP logon pad in the *Properties* or acquired from SAP Basis team.

### General

![XU-Create-Connection-3-A](/img/content/xu/sap_source-details.png){:class="img-responsive"}

#### System
There are two possibilities to connect to an SAP source system:
- connect via **Single Application Server**
	- **Host**:  host name or IP address of the application server (Property Host) 
	- **Instance No**: a two-digit number between 00 and 99 (Property SystemNumber)

- connect via **Load Balancing** (message server)
	- **Message Server**: name or IP address of the message server (Property MessageServer) 
	- **Group**: property LogonGroup, usually *PUBLIC*
	- **SID**: three-digit System ID (Property SID e.g.,  MSS) 
For more information, see [SAP Documentation: Load Balancing](https://help.sap.com/saphelp_nwpi711/helpdata/en/c4/3a644c505211d189550000e829fbbd/content.htm?no_cache=true).


#### Access via SAP Router

If you access the SAP source system (Application server or Message server) via an SAP router, set the router string before the host name. <br>
Example:<br>
If the application server is "hamlet" and the router string is ``/H/lear.theobald-software.com/H/``, set the host property to ``/H/lear.theobald-software.com/H/hamlet``.

For more information, see [SAP Documentation: SAP-Router](https://help.sap.com/saphelp_snc700_ehp01/helpdata/en/48/6e2ef629540e27e10000000a421937/frameset.htm).

#### Client and Language
- **Client**: a three-digit number of the SAP client between 000 and 999, e.g., 800.
- **Language**: the logon language for the SAP system, e.g., EN for English or DE for German.


### Authentication
The following authentication methods are supported:
- **Plain**: SAP username and password (system or dialogue user)
- **Secure Network Communication (SNC)**: username and password
- [SNC with SSO](../advanced-techniques/sap-single-sign-on) (Single Sign On)
- **SAP Log On Ticket**

#### Plain

Enter your SAP username and password.<br>
![XU-Authentication](/img/content/xu/sap_source-auth.png){:class="img-responsive"} 

**Request SAP credentials from caller when running extractions** <br>
This option is available when using the *Plain* or *SNC* authentication method. 
If this option is active, SAP credentials entered in the **User** and **Password** fields are not applied.
Instead, SAP credentials need to be provided via basic authentication when executing an extraction. 
Caching the result of extractions is inactive. 

**Xtract Universal only:** See [Power BI Connector](https://help.theobald-software.com/en/xtract-universal/destinations/Power-BI-Connector#single-sign-on-and-sap-authentication) or [Alteryx](https://help.theobald-software.com/en/xtract-universal/destinations/alteryx#settings-in-alteryx) destinations for examples. 

{: .box-note }
**Note:** The option **Request SAP credentials from caller when running extractions** requires extractions to be called via [HTTPS - unrestricted](../server/server-settings#web-server).

#### Secure Network Communication (SNC)

![XU-Authentication](/img/content/xu/sap_source-snc1.png){:class="img-responsive"} 

1. Check the SAP parameter *snc/gssapi_lib* to determine, which library is used for encryption in your SAP system.
Your SAP Basis has to import and configure the same library on the application server and on the machine that runs Xtract Universal or BOARD Connector.
2. Enter the complete path to the library location in the **SNC library** field e.g., `C:\Program Files\SAP\FrontEnd\SecureLogin\lib\sapcrypto.dll`.
3. Enter the SAP **Partner Name** configured for the SAP application server e.g., `p:SAPserviceERP/do_not_care@THEOBALD.LOCAL`.

For more information on SNC, see the knowledge base article [Enabling Secure Network Communication (SNC) via X.509 certificate](https://kb.theobald-software.com/sap/enable-snc-using-pse-file).

**Use static SAP credentials / Windows service account** <br>
If this option is active, the SAP credentials entered in the **User** and **Password** fields are used for authentication.

**Request SAP credentials from caller** <br>
If this option is active, SAP credentials entered in the **User** and **Password** fields are not applied.
Instead, SAP credentials need to be provided via basic authentication when executing an extraction. 
Caching the result of extractions is inactive. 

**Impersonate caller (Kerberos SSO)** <br>
If this option is active, follow the steps described in [SSO with Kerberos SNC](../advanced-techniques/sap-single-sign-on/sso-with-kerberos-snc).

**Enroll certificate on behalf of caller (Certificate SSO)** <br>
Coming soon.

#### SAP Logon Ticket

For information on how to use an authentication with SAP Logon Tickets, see [**SAP Log On Ticket**](../advanced-techniques/sap-single-sign-on/sso-with-sap-logon-ticket).


### RFC Options
Select a library and optionally define a trace directory for debug logging.

![XU-Create-Connection-RFC-Options](/img/content/xu/sap_source-rfc.png){:class="img-responsive"}

#### RFC libraries
The RFC API (Remote Function Call) allows to establish an RFC connection to an SAP system from an external system that communicates as Client or Server with the SAP system.  
There are two options for using RFC libraries:
- **Use classic RFC library (librfc32.dll)**
- **Use NetWeaver RFC libraries** (sapnwrfc.dll)

For more information on SAP libraries, see [SAP Documentation: - RFC Libraries](https://help.sap.com/saphelp_nwpi71/helpdata/de/45/18e96cd26321a1e10000000a1553f6/frameset.htm). <br>
SAP has stopped [supporting librfc32.dll](https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/). 

{: .box-note }
**Note:** When using the NetWeaver RFC library with DeltaQ or OHS extractions, the RFC destination in SM59 must be set to Unicode. 

#### Trace Directory

You can log debug information and save it locally. Fill the **Trace directory** field with a local path to a folder, where you want to save the debug information.

{: .box-warning }
**Warning!: Increase of used hard drive memory** <br>
A big amount of information is collected when debug logging is activated. This can decrease the capacity of your hard drives dramatically.
Activate the debug logging only when necessary e.g., upon request of the support team.

### Access Control

### Test Connection

**Test Designer Connection**<br>
Click **[Test Designer Connection]** to test the connection between the Designer and SAP. 
A confirmation window opens. <br>

**Test Server Connection**<br>
Click **[Test Server Connection]** to test the connection between the Server and SAP. 
A confirmation window opens. <br>

### Checking the New SAP Connection
1. In the main window of the Designer, navigate to the menu bar and select **Server > Manage Sources**.<br>
The window "Manage Sources" opens. <br>
2. Check if the created SAP connection is listed. 
![XU-Create-Connection-4](/img/content/xu_manage_source_2.png){:class="img-responsive"}
