---
ref: xu-snowflake-06
layout: page
title: Custom SQL
description: Custom SQL
product: xtract-universal
parent: snowflake
permalink: /:collection/:path
weight: 6
lang: de_DE
progressstate: 5
---
### Custom SQL Statement - Benutzerdefinierte SQL-Anweisung

Im Fenster [Destination settings](./snowflake-einstellungen#destination-settings---destinationseinstellungen) können Sie eine benutzerdefinierte SQL-Anweisung für die drei verschiedenen Datenbank-Prozessschritte verwenden und / oder die SQL-Anweisung an Ihre Anforderungen anpassen.
![Destination-Settings](/img/content/destination_settings.png){:class="img-responsive"}
1. Wählen Sie eine bestimmte Extraktion (1).
2. Klicken Sie auf **[Destination]** (2), das Fenster "Destination Settings" wird geöffnet.
3. Wählen Sie die Option *Custom SQL* aus der Dropdown-Liste (3) in einem der folgenden Abschnitte:
- Preparation 
- Row Processing
- Finalization
4. Klicken Sie auf **[Edit SQL]** (4). Das Fenster "Edit SQL" öffnet sich.

### Custom SQL Beispiel

Im folgenden Beispiel wird die DataSource *0FI_AP_4* um eine Spalte mit dem benutzerdefinierten Laufzeitparameter *RUNTIMEPARAMETER* erweitert. <br>
Das Füllen der neuen Spalte wird im Abschnitt **Finalisierung** der Destinationseinstellungen dynamisch implementiert. 

1. Deselektieren Sie die Option **Error on Column Count Mismatch** im *XTRACT_UNIVERSAL* File Format.
![File-Format-Option](/img/content/xu/snowflake/file-format-option.png){:class="img-responsive"}
2. Legen Sie den Laufzeitparameter *RUNTIMEPARAMETER* über die Schaltfläche **Edit runtime parameter** (5) an.
![Edit-Runtime-Parameter](/img/content/xu/snowflake/edit-runtime-parameter.png){:class="img-responsive"}
3. Hinterlegen Sie den Laufzeitparameter über die Schaltfläche **Edit** in der Spalte *Selections* (7).
![Edit-Selections](/img/content/xu/snowflake/edit-selections.png){:class="img-responsive"}
4. Navigieren Sie zu den Destination Settings und wählen Sie im Abschnitt **Preparation** die Option *Custom SQL*. Klicken Sie auf **Edit SQL**.
5. Wählen Sie im Dropdown-Menü die Option *Drop & Create* und klicken Sie auf **[Generate Statement]** (10). 
![Edit-Preparation-Statement](/img/content/xu/snowflake/edit-preparation-statement.png){:class="img-responsive"}
6. Fügen Sie dem generierten Statement die folgende Zeile hinzu.
```sql
"RUNTIMEPARAMETER" VARCHAR(4),
```
7. Bestätigen Sie mit **[OK]**.
8. Im Abschnitt **Row Processing** werden die Spaltenwerte aus SAP in eine lokale CSV-Datei prozessiert. 
Daher wird dieses SQL-Statement auf dem Standard *Copy file to table* belassen. <br> Zu diesem Zeitpunkt werden keine Daten aus dem SAP-Quellsystem, sondern `NULL` Werte in die neu angelegte Spalte *RUNTIMEPARAMETER* geschrieben.
9. Im Abschnitt **Finalization** werden die `NULL` Werte mit der folgenden SQL-Anweisung des Laufzeitparameters *RUNTIMEPARAMETER* befüllt und durch den T-SQL Befehl `UPDATE` in die SQL-Zieltabelle geschrieben.
![Edit-Finalization-Statement](/img/content/xu/snowflake/edit-finalization-statement.png){:class="img-responsive"}
```sql
UPDATE "0FI_AP_4"
SET RUNTIMEPARAMETER= '@RUNTIMEPARAMETER'
WHERE RUNTIMEPARAMETER IS NULL;
```
7. Führen Sie die Extraktion über **Run** (11) aus und geben Sie einen geeigneten Wert für den Laufzeitparameter (12) an.
![Run-Dialog](/img/content/xu/snowflake/run-extraction-dialog.png){:class="img-responsive"}

### Ergebnis überprüfen

Überprüfen Sie die Existenz der erweiterten Spalte *RUNTIMEPARAMETER* in der Snowflake Console der Tabelle *0FI_AP_4*.
![Result-Snowflake-Console](/img/content/xu/snowflake/result_snowflake_console.png){:class="img-responsive"}

***********
#### Weiterführende Links
- [Snowflake Identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#double-quoted-identifiers)
- [Extraktionsparameter](../../extraktionen-ausfuehren-und-einplanen/extraktionsparameter#custom)