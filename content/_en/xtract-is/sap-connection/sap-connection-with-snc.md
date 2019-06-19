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
You can also use SNC (Secure Network Communication) to connect to the SAP system. <br>
To do this, click **Additions** in the SAP Connection Manager. In the SNC section, check the box for **SNC enabled** and fill in the corresponding fields.

![SNC](/img/content/SNC.jpg){:class="img-responsive"}

The preferred security level can be set with the property **Quality Of Protection**. More details can be found here: [http://help.sap.com/saphelp_nw70ehp1/helpdata/en/e6/56f466e99a11d1a5b00000e835363f/content.htm](http://help.sap.com/saphelp_nw70ehp1/helpdata/en/e6/56f466e99a11d1a5b00000e835363f/content.htm)

For more information about SSO configuration on the SAP side, see <br>
[http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm](http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm)

**Download the DLLs**

You must download the relevant DDLs from the SAP side. These DLLs are different for 32-bit and 64-bit platforms and are provided with SAP Note 2115486:<br> 
[https://launchpad.support.sap.com/#/notes/2115486) 

The DLLs are called: 

For 32-bit: gsskrb5.dll<br>
For 64-bit x86: gx64krb5.dll<br>


