---
ref: yunio-server-03
layout: page
title: Server Settings
description: Server Settings
product: yunio
parent: server
childidentifier: server
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=server
---

The follwing section contains an overview of the YunIO server settings in the **Settings** menu. <br>
To save any changes made in the **settings** menu, click **[Save]**.

{: .box-note }
**Note:** The changes are activated when restarting the YunIO server.

![Server-Settings](/img/content/yunio/Server-settings.png){:class="img-responsive" width="800px"}


### Transport Layer Security

The Transport Layer Security (TLS) protocol prevents spying or manipulation of data (such as SAP credentials) that is exchanged between the Designer and the Server.
When TLS is enabled, access restrictions require accessing the web server through an https connection. This requires installation of an X.509 certificate.
For more information on TLS, see [Microsoft: Transport Layer Security Protocol](https://docs.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol).

![TransportLayerSecurity](/img/content/yunio/Settings_transportlayersecurity.png){:class="img-responsive"}

**Pick Certificate:**<br>
Click **[Pick Certificate]** and select an X.509 certificate from the list of available certificates.<br>
If the certificate is not listed in the menu or in the Windows certificate store, [install the X.509 certificate](./install-x.509-Certificate).

**TLS enabled:**<br>
Once a certificate is selected, the option **TLS enabled** is available.<br>
Enable or disable the usage of access restrictions for your services.

### CORS List

Enter a URL you want to add to the list of URLs ...

{: .box-note }
**Note:** For testing purposes you can use ( * ) to allow all URLs.

![CORS-List](/img/content/yunio/Settings_corslist.png){:class="img-responsive"}

### Services

Define the ports under which your services are available. 

![Services](/img/content/yunio/Settings_services.png){:class="img-responsive"}

**HTTP port:**<br>
This port is used for your services if *Transport Layer Security (TLS)* is disabled. The maximum port number is 65535.

**HTTPS port:**<br>
This port is used for your services if *Transport Layer Security (TLS)* is enabled. The maximum port number is 65535.


### Designer

Define the ports under which the YunIO web UI is available. 

![Designer](/img/content/yunio/Settings_designer.png){:class="img-responsive"}

**HTTP port:**<br>
This port is used to access the web UI if *Transport Layer Security (TLS)* is disabled. The maximum port number is 65535.

**HTTPS port:**<br>
This port is used to access the web UI if *Transport Layer Security (TLS)* is enabled. The maximum port number is 65535.


### WebSockets

Define the ports for the communication between the Designer and the YunIO server. 

![WebSockets](/img/content/yunio/Settings_websockets.png){:class="img-responsive"}

**HTTP port:**<br>
This port is used for the communication between the Designer and the YunIO server if *Transport Layer Security (TLS)* is disabled. The maximum port number is 65535.

**HTTPS port:**<br>
This port is used for the communication between the Designer and the YunIO server if *Transport Layer Security (TLS)* is enabled. The maximum port number is 65535.