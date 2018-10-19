---
ref: ecs-runtime-appendix-01
layout: page
title: Konvertierung der Datentypen
description: Konvertierung der Datentypen
product: erpconnect-services
parent: ecs-anhang
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=ecs-konvertierung-der-datentypen
---

Mit ERPConnect Services werde die nachstehend aufgeführten Datentypkonvertierungen von SAP zu .NET bereitgestellt.

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