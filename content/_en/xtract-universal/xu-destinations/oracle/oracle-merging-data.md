---
ref: xu-oracle-05
layout: page
title: Merging Data
description: Merging Data
product: xtract-universal
parent: oracle
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=oracle-merging-data
---

The following example depicts the update of the existing data records in a database by running an extraction to merge data, i.e. insert a new data row or update an existing one. 

{:.box-warning}
**Warning! Erroneous merge** <br>
A primary key is a prerequisite for a merge command. If no primary key is set, the merge command runs into an error.
Create an appropriate primary key in the [extraction settings](../_includes/_content/en/xu-specific/advanced-techniques/general-settings.md) to execute the merge command.

### Updating a value in SAP

1. In a table (T001W) "Plants" there is a data record "WERKS" = '1200' with the value *NULL* in the field **NAME2**.
![Oracle-SQL-Select-Before-Merge](/img/content/Oracle-SQL-Select-Before-Merge.png){:class="img-responsive"}

2. Field NAME2 is updated with the value 'Hamburg'.
![Oracle-Update-Merge-Example-Data](/img/content/Oracle-Update-Merge-Example-Data.png){:class="img-responsive"}
{% include _content/en/xu-specific/xu-destinations/merge-data/db-merge-data.md  %}

### Checking the updated record in the database
Check the database for the updated records. In the given example, the field *NAME2* was updated with the value from SAP during execution.

![Oracle-SQL-Select-After-Merge](/img/content/Oracle-SQL-Select-After-Merge.png){:class="img-responsive"}

