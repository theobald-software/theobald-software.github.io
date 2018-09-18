---
layout: page
title: Call SAP Function Action with additional XML-Input
description: Call SAP Function Action with additional XML-Input
product: erpconnect-services
parent: call-sap-function-action
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=call_sap_function_action_with_additional_xml_input
---

With the *Additional XML table input* function in the *Tables* section of the configuration screen it is possible to add an additional input for one ore more tables in XML format.
 
We want to demonstrate this function in the following example. For using the function make sure that you select a SAP function module that is 
capable of processing table input data. We use function module BAPI_REQUISITION_CREATE. This function module is used to create purchase 
requisitions. The requisiton items are transferred to table REQUISITION_ITEMS. In our scenario we want to create a purchase requisition with multiple 
items. For creating a position the following input parameters are mandatory: Prequisition Item, Doc Type, Material, Plant, Quantity and Delivery Date. 
            
Two positions should be created with input table REQUISITION_ITEMS, one position by using the *Additional XML table input* function. 

The return values of output table RETURN should be displayed in the column of a SharePoint list. In the return message you can see if the purchase requisition has been created sucessfully. The result can be verified directly in the SAP system.  

First of all create a new SharePoint list (Custom List) that contains the column *Output*. Name this list *Requisition Create*. 

Ensure that you configure the column *Output* as of type *Multiple lines of text* and select *Plain text* as text type.


![ECS-Nintex-CallSAPFunction-XMLInput1](/img/content/ECS-Nintex-CallSAPFunction-XMLInput1.png){:class="img-responsive"}

Create a new Nintex Workflow on basis of this list. Add the *Call SAP Function Custom Action* to the workflow and enter the ECS Service
Application and the function module BAPI_REQUISITION_CREATE in the configuration screen. Select output table RETURN for XML output.

Furthermore create a workflow variable of type *Multiple lines* of text named *Output*. Select this variable in the *XML output* variable section.  


![ECS-Nintex-CallSAPFunction-XMLInput2](/img/content/ECS-Nintex-CallSAPFunction-XMLInput2.png){:class="img-responsive"}

Afterwards we turn to the input values for creating the purchase requisiton positions. Open the *Tables* section and click
table REQUISITION_ITEMS next to *Table Input*. 


![ECS-Nintex-CallSAPFunction-XMLInput3](/img/content/ECS-Nintex-CallSAPFunction-XMLInput3.png){:class="img-responsive"}

Open the Editor screen by clicking the pencil Symbol and enter the values  for fields PREQ_ITEM and DOC_TYPE.	


![ECS-Nintex-CallSAPFunction-XMLInput4](/img/content/ECS-Nintex-CallSAPFunction-XMLInput4.png){:class="img-responsive"}

Scroll to the right side and make the entries for the parameters MATERIAL and PLANT. 
Parameter MATERIAL means material number, PLANT means company code.  


![ECS-Nintex-CallSAPFunction-XMLInput5](/img/content/ECS-Nintex-CallSAPFunction-XMLInput5.png){:class="img-responsive"}

Scroll further down and enter values for the remaining fields QUANTITY and DELIV_DATE. QUANTITY
means the quantity of material and DELIV_DATE means delivery date. For entering the delivery date you can enter directly the SAP-compatible date 
format yyyyMMdd or you can use Inline Function *format date* (see [Call SAP function Action with variables](./call-sap-function-action-with-variables)).   


![ECS-Nintex-CallSAPFunction-XMLInput6](/img/content/ECS-Nintex-CallSAPFunction-XMLInput6.png){:class="img-responsive"}

After entering the last values scroll to the top and save your entries with *Save*. Then enter the values for the second row.    


![ECS-Nintex-CallSAPFunction-XMLInput19](/img/content/ECS-Nintex-CallSAPFunction-XMLInput19.png){:class="img-responsive"}

With the input values we are finished now. Then we turn to the *Additional XML table Input*. 
First of all create a new workflow variable named XML-Input. The variable has to be of type *Multiple lines of text* because the
XML statement will have more than one line of text. 


