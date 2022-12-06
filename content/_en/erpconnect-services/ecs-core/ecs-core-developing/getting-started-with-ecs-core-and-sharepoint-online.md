---
ref: ecs-core-developing-01
layout: page
title: Getting started with ECS Core and SharePoint Online
description: Getting started with ECS Core and SharePoint Online
product: erpconnect-services
parent: ecs-core-developing
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=getting-started-with-ecs-core-and-sharepoint-online
---

This sample integrates SAP data in SharePoint Online (Office 365) by means of ECS Core. The tools used to setup the sample are Napa Office 365 Development Tools and the Azure Portal.

ECS Core enables you to read and write SAP data. This article provides the procedures for how you can read data from SAP.

**Before you start** 

This samples requires the following:

- An Office 365 Developer Site in an Office 365 domain and the rights to create and install a Napa-App.
- A Service Bus instance in the Azure Management Portal.
- An ECS Core Instance installation and configuration, in particular:  
		- Create a Service Application (i.e. SAP Connection), refer to [Services](../administration/services).<br> 
		- Generate an API Key, refer to [API Keys](../administration/settings/api-keys).<br>
		- Add a Service Bus registration, refer to [Azure Service Bus](../access-via-azure-service-bus/azure-service-bus-settings). <br>

*Remark*: Other middleware software or tools like e.g. SAP Gateway or SAP Gateway for Microsoft are not needed for this scenario. 

**Step 1: Create a NAPA App**

By using Napa, you can create your SharePoint Add-ins inside your browser instead of in Visual Studio. At any time, you can download your project and open it in Visual Studio for more advanced scenarios.

You need to have a SharePoint Online subscription that you can use for development. Otherwise, skip to Install Napa. If your subscription was not originally created as an Office 365 Developer Site, you have to create a Developer Site in the Administration UI of the subscription and then install Napa in it. 
To install Napa, open your Developer Site and choose Site Contents > add an add-in > SharePoint Store. In the store, search for Napa and install it. (If you have an Office 365 Developer Site, Napa may have already been installed when the site was created and you will see it on the Site Contents page.)

**Create a SharePoint Add-in project**

Open the Napa add-in on the Office 365 page.

![ecscore-gettingstarted-01](/img/content/ecscore-gettingstarted-01.png){:class="img-responsive"}

Choose the Add New Project tile, and then choose the Add-in for SharePoint tile.

![ecscore-gettingstarted-02](/img/content/ecscore-gettingstarted-02.png){:class="img-responsive"}

![ecscore-gettingstarted-03](/img/content/ecscore-gettingstarted-03.png){:class="img-responsive"}

Name the project SAPMaterials, and then choose the Create button.
The code editor opens and shows the default webpage, which already contains some sample code that you can run without doing anything else.

**Step 2: Edit the home page (Default.aspx)**

On the left side of the page under the Pages folder, choose the Default.aspx page if it isn’t already selected. The Default.aspx webpage appears in the code editor. 

In the PlaceHolderAdditionalPageHead section, add those 2 lines to add a reference to Theobald JavaScript library (tEcs):

In this sample we used the current version src="//static.theobald-software.com/theobald.ecs/4.10.2/theobald.ecs.js"

*Important:* please check and use the latest version of tEcs, where newest changes and improvements are incorporated! Please visit: [https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html](https://cdn-files.theobald-software.com/static/theobald.ecs.micro/5.7.0/index.html)

![ecscore-gettingstarted-04](/img/content/ecscore-gettingstarted-04.png){:class="img-responsive"}

In the PlaceHolderMain section, add the following code under the existing HTML.

![ecscore-gettingstarted-05](/img/content/ecscore-gettingstarted-05.png){:class="img-responsive"}

The HTML creates these controls: 
An input that contains the input data (e.g. SAP material number) in the web page of the SharePoint Add-in.
A button for reading the material description from SAP. 
A div that contains the result. 

**Step 3: Add Javascript code for SAP connectivity**

In this procedure, you’ll add some JavaScript code so that users can connect SAP and read SAP material data from the Table MAKT data in the SharePoint Add-in.
Choose the Scripts folder, and then choose the App.js link.

The default JavaScript code file from the project template opens for editing. This file contains the code that's used in your SharePoint Add-in. You could add another .js file and add code to it instead of to the existing file. But, for this example, add it to the App.js file that's provided.

In the next step, you’ll define the function for the button control that you created in the previous procedure.
GetSAPData(): to connect SAP and read SAP data.

In the App.js file, add the following code to the $(document).ready() function to set a handler for the button click event:

![ecscore-gettingstarted-06](/img/content/ecscore-gettingstarted-06.png){:class="img-responsive"}

Note: Error squiggles may appear but they'll disappear later.

Add the following code after the $(document).ready() function in App.js.


![ecscore-gettingstarted-07](/img/content/ecscore-gettingstarted-07.png){:class="img-responsive"}

Let us put the basic code to call SAP through AzureBus and ECS Core:
- connection.ecs.coreApiKey must be be retrieved from your ECS Core installation.
- connection.ecs.url consists of Azure Service Bus name for ECS Core
The 'data'-field contains the SAP statement (using XtractQL) to get the German and English material description from the SAP table MAKT. 

A table is used to display the result. <br>
For more information about the code to connect SAP and extract the data refer to the online help and to our JavaScript library [tEcs](http://static.theobald-software.com/theobald.ecs.micro/5.4.2/).<br>
In this sample we read data from an SAP table. To execute an SAP function module check the following section [Executing an SAP function](./executing-an-sap-function). 

**Step 4: Run the app**

At the left side choose the run button.<br>
The project is packaged, deployed, and installed on your Office 365 Developer Site.

![ecscore-gettingstarted-08](/img/content/ecscore-gettingstarted-08.png){:class="img-responsive"}

After installation, the SharePoint Add-in starts. If the add-in doesn’t start automatically because, for example, a popup blocker is enabled, choose the add-in link to start the add-in.
The screen for the SharePoint Add-in appears.

![ecscore-gettingstarted-09](/img/content/ecscore-gettingstarted-09.png){:class="img-responsive"}

Now enter some material number and click on the button. 
The result will be fetched from SAP and displayed. 
When you finish, close the browser window, and then choose the Close button in Launch Add-in window to return to the project that you were editing.

![ecscore-gettingstarted-10](/img/content/ecscore-gettingstarted-10.png){:class="img-responsive"}