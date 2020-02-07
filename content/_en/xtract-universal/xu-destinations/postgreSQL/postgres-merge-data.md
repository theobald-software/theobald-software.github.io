---
ref: xu-postgres-05
layout: page
title: Merging Data
description: How to merge Data
product: xtract-universal
parent: postgreSQL
permalink: /:collection/:path
weight: 5
lang: en_GB
---

The following example depicts the update of the existing records in a database.<br>

{:.box-tip}
**Note:** Create an appropriate index to quickly execute the merge command. Without an appropriate index, the execution of the merge command takes more time depending on the amount of data. 

### Updating a value in SAP

1. In a table (T001W) "Plants" there is a record "WERK 1200" with the value *NULL* in the field **NAME2**.

![Select-Before-Merge](/img/content/xu/select_werks_1200.png){:class="img-responsive"}

2. Field NAME2 is updated with the value 'Hamburg'.

![Update-Merge-Example-Data](/img/content/xu/update_werks_1200.png){:class="img-responsive"}

{% include _content/en/xu-specific/xu-destinations/merge-data/db-merge-data.md  %}

### Checking the updated record in the database
Check the database for the updated records. In the given example, the field *NAME2* was updated with the value from SAP during execution.

![Merge-Result-Table-Data](/img/content/xu/merge_name2_werks_1200.png){:class="img-responsive"}
 



