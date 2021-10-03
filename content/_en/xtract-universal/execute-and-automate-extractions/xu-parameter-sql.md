---
ref: xu-parameters-sql
layout: page
title: SQL Parameters
description: SQL Parameters
product: xtract-universal
parent: execute-and-automate-extractions
permalink: /:collection/:path
weight: 13
lang: en_EN
---

In Xtract Universal you can define custom parameters that can be set dynamically when calling extractions.
When using an SQL destination, these parameters are available for SQL commands. 

A typical use case is the dynamization of WHERE-Clauses in table components.
The following table extraction has a custom parameter *WNAME* in the *WHERE-Clause*:

![xu-customerparam-where](/img/content/xu/automation/where_condition_custom_parameter.png){:class="img-responsive"}

### Custom SQL Statement

In the window [Destination Settings](../destinations/microsoft-sql-server#opening-the-destination-settings) you can use a custom SQL statement for the three database process steps and / or edit the SQL statement according to your requirements. 
![Destination-Settings](/img/content/xu/automation/destination_settings_runtime_parameter.png){:class="img-responsive"}

1. In the main window select an extraction with a custom parameter in the WHERE-Clause (1).
2. Click **[Destination]** (2). The window "Destination Settings" opens.
3. Select the option *Custom SQL* from the drop-down-menus (3)(4) in the following sections:
- Preparation 
- Finalization
4. Click **[Edit SQL]**. The window "Edit SQL" opens.

### Custom SQL Example for Custom Parameters
In the following example the SAP table *KNA1* is expanded by adding the column *Custom_Parameter* of the type *NATIONAL CHARACTER VARYING(10)*.
The column is filled dynamically by runtime parameters.

In the section **Row Processing** the column values from SAP are written into the previously created SQL target table.
This SQL-statement is therefore used as the default *Insert* statement.
When rows are processed only `NULL` values are written into the *Custom_Parameter* column.

In the section **Finalization** these `NULL` values are replaced using the SQL statements of the runtime parameter *WNAME* and the T-SQL command `UPDATE`.

{: .box-note }
**Note:** The data types that can be used in SQL statements depend on your SQL database version.

1. In the window "Destination Settings" select the option *Custom SQL* in the section **Preparation**. Click **Edit SQL**.
![Custom-SQL_Prep](/img/content/xu/automation/custom_sql_preparation_statement_runtime_parameter.png){:class="img-responsive"}
2. Select *Drop & Create* from the drop-down-menu and click **[Generate Statement]** (6). 
3. Add the following line to the generated statement:
```sql
[Custom_Parameter] NATIONAL CHARACTER VARYING(10)
```
4. Click **[OK]** to confirm your input. 
5. In the window "Destination Settings" select the option *Custom SQL* in the section **Finalization**. Click **Edit SQL**.
![Custom-SQL_Final](/img/content/xu/automation/custom_sql_finalization_statement_custom_parameter.png){:class="img-responsive"}
6. Select *Insert* from the drop-down-menu and add the following SQL statement (7):
```sql
UPDATE [dbo].[KNA1] 
SET [Custom_Parameter] = @WNAME 
WHERE [Custom_Parameter] IS NULL; 
```
7. Click **[OK]** to confirm your input (5). 

### Set the Custom Parameter WNAME

1. Select the checkbox next to the parameter name to overwrite the parameter *WNAME*.
![Custom parameters](/img/content/xu/automation/runtime_parameter_wname.png){:class="img-responsive"}
2. Enter the new value *US* and confirm your input by pressing enter.
3. Click **[Run]** (8) to run the extraction.

### Result in SSMS

Check the result of the column *Custom_Parameter* in the SQL Server View of the *KNA1* table.

![Custom_SQL_SQL_Server_Ausgabe](/img/content/xu/automation/sql_server_ansicht_extraction_date_spalte_custom_parameter.png){:class="img-responsive"}


***********
#### Related Links
- [Post-Processing Column Name Style](https://kb.theobald-software.com/xtract-universal/adjust-column-name-style)
