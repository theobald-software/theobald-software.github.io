---
ref: xu-postgres-03
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: postgres
permalink: /:collection/:path
weight: 3
lang: en_GB
---

When you click the **Destination** button, you can set extraction-specific settings for the destination.

![postgres_destination](/img/content/xu\postgres_destination.png){:class="img-responsive"}

**Table Name**

determines the name of the target table. You have the following options:
- Same as name of SAP object**: Copy the name of the SAP object
- **Same as name of extraction**: Accept the name of the extraction and
- Custom: Here you can define your own name.  

**Column Name Style** 

Defines the column name. The following options are available: 

![Spec-Settings-Makt-ColumnName](/img/content/Ex-Spec-Settings-Makt-ColumnName.jpg){:class="img-responsive"}

**Code**: The technical column name from SAP is used as the column name, for example, MAKTX.<br>.
**CodeAndText**: The technical name and the description of the column from SAP are linked with an underscore and used as column names, for example, MAKTX_Material Description (Short Text).<br>.
**TextAndCode**: The description and the technical name of the SAP column are combined with an underscore to form the column name, for example, Material Description (Short Text)_MAKTX.

Date conversion **Date conversion**

**Convert date strings**<br>
Converts the character-type SAP date (YYYYMMDD, for example, 19900101) to a formatted date (YYYY-MM-DD, for example, 1990-01-01). In the data target, the SAP date does not have a string data type but a real date type.

**Convert invalid dates to**<br>
If an SAP date cannot be converted to a valid date, this default date value is used.
invalid value is then converted to the entered date. NULL is supported as a value.

When an invalid SAP date is converted, the two special cases 00000000 and 9999XXXX are checked first.

**Convert 00000000 to**<br>
Converts the SAP date 00000000 to this value.

**Convert 9999XXXX to**<br>
Converts the SAP date 9999XXXX to this value.

**Preparation**

Defines the action on the target database before the data is inserted into the target table.
- *Drop & Create*: Remove table if available and create new table (default).
- *Truncate Or Create*: Empty table if available, otherwise create.
- Create If Not Exists*: Create table if not available.
- Prepare Merge*: prepares the merge process and creates e.g. a temporary staging table. For more information see section About Merging. 
- None*: no action
- Custom SQL: Here you can define your own script. See the Custom SQL section below. 

If you only want to create the table in the first step and do not want to insert any data, you have two options:
Copy the SQL statement and execute it directly on the target data database.
Select the None option for Row Processing and execute the extraction.

Once the table is created, it is up to you to change the table definition, 
by, for example, creating corresponding key fields and indexes or additional fields.

**Row Processing**

Defines how the data is inserted into the target table.
- *Insert*: Insert records (default).
- Fill merge staging table*: Insert records into the staging table.
- None*: no action.
- Custom SQL*: Here you can define your own script. See the Custom SQL section below.
- Merge (deprecated)*: This option is obsolete. Please use the Fill merge staging table option and check the About Merging section. 

**Finalization**

Defines the action on the target database after the data has been successfully inserted into the target table.
- *Finalize Merge*: Closes the merge process and deletes the temporary staging table, for example. For more information, see About Merging. 
- *None*: no action (default).
- *Custom SQL*: Here you can define your own script. See the Custom SQL section below. 

**About Merging**

The prerequisite is that you have a table in which you want to merge the new data with the existing data.
Ideally, you created this table in the first run with the corresponding preparation option and filled it with data with the Row Processing option Insert.

In the subsequent runs, you now want to merge the new data records with the existing ones. 
You therefore set the following options: 
- Preparation to *Prepare Merge*, 
- Row Processing on *Fill merge staging table* and 
- Finalization to *finalize merge*.

The merge process is performed using a staging table and takes place in three steps.
In the first step, a temporary table is created in which the data is inserted in the second step.
In the third step, the temporary table is merged with the target table and then the temporary table is deleted.

![Destination-Merge](/img/content/xu/postgres_destination_merging.png){:class="img-responsive"}

The Merge command updates existing records or inserts non-existing ones. Which fields are updated can be found in the SQL statement.<br>
The SQL command can be changed if necessary, e.g. to exclude certain columns from the update.<br>
Fields that do not appear in the SQL statement are not affected by changes.

It is important that an appropriate index is created in order to execute the merge command quickly. 
Without an index, the execution of the merge command would take a long time depending on the amount of data.


**Custom SQL** 

Here you can define your own SQL or script expressions. You can use existing SQL commands as templates. 

**Templates**

You can write your own SQL expressions and thus have the possibility to adapt the loading of the data to your needs. <br>
You can also, for example, execute stored procedures that exist in the database.
To do this, you can use the SQL templates provided in the following phases:
- Preparation (e.g. Drop & Create or Create if Not Exists)* 
- Row Processing (e.g. Insert or Merge)* and 
- *Finalization*.

**Script expressions**

You can now also use script expressions for the Custom SQL command. You can find more information on the Script Expressions page (under Advanced Techniques).

![Formula-ExistsTable](/img/content/xu/postgres_destination_sql_statement.png){:class="img-responsive"}

Among other things, you can use the *ExistsTable(tableName)* command to verify the existence of a table. This function was introduced because some database systems only support this to a limited extent.

