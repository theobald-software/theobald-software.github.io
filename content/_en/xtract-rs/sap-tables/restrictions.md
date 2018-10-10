---
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

To install the standard function module Z_XTRACT_IS_TABLE, please refer to [Table Restrictions]() . 
After installation check setting "Use Custom Function" to enable the Z-function module. 

For the high performance mass data extraction from SAP tables we have developed the new custom function *Z_XTRACT_IS_TABLE_COMPRESSION*.

To install the new function module Z_XTRACT_IS_TABLE_COMPRESSION, please refer to [Custom function module for table compression](../sap-customizing/custom-function-module-for-table-compression). 

We recommend to use this function module, which is the successor of the custom function *Z_XTRACT_IS_TABLE*.