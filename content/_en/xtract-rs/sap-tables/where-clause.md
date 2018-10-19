---
ref: xr-sap-tables-03
layout: page
title: WHERE Clause
description: WHERE Clause
product: xtract-rs
parent: sap-tables
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-RS-EN/default.aspx?pageid=where-clause
---


The WHERE clause must comply with the SAP OpenSQL syntax.

- Before and after the equal sign, you must enter a space, eg YEAR = '1999 '. For YEAR= '1999 ', YEAR ='1999' or YEAR='1999' you will get the error message '*A dynamically specified column name is unknown*'.
- Floating point numbers must always be set in single quotation mark, e.g. KMENG > '10.3'. For KMENG > 10.3 you get the error message '*The WHERE clause has an unexpected format*'.
- The Where clause must not contain any line break (return key).

You will find more information about the OpenSQL syntax on the SAP help site:<br>
[http://help.sap.com/saphelp_470/helpdata/de/fc/eb3a1f358411d1829f0000e829fbfe/frameset.htm](http://help.sap.com/saphelp_470/helpdata/de/fc/eb3a1f358411d1829f0000e829fbfe/frameset.htm)

Values must have the internal SAP representation:

- The date 01.01.1999 has the the internal representation 19990101 (YYYYMMDD),
- The year period 001.1999 has the internal representation 1999001 (YYYYPPP),
- Numbers must have the leading zeros, e.g. customer number 1000 has the internal representation 0000001000.
