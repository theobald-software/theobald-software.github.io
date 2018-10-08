---
layout: page
title: Destination Settings
description: Destination Settings
product: xtract-universal
parent: csv-flat-file
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=csv-destination-settings
---

Click on Destination to define extraction-specific settings.

![XU_flatfile_csv_Destination](/img/content/XU_flatfile_csv_Destination.jpg){:class="img-responsive"}
        
           
**File Name**

Specify the name of the target file here. You have the following options:<br>
**Same as name of SAP object** <br>
**Same as name of extraction** and<br>
**Custom** to specify a custom name yourself.

**Append timestamp**: create a new target file and add timestamp to the file name.

**Column Name Style**:<br>
Code, CodeAndText or TextAndCode. Defines, whether the column name displays the technical name or the technical name and description of the SAP column.

**Date Conversion** 

**Convert invalid dates to**<br> 
Every invalid value will be converted into this value. NULL is supported as value. 
You should set this value to be used in case of non convertible date values.  
During the conversion of invalid SAP dates the two specific cases 00000000 and 9999XXXX will be checked at first. 

**Convert 00000000 to** <br>
Converts all SAP date 00000000 to the specified value. 

**Convert 9999XXXX to** <br>
Converts all SAP date 9999XXXX to the specified value.                                                
                          
**Existing files** 

**Replace file**: The export process will overwrite existing files.<br>
**Append results**: The export process will append new data to an already existing file.<br>
**Abort extraction**: The process will be aborted if the file already exists.  

