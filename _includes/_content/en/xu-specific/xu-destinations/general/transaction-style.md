#### Transaction style

**One Transaction** <br>
Prepare, Row Processing and Finalization are all performed in a single transaction.<br>
Advantage: clean rollback of all changes.<br>
Disadvantage: possibly extensive locking during the entire extraction period 


**Three Transactions**<br>
Prepare, Row Processing and Finalization are each executed in a separate transaction.<br>
Advantage: clean rollback of the individual sections, possibly shorter locking phases than with One Transaction (e.g. with DDL in the Prepare, the entire DB is only locked during the Prepare and not for the entire extraction duration) <br>
Disadvantage: No rollback of previous step possible (error in Row Processing only rolls back Row-Processing changes, but not Prepare) 


**RowProcessingOnly**<br> 
Only Row Processing is executed in a transaction. Prepare and finalization without an explicit transaction (implicit commits).<br>
Advantage: DDL in perpare and finalization for DMBS that do not allow DDL in explicit transactions (e.g. AzureDWH)<br>
Disadvantage: No rollback of Prepare/Finalization, not even as partial step 


**No Transaction**<br>
No explicit transactions.<br>
Advantage: No transaction management required by DBMS (locking, DB transaction log, etc.). This means no locking and possible performance advantages.<br>
Disadvantage: No rollback
