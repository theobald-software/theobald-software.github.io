---
ref: destinations-60
layout: page
title: Microsoft SQL Server
description: Microsoft SQL Server
product: xtract-universal
parent: destinations
childidentifier: microsoft-sql-server
permalink: /:collection/:path
weight: 60
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=microsoft-sql-server
---

The following section describes the loading of the SAP extraction data to a Microsoft SQL Server Database destination.

## Requirements

No driver installation is required since the ADO .NET driver for SQL Server is delivered and installed as a part of the .NET framework.

## Connection


{% include _content/en/xu-specific/destinations/general/connection.md %}	

### Destination Details

![MSSql-Destination-Details](/img/content/MSSql-Destination-Details.png){:class="img-responsive"}

**Server Name**<br>
Specifies the host address of the SQL Server. Please note the following syntax:

|syntax | e.g. |
|:---|:---|
|[ServerName]| `dbtest`|
|[ServerName],[Port]| `dbtest,51433`|
|[ServerName].[Domain],[Port] |  `dbtest.theobald.software,51433`|

It is only necessary to specify the port if it has been edited outside the SQL standard.

**Require TLS encryption**<br>
Client-side enforcement for using [TLS encrpytion](https://docs.microsoft.com/en-us/azure/sql-database/sql-database-connect-query#tls-considerations-for-sql-database-connectivity). Adds the following paramenters to the connection string:<br>
* Encrypt = On
* TrustServerCertificate = Off
<br>
For further information, please see [Enable Encrypted Connections to the Database Engine](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/enable-encrypted-connections-to-the-database-engine?view=sql-server-2017)

**Windows Authentication**<br>
Uses the service account, under which the XU service is running, for authentication against SQL Server.

{: .box-note }
**Note:** To successfully connect to the database using Windows authentication, make sure to [run the XU service under a Windows AD user](../advanced-techniques/service-account) with access to the database.

**Impersonate authenticated caller**<br>
Uses the Windows AD user, executing the extraction, for authentication against SQL Server using [Kerberos authentication.](https://blogs.msdn.microsoft.com/sqlupdates/2014/12/05/sql-server-kerberos-and-spn-quick-reference/)
<br>
For using this functionality a similar configuration as for [Kerberos Single Sign On against SAP](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/sap-single-sign-on/sso-with-kerberos-snc) is required.


**User Name**<br>
SQL Server authentication - user name 

**Password**<br>
SQL Server authentication - password

**Database Name**<br>
Defines the name of the SQL Server database.

**Test Connection**<br>
Checks the database connection. 


## Settings

### Opening the Destination Settings
1. Create or select an existing extraction (see also [Getting Started with Xtract Universal](../getting-started/define-a-table-extraction)).
2. Click **[Destinations]**. The window "Destination Settings" opens.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

The following settings can be defined for the destination:  

### Destination Settings

![ext_spec_set_de_form_debug](/img/content/ext_spec_set_de_form_debug.png){:class="img-responsive"}

{% include _content/en/xu-specific/destinations/general/file-name.md %}

{% include _content/en/xu-specific/destinations/general/column-name-style.md %}

{% include _content/en/xu-specific/destinations/general/date-conversion.md %}

{% include _content/en/xu-specific/destinations/general/sql-commands.md %}

{% include _content/en/xu-specific/destinations/general/debugging-bulk-insert.md %}

{% include _content/en/xu-specific/destinations/general/transaction-style.md %}


## Merging Database
{% include _content/en/xu-specific/destinations/merge-data/db-merge-data.md  %}

## Custom SQL

### Custom SQL Statement

In the window [Destination settings](#opening-the-destination-settings), you can use a custom SQL statement for the three different database process steps and / or to adapt the SQL statement to your requirements.
![Destination-Settings](/img/content/destination_settings.png){:class="img-responsive"}
1. Select a particular extraction (1).
2. Click **[Destination]** (2), the window "Destination Settings" opens.
3. Select the option *Custom SQL* from the drop-down list (3) in one of the following sections:
- Preparation 
- Row Processing
- Finalization
4. Click **[Edit SQL]** (4), the window "Edit SQL" opens.

### Custom SQL Example
In the following example, the table *KNA1* is extended by a column with the current timestamp of type *DATETIME*. <br>
The new column is filled dynamically using a .NET-based function. 

{: .box-note }
**Note:** The data types that can be used in the SQL statement depend on the SQL Server database version.

1. In the window "Destination Settings", within the section **Preparation**, select *Custom SQL* and click **[Edit SQL]**.
![Custom-SQL_Prep](/img/content/custom_sql_preparation_statement.png){:class="img-responsive"}
2. In the drop-down menu, select the option *Drop & Create* and click **[Generate Statement]** (5). 
3. Add the following line in the generated statement: <br>
```sql
[Extraction_Date] DATETIME
```
4. Confirm with **[OK]**. <br>

In the section **Row Processing**, the column values from SAP are processed in the previously created columns of the SQL target table. This SQL statement is therefore left on the standard *Insert* as an SQL statement. At this point, no data is written from the SAP source system, but `NULL` values are written to the newly created *Extraction_Date* column.
In the section section **Finalization**, the `NULL` values are filled with the following SQL statement of the current date of the extraction and written to the SQL target table by the T-SQL command `UPDATE`. <br>

```sql
UPDATE [dbo].[KNA1] 
SET [Extraction_Date] = '#{DateTime.Now}#' 
WHERE [Extraction_Date] IS NULL;
```

#### Checking the Result

Check the existence of the extended column *Extraction_Date*  in the SQL Server View of table *KNA1*.

![Custom_SQL_SQL_Server_Ausgabe](/img/content/sql_server_ansicht_extraction_date_spalte.png){:class="img-responsive"}

#### Creation of the SQL Table ExtractionStatistics

The table "ExtractionStatistics" provides an overview and status of the executed Xtract Universal extractions.

To create the "ExtractionStatistics" table, create an SQL table according to the following example:

```sql
CREATE TABLE [dbo].[ExtractionStatistics](
	[TableName] [nchar](50) NULL,
	[RowsCount] [int] NULL,
	[Timestamp] [nchar](50) NULL,
	[RunState] [nchar](50) NULL
) ON [PRIMARY]
GO
```
The *ExtractionStatistics* table is filled in the *Finalization* DB process step, using the following SQL code:

```sql
INSERT INTO [ExtractionStatistics]
(
     [TableName], 
     [RowsCount], 
     [Timestamp],
     [RunState]
)
VALUES
(
     '#{Extraction.TableName}#', 
     '#{Extraction.RowsCount}#', 
     '#{Extraction.Timestamp}#',
     '#{Extraction.RunState}#'
);
```

****
## Related Links

- [Post-Processing Column Name Style](https://kb.theobald-software.com/xtract-universal/adjust-column-name-style)