---
ref: ecs-core-integration365-microsoft-flow-04
layout: page
title: Configure the Flow
description: Configure the Flow
product: erpconnect-services
parent: integration-with-microsoft-flow
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=configure_the_flow
---

After successfully importing, configuring and testing the custom connector you can use it a Flow.  
As a workflow trigger we want to use Microsoft Forms. With Microsoft Forms it is possible to easily build and share input forms for desktop and mobile access.

Please first create a form in Microsoft Forms which contains the following input parameters as text fields:


**Material Number** 

**Plant**

**Quantity**

**Delivery Date**

**Cost Center** 

![ecscore_flow_9](/img/content/ecscore_flow_9.png){:class="img-responsive"}

After finishing the form click on *Create from blank* in the *My Flows* section and select *Microsoft Forms - when a new response is submitted*  as a workflow trigger action. Select the previously created form under *Form ID* and add *Microsoft Forms - Get response details* as a next step in the workflow. 
Select your form under *Form ID* and add the *Response ID* identifier to the *Response ID* field. The *List of response notifications* is automatically added from the previous step. 

![ecscore_flow_10](/img/content/ecscore_flow_10.png){:class="img-responsive"}

After that add the custom connector to the Apply to each section and map the response values to the respective input parameters. 
For DOC_TYPE (=NB) and ACCTASSCAT (=K) we enter fixed values. Another possibility would be to assign the fixed values directly in the web service. 

It is necessary to convert the *Quantity* field with a int(value) expression into integer format because at the moment it is not supported to add number fields in Microsoft Forms. 

The *applicationName* parameter can be left blank, then the default service application is used.   

![ecscore_flow_11](/img/content/ecscore_flow_11.png){:class="img-responsive"}

Note that this example has been built with scalar input parameters. Arrays (List-of-parameters) are also supported in Flow. You would use an array to create multiple positions.

As a final step add the *Data Operation - Parse JSON* action to the flow which is used to parse the response body for the result. In the result a purchase requisiton ID will be displayed if everything works fine.
  
In this scenario the following schema can be used: 
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

Save the flow afterwards, it should be automatically turned on.