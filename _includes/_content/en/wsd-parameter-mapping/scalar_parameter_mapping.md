This chapter explains the procedure for mapping scalar input parameters of a web service operation - that is, parameters with a single value - to various input parameters of an SAP function module. 

**Mapping scalar parameters to structure parameters**

In the following example for mapping scalar input parameters, we show you how scalar input parameters of a WebService operation can be mapped to structure parameters of a function module. 

We use the function module BAPI_CUSTOMER_CREATEFROMDATA1 as an application. You can use the function module to create customer data in the SAP System. To create a data record, the structure parameter PI_PERSONALDATA defined as an input parameter in the function module must be supplied with various values. In the example, we restrict ourselves to the fields FIRSTNAME, LASTNAME, and CITY. 
The aim is to define three scalar input parameters in the WebService operation and map them to the named fields of the structure parameter. 

First create a new operation that calls the function module BAPI_CUSTOMER_CREATEFROMDATA1 and return to the overview page.

Now define your scalar input parameters. Name them like the required fields of the structure parameter: Firstname, Lastname and City.    

![WSD-MappingSkalarMappingInput15](/img/content/WSD-MappingSkalarMappingInput15.png){:class="img-responsive"}

Then call the activity dialog and scroll to the structure parameter PI_PERSONALDATA.

![WSD-MappingSkalarMappingInput16](/img/content/WSD-MappingSkalarMappingInput16.png){:class="img-responsive"}

Select the line and call the dialog box for the mapping settings with the button to the right of the *Mapping Expression* column. All fields of structure PI_PERSONALDATA are listed there.

![WSD-MappingSkalarMappingInput17](/img/content/WSD-MappingSkalarMappingInput17.png){:class="img-responsive"}

Select the line with the FIRSTNAME field and use the button on the right to call up the other mapping settings. Double-click here to select the *Firstname* input parameter of the Web service operation. 

![WSD-MappingSkalarMappingInput18](/img/content/WSD-MappingSkalarMappingInput18.png){:class="img-responsive"}

Proceed in the same way with the other two fields LASTNAME and CITY. 

![WSD-MappingSkalarMappingInput19](/img/content/WSD-MappingSkalarMappingInput19.png){:class="img-responsive"}

Finish your entries with OK. The scenario is now complete. 


**Map scalar parameters to table values**.

The following example shows you how to map scalar input parameters of a Web service operation to table values of a function module using the WebService Designer. 

The BAPI_REQUISITION_CREATE function module is used as an example. <br> 
The function module BAPI_REQUISITION_CREATE is used to create a purchase requisition (PReq) in SAP. <br>
The items are transferred to table REQUISITION_ITEMS. In our scenario, we only want to transfer one item. The following five scalar input parameters are necessary for this: Material, Quantity, Plant, Delivery Date and DocType.<br>
The aim is to define five scalar input parameters in the WebService operation and map them to the above-mentioned fields of theREQUISITION_ITEMS table. 

First create a new operation that calls the function module BAPI_REQUISITION_CREATE and return to the overview page.

Now define your scalar input parameters.  We call them Material, Quantity, Plant, Delivery Date and DocType. 

![WSD-MappingSkalarParameterDialog1](/img/content/WSD-MappingSkalarParameterDialog1.png){:class="img-responsive"}

Then call the activity dialog and scroll down to the input table REQUISITION_ITEMS.

![WSD-MappingSkalarMappingInput1](/img/content/WSD-MappingSkalarMappingInput1.png){:class="img-responsive"}

To map the table, click the input button to the right of the *Mapping Expression* field and choose *New* in the subsequent dialog box. 

![WSD-MappingSkalarMappingInput2](/img/content/WSD-MappingSkalarMappingInput2.png){:class="img-responsive"}

Now assign the input parameters to the corresponding fields. To do this, click the row with the desired table field and click on the input button on the right to access the next dialog box. 

![WSD-MappingSkalarMappingInput14](/img/content/WSD-MappingSkalarMappingInput14.png){:class="img-responsive"}

Select the appropriate input parameter from the list by double-clicking it.

![WSD-MappingSkalarMappingInput3](/img/content/WSD-MappingSkalarMappingInput3.png){:class="img-responsive"}

Assign all input parameters in this way and end your entries with OK.

![WSD-MappingSkalarMappingInput4](/img/content/WSD-MappingSkalarMappingInput4.png){:class="img-responsive"}

![WSD-MappingSkalarMappingInput5](/img/content/WSD-MappingSkalarMappingInput5.png){:class="img-responsive"}

The mapping scenario is now complete.  

**Mapping scalar parameters to scalar parameters**

In the final example of mapping scalar input parameters, we will show you how to map scalar input parameters of a web service operation to scalar input parameters of a function module. 

As an example, we use the function module BAPI_COMPANYCODE_GETDETAIL. This function module reads company information for a particular company code and requires the scalar parameter *COMPANYCODEID* as input parameter. .<br> 
The aim is to define a scalar input parameter in the Web service operation and map it to the *COMPANYCODEID* input parameter of the function module.

First create an operation that calls the function module BAPI_COMPANYCODE_GETDETAIL and return to the overview page. <br>
Create the input parameter as the next step. We call this *CompanyID*. Click on *New* in the Parameters dialog box to create a new entry. Select *String* as the data type and *Input* as the processing direction.  

Optionally, you can define a default value. The result is then restricted to this value.   

![WSD-MappingSkalarMappingInput12](/img/content/WSD-MappingSkalarMappingInput12.png){:class="img-responsive"}

Then open the activity dialog and select the input parameter COMPANYCODEID. Use the button on the right to call the mapping dialog box. Double-click the CompanyID input parameter listed under *Parameters*. 

![WSD-MappingSkalarMappingInput13](/img/content/WSD-MappingSkalarMappingInput13.png){:class="img-responsive"}

The mapping is now complete. 