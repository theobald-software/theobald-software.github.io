### About
Xtract Universal offers a Web API that allows querying different meta information from Xtract Universal through a web call.
The following section contains information about the available metadata and the URLs to query that data.

{: .box-note }
**Note:** This metadata-API returns the result as an http-json stream. The API is available as of [version 4.27.1](https://kb.theobald-software.com/version-history/xtract-universal-version-history).

### Product Version

The URL pattern to query the current product version is: <br> 
``` http://[host]:[port]/CurrentVersion ```

Example: <br>
Calling ```https://todd.theobald.local:8165/CurrentVersion``` returns the following:
- Version numbers of [Xtract Universal](https://kb.theobald-software.com/version-history/xtract-universal-version-history) 
- Version numbers of the [Kernel component](https://kb.theobald-software.com/version-history/xtract-kernel-version-history) of the product.

```
ProductMajor,ProductMinor,ProductRevision,ProductBuild,KernelMajor,KernelMinor,KernelRevision,KernelBuild
6,2,1,0,5,6,0,19";
```

### Result columns of an extraction

The URL pattern to query the result columns of an extraction is: <br> 
``` http://[host]:[port]/config/extractions/[extraction_name]/result-columns ```

The result columns have the following schema:

| Column       | Type    | Description                         |
|--------------|---------|-------------------------------------|
| name         | String  | column name                         |
| description  | String  | column description                  |
| type         | String  | column datatype                     |
| length       | Integer | column length                       |
| isPrimaryKey | boolean | column is primary key of extraction |
| isEncrypted  | boolean | encryption for column is active     |
| decimalsCount  | Integer | number of decimal places |
| [referenceField](https://help.sap.com/viewer/6f3c662f6c4b1014b3c1f279a90f707f/7.01.18/en-US/cf21ea5d446011d189700000e8322d00.html) | String  | reference field for currency/quantity |
| [referenceTable](https://help.sap.com/viewer/6f3c662f6c4b1014b3c1f279a90f707f/7.01.18/en-US/cf21ea5d446011d189700000e8322d00.html) | String  | reference table for currency/quantity |

Possible values for *type* are: <br>
*Byte, Short, Int, Long, Double, Decimal, NumericString, StringLengthMax, StringLengthUnknown, ByteArrayLengthExact, ByteArrayLengthMax, ByteArrayLengthUnknown, Date, ConvertedDate, Time*

Example: <br>
Calling the metadata of extraction *BSEG* using the URL ```https://todd.theobald.local:8165/config/extractions/BSEG/result-columns``` returns the following result:<br>

<details>
<summary>Click here to show the example</summary>
{% highlight json %}
{
    "columns": 
    [
        {
            "name": "BELNR",
            "description": "Accounting Document Number",
            "type": "StringLengthMax",
            "length": 10,
            "isPrimaryKey": true,
            "isEncrypted": false
        },
        {
            "name": "GJAHR",
            "description": "Fiscal Year",
            "type": "NumericString",
            "length": 4,
            "isPrimaryKey": true,
            "isEncrypted": false
        },
        {
            "name": "AUGDT",
            "description": "Clearing Date",
            "type": "ConvertedDate",
            "isPrimaryKey": false,
            "isEncrypted": false
        },
        {
            "name": "DMBTR",
            "description": "Amount in Local Currency",
            "type": "Decimal",
            "length": 13,
            "decimalsCount": 2,
            "isPrimaryKey": false,
            "isEncrypted": false,
            "referenceField": "WAERS",
            "referenceTable": "T001"
        }
    ]
}
{% endhighlight %}
</details>


{: .box-note }
**Note:** Data fields that contain dates have the data type *ConvertedDate* if the option *Date Conversion* in the *Destination Settings* is active. If inactive, the data type is *StringLengthMax* with a length of 8 (*Date*).

#### Data Types

Mapping the types of the deprecated API metadata method:

| Old Type (ABAP datatype)             | Type              |  Details  |
|--------------------------------------|---------------------|-----------|
|ByteSequence(X)                     |  ByteArrayLengthExact          | Array of unsigned 8-bit integer. <br>Exact number of elements per array is available on length column. |
|ByteSequenceOfVariableLength(y)      |  ByteArrayLengthMax / ByteArrayLengthUnknown            | Array of unsigned 8-bit integer. <br>Maximum number of elements per array is available on length column.|
|CharacterString(C)                 |  StringLengthMax               |  Sequence of zero or more Unicode characters. <br>Maximum length is available on length column.|
|CharacterStringOfVariableLength(g)  |  StringLengthUnknown           | Sequence of zero or more Unicode characters. |
|Date(D)                             |  Date (ConvertedDate) <br> |  If *Date Conversion* is active in the destination settings, the displayed type is *ConvertedDate*. <br>*Date*: 0-8 Unicode characters that typically represent a date in the format yyyyMMdd. <br> *ConvertedDate*: Destination-specific date format.|
|DecimalFloatingPoint16(a)           |  ByteArrayLengthExact          | Array of unsigned 8-bit integer. <br>Exact number of elements per array is available on length column. |
|DecimalFloatingPoint34(e)           |  ByteArrayLengthExact          | Array of unsigned 8-bit integer. <br>Exact number of elements per array is available on length column. |
|EightByteInteger(8)                 |  Long                          | Signed 64-bit integer. |
|FloatingPoint(F)                    |  Double                        | 8 bytes - IEEE-754 double precision floating point number. |
|FourByteInteger(I)                  |  Int                           | Signed 32-bit integer. |
|NumericCharacterString(N)           |  NumericString                 | Sequence of numeric characters (0-9). <br>Exact length is available on length column. |
|OneByteInteger(b)                   |  Byte                          | Unsigned 8-bit integer. |
|PackedNumber(P)                     |  Decimal                       | Decimal fixed point number. <br>Total number of digits (integer + decimal part) is available on length column. <br>Number of decimal digits is available on decimals count column. |
|Time(T)                             |  Time (ConvertedTime) <br> |  If *Date Conversion* is active in the destination settings, the displayed type is *ConvertedTime*. *Time*: 6 numeric characters (0-9) that represent the time of day in the format "HHmmss". <br> *ConvertedTime*: Destination-specific format for the time of day.|
|TimeStamp(p)                        |  TimeStamp                     | Destination-specific format for timestamps. <br>Uses the Julian Calendar before 04.10.1582 and the Gregorian Calendar afterwards. Date range 05.10.1582 - 14.10.1582 is invalid. |
|TwoByteInteger(s)                   |  Short                         | Signed 16-bit integer. |


### Parameters
Every extraction has a set of *Extraction*, *Source* and *Custom* [runtime parameters](../execute-and-automate-extractions/extraction-parameters). These parameters are shown in the Xtract Universal Designer's "Run Extraction" window.<br>

The URL pattern is: 
```http://[host]:[port]/config/extractions/[extraction_name]/parameters```
This delivers a list of runtime parameters. <br>

Example: <br>
Calling the metadata of extraction *plants* using this URL: ```https://todd.theobald.local:8165/config/extractions/plants/parameters/``` returns the following result:<br>

<details>
<summary>Click here to show the example</summary>
{% highlight json %}
{
    "extraction": 
    [
        {
            "name": "clearBuffer",
            "description": "Clear/keep the result buffer",
            "type": "Flag",
            "default": "False"
        },
        {
            "name": "preview",
            "description": "Enable/disable preview mode",
            "type": "Flag",
            "default": "False"
        },
        {
            "name": "source",
            "description": "Sets the name of the source",
            "type": "Text",
            "default": "erp"
        },
        {
            "name": "destination",
            "description": "Sets the name of the destination",
            "type": "Text",
            "default": "http-csv"
        },
        {
            "name": "rows",
            "description": "Maximum number of rows",
            "type": "Number",
            "default": "0"
        },
        {
            "name": "where",
            "description": "Where Clause",
            "type": "Text",
            "default": "WERKS= @v_werks"
        },
        {
            "name": "packageSize",
            "description": "Package Size",
            "type": "Number",
            "default": "50000"
        }
    ],
    "custom": 
    [
        {
            "name": "v_werks",
            "description": "",
            "type": "Text",
            "default": ""
        }
    ],
    "source": 
    [
        {
            "name": "lang",
            "description": "Logon Language",
            "type": "Text",
            "default": "EN"
        },
        {
            "name": "logonTicket",
            "description": "SAP Logon Ticket",
            "type": "Text",
            "default": ""
        }
    ]
}
{% endhighlight %}
</details>

### List of extractions
A list of all extractions defined in Xtract Universal can be queried by the following URL pattern:<br>
```http://[host]:[port]/config/extractions/```

Example: <br>
Calling ```https://todd.theobald.local:8165/config/extractions/``` returns a list of all extractions defined on the Xtract Universal server running on localhost:8065.

<details>
<summary>Click here to show the example</summary>
{% highlight json %}
{
    "extractions": 
    [
        {
            "name": "0COSTCENTER_0101_HIER",
            "type": "DeltaQ",
            "source": "ec5",
            "destination": "parquet",
            "latestRun": {
                "started": "20210219T132323.542Z",
                "duration": "PT00H00M07.101S",
                "rowsCount": 0,
                "state": "FinishedErrors"
            },
            "lastChange": {
                "machine": "[::ffff:169.254.223.102%10]:58691",
                "user": "THEOBALD\\white",
                "timestamp": "20210219T132508.602Z"
            },
            "created": {
                "machine": "[::ffff:127.0.0.1]:53835",
                "user": "THEOBALD\\walter",
                "timestamp": "20210212T105033.605Z"
            }
        },
        {
            "name": "0FI_GL_4_ODP",
            "type": "ODP",
            "source": "ec5",
            "destination": "sqlserver",
            "latestRun": {
                "started": "20210311T095741.184Z",
                "duration": "PT00H07M03.024S",
                "rowsCount": 1309110,
                "state": "FinishedNoErrors"
            },
            "lastChange": {
                "machine": "[::ffff:169.254.223.102%10]:50070",
                "user": "THEOBALD\\mario",
                "timestamp": "20210311T095739.174Z"
            },
            "created": {
                "machine": "[::ffff:169.254.223.102%10]:50070",
                "user": "THEOBALD\\brothers",
                "timestamp": "20210311T093800.095Z"
            }
        },
               {
            "name": "0MATERIAL_ATTR",
            "type": "DeltaQ",
            "source": "ec5",
            "destination": "http-csv",
            "latestRun": {
                "started": "20210219T145568.237Z",
                "duration": "PT00H00M24.433S",
                "rowsCount": 18011,
                "state": "FinishedNoErrors"
            },
            "lastChange": {
                "machine": "[::ffff:169.254.223.102%10]:58691",
                "user": "THEOBALD\\giana",
                "timestamp": "20210219T145555.517Z"
            },
            "created": {
                "machine": "[::ffff:169.254.223.102%9]:60483",
				"user": "THEOBALD\\sisters",
                "timestamp": "20200708T091200.544Z"
            }
        }
    ]
}
{% endhighlight %}
</details>


### List of extractions with a specific destination type

A list of extractions writing data to a specific type of destination can be retreived by the following URL pattern:

```http://[host]:[port]/config/extractions/?destinationType=[typename]```

Possible entries for [typename] are:

*Unknown, Alteryx, AlteryxConnect, AzureDWH, AzureBlob, CSV, DB2, EXASOL, FileCSV, FileJSON, GoodData, GoogleCloudStorage, HANA, HTTPJSON, MicroStrategy, MySQL, ODataAtom,Oracle, Parquet, PostgreSQL, PowerBI, PowerBIConnector, Qlik, Redshift, S3Destination, Salesforce, SharePoint, Snowflake, SQLServer, SqlServerReportingServices, Tableau, Teradata, Vertica*

Example: <br>
Calling ```https://todd.theobald.local:8165/config/extractions/?destinationType=FileCSV``` returns a list of all extractions that write data to a csv flatfile destination. 

<details>
<summary>Click here to show the example</summary>
{% highlight json %}
{
    "extractions": 
    [
        {
            "name": "2LIS_02_ITM",
            "type": "ODP",
            "source": "MySAPerp",
            "destination": "flatfile",
            "latestRun": {
                "duration": "PT00H00M27.085S",
                "rowsCount": 109589,
                "state": "FinishedNoErrors"
            },
            "lastChange": {
                "machine": "[::ffff:169.254.223.102%10]:50070",
                "user": "THEOBALD\\walter",
                "timestamp": "20210311T095624.786Z"
            },
            "created": {
                "machine": "[::ffff:127.0.0.1]:57734",
                "timestamp": "20210202T151301.038Z"
            }
        },
        {
            "name": "DEMO_Table",
            "type": "Table",
            "source": "MySAPBW",
            "destination": "flatfile",
            "latestRun": {
                "started": "20210317T10552.653Z",
                "duration": "PT00H00M01.049S",
                "rowsCount": 1000,
                "state": "FinishedNoErrors"
            },
            "lastChange": {
                "machine": "[::ffff:127.0.0.1]:57862",
                "timestamp": "20210317T105222.993Z"
            },
            "created": {
                "machine": "[::ffff:127.0.0.1]:57862",
                "timestamp": "20210317T105032.768Z"
            }
        }
    ]
}
{% endhighlight %}
</details>

