
### Connection Details

![XU-Create-Connection-3-A](/img/content/xu/sap_source-details.png){:class="img-responsive"}<br>

{: .box-tip }
**Tip:** If you don't know the parameters, look in your SAP GUI or ask your SAP Basis.

1. Enter a freely selectable connection name in the **Name** (1) field. 
2. In the tab *General* in subsection **System** Enter the SAP source details (2). See [SAP Source System (server types)](#sap-source-system) for more details.

3. Set the following parameters in the subsection **Client and Language** (3):
- Client - a three-digit number of the SAP client between 000 and 999, e.g., 800.
- Language - the logon language for the SAP system, e.g., EN for English or DE for German.
4. Choose an authentication method in the subsection **Authentication** (4). The following authentication modes are supported:
    -  SAP username and password (system or dialogue user)
    - [SNC (Secure Network Communication)](./sap-single-sign-on/sso-with-kerberos-snc) with username and password
    - [SNC with SSO](./sap-single-sign-on) (Single Sign On)
    - [Log On Ticket](./sap-single-sign-on/sso-with-sap-logon-ticket) (available only for some connectors, e.g., ERPConnect, ERPConnect Services and Xtract Universal)

5. In the subsection **Miscellaneous** (5) select an [RFC library](#rfc-libraries) and optionally, define the [trace directory](#trace-directory).

6. Click **[Test Connection]** (6) to test the successful connection. <br>
The confirmation window opens. <br>
The SAP connection is set up successfully.<br>
![XU-Create-Connection-3](/img/content/xu_test_connection.png){:class="img-responsive"} <br>


### SAP source system
There are two possibilities to connect to an SAP source system:

1. Using a Single Application Server
- **Application server**:  host name or IP address of the application server (Property Host) 
- **Instance number**: a two-digit number between 00 und 99 (Property SystemNumber)

2. Using a Load Balancing Server (message server)
- **System ID**: three-digit System ID (Property SID e.g.,  MSS) 
- **Message Server**: name or IP address of the message server (Property MessageServer) 
- **Logon group**: property LogonGroup, usually *PUBLIC*
See also SAP online help: [Load Balancing](https://help.sap.com/saphelp_nwpi711/helpdata/en/c4/3a644c505211d189550000e829fbbd/content.htm?no_cache=true).

#### Accessing via SAP router

If you access the SAP source system (Application server or Message server) via an SAP router, set the router string before the host name. <br>
Example:<br>
If the application server is "hamlet" and the router string is "/H/lear.theobald-software.com/H/", set the host property to "/H/lear.theobald-software.com/H/hamlet".

See also SAP online help: [SAP-Router](https://help.sap.com/saphelp_snc700_ehp01/helpdata/en/48/6e2ef629540e27e10000000a421937/frameset.htm).

{: .box-tip }
**Tip:** Values to fill out the forms can be found in the SAP logon pad in the *Properties* or acquired from SAP Basis team.


### RFC libraries
The RFC API (Remote Function Call) allows to establish an RFC connection to an SAP system from an external system that communicates as Client or Server with the SAP system.  
There are two options for using RFC libraries in Xtract IS:
- Use classic RFC library (librfc32.dll)
- Use NetWeaver RFC libraries (sapnwrfc.dll)

{: .box-tip }
**Recommendation:** Use the not supported librfc32.dll for some extraction types, e.g., DeltaQ as runs more stable than the NetWeaver RFC library.

See additional information on SAP libraries on the [SAP Help Site - RFC Libraries](https://help.sap.com/saphelp_nwpi71/helpdata/de/45/18e96cd26321a1e10000000a1553f6/frameset.htm). <br>

SAP has stopped [supporting librfc32.dll](https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/). 

{: .box-note }
**Note:** When using the NetWeaver RFC library with DeltaQ or OHS extractions, the RFC destination in SM59 must be set to Unicode. 

### Trace Directory

You can log debug information and save it locally. Fill the **Trace directory** field with a local path to a folder, where you want to save the debug information.
See further details in the knowledge base article [*Trace Directory*](https://kb.theobald-software.com/general/how-to-activate-tracing-for-xtract-products?fromSearch=true).

{: .box-warning }
**Warning!: Increase of used hard drive memory** <br>
A big amount of information is collected when debug logging is activated. This can decrease the capacity of your hard drives dramatically.
Activate the debug logging only when necessary e.g., upon request of the support team.

#### To check the created SAP connection
1. In the main window of the Xtract Universal Designer. Navigate to the menu bar and select the menu item **Server > Manage Sources**.<br>
The window "Manage Sources" opens. <br>
2. Check if created SAP connection is listed.<br>
![XU-Create-Connection-4](/img/content/xu_manage_source_2.png){:class="img-responsive"}



