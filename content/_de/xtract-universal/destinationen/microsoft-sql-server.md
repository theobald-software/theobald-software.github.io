---
ref: destinations-60
layout: page
title: Microsoft SQL Server
description: Microsoft SQL Server
product: xtract-universal
parent: destinationen
childidentifier: microsoft-sql-server
permalink: /:collection/:path
weight: 60
lang: de_DE
progressstate: 5
---
Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in eine Microsoft Server SQL Datenbank oder eine Microsoft Azure SQL Datenbank. 

## Voraussetzungen

Der ADO.NET Provider für den Microsoft SQL Server ist ein Bestandteil des .NET Frameworks. Daher müssen Sie in diesem Fall nichts zusätzliches installieren.

## Verbindung


{% include _content/de/xu-specific/destinationen/general/connection.md %}	

### Destination Details

![MSSql-Destination-Details](/img/content/MSSql-Destination-Details.png){:class="img-responsive"}

**Server Name**<br>
Angabe der Host Adresse des SQL Servers. Bitte folgende Syntax beachten:

|Syntax | Beispiel |
|:---|:---|
|[ServerName]| `dbtest`|
|[ServerName],[Port]| `dbtest,1433`|
|[ServerName].[Domain],[Port] |  `dbtest.theobald.software,1433`|

Die Angabe des Ports ist nur notwendig, wenn dieser abseits vom SQL Standard editiert wurde.

**Require TLS encryption**<br>
Clientseitiges Erzwingen von [TLS Verschlüsselung](https://docs.microsoft.com/en-us/azure/sql-database/sql-database-connect-query#tls-considerations-for-sql-database-connectivity). Setzt folgende Parameter im Connection String:<br>
* Encrypt = On
* TrustServerCertificate = Off
<br>
siehe auch [Aktivieren von verschlüsselten Verbindungen zur Datenbank-Engine](https://docs.microsoft.com/en-us/sql/database-engine/configure-windows/enable-encrypted-connections-to-the-database-engine?view=sql-server-2017#client-request-encrypt-connect-23h)


**Windows Authentication**<br>
Verwendet den Service Account, unter dem der XU Service läuft, um sich am SQL Server zu authentisieren.

{: .box-note }
**Hinweis:** Für eine erfolgreiche Verbindung zur Datenbank mit Windows-Authentifizierung, stellen Sie sicher, dass [der XU-Dienst unter einem Windows AD-Benutzer ausgeführt wird](../fortgeschrittene-techniken/service-account), mit Zugriff auf die Datenbank.

**Impersonate authenticated caller**<br>
Verwendet den Windows AD Benuzer, der die Extraktion ausführt, um sich am SQL Server zu authentisieren [Kerberos Authentisierung.](https://blogs.msdn.microsoft.com/sqlupdates/2014/12/05/sql-server-kerberos-and-spn-quick-reference/)
<br>
Hierfür ist eine ähnliche Konfiguration wie beim [Kerberos Single Sign On](https://kb.theobald-software.com/xtract-universal/sso-with-kerberos-snc) gegen ein SAP System notwendig.

**User Name**<br>
SQL Server Authentisierung - User Name 

**Password**<br>
SQL Server Authentisierung - Passwort

**Database Name**<br>
Name der Datenbank

**Test Connection**<br>
Klicken Sie auf die Schaltfläche, um die Datenbankverbindung zu testen. 

## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![ext_spec_set_de_form_debug](/img/content/ext_spec_set_de_form_debug.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}
{% include _content/de/xu-specific/destinationen/general/file-name-script-expressions.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

{% include _content/de/xu-specific/destinationen/general/sql-commands.md %}

{% include _content/de/xu-specific/destinationen/general/debugging-bulk-insert.md %}

{% include _content/de/xu-specific/destinationen/general/transaction-style.md %}


## Daten Mergen

{% include _content/de/xu-specific/destinationen/merge-data/db-merge-data.md  %}

## Custom SQL

### Custom SQL Statement - Benutzerdefinierte SQL-Anweisung

Im Fenster [Destination settings](#destination-settings-öffnen) können Sie eine benutzerdefinierte SQL-Anweisung für die drei verschiedenen Datenbank-Prozessschritte verwenden und / oder die SQL-Anweisung an Ihre Anforderungen anpassen.
![Destination-Settings](/img/content/destination_settings.png){:class="img-responsive"}
1. Wählen Sie eine bestimmte Extraktion (1).
2. Klicken Sie auf **[Destination]** (2), das Fenster "Destination Settings" wird geöffnet.
3. Wählen Sie die Option *Custom SQL* aus der Dropdown-Liste (3) in einem der folgenden Abschnitte:
- Preparation 
- Row Processing
- Finalization
4. Klicken Sie auf **[Edit SQL]** (4), das Fenster "Edit SQL" wird geöffnet.

### Custom SQL Beispiel
Im folgenden Beispiel wird die Tabelle *KNA1* um eine Spalte mit dem aktuellen Datum vom Typ *DATETIME* erweitert. <br>
Das Befüllen der neuen Spalte wird dynamisch mit einer .NET basierten Funktion umgesetzt. 

{: .box-note }
**Hinweis:** Die verwendbaren Datentypen im SQL-Statement sind abhängig von der SQL-Server Datenbank Version.

1. Wählen Sie im Fenster "Destination Settings" im Abschnitt **Preparation** die Option *Custom SQL* und klicken Sie auf **Edit SQL**.
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

*******
## Weiterführende Links
- [Post-Processing Column Name Style](https://kb.theobald-software.com/xtract-universal/adjust-column-name-style)
- [Integration mittels Azure Data Factory](../extraktionen-ausfuehren-und-einplanen/call-via-etl#integration-mittels-azure-data-factory)