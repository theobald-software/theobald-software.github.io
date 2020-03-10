---
ref: xu-destinations-14
layout: page
title: Flat File - JSON
description: Flat File - JSON
product: xtract-universal
parent: xu-destinations
childidentifier: JSON-flat-file
permalink: /:collection/:path
weight: 14
lang: en_GB

---

**JSON Flat File**<br>
The destination is a JSON flat file. 

The following options can be defined for the JSON flat file destination.

![JSON-Flat-Destination-Details](/img/content/JSON-Flat-Destination-Details.png){:class="img-responsive"}

**File**

**Directory**<br>
Defines the directory to save the destination flat files.

**JSON Settings**

**Column seperator**<br>
Defines how two columns in JSON are separated.

**Row separator**<br>
Defines how two rows in JSON are separated.

**Quote symbol**<br>
Defines which character will be encased in the value of a table row, if the value contains the column separator.

**Column names in first row**<br>
Defines if the first row contains the column names. This option is set per default.

**Row separator after last row**<br>
Defines if the last row contains a row separator. This option is set per default.


**Convert / Encoding**

**Decimal separator**<br>
Defines the decimal separator of decimal number for the output. Dot (.) is the default value. 
             
**Date format**<br>
Defines a customized date format (e.g. YYYY-MM-DD or MM/DD/YYYY) for converting valid SAP dates (YYYYMMDD). Default is YYYY-MM-DD.

**Time format**<br>
Defines a customized time format (e.g. HH-MM-SS or HH:MM:SS) for converting valid SAP times (HHMMSS). Default is HH:MM:SS.

**Text Encoding** <br>
Defines the text encoding. 

**Extraction-specific settings**

Click on Destination to define extraction-specific settings.

![XU_flatfile_JSON_Destination](/img/content/XU_flatfile_JSON_Destination.png){:class="img-responsive"}

**File Name**

Specify the name of the target file here. You have the following options:<br>
**Same as name of SAP object**<br>
**Same as name of extraction** and<br>
**Custom** to specify a custom name yourself.

**Append timestamp**: create a new target file and add timestamp to the file name.

**Column Name Style**:<br>
Code, CodeAndText or TextAndCode. Defines, whether the column name displays the technical name or the technical name and description of the SAP column.

**Date Conversion**

**Convert invalid dates to** <br>
Every invalid value will be converted into this value. NULL is supported as value. <br>
You should set this value to be used in case of non convertible date values.  <br>
During the conversion of invalid SAP dates the two specific cases 00000000 and 9999XXXX will be checked at first. 

**Convert 00000000 to** <br>
Converts all SAP date 00000000 to the specified value. 

**Convert 9999XXXX to** <br>
Converts all SAP date 9999XXXX to the specified value.                                                
                          
**Existing files** 

**Replace file**: The export process will overwrite existing files.<br>
**Append results**: The export process will append new data to an already existing file.<br>
**Abort extraction**: The process will be aborted if the file already exists. 


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}