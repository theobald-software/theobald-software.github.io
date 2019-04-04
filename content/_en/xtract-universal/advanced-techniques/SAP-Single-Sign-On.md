---
ref: xu-advanced-techniques-06
layout: page
title: SAP Single Sign On
description: SAP Single Sign On
product: xtract-universal
parent: advanced-techniques
childidentifier: SAP-Single-Sign-On
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=sso-with-snc
---

You can create an SAP connection using Single-Sign-On (SSO) and Secure Network Communication (SNC) via the SAP Kerberos Wraper Library using the Kerberos 5 (gsskrb5) mechanism. 

**Kerberos**

The Kerberos method uses a Kerberos server to authenticate the client. The server will create so called tickets an send them to the client. The client uses this ticket to authenticate. The client authenticates itself with this ticket to the server.


More detailed information about Kerberos can be found [here](http://technet.microsoft.com/en-us/library/bb742516.aspx).

**Double Hop Problem**

Double hop describes the passing of authentication information across two or more computers (hops). This is the case, when an XU extraction is triggered from a client and the credentials are passed on to SAP. For security reasons Kerberos is transmitting the authentication credentials only in one hop by default. However, it can be configured in a way that the credentials can be send over two or more computers (hops).

The double hop problem does not exist if the consumer of the SAP data and the Xtract Server are running on the same computer. The domain controller and the SAP system can run on different computers. 
If the consumer of the SAP data and the XU server are running on different computers you have to configure Kerberos to support this scenario. 

The Kerberos configuration can be found [here](http://blogs.technet.com/b/askds/archive/2008/06/13/understanding-kerberos-double-hop.aspx).

More information about the SSO configuration can be found [here](http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm).




**Download the DLLs**

You must also have the relevant DLLs from SAP und put them in the folder %SYSTEMROOT%\System32 . 
These DLLs are different for 32-bit and 64-bit platforms and are available with SNOTE* 352295. 
The [SAP note 2115486](http://service.sap.com/sap/support/notes/2115486) has an 'Attachments' option from where you can download the package. 

As Xtrcat Universal only runs on 64bit OS, only the 64 bit version of the Kerberos Wrapper Library is relevant.

Für 64-Bit x86: 
 - Kerberos gx64krb5.dll 

