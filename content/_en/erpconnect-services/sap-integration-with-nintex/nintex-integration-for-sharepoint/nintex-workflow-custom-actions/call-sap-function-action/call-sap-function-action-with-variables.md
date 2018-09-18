---
layout: page
title: Call SAP Function Action with variables
description: Call SAP Function Action with variables
product: erpconnect-services
parent: call-sap-function-action
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=call_sap_function_action_with_variables_
---

In the following section we show you how to use the *Call SAP Function Custom Action* for storing table results in 
a workflow variable and to display the generated XML output in a SharePoint list. 

A example we use the function module BAPI_EMPLOYEE_GETDATA. This function module reads personell master data and 
returns the results in different output tables. As input parameters the function module contains a set of scalar parameters from 
which DATE is to enter mandatory. Another selection criterion must be specified in order to read the employee data 
(e.g. Lastname, Firstname, Cost Center).
     
The aim of our scenario is to use the function module's output table PERSONAL_DATA as XML output and to store the 
output in the workflow variable *Output*.

As input parameters the following values should be set:    

- LASTNAME_M = Smith
- DATE = current date

In the end the XML output should be displayed in a SharePoint list. 

First of all create a new SharePoint list (Custom List) that contains the column *Output*. Name this list *Personal Data*. 


![ECS-Nintex-CallSAPFunction-Variables1](/img/content/ECS-Nintex-CallSAPFunction-Variables1.png){:class="img-responsive"}

Ensure that you configure the column *Output as Multiple lines of text* because the XML output will contain more than one line. 
Additionally select *Plain text* as text type otherwise formatting errors could occur. 


![ECS-Nintex-CallSAPFunction-Variables30](/img/content/ECS-Nintex-CallSAPFunction-Variables30.png){:class="img-responsive"}

Call up the *Workflow Settings* in the *List* menu and open the menu point *Create Workflow in Nintex Workflow* to create a new Nintex Workflow.


![ECS-Nintex-CallSAPFunction-Variables31](/img/content/ECS-Nintex-CallSAPFunction-Variables31.png){:class="img-responsive"}

Select the *Call SAP Function* Custom Action and add it to the workflow diagram via drag & drop. 
After adding the Custom Action open the configuration screen.  


![ECS-Nintex-CallSAPFunction-Variables3](/img/content/ECS-Nintex-CallSAPFunction-Variables3.png){:class="img-responsive"}

Specify the ERPConnect Service Application for your SAP system and enter function module BAPI_EMPLOYEE_GETDATA 
in the *SAP Function* section. Click *(Re-)Load parameters* to load the functions module's parameters in the configuration screen. 


![ECS-Nintex-CallSAPFunction-Variables4](/img/content/ECS-Nintex-CallSAPFunction-Variables4.png){:class="img-responsive"}

Next to *XML output table* in the *Tables* section of the configuration screem output table PERSONAL_DATA is now selectable.

![ECS-Nintex-CallSAPFunction-Variables5](/img/content/ECS-Nintex-CallSAPFunction-Variables5.png){:class="img-responsive"}

Select table PERSONAL_DATA and call up menu item Variables to define the workflow variable which is used for storing the XML output.


![ECS-Nintex-CallSAPFunction-Variables6](/img/content/ECS-Nintex-CallSAPFunction-Variables6.png){:class="img-responsive"}

Click *New* in the *Workflow Variables* screen to create a new variable.

![ECS-Nintex-CallSAPFunction-Variables7](/img/content/ECS-Nintex-CallSAPFunction-Variables7.png){:class="img-responsive"}

Name the variable *Output*. Because the XML output will contain more than one line of text choose *Multiple lines of text* as 
type and click *Save* to save the variable. 


![ECS-Nintex-CallSAPFunction-Variables8](/img/content/ECS-Nintex-CallSAPFunction-Variables8.png){:class="img-responsive"}

Afterwards you can select the just defined workflow variable in the *XML output variable* field. With this we ensure that the generated XML 
output will be stored in the workflow variable *Output*.



![ECS-Nintex-CallSAPFunction-Variables9](/img/content/ECS-Nintex-CallSAPFunction-Variables9.png){:class="img-responsive"}

Now the input parameters must be defined. For parameter LASTNAME_M *Smith* shall be set as a fixed value. Open the input 
section and scroll down to input parameter LASTNAME_M. Here you can enter the value. 


![ECS-Nintex-CallSAPFunction-Variables10](/img/content/ECS-Nintex-CallSAPFunction-Variables10.png){:class="img-responsive"}

After that you can define the value for parameter DATE. The current date shall be set here. Scroll down to parameter DATE. 
Theoretically you could enter the current date manually in the SAP-compatible date format "yyyyMMdd". To ensure that the current date 
is set automatically every time you start the workflow anew it is possible to format the field. To do this open the *Insert Reference* settings 
by clicking the sheet symbol on the right side of the row.


![ECS-Nintex-CallSAPFunction-Variables11](/img/content/ECS-Nintex-CallSAPFunction-Variables11.png){:class="img-responsive"}

