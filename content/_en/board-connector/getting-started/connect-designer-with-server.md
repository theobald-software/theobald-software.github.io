---
ref: bc-getting-started-01
layout: page
title: Step 1 - Connect Designer with Server 
description: Step 1- Connect Designer with Server
product: board-connector
parent: getting-started
permalink: /:collection/:path
weight: 1
lang: en_GB
progressstate: 5
---
### Connecting to a Server
1. Launch the BOARD Connector Designer.
2. Connect the Designer to the BOARD Connector Server and the extraction repository.
- When BOARD Connector Server is a local server, the server address is then *localhost*.<br>
The default port (8096) may vary depending on the configuration.  
![XU3_Designer_Connect](/img/content/board/bc_connect_screen.png){:class="img-responsive"}
- When the BOARD Connector Designer and the BOARD Connector Server are not running on the same machine, type
 in the host name the BOARD Connector Server is running on. Make sure the port is not blocked by your firewall.
3. If the service is not running on default port 8096 (can be configured in the server settings), specify the port by adding [:[port]](../server/ports) after the host name.

### Authentication
BOARD Connector offers different methods of authenticating and securing the connection between 
designer and server. Default authentication methods are authentication via *Windows credentials (current user)* and *Anonymous (no encryption)*.

![XU3_Designer_Authentication](/img/content/board/bc_Designer_Authentication.png){:class="img-responsive"}

#### Changing the authentication method
Once logged in, you can activate or deactivate methods of authentication. <br>
1. In the main window of the BOARD Connector Designer, navigate to the menu bar and select the menu item **Server > Settings**.  
![Server-Settings](/img/content/Server-Settings.png){:class="img-responsive"}
2. To restrict the access rights, define the users / groups and select the box "Restrict Designer access to the following users/groups".

****
#### Related Links
- [BOARD Manual](https://www.boardmanual.com/)
- [BOARD Connector Server](../server)


