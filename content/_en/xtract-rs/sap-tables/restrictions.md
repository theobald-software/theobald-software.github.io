---
ref: xr-sap-tables-05
layout: page
title: Restrictions
description: Restrictions
product: xtract-rs
parent: sap-tables
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-RS-EN/default.aspx?pageid=restrictions
---

There are several restrictions when using the SAP standard: 

- The overall length of all columns to be extracted must not exceed 512 bytes.
- It is not possible to extract data from tables that contain one or more columns of the data type "floating point".

If these restrictions hinder your work, please use this setp-by-step guide to install the Z-function in your SAP system.

To install the standard function module Z_XTRACT_IS_TABLE, please refer to [Table Restrictions](../sap-customizing/table-restrictions). 
After installation check setting "Use Custom Function" to enable the Z-function module. 

Alternatively, you can also use the following function modules delivered by SAP, if available on your SAP system:
* /SAPDS/RFC_READ_TABLE, /SAPDS/RFC_READ_TABLE2, /BODS/RFC_READ_TABLE, /BODS/RFC_READ_TABLE2

