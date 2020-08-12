---
ref: bc-introduction-08
layout: page
title: Troubleshooting
description: Troubleshooting
product: board-connector
parent: introduction
permalink: /:collection/:path
weight: 8
lang: en_GB
---

**Service did not start**

When a service does not start, configure the service to use an user account with the following rights: 

- Local Security Policy -> Local Policies -> User Right Management: Log on as a service
- Permissions for the installation directory + sub-directory: Modify
- HTTP URL Access Control List for http://+:httpPort/. 
please refer to the following site to set the URLACL: [http://msdn.microsoft.com/en-us/library/ms733768.aspx](http://msdn.microsoft.com/en-us/library/ms733768.aspx)
Instead of the URLACL, you may also use an administrator account.

To configure the service to use an user account, do the following steps: 

1. Click Start, point to Settings, click Control Panel, and then double-click Administrative Tools.
2. Double-click Services.
3. Right-click the service, and then click Properties.
4. On the Log On tab, change the account, and then click Apply.
