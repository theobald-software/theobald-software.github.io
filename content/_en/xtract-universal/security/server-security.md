---
ref: xu-security-xu3-03
layout: page
title: Server Security
description: Server Security
product: xtract-universal
parent: security
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=server_security
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract Universal.<br>
Make sure to use the documentation within the new [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

### About

This section is about restricting access to Xtract Universal/Board Connector's built in web server to predefined users or user groups. <br>
By setting access restrictions on the web server you ensure that only dedicated users can execute extractions. 

There are two types of [users and user groups](user-management#users-and-user-groups), access can be restricted to. 
- Windows AD users (Kerberos authentication)
- custom users (Basic authentication) 

When access to the web server is restricted, Windows AD credentials or credentials of a custom user must be submitted when running an extraction.


{% include _content/en/xu-specific/security-xu3/server-security.md %}


{: .box-note }
**Note:** For information on how to call an extraction with Basic Authentication through *xu.exe*, see [Basic Authentication via Commandline](../execute-and-automate-extractions/call-via-commandline#basic-authentication-via-commandline).

### Running a service under a Windows service account

When restricting access to Windows AD users, the Xtract Universal service must run under a dedicated service account. To do that, follow the steps in [Running the Xtract Universal Service under a Windows Service Account](../advanced-techniques/service-account).

*********
#### Related Links
- [User Management](./user-management)
- [Access Management](./access-management)
- [SPNEGO](https://en.wikipedia.org/wiki/SPNEGO)
- [Enabling Secure Network Communication (SNC) via X.509 certificate](https://kb.theobald-software.com/sap/enable-snc-using-pse-file)
