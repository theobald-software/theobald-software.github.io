---
ref: xu-getting-started-01
layout: page
title: Step 1 - Connect the Designer to a Server
description:  1. Connecting the designer with the server
product: xtract-universal
parent: getting-started
permalink: /:collection/:path
weight: 1
lang: en_GB
progressstate: 5
---


{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract Universal.<br>
Make sure to use the documentation within the new [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).


### Connecting to a server
1. Launch the Xtract Universal Designer.
2. Connect the Designer to the Xtract Universal Server and the extraction repository.
- When Xtract Universal Server is a local server, the server address is then *localhost*.<br>
The default port (8064) may vary depending on the configuration.  
![XU3_Designer_Connect](/img/content/xu/xu_connect_screen _neu.png){:class="img-responsive"}
- When the Xtract Universal Designer and the Xtract Universal Server are not running on the same machine, type
 in the host name the Xtract Universal Server is running on. Make sure the port is not blocked by your firewall.
3. If the service is not running on default port 8064, specify the port by adding [:[port]](../server/ports) after the host name.
The default port can be configured in the [server settings](../server/server-settings).

### Authentication
Xtract Universal offers different methods of authenticating and securing the connection between 
designer and server. Default authentication methods are authentication via *Windows credentials (current user)* and *Anonymous (no encryption)*.

![XU3_Designer_Authentication](/img/content/XU3_Designer_Authentication.png){:class="img-responsive"}

#### Changing the authentication method
Once logged in, you can activate or deactivate methods of authentication. <br>
1. In the main window of the Xtract Universal Designer, navigate to the menu bar and select the menu item **Server > Settings**.  
![Server-Settings](/img/content/Server-Settings.png){:class="img-responsive"}
2. To restrict the access rights, define the users / groups and select the box "Restrict Designer access to the following users/groups".

****
#### Related Links
- [Xtract Universal](../introduction#basic-functionality---architecture)
- [Xtract Universal Server](../server)


