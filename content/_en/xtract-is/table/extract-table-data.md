---
ref: xi-table-01
layout: page
title: Extracting Table Data
description: Extract Table Data
product: xtract-is
parent: table
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=extract-table-data
---
### Adding tables

1. Within the window "Define data source for SAP Tables", click **[Add]**. The window "Table lookup" opens.
![Table-Lookup](/img/content/table/table_main-window_add.png){:class="img-responsive" }
2. Enter the name of the SAP table and click **[Search]** (maginfying glass).  
![Table-Lookup](/img/content/Table-Lookup.png){:class="img-responsive" }
3. Select a table in the result list and click **[OK]**.

{: .box-tip }
**Tip:** Wildcards uch as * are supported. Make sure to place them after the name of the searched item.

To extract only certain table data use a [WHERE-condition](./where-clause).


### Filtering tables

The subsection **Fields** displays all columns of the selected table. The columns are automatically selected for table extraction. Deselect the ones you don't wish to extract.<br>
Click the header fields to sort the columns by name or description.<br>
To search for a certain column name or description, start typing the word in the filter boxes.<br>

![Table-Main](/img/content/table/fields_filter-search.png){:class="img-responsive"}

### Using live preview

Click **[Load live preview]** to load 100 records for preview.



