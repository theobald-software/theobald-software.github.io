---
layout: page
title: List-based parameters
description: List-based parameters
product: erpconnect-services
parent: output-parameter-mapping
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=list_based_parameters
---
In the following example we show you how to map output table values of a SAP function module to list-based parameters of a WebService operation. List-based parameters are similar to structure parameters. They also contain a number of parameters but unlike structure parameters they do contain these parameters in form of a list. List-based parameters are especially designed for mapping table values. 

As example we use the function module BAPI_EMPLOYEE_GETDATA. This function module reads personell master data and returns the results in different output tables. 
The aim of our scenario is to define a list-based parameter that contains the elements EMPLOYEE_ID, LASTNAME_M and FSTNAME_M and to map the corresponding fields of output table PERSONAL_DATA to these elements.
  
You first have to create an operation which calls the function module  BAPI_EMPLOYEE_GETDATA and then return to the overview page. As a next step you have to define your list-based parameter. Click the button *Custom Data Types* and then click *New* for creating a new data type named *Personal*. This data type should include the elements EMPLOYEE_ID, LASTNAME_M and  FSTNAME_M.

![WSD-MappingListMappingOutput1](/img/content/WSD-MappingListMappingOutput1.png){:class="img-responsive"}

As a next step you have to define the list-based input parameter. Open the *Parameters Dialog* in the overview page klick New to create a new entry. Name the new parameter *PersonalData* and select *ListofPersonal* in the Data Type field. Confirm your entries with OK. You sucessfully created your list-based parameter with this. 

![WSD-MappingListMappingOutput2](/img/content/WSD-MappingListMappingOutput2.png){:class="img-responsive"}

Open the activity dialog window to do the mapping. Scroll down to ouput table PERSONAL_DATA and select list-based parameter *PersonalData* in the dropdown list in the *Mapping* column.  Click the button with the three points on the right side to call up the mapping expression settings.    

![WSD-MappingListMappingOutput3](/img/content/WSD-MappingListMappingOutput3.png){:class="img-responsive"}

Using the dropdown-list in the mapping column you can assign every table field of output table PERSONAL_DATA to the corresponding elements of list-based parameter *PersonalData*. 

![WSD-MappingListMappingOutput4](/img/content/WSD-MappingListMappingOutput4.png){:class="img-responsive"}

For elements that are named the same way on SAP side and the WebService designer you can use the *Automap* button. In our example list element EMPLOYEE_ID has to be  mapped manually to the corresponding field PERNO in table PERSONAL_DATA because they are named differently.

![WSD-MappingListMappingOutput5](/img/content/WSD-MappingListMappingOutput5.png){:class="img-responsive"}

![WSD-MappingListMappingOutput6](/img/content/WSD-MappingListMappingOutput6.png){:class="img-responsive"}

Confirm your entries with OK. With this our mapping scenario is complete.