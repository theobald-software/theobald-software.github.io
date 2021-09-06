---
ref: yunio-04
layout: page
title: Getting Started
description: Getting Started
product: yunio
parent: yunio
permalink: /:collection/:path
weight: 10
lang: en_EN
---

The following section gives a general introduction to working with YunIO. 
The information described in the following section is a prerequisite for all subsequent sections.

### Starting YunIO

1. Make sure that the *YunIO* service is running.
2. Open a browser of your choice.
3. The URL pattern to access the YunIO Web UI is `http://[host]:[port]`. Example: `http://localhost:8077`.<br>
	- If the YunIO service runs on a local server, replace `[host]` with *localhost*.
	- If the YunIO service does not run on the same machine as the browser, replace `[host]` with the name of the host on which the service runs.
	- After the installation of YunIO the Web UI is accessible under the default port 8077. Make sure that the port is not blocked by your firewall.
	- You can configure the port under *Settings* in the YunIO Web UI.
4. Enter the URL to access the YunIO Web UI.

### Adding an SAP Connection

In the *Connection* menu you can add new SAP connections and edit or delete existing connections.

1. To add a new SAP connection, click **[Add Connection]**.<br>
To edit an existing connection, click on the connection you want to edit.
2. Enter the connection information for your SAP system under *System*
3. Enter your SAP credentials under *Authentication*.
4. Click **[Test Connection]** to validate the connection parameters. A window with a status message opens.
5. Click **[Save]** to save your input.

For more detailed information on establishing an SAP connection, see [SAP Connection](./introduction/sap-connection).

### Creating a Service

In the *Services* menu you can create new services and edit, run or delete existing services.

1. Click **[Add Service]** to add a new service.
2. In the section *Endpoint* enter a name for the service and choose an SAP connection under **Source System**.
3. Choose **SAP Table or View** or **RFC Function Module or BAPI** as the *Extraction Type*.
4. Optional: You can add a short description for the extraction.
5. Click **[Next]**.
6. Enter the name of the Table or View/Function Module to be extracted in the field **Search Term**. You can use wildcards ( * ) in your search.
7. Click **[Search]** to display the search results.
8. Select a data source.
9. Depending on the chosen extraction type, you can enter further settings, see [SAP Table or View](./table) or [Function Module](./bapi).
10. Click **[Save]**. <br>

Edit the service in the *Services* menu by by clicking on the name of the service.

### How to Use the Services

.jason protocol...
*Service*
*OpenAPI*
*Swagger*

*****
#### Related Links
- [Function Module](./bapi)
- [SAP Table or Views](./table)

