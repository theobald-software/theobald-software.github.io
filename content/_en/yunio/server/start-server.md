---
ref: yunio-server-01
layout: page
title: Start Server
description: Start Server
product: yunio
parent: server
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=start-server
---


When executing *XtractUniversalSetup.exe* the yunIO server is installed and started as a standard Windows..

Make sure to mark the option "Server > Install Service" during the [Installation](../introduction/installation-and-update).

![Services-Install](/img/content/xu/XU_Setup_3.png){:class="img-responsive"}

The installation and removal of  the yunIO Service is conducted using the `C:\Program Files\XtractUniversal\XtractService.exe` application.
XtractService.exe is used via the Windows command line and supports the following commands:

- /i - install Windows service
- /u - uninstall Windows service

**Example:**
```
C:\Program Files\XtractUniversal>XtractService.exe /i
C:\Program Files\XtractUniversal>XtractService.exe /u
```

### Windows Serivces

After installation, the Windows service can be started, stopped and configured via the Windows Services

![Services-Start-Server](/img/content/Services-Start-Server.png){:class="img-responsive"}


{: .box-warning }
**Warning! Changing the standard ports**<br>
After manually adjusting the default ports, the yunIO Service does not start.<br>
The stored ports are already assigned and need to be adjusted the following [Config files]:<br>
`C:\Program Files\XtractUniversal\config\server\config\general.json`<br>
`C:\Program Files\XtractUniversal\config\server\web\general.json`

### Architecture

yunIO is created for [distributed use](../introduction#basic-functionality---architecture). The yunIO Service can be installed on a central server instance, e.g., a company-wide application server.
`C:\Program Files\XtractUniversal\config` As a result, access to a common yunIO repository is possible and can be used by several yunIO users.

{: .box-tip }
**Tip:** Use the appropriate user rights management in yunIO to make only the users with administrator user rights are allowed to perform fundamental changes on the central repository. See also [Access Management](../security/access-management) for more details.

*****
#### Related links
- [Installation](../introduction/installation-and-update)
- [yunIO Server Troubleshooting](https://kb.theobald-software.com/troubleshooting/xu_windows_service_not_running)


