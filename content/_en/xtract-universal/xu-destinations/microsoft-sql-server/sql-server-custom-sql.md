---
ref: xu-microsoft-sql-server-06
layout: page
title: Custom SQL
description: Custom SQL
product: xtract-universal
parent: microsoft-sql-server
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=sql-server-settings
progressstate: 5
---
### Custom SQL Statement

In the dialogue [Destination settings](./sql-server-settings#opening-the-destination-settings), you can use a custom SQL statement for the three different database process steps and / or to adapt the SQL statement to your requirements.
![Destination-Settings](/img/content/destination_settings.png){:class="img-responsive"}
1. Select a particular extraction (1).
2. Click **[Destination]** (2), the dialogue "Destination Settings" opens.
3. Select the option *Custom SQL* from the drop-down list (3) in one of the following sections:
- Preparation 
- Row Processing
- Finalization
4. Click **[Edit SQL]** (4), the dialogue "Edit SQL" opens.

### Custom SQL Example
In the following example, the table *KNA1* is extended by a column with the current timestamp of type *DATETIME*. <br>
The new column is filled dynamically using a .NET-based function. 

{: .box-note }
**Note:** The data types that can be used in the SQL statement depend on the SQL Server database version.

1. In the dialogue "Destination Settings", within the section **Preparation**, select *Custom SQL* and click **[Edit SQL]**.
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
	[TimeStamp] [nchar](50) NULL,
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

***********
#### Related Links
- [Post-Processing Column Name Style](https://kb.theobald-software.com/xtract-universal/adjust-column-name-style)