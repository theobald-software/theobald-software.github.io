---
ref: yunio-security-xu3-03
layout: page
title: Server Security
description: Server Security
product: yunio
parent: security
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=server_security
---

{% include _content/en/xu-specific/security-xu3/server-security.md %}

{: .box-note}
**Note**: Basic authentication is currently only supported when calling an extraction through the extraction's URL. Calling an extraction through *xu.exe* is currently not supported when Basic authentication is active.

### Running a service under a Windows service account

When restricting access to Windows AD users, the yunIO service must run under a dedicated service account. To do that, follow the steps in [Running the yunIO Service under a Windows Service Account](../advanced-techniques/service-account).

*********
#### Related Links
- [User Management](./user-management)
- [Access Management](./access-management)
- [SPNEGO](https://en.wikipedia.org/wiki/SPNEGO)
- [Enabling Secure Network Communication (SNC) via X.509 certificate](https://kb.theobald-software.com/sap/enable-snc-using-pse-file)
