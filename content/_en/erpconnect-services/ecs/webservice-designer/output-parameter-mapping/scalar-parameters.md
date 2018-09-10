---
layout: page
title: Scalar parameters
description: Scalar parameters
product: erpconnect-services
parent: output-parameter-mapping
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=scalar_parameters_
---

In this chapter we show you how to map diverse output parameters of a SAP function module to scalar output parameters of a WebService operation. Note that the mapping direction here is the other way around: From the function module to the WebService parameters. 


**Mapping structure parameters to scalar parameters**


In the first scenario we examine how to map output parameters of a function module containing a data structure to scalar output parameters of a WebService operation. 
 
As example we use function module BAPI_COMPANYCODE_GETDETAIL. This function module returns detailed information such as adress data for a specific company code. The results are listed in different structure parameters.
Aim of our scenario is to map the fields CITY, COMP_NAME and COMP from output structure COMPANYCODE_DETAIL to the scalar output parametersCompanyID, CompName und City of the WebService Operation.   

You first have to create an operation which calls the function module BAPI_COMPANYCODE_GETDETAIL and then return to the overview page. Following this you have to define your scalar output parameter. 

![WSD-MappingStructureMappingOutput6](/img/content/WSD-MappingStructureMappingOutput6.png){:class="img-responsive"}

Confirm your entries with OK and open the *Execute Function Activity Dialog*. Mapping structure parameters to scalar parameters only works via the *Advanced* ribbon.Click the Advanced ribbon first and then *New* below the *Output Mappings* section. In the dialog window all predefined scalar output parameters are listed. We want to map the corresponding fields of structure parameter COMPANYCODE_DETAIL to these parameters. 

![WSD-MappingStructureMappingOutput8](/img/content/WSD-MappingStructureMappingOutput8.png){:class="img-responsive"}

Double click output parameter CompanyID and open the *Mapping Expression Dialog* by clicking the button with the three points on the right side of the Mapping Expression field. Select ribbon *Function Parameters* and double-click structure parameter COMPANYCODE_DETAIL.


![WSD-MappingStructureMappingOutput9](/img/content/WSD-MappingStructureMappingOutput9.png){:class="img-responsive"}

After that you have to define which structure fields you want to map to the output parameter *CompanyID*. Take a look on the SAP function module BAPI_COMPANYCODE_GETDETAIL to get all the information about the field names of structure parameter COMPANYCODE_DETAIL.

![WSD-MappingStructureMappingOutput10](/img/content/WSD-MappingStructureMappingOutput10.png){:class="img-responsive"}

We want to map the field *COMP* to our scalar output parameter *CompanyId*. You have to complement the rest of the command syntax manually in the *Mapping Expression* field.

In our example the command line will read *["COMP"].ToString ()*
Confirm your entries with *OK*.


![WSD-MappingStructureMappingOutput11](/img/content/WSD-MappingStructureMappingOutput11.png){:class="img-responsive"}

Following this procedure you can also map the other parameters. Map the field *COMP_NAME* to output parameter *CompName* and CITY to output parameter *City*. Below the *Output Mapping* section in the Advanced ribbon three entries are listed then. 

![WSD-MappingStructureMappingOutput12](/img/content/WSD-MappingStructureMappingOutput12.png){:class="img-responsive"}

With this the mapping scenario is complete.
  

**Mapping table values to scalar parameters**

In the next example we show you how to map table values of a SAP Function module to scalar output parameters of a WebService Operation. 

As example we use function module BAPI_REQUISITION_CREATE. This function module is used to create purchase requisitions. The results of the executed function module are presented in table RETURN. Our aim is to map the table field *Message* of output table RETURN to the output-parameter *ResultMessage* of the WebService operation. 
You first have to create an operation which calls the function module BAPI_REQUISITION_CREATE and then return to the overview page. Following this you have to define the output parameter. To do so open the *Parameters Dialog* box and create the new entry by clicking the *New* button. We name the parameter ResultMessage. For output parameters you have to select *Output* in the *Direction* field. 

![WSD-MappingSkalarMappingOutput9](/img/content/WSD-MappingSkalarMappingOutput9.png){:class="img-responsive"}

As a next step we want to map the field *Message* of output table *RETURN* to the above defined output parameter *ResultMessage*.
To do this open the *Execute Function Activity Dialog*. Here you have to switch to the *Advanced* ribbon because it is not possible to perform the following steps via the Standard ribbon. In the Advanced ribbon you find to sections *Input Mappings* and *Output Mappings* which should be empty if you haven't performed any prior input or output mapping actions. Click New below the Output Mappings section to procede with the output parameter mapping. 

![WSD-MappingSkalarMappingOutput2](/img/content/WSD-MappingSkalarMappingOutput2.png){:class="img-responsive"}

First double-click output parameter *ResultMessage* and then open the *Mapping Expression Dialog* by clicking the button with the three points on the right side of the Mapping Expression field. 

![WSD-MappingSkalarMappingOutput4](/img/content/WSD-MappingSkalarMappingOutput4.png){:class="img-responsive"}

Select the ribbon *Function Parameters* and scroll down to table RETURN. Double-click table RETURN to set the function parameter in the Mapping Expression field. 

![WSD-MappingSkalarMappingOutput5](/img/content/WSD-MappingSkalarMappingOutput5.png){:class="img-responsive"}

You have to complement the rest of the command syntax manually in the *Mapping Expression* field. From row one in table RETURN the instance *Message* should be mapped to our output parameter *ResultMessage*. 


As such the command will read *.Rows[0]["Message"].ToString()*

![WSD-MappingSkalarMappingOutput6](/img/content/WSD-MappingSkalarMappingOutput6.png){:class="img-responsive"}

Confirm your entries with OK.

![WSD-MappingSkalarMappingOutput7](/img/content/WSD-MappingSkalarMappingOutput7.png){:class="img-responsive"}

![WSD-MappingSkalarMappingOutput8](/img/content/WSD-MappingSkalarMappingOutput8.png){:class="img-responsive"}

With this the mapping scenario is complete.