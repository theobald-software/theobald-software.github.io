---
ref: destinations-103
layout: page
title: Snowflake
description: Snowflake
product: xtract-universal
parent: destinations
childidentifier: snowflake
permalink: /:collection/:path
weight: 103
lang: en_GB
progressstate: 5
---

The following section describes the loading of the SAP extraction data into Snowflake environment.

## Requirements

The connection to the Snowflake target environment is made via the ODBC driver for Windows 64-bit architectures.<br>
No additional installations are required to use the Snowflake destination.

- [Download SnowflakeDSIIDriver](https://sfc-repo.snowflakecomputing.com/odbc/win64/latest/index.html)

## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	

### Destination Details

![Snowflake-Destination-Details](/img/content/xu/snowflake/snowflake-destination-details_1.png){:class="img-responsive"}

#### Connection

**Output Directory**<br>
Enter an existing local directory in which the extracted files are stored.

**Region**<br>
Select the region of the Snowflake environment from the drop-down-menu.<br>
In the given example, the region *AWS - EU (Frankfurt)* is selected. 
The selected region must match the information in the assigned account. 

**Account**<br>
Enter the Snowflake authentication account. In the given example it is: "dummy_account", see also the URL: <br>
`https://dummy_account.eu-central-1.snowflakecomputing.com/console#/`

**User Name**<br>
Enter the Snowflake authentication user name. 

**Password**<br>
Enter the Snowflake authentication password.

**Database**<br>
Enter the name of the Snowflake database.

**Schema**<br>
Enter the schema of the Snowflake database.

**Connect**<br>
Check the connection to the database.
If the connection is successful, further settings can be edited. 

#### Stage

**Stage name**<br>
Enter the name of a Snowflake Stage. 
Please be aware that only "internal" stages are supported. <!--please check if "supported" a good term in this case-->

**Warehouse**<br>
Enter the name of a Snowflake Data Warehouse.

## Settings

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![Snowflake-Destination- Settings](/img/content/xu/snowflake/snowflake-destination-spec-settings.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

### Preparation - SQL Commands

Defines the action on the target database before the data is inserted into the target table.
- *Drop & Create*: Remove table if available and create new table (default).
- *Truncate Or Create*: Empty table if available, otherwise create.
- *Create If Not Exists*: Create table if not available.
- *Prepare Merge*: Prepares the merge process and creates e.g. a temporary staging table. See [Merging Data](#merging-data) for more details. 
- *None*: no action
- *Custom SQL*: Here you can define your own script. See the Custom SQL section below. 

If you only want to create the table in the first step and do not want to insert any data, you have two options:
1. Copy the SQL statement and execute it directly on the target data database.
2. Select the None option for Row Processing and execute the extraction.

Once the table is created, it is up to you to change the table definition, 
by, for example, creating corresponding key fields and indexes or additional fields.



### Row Processing - SQL Commands

Defines how the data is inserted into the target table.
- *None*: no action.
- *Copy file to table*: Insert records (default).
- *Merge File to table*: Insert records into the staging table.
- *Custom SQL*: Here you can define your own script. See the Custom SQL section below.

### Finalization - SQL Commands

Defines the action on the target database after the data has been successfully inserted into the target table.
- *Finalize Merge*: Closes the merge process and deletes the temporary staging table, for example.  
- *None*: no action (default).
- *Custom SQL*: Here you can define your own script. See the Custom SQL section below.

#### About Merging
Merging ensures delta processing: new records are inserted into the database and / or existing records are updated. 
See section [Merging Data](#merging-data).

### Custom SQL

Custom SQL option allows creating user-defined SQL input. Existing SQL commands can 
be used as templates:

1. Within subsection e.g., **Preparation** select the **Custom SQL** (1) option from the drop-down list.
2. Click **[Edit SQL]**. The window "Edit SQL" opens.
![Formula-ExistsTable](/img/content/Formula-ExistsTable.png){:class="img-responsive"}
3. Navigate to the drop-down menu and select an existing command (3). 
4. Click **[Generate Statement]**. A new statement is generated.
![Formula-ExistsTable](/img/content/Formula-ExistsTable-02.png){:class="img-responsive"}
5. Click **[Copy]** to copy the statement to the clipboard.
6. Click **[OK]** to confirm.

<!---Check out the [Microsoft SQL Server example](../microsoft-sql-server/sql-server-custom-sql) for details on predefined expressions.

{:.box-note}
**Note:** The custom SQL code is used for SQL Server destinations. A syntactic adaptation of the code is necessary to use the custom SQL code for other database destinations.-->

##### **Templates**

You can write your user-defined SQL expressions and adapt the loading of the data to your needs. <br>
You can additionally execute stored procedures that exist in the database.
To do so, use the SQL templates provided in the following phases:
- *Preparation (e.g., Drop & Create or Create if Not Exists)* 
- *Row Processing (e.g., Insert or Merge)*  
- *Finalization*

{:.box-note}
**Note:** For more information on custom SQL statements, see [Custom SQL](#custom-sql).

<!---##### **Script Expressions**

You can use [script expressions](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/script-expressions) for the Custom SQL commands.

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


{:.box-tip}
**Tip:** *ExistsTable(tableName)* command allows to verify the existence of a table in a database.-->


{% include _content/en/xu-specific/destinations/general/transaction-style.md %}

## Merging Data
{% include _content/en/xu-specific/destinations/merge-data/db-merge-data.md  %}

## Custom SQL
### Custom SQL Statement

In the window [Destination settings](#destination-settings), you can use a custom SQL statement for the three different database process steps and / or to adapt the SQL statement to your requirements.
![Destination-Settings](/img/content/destination_settings.png){:class="img-responsive"}
1. Select a particular extraction (1).
2. Click **[Destination]** (2). The window "Destination Settings" opens.
3. Select the option *Custom SQL* from the drop-down list (3) in one of the following sections:
- Preparation 
- Row Processing
- Finalization
4. Click **[Edit SQL]** (4). The window "Edit SQL" opens.

### Custom SQL Example

In the following example, the DataSource *0FI_AP_4* is extended by one column that is filled with the user-defined runtime parameter *RUNTIMEPARAMETER*. <br>
The filling of the new column is implemented dynamically in the **Finalization** section of the destination settings.

1. Deselect the **Error on Column Count Mismatch** option in the *XTRACT_UNIVERSAL* File Format.
![File-Format-Option](/img/content/xu/snowflake/file-format-option.png){:class="img-responsive"}
2. Create the runtime parameter *RUNTIMEPARAMETER* via **Edit runtime parameter** (5).
![Edit-Runtime-Parameter](/img/content/xu/snowflake/edit-runtime-parameter.png){:class="img-responsive"}
3. Store the runtime parameter via **Edit** in the column *Selections* (7).
![Edit-Selections](/img/content/xu/snowflake/edit-selections.png){:class="img-responsive"}
4. Navigate to the the Destination Settings and select *Custom SQL* in the **Preparation** section. Click **Edit SQL**.
5. Select *Drop & Create* from the drop-down menu and click **[Generate Statement]** (10). 
![Edit-Preparation-Statement](/img/content/xu/snowflake/edit-preparation-statement.png){:class="img-responsive"}
6. Add the following line to the generated statement.
```sql
"RUNTIMEPARAMETER" VARCHAR(4),
```
7. Confirm with **[OK]**.
8. In the **Row Processing** section, the column values from SAP are processed into a local CSV file. 
This SQL statement is therefore left at the default *Copy file to table*. <br> 
At this point, no data from the SAP source system but `NULL` values are written to the newly created column *RUNTIMEPARAMETER*.
9. In the **Finalization** section, the `NULL` values are filled with the following SQL statement of the runtime parameter *RUNTIMEPARAMETER* and written into the SQL target table by the T-SQL command `UPDATE`.
![Edit-Finalization-Statement](/img/content/xu/snowflake/edit-finalization-statement.png){:class="img-responsive"}
```sql
UPDATE "0FI_AP_4"
SET RUNTIMEPARAMETER= '@RUNTIMEPARAMETER'
WHERE RUNTIMEPARAMETER IS NULL;
```
7. Run the extraction via **Run** (11) and specify a suitable value for the runtime parameter (12).
![Run-Dialog](/img/content/xu/snowflake/run-extraction-dialog.png){:class="img-responsive"}

### Checking the Result

Check the existence of the new column *RUNTIMEPARAMETER* in the Snowflake Console of the table *0FI_AP_4*.
![Result-Snowflake-Console](/img/content/xu/snowflake/result_snowflake_console.png){:class="img-responsive"}


*****
## Related Links
- [.NET-Framework](../introduction/requirements#other-applications-and-frameworks)
- [64-bit Architecture](../introduction/requirements#hardware-requirements)
- [Installing and Configuring the ODBC Driver for Windows](https://docs.snowflake.com/en/user-guide/odbc-windows.html)
- [Snowflake Identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#double-quoted-identifiers)
- [Extraction Parameters](../execute-and-automate-extractions/extraction-parameters#custom)