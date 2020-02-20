### SQL Commands

#### Preparation

Defines the action on the target database before the data is inserted into the target table.
- *Drop & Create*: Remove table if available and create new table (default).
- *Truncate Or Create*: Empty table if available, otherwise create.
- *Create If Not Exists*: Create table if not available.
- *Prepare Merge*: prepares the merge process and creates e.g. a temporary staging table. See section [Merging Data](./merging-data) for more details. 
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
- *Merge (deprecated)*: This option is obsolete. Use the *Fill merge staging* table option instead. 

#### Finalization

Defines the action on the target database after the data has been successfully inserted into the target table.
- *Finalize Merge*: Closes the merge process and deletes the temporary staging table, for example. 
- *None*: no action (default).
- *Custom SQL*: Here you can define your own script. See the Custom SQL section below.

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

![Formula-ExistsTable](/img/content/Formula-ExistsTable.png){:class="img-responsive"}

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
