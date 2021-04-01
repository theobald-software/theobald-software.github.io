---
ref: xi-sap-connection-02
layout: page
title: SAP Connection with SNC
description: SAP Connection with SNC
product: xtract-is
parent: sap-connection
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=sap-connection-with-snc
progressstate: 5
---
To use encrypted communication between Xtract IS and SAP you can use Secure Network Communication (SNC) to connect to your SAP system. 
The following section explains the necessary configuration of the SAP "Connection Manager", depending on your SAP system. 
For more information about SNC configuration, see the official [SAP Help Site](http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm). 

### Configuring Connection Manager

{: .box-tip }
**Tip:** Values to fill out the forms can be found in the SAP Logon Pad in the *Properties* or acquired from SAP Basis team.

1. Click **[Additions]** within "Xtract IS Connection Manager" window. The window "Xtract IS Connection Manager Additions" opens.
![SNC](/img/content/SNC.png){:class="img-responsive"}
2. Enable the checkbox **SNC enabled**. The fields **SNC Library (32 Bit. & 64 Bit)**, **Partner Name** and **Quality of Protection** become customizable.
![SNC](/img/content/SNC_fields.png){:class="img-responsive"}
3. Check the SAP parameter *snc/gssapi_lib* to determine, which library is used for encryption in your SAP system. <br>
Your SAP basis has to import and configure the same library on the application server and on the machine, where Xtract IS is running.   
4. In the SNC library fields (1), fill in the complete path to the library location for 32 Bit & 64 Bit e.g., `C:\Program Files (x86)\SAP\FrontEnd\SecureLogin\sapcrypto.dll`.
5. Fill in the SAP Partner Name (2) configured for the SAP application server e.g., `p:SAPserviceERP/do_not_care@THEOBALD.LOCAL`.
7. Define the SNC level of protection e.g., *9 - Maximum* default value. <br>
The preferred security level can be set with the property **Quality Of Protection**. For more details see the official [SAP Help Site](http://help.sap.com/saphelp_nw70ehp1/helpdata/en/e6/56f466e99a11d1a5b00000e835363f/content.htm).
9. Click **[OK]** to confirm.
10. Click **[Test Connection]** to test the successful connection.
The confirmation window opens.
11. Click **[OK]** to confirm.

### Download the Kerberos DLLs
It is also possible to use Kerberos libraries for encryption between client and SAP server.
For more information, see the official [SAP Help Site](https://launchpad.support.sap.com/#/notes/2115486). 
Different DLLs for 32-bit (`gsskrb5.dll`) and 64-bit (`gx64krb5.dll`) platforms are provided with [SAP Note 2115486](https://launchpad.support.sap.com/#/notes/2115486).








