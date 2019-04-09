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

This chapter describes the requirements to install an X.509 certificate in Xtract Universal. 

You need an X.509 certificate, that can be provided by your network team. Make sure 
- the certificate property “Subject Alternative Name” contains the DNS name of the server on which the Xtract Universal service is running on. Otherwise the certificate won’t appear in the lookup dialog of Xtract Universal.
- the certificate common name (CN) attribute contains the DNS name of the server on which the Xtract Universal service is running on .
- to place the certificate in the Windows Certificate Store on the XU server machine.

On test environments you can use self-generated certificates. For Production we recommend to to use certificates released by a certificate authority. 



 
