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

Drag the component from the SSIS toolbox on your data flow task. Double-click the icon to open the editor.

![Table-01](/img/content/Table-01.png){:class="img-responsive" width="200px" }


Click on the *Add* button to open a dialog for table lookup. Enter the name of the table (wildcards like * are supported) and click on the *looking glass* button to invoke the search. Mark the table in the result list and click OK.

![Table-Lookup](/img/content/Table-Lookup.png){:class="img-responsive" width="600px" }

The editor is now filled with all columns from the table. The columns are automatically selected for table extraction. Deselect the ones you don't wish to extract.
By clicking on the header fields, you can sort the columns by name or description. Start typing a column name or description in the filter boxes to apply a display filter.

![Table-Main](/img/content/Table-Main.png){:class="img-responsive"}

Click on the *Load live preview* button to load 100 records for preview.

If you wish to extract only certain table data you can use a where condition. See chapter *WHERE clause*.

As soon as the data source is configured accordingly, the output columns are available for further processing.


