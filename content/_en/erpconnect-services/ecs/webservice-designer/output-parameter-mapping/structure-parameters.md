---
ref: ecs-wd-output-parameter-mapping-02
layout: page
title: Structure parameters
description: Structure parameters
product: erpconnect-services
parent: output-parameter-mapping
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=structure_parameters1
---

Mapping structure parameters to structure parameters

In the following example we show you how to map structure parameters of a SAP function module to structure parameters of a WebService operation.

As example we use function module BAPI_COMPANYCODE_GETDETAIL. This function module returns detailed information such as adress data for a specific company code. The results are listed in different structure parameters such as COMPANYCODE_DETAIL.
Aim of this scenario is to map the fields CITY, COMP_NAME and COMP of structure parameter COMPANYCODE_DETAIL to the corresponding elements of a structure parameter named *CompanyDetails* we create in our WebService operation.   

You first have to create an operation which calls the function module BAPI_COMPANYCODE_GETDETAIL and then return to the overview page. 
Then you have define a data type that contains the  elements *Name, City* and *CompanyCode*. Click the *Custom Data Types* button and enter a name for your data type (e.g. *CompanyDetails*). Click *New* to create new entries and select *String* as Data Type.   

![WSD-MappingStructureMappingOutput1](/img/content/WSD-MappingStructureMappingOutput1.png){:class="img-responsive"}

Following this you have to define a output parameter that contains the above defined structure *CompanyDetails*. We name the parameter *Details*.

![WSD-MappingStructureMappingOutput2](/img/content/WSD-MappingStructureMappingOutput2.png){:class="img-responsive"}

After that open the *Execute Function Activity Dialog* and scroll down to output parameter COMPANYCODE_DETAIL to start with the mapping activities. 
Select the above defined output parameter in the dropdown list below the *Mapping* column and open the *Mapping Structure Dialog* by clicking the button with the three points on the right side of the *Mapping Expression* field. 


![WSD-MappingStructureMappingOutput4](/img/content/WSD-MappingStructureMappingOutput4.png){:class="img-responsive"}

Use the dropdown list in the *Mapping* column to map all the relevant fields of structure parameter COMPANYCODE_DETAIL to the elements *Name, City* and *CompanyCode* of the above defined structure parameter *Details*. Confirm your entries with *OK*.

![WSD-MappingStructureMappingOutput5](/img/content/WSD-MappingStructureMappingOutput5.png){:class="img-responsive"}

With this our mapping scenario is complete.