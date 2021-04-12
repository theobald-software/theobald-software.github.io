Deltaverarbeitung bedeutet, dass Datensätze in der Destination aktualisiert werden, indem nur geänderte (Update) oder neue (Insert) Datensätze in der Destination geschrieben werden. 
Anstelle der Deltaverarbeitung können die Daten im sogenannten Full Load durch wiederholtes Einlesen der gesamten Datenmenge (z.B. der gesamten Tabelle) verarbeitet werden.


### Deltaverarbeitung in Xtract Produkten
Es gibt drei Arten der Deltaverarbeitung, die von Ihrem Xtract Produkt unterstützt werden:
- Mit der [DeltaQ-Komponente](../datasource-deltaq/eine-deltaq-quelle-definieren) und Verwendung der SAP-eigenen Deltaverarbeitungs-Funktionalität 
- Mit der [ODP-Komponente](../odp/odp-functions-ov#update-mode) und Verwendung der SAP-eigenen Deltaverarbeitungs-Funktionalität-Funktionalität
- Mit der [Table/Table-Join-Komponente](../table) und einer Datenbank-Destination.

Für Deltaverarbeitung ist es ratsam auf der Destinationsseite eine Datenbank zu verwenden.


### Datenbank Destinationen
- [Amazon Redshift](../xu-destinationen/redshift/daten-mergen) 
- [Azure Synapse Analytics (SQl pool)](../xu-destinationen/azure-synapse-analytics/daten-mergen) 
- [Azure SQL Database](../xu-destinationen/microsoft-sql-server/daten-mergen) 
- [EXASolution](../xu-destinationen/exasol/daten-mergen) 
- [IBM DB2](../xu-destinationen/ibm-db2/daten-mergen) 
- [MySQL](../xu-destinationen/mysql/daten-mergen) 
- [Oracle](../xu-destinationen/oracle/daten-mergen) 
- [PostgreSQL](../xu-destinationen/postgreSQL/daten-mergen)
- [SAP HANA](../xu-destinationen/hana/daten-mergen) 
- [SQL Server](../xu-destinationen/microsoft-sql-server/daten-mergen) 
- [Snowflake](../xu-destinationen/snowflake/daten-mergen)




