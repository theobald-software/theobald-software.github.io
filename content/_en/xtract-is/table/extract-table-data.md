---
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

![Table-03](/img/content/Table-03.png){:class="img-responsive" width="800px" }

After choosing at least one column to extract, you can click the preview button.

![Table-04](/img/content/Table-04.png){:class="img-responsive" width="800px"}

You can define your own WHERE clause and put it into the Where Clause text field. Please note that only the SAP OpenSQL syntax is allowed. Please remember that it is necessary to put blanks beween the values and the operators.

To define a WHERE statement, please fill in the multi-line text box below the grid. Please note that DATE values must be provided in the form of YYYYMMDD.

![Table-05](/img/content/Table-05.png){:class="img-responsive" width="800px" }

**Variables**

It is also possible to use SSIS variables within the WHERE statement. Please use the @ symbol to identify SSIS variables, e.g. VKORG = @vkorg.



As soon as the columns are defined, the output columns are ready for further use within your data flow task.
