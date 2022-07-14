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

*BCService.exe* starts the following listener processes and listens on the following ports by default:

Listener Process| Default Port | Comment
------------ | ------------- | -------------
*Theobald.Bc.Web.Listener.exe* | 8097 (HTTP) and 8197 (HTTPS) | ports can be changed
*BCConfigServer.exe* | 8096 | port can be changed
*BCAPIServer.exe* | 8098 | port can not be changed, no encryption

The server processes use different ports for communication.
- The web server accepts extraction calls from the BOARD server via HTTP(S).
- The configuration server communicates with the BOARD Connector Designer.
- The API Server makes the extractions' metadata available to the BOARD server's data reader.

{: .box-warning }
**Warning! Changing the default ports**<br>
After manually adjusting the default ports, the BOARD Connector service does not start.<br>
The stored ports are already assigned and must be adapted in the following config files.<br>
`C:\Program Files\BOARDConnector\config\server\config\general.json`<br>
`C:\Program Files\BOARDConnector\config\server\web\general.json`

If manual adjustments of the port number are necessary, ask your network team for the correct ports.

{: .box-note }
**Note:** Administrator access rights are required for altering the [config files](../introduction/installation-and-update#program-directory-files).

*****
#### Related links
 - [Installation](../introduction/installation-and-update)
