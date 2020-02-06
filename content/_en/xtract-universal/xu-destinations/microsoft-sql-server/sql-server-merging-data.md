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

In this example we will run an extraction to merge data, i.e. insert a new data row or update an existing one. 

It's important that the destination table has the right index to execute the merge statement with good performance.
Without an index merging data may take very long depend on the amount of data.  

Let's look at the data row for the plant 1000, the field NAME2 has the value NULL.

![MSSql-Select-Before-Merge](/img/content/MSSql-Select-Before-Merge.png){:class="img-responsive"}

Let's update the field NAME2 with the value 'Hamburg'.

![MSSql-Update-Merge-Example-Data](/img/content/MSSql-Update-Merge-Example-Data.png){:class="img-responsive"}

{% include _content/en/xu-specific/xu-destinations/merge-data/db-merge-data.md  %}

In this case the field NAME2 will be updated with the value from the SAP system.

![MSSql-Select-After-Merge](/img/content/MSSql-Select-After-Merge.png){:class="img-responsive"}