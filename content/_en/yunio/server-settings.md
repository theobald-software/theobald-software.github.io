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

### Endpoint

The **Service URL Kind** option defines the URL that is used to connect to yunIO services.

- *Default*: <br>
If TLS is active, the *Subject Alternative Name* provided by the X.509 certificate is used as the hostname, see [Transport Layer Security](#transport-layer-security). <br>
- *Azure Relay Hybrid Connection*:<br>
When an Azure Relay Hybrid Connection is set up, yunIO services use an Azure Relay address to become accessible to applications running in the Azure cloud. For more information on Azure Relay, refer to the knowledge base article [Establish an Azure Relay Hybrid Connection to yunIO](https://kb.theobald-software.com/yunio/establish-an-azure-relay-hybrid-connection).
- *Custom*: <br>
Allows you to enter a custom hostname. Enter the hostname in the field **Custom Hostname** and click **[Save]** to update the OpenAPI definitions of all existing services.

### Transport Layer Security

Transport Layer Security (TLS) protocol allows the user to communicate with the respective service in a secure way by encrypting the communication with that service (HTTPS).
This requires the installation of an X.509 certificate. 
For more information on TLS, see [Microsoft: Transport Layer Security Protocol](https://docs.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol).

#### Pick Certificate
Click **[Pick Certificate]** and select an X.509 certificate from the list of available certificates.<br>
If the certificate is not listed in the menu or in the Windows certificate store, install the X.509 certificate.
The certificate must have *Subject Alternative Name* set. When activating TLS, the *Subject Alternative Name* is used as the new hostname. 
A custom hostname can be entered in the [Endpoint](#endpoint) setting.

For information on how to renew a certificate, refer to our knowledge base article [Certificate Renewal for TLS](https://kb.theobald-software.com/yunio/certificate-renewal).

{: .box-note }
**Note:** Depending on whether yunIO is hosted on a local server or a cloud environment, the procedure for certificate creation differs.
Refer to the documentation available on the internet or contact your network administrators.


#### TLS enabled
Once a certificate is selected, the option **TLS enabled** is available.<br>
Enable or disable the usage of transport encryption for the web server.

{: .box-note }
**Note:** To access the Designer via TLS, restart the yunIO server and connect to the Designer using the following URL pattern: `https://[host]:[port]`. 
If you cannot access the designer. because of problems with the TLS certificate, delete the `tls.json` file in the installation directory of yunIO e.g., `C:\Program Files\Theobald Software\yunIO\config\servers\tls.json`.
Restart the yunIO server.


### Services, Designer and WebSockets

Define the ports for service consumption, Designer access and WebSocket configurations. Valid port numbers range from 1-65535. 
It is not recommended to use ports below 1000, because they are often already taken and using them with different services can lead to service disruptions.

#### Default Ports

|Service Name|HTTP|HTTPS|Description|
|---|---|---|---|
|Services|8075|8175|This port is used by the web server, which handles the requests to invoke a service.|
|Designer|8077|8177|This port is used to open the yunIO Designer on a client machine.|
|WebSockets|8076|8176|This port is used by the yunIO Designer to read and write configurations, services, etc.|
