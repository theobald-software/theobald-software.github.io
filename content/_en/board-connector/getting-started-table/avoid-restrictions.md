---
layout: page
title: Avoid Restrictions
description: Avoid Restrictions
product: board-connector
parent: getting-started-table
permalink: /:collection/:path
weight: 7
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=avoid-restrictions
---

There are several restrictions when using the SAP standard:

- The overall length of all columns to be extracted must not exceed 512 bytes.
- It is not possible to extract data from tables that contain one or more column of the data type "floating point".

If these restrictions hinder your work, it is possible to install the Z function in your SAP system. You'll find a detail step-by-step guide in the SAP Customizing section in the chapter [Table Restrictions](../sap-customizing/table-restrictions).

To install the standard function module Z_XTRACT_IS_TABLE, please refer to [Table Restrictions](../sap-customizing/table-restrictions).<br> 
After installation check setting "Use Custom Function" to enable the Z-function module. 

For the high performance mass data extraction from SAP tables we have developed the new custom function *Z_XTRACT_IS_TABLE_COMPRESSION*.

To install the new function module Z_XTRACT_IS_TABLE_COMPRESSION, please refer to [Custom function module for table compression](../sap-customizing/custom-function-module-for-table-compression). 

We recommend to use this function module, which is the successor of the custom function *Z_XTRACT_IS_TABLE*.