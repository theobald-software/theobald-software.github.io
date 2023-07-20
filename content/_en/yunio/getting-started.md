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


The following section gives a general introduction to working with yunIO. 
The information described in the following section is a prerequisite for all subsequent sections.

### Starting yunIO

To access the yunIO Designer, enter the designer-URL in a [web browser](https://help.theobald-software.com/en/yunio/introduction/requirements#supported-web-browsers).<br>
The URL pattern to access the yunIO Designer is `http://[host]:[port]`. Example: `http://localhost:8077`.<br>
- If the yunIO service runs on a local server, replace `[host]` with *localhost*.
- If the yunIO service does not run on the same machine as the browser, replace `[host]` with the name or IP address of the host on which the service runs.
- After the installation the yunIO Designer is accessible under the default port 8077. <br>
You can configure the port under *Settings* in the yunIO Designer.

{: .box-note}
**Note:** Make sure that the *yunIO* service is running and that the default port 8077 is not blocked by your firewall.


### Adding an SAP Connection

In the *Connection* menu you can add new SAP connections and edit or delete existing connections.

1. To add a new SAP connection, click **[Add Connection]** (1).<br>
To edit an existing connection, click the edit icon (![Edit](/img/content/yunio/edit.png)) of the connection you want to edit.
![web-ui](/img/content/yunio/web-ui.png){:class="img-responsive"}
2. Enter the connection information of your SAP system under *System* (2).<br>
![yunIO-connection](/img/content/yunio/yunio-connections.png){:class="img-responsive" width="750px" }
3. Enter your SAP credentials under *Authentication* (3).
4. To validate the connection parameters, click **[Test Connection]** (4). A window with a status message opens.
5. Click **[Save]** to save the connection settings. <br>

For more detailed information on establishing an SAP connection, see [SAP Connection](./sap-connection).

### Creating a Service

In the *Services* menu you can create new web services and edit, run or delete existing web services.

1. To create a new service, click **[Add Service]** (1).<br>
![yunIO-Services](/img/content/yunio/yunio-services.png){:class="img-responsive" }
2. Enter a name for the service and choose an existing SAP connection under *General* (2).<br>
![yunIO-new-service](/img/content/yunio/create-table.png){:class="img-responsive" width="750px"}
3. Optional: Add a short description for the service. 
4. Choose an **Extraction Type** (3). yunIO offers the following options: *SAP Tables or Views*,*Function Modules* or *Transaction*. 
5. Click **[Save and edit]**.
To set up the service, see [SAP Table or View](./table-and-views), [Function Module / BAPI](./bapis-and-function-modules) or [Transactions](./transactions).

To edit the name, description and source of an existing service, click the ![Edit](/img/content/yunio/edit-type-icon.png) icon.<br>
To edit the extraction type settings of the service, click the ![Edit](/img/content/yunio/edit-cog-icon.png) icon. <br>

### How to run a Service

Web services created with yunIO can be integrated into all cloud applications that support REST API/Swagger (OpenAPI), e.g. Power Automate, Nintex, etc.

- To test a service after creation, trigger the URL of the service endpoint under **Service** (1). The service is then executed in your web browser. <br>
- To integrate a yunIO web service into a tool that supports Swagger/OpenAPI, copy the code or download the service definition (2).

![yunIO-Services](/img/content/yunio/yunio-run-services.png){:class="img-responsive" }

{: .box-note}
**Note:** Only services that do not require parameters supplied by a caller will display any SAP results in the browser. For parameterized services, use a tool
that supports Swagger/OpenAPI definitions (e.g.[Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector), [Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman)) . 

#### POST vs GET
yunIO services support the http methods `POST` and `GET`.

|  | POST | GET |
|--|-----|------|
| Data Length | No restrictions. | Maximum URL length is 2048 characters. |
| Parameters | Parameters are part of the http request body. | Supports query parameters in the URL. | 
| Data Safety | Parameters are not stored in the browser history or in web server logs. | Parameters are visible in the service URL. Data is cached. | 
| Data Types | No restrictions. | Only supports ASCII characters. |


{: .box-tip}
**Recommendation:** We recommend using the POST method with [Transport Layer Security](./server-settings) (HTTPS) to ensure data protection. Do not use the GET method to send sensible data, e.g. credentials.

When using the OpenAPI/Swagger definition, `POST` and `GET` are both available. Select the method you want to use:<br>
![yunIO-HTTP-POST-GET](/img/content/yunio/http-post-get.png){:class="img-responsive" }

Example for using `POST` with an input parameter *NAME1*:<br>
![yunIO-HTTP-POST](/img/content/yunio/http-post.png){:class="img-responsive" }

Example for using `GET` with an input parameter *NAME1*:<br>
![yunIO-HTTP-GET](/img/content/yunio/http-get.png){:class="img-responsive" }



*****
#### Related Links
- [SAP Table or Views](./table-and-views)
- [Function Module / BAPI](./bapis-and-function-modules)
- [Transactions](./transactions)
