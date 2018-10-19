---
ref: ecs-runtime-appendix-01
layout: page
title: Data Type Conversion
description: Data Type Conversion
product: erpconnect-services
parent: appendix
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-data-type-conversion
---

ERPConnect Services provides the following data type conversion between SAP and .NET.

| *SAP ABAP Type / RFC Type* | *.NET Type*                                  |
|----------------------------|----------------------------------------------|
| C (String / Character)     | System.String                                |
| I (Integer)                | System.Int32                                 |
| F (Float)                  | System.Double                                |
| D (Date)                   | System.String (YYYYMMDD)                     |
| T (Time)                   | System.String (HHMM)                         |
| P (Packed or BCD)          | System.Decimal                               |
| N (Numeric)                | System.String (bitte nur numerische Zeichen) |
| Structured Type            | ERPConnect.RFCStructure                      |
| Table                      | ERPConnect.RFCTable                          |