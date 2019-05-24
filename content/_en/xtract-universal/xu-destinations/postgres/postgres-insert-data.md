---
ref: xu-postgres-04
layout: page
title: Insert Data
description: Insert Data
product: xtract-universal
parent: postgreSQL
permalink: /:collection/:path
weight: 4
lang: en_GB
---

In this example we load an extraction into the PostgreSQL database.

**Define Extraction**<br>

We define an extraction based on table T001W for plants.

![Table-Extraction-T001w](/img/content/xu/postgres_table_t001w.png){:class="img-responsive"}

**Determine destination**<br>

We choose a target connection to the database. 

![Destination-Details](/img/content/xu/postgres_destination_details.png){:class="img-responsive"}

**Set settings**<br>

We accept the default settings.

![Extraction-Specific-Settings-T001w](/img/content/xu/postgres_destination.png){:class="img-responsive"}

With the option "Drop & Create" a new table with the name T001W is created. If the table already exists, it may be deleted from the database beforehand.<br> 
You can view the SQL statement for it by selecting *Custom SQL* for Preparation and then clicking *Edit SQL*.

![Extraction-Specific-Settings-Custom-SQL](/img/content/xu/postgres_custom_sqlt.png){:class="img-responsive"}

In the new window select *Drop & Create* and click on *Generate Statement*. 

![Custom-SQL-Drop-And-Create](/img/content/xu/postgres_destination_sql_statement_drop_and_create.png){:class="img-responsive"}

Columns are created with the corresponding data type. You have the option of adjusting the SQL statement or changing it. We leave it with the standard option *Create & Drop* for preparation.

**Execute Extraction**<br>

To perform the extraction, click the *Run* button. In the Run Extraction window, click the *Run* button again. 

![Run-Extraction-T001w](/img/content/xu/postgres_run_extraction.png){:class="img-responsive"}

In the Designer, click Refresh to view the status of the execution. In our example, 239 records have been loaded into the database.  

![Designer-Status](/img/content/xu/postgres_xu_designer_overview.png){:class="img-responsive"}

**Check the result in the database**<br>

In a DB client of your choice, you can view the table structure and content.

![Table-Extracted-Data](/img/content/xu/dbeaver_client_postgres.png){:class="img-responsive"}





