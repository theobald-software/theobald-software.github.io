
### Debugging

![Debugging](/img/content/debugging-bulk-insert.png){:class="img-responsive"}

{: .box-warning}
**Warning! Performance decrease!**
The performance decreases when bulk insert is disabled.
Disable the bulk insert only when necessary, e.g., upon request of the support team.


By activating the checkbox **Disable bulk operations**, 
the default bulk insert is deactivated when writing to a database.

This option enables detailed error analysis, if certain data rows cannot be persisted on the database.
Possible causes for the incorrect behavior could be incorrect values with regard to the stored data type.

Debugging needs to be deactivated again after the successful error analysis, otherwise the performance of the database write processes remains low. 

#### Using Custom SQL

{: .box-note }
**Note:** Bulk operations are not supported when using [Custom SQL statements](#sql-commands) (e.g., by *Row Processing*), which leads to 
performance decrease. 

{: .box-tip }
**Tip:** To increase performance when using [Custom SQL statements](#sql-commands), it is recommended to perform the custom processing in the *Finalization* step.