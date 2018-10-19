---
ref: ecs-sin-nis-query-xql-action-02
layout: page
title: Query XQL action with variables
description: Query XQL action with variables
product: erpconnect-services
parent: query-xql-action
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=query-xql-action-with-variables
---

In this sample we will use the Query XQL action in Nintex Workflow to retrieve SAP user details.
We will execute the SAP function module *BAPI_USER_GET_DETAIL* shown below and process several SAP result tables as XQL variables in the workflow. 

The parameter *USERNAME* must be set to run the function module. We would like to process the result tables *PARAMETER, PROFILES* and *RETURN* in our workflow.

![ecs-nintex-usergetdetail-sap](/img/content/ecs-nintex-usergetdetail-sap.jpg){:class="img-responsive"}

We will use the following XQL-statement. 


<details>
<summary>XQL Statement</summary>
{% highlight sql %}
EXECUTE FUNCTION 'BAPI_USER_GET_DETAIL'
EXPORTS USERNAME = 'Elzein'
TABLES RETURN INTO @RETVAL, PROFILES INTO @SAPProfiles, PARAMETER INTO @SAPParameter;
{% endhighlight %}
</details>

At first let us run it in the XtractQL Explorer and check the result.


![ecs-nintex-usergetdetail-xqlexplorer](/img/content/ecs-nintex-usergetdetail-xqlexplorer.jpg){:class="img-responsive"}

Now we will create a custom SharePoint list as shown below.  


![ecs-nintex-usergetdetail-splist0](/img/content/ecs-nintex-usergetdetail-splist0.jpg){:class="img-responsive"}

We will create a Nintex workflow and use the following actions. 

![ecs-nintex-usergetdetail-wf](/img/content/ecs-nintex-usergetdetail-wf.jpg){:class="img-responsive"}

Let us define the following workflow variables to save the SAP result.

![ecs-nintex-usergetdetail-wfvariables](/img/content/ecs-nintex-usergetdetail-wfvariables.jpg){:class="img-responsive"}

In the *Query XQL Action* let us set the field Application Name to an existing ECS Application Name. 

In the field *XQL Query* we insert our XQL Statement. We use the *Insert Reference* button to set the value of the *USERNAME* parameter.

To assign an XQL output Variable (e.g. *@SAPProfiles*) to a workflow variable (e.g. *VarProfiles*), set the variable field to *@SAPProfiles* and click on *Add*. In the list select the workflow variable *VarProfiles*.

![ecs-nintex-usergetdetail-xql-action](/img/content/ecs-nintex-usergetdetail-xql-action.jpg){:class="img-responsive"}

Configure the *Update* Item action to update the list fields using the workflow variables. 

![ecs-nintex-usergetdetail-updateitem](/img/content/ecs-nintex-usergetdetail-updateitem.jpg){:class="img-responsive"}

Now let's create a new item in our list and set the field *SAP User name*. 

![ecs-nintex-usergetdetail-splist1](/img/content/ecs-nintex-usergetdetail-splist1.jpg){:class="img-responsive"}

When the workflow runs, the list fields will be updated with the SAP data. 


![ecs-nintex-usergetdetail-splist2](/img/content/ecs-nintex-usergetdetail-splist2.jpg){:class="img-responsive"}

SAP Errors will be processed in this case too and will be saved to the field *SAP result*. Check the result below for an invalid SAP user.

![ecs-nintex-usergetdetail-splist3](/img/content/ecs-nintex-usergetdetail-splist3.jpg){:class="img-responsive"}