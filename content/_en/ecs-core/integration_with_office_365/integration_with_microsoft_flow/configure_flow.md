---
ref: ecs-core-integration365-microsoft-flow-04
layout: page
title: Configure Flow
description: Configure Flow
product: ecs-core
parent: integration_with_microsoft_flow
permalink: /:collection/:path
weight: 4
lang: en_GB
---

After successfully importing, configuring, and testing the custom connector, you can use it in Flow.  

The following example uses Microsoft Forms as the workflow trigger. With Microsoft Forms, you can create and share simple input and survey forms for desktop and mobile applications.  


First, create a Microsoft Forms form that contains the following input parameters as text fields:



**Material Number** 

**Plant**

**Quantity**

**Delivery Date**

**Cost Center** 

![ecscore_flow_9](/img/content/ecscore_flow_9.png){:class="img-responsive"}

After completing the form, click Create from blank in *My Flows* in Microsoft Flow and select *Microsoft Forms - when a new response is submitted* as the workflow trigger action. Select the pre-created form under *Form ID** and add Microsoft Forms - Get response details* as an additional step in the workflow. 

Select the form under *Form ID* and add the field *Response ID* as an identifier to the *Response ID* field. The field *List of response notifications* is automatically added over the previous step.  

![ecscore_flow_10](/img/content/ecscore_flow_10.png){:class="img-responsive"}

Then add the user-defined connector for creating a purchase requisition to the *Apply to each* section and map the return values of the form to the corresponding input parameters. We store fixed values for the fields DOC_TYPE (=NB) and ACCTASSCAT (=K). An alternative option would be to assign these fixed values directly in the web service. 

It is also necessary to convert the field *Quantity* with a *int(value)* formula into integer format, since at the moment the addition of number fields in Microsoft Forms is not yet supported. 

The field *applicationName* can be left empty, then the default service for the SAP connection in ECS Core is used, unless a service was explicitly added in the REST Web service.   

![ecscore_flow_11](/img/content/ecscore_flow_11.png){:class="img-responsive"}

Note that this example was created with scalar input parameters. Complex parameters (lists and structures) are also supported in Flow, which allows the implementation of scenarios for creating multiple items. 
 
The last step is to add the *Data Operation - Parse JSON Action* to the flow. This searches the return of the connector in the response body for result values. If everything works, a BANF number should be displayed in the result statement.

The following scheme can be used in this scenario to parse the JSON return: 

```
{
"type": "object",
	"properties": {
		"result": {
		"type": "string"
		}
	}
}
```

![ecscore_flow_12](/img/content/ecscore_flow_12.png){:class="img-responsive"}