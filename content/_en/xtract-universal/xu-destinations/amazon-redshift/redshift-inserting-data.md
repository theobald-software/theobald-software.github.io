---
ref: xu-amazon-redshift-04
layout: page
title: Inserting Data
description: Inserting Data
product: xtract-universal
parent: amazon-redshift
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=redshift-inserting-data
progressstate: 3
---

In this example we will load an extraction to a Redshift database.


**Define Extraction**

We define an extraction based on the SAP table T001W for plants.

![XU_redshift_table_extraction](/img/content/XU_redshift_table_extraction.png){:class="img-responsive"}

**Set destination**

We set the destination connection for the database.

![XU_redshift_destination](/img/content/XU_redshift_destination.png){:class="img-responsive"}

**Define settings**

We apply the default settings.

![XU_redshift_destination_settings](/img/content/XU_redshift_destination_settings.png){:class="img-responsive"}

The preparation option Drop & Create drops an existing table and creates a new one.
Optional: You can preview the SQL statement or use it as a template for your own SQL statements. Select the list value Custom SQL for Preparation then click Edit SQL.

![XU_redshift_destination_customsql](/img/content/XU_redshift_destination_customsql.png){:class="img-responsive"}

In the new dialog select Drop & Create and click Generate Statement.

![XU_redshift_destination_customsql2](/img/content/XU_redshift_destination_customsql2.png){:class="img-responsive"}

Columns will be created using the most appropriate data type.


**Run Extraction**

Click the button *Run*. In the dialog *Run Extraction* click on *Run in xu.exe* or *Run in Browser* to run the extraction.

![XU_redshift_run_dialog](/img/content/XU_redshift_run_dialog.png){:class="img-responsive"}

In the designer, click on Refresh to check the execution status. In our example 238 rows have been loaded to the database.

![XU_redshift_extraction_overview](/img/content/XU_redshift_extraction_overview.png){:class="img-responsive"}