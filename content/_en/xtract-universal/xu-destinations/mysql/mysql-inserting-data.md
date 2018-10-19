---
ref: xu-mysql-04
layout: page
title: Inserting Data
description: Inserting Data
product: xtract-universal
parent: mysql
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=mysql-inserting_data
---

In this example we will load an extraction to a MySQL database table.

**Define extraction** 

We define an extraction based on the SAP table T001W which stores plants/branches.

![mysql_table_extraction_T001W](/img/content/mysql_table_extraction_T001W.png){:class="img-responsive"}

**Set destination** 
We set the destination connection for the database.  

![mysql_Destination_Details2](/img/content/mysql_Destination_Details2.png){:class="img-responsive"}

**Define settings** 
We apply the default settings.

![mysql_extraction_specific_settings2](/img/content/mysql_extraction_specific_settings2.png){:class="img-responsive"}

The Preparation option *Drop & Create* drops an existent table and creates a new one.  
Optional: You can preview the SQL statement or use it as a template for your own SQL statements.
Select the list value *Custom SQL* for Preparation then click on the *Edit SQL* button.

![mysql_extraction_specific_settings_custom_SQL](/img/content/mysql_extraction_specific_settings_custom_SQL.png){:class="img-responsive"}

In the new dialog select *Drop & Create* and click on *Generate Statement*. 
Columns will be created using the most appropriate data type. 

![mysql_extraction_specific_settings_generate_statement](/img/content/mysql_extraction_specific_settings_generate_statement.png){:class="img-responsive"}

**Run extraction** 

Click the button *Run*. In the dialog Run Extraction click  on either of the two *Run* buttons to run the extraction. 

![mysql_table_extraction_T001W_Run](/img/content/mysql_table_extraction_T001W_Run.png){:class="img-responsive"}

Click on *Refresh* in the Designer to check the execution status. In our example 238 rows have been loaded to the database. 

![mysql_table_extraction_T001W_Run_Result](/img/content/mysql_table_extraction_T001W_Run_Result.png){:class="img-responsive"}

**Check the result in the database** 

Use the MySQL Workbench to see the table structure and content. 

![mysql_table_extraction_T001W_Editor_Result](/img/content/mysql_table_extraction_T001W_Editor_Result.png){:class="img-responsive"}

