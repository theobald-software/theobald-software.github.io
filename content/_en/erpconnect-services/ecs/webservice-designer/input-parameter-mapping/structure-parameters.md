---
layout: page
title: Structure parameters
description: Structure parameters
product: erpconnect-services
parent: input-parameter-mapping
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=structure_parameters
---

In this chapter we show you how to map structure parameters - that means parameters containing a data structure - of a WebService Operation to diverse input parameters of a SAP function module.

**Mapping structure parameters to structure parameters**

In our first example we show you how to map structure parameters of a WebService operation to structure parameters of a SAP function module. 

As example we use the function module BAPI_CUSTOMER_CHANGEFROMDATA1. This function module is used to change customer data and contains a set of structure parameters as input parameters. 

The aim of our scenario is to define a structure parameter containing the three elements FIRSTNAME, LASTNAME and CITY and to 
map these elements to the corresponding fields of structure parameter PI_PERSONALDATA.
  
You first have to create an operation which calls the function module BAPI_CUSTOMER_CREATEFROMDATA1 and then return to the overview page. As a next step you have to define your structure parameter. Click on the button *Custom Data Types* and then select *New* for creating a new data type named *Personal*. This data type should include the structure elements FIRSTNAME, LASTNAME and CITY.

![WSD-MappingStructureMappingInput13](/img/content/WSD-MappingStructureMappingInput13.png){:class="img-responsive"}

Having done this define a parameter named *PersonalData* which contains the data type *Personal*. You have sucessfully created your structure parameter with this.

![WSD-MappingStructureMappingInput14](/img/content/WSD-MappingStructureMappingInput14.png){:class="img-responsive"}

Open the *Execute Function Activity Dialog* and scroll down to input parameter PI_PERSONALDATA. Using the dropdown-list in the *Mapping* column you can select the just created structure parameter PersonalData. Select it and open the *Mapping Structure Dialog* by clicking the button with the three points on the right side.  

![WSD-MappingStructureMappingInput15](/img/content/WSD-MappingStructureMappingInput15.png){:class="img-responsive"}

In the *Mapping Structure Dialog* window all available fields of structure parameter PI_PERSONALDATA are listed. You can use the dropdown-list in the Mapping column to manually assign the elements of structure parameter PersonalData to the corresponding fields of structure parameter PI_PERSONALDATA. 

![WSD-MappingStructureMappingInput16](/img/content/WSD-MappingStructureMappingInput16.png){:class="img-responsive"}

Since the elements of structure parameter *PersonalData* and the fields of structure parameter PI_PERSONALDATA are named the same way you can also also use the *Automap* button to do the mapping.   


![WSD-MappingStructureMappingInput17](/img/content/WSD-MappingStructureMappingInput17.png){:class="img-responsive"}

Confirm your entries with *OK.* With this our mapping scenario is complete.


**Mapping structure parameters to scalar parameters**


In the following scenario we examine how to map structure parameters of a WebService operation to scalar input parameters of a SAP function module.  

As example we use the function module BAPI_EMPLOYEE_GETDATA. This function module reads personell master data and returns the results in different output tables. As input parameters the function module contains a set of scalar parameters. 
The aim of our scenario is to define a structure parameter that contains the elements EMPLOYEE_ID, LASTNAME_M, FSTNAME_M and DATE and to map this structure to the corresponding scalar input parameters of the function module.
  
You first have to create an operation which calls the function module  BAPI_EMPLOYEE_GETDATA and then return to the overview page. As a next step you have to define your data structure. Click the button *Custom Data Types* and then click *New* for creating a new data type named *Personal*. This data type should include the elements EMPLOYEE_ID, LASTNAME_M, FSTNAME_M and DATE.  

Because DATE is a protected field name you have to choose an alternative name for this element, e.g. CALENDARDATE. 

![WSD-MappingStructureMappingInput7](/img/content/WSD-MappingStructureMappingInput7.png){:class="img-responsive"}

Having done this define a parameter named *PersonalData* which contains the data type *Personal*. You have sucessfully created your structure parameter with this. 

![WSD-MappingStructureMappingInput8](/img/content/WSD-MappingStructureMappingInput8.png){:class="img-responsive"}

Open the *Execute Function Activity Dialog* and scroll down to the input parameters. We first want to map the the element EMPLOYEE_ID of structure parameter PersonalData to the scalar input parameter EMPLOYEE_ID of the function module.
Mark the line with element EMPLOYEE_ID and open the *Mapping Expression Dialog* by clicking the button with the three points on the right side. 

![WSD-MappingStructureMappingInput9](/img/content/WSD-MappingStructureMappingInput9.png){:class="img-responsive"}

Select parameter *PersonalData* with a double-click. It is crucial to add a reference to element EMPLOYEE_ID of structure parameter *PersonalData*. In our example you have to add the expression .*EMPLOYEE_ID* in the *Mapping Expression* field. Note that a difference is made between small and capital letters.

