---
ref: xu-tableau-data-extract-03
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: tableau-data-extract
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=settings
---

Click on Destination to define extraction-specific settings.

![Tableau-Extraction-Specific-Settings](/img/content/Tableau-Extraction-Specific-Settings.png){:class="img-responsive"}
            
**File Name** <br>
Specify the name of the target file here. You have the following options:
**Same as name of SAP object** <br> 
**Same as name of extraction** and
**Custom** to specify a custom name yourself.

Append timestamp: create a new target file and add timestamp to the file name.
                                   
                          
**Existing files** <br>
**Replace file**: The export process will overwrite existing files.<br>
**Append results**: The export process will append new data to an already existing file.<br>
**Abort extraction**: The process will be aborted if the file already exists. 


**Date Conversion**

**Convert date strings** <br> 
Converts SAP dates (YYYYMMDD, e.g. 19900101) into a formatted date value. In the destination the date field does not have a string data type but a date data type (YYYY-MM-DD, e.g. 1990-01-01). 

**Convert invalid dates to** <br>
Every invalid value will be converted into this value. NULL is supported as value.
You should set this value to be used in case of no convertible date values. 
During the conversion of invalid SAP dates the two specific cases 00000000 and 9999XXXX will be checked at first.

**Convert 00000000 to** <br> 
converts all SAP date 00000000 to this value.

**Convert 9999XXXX to** <br> 
converts all SAP date 9999XXXX to this value.