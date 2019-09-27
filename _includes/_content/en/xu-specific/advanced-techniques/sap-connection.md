Select the menu item *Server -> Manage Sources* to manage the SAP connections, where you can create, edit and delete connections. 

![Shared-SAP-Connections](/img/content/Shared-SAP-Connections.png){:class="img-responsive"}

To create a connection template, click on Add. 
Give the template a name and fill in the necessary fields.

![SAP-Connection-Settings](/img/content/SAP-Connection-Settings.png){:class="img-responsive"}

If you filled in all required information you can check the connection by clicking the Test Connection button. If the connection is established the following info window will be displayed.

![SAP-Connection-Test-Ok](/img/content/SAP-Connection-Test-Ok.png){:class="img-responsive"}

To edit or delete a template, click on Edit or Delete accordingly.

**Authentication via SNC / SSO**

When your SAP system is configured to be accessed via SSO with SNC, select SNC and set Partner Name and Mechanism instead of User and Password. 

You have the following mechanism options:

- Kerberos5
- NTLM
- SNC Library: this property specifies the path to the SNC library (dll) manually.

![SAP-Connection-SNC-Ok](/img/content/SAP-Connection-SNC-Ok.jpg){:class="img-responsive"}

If the mechanism option SNC Library is selected, the fields SNC Library and X.509 Certificated will be enabled. 

**Information about the SAP connection** 

To establish an SAP connection the following data are required: 
1. Client
2. Language
3. Authentication
4. SAP target system 
5. SAP router

**Client** 

A three-digit number of the SAP client between 000 and 999, e.g. 800. 

**Language** 

The logon language for the SAP system. Example: EN for English or DE for German.

**Authentication** 

For the Authentication you can use an SAP username and password. 
In general all the following authentication modes are supported:<br> 
a. SAP username and password (system or dialogue user)<br>
b. SNC (Secure Network Communication) with username and password<br>
c. SNC with SSO (Single Sign On) <br>
d. Log On Ticket (available only for some connectors, e.g. ERPConnect, ERPConnect Services and Xtract Universal)

SAP Library: [SNC](https://help.sap.com/saphelp_nw70ehp1/helpdata/de/e6/56f466e99a11d1a5b00000e835363f/frameset.htm?original_fqdn=help.sap.de)<br>
SAP Library: [SNC Parameters](https://help.sap.com/viewer/page-not-found?url=https%3A%2F%2Fhelp.sap.com%2Fsaphelp_nw2004s%2Fhelpdata%2Fen%2Fd9%2Fe8a740bbaa4d8f8bee6f7b173bd99f%2Fframeset.htm)

**SAP target system**

The SAP target system kann be an application server or message server (Load Balancing).
For an application server the following data are required:  

- Host name or IP address of the applikation server (Property Host) 
- System/Instance number , a two-digit number between 00 und 99 (Property SystemNumber)

For a message server the following data are required:  

- Three-digit System ID (Property SID, z.B. MSS) 
- Name or IP address of the Message Server (Property MessageServer) 
- Logon group (Property LogonGroup, usually it is PUBLIC)

SAP Library: [Load Balancing](https://help.sap.com/viewer/page-not-found?url=https%3A%2F%2Fhelp.sap.com%2Fsaphelp_nw2004s%2Fhelpdata%2Fde%2F22%2F04295c488911d189490000e829fbbd%2Fframeset.htm)

**SAP router**

If you access the SAP target system (Application server or Message server) via an SAP router. you should set the router string just before the host name or the message server
Example:
If the Application server is "hamlet" and the router string is "/H/lear.theobald-software.com/H/", you should set the Host property to "/H/lear.theobald-software.com/H/hamlet".

SAP Library: [SAP-Router](https://help.sap.com/viewer/page-not-found?url=https%3A%2F%2Fhelp.sap.com%2Fsaphelp_nw04%2Fhelpdata%2Fde%2F4f%2F992df1446d11d189700000e8322d00%2Fframeset.htm)

**RFC library (API)**: classical or Netweaver.

The RFC API (Remote Function Call) allows to establish an RFC connection to an SAP system from an external system, that communicates as Client or Server with the SAP system.  
The RFC API exists in two different versions: 
- Classic RFC API (classic RFC library)
- NetWeaver RFC API (NetWeaver RFC library). 

SAP Library: [RFC API: Classical & NetWeaver](https://help.sap.com/saphelp_nwpi71/helpdata/de/45/18e96cd26321a1e10000000a1553f6/frameset.htm)

**SAP Log On**

In this section you will see how to find the necessary SAP connection information in the SAP logon. 

To log in on an SAP system you need: 
- Client and
- Logon Language

For the authentication you use an SAP username and a password.  

![sapgui-client-lang](/img/content/sapgui-client-lang.jpg){:class="img-responsive"}

**SAP target system**


The SAP target system can be either an application server or a Message Server (Load Balancing).

**Application Server**

For an application server the following data are required:  

- Host name or IP address of the applikation server (Property Host) 
- System/Instance number , a two-digit number between 00 und 99 (Property SystemNumber)

![sapgui-appserver](/img/content/sapgui-appserver.jpg){:class="img-responsive"}

**Message Server (Load Balancing)** 

For a message server the following data are required:  
- Three-digit System ID (Property SID, z.B. MSS) 
- Name or IP address of the Message Server (Property MessageServer) 
- Logon group (Property LogonGroup, usually it is PUBLIC)

![sapgui-messageserver](/img/content/sapgui-messageserver.jpg){:class="img-responsive"}

**Authentication** 

For the authentification with SNC the **SNC Partner name** is required,  this can be found in the field *SNC Name*.

![sapgui-sncname](/img/content/sapgui-sncname.jpg){:class="img-responsive"}