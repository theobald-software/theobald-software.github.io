---
ref: bc-server-01
layout: page
title: Start Server
description: Start Server
product: board-connector
parent: server
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Board-Connector-EN/default.aspx?pageid=start-server
---

When executing *Board ConnectorSetup.exe* the Board Connector server is installed and started as a standard Windows..

Make sure to mark the option "Server > Install Service" during the [Installation](../introduction/installation-and-update).

![Services-Install](/img/content/xu/XU_Setup_3.png){:class="img-responsive"}

The installation and removal of  the Board Connector Service is conducted using the `C:\Program Files\BOARDConnector\BCService.exe` application.
BCService.exe is used via the Windows command line and supports the following commands:

- /i - install Windows service
- /u - uninstall Windows service

**Example:**
```
C:\Program Files\BOARDConnector>BCService.exe /i
C:\Program Files\BOARDConnector>BCService.exe /u
```

### Windows Serivces

After installation, the Windows service can be started, stopped and configured via the Windows Services

![Services-Start-Server](/img/content/board/BC_Setup_3.png){:class="img-responsive"}

{: .box-warning }
**Warning! Changing the standard ports**<br>
After manually adjusting the default ports, the Board Connector Service does not start.<br>
The stored ports are already assigned and need to be adjusted the following [Config files]:<br>
`C:\Program Files\BOARDConnector\config\server\config\general.json`<br>
`C:\Program Files\BOARDConnector\config\server\web\general.json`

### Architecture

Board Connector is created for [distributed use](../introduction#basic-functionality---architecture). The Board Connector Service can be installed on a central server instance, e.g., a company-wide application server.
`C:\Program Files\BOARDConnector\config` As a result, access to a common Board Connector repository is possible and can be used by several Board Connector users.

{: .box-tip }
**Tip:** Use the appropriate user rights management in Board Connector to make only the users with administrator user rights are allowed to perform fundamental changes on the central repository. See also [Access Management](../security/access-management) for more details.

*****
#### Related links
- [Installation](../introduction/installation-and-update)
- [Board Connector Server Troubleshooting](https://kb.theobald-software.com/troubleshooting/bc_windows_service_not_running)


