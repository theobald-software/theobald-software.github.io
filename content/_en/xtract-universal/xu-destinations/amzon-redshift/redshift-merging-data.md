---
ref: xu-amzon-redshift-05
layout: page
title: Merging Data
description: Merging Data
product: xtract-universal
parent: amzon-redshift
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=redshift-merging-data
---

In this example we will run an extraction to merge data, i.e. insert a new data row or update an existing one.<br>
It is important that the destination table has the right index to execute the merge statement.<br>
In this example, we will use the data extracted in the section "Inserting Data".<br>

Let´s make some changes to the extracted data. We will update the field name2 with the value 'Hamburg'.

![RS-Merge-After-Update](/img/content/RS-Merge-After-Update.png){:class="img-responsive"}

Now let´s change the Extraction Specific Settings and set
- Preparation to Prepare Merge,
- Row Processing to Fill merge staging table
- Finalization to Finalize Merge

![XU_redshift_merge](/img/content/XU_redshift_merge.png){:class="img-responsive"}

The merge statement inserts new rows and updates existing ones.

The SQL statement contains the fields, that will be updated.<br>
The SQL statement can be modified, e.g. if you would not like to update all fields.<br>
Fields that are not contained in the merge statement will not be modified.<br>

In this example the field name2 will be updated with the value from the SAP system.

![RS-Merge-Result](/img/content/RS-Merge-Result.png){:class="img-responsive"}