<details>
<summary>SQL Script</summary>
{% highlight sql %}
#{
   if
   (
      ExistsTable("Plants"),
      "TRUNCATE TABLE \"Plants\";",
      "
         CREATE TABLE \"Plants\"
         (
            \"MANDT\" NATIONAL CHARACTER VARYING(3) NOT ZERO,
            \"WERKS\" NATIONAL CHARACTER VARYING(4) NOT ZERO,
            \"NAME1\" NATIONAL CHARACTER VARYING(30),
            \"BWKEY\" NATIONAL CHARACTER VARYING(4),
            \"KUNNR\" NATIONAL CHARACTER VARYING(10),
            \"LIFNR\" NATIONAL CHARACTER VARYING(10),
            \"FABKL\" NATIONAL CHARACTER VARYING(2),
            \"NAME2\" NATIONAL CHARACTER VARYING(30),
            \"STRAS\" NATIONAL CHARACTER VARYING(30),
            \"PFACH\" NATIONAL CHARACTER VARYING(10),
            \"PSTLZ\" NATIONAL CHARACTER VARYING(10),
            \"ORT01\" NATIONAL CHARACTER VARYING(25),
            \"EKORG\" NATIONAL CHARACTER VARYING(4),
            \"VKORG\" NATIONAL CHARACTER VARYING(4),
            \"CHAZV\" NATIONAL CHARACTER VARYING(1),
            \"KKOWK\" NATIONAL CHARACTER VARYING(1),
            \"KORDB\" NATIONAL CHARACTER VARYING(1),
            \"BEDPL\" NATIONAL CHARACTER VARYING(1),
            \"LAND1\" NATIONAL CHARACTER VARYING(3),
            \"REGIO\" NATIONAL CHARACTER VARYING(3),
            \"COUNC\" NATIONAL CHARACTER VARYING(3),
            \"CITYC\" NATIONAL CHARACTER VARYING(4),
            \"ADRNR\" NATIONAL CHARACTER VARYING(10),
            \"IWERK\" NATIONAL CHARACTER VARYING(4),
            \"TXJCD\" NATIONAL CHARACTER VARYING(15),
            \"VTWEG\" NATIONAL CHARACTER VARYING(2),
            \"SPART\" NATIONAL CHARACTER VARYING(2),
            \"SPRAS\" NATIONAL CHARACTER VARYING(1),
            \"WKSOP\" NATIONAL CHARACTER VARYING(1),
            \"AWSLS\" NATIONAL CHARACTER VARYING(6),
            \"CHAZV_OLD\" NATIONAL CHARACTER VARYING(1),
            \"VLFKZ\" NATIONAL CHARACTER VARYING(1),
            \"BZIRK\" NATIONAL CHARACTER VARYING(6),
            \"ZONE1\" NATIONAL CHARACTER VARYING(10),
            \"TAXIW\" NATIONAL CHARACTER VARYING(1),
            \"BZQHL\" NATIONAL CHARACTER VARYING(1),
            \"LET01\" NUMERIC(3.0),
            \"LET02\" NUMERIC(3.0),
            \"LET03\" NUMERIC(3.0),
            \"TXNAM_MA1\" NATIONAL CHARACTER VARYING(16),
            \"TXNAM_MA2\" NATIONAL CHARACTER VARYING(16),
            \"TXNAM_MA3\" NATIONAL CHARACTER VARYING(16),
            \"BETOL\" CHARACTER(3),
            \"J_1BBRANCH\" NATIONAL CHARACTER VARYING(4),
            \"VTBFI\" NATIONAL CHARACTER VARYING(2),
            \"FPRFW\" NATIONAL CHARACTER VARYING(3),
            \"ACHVM\" NATIONAL CHARACTER VARYING(1),
            \"DVSART\" NATIONAL CHARACTER VARYING(1),
            \"NODETYPE\" NATIONAL CHARACTER VARYING(3),
            \"NSCHEMA\" NATIONAL CHARACTER VARYING(4),
            \"PKOSA\" NATIONAL CHARACTER VARYING(1),
            \"MISCH\" NATIONAL CHARACTER VARYING(1),
            \"MGVUPD\" NATIONAL CHARACTER VARYING(1),
            \"VSTEL\" NATIONAL CHARACTER VARYING(4),
            \"MGVLAUPD\" NATIONAL CHARACTER VARYING(1),
            \"MGVLAREVAL\" NATIONAL CHARACTER VARYING(1),
            \"SOURCING\" NATIONAL CHARACTER VARYING(1),
            \"OILIVAL\" NATIONAL CHARACTER VARYING(1),
            \"OIHVTYPE\" NATIONAL CHARACTER VARYING(1),
            \"OIHCREDIPI\" NATIONAL CHARACTER VARYING(1),
            \"STORETYPE\" NATIONAL CHARACTER VARYING(1),
            \"DEP_STORE\" NATIONAL CHARACTER VARYING(4),
            PRIMARY KEY
            (
               \"MANDT\", 
               \"WERKS\"
            )
         );
      "
   )
}#

{% end highlight %}
</details>

**Transaction style**

**One Transaction** <br>
Prepare, Row Processing and Finalization are all performed in a single transaction.<br>
Advantage: clean rollback of all changes.<br>
Disadvantage: possibly extensive locking during the entire extraction period 


**Three Transactions**<br>
Prepare, Row Processing and Finalization are each executed in a separate transaction.<br>
Advantage: clean rollback of the individual sections, possibly shorter locking phases than with One Transaction (e.g. with DDL in the Prepare, the entire DB is only locked during the Prepare and not for the entire extraction duration) <br>
Disadvantage: No rollback of previous step possible (error in Row Processing only rolls back Row-Processing changes, but not Prepare) 


**RowProcessingOnly**<br> 
Only Row Processi

