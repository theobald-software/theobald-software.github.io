---
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: hp-vertica
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=settings2
---

Click on the Destination button to define extraction-specific settings of the extraction.

![ext_spec_set_de_form](/img/content/ext_spec_set_de_form.jpg){:class="img-responsive"}

**Table Name**

Specify the name of the destination table. You have the following options:
- Same as name of SAP object
- Same as name of extraction and
- Custom to specify a custom name yourself.

**Column Name Style** 

Defines the style of the column name. Following options are available: 

![Ex-Spec-Settings-Makt-ColumnName](/img/content/Ex-Spec-Settings-Makt-ColumnName.jpg){:class="img-responsive"}

Code: The SAP technical column name will be used as column name, e.g. MAKTX.<br>
CodeAndText: The SAP technical column name and the SAP description separated by an underscore will be used as column name, e.g. MAKTX_Material Description (Short Text).<br>
TextAndCode: The SAP description and the SAP technical column name description separated by an underscore will be used as column name, e.g. Material Description (Short Text)_MAKTX.

**Date Conversion** 

**Convert date strings** <br>
Converts SAP dates (YYYYMMDD, e.g. 19900101) into a formatted date value. In the destination the date field does not have a string data type but a date data type (YYYY-MM-DD, e.g. 1990-01-01). 

**Convert invalid dates to** <br>
Every invalid value will be converted into this value. NULL is supported as value. 
You should set this value to be used in case of no convertible date values.  
During the conversion of invalid SAP dates the two specific cases 00000000 and 9999XXXX will be checked at first. 

**Convert 00000000 to** converts all SAP date 00000000 to this value.<br> 
**Convert 9999XXXX to** converts all SAP date 9999XXXX to this value.


**Preparation**

Defines the action to be executed on the destination database, before the data are loaded to the destination table.
- *Drop & Create*: Drop the table if existent and create a new one. 
- *Truncate Or Create*: Truncate the table if existent, else create a new table.  
- *Create if Not Exists*: Create table if not existent. 
- *Prepare Merge*: prepares the merging process and creates a temporary staging table. Please refer to the section about merging.
- *None*: No action. 
- *Custom SQL*: Defines custom SQL statement. Refer to the section Custom SQL for more information. 


If you want in the first step to just create a table, you have two options:
1. Copy the SQL statement and run it directly on the destination database.
2. Select the None option for Row Processing and Finalization and then run the extraction.

After the table is created, you can change the table definition, e.g. by creating key fields, indices or additional fields.

**Row Processing**

Defines how to load the data to the destination table.
- *Insert*: Insert rows.
- *Fill merge staging table*: Insert rows in the staging table. Please refer to the section about merging.
- *None*: No action.
- *Custom SQL*: Defines custom SQL statement. Refer to the section Custom SQL for more information.
- *Merge (deprecated)*:This option is deprecated. Please use the option Fill merge staging table and refer to the section about merging.

**Finalization**

Defines the action to be executed on the destination database, after the data has been to the destination table.
- *Finalize Merge*: finalizes the merging process and drops the temporary staging table. Please refer to the section about merging. 
- *None*: No action.
- *Custom SQL*: Defines custom SQL statement. Refer to the section Custom SQL for more information.

**About merging**

Before you merge data, it is required that you have a table, where new with existing data should be merged.
The table could have been created in the first run using the correspondent Preparation-Option filled with data using the Row Processing-Option Insert .

In the following runs you would like to merge the new incoming rows.
Therefore you should set the following options: 
- Preparation to *Prepare Merge*, 
- Row Processing to  *Fill merge staging table and* 
- Finalization to *Finalize Merge*.

The merge operation uses a staging table and is performed in three steps.
In the first step a temporary staging table is created into which the data is inserted in the second step.
In the third step, the temporary table is merged into the target table and afterwards deleted.

![Destination-Exa-Makt-Merge](/img/content/Destination-Exa-Makt-Merge.jpg){:class="img-responsive"}

The merge operation updates existing rows and inserts non existent ones. You can see in the SQL statement, which fields will be updated.
The SQL statement can be changed, e.g. to exclude certain columns from being updated. 
Fields that do not appear in the SQL statement will not affected by changes.

It is important that an appropriate index exists to run the merge operation efficiently. Without an appropriate index a merge operation may take long time depending on the amount of data.

**Custom SQL** 

You can use an SQL script or scripted expressions. You can also use available SQL statements as template. 

**SQL Templates**

you can write your own SQL statements which enable you to customize the data load process to suit your needs.
In addition you can call Stored Procedures available on the database.
The SQL scripts of the following phases are available to be used as SQL templates:
- *Preparation* (e.g., Drop & Create or Create if Not Exists)
- *Row Processing* (e.g. Insert or Merge) and
- *Finalization*.

**Script Expressions** 

For the *Custom SQL* statement you can also use Script Expressions. For more information please refer to Script Expressions (under Advanced Techniques).

![Formula-ExistsTable](/img/content/Formula-ExistsTable.jpg){:class="img-responsive"}

Among other things you can use the function *ExistsTable(tableName)* to check the existence of a table. This function was introduced because some database systems support this feature only with restrictions. 

<details>
<summary>Open SQL Script</summary>
{% highlight sql %}
#{
   iif
   (
      ExistsTable("MAKT"),
      "TRUNCATE TABLE \"MAKT\";",
      "
         CREATE TABLE \"MAKT\"(
            \"MATNR\" VARCHAR(18),
            \"SPRAS\" VARCHAR(2),
            \"MAKTX\" VARCHAR(40));
      "
   )
}#
{% endhighlight %}
</details>

**Transaction style**

**One Transaction**<br> 
Preparation Row Processing and Finalization are executed in a single transaction.<b4>
+: allows for a clean rollback of all table changes.<br>
-: might result in table or database locks during the whole extraction process.<br>


**Three Transactions**<br>
Preparation, Row Processing and Finalization are each executed in a single transaction.<br>
+: allows for a clean rollback in each of the above sections. Shorter locking periods as compared to "One Transaction".<br> 
-: No rollback of the previous section possible (e.g. errors in Row Processing will only rollback the statements performed as part of the Row Processing, however not those performed in the Preparation section) 


**RowProcessingOnly**<br> 
Only the Row Processing section will be performed as a transaction. Preparation and Finalization are peformed without an explicit transaction (implicit commits).<br>
+: DDL in Preparation and Finalization for DMBS which don't support DDL with explicit transactions (e.g. AzureDWH)
-: No rollback of errors that occur in the Preparation/Finalization sections


**No Transaction**<br>
No explicit transactions.<br>
+: No transaction management via DBMS necessary (Locking,transaction log , etc.) might lead to performance improvements.<br>
-:  No rollback in any section.
