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

- Download and install the [SnowflakeDSIIDriver](https://sfc-repo.snowflakecomputing.com/odbc/win64/latest/index.html).
- To connect through a proxy server, configure the following environment variables: `http_proxy`, `https_proxy`, `no_proxy`.<br>
For more information, see [Snowflake: ODBC Configuration and Connection Parameters](https://docs.snowflake.com/en/user-guide/odbc-parameters.html#using-environment-variables).
- the ODBC default port (443) for HTTPS is enabled and allows outbound traffic from the network to Snowflake's services.
- The Snowflake account used to upload data to Snowflake needs the corresponding access and role privileges, see [Snowflake Documentation: Overview of Access Control - Roles](https://docs.snowflake.com/en/user-guide/security-access-control-overview#roles).
The following privileges are required:
  - PUT command
  - COPY command
  - TABLE 

## Connection

{% include _content/en/xu-specific/destinations/general/connection.md %}	

### Destination Details

#### General

![Snowflake-Destination-Details](/img/content/xu/snowflake/snowflake-destination-details_1.png){:class="img-responsive"}

**Output Directory**<br>
Enter an existing local directory in which the extracted data is written as a csv file.

Process during an extraction:
- A csv file is created in the output directory.
- Once the file has reached a certain size, it is zipped (gzip), see [File Splitting](#file-splitting).
- The zipped file is uploaded via PUT command to the Snowflake staging area.
- The data is then copied via COPY command to the target table in Snowflake.

This process (gzip + PUT command) repeats itself until the extraction is finished.<br>
While running an extraction, the csv files in the local directory and the staging area are deleted. 

**Account Name**<br>
Enter the Snowflake authentication account. 
The account name can be derived from the connection URL.<br>
URL for organization account identifier: `https://[organization]-[account_name].snowflakecomputing.com/console#/`<br>
URL for region account identifier (legacy): `https://[account_name].[region].[cloud].snowflakecomputing.com/console#/`<br>

**Database**<br>
Enter the name of the Snowflake database.

**Schema**<br>
Enter the schema of the Snowflake database.

**Role**<br>
Enter a Snowflake user role. If no user role is entered, the default user role is used for the connection.


#### Acount Identifier

![Snowflake-Destination-Details](/img/content/xu/snowflake/snowflake-destination-details_2.png){:class="img-responsive"}

**Organization (preferred)**<br>
Enter the name of your organization.
Authentication via the account name in your organization is the preferred way of identifying youself against Snowflake, see [Snowflake Documentation: Account Name in Your Organization](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-1-preferred-account-name-in-your-organization)

**Region (legacy)**<br>
Select the region of the Snowflake environment from the drop-down-menu.<br>
In the example above, the region *AWS - EU (Frankfurt)* is selected. 
The selected region must match the information in the assigned account. 

{: .box-note}
**Note:** Regions with the suffix *(legacy)* are deprecated.
Select the *(legacy)* option if you connect to Snowflake using an old *Cloud Region ID*. <br>
For more information on the current *Cloud Region IDs*, see [Snowflake Documentation: Supported Cloud Regions](https://docs.snowflake.com/en/user-guide/intro-regions.html).

#### Authentication

![Snowflake-Destination-Details](/img/content/xu/snowflake/snowflake-destination-details_3.png){:class="img-responsive"}

**Username**<br>
Enter the Snowflake authentication user name. 

**Basic**<br>
If this option is active, basic authentication is used for authentication.<br>
Enter the Snowflake authentication password of the user in the field **Password**.

**Key Pair**<br>
If this option is active, key pairs are used for authentication, see [Snowflake Documentation: Key Pair Authentication & Key Pair Rotation](https://docs.snowflake.com/en/user-guide/key-pair-auth).<br>
Select the path to your private key in the field **Private Key Path**. Both encrypted and non-encrypted private keys are supported. If you use encrypted private key for authentication, enter the password that is used by snowflake to decrypt it in the field **Key password**.

#### Stages

Click **[Test Connection]** to fetch all stages and warehouses from Snowflake. 
The stages and warehouses then become available for selection.

![Snowflake-Destination-Details](/img/content/xu/snowflake/snowflake-destination-details_4.png){:class="img-responsive"}


**Stage name**<br>
Select a Snowflake Stage.
Note that only "internal" stages are supported. <!--please check if "supported" a good term in this case-->

**Warehouse**<br>
Select a Snowflake Data Warehouse.


## Settings

### Opening the Destination Settings
1. Create or select an existing extraction, see [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction).
2. Click **[Destination]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![Snowflake-Destination- Settings](/img/content/xu/snowflake/snowflake-destination-spec-settings.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}

{% include _content/en/xu-specific/destinations/general/file-name-script-expressions.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

{% include _content/en/xu-specific/destinations/general/file-splitting.md %}

### Preparation - SQL Commands

Defines the action on the target database before the data is inserted into the target table.
- *Drop & Create*: Remove table if available and create new table (default).
- *Truncate Or Create*: Empty table if available, otherwise create.
- *Truncate*: Empty table if available.
- *Create If Not Exists*: Create table if not available.
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
- *Row Processing (e.g., Merge)*  
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

### Empty Values

{: .box-warning }
**Warning! NULL result in a non-nullable column.**
By default empty strings are converted to NULL values when uploading data to Snowflake. To deactivate the conversion, disable **Replace empty values with SQL NULL**.

**Replace empty values with SQL NULL**<br>
This option controls the Snowflake file format parameter EMPTY_FIELD_AS_NULL.
If **Replace empty values with SQL NULL** is active, empty strings are converted to NULL values when uploading data to Snowflake.


## Merging Data

The following example depicts the update of the existing data records in a database by running an extraction to merge data. 
Merging in this case stands for changing a value of a field or inserting a new data row or updating an existing record. 

Alternatively to merging, the data can be also updated by means of full load. The full load method is less efficient and performant.

Prerequisite for merging is a table with existing data, in which new data should be merged.

Ideally, the table with existing data is created in the initial load and filled with data using the **Row Processing** option *Merge file to table*.

{:.box-warning}
**Warning! Faulty merge** <br>
A primary key is a prerequisite for a merge command. If no primary key is set, the merge command runs into an error.
Create an appropriate primary key in the [General Settings](./../getting-started/general-settings#primary-key-tab) to execute the merge command.


### Updated record in SAP
A field value within an SAP table is updated. With a merge command the updated value is written to the destination database table. 
![Update-Merge-Example-Data](/img/content/xu/merge_db_scheme.png){:class="img-responsive"}

The merge command ensures delta processing: new records are inserted into the database and / or existing records are updated. <br>


### Merge command in Xtract Universal
The merge process is performed using a staging table and takes place in three steps.
In the first step, a temporary table is created in which the data is inserted in the second step.
In the third step, the temporary table is merged with the target table and then the temporary table is deleted.

1. In the main window of the Designer, select the respective extraction and click **[Destination]**. The window "Destination Settings" opens.
2. Make sure to choose the correct destination: a database destination. 
3. Navigate to the right part of the "Destination Settings" window and apply the following settings:
- **Preparation**: *None*
- **Row Processing**: *Merge file to table* to add data to the staging table.
- **Finalization**: *None* 
![Extraction-Specific-Settings-Merge-Makt](/img/content/xu/destination_data_merge_snowflake.png){:class="img-responsive"}

More information about the updated fields can be found in the SQL statement ([Custom SQL only](#custom-sql)).<br>
It is possible to edit the SQL statement if necessary, e.g., to exclude certain columns from the update.<br>
Fields that do not appear in the SQL statement are not affected by changes.


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