In the *Common* ribbon you can choose *Current Date* which contains the automatically generated date of the day. It is not sufficient 
however to enter *Current Date* here because it is formatted in the SharePoint-internal date format. To format the date in the correct 
SAP-compatible date format you have to use a *Inline Function*. Before selecting *Current Date* with a double-click open the ribbon 
*Inline Functions*.     


![ECS-Nintex-CallSAPFunction-Variables12](/img/content/ECS-Nintex-CallSAPFunction-Variables12.png){:class="img-responsive"}

Select the function *FormatDate* with a double click. The function has the following structure: fn-FormatDate(*date, "date format"*).

Thus in our example the function reads fn-FormatDate(*Current Date*, "yyyyMMdd"). For completing the function make a left-click
between the brackets and add *Current Date* with a double-click in the *Common* ribbon. The date format "yyyyMMdd" has to be added 
manually. 


![ECS-Nintex-CallSAPFunction-Variables13](/img/content/ECS-Nintex-CallSAPFunction-Variables13.png){:class="img-responsive"}

Confirm your entries with *OK*. The function is then automatically transferred to the input field of parameter DATE.

![ECS-Nintex-CallSAPFunction-Variables14](/img/content/ECS-Nintex-CallSAPFunction-Variables14.png){:class="img-responsive"}

It is not necessary to adjust anything in the other configuration sections *Changings, Output* and  *Advanced* Options.                               

In this example we want to display the XML output in the *Output* column of our SharePoint list *Personal Data*. Therefore an 
additional Nintex Workflow Action has to be added to the workflow. Browse for the action Set field value on the left side of the workflow manager 
screen and add it to the workflow. With this action you can assign fields of a SharePoint list to workflow variables for example.   

![ECS-Nintex-CallSAPFunction-Variables15](/img/content/ECS-Nintex-CallSAPFunction-Variables15.png){:class="img-responsive"}

Open the configuation screen for the *Set field value* action. In the dropdown-list next to *Set* all the columns of the SharePoint list 
are shown. Select the *Output* column we have created at the beginning of the scenario.  


![ECS-Nintex-CallSAPFunction-Variables17](/img/content/ECS-Nintex-CallSAPFunction-Variables17.png){:class="img-responsive"}

In the *Equals* row you can now assign a value to the column. We want to assign the workflow variable *Output* as a value. 
Select *Value* in the list next to *Equals* and open the *Insert Reference* box on the right side. 

![ECS-Nintex-CallSAPFunction-Variables18](/img/content/ECS-Nintex-CallSAPFunction-Variables18.png){:class="img-responsive"}

Open the *Workflow Variables* ribbon and select the workflow variable *Output* with a double-click. Confirm your entries with *OK*.


![ECS-Nintex-CallSAPFunction-Variables19](/img/content/ECS-Nintex-CallSAPFunction-Variables19.png){:class="img-responsive"}

Thus the workflow variable *Output* is assigned to column *Output* which means that the XML output is displayed in this column. 
*Save* the configuration of the action with the *Save* button.



![ECS-Nintex-CallSAPFunction-Variables20](/img/content/ECS-Nintex-CallSAPFunction-Variables20.png){:class="img-responsive"}

After that save and publish the workflow. 


![ECS-Nintex-CallSAPFunction-Variables21](/img/content/ECS-Nintex-CallSAPFunction-Variables21.png){:class="img-responsive"}

Name the workflow *Personal Data* and return to the site with your SharePoint list *Personal Data*.


![ECS-Nintex-CallSAPFunction-Variables28](/img/content/ECS-Nintex-CallSAPFunction-Variables28.png){:class="img-responsive"}

For this SharePoint list the workflow is to be executed. The easiest way to do this is to create a new item and open the *Workflows* button in the *ITEMS* menu. All the list workflows that are associated with this SharePoint list are shown here and can be started manually. 


![ECS-Nintex-CallSAPFunction-Variables22](/img/content/ECS-Nintex-CallSAPFunction-Variables22.png){:class="img-responsive"}

First of all create any item for your list. You have to fill in some text for the *Title* column. The output column should be supplied with 
data by the workflow. You don't have to enter anything here. 

![ECS-Nintex-CallSAPFunction-Variables23](/img/content/ECS-Nintex-CallSAPFunction-Variables23.png){:class="img-responsive"}

Mark the line with the new created item and switch to the *ITEMS* menu. Open the menu point *Workflows* here.

![ECS-Nintex-CallSAPFunction-Variables24](/img/content/ECS-Nintex-CallSAPFunction-Variables24.png){:class="img-responsive"}

Execute the workflow with the *Start* button.


![ECS-Nintex-CallSAPFunction-Variables26](/img/content/ECS-Nintex-CallSAPFunction-Variables26.png){:class="img-responsive"}

The *Output*  column should be filled with the XML output data as intended. Furthermore the data should be preselected by the criteria defined 
in the Custom Action (LASTNAME_M = Smith).


![ECS-Nintex-CallSAPFunction-Variables27](/img/content/ECS-Nintex-CallSAPFunction-Variables27.png){:class="img-responsive"}

With this the workflow scenario is completed. 