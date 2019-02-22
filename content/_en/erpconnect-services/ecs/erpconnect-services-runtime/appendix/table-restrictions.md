---
ref: ecs-runtime-appendix-02
layout: page
title: Table restrictions
description: Table restrictions
product: erpconnect-services
parent: appendix
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-data-type-conversion
---

ERPConnect Services and ERPConnect used the internal class ReadTable to read SAP tables. There are a few restrictions to be aware of when using the ReadTable class:

   - The total width of the columns being read cannot exceed 512 Bytes
   - Depending on the SAP version there may be other restrictions. It is not possible to extract data from tables that contain one or more columns of the data type f (FLTP, floating point) or x (RAW, LRAW).
   - Special tables such as TCURR will return truncated values

In the cases above, a read table access will generate an exception. To avoid this problem, you need to install a custom function module (Z-module) in your SAP system.

In order for ERPConnect Services to utilize the installed custom function module (e.g. Z_XTRACT_IS_TABLE) instead of the standard SAP function module, you will use the CustomFunction property of the ExecuteTableQuerySettings class.
