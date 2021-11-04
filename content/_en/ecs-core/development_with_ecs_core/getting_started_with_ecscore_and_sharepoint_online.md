---
ref: ecs-core-developing-01
layout: page
title: Getting started with ECS Core and SharePoint Online
description: Getting started with ECS Core and SharePoint Online
product: ecs-core
parent: development_with_ecs_core
permalink: /:collection/:path
weight: 1
lang: en_GB
---

This example shows how to integrate data from an on-premises SAP system into SharePoint Online (Office 365) using ECS Core. The following tools are also used: Napa Office 365 Development Tools and the Azure Portal.

ECS Core enables integration with SAP, both read and write. This example shows how to transfer SAP data to SharePoint Online. 

**Before you start** 

This example requires the following prerequisites: 

1. An Office 365 Developer Site in an Office 365 domain and the rights to develop a Napa App.
2. An Azure Relay instance in the Azure Management Portal.
3. an ECS core installation and configuration, in particular:  
- Create an SAP connection, see [SAP Connections](../ecscore-administration/sapconnections). 
- Generate an API key, see [API Keys](../ecscore-administration/settings/api_keys).
- Register an Azure Relay, see [Azure Relay](../ecscore-administration/settings/azure_relay). 

*Note*: Other middleware tools, in particular SAP Gateway or SAP Gateway for Microsoft, are not required for this scenario. 

**Step 1: Creating a NAPA App**  

With Napa, you can develop a SharePoint add-in inside the browser instead of Visual Studio. At any time you can download the project and continue working with Visual Studio for advanced scenarios.

You need a SharePoint Online Subscription to develop a Napa application. If this is not the case, you can create a developer site in the Administration UI of your subscription and then install Napa. 

To install Napa, open your Developer Site and select Site Contents > add an add-in > SharePoint Store. Search the store for Napa and install it. (If you have an Office 365 Developer site, Napa may already be installed. You would find this under Site Contents.)

**Create a SharePoint Add-in project** 

Open the Napa Add-in on your Office 365 or SharePoint Online page.

![ecscore-gettingstarted-01](/img/content/ecscore-gettingstarted-01.png){:class="img-responsive"}

Select *Add New Project* and then *Add-in for SharePoint*.

![ecscore-gettingstarted-02](/img/content/ecscore-gettingstarted-02.png){:class="img-responsive"}

![ecscore-gettingstarted-03](/img/content/ecscore-gettingstarted-03.png){:class="img-responsive"}

Enter a name, such as SAPMaterials, and click *Create*.
The Code Editor opens and displays the default Web page with an example code. 

**Step 2: Edit the Home Page (Default.aspx)**

On the left, under the Pages folder, select the Default.aspx page.  

In the *PlaceHolderAdditionalPageHead* section, add the following line as a reference to the Theobald JavaScript library (tEcs):

In the example we are using version 4.10.2: src="//static.theobald-software.com/theobald.ecs/4.10.2/theobald.ecs.js"

Important: Please always use the latest version of tEcs, which contains the latest changes and improvements. See: [http://static.theobald-software.com/tEcs/](http://static.theobald-software.com/tEcs/)

![ecscore-gettingstarted-04](/img/content/ecscore-gettingstarted-04.png){:class="img-responsive"}

In the section *PlaceHolderMain* insert the HTML code below. 

![ecscore-gettingstarted-05](/img/content/ecscore-gettingstarted-05.png){:class="img-responsive"}

The HTML code defines the following controls:             

- An input field (for example, SAP material number) in the web page of the SharePoint add-in.
- A button to trigger the read process of the SAP data. 
- A div-control for the result. 

**Step 3: Insert JavaScript code for calling the SAP table**. 

Now we need JavaScript code to establish the SAP connection and fetch SAP material descriptions from the SAP table MAKT to the SharePoint add-in.
Select the Scripts folder, and then select *App.js*.

The JavaScript file App.js contains the code for your SharePoint add-in. You can insert a new JavaScript file or, as in our case, use the existing file. 

In the first step we define under the function $(document).ready() that the following function should be called when clicking on the button
GetSAPData(): Reads SAP data from table MAKT.

![ecscore-gettingstarted-06](/img/content/ecscore-gettingstarted-06.png){:class="img-responsive"}

Remark: Red, wavy underscores may appear as an indication of errors, but will disappear later.  

Now insert the code for the GetSAPData() function after the $(document).ready() function.

![ecscore-gettingstarted-07](/img/content/ecscore-gettingstarted-07.png){:class="img-responsive"}

Let's take a closer look at the code we use to access the on-premises SAP system via Azure Relay and ECS Core:
- connection.ecs.coreApiKey is the API key from your ECS Core installation.
- instance: is the name of the maintained SAP connection in ECS Core.
- connection.ecs.url is the Azure Relay Name for ECS Core.
  The 'data' field contains the SAP expression (in [XtractQL]()) to read the German and English material description from the SAP table MAKT. 

The result is displayed using a table. 

For more information about the code, see our Online Help and our JavaScript library [tEcs]().
In this example, we have read data from an SAP table. The [next example]() shows how to call an SAP function module.  

**Step 4: Execute**

On the left side click on the button *run*. 
The project will now be installed on your Office 365 Developer Site.

![ecscore-gettingstarted-08](/img/content/ecscore-gettingstarted-08.png){:class="img-responsive"}

After the installation the SharePoint Add-In starts. If the add-in does not start automatically, e.g. because a pop-up blocker is activated, click on the add-in link to start the add-in. 

![ecscore-gettingstarted-09](/img/content/ecscore-gettingstarted-09.png){:class="img-responsive"}

Now enter a material number and click on the button.  
The result is retrieved from SAP and displayed.  

![ecscore-gettingstarted-10](/img/content/ecscore-gettingstarted-10.png){:class="img-responsive"}