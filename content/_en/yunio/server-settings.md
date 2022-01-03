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
 

The following section contains an overview of the yunIO server settings in the **Settings** menu.
To save any changes made in the **Settings** menu, click **[Save]**.

{: .box-note }
**Note:** All server setting changes require a yunIO service restart. All Swagger/OpenAPI definitions must be updated manually on server settings change by saving the service once more.

![Server-Settings](/img/content/yunio/Server-settings.png){:class="img-responsive" }

### Transport Layer Security

Transport Layer Security (TLS) protocol allows the user to communicate with the respective service in a secure way by encrypting the communication with that service (HTTPS).
This requires the installation of an X.509 certificate.
For more information on TLS, see [Microsoft: Transport Layer Security Protocol](https://docs.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol).

#### Pick Certificate
Click **[Pick Certificate]** and select an X.509 certificate from the list of available certificates.
If the certificate is not listed in the menu or in the Windows certificate store, install the X.509 certificate.

{: .box-note }
**Note:** Depending on whether yunIO is hosted on a local server or a cloud environment, the procedure for certificate creation differs.
Please refer to the documentation available on the internet or contact your network administrators.

#### TLS enabled
Once a certificate is selected, the option **TLS enabled** is available.
Enable or disable the usage of transport encryption for the web server.

### Allowed Origins ([CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS))

{: .box-warning }
**Warning! Cross-Origin Request Blocked** When encountering a CORS error, the URL of your origin is not authorized to send requests to yunIO. Add the URL of your origin to the list of allowed origins.

Enter URLs that are allowed to run cross-origin requests on yunIO.
Example: To allow a tool like Swagger Inspector to load and execute a yunIO service, the URL `https://inspector.swagger.io` must be added to the list of allowed origins.

{: .box-note }
**Note:** For testing purposes you can use ( * ) to allow all URLs. When first installing yunIO this is set by default.


### Services

Define the ports for service consumption here. Valid port numbers range from 1-65535. Although it is not recommended to use ports below 1000 since they often are already taken and using them with different services can lead to service disruptions.

#### Default Ports

|Service Name|Http|Https|Description|
|---|---|---|---|
|WebServer|8075|8175|This port is used by the web server which takes the requests to invoke a service.|
|WebSockets|8076|8176|This port is used by the yunIO Designer to read and write configurations, services and the like|
|Designer|8077|8177|This port is used to serve the yunIO Designer to a client machine.|
