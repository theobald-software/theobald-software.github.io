
### Delete Log Table and DB Triggers

When a Table CDC extraction is no longer in use or if you need to change the structure of the source table, simply deleting the extraction is not enough.<br>
To delete the log table and all associated triggers from your SAP system, open the Table CDC extraction and click **[Delete CDC resources]**. 

{: .box-warning } 
**Warning!** **Table change not possible** <br>
The source table structures can be changed only after clearing the CDC-related resources connected to that table in SAP, see [SAP Note 2284776](https://launchpad.support.sap.com/#/notes/2284776) 

