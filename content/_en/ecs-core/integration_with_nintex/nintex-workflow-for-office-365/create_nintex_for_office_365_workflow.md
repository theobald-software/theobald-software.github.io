---
ref: ecscore-nintex-workflow-for-office-365-02
layout: page
title: Create Nintex Workflow for Office 365
description: Create Nintex Workflow for Office 365
product: ecs-core
parent: nintex-workflow-for-office-365
permalink: /:collection/:path
weight: 2
lang: en_GB
---

First, create a SharePoint list with the following properties in your Office 365 environment:

Type = **Custom List**

Name = **Purchasing Requests**


Add the following columns to the list:


**Material**: Single line of text (rename the title column to Material), required

**Plant**: Single line of text, required

**Quantity**: Number, required

**Delivery Date**: Date only, required

**Cost Center**: Single line of text, required
 
**Purchase Requisition ID**: Single line of text


Then select the item **Nintex Workflow** under List -> Settings and choose Create new workflow. This creates a new list workflow. 


First add the following three workflow actions in the Nintex Workflow Designer:

**Assign task** (from the **User interaction** group)

**Create dictionary** (From the **Operations** group)

**Call HTTP Web Service** (from the **Integration** group)

![ECS-Nintex-Office365-1](/img/content/ECS-Nintex-Office365-1.png){:class="img-responsive"}

Configure the **assign task** Action with the following properties:

- Participant** = ApprovalManagers (group of approvers)
- Task Title** = Approve Purchase Requisition
- **Related Item** = Current Item

All other settings are optional. Save the settings with Save.


![ECS-Nintex-Office365-2](/img/content/ECS-Nintex-Office365-2.png){:class="img-responsive"}

Then configure the **Create Dictionary** Action: 


The dictionary defines the header data for the Web service call. It is always a good idea to first test the Web service for functionality in a REST client. You can read more about this here. 


The following information is required:

- Authorization**: APIKEY [ECS Core API Key]
- **Accept**: application/json
- **Content-Type**: application/json	

Save the dictionary in the workflow variable **RequestHeader**.

![ECS-Nintex-Office365-4](/img/content/ECS-Nintex-Office365-2.png){:class="img-responsive"}

Then configure the workflow action Call **HTTP Web Service**.  

You must make the following entries:

- Address**: Web service URL including input parameters. For the values of the input parameters, they add references to the columns of the SharePoint list.  
- **Request Type**: POST  
- **RequestHeaders**: Workflow Variable RequestHeader
- **Response Content**: Workflow Variable ResponseContent	
- Response status code: Workflow Variable Result

![ECS-Nintex-Office365-5](/img/content/ECS-Nintex-Office365-5.png){:class="img-responsive"}

The workflow would then be basically ready for use, but for the present scenario of a purchase requisition creation, the workflow described in the 
SAP system can be written back to the SharePoint list. In the Web service, a return parameter ReqItemID 
is created, which is then output in the Web service result. 

Add the following workflow actions to your workflow:

- Retrieve element from a dictionary** (from the Operations group) 
- Define field in current element** (From Libraries and Lists group)

Optionally, you can also place the *Log to History* action between the two workflow actions.  

![ECS-Nintex-Office365-6](/img/content/ECS-Nintex-Office365-6.png){:class="img-responsive"}

First configure the **Retrieve an item from a dictionary** Action. 

- Dictionary**: WF Variable ResponseContent
- Item name or path**: result (Only the result part containing the document number is extracted from the dictionary)
- **Output**: WF Variable RequestItemID 

![ECS-Nintex-Office365-8](/img/content/ECS-Nintex-Office365-8.png){:class="img-responsive"}

Optionally, you can then write the variable RequestItemID to the log using the action **Log to history list**. 

The workflow action Define field in current element is then used to define the document number stored in the WF variable **RequestItemID**. 
can be written back to the SharePoint list:

- Field**: Purchase Requisition ID
- **value**: WF Variable RequestItemID

![ECS-Nintex-Office365-9](/img/content/ECS-Nintex-Office365-9.png){:class="img-responsive"}

Save your settings and publish the workflow.