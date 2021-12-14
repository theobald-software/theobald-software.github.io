---
ref: yunio-07
layout: page
title: Server Settings
description: Server
product: yunio
parent: yunio
childidentifier: server
permalink: /:collection/:path
weight: 30
lang: en_GB
old_url: /Xtract-Universal-DE/default.aspx?pageid=server
---
 

The follwing section contains an overview of the yunIO server settings in the **Settings** menu. <br>
To save any changes made in the **Settings** menu, click **[Save]**.

{: .box-note }
**Note:** The changes are activated when restarting the yunIO server.

![Server-Settings](/img/content/yunio/Server-settings.png){:class="img-responsive" }


### Transport Layer Security

The Transport Layer Security (TLS) protocol prevents spying or manipulation of data (such as SAP credentials) that is exchanged between the Designer and the Server.
When TLS is enabled, access restrictions require accessing the web server through an https connection. This requires installation of an X.509 certificate.
For more information on TLS, see [Microsoft: Transport Layer Security Protocol](https://docs.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol).


#### Pick Certificate
Click **[Pick Certificate]** and select an X.509 certificate from the list of available certificates.<br>
If the certificate is not listed in the menu or in the Windows certificate store, install the X.509 certificate.

#### TLS enabled
Once a certificate is selected, the option **TLS enabled** is available.<br>
Enable or disable the usage of transport encryption for the web server.

### Allowed Origins (CORS)

{: .box-warning }
**Warning! Cross-Origin Request Blocked** When encountering a CORS error, the URL of your origin is not authorized to send requests to yunIO. Add the URL of your origin to the list of allowed origins.

Enter URLs that are allowed to run cross-origin requests on yunIO.<br>
Example: To allow a tool like Swagger Inspector to load and test run a yunIO service, the URL `https://inspector.swagger.io` must be added to the list of allowed origins.

{: .box-note }
**Note:** For testing purposes you can use ( * ) to allow all URLs. When first installing yunIO this is set by default.


### Services

Define the ports of your services. 

#### HTTP port
This port is used for your services if *Transport Layer Security (TLS)* is disabled. The maximum port number is 65535.

#### HTTPS port
This port is used for your services if *Transport Layer Security (TLS)* is enabled. The maximum port number is 65535.


### Designer

Define the ports of the yunIO web UI. 

#### HTTP port
This port is used to access the web UI if *Transport Layer Security (TLS)* is disabled. The maximum port number is 65535.

#### HTTPS port
This port is used to access the web UI if *Transport Layer Security (TLS)* is enabled. The maximum port number is 65535.


### WebSockets

Define the ports for the communication between the Designer and the yunIO server. 

#### HTTP port
This port is used for the communication between the Designer and the yunIO server if *Transport Layer Security (TLS)* is disabled. The maximum port number is 65535.

#### HTTPS port
This port is used for the communication between the Designer and the yunIO server if *Transport Layer Security (TLS)* is enabled. The maximum port number is 65535.
