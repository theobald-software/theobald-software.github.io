---
layout: page
title: Call SAP Function Action in a workflow
description: Call SAP Function Action in a workflow
product: erpconnect-services
parent: call-sap-function-action
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=call_sap_function_action_in_a_workflow
---

For using the *Call SAP Function* Nintex Workflow Custom Action browse for the action *Call SAP Function* in the Nintex Workflow Manager or open the menu item *ERPConnect Services* on the left side. All the Custom Actions provided by Theobald Software are listed there. Via drag & drop the Custom Actions can be added to the workflow.


![ECS-Nintex-CallSAPFunction-Action2](/img/content/ECS-Nintex-CallSAPFunction-Action2.png){:class="img-responsive"}

After adding the Custom Action to the workflow you have to configure it. Select *Configure by* using the dropdown list in the Custom Action box.   

![ECS-Nintex-CallSAPFunction-Action3](/img/content/ECS-Nintex-CallSAPFunction-Action3.png){:class="img-responsive"}

In the configuration screen you first have to select the ERPConnect Service Application for your SAP system in the dropdown list. The ERPConnect Service Application must be created in the Central Administration: Creating an [ECS Service Application](../../../../ecs/configuration/creating-an-ecs-service-app) 

In the *SAP Function* field you have to define the SAP function module or BAPI which should be called. You can use the *Search* button to search for BAPIS/function modules on your SAP system.


![ECS-Nintex-CallSAPFunction-Action4](/img/content/ECS-Nintex-CallSAPFunction-Action4.png){:class="img-responsive"}

With (Re-)*Load parameters* all the parameters of the function module are loaded in the configuration screen.
Please note that all configuration settings are lost when you reload the parameters.      

**Input**

You can open the *Input* section by clicking the plus symbol. All the input parameters of the function module are listet here and can be provided with data. With function modules it is often mandatory to deposit input data like personnel number or date to get any return values. Take a look on the function module's properties in SAP before you use the Custom Action.     


![ECS-Nintex-CallSAPFunction-Action8](/img/content/ECS-Nintex-CallSAPFunction-Action8.png){:class="img-responsive"}

**Changings**

In the *Changings* section all the changing parameters of the function module - if such exist - are listed. If there aren't any changing parameters this section is empty. 


![ECS-Nintex-CallSAPFunction-Action11](/img/content/ECS-Nintex-CallSAPFunction-Action11.png){:class="img-responsive"}

**Tables**

In the *Tables* section all the tables of the function module are listed and are available for input. 


![ECS-Nintex-CallSAPFunction-Action9](/img/content/ECS-Nintex-CallSAPFunction-Action9.png){:class="img-responsive"}

*Table Input*

Next to *Table Input* all the function module's Input tables are listed. By clicking a table an edit window for entering data in the table fields pops up. To edit a field click the pencil symbol.    

![ECS-Nintex-CallSAPFunction-Action12](/img/content/ECS-Nintex-CallSAPFunction-Action12.png){:class="img-responsive"}


![ECS-Nintex-CallSAPFunction-Action13](/img/content/ECS-Nintex-CallSAPFunction-Action13.png){:class="img-responsive"}

With the *Plus* button you can add additional rows and equip them with data provided that the SAP function module supports the processing of multiple input rows.

*Additional XML table Input*

With *Additional XML table input* you can add an additional input in XML format to one ore more SAP Input table. The XML table input has to be stored in a workflow variable. Further information about the structure of the XML statement can be found in the example [Call SAP Function Action with additional XML-Input](./call-sap-function-action-with-additional-xml-input). 


![ECS-Nintex-CallSAPFunction-Action14](/img/content/ECS-Nintex-CallSAPFunction-Action14.png){:class="img-responsive"}

*XML output table/ XML output variable*

With the function *XML output table* and *XML output variable* it is possible to store the return value of a table in a predefined Output variable. Basically data in a Nintex Workflow can only be processed in XML Format.

In the dropdown list next to *XML output table* all the tables of the function module are listed. You have the following options:

- Selection of a single SAP table
- Selection of no SAP table at all
- Selection of all the tables available

![ECS-Nintex-CallSAPFunction-Action5](/img/content/ECS-Nintex-CallSAPFunction-Action5.png){:class="img-responsive"}  

For selecting a workflow variable in the *XML output variables* box the variable has to be created in the menu point *Variables* first.  


![ECS-Nintex-CallSAPFunction-Action6](/img/content/ECS-Nintex-CallSAPFunction-Action6.png){:class="img-responsive"}

**Output**

*Output parameters*

In the *Output parameters* section all the export parameter of the selected function module are listed and can be assigned to predefined workflow variables for storing the XML output. Only one element can be assigned to a workflow variable at a time.  


![ECS-Nintex-CallSAPFunction-Action7](/img/content/ECS-Nintex-CallSAPFunction-Action7.png){:class="img-responsive"}

**Advanced Options**

The following additional options are available under *Advanced Options*:

![ECS-Nintex-CallSAPFunction-Action10](/img/content/ECS-Nintex-CallSAPFunction-Action10.png){:class="img-responsive"}

*Transaction commit* 


If the check mark is set for Transaction commit, the BAPI BAPI_TRANSACTION_COMMIT is called after the selected function module has been processed. Some SAP function modules require this commit function to successfully update data in the database. 


*Connection scope*


Some scenarios require several function modules to be executed one after the other in order to complete the process successfully. This is particularly the case for HR processes, where a personnel number must often first be locked and then unlocked in the corresponding infotype after it has been posted. However, this series connection of functions must always take place in the same so-called connection scope. This ensures that the functions are related.


To use a connection scope, please proceed as follows:


Step 1: Define variable<br>
Create a freely nameable variable of type *Multiple lines of text* and select them it in the *Connection Scope* field. 


Step 2: Start Scope<br>
In the same action for the beginning of the scope, check *Begin scope* here. 


Step 3: Set functions within the scope (if necessary)<br>
For additional functions within the scope, simply add the XML variable in the *Connection Scope* field.


Step 4: Close scope<br> 
Check *End connection scope* here. If required by the process, the check mark for *Transaction commit* can also be set.  


Using this procedure it is possible to use several scopes within one workflow. 