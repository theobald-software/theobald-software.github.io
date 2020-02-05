---
ref: ecs-sin-nis-business-connectivity-04
layout: page
title: Create a Nintex Workflow
description: Create a Nintex Workflow
product: erpconnect-services
parent: using-business-connectivity-services-bcs-and-external-lists
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=create-a-nintex-workflow
---

Navigate to the Material Maintenance Requests list and under List -> Workflow Settings select Create a Workflow in Nintex Workflow 

![Nintex-SP-List-Create-WF](/img/content/Nintex-SP-List-Create-WF.png){:class="img-responsive"}

Select Blank as the workflow template.
Add two actions to the workflow as shown below:

- Request approval 
- Create item 

![Nintex-SP-List-Initial-WF](/img/content/Nintex-SP-List-Initial-WF.png){:class="img-responsive"}

Configure the Request approval action with the following properties:

- Approvers = SHAREPOINT2010\manager
- Approval options = Only one approval is required

![Nintex-SP-List-WF-Action-RA](/img/content/Nintex-SP-List-WF-Action-RA.png){:class="img-responsive"}

Save the workflow action.

Configure the Create Item action:<br>
Add the fields that are required to create a new item to the action. Using the Insert Reference button next to each field, you can select the Item Properties of the Material Maintenance Request list as shown below.

![Nintex-SP-List-WF-Action-Create-Item](/img/content/Nintex-SP-List-WF-Action-Create-Item.png){:class="img-responsive"}

Save the workflow action.

From the workflow ribbon, select Workflow Settings -> Workflow Settings 

![Nintex-SP-List-WF-Settings](/img/content/Nintex-SP-List-WF-Settings.png){:class="img-responsive"}

Change the option Start when items are created to Yes. 

![Nintex-SP-List-WF-Settings-2](/img/content/Nintex-SP-List-WF-Settings-2.png){:class="img-responsive"}

Save and then Publish the workflow. 