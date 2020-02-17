The following example depicts the update of the existing data records in a database by running an extraction to merge data, i.e. change value of a field or insert a new data row or update an existing one. 

{:.box-warning}
**Warning! Faulty merge** <br>
A primary key is a prerequisite for a merge command. If no primary key is set, the merge command runs into an error.
Create an appropriate primary key in the [extraction settings](../../advanced-techniques/general-settings) to execute the merge command.

### Updating a value in SAP
A field value in an SAP table is updated. With a merge command the updated value is written to the destination database table.<br>
![Update-Merge-Example-Data](/img/content/xu/merge_db_scheme.png){:class="img-responsive"}

The merge command ensures delta processing: new records are inserted into the database and / or existing records are updated. <br>


### Merge command in Xtract Universal

1. In the main window of the Designer, select the respective extraction and click **[Destination]**. The window "Destination Settings" opens.

2. Make sure to choose the correct destination (e.g., PostgreSQL target database). 
3. Navigate to the right part of the "Destination Settings" window and apply the following settings:
- **Preparation** to *Prepare Merge* to create a temporary staging table
- **Row Processing** to *Fill merge staging table* to add data to the staging table and 
- **Finalization** to *Finalize Merge* to merge the staging table with the target table and then delete the staging table.
![Extraction-Specific-Settings-Merge-Makt](/img/content/xu/destination_data_merge.png){:class="img-responsive"}

More information about the updated fields can be found in the SQL statement ([Custom SQL only](https://help.theobald-software.com/en/xtract-universal/xu-destinations/microsoft-sql-server/sql-server-custom-sql)). <br>

It is possible to edit the SQL statement if necessary, e.g., to exclude certain columns from the update.<br>
Fields that do not appear in the SQL statement are not affected by changes.
