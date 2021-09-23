---
ref: yunio-04
layout: page
title: Getting Started with YunIO
description: Getting Started
product: yunio
parent: yunio
permalink: /:collection/:path
weight: 10
lang: en_EN
---

YunIO is a Windows service that comes with an embedded Web UI.
The following section gives a general introduction to working with YunIO. 

### Installation

{: .box-note }																   
**Note:** Administrator rights are required to install YunIO.

The YunIO service is installed on a local or cloud-hosted Windows server environment. <br>
`YunIOSetup.exe` is an industry standard setup. 
Execute the `YunIOSetup.exe` file and follow the instructions of the setup.

![YunIO-Setup](/img/content/yunio/yunio-setup.png){:class="img-responsive"}

#### Program Directory Files
The list below shows several important files that are placed into the default directory `C:\Program Files\Theobald Software\YunIO` after installation:

|Filename | Description |
|:----|:---|
| logs directory| Directory with server and extraction etc. logs.|
| config directory | Directory containing all SAP connections, extractions and other settings.|
| Uninstall YunIO shortcut| Shortcut for uninstalling and removing YunIO with all its components from your machine. |
| YunIOSetup.exe| Setup of the currently installed version.|
| YunIOLicense.json | License file with information about the component and runtime. |


#### New Installation and Update																																										   

{: .box-warning}
**Warning! Data loss:**
System updates or changes can restrict software functionalities and this may lead to data loss. 
Create a backup of the directory: `C:\Program Files\Theobald Software\YunIO\config` at regular intervals.


### Accessing the Web UI

To access the web UI of YunIO, open a web browser of your choice and enter the URL the server that YunIO is running on.<br>
The URL pattern to access the YunIO Web UI is `http://[host]:[port]`. Example: `http://localhost:8077`.<br>
- If the YunIO service runs on a local server, replace `[host]` with *localhost*.
- If the YunIO service does not run on the same machine as the browser, replace `[host]` with the name of the host on which the service runs.
- After the installation of YunIO the web UI is accessible under the default port 8077. <br>
You can configure the port under *Settings* in the YunIO Web UI

{: .box-note}
**Note:** Make sure that the *YunIO* service is running and that the default port 8077 is not blocked by your firewall.


### Adding an SAP Connection

In the *Connection* menu you can add new SAP connections and edit or delete existing connections.


1. To add a new SAP connection, click **[Add Connection]** (1).<br>
To edit an existing connection, click on the name of the connection you want to edit (2).
![web-ui](/img/content/yunio/web-ui.png){:class="img-responsive"}
2. Enter the connection information of your SAP system under *System* (3).<br>
![YunIO-connection](/img/content/yunio/yunio-connections.png){:class="img-responsive" width="750px" }
3. Enter your SAP credentials under *Authentication* (4).
4. To validate the connection parameters, click **[Test Connection]** (5). A window with a status message opens.
5. Click **[Save]** to save the connection settings. <br>


### Creating a Service

In the *Services* menu you can create new web services and edit, run or delete existing web services.

