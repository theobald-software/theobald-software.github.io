---
layout: page
title: Inserting Data
description: Inserting Data
product: xtract-universal
parent: azure-dwh
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=inserting_data2
---	

In this example we will load an extraction to an Azure SQL Data Warehouse table. 

**Define extraction**<br> 
We define an extraction based on the SAP table T001W which stores plants/branches.

![XU_Vertica_Table_T001W](/img/content/XU_Vertica_Table_T001W.png){:class="img-responsive"}

**Select destination and set destination**<br> 
We click on the *Destination* button and select the Azure DWH destination created earlier (see section Connection) from the drop down menu. We apply the default settings.

![XU_Destination_Azure_DWH](/img/content/XU_Destination_Azure_DWH.jpg){:class="img-responsive"}

The Preparation option *Drop & Create* drops an existent table and creates a new one.  
Optional: You can preview the SQL statement or use it as a template for your own SQL statements.
Select the list value *Custom SQL* for Preparation then click on the *Edit SQL* button.

![XU_Azure_DWH_CustomSQL_Select](/img/content/XU_Azure_DWH_CustomSQL_Select.jpg){:class="img-responsive"}

In the new dialog select *Drop & Create* and click on *Generate Statement*. 
Columns will be created using the most appropriate data type. 

![XU_Azure_DWH_CustomSQL_SQL](/img/content/XU_Azure_DWH_CustomSQL_SQL.jpg){:class="img-responsive"}

**Run extraction** 
Click the button *Run*. In the dialog click on either of the two *Run* buttons to start the extraction.

![XU_Vertica_Vertica_RunExtraction](/img/content/XU_Vertica_Vertica_RunExtraction.png){:class="img-responsive"}

Click on the *Refresh* button in the Designer to check the execution status. In our example 238 rows have been loaded to the database. 

![XU_AzureDWH_Extraction_Overview](/img/content/XU_AzureDWH_Extraction_Overview.jpg){:class="img-responsive"}