---
ref: xu-snowflake-04
layout: page
title: Inserting data
description: Inserting data
product: xtract-universal
parent: snowflake
permalink: /:collection/:path
weight: 4
lang: en_GB
---

This example depicts an SAP extraction into Snowflake.
**Define extraction**

An extraction is defined based on the SAP table T001W for plants.

![Table-Extraction-T001w](/img/content/xu/xu-table-t001w-main.png){:class="img-responsive"} <br>
![Table-Extraction-T001w-Where](/img/content/xu/xu-table-t001w-where.png){:class="img-responsive"}


**Set destination** <br>
Set the destination connection for the database.  

![Snowflake-Destination](/img/content/xu/snowflake/snowflake-destination-details_1.png){:class="img-responsive"}

**Define settings** <br>
In this example the default settings are applied.
![Snowflake-Extraction-Specific-Settings-T001w](/img/content/xu/snowflake/snowflake-destination-spec-settings-t001w.png){:class="img-responsive"}

**Preparation** <br>
This way the option *Drop & Create* creates a new table with the name T001W. 
If the table exists already, it will be deleted from the database. <br>
To preview the SQL statement select *Custom SQL* in Preparation, then click *Edit SQL*: a new dialog opens.
In the new dialog select *Drop & Create* and click *Generate Statement*. <br>

![Snowflake-Drop-And-Create](/img/content/xu/snowflake/snowflake-t001w-drop-and-create.png){:class="img-responsive"}

Columns will be created using the corresponding data type. 

**Row processing**

The option *Copy data to table* copies the data from the staging layer into the table with the name T001W. <br>
To preview the SQL statement select *Custom SQL* in Row processing, then click *Edit SQL*: a new dialog opens.
In the new dialog select *Copy data to table* and click *Generate Statement*. <br> 
![Snowflake-Copy-data-to-table](/img/content/xu/snowflake/snowflake-t001w-copy-data-into-table.png){:class="img-responsive"}

**Run extraction**

To run the extraction manually, click the extraction with the right mouse button and select *Run in xu.exe*: the command line opens.

![Snowflake-Run-in-xuexe](/img/content/xu/snowflake/snowflake-t001w-run-in-xuexe.png){:class="img-responsive"}

The command line can be closed. To check the execution status click *Refresh* in the Designer.
If the extraction is successful, a green icon appears in the status row.
In the given example, 239 data records are loaded into the database.

![Snowflake-Designer-Status](/img/content/xu/snowflake/snowflake-t001w-designer-status.png){:class="img-responsive"}

**Check the result in the database**

Login into the Snowflake portal to see the table structure and the content. 

![Snowflake-Extraction-Table-Data](/img/content/xu/snowflake/snowflake-t001w-worksheet-preview.png){:class="img-responsive"}
