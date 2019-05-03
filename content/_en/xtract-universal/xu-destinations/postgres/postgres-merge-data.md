---
ref: xu-postgres-05
layout: page
title: Merge Data
description: merge Data
product: xtract-universal
parent: postgres
permalink: /:collection/:path
weight: 5
lang: en_EN
---

In this example we want to update existing records.<br>

It is important that an appropriate index is created to quickly execute the merge command. Without an index, the execution of the merge command would take a long time depending on the amount of data. 

Let's take a look at the record for work 1200, the field NAME2 has the value NULL.

![Select-Before-Merge](/img/content/xu/select_werks_1200.png){:class="img-responsive"}

Now we overwrite the field NAME2 with the value 'Hamburg'.

![Update-Merge-Example-Data](/img/content/xu/update_werks_1200.png){:class="img-responsive"}

Now we change the extraction specific settings and set 

- Preparation on *Prepare Merge,* to create a temporary staging table.
- Row Processing on *Fill merge staging table* to add data to the staging table and 
- Finalization to *Finalize Merge* to merge the staging table with the target table and then delete the staging table.

![Extraction-Specific-Settings-Merge-Makt](/img/content/xu/destination_data_merge.png){:class="img-responsive"}

The Merge command ensures that new records are inserted or existing records are updated. <br>
An update is executed for existing data records, otherwise an insert.

Which fields are updated can be found in the SQL statement. <br>
Here you can change the SQL statement if necessary, for example to exclude certain columns from the update.<br>
Fields that do not appear in the SQL statement are not affected by changes.

During execution, the field *NAME2* was updated with the value from SAP.

![Merge-Result-Table-Data](/img/content/xu/merge_name2_werks_1200.png){:class="img-responsive"}