![ECS-Nintex-CallSAPFunction-XMLInput7](/img/content/ECS-Nintex-CallSAPFunction-XMLInput7.png){:class="img-responsive"}

You can enter the XML statement directly in the textbox next to *Default Value*. The statement must have the following structure:

The element TABLES encloses the complete content. In the next level the tables are listet as elements with attribute *name*which 
contains the name of the SAP table. One level below the name of the SAP table is once again listed and below the according table 
fields with their content. This format is used for XML input and output.   


![ECS-Nintex-CallSAPFunction-XMLInput18](/img/content/ECS-Nintex-CallSAPFunction-XMLInput18.png){:class="img-responsive"}

In the XML input we use 100-110 for parameter MATERIAL and 15 for parameter QUANTITY. For the remaining parameters the same 
input values as used in the input table should be used (DOC_TYPE = NB, etc.)  

Enter the statement in the default window. Ensure that the statement does not contain any blank lines. For complex XML statements it is
recommended to use a text editor for prior preparation. Alternatively you can leave the text box empty and check at the option *Show on startform*. 
This means that a bigger textbox is shown in the startform of the Nintex Workflow where you can enter or modify your XML statement.  

![ECS-Nintex-CallSAPFunction-XMLInput8](/img/content/ECS-Nintex-CallSAPFunction-XMLInput8.png){:class="img-responsive"}

Save the variable with the *Save* button. Then got to *Additional XML Input* in the *Tables* section and select the variable in the dropdown list. 
Save your entries with *Save*. 


![ECS-Nintex-CallSAPFunction-XMLInput10](/img/content/ECS-Nintex-CallSAPFunction-XMLInput10.png){:class="img-responsive"}

With this the configuration of the *Call SAP Function Custom Action* is completed. Then we turn to the display of the XML output 
in our SharePoint list. 
Go to the Workflow Manager's overview screen and add the *Set field value* action to the workflow. Open the configuration screen
of the workflow action. 

![ECS-Nintex-CallSAPFunction-XMLInput9](/img/content/ECS-Nintex-CallSAPFunction-XMLInput9.png){:class="img-responsive"}

Assign the worflow variable *Output* to the *Output* column of the SharePoint list and save the settings.   

![ECS-Nintex-CallSAPFunction-XMLInput11](/img/content/ECS-Nintex-CallSAPFunction-XMLInput11.png){:class="img-responsive"}

Then save and publish the workflow. We name it *Requisiton Create*.

![ECS-Nintex-CallSAPFunction-XMLInput12](/img/content/ECS-Nintex-CallSAPFunction-XMLInput12.png){:class="img-responsive"}

Go to your SharePoint list and start the just created workflow manually via the *ITEMS* menu. In order to do this you first have to create 
a workflow item in your list.

![ECS-Nintex-CallSAPFunction-XMLInput15](/img/content/ECS-Nintex-CallSAPFunction-XMLInput15.png){:class="img-responsive"}

![ECS-Nintex-CallSAPFunction-XMLInput13](/img/content/ECS-Nintex-CallSAPFunction-XMLInput13.png){:class="img-responsive"}

In the *Output* field the return message of function module BAPI_REQUISITION_CREATE should be displayed.

![ECS-Nintex-CallSAPFunction-XMLInput14](/img/content/ECS-Nintex-CallSAPFunction-XMLInput14.png){:class="img-responsive"}

In our example the purchase requisition number 10017297 has been created. Now you can check on SAP side if the purchase requisiton
has been created and posted correctly. Open table EBAN in the SAP system where the purchase requisitons are stored and enter the 
purchase requisition number in the selection screen of transaction SE16.  


![ECS-Nintex-CallSAPFunction-XMLInput16](/img/content/ECS-Nintex-CallSAPFunction-XMLInput16.png){:class="img-responsive"}

Three created positions with the according material numbers should be listed there. This means the purchase requisiton
has been sucessfully created and the workflow scenario is completed.  

![ECS-Nintex-CallSAPFunction-XMLInput17](/img/content/ECS-Nintex-CallSAPFunction-XMLInput17.png){:class="img-responsive"}
