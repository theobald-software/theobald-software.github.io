#### Debugging

By checking debugging, the default BULK insert is deactivated when writing to the database.

This enables detailed error analysis if certain data rows cannot be persisted on the database. Possible causes could be incorrect values with regard to the stored data type.

Debugging should be deactivated again after the successful error analysis, otherwise the performance of the DB write processes remains low. 

![Debugging](/img/content/debugging-bulk-insert.png){:class="img-responsive"}