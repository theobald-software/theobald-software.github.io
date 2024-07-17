---
ref: xtract-for-alteryx-40
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

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract for Alteryx.<br>
Make sure to use the documentation within the new [Xtract for Alteryx](https://helpcenter.theobald-software.com/xtract-for-alteryx/documentation/introduction/).

The following section shows how to create an SAP connection using the [Data Connection Manager](https://help.alteryx.com/current/en/designer/tools/dcm---designer.html) (DCM) of Alteryx.<br>
An SAP connection is required to use any Xtract for Alteryx component.

{: .box-note }
**Note:** The usage of the Alteryx Data Connection Manager is supported as of Alteryx Designer version 2022.3. 
If you use an older version of the Alteryx Designer, refer to the knowledge base article [Create an SAP Connection](https://kb.theobald-software.com/xtract-for-alteryx/xtract-sap-connection) to create SAP connections using the Xtract for Alteryx UI.

{: .box-note }
**Note:** To use the DCM it needs to be enabled for your organization, see [Alteryx Documentation: Data Connection Manager](https://help.alteryx.com/current/en/designer/tools/dcm---designer.html).

## Data Sources

You can combine Xtract data sources with credentials to create an SAP connection. <br>
The installation of Xtract for Alteryx includes the Xtract data source technology that connects to SAP systems.

### Creating an Xtract Data Source

1. In the main menu of the Alteryx Designer navigate to **File > Manage Connections**. The window "Connection Manager" opens.
2. In the tab *Data Sources* click **[New]** to create a new data source.<br>
3. Select the **Xtract** technology to create an Xtract data source.
4. Fill out the data source settings for your SAP system, see [Xtract Data Source Settings](#data-source-settings).<br>
![Data-Connection-Manager](/img/content/xfa/dcm/data-connection-manager.png){:class="img-responsive"}
4. Click **[Save]** to save the SAP connection. The subsection *Connection* is displayed.
5. In the subsection *Connection* select one of the following authentication methods: <br>
- [*Plain*](#plain-authentication) uses the SAP username and password.
- [*SNC*](#secure-network-communication-snc) uses an encrypted connection between Xtract for Alteryx and SAP with username and password. 
- [*Ticket Issuer*](#sap-logon-ticket) uses SAP Logon-Tickets in place of user credentials. This connection is not encrypted.
6. Select an [existing credential](#creating-credentials) for your SAP system or click **+ Connect Credential** to create a new credential.
7. Click **[Link]** / **[Create and link]** to link the credential to the connection. Example:<br>
![new-data-source](/img/content/xfa/dcm/new-data-source.gif){:class="img-responsive" style="border:1px solid black;"}

The SAP connection is now available for selection in the Xtract for Alteryx components, see [Assigning an SAP Connection to an Xtract Component](#assigning-an-sap-connection-to-an-xtract-component).


### Xtract Data Source Settings

<!---
An SAP data source consists of the following settings:<br>
![Data-Connection-Manager](/img/content/xfa/dcm/data-connection-manager.png){:class="img-responsive"}
-->

**Technology**<br>
There are two possibilities to connect to an SAP source system:
- *SAP Application Server* uses a single application server.
	- **Host**:  Host name or IP address of the application server (Property Host).
	- **Sys. No.:**: A two-digit number between 00 und 99 (Property SystemNumber)
- *SAP Load Balancing* uses a load balancing server. For more information, see [SAP Help: Load Balancing](https://help.sap.com/saphelp_nwpi711/helpdata/en/c4/3a644c505211d189550000e829fbbd/content.htm?no_cache=true).
	- **Message Server**: Name or IP address of the message server (Property MessageServer) 
	- **Group**: Property LogonGroup, usually *PUBLIC*
	- **SID**: Three-digit System ID (Property SID e.g., MSS) 
	
{: .box-tip }
**Tip:** Values to fill out the data source settings can be found in the SAP Logon Pad in the *Properties* or acquired from SAP Basis team.
	
**Data Source Name**<br>
Name of the connection.

**Client**<br>
A three-digit number of the SAP client between 000 and 999, e.g., 800.

**Language**<br> 
The logon language for the SAP system, e.g., EN for English or DE for German

#### Advanced Options

**Client RFC Library**<br>
Select an RFC library. The following RFC libraries are supported:
- NetWeaver RFC library (sapnwrfc.dll)
- Classic RFC library (librfc32.dll)

The RFC API (Remote Function Call) allows to establish an RFC connection to an SAP system from an external system that communicates as Client or Server with the SAP system. 
For more information on SAP libraries, see [SAP Help: RFC Libraries](https://help.sap.com/saphelp_nwpi71/helpdata/de/45/18e96cd26321a1e10000000a1553f6/frameset.htm). 

SAP stopped the support for the [library librfc32.dll](https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/). 

**Trace Directory**<br>
You can log debug information and save it locally. In the field **Trace directory** enter a local path to a folder, where you want to save the debug information.
For more information, refer to the knowledge base article [How to activate tracing for Xtract Products](https://support.theobald-software.com/helpdesk/KB/View/14455-how-to-activate-tracing-for-xtract-products).<br>
Clear the **Trace Directory** field when it is not needed.

{: .box-warning }
**Warning!: Increase of used hard drive memory** <br>
A big amount of information is collected when debug logging is activated. This can decrease the capacity of your hard drives dramatically.
Activate the debug logging only when necessary e.g., upon request of the support team.


## Credentials & Authentication

You can combine SAP data sources with credentials to create an SAP connection. <br>
The credentials in the DCM include the definition of the authentication method used to connect to SAP.

### Creating Credentials

<!---
The SAP connection for Xtract for Alteryx uses existing credentials from the Data Connection Manager.<br>
If no credentials exist, follow the steps below to add credentials for your SAP connection:
-->

1. In the main menu of the Alteryx Designer navigate to **File > Manage Connections**. The window "Connection Manager" opens.
2. In the tab *Credentials* click **[New]** to create a new credential.<br>
![Credentials](/img/content/xfa/dcm/credentials.png){:class="img-responsive"}
3. Enter a name for the credential and select one of the following authentication methods: <br>
- [*Username and password*](#plain-authentication) uses the SAP username and password.
- [*SAP SNC*](#secure-network-communication-snc) uses an encrypted connection between Xtract for Alteryx and SAP with username and password. 
- [*SAP Ticket Issuer*](#sap-logon-ticket) uses SAP Logon-Tickets in place of user credentials. This connection is not encrypted.
4. Fill out the authentication details.
5. Click **[Save]** to save the credential.

The credential is displayed in the list of credentials.

{: .box-tip }
**Tip:** You can link credentials to multiple data sources.

### Plain Authentication

Enter your SAP username and password.

![Plain-Credential](/img/content/xfa/dcm/plain.png){:class="img-responsive"}

### Secure Network Communication (SNC)

Secure Network Connection (SNC) enables authentication and transport encryption between SAP systems and between SAP systems and third-party tools like Xtract for Alteryx.

1. Check the SAP parameter *snc/gssapi_lib* to determine which library is used for encryption in your SAP system.
Make sure your SAP basis imports and configures the same library on the application server and on the machine that runs Xtract for Alteryx.
2. When using SNC, make sure to enter the complete path of the library in the field **SNC library** e.g., ``C:\SNC\gx64krb5.dll``.
3. Enter the SAP **Partner Name** configured for the SAP application server e.g., ``p:SAPserviceERP/example@THEOBALD.LOCAL``.

For more information, see [SAP Help: Secure Network Communications (SNC)](https://help.sap.com/viewer/6f3e0bea6c4b101484fcf5305b4d624b/7.01.22/en-US/e656f466e99a11d1a5b00000e835363f.html) or refer to the knowledge base article [Enabling Secure Network Communication (SNC) via X.509 certificate](https://kb.theobald-software.com/sap/enable-snc-using-pse-file).

![SNC-Credential](/img/content/xfa/dcm/snc.png){:class="img-responsive"}

### SAP Logon Ticket

You can use Single-Sign-On (SSO) with SAP Logon-Tickets for authentication. This connection is not encrypted.

Enter the URL of an Application Server Java (AS Java) that is configured to issue logon tickets in the field **Ticket issuer**. <br>
For more information, see [SAP Documentation: Configuring the AS Java to Issue Logon Tickets](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/4a/412251343f2ab1e10000000a42189c/frameset.htm).

![SAP-Logon-Ticket-Credential](/img/content/xfa/dcm/logon-tickets.png){:class="img-responsive"}

## Assigning an SAP Connection to an Xtract Component

1. Drag&drop an Xtract for Alteryx component from the Alteryx Designer toolbox onto the canvas (1). The configuration window of the component opens.<br>
![Create-New-Table-Extraction](/img/content/xfa//xfa_create_table_extraction_02.png){:class="img-responsive"}
2. Select an SAP connection from the dropdown list (2).

{: .box-note }
**Note:** If no SAP connections are available, create an SAP connection in the Alteryx Connection Manager, see [Creating an SAP Connection](#creating-an-sap-connection).


*****
#### Related Links
- [Alteryx Documentation: Data Connection Manager - Server](https://help.alteryx.com/current/en/server/use-alteryx-server-ui/data-connection-manager--server-ui.html)
