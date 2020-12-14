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
progressstate: 5
---
### Custom SQL Statement - Benutzerdefinierte SQL-Anweisung

Im Dialog [Destination settings](./sql-server-einstellungen#destination-settings-öffnen) können Sie eine benutzerdefinierte SQL-Anweisung für die drei verschiedenen Datenbank-Prozessschritte verwenden und / oder die SQL-Anweisung an Ihre Anforderungen anpassen.
![Destination-Settings](/img/content/destination_settings.png){:class="img-responsive"}
1. Wählen Sie eine bestimmte Extraktion (1).
2. Klicken Sie auf **[Destination]** (2), der Dialog "Destination Settings" wird geöffnet.
3. Wählen Sie die Option *Custom SQL* aus der Dropdown-Liste (3) in einem der folgenden Abschnitte:
- Preparation 
- Row Processing
- Finalization
4. Klicken Sie auf **[Edit SQL]** (4), der Dialog "Edit SQL" wird geöffnet.

### Custom SQL Beispiel
Im folgenden Beispiel wird die Tabelle *KNA1* um eine Spalte mit dem aktuellen Datum vom Typ *DATETIME* erweitert. <br>
Das Befüllen der neuen Spalte wird dynamisch mit einer .NET basierten Funktion umgesetzt. 

{: .box-note }
**Hinweis:** Die verwendbaren Datentypen im SQL-Statement sind abhängig von der SQL-Server Datenbank Version.

1. Wählen Sie im Dialog "Destination Settings" im Abschnitt **Preparation** die Option *Custom SQL* und klicken Sie auf **Edit SQL**.
![Custom-SQL_Prep](/img/content/custom_sql_preparation_statement.png){:class="img-responsive"}
2. Wählen Sie im Dropdown-Menü die Option *Drop & Create* und klicken Sie auf **[Generate Statement]** (5). 
3. Fügen Sie dem generierten Statement die folgende Zeile hinzu: <br>
```sql
[Extraction_Date] DATETIME
```
4. Bestätigen Sie mit **[OK]**. <br>

Im Abschnitt **Row Processing** werden die Spaltenwerte aus SAP in die zuvor angelegten Spalten der SQL-Zieltabelle prozessiert. Dieses SQL-Statement wird daher auf dem Standard *Insert* als SQL-Statement belassen. Zu diesem Zeitpunkt werden keine Daten aus dem SAP-Quellsystem, sondern `NULL` Werte in die neu angelegte Spalte *Extraction_Date* geschrieben.
Im Abschnitt **Finalization** werden die `NULL` Werte mit folgenden SQL-Statement des aktuellen Datums der Extraktion befüllt und durch den T-SQL Befehl `UPDATE` in die SQL-Zieltabelle geschrieben: 

```sql
UPDATE [dbo].[KNA1] 
SET [Extraction_Date] = '#{DateTime.Now}#' 
WHERE [Extraction_Date] IS NULL; 
```

![Custom-SQL_Final](/img/content/custom_sql_finalization_statement.png){:class="img-responsive"}

#### Ergebnis überprüfen

Überprüfen Sie die Existenz der erweiterten Spalte *Extraction_Date* in der SQL Server-Ansicht der Tabelle *KNA1*.

![Custom_SQL_SQL_Server_Ausgabe](/img/content/sql_server_ansicht_extraction_date_spalte.png){:class="img-responsive"}

#### Anlage SQL Tabelle ExtractionStatistics

Die Tabelle "ExtractionStatistics" ermöglicht eine Gesamtübersicht und Status der ausgeführten Xtract Universal Extraktionen.

Um die Tabelle "ExtractionStatistics" zu erstellen, erstellen Sie eine SQL-Tabelle gemäß dem folgenden Beispiel:


```sql
CREATE TABLE [dbo].[ExtractionStatistics](
	[TableName] [nchar](50) NULL,
	[RowsCount] [int] NULL,
	[Datestamp] [nchar](50) NULL,
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
     [Datestamp],
     [RunState]
)
VALUES
(
     '#{Extraction.TableName}#', 
     '#{Extraction.RowsCount}#',
     '#{Extraction.Datestamp}#',
     '#{Extraction.RunState}#'
);
```
***********
#### Weiterführende Links
- [Post-Processing Column Name Style](https://kb.theobald-software.com/xtract-universal/adjust-column-name-style)