---
layout: page
title: Inserting data
description: Inserting data
product: xtract-universal
parent: oracle
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=oracle-inserting-data
---

In this example we will load an extraction to an Oracle database.

**Define extraction** 

We define an extraction based on the SAP table T001W for plants.

![Oracle-Table-Extraction-T001w](/img/content/Oracle-Table-Extraction-T001w.jpg){:class="img-responsive"}

**Set destination** <br>
we set the destination connection for the database.  

![Oracle-Destination-Details](/img/content/Oracle-Destination-Details.jpg){:class="img-responsive"}

**Define settings** <br>
We apply the default settings.

![Oracle-Extraction-Specific-Settings-T001w](/img/content/Oracle-Extraction-Specific-Settings-T001w.jpg){:class="img-responsive"}

The Preparation option Drop & Create drops an existent table and creates a new one. <br> 
Optional: You can preview the SQL statement or use it as a template for your own SQL statements. Select the list value *Custom SQL* for Preparation then click on *Edit SQL*.

![Oracle-Extraction-Specific-Settings-Custom-SQL](/img/content/Oracle-Extraction-Specific-Settings-Custom-SQL.jpg){:class="img-responsive"}

In the new dialog select *Drop & Create* and click on *Generate Statement*. 

![Oracle-Custom-SQL-Drop-And-Create](/img/content/Oracle-Custom-SQL-Drop-And-Create.jpg){:class="img-responsive"}

Columns will be created using the most appropriate data type. 

**Run extraction** 

Click the button *Run*. In the dialog *Run* Extraction click again on *Run* to run the extraction. 

![Oracle-Run-Extraction](/img/content/Oracle-Run-Extraction.jpg){:class="img-responsive"}

Click on *Refresh* in the Designer to check the execution status. In our example 185 rows has been loaded to the database.  

![Oracle-Designer-Status](/img/content/Oracle-Designer-Status.png){:class="img-responsive"}

**Check the result in the database** 

Use the Oracle SQL Developer to see the table structure and content. 

![Oracle-Table-Columns](/img/content/Oracle-Table-Columns.jpg){:class="img-responsive"}

![Oracle-Table-Data](/img/content/Oracle-Table-Data.jpg){:class="img-responsive"}