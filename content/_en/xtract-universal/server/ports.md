---
ref: xu-server-02
layout: page
title: Ports
description: Ports
product: xtract-universal
parent: server
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=ports
---
The Xtract Universal Server runs as a Windows service with the main process 'C:\Program Files\XtractUniversal\XtractService.exe'. 

*XtractService.exe* starts two listener processes and listens on the following ports by default:

Listener Process| Default Port
------------ | -------------
*XtractWebServer.exe* | 8065 (HTTP) and 8165 (HTTPS)
*Theobald.Xu.Rpc.Listener.exe* | 8064

{: .box-note }
**Note:** In the case of distributed use, create corresponding [Inbound Port Rules](https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-firewall/create-an-inbound-port-rule) for the protocol type **TCP** of the listener processes mentioned above.

The server processes use different ports for communication. The web server accepts extraction calls via HTTP(S). 
The configuration server communicates with the Xtract Universal Designer via a dedicated port. <br>

{: .box-warning }
**Warning! Changing the default ports**<br>
After manually adjusting the default ports, the Xtract Universal service does not start.<br>
The stored ports are already assigned and must be adapted in the following config files.<br>
`C:\Program Files\XtractUniversal\config\server\config\general.json`<br>
`C:\Program Files\XtractUniversal\config\server\web\general.json`

If manual adjustments of the port number are necessary, ask your network team for the correct ports.

{: .box-note }
**Note:** Administrator access rights are required for altering the [config files](../introduction/installation-and-update#program-directory-files).

*****
#### Related links
 - [Installation](../introduction/installation-and-update)
