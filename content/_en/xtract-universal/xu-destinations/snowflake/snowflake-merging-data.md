---
ref: xu-snowflake-05
layout: page
title: Merging data
description: Merging data
product: xtract-universal
parent: snowflake
permalink: /:collection/:path
weight: 5
lang: en_GB
---
The following example depicts the merging of the extracted data with the existing data in available tables.<br>

A defined key field in the table is a prerequisite for merging data. Check and define a key field, if needed, in *General Settings -> Primary Key*.

![Snowflake-Extraction-Primary-Key](/img/content/xu/snowflake/snowflake-t001w-primary-key.png){:class="img-responsive"}

When merging, it is advisable to define an index in the target table to accelerate the execution of the merge command.
Without an index an execution of the merge command can take more time than usual depending on the amount of data.

To merge data, first change the extraction-specific settings and set **Preparation** to *None*, as the table already exists.
Then set the **Row processing** to *Merge data to table*.

![Snowflake-Extraction-Specific-Settings-Merge-T001w](/img/content/xu/snowflake/snowflake-t001w-Extraction-Specific-Settings-Merge.png){:class="img-responsive"}

The merge command either inserts (SQL Insert) new data or updates (SQL Update) existing data.<br> 

![Snowflake-Custom-SQL-Merge](/img/content/xu/snowflake/snowflake-t001w-Custom-SQL-Merge.png){:class="img-responsive"}

The updated fields can be seen in the SQL statement. <br>

The SQL statement can be edited to e.g., prevent specific columns from update, if needed. <br>
Fields that are not mentioned in the SQL statement are not updated.

The extraction is successful. 