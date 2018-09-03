---
layout: page
title: SAP Connection with SNC
description: SAP Connection with SNC
product: xtract-is
parent: sap-connection
permalink: /:collection/:path
weight: 2
lang: en_GB
---

You can use SNC (Secure Network Communication) for the SAP Connection. 
In the Connection Manager click on **Additions**. In the section SNC select the option **SNC enabled** and fill the required fields.

![XIS_ConnectionManager_AdditionsTab](/img/content/XIS_ConnectionManager_AdditionsTab.jpg){:class="img-responsive" width="600px" }

The property Quality Of Protection sets the desired security level. For detail information go to:

[http://help.sap.com/saphelp_nw70ehp1/helpdata/en/e6/56f466e99a11d1a5b00000e835363f/content.htm]

More information about the SSO configuration you will find here: [http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm]


Download the DLLs

You must also have the relevant DLLs from SAP. These DLLs are different for 32-bit and 64-bit platforms and are available with SNOTE* 352295. You can download the DLLs from [https://websmp230.sap-ag.de/sap/support/notes/352295]

This link has an 'Attachments' option from where you can download the package. The names of the DLLs are:

For 32-bit: gsskrb5.dll
For 64-bit x86: gx64krb5.dll

To configure SSO with SNC on your SAP System refer to or Knowledge Base article:
[http://my.theobald-software.com/index.php?/Knowledgebase/Article/View/87/3/snc-connection-with-sso]