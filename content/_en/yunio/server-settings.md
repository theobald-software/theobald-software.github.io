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
 

The following section contains an overview of the yunIO server settings in the **Settings** menu. <br>
To save any changes made in the **Settings** menu, click **[Save]**.

{: .box-note }
**Note:** All server setting changes require a yunIO service restart. All Swagger/OpenAPI definitions must be updated manually on server settings change by saving the service once more.

![Server-Settings](/img/content/yunio/Server-settings.png){:class="img-responsive" }

### Anonymous Access
**Anonymous Access** is only available if users are defined, see [User Management](./users).<br>
If **Anonymous Access** is active, anyone can access the Designer. If this option is deactivated, only defined users have access.

### Transport Layer Security

Transport Layer Security (TLS) protocol allows the user to communicate with the respective service in a secure way by encrypting the communication with that service (HTTPS).
This requires the installation of an X.509 certificate.
For more information on TLS, see [Microsoft: Transport Layer Security Protocol](https://docs.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol).

#### Pick Certificate
Click **[Pick Certificate]** and select an X.509 certificate from the list of available certificates.<br>
If the certificate is not listed in the menu or in the Windows certificate store, install the X.509 certificate.

{: .box-note }
**Note:** Depending on whether yunIO is hosted on a local server or a cloud environment, the procedure for certificate creation differs.
Please refer to the documentation available on the internet or contact your network administrators.

#### TLS enabled
Once a certificate is selected, the option **TLS enabled** is available.<br>
Enable or disable the usage of transport encryption for the web server.

{: .box-note }
**Note:** To access the Designer via TLS, restart the yunIO server and connect to the Designer using the following URL pattern: <br>`https://[host]:[HTTPS port]`. 

### Allowed Origins (CORS)

{: .box-warning }
**Warning! Cross-Origin Request Blocked** When encountering a CORS error, the URL of your origin is not authorized to send requests to yunIO. Add the URL of your origin to the list of allowed origins.

Enter URLs that are allowed to run cross-origin requests on yunIO.<br>
Example: To allow a tool like Swagger Inspector to load and execute a yunIO service, the URL `https://inspector.swagger.io` must be added to the list of allowed origins.

{: .box-note }
**Note:** For testing purposes you can use ( * ) to allow all URLs. When first installing yunIO this is set by default.


### Services, Designer and WebSockets

Define the ports for service consumption, Designer access and WebSocket configurations. Valid port numbers range from 1-65535. 
It is not recommended to use ports below 1000, because they are often already taken and using them with different services can lead to service disruptions.

##### Default Ports

|Service Name|Http|Https|Description|
|---|---|---|---|
|Services|8075|8175|This port is used by the web server, which handles the requests to invoke a service.|
|Designer|8077|8177|This port is used to open the yunIO Designer on a client machine.|
|WebSockets|8076|8176|This port is used by the yunIO Designer to read and write configurations, services, etc.|



