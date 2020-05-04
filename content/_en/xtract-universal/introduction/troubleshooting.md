---
ref: xu-introduction-08
layout: page
title: Troubleshooting
description: Troubleshooting
product: xtract-universal
parent: introduction
permalink: /:collection/:path
weight: 8
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=troubleshooting
---

**Service did not start**

When a service does not start, configure the service to use an user account with the following rights: 

- Local Security Policy -> Local Policies -> User Right Management: Log on as a service
- Permissions for the installation folder + subfolders: Modify
- HTTP URL Access Control List for http://+:httpPort/. 

please refer to the following site to set the [URLACL](https://docs.microsoft.com/en-us/windows/desktop/Http/add-urlacl)
Instead of the URLACL, you may also use an administrator account.

To configure the service to use an user account, do the following steps: 

1. Click Start, point to Settings, click Control Panel, and then double-click Administrative Tools.
2. Double-click Services.
![XU-Setup](/img/content/windows_services.png){:class="img-responsive"}
3. Right-click the service, and then click Properties.
![XU-Setup](/img/content/properties_service.png){:class="img-responsive"}
4. On the Log On tab, change the account, and then click Apply.
![XU-Setup](/img/content/log-on-settings-services.png){:class="img-responsive"}