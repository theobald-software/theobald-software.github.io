---
ref: xfa-introduction-03
layout: page
title: Configure SAP Connection 
description: Configure SAP Connection
product: xtract-for-alteryx
parent: introduction
permalink: /:collection/:path
weight: 3
lang: en_GB
---

If you drag an XfA component to the workflow, you must first configure the connection to the required SAP system. <br>
The drop-down menu on the left lists all systems that have already been created on the local machine. Use New to create a new system. <br>
In the connection mask, you have the option of connecting to a single application server or to a message server using load balancing.
In the first case, you must specify the host name and system number. In the second case, you must specify the message server, group, and SID.
Client (e.g. 100 or 800) and language (e.g. DE or EN) must be specified as for SAP GUI logon. <br>
For the authentication in the simplest case only username and password (Plain) are needed. <br>
Other authentication methods are also supported, e.g. SNC SSO or Logon Tickets.<br>.
Which RFC library is used is a matter of taste. <br>
librfc32 has been discontinued by SAP and is officially no longer supported. However, it is more stable and uses less resources than the Netweaver library recommended by SAP. <br>
The trace file specification can only be used by Support if requested to do so.


![Designer](/img/content/xfa/designer02.png){:class="img-responsive"}

