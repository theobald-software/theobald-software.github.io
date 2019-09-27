---
ref: xi-sap-connection-01
layout: page
title: The Connection Manager
description: The Connection Manager
product: xtract-is
parent: sap-connection
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=connection-manager
---

Every Xtract IS component needs a connection manager to establish access to the SAP system. To create a new connection manager, please right-click in the area of the data flow task where the connection managers are located and choose New connection. The dialog shown below will then appear.

Select XTRACT from the list and click Add...

![Connection-Manager-01](/img/content/Connection-Manager-01.png){:class="img-responsive" width="600px" }

To configure the SAP connection, please double-click the connection manager icon.

![Connection-Manager-02](/img/content/Connection-Manager-02.png){:class="img-responsive" width="400px;" }

The form must be filled in as shown below. 

![Connection-Manager](/img/content/Connection-Manager.png){:class="img-responsive" width="600px" }

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

If you access the SAP target system (Application server or Message server) via an SAP router. You should set the router string just before the host name or the message server. <br>
Example: If the Application server is "hamlet" and the router string is "/H/lear.theobald-software.com/H/", you should set the Host property to "/H/lear.theobald-software.com/H/hamlet".

SAP Library: [SAP-Router](https://help.sap.com/viewer/page-not-found?url=https%3A%2F%2Fhelp.sap.com%2Fsaphelp_nw04%2Fhelpdata%2Fde%2F4f%2F992df1446d11d189700000e8322d00%2Fframeset.htm)

If you don't know which values to fill in, you may find that information by taking a look at the entries in your SAP logon pad.
Otherwise please ask your SAP Basis team for help.

If everything is filled out correctly, try to establish a connection to SAP by clicking the Test Connection button. If the connection is ok, you can start using the Xtract IS components now.

**Trace Directory**

You also have the option to log debug information. If you want to log debug information you have to enter a valid directory path into the [*Trace Directory*](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/72/9/how-to-activate-tracing-for-xtract-products) field. 

Please note that the logging usually should only be activated when requested by the Theobald Software support team. There is plenty of information that will be collected. This can decrease the capacity of your hard drives dramatically. Please note that the default logging is independent of the debug logging settings. The default logging will be accessed even if the trace directory entry in the connection manager is left blank.

**RFC library (API)**: Classic or NetWeaver. <br>

The RFC API (Remote Function Call) allows to establish an RFC connection to an SAP system from an external system, that communicates as Client or Server with the SAP system.  
The RFC API exists in two different versions: 
- Classic RFC API (classic RFC library)
- NetWeaver RFC API (NetWeaver RFC library). 

Note: When using the NetWeaver RFC library with DeltaQ or OHS extractions, the RFC destination in SM59 must be set to Unicode. 

SAP Library: [RFC API: Classical & NetWeaver](https://help.sap.com/saphelp_nwpi71/helpdata/de/45/18e96cd26321a1e10000000a1553f6/frameset.htm) <br>
SAP has stopped [supporting librfc32.dll](https://blogs.sap.com/2012/08/15/support-for-classic-rfc-library-ends-march-2016/). In our experience, however, it still works and in some cases (e.g. DeltaQ) runs more stable than the NetWeaver RFC library.


**Additions**

![XIS_ConnectionManager_AdditionsTab](/img/content/XIS_ConnectionManager_AdditionsTab.jpg){:class="img-responsive" width="600px" }

**SNC enabled**

see also [SAP Connection with SNC](./sap-connection-with-snc)<br>
Enable [SNC](https://help.sap.com/viewer/e73bba71770e4c0ca5fb2a3c17e8e229/7.5.8/en-US/e656f466e99a11d1a5b00000e835363f.html)(Secure Network Connection) for data encryption between SAP and Xtract IS.<br>
Requires respective settings on the SAP side, as well. Please contact your SAP Basis team for support.

**SNC Library (32 Bit, Visual Studio)**

Path to 32 bit version of encryption library used (when running the package in debug mode in VS/SSDT).

**SNC Library (64 Bit)**

Path to 64 bit version of encryption library used (when running the deployed package on SSIS server).

**Partner Name**

SNC partner name

**Quality of Protection**

Defines the SNC level of protection.


**Expert Options**

Since 09.2017, SAP connection parameters are no longer stored as a single connection string but as properties.<br>
There is a property for each component of the connection string. See Screenshot below.

This allows for using a [sensitive environment variable](./sensitive-environment-variable-in-ssis-catalog) for the password in the Integration Services catalog.<br>
The connection string (see legacy mode below) did not support sensitive environment variables.<br>
This provides stronger encryption than password obfuscation (see below).

You can either use connection properties or a connection string, not both.

**Legacy storage mode (connection string)**

SAP connection parameters are set via a single connection string (default in XIS versions pre 09.2017).

**Obfuscate Password**

Obfuscates SAP connection password so it's not stored in clear text. Switched on per default when activating Legacy storage mode.

![XIS_Connection_Properties](/img/content/XIS_Connection_Properties.jpg){:class="img-responsive" width="600px" }