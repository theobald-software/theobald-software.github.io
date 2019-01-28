This chapter explains the procedure for mapping structure parameters of a web service operation, that is, parameters that refer to a data structure/ array, to various input parameters of an SAP function module. 

**Mapping structure parameters to structure parameters**

In this example, we will show you how structure parameters of a web service operation can be mapped to structure parameters of a function module using the WebService Designer. We will only consider input parameters.  

As an application example, we use the function module BAPI_CUSTOMER_CHANGEFROMDATA1. The function module can be used to change customer master data and contains several structure parameters as input parameters. 

The aim of this scenario is to define a structure parameter that contains the elements FIRSTNAME, LASTNAME, and CITY, and to map this to the identical elements of the structure parameter PI_PERSONALDATA of the function module.

First create an operation that calls the function module BAPI_CUSTOMER_CHANGEFROMDATA1 and return to the overview page. Call the menu option Custom *Data Types* and click on *New* in the following dialog box to create a new data type with the name *Personal*. This data type should contain the above elements in its structure.

![WSD-MappingStructureMappingInput13](/img/content/WSD-MappingStructureMappingInput13.png){:class="img-responsive"}

Then create the input parameter PersonalData, which contains the structure *Personal* just created as the data type. You have now created the structure parameter.

![WSD-MappingStructureMappingInput14](/img/content/WSD-MappingStructureMappingInput14.png){:class="img-responsive"}

Then call the activity dialog and scroll to the structure parameter PI_PERSONALDATA. The structure parameter PersonalData* can be selected from the dropdown list in the *Mapping* column.   


![WSD-MappingStructureMappingInput15](/img/content/WSD-MappingStructureMappingInput15.png){:class="img-responsive"}

Select the parameter and open the Mapping Expression settings by clicking on the button on the right with the three dots. All fields of structure PI_PERSONALDATA are listed there. Using the dropdown list in the mapping column, you can assign the corresponding elements of the structure parameter *PersonalData* to the fields. 

![WSD-MappingStructureMappingInput16](/img/content/WSD-MappingStructureMappingInput16.png){:class="img-responsive"}

Since the elements to be mapped are identical, the *Automap* function can also be used. 

![WSD-MappingStructureMappingInput17](/img/content/WSD-MappingStructureMappingInput17.png){:class="img-responsive"}

Finish your entries with OK. The scenario is now complete. 


**Mapping Structure Parameters to Scalar Parameters**

The following example shows how to map structure parameters of a web service operation to scalar input parameters of a function module using the WebService Designer. 

The BAPI_EMPLOYEE_GETDATA function module is used as an example. The function module reads HR master data and writes the results to various output tables. The function module contains a number of scalar parameters as input parameters. 
The aim of this scenario is to define a structure parameter that contains the elements EMPLOYEE_ID, LASTNAME_M, FSTNAME_M, and DATE and to map these elements to the scalar input parameters of the function module with the same name.

First create an operation that calls the function module BAPI_EMPLOYEE_GETDATA and return to the overview page. Call the menu option Custom Data Types and click on *New* in the following dialog box to create a new data type with the name *Personal*. This data type should contain the above elements in its structure.

Since the name DATE is a protected field name for the data types, choose an alternative name for this field, for example CALENDARDATE. 

![WSD-MappingStructureMappingInput7](/img/content/WSD-MappingStructureMappingInput7.png){:class="img-responsive"}

Then create the input parameter *PersonalData* that contains this data type. You have now created the structure parameter.

![WSD-MappingStructureMappingInput8](/img/content/WSD-MappingStructureMappingInput8.png){:class="img-responsive"}

Then switch to the activity dialog and scroll to the input parameters. First, we want to map the element EMPLOYEE_ID of our structure parameter PersonalData to the scalar input parameter EMPLOYEE_ID of the function module. Select the line with the parameter EMPLOYEE_ID and use the button on the right to call up the other mapping settings.   

![WSD-MappingStructureMappingInput9](/img/content/WSD-MappingStructureMappingInput9.png){:class="img-responsive"}

In the *Mapping Expression Dialog*, double-click the PersonalData parameter. It is now important to insert a reference to the element of the structure parameter to be mapped in the mapping expression line. In this example for the element EMPLOYEE_ID, append the extension .*EMPLOYEE_ID* to the mapping expression. Note that a distinction is made between upper and lower case.

![WSD-MappingStructureMappingInput10](/img/content/WSD-MappingStructureMappingInput10.png){:class="img-responsive"}

Proceed in the same way with the remaining elements LASTNAME_M and FSTNAME_M and DATE. Remember that we had to rename the DATE element in the data structure to CALENDARDATE. The mapping expression must refer to this field name. 

