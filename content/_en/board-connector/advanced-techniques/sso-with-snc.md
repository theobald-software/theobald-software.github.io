---
ref: bc-advanced-techniques-05
layout: page
title: SSO with SNC
description: SSO with SNC
product: board-connector
parent: advanced-techniques
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=sso-with-snc
---	


You can create a SAP connection using Single-Sign-On (SSO) and Secure Network Communication (SNC). If you use the SNC mechanism you can select the NTLM or the Kerberos 5 mechanism. 

**Kerberos**

The Kerberos method uses a Kerberos server to authenticate the client. The server will create so called tickets an send them to the client. The client uses this ticket to authenticate. The client authenticates itself with this ticket to the server.<br>
NTLM works for technical reasons only with one hop. Kerberos 5 is more secure than NTLM and is therefore recommended. 

More detail information about Kerberos you will find here:<br> 
[http://technet.microsoft.com/en-us/library/bb742516.aspx](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/bb742516(v=technet.10)) 

**Double Hop Problem**

Double hop describes the passing of authentication information across two or more computers (hops).<br>
NTLM works for technical reasons only one hop. For security reasons Kerberos is transmitting the authentication data only in one hop by default, but it can be configured, that the data can be send over two or more computers (Hops).

You can use NTLM only if you do not have the Double Hop Problem, i.e. if the consumer of the SAP data and Xtract Server are running on the same computer. The domain controller and the SAP system can run on different computers. In this case you also can use NTLM or Kerberos.<br>
If the consumer of the SAP data and the Xtract Server are running on different computers you have to use Kerberos which can be configured that the Double Hop Problem do not matter. 

The Kerberos configuration you will find here: <br>
[http://blogs.technet.com/b/askds/archive/2008/06/13/understanding-kerberos-double-hop.aspx](http://blogs.technet.com/b/askds/archive/2008/06/13/understanding-kerberos-double-hop.aspx)

More information about the SSO configuration you will find here:<br> [http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm](http://help.sap.com/saphelp_nw73/helpdata/en/44/0e2e0cc7330d19e10000000a114a6b/frameset.htm)


**NTLM**

NTLM (abbreviation for NT LAN Manager) is an authentication procedure for computer networks. NTLM will perform the SSO authentication via a challenge-response authentication between the client and the server. 

More detail information about NTLM you will find here:<br> [http://technet.microsoft.com/en-us/query/aa378749](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/hh831571(v=ws.11))


**Download the DLLs**

You must also have the relevant DLLs from SAP und put them in the folder %SYSTEMROOT%\System32 . <br>
These DLLs are different for 32-bit and 64-bit platforms and are available with SNOTE* 352295. 
The [SAP note 2115486](https://websmp130.sap-ag.de/sap/support/notes/2115486) has an 'Attachments' option from where you can download the package. 

For 32-bit: 
 - Kerberos: gsskrb5.dll 
 - NTLM: gssntlm.dll
Für 64-Bit x86: 
 - Kerberos gx64krb5.dll 
 - NTLM: gx64ntlm.dll

To configure SSO with SNC on your SAP System refer to or Knowledge Base article. The article offers a link to download the DLLs:
[http://my.theobald-software.com/index.php?/Knowledgebase/Article/View/87/3/snc-connection-with-sso](http://my.theobald-software.com/index.php?/Knowledgebase/Article/View/87/3/snc-connection-with-sso)