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
**Note:** All changes in the **Settings** menu require a restart of the yunIO service. 

![Server-Settings](/img/content/yunio/Server-settings.png){:class="img-responsive" }

### Services Endpoint

The **Service URL Kind** option defines the URL that is used to connect to yunIO services.

- *Default*: <br>
If TLS is active, the first *Subject Alternative Name* provided by the X.509 certificate is used as the hostname, see [Transport Layer Security](#transport-layer-security). 
- *Custom*: <br>
Allows you to enter a custom hostname. Enter the hostname in the field **Custom Hostname** and click **[Save]** to update the OpenAPI definitions of all existing services.
- *Azure Relay Hybrid Connection*:<br>
When an Azure Relay Hybrid Connection is set up, yunIO services use an Azure Relay address to become accessible to applications running in the Azure cloud. 
For more information on Azure Relay, refer to the knowledge base article [Establish an Azure Relay Hybrid Connection to yunIO](https://kb.theobald-software.com/yunio/establish-an-azure-relay-hybrid-connection).

{: .box-note }
**Note:** Wildcard certificates are supported. Enter the hostname of the certificate as a custom endpoint.

{: .box-tip }
**Tip:** To set up multiple endpoints, use multiple yunIO servers, one for each endpoint.

The **OpenAPI Target Kind** option defines properties that can be added to the Swagger/OpenAPI json file of yunIO services.

- *Default*: <br>
If this option is active, the Swagger/OpenAPI json file contains no additional properties.
- *Nintex Gateway*: <br>
Select this option when integrating yunIO services with the [Nintex Gateway](https://help.nintex.com/en-US/nwc/Content/Gateway/InstallAndConfigure.htm). 
Nintex properties are added to into Swagger/OpenAPI json file and there is no need to manually change the swagger definition.
For more information, refer to the knowledge base article [Integrating a yunIO Service via Nintex Gateway](https://kb.theobald-software.com/yunio/integrating-yunio-via-nintex-gateway).

### Transport Layer Security

Transport Layer Security (TLS) protocol allows the user to communicate with the respective service in a secure way by encrypting the communication with that service (HTTPS).
This requires the installation of an X.509 certificate, see [Knowledge Base: Installing an X.509 Certificate](https://kb.theobald-software.com/yunio/x509-certificate). <br>
For more information on TLS, see [Microsoft: Transport Layer Security Protocol](https://docs.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol).

{: .box-note }
**Note:** Depending on whether yunIO is hosted on a local server or a cloud environment, the procedure for certificate creation differs.
Refer to the documentation available on the internet or contact your network administrators.

#### Certificate Access
1. Import the certificate to the Windows Certificate Store using Microsoft Management Console (mmc).
2. Click **[Pick Certificate]** and select an X.509 certificate from the list of available certificates.<br>

{: .box-note }
**Note:**
If the certificate is not listed in the menu or in the Windows certificate store, install the X.509 certificate.
The certificate must have *Subject Alternative Name* set. When activating TLS, the *Subject Alternative Name* is used as the new hostname. 
A custom hostname can be entered in the [Services Endpoint](#endpoint) setting.

3. After selecting the desired X.509 certificate, manage its private keys to add a permission entry for the Windows user. 
4. Enter "NT Service\yunIO Service" within the Object picker UI, check the granted permission and apply the changes. 
![Access](/img/content/yunio/x.509-certificate-permission){:class="img-responsive" }


For information on how to renew a certificate, refer to our knowledge base article [Certificate Renewal for TLS](https://kb.theobald-software.com/yunio/certificate-renewal).

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
