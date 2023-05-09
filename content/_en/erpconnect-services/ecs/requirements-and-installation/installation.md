---
ref: ecs-requirements-and-installation-02
layout: page
title: Installation
description: Installation
product: erpconnect-services
parent: requirements-and-installation
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-installation
---

You can download and install the ERPConnect Services product from the download page at [www.theobald-software.com](https://www.theobald-software.com).

In this page you will find information about the following topics:

-Installation using the Wizard<br>
-Client Installation<br>
-Installation using WSP Packages<br>
-SharePoint Farm<br>

Before you start (all SharePoint versions):

- In a SharePoint farm the installation must be executed on the SharePoint server hosting the **Central Administration**.
- The **SharePoint Administration service** must be started to be able the install ERPConnect Services.
- The **SharePoint Timer service** must be started to be able the install ERPConnect Services.
- The user who runs the installation routine must be a member in the **SharePoint Farm Administrators** group. 
- On a SharePoint server the **Microsoft SharePoint Foundation Web Application Service** must be started to be able to start the ERPConnect Service
                  

**Installation using the Wizard**

Start the installation by running the installer for SharePoint: **ERPConnectServicesSetup20XX.exe**


The **Welcome** page of the **Setup Wizard** will come up.

![ECS-Setup-Welcome](/img/content/ECS-Setup-Welcome.PNG){:class="img-responsive" }

Select the *Next* button to proceed.

On the *License Agreement* page, review the license terms of the product, then select I *Agree* to proceed.

![ECS-Setup-License](/img/content/ECS-Setup-License.PNG){:class="img-responsive" }


On the *Choose Install Location* page of the wizard, select the file location for the ERPConnect Services components. The default location is *C:\Program Files\ERPConnect Services.* 

![ECS-Setup-Location](/img/content/ECS-Setup-Location.PNG){:class="img-responsive" }

Select *Next* to proceed.

On the *Choose Components* page of the wizard, select the components you wish to install on your machine.

![ECS-Setup-Components](/img/content/ECS-Setup-Components.png){:class="img-responsive" }

Select *Next* to proceed.

Note that the ERPConnect Services runtime component should only be installed on a SharePoint server and you need to make sure that the *SharePoint 2010 Administration service* is started. 

![ECS-Setup-Important-Message](/img/content/ECS-Setup-Important-Message.PNG){:class="img-responsive" }

Select *Next* to proceed or use the *Back* button to change your component selection.

The components will now be installed on your system. You should see a message indicating that the Setup was completed successfully.

![ECS-Setup-Completed](/img/content/ECS-Setup-Completed.PNG){:class="img-responsive" }

Select *Next* to proceed to the final page of the wizard.

![ECS-Setup-Finish](/img/content/ECS-Setup-Finish.PNG){:class="img-responsive" }

Select the *Finish* button to complete the wizard. The components are now installed on your machine and you can launch the *BCS Connector Designer* and WebService Designer from your Start menu.

                        
**Client Installation**

A client installation installed the client components of ERPConnect Services and can be run on any windows machine (e.g. Windows 7 or 8) and must not be on a SharePoint server. 
For the client installation select one or both components on the Choose Components page of the installation wizard :

- ERPConnect Services Client: to install the ECS Runtime Client dll.
- BCS Connector Designer: to install the BCS Connector.
- WebService Designer: to install the WebService Designer (WS Designer).

![ECS-Setup-Client-Components](/img/content/ECS-Setup-Client-Components.png){:class="img-responsive" }


**Installation using WSP Packages**

Instead of using the Installation wizard you can optionally install ERPConnect Services manually using the WSP packages.
Running a Client Installation comes with the WSP packages in the installation folder. 

To install ERPConnect Services runtime you need the following WSP Packages.

- *ERPConnectServices.LicenseManager.wsp:* to install the License Manager of ERPConnect Services Runtime.
- *ERPConnectServices.wsp:* to install ERPConnect Services Runtime.
- *ERPConnectServices.BCSConnector.wsp:* to install the BCS Connector Runtime.
- *ERPConnectServices.WebServiceDesigner.wsp:* to install the WebService Designer Runtime. 

The following WSP Packages are optional:

- *ERPConnectServices.NintexWorkflowActions.SP20XX.wsp:* to install the Nintex Workflow Actions of ERPConnect Services Runtime.
- *ERPConnectServices.WebDemos.wsp:* to install ERPConnect Services Web Demos.
- *ERPConnectServices.WebParts.wsp:* to install ERPConnect Services Web Parts.

To install ERPConnect Services using WSP Packages do the following steps:

*Step 1: copy the wsp files to the SharePoint Server*.<br>
To install ECS Runtime on the SharePoint Server log in as Administrator and copy the necessary wsp files ERPConnectServices.wsp and ERPConnectServices.LicenseManager.wsp
to a folder, e.g. C:\Program Files\ERPConnect Services.

*Step 2: Add the Solutions to SharePoint Farm in the following order*<br>
Run the SharePoint Management Shell as Administrator and add the Solutions in this order: <br>
*Add-SPSolution -LiteralPath "C:\Program Files\ERPConnect Services\ERPConnectServices.LicenseManager.wsp"*
*Add-SPSolution -LiteralPath "C:\Program Files\ERPConnect Services\ERPConnectServices.wsp"*

Add-SPSolution -LiteralPath "C:\Program Files\ERPConnect Services\ERPConnectServices.BCSConnector.wsp"
Add-SPSolution -LiteralPath "C:\Program Files\ERPConnect Services\ERPConnectServices.WebServiceDesigner.wsp"


![ECS-Setup-WSP-01](/img/content/ECS-Setup-WSP-01.png){:class="img-responsive" }


In SharePoint Central Administration (System Settings -> Manage farm solutions) check that the Solutions have been added.

![ECS-Setup-SP-CA-Solutions-01](/img/content/ECS-Setup-SP-CA-Solutions-01.png){:class="img-responsive" }

*Step 3: Deploy Solution Globally*<br>
The Solutions can be deployed either using  SP Central Administration (System Settings -> Manage farm solutions) or using the SP Management Shell:

*Install-SPSolution -Identityerpconnectservices.licensemanager.wsp -GACDeployment*<br>
*Install-SPSolution -Identity erpconnectservices.wsp -GACDeployment*<br>
*Install-SPSolution -Identity erpconnectservices.bcsconnector.wsp -GACDeployment*<br>
*Install-SPSolution -Identity erpconnectservices.webservicedesigner.wsp -GACDeployment*<br>

![ECS-Setup-WSP-02](/img/content/ECS-Setup-WSP-02.png){:class="img-responsive" }


In SharePoint Central Administration (System Settings -> Manage farm solutions) check that the Solutions have been deployed.

![ECS-Setup-SP-CA-Solutions-02](/img/content/ECS-Setup-SP-CA-Solutions-02.png){:class="img-responsive" }

**SharePoint farm**

In a farm with many (APP and WFE) servers, ECS must be installed on the server with the **CA (Central Administration)** website. 
The ERPConnect Service will be started automatically on the installation server. 
On a SharePoint server the Microsoft SharePoint Foundation Web Application Service must be started to be able to start the ERPConnect Service.

**Starting and Stopping services**

On the other farm servers the ERPConnect Service can be started and stopped manually as needed.
Go to CA -> System Setting -> Manage services on servers and select the server to see the list of the installed services that can be started and stopped. 

**Installing an ERPConnect service instance on a new farm server**

To install an ERPConnect Service instance on a new server added to the sharepoint farm, start the ECS Support Tool, go to the Servers tab, select the server and select the option from the context menu. 

In a SharePoint farm the ERPConnect Services Runtime and the BCS Connector Runtime will be globally installed. 

**SharePoint farm installation for SharePoint 2016 (MinRole server role concept)**

Please install ERPConnect Services on the SharePoint server with the Central Administration. It doesn't matter which server role this server has, also shared roles are supported.  After the installation process please take a look in Central Administration -> Application Management  -> Manage services on server if the ERPConnect Service is listed there. It should be available there and marked as Not Compliant. With Fix or Stop you deactivate the service.  

![ECS-Setup-SP-Farm_Services.png](/img/content/ECS-Setup-SP-Farm_Services.png){:class="img-responsive" }

**Restarting the SharePoint Server**<br>
Each SharePoint server, on each ERPConnect services has been installed, must be restarted.

**ECS Support Tool**<br>
In the installation folder you will find the tool **ERPConnectServices.SupportTool.exe**. This is a support tool and shows essentially only the information that can be changed using the SharePoint Central Administration (CA), except for the logging information and WCF service. The tool is used in case of access via CA is not possible.
Please note that executing the ECS Support Tool is possible only with users that have administrator rights. After executing the Support Tool a popup window appears where you have to authenticate as administrator. 
   

**Check the installation**

To check that the installation is successful go to the central administration and check the area ERPConnect Services.
In the second step [create an ECS Service Application]().

Verify that the ERPConnect Service is started (especially *SP2016*): <br>
System Settings -> Servers -> Manage services on Server -> ERPConnect Services -> Start

![ECS-Setup-SP-CA](/img/content/ECS-Setup-SP-CA.png){:class="img-responsive" }



 


            
**ERPConnect Services Runtime dll files**<br>

The files for the **ERPConnect Services Runtime** will be located in the installation folder that you specify during the Setup.

The main dll files of the ECS Runtime are listed here:

|                                       |                                                 |
|---------------------------------------|-------------------------------------------------|
| ERPConnect35.dll                      | ERPConnect assembly for .NET 3.5                |
| ERPConnect45.dll                      | ERPConnect assembly for .NET 4.5                |
| ERPConnectServices.Server.dll         | ERPConnect Services core functionality          |
| ERPConnectServices.Server.Common.dll  | ERPConnect Services core functionality (client) |
| ERPConnectServices.Client.dll         | ERPConnect Services client assembly (desktop)   |
| ERPConnectServices.Client.WinRT45.dll | ERPConnect Services client assembly (Win RT)    |