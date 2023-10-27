
### Transaction style

{: .box-note }
**Note:** The available options for Transaction Style vary depending on the destination.

**One Transaction**<br>
*Preparation*, *Row Processing* and *Finalization* are all performed in a single transaction.<br>
Advantage: clean rollback of all changes.<br>
Disadvantage: possibly extensive locking during the entire extraction period.

It is recommended to only use *One Transaction* in combination with DML commands, e.g., "truncate table" and "insert. 
Using DDL commands commits the active transaction, causing rollback issues for the steps after the DDL command. 
Example: If a table is created in the preparation step, the opened "OneTransaction" is committed and a rollback in the next steps is not performed correctly.
For more information, see [Snowflake Documentation: DDL Statements](https://docs.snowflake.com/en/sql-reference/transactions#label-transactions-ddl).

**Three Transactions**<br>
*Preparation*, *Row Processing* and *Finalization* are each executed in a separate transaction.<br>
Advantage: clean rollback of the individual sections, possibly shorter locking phases than with *One Transaction* (e.g. with DDL in *Preparation*, the entire DB is only locked during preparation and not for the entire extraction duration). <br>
Disadvantage: No rollback of previous step possible (error in *Row Processing* only rolls back changes from *Row Processing*, but not *Preparation*). 

**RowProcessingOnly**<br>
Only *Row Processing* is executed in a transaction. *Preparation* and *Finalization* without an explicit transaction (implicit commits).<br>
Advantage: DDL in 'Preparation* and *Finalization* for DBMS that do not allow DDL in explicit transactions (e.g. AzureDWH)<br>
Disadvantage: No rollback of *Preparation/Finalization*.

**No Transaction**<br>
No explicit transactions.<br>
Advantage: No transaction management required by DBMS (locking, DB transaction log, etc.). This means no locking and possible performance advantages.<br>
Disadvantage: No rollback
