---
layout: page
title: Operation with SAP table
description: Operation with SAP table
product: erpconnect-services
parent: operation-with-sap-table
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=execute-table-activity
---

Let us start by creating and naming a new operation.

![WSD-OperationsNewTable](/img/content/WSD-OperationsNewTable.png){:class="img-responsive"}       


Add the activity *Execute Table* via drag & drop to the flow chart.
    
![WSD-NewActivity](/img/content/WSD-NewActivity.png){:class="img-responsive"}


In this case we select some columns of the SAP table using the *Table Field Selection Dialog*. Alternatively you can set the field *Custom Function* to use a function module for table extraction.


![WSD-TableFieldSelectionDialog](/img/content/WSD-TableFieldSelectionDialog.png){:class="img-responsive"}

In the *Search Table Dialog* you can search for an SAP table using the Search button and select it in the search results.

![WSD-SearchTableDialog](/img/content/WSD-SearchTableDialog.png){:class="img-responsive"}
           
To map the output data in the *Execute Table Activity dialog* you first have to define the necessary 
data types and parameters. You can do this on the overview page using the functions *Custom Data Types* and Parameters.

![WSD-NewDataTypeParameters](/img/content/WSD-NewDataTypeParameters.png){:class="img-responsive"}
     
Create a new custom data type *SAPCustomer*. You have the option either to manually define the properties using the *New* button or to import the structure fields required via the *Import function*. 

![WSD-CustomDataTypeDialogTable](/img/content/WSD-CustomDataTypeDialogTable.png){:class="img-responsive"}

![WSD-ImportPropertiesDialog](/img/content/WSD-ImportPropertiesDialog.png){:class="img-responsive"}

You can select the SAP table in the *Import Properties Dialog*.

![WSD-ImportPropertiesDialog2](/img/content/WSD-ImportPropertiesDialog2.png){:class="img-responsive"}



You can select and deselect the structure fields required in the *Import Properties Dialog*.
In the field *Property Name* you can change the name. 
            
![WSD-ImportPropertiesDialog3](/img/content/WSD-ImportPropertiesDialog3.png){:class="img-responsive"} 


Confirm your entries with the *OK* button.


![WSD-CustomDataTypeDialogTable2](/img/content/WSD-CustomDataTypeDialogTable2.png){:class="img-responsive"}


What you have to do then is to define a *output* or *return* parameter. 
If you have more then one result parameter, you have to set them as output.
This output parameter will contain the result when the web service is executed.        

![WSD-NewParameterDialogTable](/img/content/WSD-NewParameterDialogTable.png){:class="img-responsive"}

            
Optional: you can also define an input parameter that can be used later as filter.
                        

![WSD-NewParameterDialogTable2](/img/content/WSD-NewParameterDialogTable2.png){:class="img-responsive"}


Once you have finished these steps you can map your output data in the *Execute Table Activity Dialog*.  

![WSD-ExecuteTableEdit](/img/content/WSD-ExecuteTableEdit.png){:class="img-responsive"}


In the section Output Mapping click on New to create a new output Mapping.
As target the previously defined parameter SAPCustomers is selectable. 
As source the table *RESULT* is selectable.
The output fields can be mapped in the section *Mapping Expression* by clicking the button at the right side. 


![WSD-ExecuteTableActivityDialog](/img/content/WSD-ExecuteTableActivityDialog.png){:class="img-responsive"}


As source and target fields have the same name, you can use the function *Automap* to automatically make the mapping.      


![WSD-MappingStructureDialog](/img/content/WSD-MappingStructureDialog.png){:class="img-responsive"}

            
If you only want to extract the SAP table without any filter functions
you can deploy the new created web service directly to your SharePoint server. 