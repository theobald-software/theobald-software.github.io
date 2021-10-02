The following example depicts the update of the existing data records in a database by running an extraction to merge data. Merging in this case stands for changing a value of a field or inserting a new data row or updating an existing record. 

Alternatively to merging, the data can be also updated by means of full load. The full load method is less efficient and performant.

Prerequisite for merging is a table with existing data, in which new data should be merged.

Ideally, the table with existing data is created in the initial load with the corresponding **Preparation** option and filled with data with the **Row Processing** option *Insert*.

{:.box-warning}
**Warning! Faulty merge** <br>
A primary key is a prerequisite for a merge command. If no primary key is set, the merge command runs into an error.
Create an appropriate primary key in the [General Settings](../getting-started/general-settings#primary-key-tab) to execute the merge command.


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
- **Preparation**: *Prepare Merge* to create a temporary staging table
- **Row Processing**: *Fill merge staging table* to add data to the staging table
- **Finalization**: *Finalize Merge* to merge the staging table with the target table and then delete the staging table.
![Extraction-Specific-Settings-Merge-Makt](/img/content/xu/destination_data_merge.png){:class="img-responsive"}

More information about the updated fields can be found in the SQL statement ([Custom SQL only](https://help.theobald-software.com/en/xtract-universal/destinations/microsoft-sql-server/sql-server-custom-sql)).<br>
It is possible to edit the SQL statement if necessary, e.g., to exclude certain columns from the update.<br>
Fields that do not appear in the SQL statement are not affected by changes.
