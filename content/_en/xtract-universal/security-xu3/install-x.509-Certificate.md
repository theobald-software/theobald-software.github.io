---
ref: xu-security-x509-certificate
layout: page
title: Installing an X.509 Certificate
description: Installing an X.509 Certificate
product: xtract-universal
parent: security-xu3
permalink: /:collection/:path
weight: 4
lang: en_GB
---

Some of the functionalities in our software require you to install an X.509 certificate for trust and data encryption. <br>
This chapter describes the requirements to install an X.509 certificate.

An X.509 certificate can be provided by your network team. Make sure: 
- the certificate property “Subject Alternative Name” contains the DNS name of the server on which the service (e.g. Xtract Universal or Board Connector) is running. Otherwise the certificate won’t appear in our software's lookup dialog.
- the certificate common name (CN) attribute contains the DNS name of the server on which the service (e.g. Xtract Universal or Board Connector) is running.
- to place the certificate in the [Windows Certificate Store](https://technet.microsoft.com/en-us/ms788967(v=vs.91)) on the server machine.

On test environments you can use a self-signed certificate. For your production environment we recommend to use a certificate released by an (internal) certificate authority (CA). 


![XU-X509-MMC](/img/content/XU-X509-MMC.png){:class="img-responsive"}

![XU-X509-Lookup](/img/content/XU-X509-Lookup.png){:class="img-responsive"}




 
