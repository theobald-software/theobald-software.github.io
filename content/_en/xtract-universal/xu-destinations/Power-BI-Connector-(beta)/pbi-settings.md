---
ref: xu-pbi_connector-02
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: Power-BI-Connector-(beta)
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url:
---

You can define the following destination-specific settings:

![pbi-configuration](/img/content/XU_pbi_connector_destination.jpg){:class="img-responsive"}

**Date Conversion** 

**Convert date strings**<br>
Converts SAP dates (YYYYMMDD, e.g. 19900101) into a formatted date value. In the destination the date field does not have a string data type but a date data type (YYYY-MM-DD, e.g. 1990-01-01). 

**Convert invalid dates to** <br>
Every invalid value will be converted into this value. NULL is supported as value. 
You should set this value to be used in case of no convertible date values.  
During the conversion of invalid SAP dates the two specific cases 00000000 and 9999XXXX will be checked at first. 

**Convert 00000000** to converts all SAP date 00000000 to this value.<br> 
**Convert 9999XXXX** to converts all SAP date 9999XXXX to this value.

**Column Name Style** 

Defines the style of the column name. Following options are available: 

![Ex-Spec-Settings-Makt-ColumnName](/img/content/Ex-Spec-Settings-Makt-ColumnName.jpg){:class="img-responsive"}

Code: The SAP technical column name will be used as column name, e.g. MAKTX.<br>
CodeAndText: The SAP technical column name and the SAP description separated by an underscore will be used as column name, e.g. MAKTX_Material Description (Short Text).<br>
TextAndCode: The SAP description and the SAP technical column name description separated by an underscore will be used as column name, e.g. Material Description (Short Text)_MAKTX.