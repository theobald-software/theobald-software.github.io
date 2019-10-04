---
ref: xu-snowflake-03
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: snowflake
permalink: /:collection/:path
weight: 3
lang: en_GB
---

The **Destination** button enables the changing of settings concerning the extractions targets.

![Snowflake-Destination- Settings](/img/content/xu/snowflake/snowflake-destination-spec-settings.png){:class="img-responsive"}

**Table Name**

defines the name of the target table. The following options are available:
- **Same as name of SAP object**: Keep the name of the SAP objects.
- **Same as name of extraction**: Keep the name of the extraction.
- **Custom**: Define a new name.  

**Column Name Style** 

Defines the name of the column. The following options are available: 

**Code**: The technical column name from SAP is used as the column name e.g., MAKTX.<br>
**CodeAndText**: The technical name and the description of the column from SAP linked with an underscore are used as column names, e.g., MAKTX_Material Description (Short Text).<br>
**TextAndCode**: The description and the technical name of the column from SAP linked with an underscore are used as the
column designation e.g., Material Description (Short Text)_MAKTX.

**Date conversion**

**Convert date strings**<br>
Converts the character-based SAP date (YYYYMMDD, e.g., 19900101) into a special date format (YYYY-MM-DD, e.g., 1990-01-01).
Target data uses a real date data-type and not the string data-type to display dates.

**Convert invalid dates to**<br>
If the SAP date cannot be converted to a valid date format, the default date value is used.<br>
The invalid value is then converted to the entered date. NULL is supported as a value.

When converting the SAP date the two special cases 00000000 and 9999XXXX are checked at first.

**Convert 00000000 to**<br>
Converts the SAP date to this 00000000 value.

**Convert 9999XXXX to**<br>
Converts the SAP date to this 9999XXXX value.

**Preparation**

Defines the action on the target database before the data is written into the target table.
- *None*: no action
- *Drop & Create*: Remove table if available and create a new table (Default).
- *Truncate Or Create*: Clear table if available or create a new table.
- *Custom SQL*: Define a custom script. See the paragraph **Custom SQL** below. 

There are two options for creating a table without filling in any data: 
1. Copy the SQL statement and execute it directly on the target database.
2. Select the option **None** for **Row Processing** and execute an extraction.

After creating a table there are further table definitions that can be changed e.g., by creating corresponding key fields and indexes or additional fields.

**Row Processing**

Defines the way the data is filled into the target table.
- *None*: no action.
- *Copy data to table*: Copy the data into the target table (Default).
- *Merge data to table*: Merge the data with the existing data in the target table.
- *Custom SQL*: Define a custom script. See the paragraph **Custom SQL** below.

**Finalization**

Defines the action on the target database, after the data is successfully filled in the target table.

- *None*: no action (Default).
- *Custom SQL*: Define a custom script. See the paragraph **Custom SQL** below. 


**Transaction style**

**One Transaction** <br>
**Prepare**, **Row Processing** and **Finalization** are executed in a single transaction.<br>
Advantage: clean rollback of all changes.<br>
Disadvantage: possibly extensive locking during the whole extraction period. 


**Three Transactions**<br>
**Prepare**, **Row Processing** and **Finalization** are executed in three separated transactions.<br>
Advantage: clean rollback of the passages, possibly shorter locking phases than by **One Transaction** 
(e.g., When using **Prepare** by DDL the whole DB is only locked during **Prepare** and not for the whole extraction period)<br>
Disadvantage: No rollback from the previous step is possible.
(Error in **Row Processing** rolls only the changes in **Row Processing** and not in **Prepare**).


**RowProcessingOnly**<br> 
Only **Row Processing** is executed in one transaction. **Prepare** and **Finalization** do not have explicit transactions (implicit commits).<br>
Advantage: DDL in **Perpare** and **Finalization** by DMBS that do not allow any DDL in explicit transaction (e.g., AzureDWH)<br>
Disadvantage: No rollback of **Prepare** / **Finalization**. Not even as a partial step.

**No Transaction**<br>
No explicit transaction.<br>
Advantage: A transaction management via DBMS is not necessary (Locking, DB transaction log, etc.). Therefore no locking and possibly performance benefits.<br>
Disadvantage: No rollback.
