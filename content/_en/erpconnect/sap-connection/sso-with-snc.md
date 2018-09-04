---
layout: page
title: SSO with SNC
description: SSO with SNC
product: erpconnect
parent: sap-connection
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=sso-with-snc
---


You can create a SAP connection using Single-Sign-On (SSO) and Secure Network Communication (SNC).  If you use the SNC mechanism you can select the NTLM or the Kerberos 5 mechanism. 

**NTLM**

NTLM (abbreviation for NT LAN Manager) is an authentication procedure for computernetworks. NTLM will perform the SSO authentication via a challenge-response authentication beween the client and the server. 

**Kerberos**

The Kerberos method uses a Kerberos server to authenticate the client. The server will create so called tickets an send them to the client. The client uses this ticket to authenticate. The client authenticates itself with this ticket to the server.

NTLM works for technical reasons only with one hop. Kerberos 5 is more secure than NTLM and is therefore recommended. 

More detail information about Kerberos you will find here: [http://technet.microsoft.com/en-us/library/bb742516.aspx](http://technet.microsoft.com/en-us/library/bb742516.aspx) 

More detail information about NTLM you will find here: [https://technet.microsoft.com/library/aa378749](https://technet.microsoft.com/library/aa378749)


**Double Hop Problem**

Double hop describes the passing of authentication information across two or more computers (hops).
NTLM works for technical reasons only one hop. For security reasons Kerberos is transmitting the authentication data only in one hop by default, but it can be configured, that the data can be send over two or more computers (Hops).

More detail information about the double hop problem you will find here:
[http://blogs.technet.com/b/askds/archive/2008/06/13/understanding-kerberos-double-hop.aspx](http://blogs.technet.com/b/askds/archive/2008/06/13/understanding-kerberos-double-hop.aspx)

You can use NTLM only if you do not have the Double Hop Problem. If you use for example Xtract PPV as the consumer of the SAP data it has to run on the same computer where Xtract PPV and PowerPivot is running. The domain controller and the SAP system can run on different computer. In this case you also can use Kerberos.

If you use Xtract PPV as the comsumer für the SAP data and PowerPivot and the Xtract PPV Server on different computers you have to use Kerberos which can be configurated that the Double Hop Problem do not matter. 
The Kerberos configuration you will find here:[http://blogs.technet.com/b/askds/archive/2008/06/13/understanding-kerberos-double-hop.aspx](http://blogs.technet.com/b/askds/archive/2008/06/13/understanding-kerberos-double-hop.aspx)

More information about the SSO configuration you will find here:[http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm](http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm)


**Download the DLLs**

You must also have the relevant DLLs from SAP. These DLLs are different for 32-bit and 64-bit platforms and are available with SNOTE* 352295. 
The SAP note 352295 has an 'Attachments' option from where you can download the package. The names of the DLLs are:
For 32-bit: gsskrb5.dll
For 64-bit x86: gx64krb5.dll

To configure SSO with SNC on your SAP System refer to our Knowledge Base article:
[http://my.theobald-software.com/index.php?/Knowledgebase/Article/View/87/3/snc-connection-with-sso](http://my.theobald-software.com/index.php?/Knowledgebase/Article/View/87/3/snc-connection-with-sso) 
