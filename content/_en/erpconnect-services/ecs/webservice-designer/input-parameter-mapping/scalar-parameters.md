---
ref: ecs-wd-input-parameter-mapping-01
layout: page
title: Scalar parameters
description: Scalar parameters
product: erpconnect-services
parent: input-parameter-mapping
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=scalar_parameters
---

In this chapter we show you how to map scalar input parameters - that means parameters with one single item - of a WebService operation to diverse input parameters of a SAP function module.

**Mapping scalar parameters to structure parameters**

In the firest scenario for mapping scalar input parameters we show you how to map scalar input parameters of a WebService operation to structure parameters of a SAP function module. 

As example we use the function module BAPI_CUSTOMER_CREATEFROMDATA1. This function module is used to create customer data. For creating a record the structure parameter PI_PERSONALDATA has to be populated with some data. In our example we confine ourselves on the data fields FIRSTNAME, LASTNAME und CITY. 
The aim of our scenario is to define three scalar input parameters and map these parameters to the above mentioned fields of structure parameter PI_PERSONALDATA.
  
You first have to create an operation which calls the function module BAPI_CUSTOMER_CREATEFROMDATA1 and then return to the overview page. 

As a next step you have to define the scalar input parameters. We name them *Firstname, Lastname* and *City*. 

![WSD-MappingSkalarMappingInput15](/img/content/WSD-MappingSkalarMappingInput15.png){:class="img-responsive"}

After that open the *Execute Function Activity Dialog* and scroll down to structure parameter PI_PERSONALDATA.

![WSD-MappingSkalarMappingInput16](/img/content/WSD-MappingSkalarMappingInput16.png){:class="img-responsive"}

Mark the line with PI_PERSONALDATA and open the mapping settings by clicking the button with the three points on the right side. Every data field of structure parameter PI_PERSONALDATA is listed there.  

![WSD-MappingSkalarMappingInput17](/img/content/WSD-MappingSkalarMappingInput17.png){:class="img-responsive"}

Mark the line with field *FIRSTNAME* and click the button withe the three points on the right side to open the next mapping dialog window. Here you select the input parameter Firstname by making a double-click.

![WSD-MappingSkalarMappingInput18](/img/content/WSD-MappingSkalarMappingInput18.png){:class="img-responsive"}

Following this procedure you can also map the remaining fields LASTNAME and CITY. 

![WSD-MappingSkalarMappingInput19](/img/content/WSD-MappingSkalarMappingInput19.png){:class="img-responsive"}

The mapping scenario is now complete. 


**Mapping scalar input parameters to table values**

In the following example we show you how to map scalar input parameters of a WebService operation to table values of a SAP function module.  

As example we use the function module BAPI_REQUISITION_CREATE. This function module is used to create purchase requisitions. The requisiton items are transferred to table REQUISITION_ITEMS. In our scenario we want to transfer only one item using five mandatory input parameters: Material, Quantity, Plant, Delivery Date and DocType.   
The aim of our scenario is to define five scalar input parameters in our Webservice Operation and map them to the above mentioned  fields of input table REQUISITION_ITEMS.

You first have to create an operation which calls the function module BAPI_REQUISITION_CREATE and then return to the overview page. As a next step you have to define the input parameters. We name them Material, Quantity, Plant, Delivery Date and DocType. To do so open the *Parameters Dialog* box and create the new entries by clicking the New button.  

![WSD-MappingSkalarParameterDialog1](/img/content/WSD-MappingSkalarParameterDialog1.png){:class="img-responsive"}

Once you finished that you can open the *Execute Function Activity Dialog* and scroll down to input table REQUISITION_ITEMS. 

![WSD-MappingSkalarMappingInput1](/img/content/WSD-MappingSkalarMappingInput1.png){:class="img-responsive"}

To map the table fields to your input parameters click the button with the three points on the right side of the *Mapping Expression* column. The *Mapping Fix Value Table Dialog* opens listing all the table fields used by table REQUISITION_ITEMS. Click the *New* button to get to the next dialog window.

![WSD-MappingSkalarMappingInput2](/img/content/WSD-MappingSkalarMappingInput2.png){:class="img-responsive"}

Here you can select the table fields you want to map with your input parameters. You first have to mark the line
with the relevant table field and then click the button with the three points on the right side to get to the next dialog window.

![WSD-MappingSkalarMappingInput14](/img/content/WSD-MappingSkalarMappingInput14.png){:class="img-responsive"}

Make a double-click on the parameter you want to map to the table field. Close the dialog with *OK*.  

![WSD-MappingSkalarMappingInput3](/img/content/WSD-MappingSkalarMappingInput3.png){:class="img-responsive"}

Following this procedure you can map all the other relevant table fields.  

![WSD-MappingSkalarMappingInput4](/img/content/WSD-MappingSkalarMappingInput4.png){:class="img-responsive"}

Confirm your entries with the *OK* button.

![WSD-MappingSkalarMappingInput5](/img/content/WSD-MappingSkalarMappingInput5.png){:class="img-responsive"}

Our mapping scenario is now complete.    


**Mapping scalar parameters to scalar parameters**  

In the final example for mapping scalar input parameters we examine how to map scalar parameters of a WebService operation to scalar input parameters of an SAP function module.  

As example we use the function module BAPI_COMPANYCODE_GETDETAIL. This function module returns detailed information such as adress data for a specific company code. The scalar input parameter *COMPANYCODEID* is a mandatory field. 
The aim of our scenario is to define a scalar input parameter in our WebService operation and to map this parameter to the function modul's input parameter COMPANYCODEID.  

You first have to create an operation which calls the function module BAPI_COMPANYCODE_GETDETAIL and then return to the overview page. As a next step you have to define the input parameter. We name this parameter *CompanyID*. Open the *Parameters* dialog box and click *New*  to create the new entry. In this case Data Type is *String* and *Direction* is Input.

Optional: You can set a default value which means that the result is restrained to this specific value. 

![WSD-MappingSkalarMappingInput12](/img/content/WSD-MappingSkalarMappingInput12.png){:class="img-responsive"}

Open the *Execute Function Activity Dialog* and mark the line with input parameter COMPANYCODEID. Open the Mapping Expression Dialog by clicking on the button on the right side. Here you can select the above defined input parameter CompanyID by making a double-click. Confirm your entries with OK.

![WSD-MappingSkalarMappingInput13](/img/content/WSD-MappingSkalarMappingInput13.png){:class="img-responsive"}

Our mapping scenario is now complete.     
