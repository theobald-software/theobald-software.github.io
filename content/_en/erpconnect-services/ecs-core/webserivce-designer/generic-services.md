---
layout: page
title: Generic services
description: Generic services
product: erpconnect-services
parent: webserivce-designer
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=generic_functions
---

To use the generic services in the OpenApi definition you have to check the *Add default actions to the definition option* in the WebService Designer's OpenAPI Options.


**ECS Table Query**
 
With the ECS Table Query action the call of any SAP table or view is possible. Drag & drop the action to the designer. You have the following configuration options:

**Table Name**<br>
Name of the SAP table or view to be retrieved.

**Row Skip**


**Row Count**<br>
Maximum numbers of rows to be extracted. 

**Where**<br>
WHERE Clause to be used on the table. The WHERE clause must comply with the SAP OpenSQL syntax. Additional information can be found [here]().

**Order By**<br>
You can define the sort criterion here, that is to say the table field that is used for sorting the result. 

**Custom Function**<br>
This field contains the name of the custom function module used for the table extraction. Supported is the use of custom function Z_XTRACT_IS_TABLE which allows to extract large SAP tables or tables with certain restrictive characteristics. More information about the custom function you find [here](). 

**Use Multibyte Extraktion**

 
**Columns To Retrieve**


**Table Name**


**Columns**


**Rows**


**ECS XQL Query**
