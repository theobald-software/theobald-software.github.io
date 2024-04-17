
### Get Version

```
[protocol]://[host]:[port]/version
``` 

Returns the software version of the {% if page.product == "xtract-universal" %}Xtract Universal{% else %}Board Connector{% endif %} server installation in JSON format. 

#### Example 

`http://sherri.theobald.local:8065/version`

<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "version": "6.2.13.4"
}
{% endhighlight %}
</details>

<!---
/version-history
Returns the version history entries as JSON.

Response:

{
   "versions":
   [
      {
        "version": "1.2.3.4",
        "releaseDate": "",
        "priority": "L",
        "subcomponent": "General",
        "description": "Fixed X which caused Y.",
      }
   ]
}
-->

### Get Destination Details

```
[protocol]://[host]:[port]/destinations
```  

Returns a list of all defined destinations. 
The result contains the following elements:

|  Item   | Description    |
|--------------|---------|
| name | name of the target connection |
| type | connection type |
| host | host name, if applicable |
| port | port name, if applicable |
| database | database name, if applicable | 
| user | user name in the connection, if applicable |  
| schema | schema name, if applicable |
| directory | directory name, if applicable |


{: .box-tip } 
**Tip:**  For a list of extractions with a specific destination, see [Get Extraction Details](#get-extraction-details).

#### Example 

`http://sherri.theobald.local:8065/destinations`

<details>
<summary>Click here to show the response body</summary>
{% highlight csv %}
Name,Type,Host,Port,Database,User,Schema,Directory
csv,FileCSV,,,,,,"C:\Users\alice\Documents\csv\"
http-csv,CSV,,,,,,
http-json,HTTPJSON,,,,,,
json,FileJSON,,,,,,"C:\Users\alice\Documents\json"
sql-server,SQLServer,dbtest-ws2019.theobald.local,1433,alice,THEOBALD\alice,,
tableau2022,Tableau,,,,,,"C:\Users\alice\Documents\csv"
{% endhighlight %}
</details>

### Get Extraction Details

```
[protocol]://[host]:[port]/config/extractions
```  

Returns a list of all defined extractions in JSON format. The result contains the following elements:

|  Item   | Description    |
|--------------|---------|
| name  | name of the extraction |
| type  |extraction type |
| sapObject|  name of the extracted SAP object |
| source|  name of the source connection |
| destination| name of the target connection |
| latestRun| contains *rowCount*, *duration*, *state* and *startedAt* of the latest extraction run |
| rowCount| number of the last extracted data records |
| duration | duration of the last execution |
| state| status of the extraction (*Running*, *FinishedNoErrors*, *FinishedErrors*) |
| startedAt| timestamp of the last execution |
| created| contains *machine*, *timestamp* and *user* of when the extraction was created|
| machine| machine on which the extraction was created |
| timestamp| timestamp of the creation |
| user| user that created the extraction |
| lastChange| contains *machine*, *timestamp* and *user* of when the extraction was last changed|
| machine| machine on which the extraction was last changed|
| timestamp| timestamp of the last change |
| user| user that last changed the extraction |


#### Parameters & Options

`[protocol]://[host]:[port]/config/extractions`

| Parameter    | Description  | 
|-----------|--------------|
| ```?destinationType=[destination]```  |   Returns a list of extractions that write into a specific destination. |
| ```/[extraction_name]/parameters```  |   Returns a list of runtime parameters used in the specified extraction. Every extraction has a set of *Extraction*, *Source* and *Custom* {% if page.product == "xtract-universal" %}[extraction parameters](./execute-and-automate-extractions/extraction-parameters).{% else %}[extraction parameters](./getting-started/run-an-extraction).{% endif %} The parameters are available in the "Run Extraction" window.<br>. |
| ```/[extraction_name]/result-columns```  |   Returns the result columns of an extraction. |


The result of `[protocol]://[host]:[port]/config/extractions/[extraction_name]/result-columns` contains the following elements:

| Item         | Type    | Description                         |
|--------------|---------|-------------------------------------|
| name         | String  | column name                         |
| description  | String  | column description                  |
| type         | String  | column datatype                     |
| length       | Integer | column length                       |
| isPrimaryKey | boolean | column is primary key of extraction |
| isEncrypted  | boolean | encryption for column is active     |
| decimalsCount| Integer | number of decimal places |
| [referenceField](https://help.sap.com/viewer/6f3c662f6c4b1014b3c1f279a90f707f/7.01.18/en-US/cf21ea5d446011d189700000e8322d00.html) | String  | reference field for currency/quantity |
| [referenceTable](https://help.sap.com/viewer/6f3c662f6c4b1014b3c1f279a90f707f/7.01.18/en-US/cf21ea5d446011d189700000e8322d00.html) | String  | reference table for currency/quantity |

{: .box-note }
**Note:** Data fields that contain dates have the data type *ConvertedDate* if the option *Date Conversion* in the *Destination Settings* is active. 
If inactive, the data type is *StringLengthMax* with a length of 8 (*Date*).

#### Examples

`http://sherri.theobald.local:8065/config/extractions/`

<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "extractions": 
    [
        {
            "name": [
                "0MAT"
            ],
            "type": "DeltaQ",
            "technicalName": "0MATERIAL_ATTR",
            "source": "saperp",
            "destination": "GoogleCloudStorage",
            "latestRun": {
                "rowCount": 20275,
                "duration": "PT00H00M13.383S",
                "state": "FinishedNoErrors",
                "startedAt": "2023-08-17_11:24:07.770"
            },
            "created": {
                "machine": "TODD",
                "timestamp": "20221005T080618.544Z",
                "user": "THEOBALD\\steffan"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "20240129T131530.701Z",
                "user": "THEOBALD\\alice"
            }
        },
        {
            "name": [
                "0MATERIAL"
            ],
            "type": "DeltaQ",
            "technicalName": "0COSTCENTER_0101_HIER",
            "source": "saperp",
            "destination": "csv",
            "latestRun": {
                "rowCount": 200,
                "duration": "PT00H00M00.114S",
                "state": "FinishedNoErrors",
                "startedAt": "2023-08-17_11:31:44.029"
            },
            "created": {
                "machine": "SHERRI",
                "timestamp": "20230815T114651.045Z",
                "user": "THEOBALD\\alice"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "20230817T113328.786Z",
                "user": "THEOBALD\\alice"
            }
        }
		{% endhighlight %}
</details>

`http://sherri.theobald.local:8065/config/extractions/?destinationType=sqlserver`

<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "extractions": 
    [
        {
            "name": [
                "bw2--UCONRFC_ATTR_F"
            ],
            "type": "ODP",
            "technicalName": "UCONRFC_ATTR$F",
            "source": "bw2",
            "destination": "sql-server",
            "created": {
                "machine": "SHERRI",
                "timestamp": "20230622T062454.495Z",
                "user": "alice"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "20230703T070609.890Z",
                "user": "THEOBALD\\alice"
            }
        },
        {
            "name": [
                "ec5--KNA1_DELTA"
            ],
            "type": "TableCDC",
            "technicalName": "KNA1_DELTA",
            "source": "ec5",
            "destination": "sql-server",
            "created": {
                "machine": "SHERRI",
                "timestamp": "20230622T051526.003Z",
                "user": "alice"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "20230703T070609.955Z",
                "user": "THEOBALD\\alice"
            }
        },
        {
            "name": [
                "HIERARCHY"
            ],
            "type": "Hierarchy",
            "technicalName": "TEST_DEP_01",
            "source": "bw2",
            "destination": "sql-server",
            "latestRun": {
                "rowCount": 13,
                "duration": "PT00H00M02.710S",
                "state": "FinishedNoErrors",
                "startedAt": "2023-07-19_06:04:04.139"
            },
            "created": {
                "machine": "SHERRI",
                "timestamp": "20230719T051513.542Z",
                "user": "THEOBALD\\alice"
            },
            "lastChange": {
                "machine": "SHERRI",
                "timestamp": "20230815T074627.575Z",
                "user": "THEOBALD\\alice"
            }
        }
    ]
}
{% endhighlight %}
</details>

`http://sherri.theobald.local:8065/config/extractions/KNA1/parameters`

<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "extraction": 
    [
        {
            "name": "ignoreCache",
            "description": "Ignore the result cache",
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
            "default": "ec5"
        },
        {
            "name": "destination",
            "description": "Sets the name of the destination",
            "type": "Text",
            "default": "csv"
        },
        {
            "name": "rows",
            "description": "Maximum number of rows",
            "type": "Number",
            "default": "0"
        },
        {
            "name": "whereClause",
            "description": "Where Clause",
            "type": "Text",
            "default": null
        },
        {
            "name": "packageSize",
            "description": "Package Size",
            "type": "Number",
            "default": "50000"
        }
    ],
    "source": 
    [
        {
            "name": "lang",
            "description": "Logon Language",
            "type": "Text",
            "default": "EN"
        }
    ]
}
{% endhighlight %}
</details>

`http://sherri.theobald.local:8065/config/extractions/KNA1/result-columns`

<details>
<summary>Click here to show the response body</summary>
{% highlight json %}
{
    "columns": 
    [
        {
            "name": "KUNNR",
            "description": "Customer Number",
            "type": "StringLengthMax",
            "length": 10,
            "isPrimaryKey": true,
            "isEncrypted": false,
            "referenceField": "",
            "referenceTable": ""
        },
        {
            "name": "LAND1",
            "description": "Country Key",
            "type": "StringLengthMax",
            "length": 3,
            "isPrimaryKey": false,
            "isEncrypted": false,
            "referenceField": "",
            "referenceTable": ""
        },
        {
            "name": "NAME1",
            "description": "Name 1",
            "type": "StringLengthMax",
            "length": 35,
            "isPrimaryKey": false,
            "isEncrypted": false,
            "referenceField": "",
            "referenceTable": ""
        },
        {
            "name": "ORT01",
            "description": "City",
            "type": "StringLengthMax",
            "length": 35,
            "isPrimaryKey": false,
            "isEncrypted": false,
            "referenceField": "",
            "referenceTable": ""
        },
        {
            "name": "Mean_UMSAT",
            "description": "Annual sales",
            "type": "Double",
            "isPrimaryKey": false,
            "isEncrypted": false,
            "referenceField": "UWAER",
            "referenceTable": "KNA1"
        }
    ]
}
{% endhighlight %}
</details>