![WSD-MappingStructureMappingInput10](/img/content/WSD-MappingStructureMappingInput10.png){:class="img-responsive"}

Following this procedure you can also map the other elements LASTNAME_M, FSTNAME_M and DATE. Remember that we had to rename the element DATE in our data structure to CALENDARDATE. The expression in the *Mapping Expression* field has to refer to that name.

![WSD-MappingStructureMappingInput11](/img/content/WSD-MappingStructureMappingInput11.png){:class="img-responsive"}

Confirm your entries with OK. This completes our mapping scenario.


**Mapping structure parameters to table values**

In the following example we show you how to map structure parameters of a WebService operation to input table values of a SAP function module.  

As example we choose the function module BAPI_REQUISITION_CREATE. This function module is used to create purchase requisitions. The requisiton items are transferred to table REQUISITION_ITEMS. In our scenario we want to transfer only one item using five mandatory input parameters: Material, Quantity, Plant, Delivery Date and DocType.   

The aim of our scenario is to define a structure parameter that contains five structure elements and to map these elements to the above mentioned input parameters of table REQUISITION_ITEMS.

You first have to create an operation which calls the function module BAPI_REQUISITION_CREATE and then return to the overview page. As a next step you have to define your structure parameter. Click the button *Custom Data Types* and select *New* for creating a new data type named *ReqItem*. This data type should include five elements: Material, Quantity, Plant, Delivery Date and DocType. 

![WSD-MappingStructureNewCustomDataType1](/img/content/WSD-MappingStructureNewCustomDataType1.png){:class="img-responsive"}

To create the relevant elements you can either enter them manually using the *New* button or you can make use of the import function as described in the following steps.

![WSD-MappingStructureNewCustomDataType2](/img/content/WSD-MappingStructureNewCustomDataType2.png){:class="img-responsive"}

Select function module BAPI_REQUISITION_CREATE to import the required elements.

![WSD-MappingStructureNewCustomDataType3](/img/content/WSD-MappingStructureNewCustomDataType3.png){:class="img-responsive"}

Select table REQUISITION_ITEMS in the following dialog window and click *Next*. 

![WSD-MappingStructureNewCustomDataType4](/img/content/WSD-MappingStructureNewCustomDataType4.png){:class="img-responsive"}

At first all table fields are selected. Use button Deselect *All* to untag the fields. After that you can select the relevant fields you want to use as elements in your structure parameter. Confirm your entries with *Finish*. 


![WSD-MappingStructureNewCustomDataType5](/img/content/WSD-MappingStructureNewCustomDataType5.png){:class="img-responsive"}

Confirm the following two dialog windows with *OK*.

![WSD-MappingStructureNewCustomDataType6](/img/content/WSD-MappingStructureNewCustomDataType6.png){:class="img-responsive"}

![WSD-MappingStructureNewCustomDataType7](/img/content/WSD-MappingStructureNewCustomDataType7.png){:class="img-responsive"}

As a next step we define a input parameter that contains the above defined data structure. We name the new parameter *SAPReqItems* and select *ReqItem* as Data Type. Confirm your entries with *OK*. Having done this you have successfully created your structure parameter.

![WSD-MappingStructureNewParameter](/img/content/WSD-MappingStructureNewParameter.png){:class="img-responsive"}

Open the activity dialog window to do the mapping. Scroll down to input table REQUISITION_ITEMS and open the Mapping Expression dialog window by clicking the button with the three points on the right side.  

![WSD-MappingStructureMappingInput18](/img/content/WSD-MappingStructureMappingInput18.png){:class="img-responsive"}

![WSD-MappingStructureMappingInput1](/img/content/WSD-MappingStructureMappingInput1.png){:class="img-responsive"}

In the *Mapping Fix Value Table Dialog* click *New*. You get a list of all available fields of table REQUISITION_ITEMS here. Mark the line with field DOC_TYPE and click the button with the three points on the right side to get to the mapping settings of this field.  

![WSD-MappingStructureMappingInput12](/img/content/WSD-MappingStructureMappingInput12.png){:class="img-responsive"}

As a mapping parameter structure parameter SAPReqItems is available here. Select it with a double-click.

![WSD-MappingStructureMappingInput2](/img/content/WSD-MappingStructureMappingInput2.png){:class="img-responsive"}

It is crucial now  to add a reference to the above defined elements of structure parameter SAPReqItems.
In the case of element DOC_TYPE you have to add the ending .*DOC_TYPE* to the mapping expression. Note that a difference is made between small and capital letters.

![WSD-MappingStructureMappingInput3](/img/content/WSD-MappingStructureMappingInput3.png){:class="img-responsive"}

Following this procedure you can map all the remaining elements to the corresponding table fields. Confirm your entries with *OK*.

![WSD-MappingStructureMappingInput4](/img/content/WSD-MappingStructureMappingInput4.png){:class="img-responsive"}

![WSD-MappingStructureMappingInput5](/img/content/WSD-MappingStructureMappingInput5.png){:class="img-responsive"}

The mapping scenario is now complete. 