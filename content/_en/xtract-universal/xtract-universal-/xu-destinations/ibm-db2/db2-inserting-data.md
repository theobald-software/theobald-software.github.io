---
layout: page
title: Inserting Data
description: Inserting Data
product: xtract-universal
parent: ibm-db2
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=db2-inserting-data
---

In this example we will load an extraction to an Oracle database.

**Define extraction** 

We define an extraction based on the SAP table T001W for plants.

![DB2-Table-Extraction-T001w](/img/content/DB2-Table-Extraction-T001w.jpg){:class="img-responsive"}

**Set destination** 

we set the destination connection for the database.  

![DB2-Destination-Details](/img/content/DB2-Destination-Details.jpg){:class="img-responsive"}

**Define settings** 

We apply the default settings.

![DB2-Extraction-Specific-Settings-T001w](/img/content/DB2-Extraction-Specific-Settings-T001w.jpg){:class="img-responsive"}

The Preparation option *Drop & Create* drops an existent table and creates a new one.  
Optional: You can preview the SQL statement or use it as a template for your own SQL statements. Select the list value *Custom SQL* for Preparation then click on *Edit SQL*.

![DB2-Extraction-Specific-Settings-Custom-SQL](/img/content/DB2-Extraction-Specific-Settings-Custom-SQL.jpg){:class="img-responsive"}

In the new dialog select *Drop & Create* and click on *Generate Statement*. 

![DB2-Custom-SQL-Drop-And-Create](/img/content/DB2-Custom-SQL-Drop-And-Create.jpg){:class="img-responsive"}

Columns will be created using the most appropriate data type. 

**Run extraction** 

Click the button *Run*. In the dialog Run Extraction click again on *Run* to run the extraction. 

![DB2-Run-Extraction](/img/content/DB2-Run-Extraction.jpg){:class="img-responsive"}

Click on *Refresh* in the Designer to check the execution status. In our example 185 rows has been loaded to the database.  

![DB2-Designer-Status](/img/content/DB2-Designer-Status.jpg){:class="img-responsive"}

**Check the result in the database** 

Use the Oracle SQL Developer to see the table structure and content. 

![DB2-Result-Table-Data](/img/content/DB2-Result-Table-Data.jpg){:class="img-responsive"}

