---
layout: page
title: Import User Defined Actions
description: Import User Defined Actions
product: erpconnect-services
parent: installing-the-solution
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=import_user_defined_actions
---

For some functions in the workflows you will need so called **User Defined Actions** which have to be imported before workflow implementation. 

Open *Settings>Nintex Workflow 2013> Manage User Defined Actions* on your Site Collection. 

![ECS-Nintex-TravelScenarios14](/img/content/ECS-Nintex-TravelScenarios14.png){:class="img-responsive"}

First import User Defined Actions **Get Form Detail Rows** (file: Get_Form_Detail_Rows.uda) and **Get User Info** (file: Get_User_Info.uda). 

In the **Travel Request** scenario with User Defined Action *Get Form Detail Rows* any information about flights, hotel costs and other costs entered in Nintex Forms are collected and written in collection variables. In the **Travel Expenses** scenario information about expense types entered in Nintex Forms is collected and further processed. 


![ECS-Nintex-TravelScenarios15](/img/content/ECS-Nintex-TravelScenarios15.png){:class="img-responsive"}

![ECS-Nintex-TravelScenarios16](/img/content/ECS-Nintex-TravelScenarios16.png){:class="img-responsive"}

User Defined Action Get User Info is used in the *Travel Request* workflow to gather information about the workflow initiator from the Active Directory using a LDAP query. Without a connected Active Directory this User Defined Action will not work. To make the LDAP query work, two workflow constants have to be created in the Nintex Workflow Management settings.

Open menu point *Nintex Workflow Management>Manage Workflow Constants* in the SharePoint Central Administration.

![ECS-Nintex-TravelScenarios31](/img/content/ECS-Nintex-TravelScenarios31.png){:class="img-responsive"}

First create variable *AdQueryCreds* by clicking *New*. This variable is directly connected to User Defined Action *Get User Info* and contains user credentials for LDAP administration. 

![ECS-Nintex-TravelScenarios32](/img/content/ECS-Nintex-TravelScenarios32.png){:class="img-responsive"}

After that create workflow constant *ADQueryPath*. This one is also connected to the *Get User Info* action and contains the LDAP path where the user information is stored. 

![ECS-Nintex-TravelScenarios33](/img/content/ECS-Nintex-TravelScenarios33.png){:class="img-responsive"}

After creating the workflow constants these User Defined Actions are ready to use. 

![ECS-Nintex-TravelScenarios17](/img/content/ECS-Nintex-TravelScenarios17.png){:class="img-responsive"}

To sucessfully import User Defined Action **Convert to USD** third-party-addon *Strikeiron Currency Converter* which is available in the Nintex Live catalog must be activated first. 
With this User Defined Action the estimated costs of the travel request are converted from different currencies to US-dollar. You could also configure this action in a way that it converts to Euro.   

On your site collection choose *Settings>Nintex Workflow 2013> Manage User Defined Actions* click *Create* and open the *Nintex Live Catalog*.

![ECS-Nintex-TravelScenarios18](/img/content/ECS-Nintex-TravelScenarios18.png){:class="img-responsive"}

Here you can search for addon *Strikeiron exchange rate and currency converter* and add it to the Workflow Actions toolbox. 

![ECS-Nintex-TravelScenarios19](/img/content/ECS-Nintex-TravelScenarios19.png){:class="img-responsive"}

For the usage of this addon a registration for a free trial period is necessary. You can register [here](). <br>
We recommend to store username and password right after the registration process as workflow constants. <br>
These workflow constants will be used for authorization in the User Defined Action. 

![ECS-Nintex-TravelScenarios29](/img/content/ECS-Nintex-TravelScenarios29.png){:class="img-responsive"}

![ECS-Nintex-TravelScenarios30](/img/content/ECS-Nintex-TravelScenarios30.png){:class="img-responsive"}

After that you can also import User Defined Action *Convert to USD*:

![ECS-Nintex-TravelScenarios20](/img/content/ECS-Nintex-TravelScenarios20.png){:class="img-responsive"}

Clicking once on a User Defined Action the underlying workflow will open. You can adjust the workflow to your individual needs, for example change currency convertion into Euro there. 

![ECS-Nintex-TravelScenarios21](/img/content/ECS-Nintex-TravelScenarios21.png){:class="img-responsive"}