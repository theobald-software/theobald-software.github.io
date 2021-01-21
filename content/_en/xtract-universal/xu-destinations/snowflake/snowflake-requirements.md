---
ref: xu-snowflake-01
layout: page
title: Requirements
description: Requirements
product: xtract-universal
parent: snowflake
permalink: /:collection/:path
weight: 1
lang: en_GB
progressstate: 5
---

Xtract Universal (starting by version 4.21.6) usess the ODBC driver for the Snowflake destination.
Due to this change, the performance for this destination was considerably improved in comparison to the SnowSql Driver.
Therefore you need to install the latest ODBC driver for Snowflake (x64, windows):
https://sfc-repo.snowflakecomputing.com/odbc/win64/latest/index.html 

Only for version up to 4.21.5:
- [SnowSql Driver version 1.2.9](https://kb.theobald-software.com/release-notes/XtractUniversal-4.16.5.html)
- SnowSQL Client version 1.2.5

SnowSQL Client is a command line client for connecting to Snowflake to execute SQL queries and perform all DDL and DML operations,
including loading data into and unloading data out of database tables.

SnowSQL client can be downloaded from the [official Snowflake](https://sfc-repo.snowflakecomputing.com/snowsql/bootstrap/1.2/windows_x86_64/index.html) website.
 

*************
#### Related Links
- [.NET Framework](../../introduction/requirements#other-applications-and-frameworks)
- [64-bit Architecture](../../introduction/requirements#hardware-requirements)

