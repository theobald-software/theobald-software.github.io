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
**Note:** All server setting changes require a yunIO service restart. All Swagger/OpenAPI definitions must be updated manually on server settings change by saving the service once more.

![Server-Settings](/img/content/yunio/Server-settings.png){:class="img-responsive" }


### Transport Layer Security

Transport Layer Security (TLS) protocol encrypts data that is processed with yunIO.
When TLS is enabled, access restrictions require accessing the web server through an HTTPS connection. This requires the installation of an X.509 certificate.
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

### Allowed Origins (CORS)

{: .box-warning }
**Warning! Cross-Origin Request Blocked** When encountering a CORS error, the URL of your origin is not authorized to send requests to yunIO. Add the URL of your origin to the list of allowed origins.

Enter URLs that are allowed to run cross-origin requests on yunIO.<br>
Example: To allow a tool like Swagger Inspector to load and execute a yunIO service, the URL `https://inspector.swagger.io` must be added to the list of allowed origins.

{: .box-note }
**Note:** For testing purposes you can use ( * ) to allow all URLs. When first installing yunIO this is set by default.


### Services

Define the ports for service consumption here. 

#### HTTP port
This port is used for service consumption if TLS is disabled. Default port is **8075**. The maximum port number is 65535.

#### HTTPS port
This port is used for service consumption if TLS is enabled. Default port is **8175**. The maximum port number is 65535.


### Designer

Define the ports of the yunIO Designer. 

#### HTTP port
This port is used to access the yunIO Designer if TLS is disabled. Default port is **8077**. The maximum port number is 65535.

#### HTTPS port
This port is used to access the yunIO Designer if TLS is enabled. Default port is **8177**. The maximum port number is 65535.


### WebSockets

Define the ports for the communication between the yunIO Designer and the yunIO server. 

#### HTTP port
This port is used for the communication between the yunIO Designer and the yunIO server if TLS is disabled. Default port is **8078**. The maximum port number is 65535.

#### HTTPS port
This port is used for the communication between the yunIO Designer and the yunIO server if TLS is enabled. Default port is **8178**.The maximum port number is 65535.
