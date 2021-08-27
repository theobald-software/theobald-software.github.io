---
ref: xu-snowflake-06
layout: page
title: Custom SQL
description: Custom SQL
product: xtract-universal
parent: snowflake
permalink: /:collection/:path
weight: 6
lang: en_GB
progressstate: 5
---
### Custom SQL Statement

In the window [Destination settings](.//snowflake-settings#destination-settings), you can use a custom SQL statement for the three different database process steps and / or to adapt the SQL statement to your requirements.
![Destination-Settings](/img/content/destination_settings.png){:class="img-responsive"}
1. Select a particular extraction (1).
2. Click **[Destination]** (2), the window "Destination Settings" opens.
3. Select the option *Custom SQL* from the drop-down list (3) in one of the following sections:
- Preparation 
- Row Processing
- Finalization
4. Click **[Edit SQL]** (4), the window "Edit SQL" opens.

### Custom SQL Example

In the following example, the DataSource *0FI_AP_4* is extended by a column with the user-defined runtime parameter *RUNTIMEPARAMETER*. <br>
The filling of the new column is implemented dynamically in the **Finalization** section.

1. Deselect the *Error on Column Count Mismatch* option in the *XTRACT_UNIVERSAL* File Format.
![File-Format-Option](/img/content/xu/snowflake/file-format-option.png){:class="img-responsive"}
2. Create the runtime parameter *RUNTIMEPARAMETER* via **Edit runtime parameter** (5).
![Edit-Runtime-Parameter](/img/content/xu/snowflake/edit-runtime-parameter.png){:class="img-responsive"}
3. Store the runtime parameter via **Edit** Selections (7).
![Edit-Selections](/img/content/xu/snowflake/edit-selections.png){:class="img-responsive"}
4. In the Destination Settings window, in the **Preparation** section, select *Custom SQL* and click **Edit SQL**.
5. Select *Drop & Create* from the drop-down menu and click **[Generate Statement]** (10). 
![Edit-Preparation-Statement](/img/content/xu/snowflake/edit-preparation-statement.png){:class="img-responsive"}
6. Add the following line to the generated statement.
```sql
"RUNTIMEPARAMETER" VARCHAR(4),
```
7. Confirm with **[OK]**.
8. In the **Row Processing** section, the column values from SAP are processed into a local CSV file. This SQL statement is therefore left at the default *Copy file to table* as the SQL statement. <br> At this point, no data from the SAP source system but `NULL` values are written to the newly created column *RUNTIMEPARAMETER*.
9. In the **Finalization** section, the `NULL` values are filled with the following SQL statement of the runtime parameter *RUNTIMEPARAMETER* of the extraction and written into the SQL target table by the T-SQL command `UPDATE`.
![Edit-Finalization-Statement](/img/content/xu/snowflake/edit-finalization-statement.png){:class="img-responsive"}
```sql
UPDATE "0FI_AP_4"
SET RUNTIMEPARAMETER= '@RUNTIMEPARAMETER'
WHERE RUNTIMEPARAMETER IS NULL;
```
7. Run the extraction via the **Run** (11) and specify a suitable value for the runtime parameter (12).
![Run-Dialog](/img/content/xu/snowflake/run-extraction-dialog.png){:class="img-responsive"}

### Checking the Result

Check the existence of the extended column *RUNTIMEPARAMETER* in the Snowflake Console of table *0FI_AP_4*.
![Result-Snowflake-Console](/img/content/xu/snowflake/result_snowflake_console.png){:class="img-responsive"}


***********
#### Related Links
- [Snowflake Identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#double-quoted-identifiers)
- [Extraction Parameters](../execute-and-automate-extractions/extraction-parameters#custom)