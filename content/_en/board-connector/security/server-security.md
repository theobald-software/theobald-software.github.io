---
ref: bc-security-03
layout: page
title: Server Security
description: Server Security
product: board-connector
parent: security
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=server-security
---

### About

This section is about restricting access to Xtract Universal/Board Connector's built in web server to predefined users or user groups. <br>
By setting access restrictions on the web server you ensure that only dedicated users can execute extractions. 

There are two types of [users and user groups](user-management#users-and-user-groups), access can be restricted to. 
- Windows AD users (Kerberos authentication)
- custom users (Basic authentication) 

When access to the web server is restricted, Windows AD credentials or credentials of a custom user must be submitted when running an extraction.

{: .box-note}
**Note**:  Submitting credentials for Basic Authentication is not supported by the SAP Data Reader of the Board Server (as of version 11.3).<br>
Securing web access to extractions can be accomplished by using network level security methods e.g., firewalls. 

{% include _content/en/xu-specific/security-xu3/server-security.md %}

### Running a service under a Windows service account

When restricting access to Windows AD users, the BOARD Connector service must run under a dedicated service account. 
The procedure to run the BOARD Connector service under a Windows service account is the same as [Running the Xtract Universal Service under a Windows Service Account](../../xtract-universal/advanced-techniques/service-account).

*********
#### Related Links
- [User Management](./user-management)
- [Access Management](./access-management)
- [SPNEGO](https://en.wikipedia.org/wiki/SPNEGO)