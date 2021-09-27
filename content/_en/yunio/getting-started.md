---
ref: yunio-04
layout: page
title: Getting Started
description: Getting Started
product: yunio
parent: yunio
permalink: /:collection/:path
weight: 9
lang: en_EN
---

The following section gives a general introduction to working with YunIO. 
The information described in the following section is a prerequisite for all subsequent sections.

### Starting YunIO

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

For more detailed information on establishing an SAP connection, see [SAP Connection](./sap-connection).

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
6. Click **[Search]** to display the search results (7). 
7. Select a data source from the list of available search results (8). The extraction settings open automatically, see [Table Extraction](#table-extraction) or [Function Module](./bapi)..
8. Click **[Save]** to save the service.

### How to Use a Service

The web services created with YunIO use a .json based protocol to write data to and from SAP.

To integrate a YunIO web service in your processes (Power Automate, Nintex, Swagger, etc.), you can either copy the URL of the service endpoint (1) or copy/download the .json code of the service (2).

![YunIO-Services](/img/content/yunio/yunio-run-services.png){:class="img-responsive" }

*****
#### Related Links
- [Function Module](./bapi)
- [SAP Table or Views](./table)

