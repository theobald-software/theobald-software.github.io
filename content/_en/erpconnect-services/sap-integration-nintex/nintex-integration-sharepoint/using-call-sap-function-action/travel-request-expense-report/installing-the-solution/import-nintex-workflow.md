---
ref: ecs-sin-nis-tr-installing-the-solution-04
layout: page
title: Import the Nintex Workflow
description: Import the Nintex Workflow
product: erpconnect-services
parent: installing-the-solution
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=import_the_nintex_workflow
---

After creating the SharePoint lists, importing the Nintex Forms files and the User Defined Actions you can import the **Nintex Workflow** files to the SharePoint lists. These files contain the predefined workflows for Travel Requests and Travel Expenses. 

First open SharePoint list *Travel Requests* and openWorkflow *Settings>Create a Workflow in Nintex Workflow* in the *List* menu.

![ECS-Nintex-TravelScenarios22](/img/content/ECS-Nintex-TravelScenarios22.png){:class="img-responsive"}

Import file *Review_Travel_Request_SAP.nwf*  in the Nintex Workflow designer. 

![ECS-Nintex-TravelScenarios23](/img/content/ECS-Nintex-TravelScenarios23.png){:class="img-responsive"}

Afterwards you can publish the workflow. 

![ECS-Nintex-TravelScenarios24](/img/content/ECS-Nintex-TravelScenarios24.png){:class="img-responsive"}

Eventually the Workflow can't be published at first. This might be because some workflow components could not imported or some important background properties like the Active directory are missing or are not customized correctly. In this case you should make these settings first. As long as some configurations are missing, the workflow can only be saved but not published.    

After that open SharePoint list **Travel Expenses** and import workflow file *Create_New_Expense_Report_SAP.nwf*  as you have done with the other workflow. It could also be the case that you first have to configure some components before the workflow can be published.             

