---
ref: xu-snowflake-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: snowflake
permalink: /:collection/:path
weight: 3
lang: de_DE
---

Wenn Sie auf die **Destination** Schaltfläche klicken, können Sie extraktionsspezifische Einstellungen bezüglich des Ziels festlegen.

![Snowflake-Destination-Einstellungen](/img/content/xu/snowflake/snowflake-destination-spec-settings.png){:class="img-responsive"}

**Table Name**

bestimmt den Namen der Zieltabelle. Sie haben die folgenden Optionen:
- **Same as name of SAP object**: Name des SAP-Objekts übernehmen
- **Same as name of extraction**: Name der Extraktion übernehmen und
- **Custom**: Hier können Sie einen eigenen Namen definieren.  

**Column Name Style** 

Definiert den Spaltennamen. Folgende Optionen sind verfügbar: 

**Code**: Der technische Spaltenname aus SAP wird als Spaltenname verwendet, z.B. MAKTX.<br>
**CodeAndText**: Der technische Name und die Beschreibung der Spalte aus SAP werden mit einem Unterstrich verbunden als Spaltennamen verwendet, z.B. MAKTX_Material Description (Short Text).<br>
**TextAndCode**: Die Beschreibung und der technische Name der Spalte SAP werden mit einem Unterstrich verbunden als Spaltennamen verwendet, z.B. Material Description (Short Text)_MAKTX.

**Date conversion**

**Convert date strings**<br>
Konvertiert das zeichenartige SAP-Datum (YYYYMMDD, z.B. 19900101) zu einem formatierten Datum (YYYY-MM-DD, z.B. 1990-01-01). Im Datenziel hat das SAP-Datum keinen String-Datentyp sondern einen echten Datumstyp.

**Convert invalid dates to**<br>
Falls ein SAP-Datum nicht in ein gültiges Datum konvertiert werden kann, wird dieser Standard-Datumswert verwendet.<br>
ungültige Wert wird dann in das eingegebene Datum konvertiert. NULL wird als Wert unterstützt.

Bei der Konvertierung eines ungültigen SAP-Datums werden zuerst die beiden Sonderfälle 00000000 und 9999XXXX überprüft.

**Convert 00000000 to**<br>
Konvertiert das SAP-Datum 00000000 zu diesem Wert.

**Convert 9999XXXX to**<br>
Konvertiert das SAP-Datum 9999XXXX zu diesem Wert.

**Preparation**

Definiert die Aktion auf der Zieldatenbank, bevor die Daten in die Zieltabelle eingefügt werden.
- *None*: keine Aktion
- *Drop & Create*: Tabelle entfernen falls vorhanden und neu anlegen (Default).
- *Truncate Or Create*: Tabelle entleeren falls vorhanden, sonst anlegen.
- *Custom SQL*: Hier können Sie eigenes Skript definieren. Siehe den unteren Abschnitt Custom SQL. 

Wollen Sie im ersten Schritt nur die Tabelle anlegen und keine Daten einfügen, dann haben Sie zwei Möglichkeiten:
1. Sie kopieren das SQL-Statement und führen es direkt auf der Zieldaten-Datenbank aus.
2. Sie wählen die Option None für Row Processing und führen die Extraktion aus.

Nachdem die Tabelle angelegt ist, bleibt es Ihnen überlassen, die Tabellendefinition zu ändern, 
indem Sie bspw. entsprechende Schlüsselfelder und Indizes bzw. zusätzliche Felder anlegen.

**Row Processing**

Definiert, wie die Daten in die Zieltabelle eingefügt werden.
- *None*: keine Aktion.
- *Copy data to table*: Datensätze in die Tabelle kopieren (Default).
- *Merge data to table*: Datensätze in die bestehende Tabelle zusammenführen.
- *Custom SQL*: Hier können Sie eigenes Skript definieren. Siehe den unteren Abschnitt Custom SQL.

**Finalization**

Definiert die Aktion auf der Zieldatenbank, nachdem die Daten in die Zieltabelle erfolgreich eingefügt werden.
- *None*: keine Aktion (Default).
- *Custom SQL*: Hier können Sie eigenes Skript definieren. Siehe den unteren Abschnitt Custom SQL. 


**Transaction style**

**One Transaction** <br>
Prepare, Row Processing und Finalization werden in einer einer einzigen Transaktion ausgeführt.<br>
Vorteil: sauberer Rollback aller Änderungen.<br>
Nachteil: ggf. umfangreiches Locking während der gesamten Extraktionsdauer 


**Three Transactions**<br>
Prepare, Row Processing und Finalization werden jeweils in einer eigenen Transaktion ausgeführt.<br>
Vorteil: sauberer Rollback der einzelnen Abschnitte, evtl. kürzere Locking-Phasen als bei One Transaction (z. B. bei DDL im Prepare wird die gesamte DB nur beim Prepare gelockt und nicht für die gesamte Extraktionsdauer)<br>
Nachteil: Kein Rollback von vorangegangen Schritt möglich (Fehler im Row Processing rollt nur Row-Processing-Änderungen zurück, aber nicht Prepare) 


**RowProcessingOnly**<br> 
Nur Row Processing wird in einer Transaktion ausgeführt. Prepare und Finalization ohne explizite Transaktion (implizite commits).<br>
Vorteil: DDL im Perpare und Finalization bei DMBS, die kein DDL in expliziten Transaktionen zulassen (z. B. AzureDWH)<br>
Nachteil: Kein Rollback von Prepare/Finalization, auch nicht als Teilschritt 

**No Transaction**<br>
Keine expliziten Transaktionen.<br>
Vorteil: Keine Transaktionsverwaltung durch DBMS benötigt (Locking, DB-Transaktionslog, etc.). Dadurch kein Locking und evtl. Performancevorteile<br>
Nachteil: Kein Rollback
