In this chapter, we show you how to map different output parameters of an SAP function module to scalar output parameters of a web service operation. Note that the mapping direction is now reversed: From the function module to the web service parameters. 


**Mapping structure parameters to scalar parameters**

The following example shows you how to map a structure parameter of a function module to scalar parameters of a web service operation. 

We use the function module BAPI_COMPANYCODE_GETDETAIL as an application. This function module reads company information for a particular company code and lists the results in several structure parameters.    

The aim of this scenario is to map the fields CITY, COMP_NAME and COMP from the output structure COMPANYCODE_DETAIL to the scalar output parameters CompanyID, CompName and City of the web service operation.  

Create an operation that calls the function module BAPI_COMPANYCODE_GETDETAIL and return to the overview page. 

Then define your scalar output parameters. 

![WSD-MappingStructureMappingOutput6](/img/content/WSD-MappingStructureMappingOutput6.png){:class="img-responsive"}

Close your entries with OK and open the activity dialog. 
Mapping an output structure to scalar parameters only works via the advanced settings. Go to the *Advanced* tab and click *New* under *Output Mappings*. All defined scalar output parameters are now displayed in the dialog box. <br>
The corresponding fields of the structure parameter COMPANYCODE_DETAIL are now to be mapped to these parameters.  

![WSD-MappingStructureMappingOutput8](/img/content/WSD-MappingStructureMappingOutput8.png){:class="img-responsive"}

Select the output parameter CompanyID and call the mapping expression. In the Mapping Expression dialog, switch to the tab page *Function Parameters* and double-click the structure COMPANYCODE_DETAIL. 

![WSD-MappingStructureMappingOutput9](/img/content/WSD-MappingStructureMappingOutput9.png){:class="img-responsive"}

Under *Mapping Expression*, you must now define which fields of the structure are to be mapped with the output parameter CompanyID. If you require the field names, look in the SAP output structure of the function module BAPI_COMPANYCODE_GETDETAIL.

![WSD-MappingStructureMappingOutput10](/img/content/WSD-MappingStructureMappingOutput10.png){:class="img-responsive"}

The field *COMP* is to be mapped with the scalar output parameter CompanyID. This process must be added manually as syntax in the Mapping Expression line. 

In this example, the command is *["COMP"].ToString* ()<br>
Confirm the entries with OK.

![WSD-MappingStructureMappingOutput11](/img/content/WSD-MappingStructureMappingOutput11.png){:class="img-responsive"}

Proceed in the same way with the other two parameters. Map the field *COMP_NAME* to the parameter CompName and the field *CITY* to the parameter City. There are then three entries under *Output Mappings* on the *Advanced* tab.

![WSD-MappingStructureMappingOutput12](/img/content/WSD-MappingStructureMappingOutput12.png){:class="img-responsive"}

The mapping of the output parameters is now complete.
  

**Mapping table values to scalar parameters** 


In the next example, we demonstrate how table values of a function module can be mapped to scalar output parameters of a web service operation.

The BAPI_REQUISITION_CREATE function module serves as an example. This function module is used to create purchase requisitions in SAP. The results of the executed function module are returned in table RETURN. The aim is to map the *Message* field of the RETURN output table to the ResultMessage output parameter of the web service operation.  

First create an operation that calls the function module BAPI_REQUISITION_CREATE and return to the overview page. Then create the output parameter. Open the parameter dialog box and create a new entry with *New*. Name the parameter *ResultMessage*. The direction for output parameters is *Output*.  

![WSD-MappingSkalarMappingOutput9](/img/content/WSD-MappingSkalarMappingOutput9.png){:class="img-responsive"}

The next step is to map the value *Message* of the output table RETURN to the output parameter *ResultMessage*. <br>
To do this, open the *Advanced* tab in the activity dialog. It is not possible to perform the following actions in the standard tab.  
In the *Advanced* window you will find the two areas *Input Mappings* and *Output Mappings*. The areas should be empty if you have not performed any mapping activities before. 
Under *Output Mappings*, click on *New* to continue mapping the output parameters.

![WSD-MappingSkalarMappingOutput2](/img/content/WSD-MappingSkalarMappingOutput2.png){:class="img-responsive"}

Double-click the output parameter *ResultMessage* and click on the button with the three dots to the right of the Mapping Expression line to open the Mapping Expression dialog.

![WSD-MappingSkalarMappingOutput4](/img/content/WSD-MappingSkalarMappingOutput4.png){:class="img-responsive"}

Call the tab *Function Parameters* and scroll to the table RETURN. Call this table by double-clicking it to set the function parameter in the *Mapping Expression* field. 

![WSD-MappingSkalarMappingOutput5](/img/content/WSD-MappingSkalarMappingOutput5.png){:class="img-responsive"}

The rest of the command syntax must be added manually in the *Mapping Expression* field. From line 1 of the table, the instance Message is to be written to the output list. 

The command is therefore .*Rows[0]["Message"].ToString*() 

![WSD-MappingSkalarMappingOutput6](/img/content/WSD-MappingSkalarMappingOutput6.png){:class="img-responsive"}

Confirm the entries with OK.

![WSD-MappingSkalarMappingOutput7](/img/content/WSD-MappingSkalarMappingOutput7.png){:class="img-responsive"}

![WSD-MappingSkalarMappingOutput8](/img/content/WSD-MappingSkalarMappingOutput8.png){:class="img-responsive"}

The mapping of the output parameters is now complete. 