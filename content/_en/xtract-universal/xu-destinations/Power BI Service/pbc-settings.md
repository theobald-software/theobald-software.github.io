---
ref: xu-powerbi-cloud-03
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: Power BI Service
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=powerbi-settings
---

Click on **Extraction-Specific Settings** to define the destination settings of the extraction.

![powerbi-settings](/img/content/powerbi-settings.jpg){:class="img-responsive"}

**Automatic dataset** <br>
A dataset including one table will be created.  

**Dataset and table Name**<br>
Specify the name of the dataset and the table. You have the following options:
- Same as name of SAP object
- Same as name of extraction and
- Custom to specify a custom name yourself.

**Column Name Style **

Defines the style of the column name. Following options are available: 

![Ex-Spec-Settings-Makt-ColumnName](/img/content/Ex-Spec-Settings-Makt-ColumnName.jpg){:class="img-responsive"}

Code: The SAP technical column name will be used as column name, e.g. MAKTX.<br>
CodeAndText: The SAP technical column name and the SAP description separated by an underscore will be used as column name, e.g. MAKTX_Material Description (Short Text).<br>
TextAndCode: The SAP description and the SAP technical column name description separated by an underscore will be used as column name, e.g. Material Description (Short Text)_MAKTX.


**Date Conversion** 

**Convert date strings**<br> 
Converts SAP dates (YYYYMMDD, e.g. 19900101) into a formatted date value. In the destination the date field does not have a string data type but a date data type (YYYY-MM-DD, e.g. 1990-01-01). 

**Convert invalid dates to** <br>
Every invalid value will be converted into this value. NULL is supported as value. 
You should set this value to be used in case of no convertible date values.  
During the conversion of invalid SAP dates the two specific cases 00000000 and 9999XXXX will be checked at first. 

**Convert 00000000 to** converts all SAP date 00000000 to this value. <br>
**Convert 9999XXXX to** converts all SAP date 9999XXXX to this value.

**Power Bi Settings** <br>
**Rows per Package** <br>
The number of rows that are written to the Dataset table in a request package.
You can change the default value to find an optimal value. 

**Custom Dataset** 

Here you have the possibility to create a custom Dataset.
The custom Dataset can have as many tables as you define.
Please note that the PowerBI interface does not allow to add tables after the Dataset has been created. 

![powerbi-settings-custom-01](/img/content/powerbi-settings-custom-01.jpg){:class="img-responsive"}

**Create dataset**<br>
Click the button to create a new Dataset. 

![powerbi-settings-custom-02](/img/content/powerbi-settings-custom-02.jpg){:class="img-responsive"}

Enter the name of the Dataset and the tables to be created. 

![powerbi-settings-custom-03](/img/content/powerbi-settings-custom-03.jpg){:class="img-responsive"}

Click on **create** to confirm.

![powerbi-settings-custom-04](/img/content/powerbi-settings-custom-04.jpg){:class="img-responsive"}

To specify an existent **Dataset** and a **table** please select a Dataset and a Table from the list.  

![powerbi-settings-custom-05](/img/content/powerbi-settings-custom-05.jpg){:class="img-responsive"}

When you run the extraction the SAP data will be written to the specified table in the Dataset. 