---
ref: ecs-core-integration365-microsoft-flow-03
layout: page
title: Import OpenAPI definition into Flow
description: Import OpenAPI definition into Flow
product: ecs-core
parent: integration_with_microsoft_flow
permalink: /:collection/:path
weight: 3
lang: en_GB
---

To import the OpenAPI definition into Flow, log into your Microsoft Flow account and click on *Custom Connectors* in the account settings to create a new custom connector. Note that custom connector creation is only included in a premium account.  

Click on *Create Custom Connector* and select *Import to OpenAPI* file.

Define a title for your custom connector and select the predefined OpenAPI definition.

![ecscore_flow_1](/img/content/ecscore_flow_1.png){:class="img-responsive"}

The host URL is automatically adopted by the connection settings defined in the WebService Designer and exported to the OpenAPI definition. Optionally, you can upload an individual icon for the connector. 

![ecscore_flow_2](/img/content/ecscore_flow_2.png){:class="img-responsive"}

Click on *Continue*. You must select the authentication type in the *Security* settings. We recommend authentication with an API key. This allows you to keep the remaining settings.

![ecscore_flow_3](/img/content/ecscore_flow_3.png){:class="img-responsive"}

The *Definition* section provides an overview of the actions contained in the connector, the request properties (request URL, query parameters, and so on), and the form of the return. In addition, the individual actions are validated, which helps to identify potential errors. Basically nothing has to be changed on this page. In addition to the individually created web service operations, additional generic services are also listed under *Actions* if the option *Add default actions to the definition* option was selected in the OpenAPI settings in the designer.    

![ecscore_flow_7](/img/content/ecscore_flow_7.png){:class="img-responsive"}

Before you can test the connector, you must generate it. The connector can only be created if all validations are successful. 

The functionality of the custom connector can be tested in the *Test* section. A connection must first be created. Click on *New connection* and enter a valid API key in the following format: <br>
APIKEY [ECS Core API Key]

Example: APIKEY QjGCMTMxMjE0MTA3NDhCMUE5MUNZTzAyQjBDRTg1OUP= (cf. *Connection settings with API Key* in [Webservice Authentication](../../webservices/webservice_authentication)). 

![ecscore_flow_4](/img/content/ecscore_flow_4.png){:class="img-responsive"}

You may need to click on the *Refresh* button to see the newly created connection.  
Then enter valid values for the defined input parameters and click on *Test* operation. 

![ecscore_flow_5](/img/content/ecscore_flow_5.png){:class="img-responsive"}

The generated purchase requisition number from SAP should be displayed as the return value in the response window. If this is the case and no error messages are displayed, the connector works and can be used in Flow. 

![ecscore_flow_8](/img/content/ecscore_flow_8.png){:class="img-responsive"}
