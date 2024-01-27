Deltaverarbeitung bedeutet, dass Datensätze in der Destination aktualisiert werden, indem nur geänderte (Update) oder neue (Insert) Datensätze in der Destination geschrieben werden. 
Anstelle der Deltaverarbeitung können die Daten im sogenannten Full Load durch wiederholtes Einlesen der gesamten Datenmenge (z.B. der gesamten Tabelle) verarbeitet werden.


### Deltaverarbeitung in Xtract Produkten
Es gibt drei Arten der Deltaverarbeitung, die von Ihrem Xtract Produkt unterstützt werden:
- Mit der [DeltaQ-Komponente](../datasource-deltaq/eine-deltaq-quelle-definieren) und Verwendung der SAP-eigenen Deltaverarbeitungs-Funktionalität 
- Mit der [ODP-Komponente](../odp/odp-functions-ov#update-mode) und Verwendung der SAP-eigenen Deltaverarbeitungs-Funktionalität-Funktionalität
- Mit der [Table/Table-Join-Komponente](../table) und einer Datenbank-Destination.

Für Deltaverarbeitung ist es ratsam auf der Destinationsseite eine Datenbank zu verwenden.


### Datenbank Destinationen
- [Amazon Redshift](../destinationen/redshift#daten-mergen) 
- [Azure Synapse Analytics (SQl pool)](../destinationen/azure-synapse-analytics#daten-mergen) 
- [Azure SQL Database](../destinationen/microsoft-sql-server#daten-mergen) 
- [EXASolution](../destinationen/exasol#daten-mergen) 
- [IBM Db2](../destinationen/ibm-db2#daten-mergen) 
- [MySQL](../destinationen/mysql#daten-mergen) 
- [Oracle](../destinationen/oracle#daten-mergen) 
- [PostgreSQL](../destinationen/postgreSQL#daten-mergen)
- [SAP HANA](../destinationen/hana#daten-mergen) 
- [SQL Server](../destinationen/microsoft-sql-server#daten-mergen) 
- [Snowflake](../destinationen/snowflake#daten-mergen)




