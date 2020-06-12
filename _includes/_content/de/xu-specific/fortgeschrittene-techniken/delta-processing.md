Deltaverarbeitung bedeutet, dass Datensätze in der Destination aktualisiert werden, indem nur geänderte (Update) oder neue (Insert) Datensätze in der Destination geschrieben werden. 
Anstelle der Deltaverarbeitung können die Daten im sogenannten Full Load durch wiederholtes Einlesen der gesamten Datenmenge (z.B. der gesamten Tabelle) verarbeitet werden.


### Deltaverarbeitung in Xtract Produkten
Es gibt drei Arten der Deltaverarbeitung, die von Ihrem Xtract Produkt unterstützt werden:
- Mit der [DeltaQ-Komponente](../datasource-deltaq/eine-deltaq-quelle-definieren) und Verwendung der SAP-eigenen Deltaverarbeitungs-Funktionalität 
- Mit der [ODP-Komponente](../odp/odp-settings#update-mode-) und Verwendung der SAP-eigenen Deltaverarbeitungs-Funktionalität-Funktionalität
- Mit der Table/Table-Join-Komponente und einer Datenbank-Destination.

Für Deltaverarbeitung ist es ratsam auf der Destinationsseite eine Datenbank zu verwenden.


### Datenbank Destinationen
- [Amazon Redshift](../xu-zielumgebungen/redshift/daten-mergen) 
- [Azure DWH](../xu-zielumgebungen/azure_dwh/daten-mergen) 
- [Azure SQL Database](../xu-zielumgebungen/microsoft-sql-server/daten-mergen) 
- [EXASolution](../xu-zielumgebungen/exasol/daten-mergen) 
- [IBM DB2](../xu-zielumgebungen/ibm-db2/daten-mergen) 
- [MySQL](../xu-zielumgebungen/mysql/daten-mergen) 
- [Oracle](../xu-zielumgebungen/oracle/daten-mergen) 
- [PostgreSQL](../xu-zielumgebungen/postgreSQL/daten-mergen)
- [SAP HANA](../xu-zielumgebungen/hana/daten-mergen) 
- [SQL Server](../xu-zielumgebungen/microsoft-sql-server/daten-mergen) 
- [Snowflake](../xu-zielumgebungen/snowflake/daten-mergen)




