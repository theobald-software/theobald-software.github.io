---
ref: xu-advanced-techniques-06
layout: page
title: SAP Single Sign On
description: SAP Single Sign On
product: xtract-universal
parent: advanced-techniques
childidentifier: sap-single-sign-on
permalink: /:collection/:path
weight: 6
lang: en_GB
progressstate: 5
---


### Use case

BI client tools such as Power BI, Power Pivot, Alteryx, etc. can start extractions in Xtract products, e.g., Xtract Universal or Board Connector). 
Xtract products load the extracted data directly into the tools.
In this use case, it is often required that the extraction is executed with the SAP credentials of the (Windows AD) user, whose BI client triggered the extraction. 
This means that the SAP authorizations of the executing user apply, which is especially important when extracting BW/BEx queries.

The Windows credentials of the user must be forwarded to SAP using the Xtract product. 
On the way to SAP or on the SAP side, the Windows user and its SAP credentials are mapped.

Single Sign-On (SSO) with an Xtract product can be realized via four different procedures:

- [Secure Network Communication (SNC) with Client Certificates](https://kb.theobald-software.com/xtract-universal/sso-with-client-certificates)
- [Secure Network Communication (SNC) with PSE and External IDhttps://kb.theobald-software.com/xtract-universal/sso-with-external-id)
- [Secure Network Communication (SNC) with SAP's Kerberos Wrapper Library](https://kb.theobald-software.com/xtract-universal/sso-with-kerberos-snc) (deprecated)
- [SAP Logon Ticket](https://kb.theobald-software.com/xtract-universal/sso-with-logon-ticket)

### What is SNC?

Secure Network Connection (SNC) enables authentication and transport encryption between SAP systems and between SAP systems and third-party tools like Xtract Universal and Board Connector.
For more information on SNC, see [SAP Help: SNC](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true).

