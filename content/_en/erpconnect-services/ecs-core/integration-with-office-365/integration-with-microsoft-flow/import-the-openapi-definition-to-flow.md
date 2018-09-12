---
layout: page
title: Import the OpenAPI definition to Flow
description: Import the OpenAPI definition to Flow
product: erpconnect-services
parent: integration-with-microsoft-flow
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=import_the_openapi_definition_to_flow
---

To import the OpenAPI definition to Flow login to your Microsoft Flow account and click on Custom Connectors to add a new custom connector. Note that adding custom connectors to Microsoft Flow is only allowed with a premium account. 

Click on *Create Custom Connector* and select *Import an OpenAPI* file from the list. 
Define a title for your custom connector and select the previuosly generated OpenAPI file.

![ecscore_flow_1](/img/content/ecscore_flow_1.png){:class="img-responsive"}

The host URL is automatically be taken from the connection settings defined in the WebService Designer's connection dialog. You can optionally upload an individual icon for the custom connector. 

![ecscore_flow_2](/img/content/ecscore_flow_2.png){:class="img-responsive"}

Click on *Continue*. In the *Security*  section you have to select the authentication type for the custom connector. We recommend authentication with API Key. You do not need to change the other settings.

![ecscore_flow_3](/img/content/ecscore_flow_3.png){:class="img-responsive"}

The *Definition* section gives an overview about the custom connector's actions, request properties (request URL, query parameters, etc.) and shape of the response. Furthermore the action is validated which helps to identify potential issues. Usually you don't have to change anything here. 
Under *Actions*  additional generic functions are listed if the *Add default actions to the definition* option was checked in the WebService DesignerS' OpenAPI settings.  

![ecscore_flow_7](/img/content/ecscore_flow_7.png){:class="img-responsive"}

Before you can test the connector you have to create it first. Only if all actions are validated sucessfully the creation will work.

In the Test section the custom connector's functionality can be tested. Therefore you have to create a connection first. Click on *New connection* and enter a valid API Key in the following form:<br> 
APIKEY [BASE64 encoded ECS Core API Key]

Example: APIKEY QjGCMTMxMjE0MTA3NDhCMUE5MUNZTzAyQjBDRTg1OUP= (vgl. Connection Settings for API Key in Webservice Authentication)

![ecscore_flow_4](/img/content/ecscore_flow_4.png){:class="img-responsive"}

You might need to click on the refresh connection button to see the newly added connection. 
After that enter valid values for the defined input parameters and click on *Test operation*. 

![ecscore_flow_5](/img/content/ecscore_flow_5.png){:class="img-responsive"}

If you don't get any error messages and a clear response in the body displaying the SAP purchase requisition ID everything worked fine and you can use the connector in Flow. 

![ecscore_flow_8](/img/content/ecscore_flow_8.png){:class="img-responsive"}
