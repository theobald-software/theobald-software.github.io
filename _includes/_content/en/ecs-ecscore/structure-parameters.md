**Mapping structure parameters to a structure**

The following example shows you how to map structure parameters of a function module to an output structure of a web service operation. 

The function module BAPI_COMPANYCODE_GETDETAIL is used as an example. <br>
This function module reads company information for a particular company code and lists the results in several structure parameters such as *COMPANYCODE_DETAIL*.  <br>
The aim of this scenario is to map the fields COMP, COMP_NAME and CITY from the structure parameter COMPANYCODE_DETAIL to the corresponding elements of the structure parameter CompanyDetails of the web service operation.  

First create an operation that calls the function module BAPI_COMPANYCODE_GETDETAIL and return to the overview page.
First create the data type *CompanyDetails* under *Custom Data Types*, which contains the data elements Name, City and CompanyCode.

![WSD-MappingStructureMappingOutput1](/img/content/WSD-MappingStructureMappingOutput1.png){:class="img-responsive"}

Then create the output parameter *Details*, which contains the structure *CompanyDetails* created as the data type.

![WSD-MappingStructureMappingOutput2](/img/content/WSD-MappingStructureMappingOutput2.png){:class="img-responsive"}

Then call the activity dialog and scroll down to the output parameter COMPANYCODE_DETAIL to map the output structure. In the dropdown list under Mapping, choose the Details structure parameter and then call the *Mapping Expression* field. 

![WSD-MappingStructureMappingOutput4](/img/content/WSD-MappingStructureMappingOutput4.png){:class="img-responsive"}

In the dropdown list under Mapping, you find the fields of the structure parameter COMPANYCODE_DETAIL and can map them to the elements *Name, City* and *CompanyCode* of the structure parameter Details. 

![WSD-MappingStructureMappingOutput5](/img/content/WSD-MappingStructureMappingOutput5.png){:class="img-responsive"}

Confirm your entries with OK. The mapping of the output parameters is now complete.

**Mapping scalar parameters to a structure**

It is not possible to map scalar parameters of a function module to an output structure of a web service operation. Use scalar parameters in the web service operation for mapping.