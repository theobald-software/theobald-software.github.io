---
layout: page
title: Nintex Workflow Troubleshooting (only for SharePoint On-Prem)
description: Nintex Workflow Troubleshooting (only for SharePoint On-Prem)
product: erpconnect-services
parent: nintex-integration-sharepoint
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=nw-troubleshooting
---

**Errors when installing Nintex Workflow Custom Actions**

Despite sucessful installation of the Custom Actions they do not occur in the Nintex Workflow manager. This could be the cause:

With newer Nintex Workflow Versions (as of 3.1.4) it is necessary to activate the Custom Actions explicitely on the site collection level. On your site collection go to Site *Settings>Nintex Workflow> Manage Allowed Actions* and mark the checkboxes for the three Custom Actions in the *ERPConnect Services* category. Save your entries with OK. Only then the Custom Actions will be available in the Nintex Workflow designer.

If a workflow can't be published after sucessfull installation and activation of the Custom Actions this could have the following reason:

After reinstalling/updating the solution using the *Repair* option it is necessary to (re-)activate the web application for Nintex Workflow. Otherwise there might be problems with workflow publishing. Go to *Central Administration>Nintex Workflow Management>Web Application Activation*. The default web application should be pre selected. Click activate.   

**ECS Custom Actions do not appear** 

If the ECS workflow actions still do not appear in the Nintex administration after a successful, error-free installation, please run the following scripts as an administrator in the SharePoint Management Shell (SP2016):


*NWAdmin.exe -o AddAction -nwaFile " C:\Program Files\Common Files\microsoft shared\Web Server Extensions\16\TEMPLATE\FEATURES\ERPConnectServices.NintexWorkflowActions.SP2016_ECSNWA\ReadTable.nwa" -updateIfAdapterExists -activateForFarm -verifyTypes*

*NWAdmin.exe -o AddAction -nwaFile " C:\Program Files\Common Files\microsoft shared\Web Server Extensions\16\TEMPLATE\FEATURES\ERPConnectServices.NintexWorkflowActions.SP2016_ECSNWA\CallBapi.nwa" -updateIfAdapterExists -activateForFarm -verifyTypes*

*NWAdmin.exe -o AddAction -nwaFile " C:\Program Files\Common Files\microsoft shared\Web Server Extensions\16\TEMPLATE\FEATURES\ERPConnectServices.NintexWorkflowActions.SP2016_ECSNWA\ExecuteXQL.nwa" -updateIfAdapterExists -activateForFarm -verifyTypes*

The path should be adapted for SP2013 (and SP2010 accordingly):<br>
*C:\Program Files\Common Files\microsoft shared\Web Server Extensions\15\TEMPLATE\FEATURES\ERPConnectServices.NintexWorkflowActions.SP2013_ECSNWA\*


**Errors when executing workflows or approving workflow tasks**

A common error often occurs if a workflow is executed or a workflow task is approved with the farm administrator user. The workflow then regularly gets stuck because of authorization problems. This is because executing workflows with farm administrator user is not supported in SharePoint. Please use other users for executing and approving workflows. 


**Error when writing XML-output in a SharePoint list**

If you try to write a XML output variable in SharePoint list field and the text does not appear this could be because of a wrong formatting of the SharePoint list column. If you haven't configured SharePoint column *Multiple lines of text* as *Plain text* there might be problems with displaying the text. Change the settings and it should work. 

**Error when calling a Custom Action**

When calling a Custom Action and using a secure store for authorization in the ECS service application there might be problems within multilevel workflows (e.g. state machine action). Because the workflow is interrupted by the different workflow stages the user context can get lost on the way and authorization is not possible any more within the secure store. The workflow stops without specific reference. As a workaround we recommend to rebuild the workflow as a single stream of actions instead of using the multilevel action state machine. Another possible solution is to switch secure store authorization off for the service application you use in the custom action.    

**Errors when calling function modules/BAPIs**

If a function module/BAPI can't be executed or doesn't show any return values it might be because of wrong input parameters. Please always test a function module/BAPI in your SAP system before using it in a Custom Action. If a function module can't be executed despite identically set parameters and sucessful call in ypur SAP system this might have something to do with the following reasons: 

- Formatting: SAP requires specific formatting for many table fields. For example the date format must have the form yyyyMMdd. If you try to use date format dd.mm.yyyy as an SAP input parameter that won't work. You first have to reformat the values into a SAP-compliant format. In Nintex Workflow different inline functions /e.g. format date) are available for formatting.
- Locked data records or personell numbers: Locked data records/ personell numbers can prevent the sucessful execution of a funtion module/BAPI. Check if  all possible tables, personell numbers, components etc. are accessible.   

Reccomendation: Create a return message by using an output parameter if the function module/BAPI supports this. This will give you useful advice on how and if data sets could be processed in the underlying SAP System. 

**Function module/BAPI does not return any values with the Call SAP Function Custom Action**

If a function module does not return any values, please check the following points

1. Creation of a new Nintex Workflow using the Call SAP Function Custom Action. The custom action should be configured with a very simple SAP standard module (for example, SD_RFC_CUSTOMER_GET) for reading SAP data andvalid input and output parameters. Does the module return values from SAP? If yes, continue with point two, if no, then please contact support.

2. If the basic functionality of the Call SAP Function Custom Action is ensured, check the return messages from the SAP system within the workflow that does not return any values. To do this, map the corresponding message table or structure (usually RETURN) to a workflow variable and log the return in the workflow.   