---
ref: xi-table-01
layout: page
title: Extract Table Data
description: Extract Table Data
product: xtract-is
parent: table
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=extract-table-data
---

Drage the component from the SSIS toolbox on your data flow task. Double-click the icon to open the editor.

![Table-01](/img/content/Table-01.png){:class="img-responsive" width="200px" }

If you want to assign a connection manager manually, please use the right mouse button and choose *Advanced Editor*. If you don't do this, a connection manager will be assigned automatically. Normally this is sufficient.
Click the *Add* button to open a dialog for table lookup. Enter the name of the table (wildcards like * are supported) and click on the *lloking glass* button to invoke the search.

![Table-Lookup](/img/content/Table-Lookup.png){:class="img-responsive" width="600px" }

The editor is now filled with all columns from the table. The columns are automatically selected for table extraction. Deselect the ones you don't wish to extract.
By clicking on the header fields, you can sort the columns by name or description. Start typing a column name or description in the filter boxes to apply a display filter.

![Table-Main](/img/content/Table-Main.png){:class="img-responsive"}

If you wish to extract only certain table data you can use a where condition. Click on the tab *WHERE clause*. 
In this example, the following was selected:<br>
*(LIKP\~VKORG = '1000' OR LIKP\~VKORG = '2000') AND LIKP\~ERDAT > '20010101'*

The entered expression must correspond to the SAP OpenSQL syntax. For example, the expression may require a space before and after the operator. 
Also pay attention to the format of the values. For example, a date field must be entered in the SAP notation YYYYMMDD.

Optionally, click on the *Preview* button to preview the extraction.

![Table-Where](/img/content/Table~Where.png){:class="img-responsive"}

**SSIS Variables**

It is also possible to use SSIS variables in the Where string as you are used to with SQL statements. 
For example, define a variable VKORG in the data flow task and formulate your where statement as follows: LIKP\~VKORG = @vkorg. 
Xtract IS recognizes the @-symbol and replaces the placeholder with the corresponding SSIS variable.

As soon as the data source is configured accordingly, the output columns are available for further processing.


