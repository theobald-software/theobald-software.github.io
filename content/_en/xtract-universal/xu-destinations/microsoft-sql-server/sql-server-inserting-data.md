---
ref: xu-microsoft-sql-server-04
layout: page
title: Inserting data
description: Inserting data
product: xtract-universal
parent: microsoft-sql-server
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=sql-server-inserting-data
---

In this example we will load an extraction to Microsoft SQL Server database.

**Define extraction** 

We define an extraction based on the SAP table T001W for plants.

![MSSql-Table-Extraction-T001w](/img/content/MSSql-Table-Extraction-T001w.jpg){:class="img-responsive"}

**Set destination** <br>
we set the destination connection for the database.  


![MSSql-Destination-Details-Integrated-Security](/img/content/MSSql-Destination-Details-Integrated-Security.jpg){:class="img-responsive"}

**Define settings** <br>
We apply the default settings.

![MSSql-Extraction-Specific-Settings-T001w](/img/content/MSSql-Extraction-Specific-Settings-T001w.jpg){:class="img-responsive"}

The Preparation option *Drop & Create* drops an existent table and creates a new one.  
Optional: You can preview the SQL statement or use it as a template for your own SQL statements. Select the list value *Custom SQL* for Preparation then click on *Edit SQL*.

![MSSql-Extraction-Specific-Settings-Custom-SQL](/img/content/MSSql-Extraction-Specific-Settings-Custom-SQL.jpg){:class="img-responsive"}

In the new dialog select *Drop & Create* and click on *Generate Statement*. 

![MSSql-Custom-SQL-Drop-And-Create](/img/content/MSSql-Custom-SQL-Drop-And-Create.jpg){:class="img-responsive"}

Columns will be created using the most appropriate data type. 

**Run extraction** 

Click the button *Run*. In the dialog Run Extraction click again on *Run* to run the extraction. 

![MSSql-Run-Extraction](/img/content/MSSql-Run-Extraction.jpg){:class="img-responsive"}

Click on *Refresh* in the Designer to check the execution status. In our example 185 rows has been loaded to the database.

![MSSql-Designer-Status](/img/content/MSSql-Designer-Status.jpg){:class="img-responsive"}

**Check the result in the database** 

Use the SQL Management Studio to see the table structure and content.  

![MSSql-Extraction-Table-Data](/img/content/MSSql-Extraction-Table-Data.jpg){:class="img-responsive"}
