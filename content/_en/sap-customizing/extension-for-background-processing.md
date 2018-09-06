---
layout: page
title: Extension for Background Processing
description: Extension for Background Processing
product: sap-customizing
parent: sap-customizing
permalink: /:collection/:path
weight: 7
lang: en_GB
old_url: /Xtract-RS-EN/default.aspx?pageid=SAPCustomizing-EN:extension-for-background-processing
---

**Warning:** This function module is obsolete. Please use instead the function module *Z_XTRACT_IS_TABLE_COMPRESSION*.

Table data is extracted by default in the dialog, i.e. for each data packet a select is done on the original table and the respective data packet is extracted and sent.

With the help of background extraction, you may make a selection in the background and temporarily deposit it in a buffer table.

In certain cases, this might lead to a significant improvement in performance. Background processing works as follows:

The background application is activated through the selection. In SM37 (job administration), you can check the background job during the extraction process. 

- The background app writes to the ZXTRACTBUFFER table for temporary data.
- The data are downloaded from the ZXTRACTBUFFER table.
- The temporary data are then deleted from the ZXTRACTBUFFER table.

In order to be able to use the extension, the ZXTRACTBUFFER table and the additional functional module Z_XTRACT_IS_TABLE_EX must be installed in SAP.

**Step 1 – Create Table**

The ZXTRACTBUFFER table is created in the data dictionary transaction SE11. It’s entirely up to you which package or development class the table is placed in. The delivery class should be A and the data class should be APPL0 with a size category of 6 (these are all required fields when creating a table).

Please refer to the screenshot below for the table columns. Please note that built-in data types are used, not data elements.

![Background-Processing-01](/img/content/Background-Processing-01.png){:class="img-responsive" }

Please save and activate the table.

- for release 4.7 oder older. The buffer columns goes up to 8. 

![Background-Processing-02](/img/content/Background-Processing-02.png){:class="img-responsive" }

- For relerase 4.7 and higher. The buffer columns goes up to 10

![Background-Processing-03](/img/content/Background-Processing-03.png){:class="img-responsive" }

**Step 2 – Create RFC Function Module**

Create the function module as described in the previous chapter. Please note the slightly different import/export and table parameters as shown in the following screenshots.
The ABAP code can be found in the following files in the installation folder:

Z_XTRACT_IS_TABLE_EX_rel_4.7.txt for Release 4.7 or older
Z_XTRACT_IS_TABLE_EX_greater_than_4.7.txt for Releases newer than 4.7 (e.g. ECC 6.0)

 
![Background-Processing-05](/img/content/Background-Processing-05.png){:class="img-responsive" }
![Background-Processing-06](/img/content/Background-Processing-06.png){:class="img-responsive" }
![Background-Processing-07](/img/content/Background-Processing-07.png){:class="img-responsive" }


**Step 3 – Settings**

To activate background processing, please go to the Extraction Settings dialog and make the following settings. 
Make sure that the name of the module has been correctly entered and that packaging and asynchronous processing are marked off.

Set **PackageSize** to a value, e.g. 50000 .<br>
Set **Custom Function** to Z_XTRACT_IS_TABLE_EX .<br>
Check **Use Custom function**.<br>
Check **Activate Background Extraction**. 