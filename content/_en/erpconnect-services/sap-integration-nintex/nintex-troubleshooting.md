---
ref: ecs-sap-integration-nintex-03
layout: page
title: Nintex Workflow troubleshooting
description: Nintex Workflow troubleshooting
product: erpconnect-services
parent: sap-integration-nintex
permalink: /:collection/:path
weight: 3
lang: en_GB
---

**Error during the installation of the Nintex Workflow Custom Actions**

Although the custom actions have been successfully installed, they do not appear in the Workflow Manager. This may be the cause: 

With newer Nintex Workflow versions, it may be necessary to activate the Workflow Actions explicitly on the respective Site Collection for a new installation and an update (*Repair*). To do this, call the Site Settings of the Site Collection under which you want to use the workflow actions and open the menu option *Nintex Workflow> Manage Allowed Actions*. There you check the three Custom Actions in the category *ERPConnect Services* and save the settings with *OK*. The custom actions are then available in Nintex Workflow. 

If a workflow cannot be published despite a successful installation, this may be due to the following reasons:

When updating the actions (*Repair*), it is also necessary to reactivate the Web application for the Nintex workflow. If this is not done, any newly created workflows cannot be published. Navigate to *Central Administration* and choose *Nintex Workflow Management*. Click on *Web Application Activation*.<br>.
The default Web application should be selected automatically. Click on Activate.

**ECS Custom Actions do not appear**.

If the workflow actions still do not appear in the Nintex administration after successful, error-free installation, please execute the following scripts as administrator in the SharePoint Management Shell (SP2016):

*NWAdmin.exe -o AddAction -nwaFile " C:\Program Files\Common Files\microsoft shared\Web Server Extensions\16\TEMPLATE\FEATURES\ERPConnectServices.NintexWorkflowActions.SP2016_ECSNWA\ReadTable.nwa" -updateIfAdapterExists -activateForFarm -verifyTypes*

*NWAdmin.exe -o AddAction -nwaFile " C:\Program Files\Common Files\microsoft shared\Web Server Extensions\16\TEMPLATE\FEATURES\ERPConnectServices.NintexWorkflowActions.SP2016_ECSNWA\CallBapi.nwa" -updateIfAdapterExists -activateForFarm -verifyTypes*

*NWAdmin.exe -o AddAction -nwaFile " C:\Program Files\Common Files\microsoft shared\Web Server Extensions\16\TEMPLATE\FEATURES\ERPConnectServices.NintexWorkflowActions.SP2016_ECSNWA\ExecuteXQL.nwa" -updateIfAdapterExists -activateForFarm -verifyTypes*

For SP2013 (SP2010 corresponding): <br>
*C:\Program Files\Common Files\microsoft shared\Web Server Extensions\15\TEMPLATE\FEATURES\ERPConnectServices.NintexWorkflowActions.SP2013_ECSNWA*\

            
 
**Error when executing workflows**

A common error occurs when running workflows with the farm administrator user. The workflow stops due to authentication problems. The execution of workflows with a farm administrator user is prevented by SharePoint. Please use another user to execute and approve workflows.   

**Error when writing an XML output to a SharePoint list**

If you want to write an XML output to the column of a SharePoint list and the XML statement does not appear there, it may be because you have not defined the SharePoint column *Multiple lines of text* as *Plain Text*. If you change the column in the Settings to Plain Text, then the text should be displayed. 

**Error when using a Secure Store** 

The use of a Secure Store in the ECS Service Application is currently not supported in conjunction with the Nintex Workflow Custom Actions. No matter which credentials you store in the Secure Store, the administrator account is always used. This is because the impersonation of credentials within a workflow is not supported.  Therefore, please use a service application without Secure Store within the custom actions.   


**Error when executing a function module or BAPI**

If a function module/BAPi cannot be executed, it may be due to incorrectly set parameters. Always test the function module/BAPi on your SAP system first. If a module cannot be executed in Nintex Workflow despite identically set parameters and a successful call in SAP, the following reasons may apply:

- Formatting: SAP requires specific formatting for many fields, for example, the date format must have the form yyyyMMdd. A date that is entered in SharePoint in the format 31.11.9999 cannot therefore be processed and must be reformatted. In Nintex various inline functions (e.g. format date) are available for the reformatting of fields. 
- Locked records/personnel numbers: Data records and personnel numbers locked in SAP can prevent the successful execution of a function module. On the SAP side, check whether there is access to the corresponding table/personnel number/component, and so on. 

Recommendation: Use the custom action to write the return message of the function module back to SharePoint if the function module allows this. This often provides useful information about whether data records could be updated correctly.  

**Function module/BAPI does not return any values with the call SAP Function Custom Action**.

If a function module does not return any values, check the following points

1. Create a new Nintex workflow using the Call SAP Function Custom Action. The custom action should be configured with a very simple SAP standard module (for example, SD_RFC_CUSTOMER_GET) to read SAP data and valid input and output parameters. Does the module return values from SAP? If yes, continue with point two, if no, contact Support. 
2. If the basic functionality of the Call SAP Function Custom Action is ensured, check the return messages from the SAP system within the workflow that returns no values. To do this, map the corresponding message table or structure (usually RETURN) to a workflow variable and log the return in the workflow.      

