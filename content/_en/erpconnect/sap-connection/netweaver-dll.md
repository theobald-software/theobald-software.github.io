---
ref: ec-sap-connection-05
layout: page
title: Netweaver DLL
description: Netweaver DLL
product: erpconnect
parent: sap-connection
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=netweaver-dll
---

ERPConnect supports the Netweaver RFC (SDK) starting by version 4.6.0.  
To use it, set the Property Protocol of the R3Connection object to ClientProtocol.NWRFC before you open the connection. 

**R3Connection.Protocol = ClientProtocol.NWRFC;**

For 64-Bit Environments the following DLLs are required:
- ERPConnect35.dll or ERPConnect45.dll
- sapnwrfc.dll
- icuucXX.dll
- icudtXX.dll
- icuinXX.dll 

(XX can vary depending on the version of the NW Rfc Libraries)

The ERPConnect*.dll are delivered with ERPConnect. The other DLLs must be downloaded from the SAP web site.
