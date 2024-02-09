---
ref: yunio-11
layout: page
title: Execute Services
description: Run Sevrices
product: yunio
parent: yunio
permalink: /:collection/:path
weight: 11
lang: en_EN
---

The following section shows how to test, integrate and pass parameters to services created in yunIO.

### Testing a Service

Before integrating a service, test the service directly in yunIO or a REST client of your choice.

- Click ![copy](/img/content/yunio/icons/copyURL.png) to copy the URL of the service endpoint to your clipboard. The URL can be used to trigger a service run.
- Click ![copy](/img/content/yunio/icons/run.png) to open the *Run Service* menu, where you can define parameters and run the service directly in yunIO.<br>
![yunIO-Services](/img/content/yunio/yunio-run-services1.png){:class="img-responsive" }

#### Running Services in yunIO

Follow the steps below to testrun a service in yunIO:
1. If [Global Access Control](./access-control#global-access-control) and/or [Service Access Control](./access-control#service-access-control) is enabled, enter valid credentials (1).
2. If the service requires input parameters, enter values for the parameters listed under *Input Parameters* (2). Use the **[ + ]** button to display nested items.
The depicted example uses an input parameter *NAME*.<br>
![Run-Service](/img/content/yunio/run-service.png){:class="img-responsive" }
3. Click **[Run]**. The response body of the service is displayed under *Output Parameters* (3).<br>
If the service returns multiple items, expand the items to view the content or use the control buttons to adjust the display of the parameters.<br>
If the response body returns an error message, click **[Logs]** to open the [logs](./logs) of the service run.
5. Click **[Close]** to close the *Run Service* menu.

{: .box-tip}
**Tip:** Click **[Edit]** to edit the service or add parameters.

**Control Buttons:**<br>
The control buttons in the Run Service menu adjust how input and output parameters are displayed.

- [![collapse](/img/content/yunio/icons/run-collapse.svg){:class="img-responsive" style="display:inline" width="20px"}] collapses all parameter items.
- ![expand](/img/content/yunio/icons/run-expand.svg){:class="img-responsive" style="display:inline" width="20px"} expands all parameter items.
- ![download](/img/content/yunio/icons/run-download.svg){:class="img-responsive" style="display:inline" width="20px"} saves all entered parameters in a .json file. The file can be used to reload the parameter values or to share values with other yunIO instances.
- ![upload](/img/content/yunio/icons/run-upload.svg){:class="img-responsive" style="display:inline" width="20px"} uploads parameter values from a local .json file. The json file can be created using the ![download](/img/content/yunio/icons/run-download.svg){:class="img-responsive" style="display:inline" width="20px"} button.
- ![reset](/img/content/yunio/icons/run-reset.svg){:class="img-responsive" style="display:inline" width="20px"} removes all defined input parameters. This option is only available for input parameters.
- ![fullscreen](/img/content/yunio/icons/run-fullscreen.svg){:class="img-responsive" style="display:inline" width="20px"} displays the parameters in a full screen view. To close the full screen view, click **[ X ]**.

### Integrating a Service

Web services created with yunIO can be integrated into all cloud applications that support REST API/Swagger (OpenAPI), e.g. Power Automate, Nintex, etc.

- Click ![copy](/img/content/yunio/icons/copyURL.png) to copy the URL of the service definition to your clipboard.<br>
The service definition URL can be used by third-party-tools to load the meta data of the service.
- Click ![download](/img/content/yunio/icons/download.png) to download the service definition.<br>
The service definition is saved as a JSON file that defines how to run the service. 
The JSON file can be imported into third-party tools.<br>
![yunIO-Services](/img/content/yunio/yunio-run-services-https.png){:class="img-responsive" }

Examples for integrating yunIO services in third-party-tools:
- [Integrating a yunIO Service with Power Automate](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-power-automate)
- [Integrating a yunIO Service with Nintex](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-nintex)
- [Integrating a yunIO Service with Alteryx](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-alteryx)

For more integration scenarios and examples, see [Integration Scenarios](./integration). 

<!---
- [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman)
- [Running a yunIO Service in SwaggerHub](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-hub)
-->

### Passing Parameters

How parameters are passed to a yunIO service, depends on the http method that is used to call the service.<br>
yunIO supports the http methods `POST` and `GET`, see [POST vs GET](#post-vs-get).

#### POST Method
Parameters are listed in the request body of a service. <br>
Edit the request body to assign values to the parameters. The depicted example uses an input parameter *NAME1*:<br>
![yunIO-HTTP-POST](/img/content/yunio/http-post.png){:class="img-responsive" }

#### GET Method
Parameters are available as query parameters in the service URL. <br>
Use query parameters to assign values or add the values directly in the service URL. The depicted example uses an input parameter *NAME1*:<br>
![yunIO-HTTP-GET](/img/content/yunio/http-get.png){:class="img-responsive" }

{: .box-note}
**Note:** If URL parameters contain characters other than `A–Z a–z 0–9 - _ . ! ~ * ' ( )` use an escape sequence for the characters. Some characters can break the URL, e.g., `# % &`.

### POST vs GET
yunIO services support the http methods `POST` and `GET`.

|  | POST | GET |
|--|-----|------|
| Data Length | No restrictions. | Maximum URL length is 2048 characters. |
| Parameters | Parameters are part of the http request body. | Supports query parameters in the URL. | 
| Data Safety | Parameters are not stored in the browser history or in web server logs. | Parameters are visible in the service URL. Data is cached. | 
| Data Types | No restrictions. | Only supports ASCII characters. |

{: .box-tip}
**Recommendation:** We recommend using the POST method with [Transport Layer Security](./server-settings) (HTTPS) to ensure data protection. 
Do not use the GET method to send sensible data, e.g. credentials.

When using the OpenAPI/Swagger definition, `POST` and `GET` are both available. Select the method you want to use:<br>
![yunIO-HTTP-POST-GET](/img/content/yunio/http-post-get.png){:class="img-responsive" }


*****
#### Related Links
- [SAP Table or Views](./table-and-views)
- [Function Module / BAPI](./bapis-and-function-modules)
- [Transactions](./transactions)
- [Report](./report)