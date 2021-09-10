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

![web-ui](/img/content/yunio/web-ui.png){:class="img-responsive"}


### Adding an SAP Connection

In the *Connection* menu you can add new SAP connections and edit or delete existing connections.

1. To add a new SAP connection, click **[Add Connection]**.<br>
To edit an existing connection, click on the name of the connection you want to edit.
2. Enter the connection information of your SAP system under *System*.
3. Enter your SAP credentials under *Authentication*.
4. To validate the connection parameters, click **[Test Connection]** . A window with a status message opens.
5. Click **[Save]** to save the connection settings. <br>
![YunIO-connection](/img/content/yunio/yunio-connections.png){:class="img-responsive" width="750px" }


### Creating a Service

In the *Services* menu you can create new services and edit, run or delete existing services.

1. Click **[Add Service]** to create a new service.<br>
![YunIO-new-service](/img/content/yunio/create-table.png){:class="img-responsive" width="750px"}
2. Enter a name for the service and choose an existing SAP connection under *Endpoint*.
3. Choose an **Extraction Type**. YunIO offers extraction of *SAP Tables or Views* and *Function Modules*. 
4. Optional: Add a short description for the service.
5. Click **[Next]**.
6. Depending on the chosen extraction type either enter the name of a Table/View or the name of a Function Module/BAPI to be extracted in the field **Search Term**. 
Use wildcards ( * ) if needed.<br>
![YunIO-search](/img/content/yunio/search-table.png){:class="img-responsive" width="750px"}
7. Click **[Search]** to display the search results. 
8. Select a data source. The extraction settings open automatically, see [Table Extraction](#table-extraction) or [Function Modules and BAPIs](#function-modules-and-bapis).
9. Click **[Save]** to save the service. <br>
To edit a service, click on its name in the main menu.

### Table Extraction


![YunIO-table](/img/content/yunio/table-settings.png){:class="img-responsive" width="750px"}


### Function Modules and BAPIs

### How to Run a Service

.jason protocol...
*Service*
*OpenAPI*
*Swagger*

