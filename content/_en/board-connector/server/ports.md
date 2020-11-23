---
ref: bc-server-02
layout: page
title: Ports
description: Ports
product: board-connector
parent: server
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=ports
---
The BOARD Connector Server runs as a Windows service with the main process 'C:\Program Files\BOARDConnector\BCService.exe'. 

*BCService.exe* starts two listener processes and listens on the following ports by default:

Listener Process| Default Port
------------ | -------------
*BCWebServer.exe* | 8097 (HTTP) and 8197 (HTTPS)
*BCConfigServer.exe* | 8096

The server processes use different ports for communication. The web server accepts extraction calls via HTTP(S). 
The configuration server communicates with the BOARD Connector Designer via a dedicated port. <br>

{: .box-warning }
**Warning! Changing the default ports**<br>
After manually adjusting the default ports, the BOARD Connector service does not start.<br>
The stored ports are already assigned and must be adapted in the following config files.<br>
`C:\Program Files\BOARDConnector\config\server\config\general.json`<br>
`C:\Program Files\BOARDConnector\config\server\web\general.json`

If manual adjustments of the port number are necessary, ask your network team for the correct ports.

{: .box-note }
**Note:** Administrator access rights are required for altering the [config files](./introduction/installation-and-update#program-directory-files).

*****
#### Related links
 - [Installation](./introduction/installation-and-update)
