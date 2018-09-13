---
layout: page
title: Read SAP Table Action with advanced options
description: Read SAP Table Action with advanced options
product: erpconnect-services
parent: read-sap-table-action
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=read_sap_table_action_with_advanced_options
---

In the following example we show you how to call a SAP table in a Nintex Workflow by using the Read SAP table custom action and to display the XML output in a SharePoint list. In the *Advanced options* section additional conditions are to be set.  

As example we use table MAKT. This table contains only a small number of columns and lists SAP material master data.

The aim of our scenario is to save the XML output of the columns MATNR, SPRAS and MAKTX in the workflow variable *Output*. The number of rows should be limited to 20. Furthermore a Where Clause should be defined which limits the values of column SPRAS (language) to EN (english).   

After that the XML output should be displayed in a SharePoint list. 

First of all create a new SharePoint list (Custom List) that contains the column output. Name this list *Material Data*. 

Ensure that you configure the column *Output* as *Multiple lines of text* and select *Plain text* as text type.

![ECS-Nintex-ReadSAPTable-Example1](/img/content/ECS-Nintex-ReadSAPTable-Example1.png){:class="img-responsive"}

Create a new Nintex Workflow on basis of this list. Add the *Read SAP table Custom Action* to the workflow and open the configuration screen of the action. 

![ECS-Nintex-ReadSAPTable-Example2](/img/content/ECS-Nintex-ReadSAPTable-Example2.png){:class="img-responsive"}

Select your ERPConnect Service Application and and enter table MAKT in the *SAP table* textbox. Click *Load parameters* to load all the values of the SAP table  in the configuration screen. In the *Column* selection alle the table columns are listed. Select only the required columns MATNR, SPRAS und MAKTX.

![ECS-Nintex-ReadSAPTable-Example3](/img/content/ECS-Nintex-ReadSAPTable-Example3.png){:class="img-responsive"}

Open menu point *Variables* to create a new workflow variable named *Output* which is used to store the XML output. The workflow variable has to be of type *Multiple lines of text*. Save the settings with the *Save* button. 

![ECS-Nintex-ReadSAPTable-Example4](/img/content/ECS-Nintex-ReadSAPTable-Example4.png){:class="img-responsive"}

Afterwards you can select the just defined workflow variable in the *XML output variable* field. With this we ensure that the generated XML 
output will be stored in the workflow variable *Output*.


![ECS-Nintex-ReadSAPTable-Example5](/img/content/ECS-Nintex-ReadSAPTable-Example5.png){:class="img-responsive"}

Open the *Advanced Options* sections. Additional limitations and conditions for displaying the table should be entered here.

The total number of rows should be limited to 20. 

Furthermore a Where Clause is to be defined which should limit the values of column SPRAS to EN. To do this enter the following statement in the Where Clause textbox: SPRAS = 'EN' 

![ECS-Nintex-ReadSAPTable-Example6](/img/content/ECS-Nintex-ReadSAPTable-Example6.png){:class="img-responsive"}

Save your entries with *Save*. With this the configuration of the *Read SAP table* function is completed.

Now you have to make sure that the XML output is displayed in the column output of SharePoint list *Material Data*. Therefore the standard Nintex Workflow Action *Set field value* is necessary. Add the Workflow Action to the workflow and open the configuration screen.   

![ECS-Nintex-ReadSAPTable-Example7](/img/content/ECS-Nintex-ReadSAPTable-Example7.png){:class="img-responsive"}

In the dropdown-list next to *Set* the columns of the SharePoint list are shown. Select the *Output* column we have created at the beginning of the scenario. In the *Equals* row you can now assign a value to the column. We want to assign the workflow variable *Output* as a value. 
*Select Workflow Data* next to *Equals* and select variable *Output* in the dropdown list. Save the configuration with *Save*.

![ECS-Nintex-ReadSAPTable-Example8](/img/content/ECS-Nintex-ReadSAPTable-Example8.png){:class="img-responsive"}

After that save and publish the workflow. We name the workflow *Material Data*. 

![ECS-Nintex-ReadSAPTable-Example9](/img/content/ECS-Nintex-ReadSAPTable-Example9.png){:class="img-responsive"}

Go to your SharePoint list and start the just created workflow manually via the *ITEMS* menu. In order to do this you first have to create 
a workflow item in your list.  


![ECS-Nintex-ReadSAPTable-Example10](/img/content/ECS-Nintex-ReadSAPTable-Example10ECS-Nintex-ReadSAPTable-Example10.png){:class="img-responsive"}

The XML output should be displayed with the defined limitations and conditions in the *Output* column.

![ECS-Nintex-ReadSAPTable-Example12](/img/content/ECS-Nintex-ReadSAPTable-Example12.png){:class="img-responsive"}

