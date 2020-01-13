### SQL Commands

#### Preparation

Defines the action on the target database before the data is inserted into the target table.
- *Drop & Create*: Remove table if available and create new table (default).
- *Truncate Or Create*: Empty table if available, otherwise create.
- *Create If Not Exists*: Create table if not available.
- *Prepare Merge*: prepares the merge process and creates e.g. a temporary staging table. For more information see section About Merging. 
- *None*: no action
- *Custom SQL*: Here you can define your own script. See the Custom SQL section below. 

If you only want to create the table in the first step and do not want to insert any data, you have two options:
1. Copy the SQL statement and execute it directly on the target data database.
2. Select the None option for Row Processing and execute the extraction.

Once the table is created, it is up to you to change the table definition, 
by, for example, creating corresponding key fields and indexes or additional fields.

#### Row Processing

Defines how the data is inserted into the target table.
- *Insert*: Insert records (default).
- *Fill merge staging table*: Insert records into the staging table.
- *None*: no action.
- *Custom SQL*: Here you can define your own script. See the Custom SQL section below.
- *Merge (deprecated)*: This option is obsolete. Please use the Fill merge staging table option and check the About Merging section. 

#### Finalization

Defines the action on the target database after the data has been successfully inserted into the target table.
- *Finalize Merge*: Closes the merge process and deletes the temporary staging table, for example. For more information, see About Merging. 
- *None*: no action (default).
- *Custom SQL*: Here you can define your own script. See the Custom SQL section below.

#### About Merging

The prerequisite is that you have a table in which you want to merge the new data with the existing data.
Ideally, you created this table in the first run with the corresponding preparation option and filled it with data with the Row Processing option Insert.

In the subsequent runs, you now want to merge the new data records with the existing ones. 
You therefore set the following options: 
- Preparation to *Prepare Merge*, 
- Row Processing on *Fill merge staging table* and 
- Finalization to *Finalize merge.

The merge process is performed using a staging table and takes place in three steps.
In the first step, a temporary table is created in which the data is inserted in the second step.
In the third step, the temporary table is merged with the target table and then the temporary table is deleted.

![Destination-Exa-Makt-Merge](/img/content/Destination-Exa-Makt-Merge.jpg){:class="img-responsive"}

The Merge command updates existing records or inserts non-existing ones. Which fields are updated can be found in the SQL statement.<br>
The SQL command can be changed if necessary, e.g. to exclude certain columns from the update.<br>
Fields that do not appear in the SQL statement are not affected by changes.

It is important that an appropriate index is created in order to execute the merge command quickly. 
Without an index, the execution of the merge command would take a long time depending on the amount of data.

#### Custom SQL

Here you can define your own SQL or script expressions. You can use existing SQL commands as templates. 

The following [link](../microsoft-sql-server/sql-server-custom-sql) provides an example of how to use predefined expressions. Please note that the custom SQL code is for SQL Server target environments. 
```
A syntactic adaptation of the code is necessary for other DB target environments!
```

#### Templates

You can write your own SQL expressions and thus have the possibility to adapt the loading of the data to your needs. <br>
You can also, for example, execute stored procedures that exist in the database.
To do this, you can use the SQL templates provided in the following phases:
- *Preparation (e.g. Drop & Create or Create if Not Exists)* 
- *Row Processing (e.g. Insert or Merge)* and 
- *Finalization*.

#### Script Expressions

You can now also use script expressions for the Custom SQL command. You can find more information on the Script Expressions page (under Advanced Techniques).

![Formula-ExistsTable](/img/content/Formula-ExistsTable.jpg){:class="img-responsive"}

Among other things, you can use the *ExistsTable(tableName)* command to verify the existence of a table. This function was introduced because some database systems only support this to a limited extent.

<details>
<summary>SQL-Skript</summary>
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
