---
ref: xu-microsoft-sql-server-06
layout: page
title: Custom SQL
description: Custom SQL
product: xtract-universal
parent: microsoft-sql-server
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=sql-server-voraussetzungen
---

Sie haben die Möglichkeit abseits vom Standard eigene SQL-Statement für die drei unterschiedlichen DB Prozessschritte zu verwenden und / oder diese an Ihre Bedürfnissen anzupassen.

Die notwendigen Anpassungen sind für die Abschnitte *Preparation, Row & Processing* sowie *Finalization* in den Destination Settings vorzunehmen. 
Selektieren Sie dafür eine bestehende Extraction in Xtract Universal und klicken auf die Schaltfläche Destination.

![Destination-Settings](/img/content/destination_settings.png){:class="img-responsive"}

Im folgenden Beispiel wird die Tabelle *KNA1* um eine Spalte mit dem aktuellen Datum vom Typ `DATETIME` erweitert. 
Das Befüllen dieser neuen Spalte wird dynamisch mit einer .NET basierten Funktion umgesetzt. 

<div class="fas fa-exclamation"">
  <i class="fas fa-info-circle"></i> <strong>Note:</strong> Die verwendbaren Datentypen im SQL-Statement sind abhängig von der SQL-Server Datenbank Version.
</div>

![Custom-SQL_Prep](/img/content/custom_sql_preparation_statement.png){:class="img-responsive"}

Beginnen Sie damit im Preparation Abschnitt über das Drop-Down Menü *Custom SQL* auszuwählen. Anschließend klicken Sie auf die Schaltfläche *Edit SQL*, um den Code zu bearbeiten.
Wählen Sie aus dem Drop-Down Menü *Drop & Create* aus und klicken Sie auf *Generate Statement*. Fügen Sie am Ende des erzeugten Statements folgende Zeile ein und bestätigen Sie die Eingabe mit *OK*. 

```sql
[Extraction_Date] DATETIME
```

Im Abschnitt *Row Processing* werden die Spaltenwerte aus SAP in die vorab angelegten Spalten der SQL-Zieltabelle prozessiert. Dieses SQL-Statement wird daher auf dem Standard *Insert* als SQL-Statement belassen. Zu diesem Zeitpunkt werden keine Daten aus dem SAP-Quellsystem, sondern `NULL` Werte in die neu angelegte Spalte *Extraction_Date* geschrieben.

Im letzten Abschnitt *Finalization* werden die `NULL` Werte mit folgenden SQL-Statement des aktuellen Datums der Extraktion befüllt und durch den T-SQL Befehl `UPDATE` in die SQL-Zieltabelle geschrieben: 

```sql
UPDATE [dbo].[KNA1] 
SET [Extraction_Date] = '#{DateTime.Now}#' 
WHERE [Extraction_Date] IS NULL; 
```

Bestätigen Sie die Eingabe mit *OK*. 

![Custom-SQL_Final](/img/content/custom_sql_finalization_statement.png){:class="img-responsive"}

SQL-Server Ansicht der Tabelle *KNA1* mit der erweiterten Spalte *Extraction_Date*.

![Custom_SQL_SQL_Server_Ausgabe](/img/content/sql_server_ansicht_extraction_date_spalte.png){:class="img-responsive"}

#### Anlage SQL Tabelle ExtractionStatistics

Diese Tabelle ermöglicht eine Gesamtübersicht und Status der ausgeführten Xtract Universal Extraktionen.

Erstellen Sie dafür eine SQL Tabelle nach folgenden Beispiel:

```sql
CREATE TABLE [dbo].[ExtractionStatistics](
	[TableName] [nchar](50) NULL,
	[RowsCount] [int] NULL,
	[Timestamp] [nchar](50) NULL,
	[RunState] [nchar](50) NULL
) ON [PRIMARY]
GO
```

Das Befüllen der Tabelle *ExtractionStatistics* erfolgt im DB-Prozesschritt *Finalization* über folgenden SQL-Code:

```sql
INSERT INTO [ExtractionStatistics]
(
     [TableName], 
     [RowsCount], 
     [Timestamp],
     [RunState]
)
VALUES
(
     '#{Extraction.TableName}#', 
     '#{Extraction.RowsCount}#',
     '#{Extraction.Timestamp}#',
     '#{Extraction.RunState}#'
);
```





