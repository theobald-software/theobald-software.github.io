---
layout: page
title: Create a Nintex Workflow for Office 365
description: Create a Nintex Workflow for Office 365
product: erpconnect-services
parent: nintex-workflow-for-office-365
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=create_a_nintex_workflow_for_office365
---

First create a new custom SharePoint list in Office 365 with the following properties:

Typ = **Custom List**

Name = **Purchasing Requests**


Add the following columns to the list:
 

**Material**: Single line of text (rename the default Title column to Material), required 

**Plant**: Single line of text, required

**Quantity**: Number, required

**Delivery Date**: Date only, required

**Cost Center**: Single line of text, required 

**Purchase Requisition ID**: Single line of text

After that navigate to List-> Settings > **Nintex Workflow** and select Create new workflow. A new list workflow related to the above created SharePoint list will be created then. 

First add the following three workflow actions in the Nintex Workflow Designer:

**Assign** (from the **User interaction** group)

**Create dictionary** (from the **Operations** group)

**Call HTTP web service** (from the **Integration** group)

![ECS-Nintex-Office365-1EN](/img/content/ECS-Nintex-Office365-1EN.png){:class="img-responsive"}

Configure the **Request approval** action with the following properties:

**Participant**     = ApprovalManagers (group of approvers)<br>
**Task Title**       = Approve Purchase Requisition<br>
**Related Item**  = Current Item<br>

All the other settings are optional. Confirm your entries with **Save**.

![ECS-Nintex-Office365-2EN](/img/content/ECS-Nintex-Office365-2EN.png){:class="img-responsive"}

Configure the **Create dictionary** action: 


The dictionary contains the header data for the web service call. We highly recommend to test the web service in a REST client before trying to call it in a Nintex Workflow. More detailed information about that can be found here.

These entries are required:

**Authorization**: APIKEY [BASE64 encoded ECS Core API-key]<br>
**Accept**: application/json<br>
**Content-Type**: application/json<br>

Save the dictionary in workflow variable **RequestHeader**.

![ECS-Nintex-Office365-4EN](/img/content/ECS-Nintex-Office365-4EN.png){:class="img-responsive"}

After that configure workflow action **Call HTTP web service**.  

The following entries have to be set:

**Adress**: Web service URL including input parameters. For the parameter values insert references to the corresponding columns of the SharePoint list.<br>  
**Request Type**: POST<br>  
**RequestHeaders**: workflow variable *RequestHeader*<br>
**Response Content**: workflow variable *ResponseContent*<br>	
**Response Status Code**: workflow variable *Result*

![ECS-Nintex-Office365-5EN](/img/content/ECS-Nintex-Office365-5EN.png){:class="img-responsive"}

The workflow would be fully functional by now but in this scenario the document number of the newly created purchase requisition should be written back to the SharePoint list.  
In the web service, return parameter *ReqItemID* has been created therefore and is displayed in the response content. 

Add the following workflow actions to your workflow:

**Get an Item from a dictionary** (from the **Operations** group)<br> 
**Set field in current item** (from the **Libraries and Lists** group)

Optionally you may also add the **Log in history list** action between both workflow actions:  

![ECS-Nintex-Office365-6EN](/img/content/ECS-Nintex-Office365-6EN.png){:class="img-responsive"}

First configure the **Get an Item from a dictionary** action. 

**Dictionary**: Workflow variable ResponseContent<br>
**Item name or path**: result 	(This has the effect that only the result part of the dictionary that contains the document number will be extracted)<br>
**Output**: Workflow variable *RequestItemID* <br>

![ECS-Nintex-Office365-8EN](/img/content/ECS-Nintex-Office365-8EN.png){:class="img-responsive"}

Optionally you may log workflow variable *RequestItemID* in the workflow history list. 

With workflow action **Set field in current** item we want to write the document number in workflow variable *RequestItemID* back to the SharePoint list: 

**Field**: Purchase Requisition ID<br>
**Value**: Workflow variable *RequestItemID*	

![ECS-Nintex-Office365-9EN](/img/content/ECS-Nintex-Office365-9EN.png){:class="img-responsive"}

Save your entries and publish the workflow. 