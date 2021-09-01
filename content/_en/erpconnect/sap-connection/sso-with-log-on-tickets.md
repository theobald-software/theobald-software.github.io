---
ref: ec-sap-connection-03
layout: page
title: SSO with Log On Tickets
description: SSO with Log On Tickets
product: erpconnect
parent: sap-connection
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=sso-single-sign-on
---

As of ERPConnect version 1.6 SSO scenarios are supported.

{: .box-note }
**Note**: To use SSO the SAP system must be configured as described in [SAP Help - Single Sign-On Configuration](https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/48/ca0fe42fbb5c97e10000000a42189d/content.htm?no_cache=true).

### Logon with SSO-Tickets

#### Creating SSO-Tickets
To create an SSO ticket the R3Connection class provides the method *GetSSOTicket*. 
All logon data must be provided once to create the ticket as shown in the code below.

```csharp
R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");
string ssoticket = con.GetSSOTicket();
```
#### Logon
If there is a ticket available, you can use *OpenSSO* to establish the connection without user credentials:

```csharp
R3Connection con = new R3Connection("SAPServer",00," "," ","EN","800");
con.OpenSSO(ssoticket);
```

