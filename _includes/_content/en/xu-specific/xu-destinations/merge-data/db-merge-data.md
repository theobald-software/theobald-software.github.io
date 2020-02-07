Now we change the extraction specific settings and set 

- Preparation on *Prepare Merge,* to create a temporary staging table.
- Row Processing on *Fill merge staging table* to add data to the staging table and 
- Finalization to *Finalize Merge* to merge the staging table with the target table and then delete the staging table.

![Extraction-Specific-Settings-Merge-Makt](/img/content/xu/destination_data_merge.png){:class="img-responsive"}

The Merge command ensures that new records are inserted or existing records are updated. <br>
An update is executed for existing data records, otherwise an insert.

Which fields are updated can be found in the SQL statement ([Custom SQL only](https://help.theobald-software.com/en/xtract-universal/xu-destinations/microsoft-sql-server/sql-server-custom-sql)). <br>
Here you can change the SQL statement if necessary, for example to exclude certain columns from the update.<br>
Fields that do not appear in the SQL statement are not affected by changes.