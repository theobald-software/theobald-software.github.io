---
layout: page
title: Extract Table Data
description: Extract Table Data
product: xtract-rs
parent: sap-tables
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-RS-EN/default.aspx?pageid=extract-table-data
---

Click the binocular button to open a dialog for selecting a table. Enter the name of the table (wildcards like * are supported) and click the binocular button again to invoke the search.

![Table-Search-001](/img/content/Table-Search-001.png){:class="img-responsive" }

The editor is now filled in with all the columns from the table. The columns must be marked in the checkbox before they can be extracted.

![Table-Search-002](/img/content/Table-Search-002.png){:class="img-responsive" }


To define a WHERE statement, please fill in the multiline text box below the grid.

**Attention!!**  It is the SAP Open SQL. In contrast to the classic SQL from the SQL Server, this SQL supports is substantially curtailed.