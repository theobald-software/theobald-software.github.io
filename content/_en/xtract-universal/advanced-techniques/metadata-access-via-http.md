---
layout: page
title: Metadata access via HTTP
description: Metadata access via HTTP
product: xtract-universal
parent: advanced-techniques
permalink: /:collection/:path
weight: 8
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=metadata-access-via-http
---

You are also able to call the metadata information of an extraction using an HTTP URL. 

**Columns of an extraction**

The URL pattern is: 
[http://[host]:[port]/metadata/?name=[extractionName]](http://[host]:[port]/metadata/?name=[extractionName])

[extractionName] has to be replaced with the extraction name.

The metadata table has the followig schema:

| Column   | Type                          | Description              |
|----------|-------------------------------|--------------------------|
| POSITION | Integer                       | column position          |
| NAME     | String                        | column name              |
| DESC     | String                        | column description       |
| TYPE     | single-digit ABAP Datentyp ID | ABAP Datatype            |
| LENGTH   | Integer                       | column length            |
| DECIMALS | Integer                       | number of decimal places |

The "single-digit  ABAP datatype ID" ist defined here:<br>
[http://help.sap.com/abapdocu_702/en/abapdescribe_field.htm](http://help.sap.com/abapdocu_702/en/abapdescribe_field.htm) 
           
The embedded ABAP datatypes are definded here:<br>
[http://help.sap.com/abapdocu_702/en/ABENBUILT_IN_TYPES_COMPLETE.htm](http://help.sap.com/abapdocu_702/en/ABENBUILT_IN_TYPES_COMPLETE.htm)

Example: If you call the metadata of the extraction plants using the URL 

http://localhost:8065/metadata/?name=plants

the following result will be displayed:<br>
POSITION,NAME,DESC,TYPE,LENGTH,DECIMALS<br>
0,WERKS,Plant,C,4,0<br>
1,NAME1,Name,C,30,0<br>
2,KUNNR,Customer number of plant,C,10,0<br>
3,NAME2,Name 2,C,30,0<br>

Parameters (Variables)

The URL [http://[host]:[port]/parameters/?name=[extractionName]](http://[host]:[port]/parameters/?name=[extractionName])<br>
delivers the list of the available parameters including the custom ones, that will be shown in the Run dialog. 

In the following examples the URL delivers the following parameters: 
http://localhost:8065/parameters/?name=plants


	Name,Description,Category,Type,DefaultValue
	preview,Enable/disable preview mode,Extraction,Flag,False
	clearBuffer,Clear/keep the result buffer,Extraction,Flag,False
	source,Sets the name of the source,Extraction,Text,saperp
	destination,Sets the name of the destination,Extraction,Text,http-csv
	wait,Wait until the extraction is finished,Extraction,Flag,True
	rows,Maximum number of rows,Extraction,Number,0
	where,Where Clause,Extraction,Text,WERKS >= '1000' AND ORT01 <> 'Freiburg'
	packageSize,Package Size,Extraction,Number,5000
	decimalSeparator,Symbol between integer and fractional part,Extraction,Text,
	columnSeparator,Symbol which indicates the start of a new column,Extraction,Text,
	lang,Logon Language,Connection,Text,EN
	logonTicket,SAP Logon Ticket,Connection,Text,

**Extraction List** 

You can get an extraction list if you call the basis URL without parameter:<br>
[http://localhost:8065/]()<br> 
Product version

You can find out the current verion numbers by using the following HTTP requests:

[http://localhost:8065/CurrentVersion](http://localhost:8065/CurrentVersion)<br>
[http://localhost:8065/ProductVersionHistory](http://localhost:8065/ProductVersionHistory)<br>
[http://localhost:8065/KernelVersionHistory](http://localhost:8065/KernelVersionHistory)
