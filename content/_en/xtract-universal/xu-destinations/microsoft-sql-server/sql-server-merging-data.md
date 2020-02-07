---
ref: xu-microsoft-sql-server-05
layout: page
title: Merging data
description: Merging data
product: xtract-universal
parent: microsoft-sql-server
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=sql-server-merging-data
---

The following example depicts the update of the existing records in a database by running an extraction to merge data, i.e. insert a new data row or update an existing one. 

{:.box-tip}
**Note:** Create an appropriate index to quickly execute the merge command. Without an appropriate index, the execution of the merge command takes more time depending on the amount of data. 

### Updating a value in SAP
1. In a table (T001W) "Plants" there is a data record "WERKS" = '1200' with the value *NULL* in the field **NAME2**.
![MSSql-Select-Before-Merge](/img/content/MSSql-Select-Before-Merge.png){:class="img-responsive"}

2. Field NAME2 is updated with the value 'Hamburg'.
![MSSql-Update-Merge-Example-Data](/img/content/MSSql-Update-Merge-Example-Data.png){:class="img-responsive"}

{% include _content/en/xu-specific/xu-destinations/merge-data/db-merge-data.md  %}

### Checking the updated record in the database
Check the database for the updated records. In the given example, the field *NAME2* was updated with the value from SAP during execution.

![MSSql-Select-After-Merge](/img/content/MSSql-Select-After-Merge.png){:class="img-responsive"}