1. To create a new service, click **[Add Service]** (1).<br>
To edit an existing service, click on the name of the service you want to edit (2).<br>
![YunIO-Services](/img/content/yunio/yunio-services.png){:class="img-responsive" }
2. Enter a name for the service and choose an existing SAP connection under *Endpoint* (3).<br>
![YunIO-new-service](/img/content/yunio/create-table.png){:class="img-responsive" width="750px"}
3. Choose an **Extraction Type** (4). YunIO offers extraction of *SAP Tables or Views* and *Function Modules*. 
4. Optional: Add a short description for the service (5). Click **[Next]**.
5. Depending on the chosen extraction type either enter the name or description of a Table/View or the name of a Function Module/BAPI to be extracted (6). 
Use wildcards ( * ) if needed.<br>
![YunIO-search](/img/content/yunio/search-table.png){:class="img-responsive" width="750px"}
6. Click **[Search]** to display the search results. 
7. Select a data source from the list of available search results (8). The extraction settings open automatically, see [Table Extraction](#table-extraction).
8. Click **[Save]** to save the service.


### Table Extraction


The *SAP Table and Views* menu consists of the following sections:

![YunIO-table](/img/content/yunio/table-settings.png){:class="img-responsive" width="750px"}

1. **Table and View:**<br>
The name and description of the selected Table or View are displayed in the *Table and View* section.<br>
To select a different source file, click **Select** in the upper right corner of the section.
2. **Advanced Settings:**<br>
- **Function Module**: Specifies the name of the function module used for data extraction. This field is filled automatically depending on what function modules are installed on your SAP system.
- **Max Row**: Specifies the maximum number of extracted records. 0 Extracts the entire table.
- **Rows per Package**: The extracted data will be split into packages of the defined size. The default value is 50000 lines.
A package size between 20000 and 50000 is advisable for large amounts of data. 0 means no packaging. Not using packaging can lead to an RFC timeout for large data extracts.
- **Run as background job**: If this checkbox is checked, the table extraction is executed as a background job in SAP. 
Activate this option for long-running extractions with a very large amounts of data that may run into a timeout error (“Time limit exceeded”), when using the foreground mode.
3. **Output Columns:**<br>
Select the columns you want to extract.
4. **WHERE-clause:**<br>
Optional: You can use a WHERE-clause to filter your data. For information on the OpenSQL syntax of the WHERE-clause, see [SAP Help - Select WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm?file=abapwhere.htm).

<!---
### Table Extraction


The *SAP Table and Views* menu consists of the following sections:
- [Table or View](#table-or-view)
- [Advanced Settings](#advanced-settings)
- [Output Columns](#output-columns)
- [WHERE-Clause](#where-clause)

![YunIO-table](/img/content/yunio/table-settings.png){:class="img-responsive" width="750px"}


#### Table and View (1)
The name and description of the selected Table or View is displayed in the **Table or View** section.<br>
To select a different source file, click **Select** (4) in the upper right corner of the section.

#### Advanced Settings (2)
**Max Row**<br>
Specifies the maximum number of extracted records. 0 Extracts the entire table.

**Function Module**<br>
Specifies the name of the function module used for data extraction. This field is filled automatically depending on what function modules are installed on your SAP system.
Note the necessary [authorization for SAP tables](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#table):
```
S_TABU_NAM ACTVT=03; TABLE=ENLFDIR
```

{: .box-tip }
Recommendation: The SAP standard modules for table extraction do not have pointers for table fields. In larger tables this may cause low performance and duplicates in the target environment
To ensure smooth extractions we recommend using the function module from Theobald Software [Z_THEO_READ_TABLE](https://help.theobald-software.com/en/xtract-universal/sap-customizing/custom-function-module-for-table-extraction).


**Rows per Package**<br>
The extracted data will be split into packages of the defined size. The default value is 50000 lines.
A package size between 20000 and 50000 is advisable for large amounts of data. 0 means no packaging. Not using packaging can lead to an RFC timeout for large data extracts

**Run as background job**<br>
If this checkbox is checked, the table extraction is executed as a background job in SAP. 
Activate the setting **Run as background job** for long-running extractions with a very large amounts of data that may run into a timeout error (“Time limit exceeded”), when using the foreground mode.

#### Output Columns (3)

Select the columns you want to add to the output.

#### WHERE-Clause (4)

Use a WHERE clause to filter your data.

#### Syntax Rules
- Enter a space before and after the equal sign:<br>
 **Correct:** *YEAR = '1999'* <br>
 **Wrong:** *YEAR= '1999 '*, *YEAR ='1999'* or *YEAR='1999'*

- Set floating point numbers in single quotation mark: <br>
**Correct:** *KMENG > '10.3'* <br>
**Wrong:** *KMENG > 10.3*

{: .box-note }
**Note:** The WHERE clause doesn't need any line break (return key).

- Values must have the internal SAP representation:<br>
  - The date 01.01.1999 has the internal representation 19990101 (YYYYMMDD) 
  - The year period 001.1999 has the internal representation 1999001 (YYYYPPP)
  - Numbers must contain the leading zeros, e.g., customer number 1000 has the internal representation 0000001000.
  
| Operator   |      Meaning      |  
|:---------|:------------- |
|=, EQ |  True if the content of operand1 is equal to the content of operand2|
|<>, NE | True if the content of operand1 is not equal to the content of operand2|
| <, LT | True if the content of operand1 is less than the content of operand2|
|>, GT |  True if the content of operand1 is greater than the content of operand2|
|<=, LE | True if the content of operand1 is less than or equal to the content of operand2.|
|>=, GE |  True if the content of operand1 is greater than or equal to the content of operand2|
| (NOT) LIKE | True if the value of the operand operand1 matches (does not match) the pattern in the operand operand2.|
| (NOT) BETWEEN | True if the content of the operand operand (not) lies between the values of the operands operand1 and operand2. |

Get more details on the OpenSQL syntax on the [SAP help site - Select WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwhere.htm?file=abapwhere.htm) 
-->

### How to Run a Service
The web services created with YunIO use a .json based protocol to write data to and from SAP.

To integrate a YunIO web service in your processes (Power Automate, Nintex, Swagger, etc.), you can either copy the URL of the service endpoint (1) or copy/download the .json code of the service (2).

![YunIO-Services](/img/content/yunio/yunio-run-services.png){:class="img-responsive" }



