---
ref: yunio-04
layout: page
title: Getting Started with yunIO
description: Getting Started
product: yunio
parent: yunio
redirect_from:
  - en/yunio-getting-started
  - en/yunio
permalink: /:collection/:path
weight: 10
lang: en_EN
---

yunIO is a cloud connector for SAP process integration with cloud environments. <br>
The following section gives a general introduction to working with yunIO. 

### Installation

Make sure you meet the system requirements before starting the installation process, see [yunIO System Requirements](./requirements).

{: .box-note }																   
**Note:** Administrator rights are required to install yunIO.

The yunIO service is installed on a local or cloud-hosted Windows server environment. <br>
`yunIOSetup.exe` is an industry standard setup. 
Execute the `yunIOSetup.exe` file and follow the instructions of the setup.

![yunIO-Setup](/img/content/yunio/yunio-setup.png){:class="img-responsive"}

#### Program Directory Files
The list below shows several important files that are placed into the default directory `C:\Program Files\Theobald Software\yunIO` after installation:

|Filename | Description |
|:----|:---|
| logs directory| Directory with server and extraction etc. logs.|
| config directory | Directory containing all SAP connections, extractions and other settings.|
| Uninstall yunIO shortcut| Shortcut for uninstalling and removing yunIO with all its components from your machine. |
| yunIOSetup.exe| Setup of the currently installed version.|
| yunIOLicense.json | License file with information about the component and runtime. |


#### New Installation and Update																																										   

{: .box-warning}
**Warning! Data loss:**
System updates or changes can restrict software functionalities and this may lead to data loss. 
Create a backup of the directory: `C:\Program Files\Theobald Software\yunIO\config` at regular intervals.


### Web UI

To access the web UI of yunIO, open a web browser of your choice and enter the URL the server that yunIO is running on.<br>
The URL pattern to access the yunIO Web UI is `http://[host]:[port]`. Example: `http://localhost:8077`.<br>
- If the yunIO service runs on a local server, replace `[host]` with *localhost*.
- If the yunIO service does not run on the same machine as the browser, replace `[host]` with the name of the host on which the service runs.
- After the installation of yunIO the web UI is accessible under the default port 8077. <br>
You can configure the port under *Settings* in the yunIO Web UI

{: .box-note}
**Note:** Make sure that the *yunIO* service is running and that the default port 8077 is not blocked by your firewall.


### Adding an SAP Connection

In the *Connection* menu you can add new SAP connections and edit or delete existing connections.


1. To add a new SAP connection, click **[Add Connection]** (1).<br>
To edit an existing connection, click on the name of the connection you want to edit (2).
![web-ui](/img/content/yunio/web-ui.png){:class="img-responsive"}
2. Enter the connection information of your SAP system under *System* (3).<br>
![yunIO-connection](/img/content/yunio/yunio-connections.png){:class="img-responsive" width="750px" }
3. Enter your SAP credentials under *Authentication* (4).
4. To validate the connection parameters, click **[Test Connection]** (5). A window with a status message opens.
5. Click **[Save]** to save the connection settings. <br>


### Creating a Service

In the *Services* menu you can create new web services and edit, run or delete existing web services.

1. To create a new service, click **[Add Service]** (1).<br>
To edit an existing service, click on the name of the service you want to edit (2).<br>
![yunIO-Services](/img/content/yunio/yunio-services.png){:class="img-responsive" }
2. Enter a name for the service and choose an existing SAP connection under *Endpoint* (3).<br>
![yunIO-new-service](/img/content/yunio/create-table.png){:class="img-responsive" width="750px"}
3. Choose an **Extraction Type** (4). yunIO offers extractions of *SAP Tables or Views* and *Function Modules*. 
4. Optional: Add a short description for the service (5). Click **[Next]**.
5. Depending on the chosen extraction type either enter the name or description of a Table/View or the name of a Function Module/BAPI to be extracted (6). 
Use wildcards ( * ) if needed.<br>
![yunIO-search](/img/content/yunio/search-table.png){:class="img-responsive" width="750px"}
6. Click **[Search]** to display the search results (7). 
7. Select a data source from the list of available search results (8). The extraction settings open automatically, see [Table Extractions](#table-extraction).
8. Click **[Save]** to save the service.


### Table Extractions


The *SAP Table and Views* menu consists of the following subsections:

![yunIO-table](/img/content/yunio/table-settings.png){:class="img-responsive" width="750px"}

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
### Function Modules

The *Function Module* menu consists of the following subsections:


1. **Function Module:**<br>
The name and description of the selected function module or BAPI are displayed in the *Function Module*- section.
To select a different source file, click **Select** in the upper right corner of the section.
2. **Advanced Settings:**<br>
- **Commits Transactions:** ...
3. **Function Module Interface Parameters:**<br>
- **Import:** Define either static input parameters (default) or dynamic input parameters (parameterized).
- **Export:** Select the data that is to be added to the output.
- **Tables:** Tables can be entered and extractes from the function module or BAPI. To import a table enter the name of the table under *Input Value*. To add a table to the output, mark the table under *Output*.
-->

<!---
### Table Extraction


The *SAP Table and Views* menu consists of the following sections:
- [Table or View](#table-or-view)
- [Advanced Settings](#advanced-settings)
- [Output Columns](#output-columns)
- [WHERE-Clause](#where-clause)

![yunIO-table](/img/content/yunio/table-settings.png){:class="img-responsive" width="750px"}


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
Web services created with yunIO can be integrated into all cloud applications that support REST API/Swagger (OpenAPI), e.g. Power Automate, Nintex, Firestart, Webcon, etc.

To test a service after creation, you can trigger the URL of the service endpoint under **Service** (1). The service is then executed in your web browser. 

{: .box-note }
**Note:** Parameters cannot be passed to service when running it in the web browser. Only data is displayed in the browser for services without input parameters.    

To integrate a yunIO web service with a tool that supports Swagger/OpenApi, copy the code or download the service definition (2).

![yunIO-Services](/img/content/yunio/yunio-run-services.png){:class="img-responsive" }



