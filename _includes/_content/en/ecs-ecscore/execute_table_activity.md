First, create a new web service operation and give it a name. 

Drag & drop the activity *Execute Table* to the flowchart.

![WSD-NewActivity](/img/content/WSD-NewActivity.png){:class="img-responsive"}

In the Search Table dialog, you can search for and select the required SAP table.

![WSD-SearchTableDialog](/img/content/WSD-SearchTableDialog.png){:class="img-responsive"}

In the example, we select individual lines of the SAP table. To do this, call the *Table Field Selection Dialog* in the *Selected Fields* menu field. Alternatively, you can use a function module for table extraction in the *Custom Function* field.   

![WSD-TableFieldSelectionDialog](/img/content/WSD-TableFieldSelectionDialog.png){:class="img-responsive"}

To carry out the mapping of the output values in the activity dialog, you first have to define the corresponding *Custom Data Types* and *Parameters*. Confirm the activity dialog with *OK* without making any further entries and switch to the overview page. There you can create the required values. 

![WSD-NewDataTypeParameters](/img/content/WSD-NewDataTypeParameters.png){:class="img-responsive"}

Define a name for the data type. You can either create a new data type with New or import the required SAP table fields using the import button.

![WSD-CustomDataTypeDialogTable](/img/content/WSD-CustomDataTypeDialogTable.png){:class="img-responsive"}

![WSD-ImportPropertiesDialog](/img/content/WSD-ImportPropertiesDialog.png){:class="img-responsive"}

The required SAP table can be searched for and selected under *Import Properties Dialog*.

![WSD-ImportPropertiesDialog2](/img/content/WSD-ImportPropertiesDialog2.png){:class="img-responsive"}

The selection of the fields to be imported can be restricted in the following dialog mask. <br>
The names of the fields can be renamed under *Property Name*.

![WSD-ImportPropertiesDialog3](/img/content/WSD-ImportPropertiesDialog3.png){:class="img-responsive"}

Confirm your selection with *OK*. 

![WSD-CustomDataTypeDialogTable2](/img/content/WSD-CustomDataTypeDialogTable2.png){:class="img-responsive"}

An output or return parameter must then be defined. <br>
If you have several output parameters, choose *Output* in the *Field* Direction.<br>.
The output parameter contains the results when you call the web service.

![WSD-NewParameterDialogTable](/img/content/WSD-NewParameterDialogTable.png){:class="img-responsive"}

Optional: If the table is to be filtered later according to certain table values, you can also use a 
input parameters for the filter function. 

![WSD-NewParameterDialogTable2](/img/content/WSD-NewParameterDialogTable2.png){:class="img-responsive"}

The mapping of the output data can now be carried out in the activity.

![WSD-ExecuteTableEdit](/img/content/WSD-ExecuteTableEdit.png){:class="img-responsive"}

In the *Output Mapping* section, click *New* to create a new entry. Under *Target* the output parameter *SAP Customers* is selectable. After double-clicking on the value, the result table *RESULT* is available under *Source*. 
In the *Mapping Expression* field, use the button on the right to open the dialog box for mapping the table values. 


![WSD-ExecuteTableActivityDialog](/img/content/WSD-ExecuteTableActivityDialog.png){:class="img-responsive"}

Since the source and target fields have the same names, you can use the Automap function for automatic mapping. 

![WSD-MappingStructureDialog](/img/content/WSD-MappingStructureDialog.png){:class="img-responsive"}

If the table is only to be displayed without a filter function, the web service can be deployed directly.