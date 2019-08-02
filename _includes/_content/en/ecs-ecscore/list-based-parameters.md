In the following example for mapping output parameters, we show you how list-like output parameters can be mapped. A list-type parameter is comparable to a structure parameter, but contains its data elements in the form of a list. List-type parameters were designed for mapping input or output tables.  
 
The BAPI_EMPLOYEE_GETDATA function module is used as an example. The function module reads HR master data and writes the results to various output tables. <br>
The aim of this scenario is to define a list-type parameter that contains the elements EMPLOYEE_ID, LASTNAME_M and FSTNAME_M and to map the corresponding values of the output table PERSONAL_DATA to these list elements.

First create an operation that calls the function module BAPI_EMPLOYEE_GETDATA and return to the overview page. Call the menu option *Custom Data Types* and click on *New* in the following dialog box to create a new data type with the name *Personal*. This data type should contain the elements EMPLOYEE_ID, LASTNAME_M, and FSTNAME_M.

![WSD-MappingListMappingOutput1](/img/content/WSD-MappingListMappingOutput1.png){:class="img-responsive"}

The next step is to define your list-type output parameter. To do this, open *Parameters* in the overview screen and click on *New*. Name the new parameter as *PersonalData* and select *ListofPersonal* as data type. Finish the entries with OK. The list-type output parameter is now created.

![WSD-MappingListMappingOutput2](/img/content/WSD-MappingListMappingOutput2.png){:class="img-responsive"}

Then call the activity dialog to perform the mapping. Scroll to the output table PERSONAL_DATA and select the list-type parameter *PersonalData* from the dropdown list in the mapping field. Click the button on the right with the three dots to call up the Mapping Expression Settings.

![WSD-MappingListMappingOutput3](/img/content/WSD-MappingListMappingOutput3.png){:class="img-responsive"}

You can now use the dropdown list under *Mapping* to select the listed table fields and assign them to the corresponding elements of the list-type parameter. 

![WSD-MappingListMappingOutput4](/img/content/WSD-MappingListMappingOutput4.png){:class="img-responsive"}

Also try the *Automap* function. If the elements have the same names, they can be assigned automatically. This is not the case in our example for the list element EMPLOYEE_ID. In the output table, the field is PERNO and must therefore be assigned manually. 

![WSD-MappingListMappingOutput5](/img/content/WSD-MappingListMappingOutput5.png){:class="img-responsive"}

![WSD-MappingListMappingOutput6](/img/content/WSD-MappingListMappingOutput6.png){:class="img-responsive"}

Confirm your entries with OK. This concludes the mapping in this example.
