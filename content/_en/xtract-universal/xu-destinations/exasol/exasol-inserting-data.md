---
ref: xu-exasol-04
layout: page
title: Inserting Data
description: Inserting Data
product: xtract-universal
parent: exasol
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=exasol-inserting-data
---

In this example we will load an extraction to an EXASOL database.

**Define extraction** 

We define an extraction based on the SAP table T001W for plants.

![Exa-Table-Extraction-T001w](/img/content/Exa-Table-Extraction-T001w.jpg){:class="img-responsive"}

**Set destination** 

we set the destination connection for the database.  

![Exa-Destination-Details](/img/content/Exa-Destination-Details.jpg){:class="img-responsive"}

**Define settings** 

We apply the default settings.

![Exa-Extraction-Specific-Settings-T001w](/img/content/Exa-Extraction-Specific-Settings-T001w.jpg){:class="img-responsive"}

The Preparation option *Drop & Create* drops an existent table and creates a new one.  
Optional: You can preview the SQL statement or use it as a template for your own SQL statements. Select the list value *Custom SQL* for Preparation then click on *Edit SQL*.

![Exa-Extraction-Specific-Settings-Custom-SQL](/img/content/Exa-Extraction-Specific-Settings-Custom-SQL.jpg){:class="img-responsive"}

In the new dialog select *Drop & Create* and click on *Generate Statement*. 

![Exa-Custom-SQL-Drop-And-Create](/img/content/Exa-Custom-SQL-Drop-And-Create.jpg){:class="img-responsive"}

Columns will be created using the most appropriate data type. 

**Run extraction** 

Click the button *Run*. In the dialog *Run* Extraction click again on *Run* to run the extraction. 

![Exa-Run-Extraction-T001w](/img/content/Exa-Run-Extraction-T001w.jpg){:class="img-responsive"}

Click on *Refresh* in the Designer to check the execution status. In our example 185 rows has been loaded to the database.

![Exa-Designer-Status](/img/content/Exa-Designer-Status.jpg){:class="img-responsive"}

**Check the result in the database** 

Use the EXAPlus-Studio to see the table structure and content.  

![Exa-Table-Extracted-Data](/img/content/Exa-Table-Extracted-Data.jpg){:class="img-responsive"}