![WSD-MappingStructureMappingInput11](/img/content/WSD-MappingStructureMappingInput11.png){:class="img-responsive"}

Confirm your entries with OK. The scenario is now complete.  


**Mapping structure parameters to a table** 

The following example shows how structure parameters of a web service operation can be mapped to tabular input parameters of a function module using the WebService Designer. 

The BAPI_REQUISITION_CREATE function module serves as an example. This function module is used to create a purchase requisition (BANF) in SAP. The items are transferred to table REQUISITION_ITEMS.
In our scenario, we only want to transfer one item. The following five input parameters are required for this: Material, Quantity, Plant, Delivery Date and DocType.

The goal is to define a structure parameter that contains five structure elements and map these elements to the above-mentioned fields of the REQUISITION_ITEMS table.  

First create an operation that calls the function module BAPI_REQUISITION_CREATE. <br>
Then call *Custom Data Types*  in the overview screen and click *New* in the following dialog box to create a new data type with the name *ReqItem*. This data type should contain the elements Material, Quantity, Plant, Delivery Date and DocType in its structure.

![WSD-MappingStructureNewCustomDataType1](/img/content/WSD-MappingStructureNewCustomDataType1.png){:class="img-responsive"}

To create the required data types, you can either click on *New* under *Properties* and create them manually, or you can use the import function as described below.

![WSD-MappingStructureNewCustomDataType2](/img/content/WSD-MappingStructureNewCustomDataType2.png){:class="img-responsive"}

Choose the function module BAPI_REQUISITION_CREATE to import the required elements.

![WSD-MappingStructureNewCustomDataType3](/img/content/WSD-MappingStructureNewCustomDataType3.png){:class="img-responsive"}

In the following dialog box select the table REQUISITION_ITEMS and click on *Next*. 

![WSD-MappingStructureNewCustomDataType4](/img/content/WSD-MappingStructureNewCustomDataType4.png){:class="img-responsive"}

First all fields of the table are selected. Use the *Deselect All* button to select only the fields you want to use as elements in your structure. Finish your input with *Finish*.

![WSD-MappingStructureNewCustomDataType5](/img/content/WSD-MappingStructureNewCustomDataType5.png){:class="img-responsive"}

Confirm the two following dialog boxes with *OK*.

![WSD-MappingStructureNewCustomDataType6](/img/content/WSD-MappingStructureNewCustomDataType6.png){:class="img-responsive"}

![WSD-MappingStructureNewCustomDataType7](/img/content/WSD-MappingStructureNewCustomDataType7.png){:class="img-responsive"}

The next step is to define an input parameter that contains the data structure you have created. To do this, call  *Parameters* in the overview screen and click on *New*. Name the new parameter *SAPReqItems* and select *ReqItem* as the data type. Finish your entries with OK. You have now created your structure parameter.   

![WSD-MappingStructureNewParameter](/img/content/WSD-MappingStructureNewParameter.png){:class="img-responsive"}

Then call the activity dialog to perform the mapping. Scroll to the input table REQUISITION_ITEMS and call the mapping expression settings by clicking the button on the right with the three dots. 

![WSD-MappingStructureMappingInput18](/img/content/WSD-MappingStructureMappingInput18.png){:class="img-responsive"}

![WSD-MappingStructureMappingInput1](/img/content/WSD-MappingStructureMappingInput1.png){:class="img-responsive"}

Click on *New*. This takes you to the next dialog box. All fields of the REQUISITION_ITEMS table are listed here and can be mapped to the input parameters of the WebService operation. First select the field DOC_TYPE by clicking on the line. Clicking the button to the right of the Mapping Expression column takes you to the mapping settings for this table field.

![WSD-MappingStructureMappingInput12](/img/content/WSD-MappingStructureMappingInput12.png){:class="img-responsive"}

The structure parameter *SAPReqItems* is available as a mapping parameter. 
Select it by double-clicking it. 

![WSD-MappingStructureMappingInput2](/img/content/WSD-MappingStructureMappingInput2.png){:class="img-responsive"}

It is now important to insert a reference to the corresponding elements of the structure parameter in the mapping expression line. In this example for the *DOC_TYPE* field, append the extension .DOC_TYPE to the Mapping Expression line. Note that a distinction is made between upper and lower case.

![WSD-MappingStructureMappingInput3](/img/content/WSD-MappingStructureMappingInput3.png){:class="img-responsive"}

Perform the mapping with this procedure for all required data fields and then confirm both dialog masks with OK.

![WSD-MappingStructureMappingInput4](/img/content/WSD-MappingStructureMappingInput4.png){:class="img-responsive"}

![WSD-MappingStructureMappingInput5](/img/content/WSD-MappingStructureMappingInput5.png){:class="img-responsive"}

The mapping scenario is now complete. 