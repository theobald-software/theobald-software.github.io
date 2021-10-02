Delta processing means updating data records in the destination by only writing changed (update) or new (insert) data records into the destination. 
Instead of delta processing, data can be processed in so called "full load" by importing the whole amount of data repeatedly.


### Delta processing in Xtract products

There are three ways of delta processing supported by your Xtract product:
- Using [DeltaQ component](../datasource-deltaq/extraction-define) with the SAP's own delta processing functionality 
- Using [ODP component](../odp/odp-functions-ov#load-verfahren-update-mode) with the SAP's own delta processing functionality
- Using [Table / Table Join component](../table) with a database destination <br>

For delta processing it is advisable to use a database on the destination side.


### Database destinations
- [Amazon Redshift](../destinations/amazon-redshift#merging-data) 
- [Azure Synapse Analytics ](../destinations/azure-synapse-analytics#merging-data)
- [Azure SQL Database](../destinations/microsoft-sql-server#merging-data) 
- [EXASolution](../destinations/exasol#merging-data) 
- [IBM DB2](../destinations/ibm-db2#merging-data) 
- [MySQL](../destinations/mysql#merging-data) 
- [Oracle](../destinations/oracle#merging-data) 
- [PostgreSQL](../destinations/postgreSQL#merging-data)
- [SAP HANA](../destinations/sap-hana#merging-data) 
- [SQL Server](../destinations/microsoft-sql-server#merging-data) 
- [Snowflake](../destinations/snowflake#merging-data)


