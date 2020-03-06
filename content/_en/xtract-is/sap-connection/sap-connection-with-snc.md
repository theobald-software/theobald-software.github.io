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
---
To use encrypted communication between Xtract IS and SAP you can use Secure Network Communication (SNC) to connect to your SAP system. Depending on your SAP settings, the following section explains the needed configuration of the SAP 'Connection Manager'. For more information about SNC configuration rely on the official [SAP Help Portal](http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm). 

1. Click **[Addition]** within *Xtract IS Connection Manager*. The window 'Xtract IS Connection Manager Additions' opens.
![SNC](/img/content/SNC.png){:class="img-responsive"}
2. Enable the checkbox *SNC enabled*. The fields *SNC Library (32 Bit. & 64 Bit*, *Partner Name* and *Quality of Protection* become customizable.
![SNC](/img/content/SNC_fields.png){:class="img-responsive"}
3. Check SAP paramater *snc/gssapi_lib* which library is used for encryption in SAP system . 
4. Your SAP basis have to import and configure the same library on the machine, on which Xtract IS is running.   
5. Fill in the complete path to the library location for 32 Bit & 64 Bit (2) e.g., `C:\Program Files (x86)\SAP\FrontEnd\SecureLogin\sapcrypto.dll`
6. Fill in the SAP Partner Name (2) configured for the SAP application server e.g., `p:SAPserviceERP/do_not_care@THEOBALD.LOCAL`
7. Define the SNC level of protection e.g., *9 - Maximum* default value.
8. Enable *Legacy storage mode (connection string)* checkbox. *Obfuscate password* option become customizable (3).
9. Click **[OK]** to confirm.
10. Click **[Test Connection]** to test the successful connection.
The confirmation window opens.
11. Click **[OK]** to confirm.

The preferred security level can be set with the property **Quality Of Protection**. More details can be found in the ooficial [SAP Help Portal](http://help.sap.com/saphelp_nw70ehp1/helpdata/en/e6/56f466e99a11d1a5b00000e835363f/content.htm).

### Download the Kerberos DLLs
It is also possible to use Kerberos libraries for encryption between client and SAP server. For more information, see the official [SAP Help Portal](https://launchpad.support.sap.com/#/notes/2115486). Different DLLs for 32-bit (`gsskrb5.dll`) and 64-bit (`gx64krb5.dll`) platforms are provided with [SAP Note 2115486](https://launchpad.support.sap.com/#/notes/2115486).








