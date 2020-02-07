---
ref: xu-postgres-05
layout: page
title: Merge Data
description: merge Data
product: xtract-universal
parent: postgreSQL
permalink: /:collection/:path
weight: 5
lang: en_GB
---

In this example we want to update existing records.<br>

It is important that an appropriate index is created to quickly execute the merge command. Without an index, the execution of the merge command would take a long time depending on the amount of data. 

Let's take a look at the record for work 1200, the field NAME2 has the value NULL.

![Select-Before-Merge](/img/content/xu/select_werks_1200.png){:class="img-responsive"}

Now we overwrite the field NAME2 with the value 'Hamburg'.

![Update-Merge-Example-Data](/img/content/xu/update_werks_1200.png){:class="img-responsive"}

{% include _content/en/xu-specific/xu-destinations/merge-data/db-merge-data.md  %}

During execution, the field *NAME2* was updated with the value from SAP.

![Merge-Result-Table-Data](/img/content/xu/merge_name2_werks_1200.png){:class="img-responsive"}




