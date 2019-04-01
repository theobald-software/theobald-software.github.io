---
ref: xu-getting-started-table-02
layout: page
title: Step 1 - Connect Designer with Server
description: Step 1 - Connect Designer with Server
product: xtract-universal
parent: getting-started-table
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=step_0__connect_designer_with_server
---

After the launch of Xtract Universal Designer, the designer must connect to the Xtract Universal Server and the extraction repository. The address is in case of a local Xtract Universal Server the localhost (as in the screenshot). In case designer and server are not running on the same machine, type in the host name the Xtract Universal Server is running on.

The default port (8064) may vary depending on the configuration. If the Xtract Universal Server is running on another machine than the Xtract Universal Designer be sure that the port is not blocked by your firewall.

### XU-Server

Type in the host name the Xtract Universal service is running on. If the service is not running on default port 8064 (can be configured in the server settings), specify the port by adding :[port] after the host name.
![XU3_Designer_Connect](/img/content/xu_connect_screen _neu.png){:class="img-responsive"}

### Authentication

Xtract Universal offers different methods on authenticating and securing the connection between designer and server. Per default, authentication via *Windows credentials (current user)* and *Anonymous (no encryption)* are avtivated.

![XU3_Designer_Authentication](/img/content/XU3_Designer_Authentication.png){:class="img-responsive"}

Once logged on, you can activate or deactivate methods of authentication. To do so, please go to the Xtract Universal Designer menu bar - *Server - Settings* and change as required.

![Server-Settings](/img/content/Server-Settings.jpg){:class="img-responsive"}
