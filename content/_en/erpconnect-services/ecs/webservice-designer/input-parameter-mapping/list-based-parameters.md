---
ref: ecs-wd-input-parameter-mapping-03
layout: page
title: List-based parameters
description: List-based parameters
product: erpconnect-services
parent: input-parameter-mapping
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=list_parameters
---

In the following example we show you how to map list-based parameters of a WebService operation to table values of a SAP function module. List-based parameters are similar to structure parameters. They also contain a number of parameters but unlike structure parameters they do contain these parameters in form of a list. List-based parameters are especially designed for mapping table values.   

As example we use the function module BAPI_REQUISITION_CREATE. This function module is used to create purchase requisitions. The requisiton items are transferred to table REQUISITION_ITEMS. In our scenario we want to transfer only one item using five mandatory input parameters: Material, Quantity, Plant, Delivery Date and DocType.   

The aim of our scenario is to define a list-based input parameter in our WebService Operation which contains five list elements and map these elements to the above mentioned data-fields of input table REQUISITION_ITEMS.

You first have to create an operation which calls the function module BAPI_REQUISITION_CREATE and then return to the overview page. After that click the button *Custom Data Types* and select *New* for creating a new data type named *ReqItem*. This data type should include the elements Material, Quantity, Plant, Delivery Date and DocType.

![WSD-MappingStructureNewCustomDataType6](/img/content/WSD-MappingStructureNewCustomDataType6.png){:class="img-responsive"}

As a next step you to define the list-based input parameter. Open the *Parameters Dialog* in the overview page and click *New* to create a new entry. Name the new parameter *SAPReqItems* and select *ListofReqItem* in the Data Type field. Confirm your entries with OK. You sucessfully created your list-based parameter with this. 

![WSD-MappingSkalarParameterDialog2](/img/content/WSD-MappingSkalarParameterDialog2.png){:class="img-responsive"}

Open the activity dialog window to do the mapping. Scroll down to input table REQUISITION_ITEMS and choose the list-based parameter *SAPReqitems* using the dropdown list in the *Mapping* column.  Click the button with the three points on the right side to call up the mapping expression settings. 

![WSD-MappingSkalarMappingInput9](/img/content/WSD-MappingSkalarMappingInput9.png){:class="img-responsive"}

In the following dialog window you can use the dropdown-list in the *Mapping* column to map the elements of your list-based input parameter to the corresponding fields of input table REQUISITION_ITEMS. If the list elements and table fields are named the same way you may also use the *Automap* function. 

![WSD-MappingSkalarMappingInput10](/img/content/WSD-MappingSkalarMappingInput10.png){:class="img-responsive"}

![WSD-MappingSkalarMappingInput11](/img/content/WSD-MappingSkalarMappingInput11.png){:class="img-responsive"}

Confirm your entries with *OK*. Our mapping scenario is now complete. 