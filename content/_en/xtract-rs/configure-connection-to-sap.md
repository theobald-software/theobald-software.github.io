---
ref: xtract-rs-03
layout: page
title: Configure connection to SAP
description: Configure connection to SAP
product: xtract-rs
parent: xtract-rs
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-RS-EN/default.aspx?pageid=configure-connection-to-sap
---

The following section guides you through the creation of an SAP data source in the SQL Server Report Server (SSRS) environment. 
The screenshots may slightly differ depending on whether you use the wizard or manual creation.
After installation the Xtract RS data source type can be used in the Reporting Services wizard. Create a new connection to SAP as described in the following. 

1. Run the *XtractRSSetup.exe* application on the same environment, where Visual Studio is installed.
2. Make sure that the *Microsoft Reporting Services Projects* extension is installed and activated in VS2019.
3. Create a new *Report Server Project* in VS2019.
4. Right-click on the *Shared Data Sources* folder and select *Add New Data Source*.
5. In tab *General*, assign a name for the new data source (optional), the default value is *DataSource1* (1).
6. Select the type *Xtract RS* (2).
![Report-Data-Source-001](/img/content/Report-Data-Source-001.png){:class="img-responsive"}
7. Fill in the connection string to the SAP source (3).
8. Switch to the *Credentials* tab and enter your SAP username and password (4).
![Report-Data-Source-002](/img/content/Report-Data-Source-002.png){:class="img-responsive"}
9. Click **[OK]** to confirm.

### Connection String Parameter 
{: .box-note }
**Note:** For more information, see the official [SAP documentation](https://help.sap.com/doc/saphelp_nwes72/7.2.3/de-DE/44/0ebf6c9b2b0d1ae10000000a114a6b/content.htm?no_cache=true).

Server |Parameter | Example value
------------ |------------ | -------------
 Application | ApplicationHost | `saperp.theobald.local`
<!----> | SystemNumber | `00`
<!----> | LANG | `EN`
<!----> | Client | `800`
Secure Network Communication | SNCMode | `1` - enable
<!----> | SNCPartnerName | `p:SAPserviceERP/do_not_care@THEOBALD.LOCAL` - Partnername des konfigurierten SAP Systems
<!----> | SNCLibrary | `C:\SNC\gsskrb5.dll` - lokaler Pfad zur Kerberos lib
<!----> | SSOType | `2` - SSO mit Kerberos
Message | MessageServer | `saperp.theobald.local`
<!----> | UseLoadBalancing | `true`
<!---->  | LogonGroup | `PUBLIC`
<!----> | SID | `MBS`

### Connection String Examples: 
#### SNC

ApplicationHost=saperp.theobald.local;SystemNumber=00;LANG=EN;Client=800;SNCMode=1;
SNCPartnerName=p:SAPserviceERP/do_not_care@THEOBALD.LOCAL;SNCLibrary="C:\SNC\gsskrb5.dll";SSOType=2

#### Single Application Server

LANG=EN;ApplicationHost=ec5.theobald-software.com;SystemNumber=00;Client=800


### Downloading Kerberos DLLs

{: .box-note }
**Note:** You can download the relevant DLLs from the [SAP ONE Support Launchpad](https://launchpad.support.sap.com/#/notes/2115486).

Store the Kerberos libraries in the following local path: `C:\SNC\gx64krb5.dll` (64-bit) and `C:\SNC\gsskrb5.dll` (32-bit).

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
