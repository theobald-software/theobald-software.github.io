---
ref: xu-parameters-sql
layout: page
title: Parametrisierung in SQL
description: Parametrisierung in SQL
product: xtract-universal
parent: extraktionen-ausfuehren-und-einplanen
permalink: /:collection/:path
weight: 13
lang: de_DE
---
In Xtract Universal können benutzerdefinierte Parameter (Custom Parameters) definiert werden, deren Werte man beim Aufruf setzen kann. 
Diese benutzerdefinierten Parameter stehen bei SQL-Datenbank Destinationen in den SQL-Befehlen zur Verfügung. 

Ein typischer Anwendungsfall ist die Dynamisierung von WHERE-Bedingungen bei Table-Komponenten. 
Folgende Table-Extraktion hat z.B. einen benutzerdefinierten Parameter *WNAME* in der WHERE-Clause:

![xu-customerparam-where](/img/content/xu/automation/where_condition_custom_parameter.png){:class="img-responsive"}

### Custom SQL Statement - Benutzerdefinierte SQL-Anweisung

Im Fenster [Destination Settings](../destinationen/microsoft-sql-server#destination-settings-öffnen) können Sie eine benutzerdefinierte SQL-Anweisung für die drei verschiedenen Datenbank-Prozessschritte verwenden und / oder die SQL-Anweisung an Ihre Anforderungen anpassen.
![Destination-Settings](/img/content/xu/automation/destination_settings_runtime_parameter.png){:class="img-responsive"}

1. Wählen Sie im Hauptfenster die Extraktion mit einem benutzerdefinierten Parameter in der WHERE-Bedingung (1) aus.
2. Klicken Sie auf **[Destination]** (2). Das Fenster "Destination Settings" öffnet sich.
3. Wählen Sie die Option *Custom SQL* aus den Dropdown-Listen (3)(4) der folgenden Abschnitte:
- Preparation 
- Finalization
4. Klicken Sie auf **[Edit SQL]**. Das Fenster "Edit SQL" öffnet sich.

### Custom SQL am Beispiel eines Custom Parameters
Im folgenden Beispiel wird die SAP-Tabelle *KNA1* um eine Spalte *Custom_Parameter* vom Typ *NATIONAL CHARACTER VARYING(10)* erweitert. 
Das Befüllen der neuen Spalte wird dynamisch mit der Übergabe des Laufzeitparameters umgesetzt.

Im Abschnitt **Row Processing** werden die Spaltenwerte aus SAP in die zuvor angelegten Spalten der SQL-Zieltabelle prozessiert. Dieses SQL-Statement wird daher auf dem Standard *Insert* als SQL-Statement belassen. 
Zu diesem Zeitpunkt werden keine Daten aus dem SAP-Quellsystem, sondern `NULL` Werte in die neu angelegte Spalte *Custom_Parameter* geschrieben.

Im Abschnitt **Finalization** werden die `NULL` Werte mit SQL-Statements des Laufzeitparameters *WNAME* der Extraktion befüllt und durch den T-SQL Befehl `UPDATE` in die SQL-Zieltabelle geschrieben.

{: .box-note }
**Hinweis:** Die verwendbaren Datentypen im SQL-Statement sind abhängig von der SQL-Server Datenbank Version.

1. Wählen Sie im Fenster "Destination Settings" im Abschnitt **Preparation** die Option *Custom SQL* und klicken Sie auf **Edit SQL**.
![Custom-SQL_Prep](/img/content/xu/automation/custom_sql_preparation_statement_runtime_parameter.png){:class="img-responsive"}
2. Wählen Sie im Dropdown-Menü die Option *Drop & Create* und klicken Sie auf **[Generate Statement]** (6). 
3. Fügen Sie dem generierten Statement die folgende Zeile hinzu:
```sql
[Custom_Parameter] NATIONAL CHARACTER VARYING(10)
```
4. Bestätigen Sie die Eingabe mit **[OK]**. 
5. Wählen Sie im Fenster "Destination Settings" im Abschnitt **Finalization** die Option *Custom SQL* und klicken Sie auf **Edit SQL**.
![Custom-SQL_Final](/img/content/xu/automation/custom_sql_finalization_statement_custom_parameter.png){:class="img-responsive"}
6. Wählen Sie im Dropdown-Menü die Option *Insert* und fügen Sie das folgende SQL-Statement ein (7):
```sql
UPDATE [dbo].[KNA1] 
SET [Custom_Parameter] = @WNAME 
WHERE [Custom_Parameter] IS NULL; 
```
7. Bestätigen Sie die Eingaben im Fenster "Destination Settings" mit **[OK]** (5). 

### Custom Parameter WNAME setzen

1. Aktivieren Sie die Checkbox neben dem Parameternamen, um den Parameter *WNAME* zu überschreiben.
![Custom parameters](/img/content/xu/automation/runtime_parameter_wname.png){:class="img-responsive"}
2. Tragen Sie den neuen Wert *US* ein und bestätigen Sie ihn über die Eingabetaste.
3. Klicken Sie auf **[Run]** (8), um die Extraktion auszuführen.

### Ergebnis in SSMS überprüfen

Überprüfen Sie das Ergebnis der erweiterten Spalte *Custom_Parameter* in der SQL Server-Ansicht der Tabelle *KNA1*.

![Custom_SQL_SQL_Server_Ausgabe](/img/content/xu/automation/sql_server_ansicht_extraction_date_spalte_custom_parameter.png){:class="img-responsive"}

***********
#### Weiterführende Links
- [Post-Processing Column Name Style](https://kb.theobald-software.com/xtract-universal/adjust-column-name-style)
