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

Sie haben die Möglichkeit abseits vom Standard SQL-Statement, eigene SQL-Statement für die drei unterschiedlichen Prozessschritte 

- Preparation, 
- Row & Processing sowie 
- Finalization* 

zu verwenden und / oder diese zu Ihren Bedürfnissen anzupassen.

![Destination-Settings](/img/content/destination_settings.png){:class="img-responsive"}

Im folgenden Beispiel wird die Tabelle *KNA1* um eine Spalte mit dem aktuellen Zeitstempel vom Typ *datetime* erweitert. Das Befüllen dieser neuen Spalte wird dynamisch mit einer .NET basierten Funktion umgesetzt. Die verwendbaren Datentypen im SQL-Statement sind abhängig von der SQL-Server Datenbank Version.

![Custom-SQL_Prep](/img/content/custom_sql_generate_statement.png){:class="img-responsive"}

Beginnen Sie damit im Preparation Abschnitt über das Drop-Down Menü *Custom SQL* auszuwählen. Anschließend klicken Sie auf die Schaltfläche *Edit SQL*, um den Code zu bearbeiten.
Wählen Sie aus dem Drop-Down Menü *Drop & Create* aus und klicken Sie auf *Generate Statement*. Fügen Sie am Ende des erzeugten Statements folgende Zeile ein `[DATUM] datetime` und bestätigen Sie die Eingabe mit *OK*. 

![Custom-SQL_DATUM_insert](/img/content/custom_sql_column_datum_einfügen.png){:class="img-responsive"}

Im Abschnitt *Row Processing* werden die Spaltenwerte aus SAP in die vorab angelegten Spalten der SQL-Zieltabelle prozessiert. Dieses SQL-Statement wird daher auf dem Standard *Insert* als SQL-Statement belassen. Zu diesem Zeitpunkt werden keine Daten aus dem SAP-Quellsystem, sondern `NULL` Werte in die neu angelegte Spalte *Datum* geschrieben.

Im letzten Abschnitt *Finalization* werden die `NULL` Werte mit folgenden SQL-Statement des aktuellen Datums der Extraktion befüllt und durch den T-SQL Befehl `UPDATE` in die SQL-Zieltabelle geschrieben: `UPDATE [dbo].[KNA1] SET [DATUM] = GETDATE() WHERE [DATUM] IS NULL;`. Bestätigen Sie die Eingabe mit *OK*. 

![Custom-SQL_Final](/img/content/custom_sql_finalization_statement.png){:class="img-responsive"}





