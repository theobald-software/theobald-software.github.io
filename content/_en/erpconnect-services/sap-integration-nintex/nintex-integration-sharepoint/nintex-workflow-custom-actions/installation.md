---
layout: page
title: Installation
description: Installation
product: erpconnect-services
parent: nintex-workflow-custom-actions
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=nintex-action-installation
---

**Installing the solution with the installer**

The Theobald Software Nintex Workflow Custom Actions (Query XQL Action, Call SAP Function and Read SAP table) are delivered as a 
installer package together with ERPConnect Services installation. Prerequisite for the implementation of the Custom Actions is a Nintex Workflow Installation on your SharePoint server (supported Versions: 2010 and 2013). 

You find the installation file in the following folder: 
C:\Program Files\ERPConnect Services\ERPConnectServices.NintexWorkflowActions.exe

Follow the installation routine and the solution will be automatically deployed to and activated on SharePoint.


![ECS-Nintex-WorkflowAction_Installation1](/img/content/ECS-Nintex-WorkflowAction_Installation1.png){:class="img-responsive"}

If a previous version is already installed there are the two options *Repair* and *Remove*.

With *Repair* the installed solution will reinstalled/updated that means the prior solution will be retracted and removed and a current solution package will be installed. With *Remove* the solution will be completely deleted on the server.

![ECS-Nintex-WorkflowAction_Installation2](/img/content/ECS-Nintex-WorkflowAction_Installation2.png){:class="img-responsive"}

With newer Nintex Workflow Versions (as of 3.1.4) it is necessary to activate the Custom Actions explicitly on the site collection level. On your site collection go to *Site Settings>Nintex Workflow> Manage Allowed Actions* and mark the checkboxes for the three Custom Actions in the *ERPConnect Services* category. Save your entries with *OK*. Only then the Custom Actions will be available in the Nintex Workflow designer. 

![ECS-Nintex-WorkflowAction_Installation3](/img/content/ECS-Nintex-WorkflowAction_Installation3.png){:class="img-responsive"}

Furthermore for reinstalling/updating the solution using *Repair* it is necessary to (re-)activate the web application for Nintex Workflow. Otherwise there might be problems with workflow publishing. Go to *Central Administration>Nintex Workflow Management>Web Application Activation*. The default web application should be pre selected. Click *activate*.

Installing the solution manually
            
For manual installation solution package *ERPConnectServices.NintexWorkflowActions.wsp* that can be found in the installation folder and must be deployed and activated. 

Add the solution package using the SharePoint Management Shell:<br>
add-spsolution -LiteralPath "C:\Program Files\ERPConnect Services\ERPConnectServices.NintexWorkflowActions.sp20XX.wsp"   

Uninstalling the solution manually

In case you reinstall the solution package you first have to retract and remove the outdated version. 

To retract the deployed solution go to Central Administration->System Settings->Manage farm solutions->ERPConnectServices.NintexWorkflowActions.wsp and select Retract Solution. 

Tor remove the solution using the SharePoint Management Shell:<br>
remove-spsolution -identity "ERPConnectServices.NintexWorkflowActions.sp20xx.wsp"

The custom actions are still available in the Nintex Actions administration. To completely remove them, run the following SharePoint Management Shell commands:<br> 
NWAdmin.exe -o RemoveAction -adapterType ERPConnectServices.NintexWorkflowActions.ReadTableAdapter<br>
NWAdmin.exe -o RemoveAction -adapterType ERPConnectServices.NintexWorkflowActions.CallBAPIAdapter<br>
NWAdmin.exe -o RemoveAction -adapterType ERPConnectServices.NintexWorkflowActions.ExecuteXQLAdapter

**Deploy the solution Package**

1. Navigate to *Central Administration* and click on *System Settings*.
2. Click on *Manage farm solutions* in the *Farm Management* section.
3. Click on *ERPConnectServices.NintexWorkflowActions.wsp* and then click *Deploy Solution* in the toolbar.
4. Ensure that *All content Web applications* is selected in the *Deploy To*? section and click *OK*.
5. After a short delay, you will be returned to the *Solution Management page*. 
   *ERPConnectServices.NintexWorkflowActions.wsp* should now appear as deployed.


**Activate the feature [prior to version 1.1.178]** 

1. Navigate to *Central Administration* and go to *Site Settings*.
2. Click *Manage Site* features in the *Site Actions* section.
3. Navigate to *ERPConnect Services Nintex Workflow Actions* and click *Activate*.
4. After a short interval, the page will refresh and the status will become *Active*.

            
**Activate the feature [as of version 1.1.178]** 

1. Navigate to *Central Administration* and go to *Application Management*.
2. Click *Manage web applications* and select the SharePoint site you want to activate the solution on.
3. In the menu bar navigate to *Manage features* and click *Activate next* to the *ERPConnect Services Nintex Workflow Actions*.
4. After a short interval, the page will refresh and the status will become *Active*.                  
            
**Activate Custom Actions on site collection [as of Nintex Workflow version 3.1.4]**

1. On your site collection navigate to *Site Settings>Nintex Workflow> Manage Allowed Actions*
2. Mark the  checkboxes for the Custom Actions in category *ERPConnect Services*. 
3. Save your entries with *OK*.


**Web Application Activation**        

1. Navigate to *Central Administration* and select *Nintex Workflow Management*.
2. Click on *Web Application Activation*. The default web application should be automatically preselected. 
3. Click *Activate*.