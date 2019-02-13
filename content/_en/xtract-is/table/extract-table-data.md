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

Place the component on your data flow task by dragging it from the toolbox with your mouse. Double-click the icon to open the editor.

![Table-01](/img/content/Table-01.png){:class="img-responsive" width="200px" }

If you want to assign a connection manager manually, please use the right mouse button and choose Advanced Editor. If you don't do this, a connection manager will be assigned automatically. Normally this is sufficient.
Click the binocular button to open a dialog for selecting a table. Enter the name of the table (wildcards like * are supported) and click the binocular button again to invoke the search.

![Table-02](/img/content/Table-02.png){:class="img-responsive" width="600px" }

The editor is now filled with all columns from the table. The columns must be marked in the checkbox before they can be extracted.

![Table-03](/img/content/define_data_source_XIS_table.png){:class="img-responsive"}

To filter the result, you can use a large text field to define a where condition. 
In this example, the following was selected:<br>
*(VKORG = '1000' OR VKORG = '2000') AND ERDAT > '20010101'*

The entered expression must correspond to the SAP OpenSQL syntax, for example, the expression must contain a space before and after the operator. 
Also pay attention to the format of the values, for example, a date must be entered in the SAP notation YYYYMMDD.

Optionally, click on the *Preview* button to preview the extraction.

![Table-04](/img/content/preview_Xtract_IS_table.png){:class="img-responsive"}

**Variables**

It is also possible to use SSIS variables in the Where string as you are used to with SQL statements. 
For example, define a variable VKORG in the data flow task and formulate your where statement as follows: VKORG = @vkorg. 
Xtract IS recognizes from the @ symbol that this placeholder must be replaced.

As soon as the data source is configured accordingly, the output columns are available for further processing.


