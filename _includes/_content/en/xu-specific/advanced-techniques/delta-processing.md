Delta processing means updating data records in the destination by only writing changed (update) or new (insert) data records into the destination. 
Instead of delta processing, data can be processed in so called "full load" by importing the whole amount of data repeatedly.


### Delta processing in Xtract products

There are three ways of delta processing supported by your Xtract product:
- Using [DeltaQ component](../datasource-deltaq/extraction-define) with the SAP's own delta processing functionality 
- Using [ODP component](../odp/odp-settings#update-mode) with the SAP's own delta processing functionality
- Using Table / Table Join component with a database destination <br>

For delta processing it is advisable to use a database on the destination side.


### Database destinations
- [Amazon Redshift](../xu-destinations/amzon-redshift/merging-data) 
- [Azure Synapse Analytics ](../xu-destinations/azure-dwh/merging-data) (former Azure DWH)
- [Azure SQL Database](../xu-destinations/microsoft-sql-server/merging-data) 
- [EXASolution](../xu-destinations/exasol/merging-data) 
- [IBM DB2](../xu-destinations/ibm-db2/merging-data) 
- [MySQL](../xu-destinations/mysql/merging-data) 
- [Oracle](../xu-destinations/oracle/merging-data) 
- [PostgreSQL](../xu-destinations/postgreSQL/merging-data)
- [SAP HANA](../xu-destinations/sap-hana/merging-data) 
- [SQL Server](../xu-destinations/microsoft-sql-server/merging-data) 
- [Snowflake](../xu-destinations/snowflake/merging-data)


