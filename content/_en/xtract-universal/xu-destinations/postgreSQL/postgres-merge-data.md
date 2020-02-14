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

The following example depicts the update of the existing data records in a database by running an extraction to merge data, i.e. insert a new data row or update an existing one. 

{:.box-warning}
**Warning! Erroneous merge** <br>
A primary key is a prerequisite for a merge command. If no primary key is set, the merge command runs into an error.
Create an appropriate primary key in the [extraction settings](../../advanced-techniques/general-settings) to execute the merge command.

### Updating a value in SAP

1. In a table (T001W) "Plants" there is adata record "WERKS" = '1200' with the value *NULL* in the field **NAME2**.

2. Field NAME2 is updated with the value 'Hamburg'.


{% include _content/en/xu-specific/xu-destinations/merge-data/db-merge-data.md  %}

### Checking the updated record in the database
Check the database for the updated records. In the given example, the field *NAME2* was updated with the value from SAP during execution.


 



