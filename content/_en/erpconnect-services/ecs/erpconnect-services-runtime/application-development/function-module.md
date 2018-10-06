---
layout: page
title: Function Module
description: Function Module
product: erpconnect-services
parent: application-development
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-function-module
---


With ERPConnect Services you can call and execute SAP function modules. The interface is very similar and compatible with *ERPConnect*, the basis library for Theobald Software.

SAP function modules are individual functions that are maintained in the *SAP Function Builder* (transaction SE37) and that are developed in ABAP. A function module can be called from an external system using the RFC protocol if it is *remote-enabled*. With ERPConnect Services, you can call and execute these types of SAP function modules.

Each function module has *Import* and *Export* parameters, in addition you can exchange data with the funtion module in the form of *Table* parameters.  
  
**Commit Transaction**

To execute a function module for transaction commit (e.g. BAPI_TRANSACTION_COMMIT) you must use a connection scope. 
This will be the case too when you need to call several functions in the same [connection scope](../sap-connection/sap-connection-scope) (context). 