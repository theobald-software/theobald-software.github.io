### About
Xtract Universal offers a Web API which allows querying different meta information from Xtract Universal through a web call.
The following section contains information about the available metadata and the URLs to retrieve that data.

{: .box-note }
**Note:** The sections on *Metadata of an extraction*, *Parameters* and *Extraction List* are marked as deprecated as of [version 4.27.1](https://kb.theobald-software.com/version-history/xtract-universal-version-history). Access the metadata via the [http-json-API](./metadata-access-via-http-json).

### Metadata of an extraction

The URL pattern is: 
```
http://[host]:[port]/metadata/?name=[extractionName]
```

[extractionName] has to be replaced with the actual name of the extraction.

The metadata table has the followig schema:

| Column   | Type                          | Description              |
|----------|-------------------------------|--------------------------|
| POSITION | Integer                       | column position          |
| NAME     | String                        | column name              |
| DESC     | String                        | column description       |
| TYPE     | single-digit ABAP datatype ID | ABAP datatype            |
| LENGTH   | Integer                       | column length            |
| DECIMALS | Integer                       | number of decimal places |
| KEY      | boolean                       | column is Primary Key of extraction |



The "single-digit ABAP datatype ID" is defined in the [SAP help](http://mysaplib.com/00000531/348e72f16df74873e10000009b38f9b8/content.htm) pages. <br>
 
**Example:** <br>
Calling the metadata of extraction *BSEG* using this URL: ```http://localhost:8065/metadata/?name=BSEG``` returns the following result:<br>

*POSITION,NAME,DESC,TYPE,LENGTH,DECIMALS,KEY*<br>
0,MANDT,Client,C,3,0,true<br>
1,BUKRS,Company Code,C,4,0,true<br>
2,BELNR,Accounting Document Number,C,10,0,true<br>
3,GJAHR,Fiscal Year,N,4,0,true<br>
4,BUZEI,Number of Line Item Within Accounting Document,N,3,0,true<br>
5,BUZID,Identification of the Line Item,C,1,0,false<br>
6,AUGDT,Clearing Date,D,8,0,false<br>
7,DMBTR,Amount in Local Currency,P,15,2,false<br>
8,KZBTR,Original Reduction Amount in Local Currency,P,15,2,false<br>

{: .box-note }
**Note:** Date fields like *AUGDT* have data type *D* (column TYPE) if Date Conversion in the Destination Settings is active. If inactive, the data type is *C*.


### Parameters
Every extraction has a set of *Extraction*, *Source* and *Custom* runtime parameters. These parameters are shown in the Xtract Universal Designer's "Run Extraction" window.<br>

The URL pattern is: 
```
http://[host]:[port]/parameters/?name=[extractionName]
```
This delivers a list of runtime parameters. <br>

**Example:** <br>
Calling the metadata of extraction *plants* using this URL: ```http://localhost:8065/parameters/?name=plants``` returns the following result:<br>


*Name,Description,Category,Type,DefaultValue*<br>
preview,Enable/disable preview mode,Extraction,Flag,False<br>
clearBuffer,Clear/keep the result buffer,Extraction,Flag,False<br>
source,Sets the name of the source,Extraction,Text,saperp<br>
destination,Sets the name of the destination,Extraction,Text,http-csv<br>
wait,Wait until the extraction is finished,Extraction,Flag,True<br>
rows,Maximum number of rows,Extraction,Number,0<br>
where,Where Clause,Extraction,Text,WERKS >= '1000' AND ORT01 <> 'Freiburg'<br>
packageSize,Package Size,Extraction,Number,5000<br>
decimalSeparator,Symbol between integer and fractional part,Extraction,Text,<br>
columnSeparator,Symbol which indicates the start of a new column,Extraction,Text,<br>
lang,Logon Language,Connection,Text,EN<br>
logonTicket,SAP Logon Ticket,Connection,Text,<br>

### Extraction List 

A list of all extractions defined in Xtract Universal can be retrieved by the following URL pattern:

```
http://[host]:[port]
```

**Example:** <br>
Calling ```http://localhost:8065/``` returns a list of extractions with the following structure: <br>
*Name,Type,Source,Destination,LastRun,RowCount,LastChange,Created*

### Product version

The installed version of Xtract Universal can be retrieved by the following URL pattern: 
```
http://[host]:[port]/CurrentVersion
```


Xtract Universal's version history can be retreived by the following URL pattern:  
```
http://[host]:[port]/ProductVersionHistory
```
```
http://[host]:[port]/KernelVersionHistory
```

A list of all extractions on the server can be retrieved by the using the base URL without any parameters:
```
http://localhost:8065/
```

### Log Access via Web Service
The chapter [Log Access via Web Service](./../logging/logging-access-via-http) describes further use cases of Xtract Universal's metadata Web API.
