---
ref: xu-advanced-techniques-07
layout: page
title: SSO with SAP Logon Ticket
description: SSO with SAP Logon Ticket
product: xtract-universal
parent: SAP-Single-Sign-On
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: 
---


A  Single-Sign-On (SSO) connection to SAP can be set up using SAP Logon Ticket. This scenario would look like this:

### Architecture
You have set up an AS Java instance which has been configured for SPNEGO/Kerberos authentication. Within this AS Java instance exist a mapping between Windows AD users and SAP users (== ticket issuer).
You have set up trust between your AS ABAP instance (the SAP system Xtract Universal is extracting data from) and above AS Java instance in a sense that AS ABAP trusts SAP logon tickets issued by AS Java.

### Process
1. When running an extraction the user authenticates against the XU server via SPNEGO/Kerberos.
2. The XU server impersonates the caller.
3. The XU server authenticates authenticates itself using the callers credentials against the AS Java via SPNEGO/Kerberos.
4. AS Java looks up the mapping between Windows user and the corresponding SAP user and issues an SAP logon ticket for this SAP user. The logon ticket will be deliveredas part of the MYSAPSSO2 cookie.
5. The XU server fetches the SAP logon ticket from the cookie, uses the ticket for logging on to AS ABAP and executes the extraction.

### Further information (SAP Help)
* [Kerberos and SAP NetWeaver AS for Java](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/4c/8a4d292e2849a8b7cbd229be5c94a5/frameset.htm)
* [Using Logon Tickets with AS ABAP](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/d0/dc33c460a243929b7ec120f55af101/frameset.htm)
* [Configuring the AS Java to Issue Logon Tickets](https://help.sap.com/doc/saphelp_nw75/7.5.5/EN-US/4a/412251343f2ab1e10000000a42189c/frameset.htm)
