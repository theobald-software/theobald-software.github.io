---
layout: page
title: Inserting Data
description: Inserting Data
product: xtract-universal
parent: hp-vertica
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=inserting_data
---

In this example we will load an extraction to a Vertica database table. 

**Define extraction** <br>
We define an extraction based on the SAP table T001W which stores plants/branches.

![XU_Vertica_Table_T001W](/img/content/XU_Vertica_Table_T001W.png){:class="img-responsive"}

**Set destination** <br>
We define the connection details for the database.

![Vertica_destination_details](/img/content/Vertica_destination_details.png){:class="img-responsive"}

**Define settings** <br>
We apply the default settings.

![XU_Vertica_Destination](/img/content/XU_Vertica_Destination.png){:class="img-responsive"}

The Preparation option *Drop & Create* drops an existent table and creates a new one.<br>  
Optional: You can preview the SQL statement or use it as a template for your own SQL statements.<br>
Select the list value *Custom SQL* for Preparation then click on the *Edit SQL* button.


![XU_Vertica_CustomSQL](/img/content/XU_Vertica_CustomSQL.png){:class="img-responsive"}

In the new dialog select *Drop & Create* and click on *Generate Statement*. 
Columns will be created using the most appropriate data type. 

![XU_Vertica_Custom_SQL_DropCreate](/img/content/XU_Vertica_Custom_SQL_DropCreate.png){:class="img-responsive"}

**Run extraction** <br>
Click the button *Run*. In the dialog click on either of the two *Run* buttons to start the extraction.

![XU_Vertica_Vertica_RunExtraction](/img/content/XU_Vertica_Vertica_RunExtraction.png){:class="img-responsive"}

Click on the *Refresh* button in the Designer to check the execution status. In our example 238 rows have been loaded to the database. 

![XU_Vertica_Vertica_Extraction_Result](/img/content/XU_Vertica_Vertica_Extraction_Result.png){:class="img-responsive"}