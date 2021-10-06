---
ref: yunio-server-05
layout: page
title: Installing an X.509 Certificate
description: Installing an X.509 Certificate
product: yunio
parent: server
permalink: /:collection/:path
weight: 5
lang: en_GB
---

For Transport encryption and authentication it is required to install an X.509 certificate.

There are two approaches for creating an X.509 certificate:
- Certificate released by an (internal) certification authority (CA) 
- Self-signed certificate

{: .box-note }
**Note:** On test environments you can use a self-signed certificate. For production environment it is recommended to use a certificate released by an (internal) certificate authority (CA). 

### Create X.509 Certificate

Make sure to have a TLS certificate issued by your IT network team considering the following points:
 
- The certificate property “Subject Alternative Name” contains the DNS name of the server on which the Windows service (e.g. Xtract Universal Service or BOARD Connector Service) is running. 
- Place the certificate in the [Windows Certificate Store](https://technet.microsoft.com/en-us/ms788967(v=vs.91)) on the machine, on which the Windows service is running.
- The certificate common name (CN) attribute contains the DNS name of the server. 

{: .box-tip }
**Tip:** To display the Common Name (CN) of the certificate, double-click on the certificate in the Cetrificate Manager and navigate to the *Details* tab.

### Integrate X.509 certificate

1. Import the certificate to the Windows Certificate Store using Microsoft Management Console (mmc).
In the example shown, the server name is "TODD":
![X509-MMC](/img/content/XU-X509-MMC.png){:class="img-responsive"}
2. Reference to the certificate in the Designer under **Settings > Transport Layer Security**.
Click **[Pick Certificate]** and select the X.509 certificate from the list of available certificates.<br>
![TransportLayerSecurity](/img/content/yunio/Settings_transportlayersecurity.png){:class="img-responsive" width="800px" }
![TransportLayerSecurity-List](/img/content/yunio/tls-pickcertificate.png){:class="img-responsive" width="800px" }
![TransportLayerSecurity-Details](/img/content/yunio/tls-certificate.png){:class="img-responsive" width="800px" }
3. Acticate the checkbox **TLS enabled** to enable the Transport Layer Security protocol, see [Transport Layer Security](./server-settings#transport-layer-security).<br>
4. Save the settings. The changes are activated when restarting the YunIO server.


#### Related Links:
- [Enabling Secure Network Communication (SNC) via X.509 certificate](https://kb.theobald-software.com/sap/enable-snc-using-pse-file)
