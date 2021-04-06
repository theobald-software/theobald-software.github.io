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

{% include _content/en/xu-specific/security-xu3/server-security.md %}


### Running a service under a Windows service account

When restricting access to Windows AD users, the BOARD Connector service must run under a dedicated service account. 
The procedure to run the BOARD Connector service under a Windows service account is the same as [Running the Xtract Universal Service under a Windows Service Account](../../xtract-universal/advanced-techniques/service-account).

*********
#### Related Links
- [User Management](./user-management)
- [Access Management](./access-management)
- [SPNEGO](https://en.wikipedia.org/wiki/SPNEGO)