---
layout: page
title: Settings
description: Settings
product: xtract-is
parent: table
permalink: /:collection/:path
weight: 2
lang: en_GB
---

Use the Settings link in the editor to open the Settings dialog as shown in the picture below.

![XIS_Table_Settings](/img/content/XIS_Table_Settings.jpg){:class="img-responsive" width="600px" }

**Max Rows**<br>
Maximum numbers of rows to be extracted. 0 is unlimited.

**Package Size**<br>
The number of rows that are extracted with one single RFC call. If you want to download more than 20,000 data rows, please set this parameter to a value between 15,000 and 50,000 to avoid timeouts.

**Custom Function**<br>
Name of the custom function that should be used to extract Tables and Views and avoid SAP restrictions.
In General it should be Z_XTRACT_IS_TABLE_COMPRESSION, which is the successor of the custom function Z_XTRACT_IS_TABLE. 
If you use the function module Z_XTRACT_IS_TABLE_COMPRESSION then check the option Data Compression. 
If you use the function module Z_XTRACT_IS_TABLE then check the option Use Custom Function. 

**Use Custom Function (deprecated)**<br>
Check this field if the function module Z_XTRACT_IS_TABLE is set in the field Custom Function and should be used to extract data.

**Data Compression**<br>
Check this field if the field Custom Function is set to Z_XTRACT_IS_TABLE_COMPRESSION.
Uses compression with the custom function module for the extraction of the SAP data.

**Use Field Exits**<br>
defines wether the conversion routines should be used. 
Typical examples are the language key (e.g. D in the database, but DE after conversion) 
or the project number (e.g. T000012738GT in the database, but T/12738/GT after conversion).
After conversion, the value is always displayed, as it would appear in the SAP GUI.
This option is only supported with the function module Z_XTRACT_IS_TABLE_COMPRESSION.

**Automatic String Conversion**<br>
All strings are converted into VarChar strings if the source system is non-Unicode, and all strings are converted into NVarChar if the source system is Unicode.

**Convert Strings to VarChar**<br>
All strings are converted to VarChar regardless if the source system is Unicode or not.

**Convert Strings to NVarChar**<br>
All strings are converted to NVarChar regardless if the source system is Unicode or not.

**Activate Extraction for non-Unicode / Multibyte Extraction**<br>
Activate the extraction for non-Unicode and multibyte extractions. Only necessary if the SAP system is a non unicode system with complex code pages (e.g. traditional Chinese).

**Automatic Date conversion**<br>
Converts the values of an SAP date formated value into a SQL formatted (YYYYMMDD) date value. In case of no convertible date values you have to enter a default date value into the text box. Every invalid value will be converted into this value. NULL is supported as value. 
The SAP value '00000000' will always convert to NULL.
            
**Use Primary Keys for Packaging (obsolete)**<br>
This feature can be activated if the result set is likely to change during the time of extraction. When activated the packaging is done with the primary key of the data instead using ordinal numbers. This prevents rows from being extracted twice in different packages in case additional data is added to the table during extraction.
This feature was to use earlier with the function module Z_XTRACT_IS_TABLE but becomes no more necessary with the new function module Z_XTRACT_IS_TABLE_COMPRESSION. 

**Activate Background Extraction (obsolete)**<br>
This options activates Background Extraction.

**OHS Request ID (obsolete)**<br>
Contains the RequestID for OHS extraction (SSIS variables are also allowed).

**Activate OHS Extension (obsolete)**<br>
Activates an extraction mode that allows a high speed extraction from Open Hub Services tables (SAP BI).