---
ref: xu-exasol-03
layout: page
title: Einstellungen
description: Einstellungen
product: xtract-universal
parent: exasol
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=exasol-einstellungen
---

Wenn Sie auf die **Destination** Schaltfläche klicken, können Sie extraktionsspezifische Einstellungen bezüglich des Ziels festlegen.

![ext_spec_set_de_form](/img/content/ext_spec_set_de_form.jpg){:class="img-responsive"}

**Table Name**

bestimmt den Namen der Zieltabelle. Sie haben die folgenden Optionen:
- **Same as name of SAP object**: Name des SAP-Objekts übernehmen
- **Same as name of extraction**: Name der Extraktion übernehmen und
- **Custom**: Hier können Sie einen eigenen Namen definieren.  

**Column Name Style** 

Definiert den Spaltennamen. Folgende Optionen sind verfügbar: 

![Ex-Spec-Settings-Makt-ColumnName](/img/content/Ex-Spec-Settings-Makt-ColumnName.jpg){:class="img-responsive"}

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
- *Drop & Create*: Tabelle entfernen falls vorhanden und neu anlegen (Default).
- *Truncate Or Create*: Tabelle entleeren falls vorhanden, sonst anlegen.
- *Create If Not Exists*: Tabelle anlegen falls nicht vorhanden.
- *Prepare Merge*: bereitet den Merge-Prozess vor und erstellt z.B. eine temporäre Staging-Tabelle. Für weitere Infos siehe Abschnitt Über Merging. 
- *None*: keine Aktion
- *Custom SQL*: Hier können Sie eigenes Skript definieren. Siehe den unteren Abschnitt Custom SQL. 

Wollen Sie im ersten Schritt nur die Tabelle anlegen und keine Daten einfügen, dann haben Sie zwei Möglichkeiten:
1. Sie kopieren das SQL-Statement und führen es direkt auf der Zieldaten-Datenbank aus.
2. Sie wählen die Option None für Row Processing und führen die Extraktion aus.

Nachdem die Tabelle angelegt ist, bleibt es Ihnen überlassen, die Tabellendefinition zu ändern, 
indem Sie bspw. entsprechende Schlüsselfelder und Indizes bzw. zusätzliche Felder anlegen.


**Row Processing**

Definiert, wie die Daten in die Zieltabelle eingefügt werden.
- *Insert*: Datensätze einfügen (Default).
- *Fill merge staging table*: Datensätze in die Staging-Tabelle einfügen.
- *None*: keine Aktion.
- *Custom SQL*: Hier können Sie eigenes Skript definieren. Siehe den unteren Abschnitt Custom SQL.
- *Merge (deprecated)*: Diese Option ist veraltet. Bitte nutzen Sie die Option Fill merge staging table und prüfen Sie den Abschnitt Über Merging. 

**Finalization**

Definiert die Aktion auf der Zieldatenbank, nachdem die Daten in die Zieltabelle erfolgreich eingefügt werden.
- *Finalize Merge*: schließt den Merge-Prozess ab und löscht z.B. die temporäre Staging-Tabelle. Für weitere Infos siehe Abschnitt Über Merging. 
- *None*: keine Aktion (Default).
- *Custom SQL*: Hier können Sie eigenes Skript definieren. Siehe den unteren Abschnitt Custom SQL. 

**Über Merging**

Die Voraussetzung ist, dass Sie eine Tabelle haben, in die Sie die neu kommende Daten mit den vorhandenen Daten zusammenführen (Merge) wollen.<br>
Diese Tabelle haben Sie idealerweise im ersten Lauf mit der entsprechenden Preparation-Option angelegt und mit der Row Processing-Option Insert mit Daten befüllt.

In den weiteren Läufen wollen Sie nun die neuen Datensätze mit den bestehenden mergen. 
Daher setzen Sie die folgenden Optionen: 
- Preparation auf *Prepare Merge*, 
- Row Processing auf  *Fill merge staging table* und 
- Finalization auf *Finalize Merge*.

Der Merge-Vorgang wird mittels einer Staging-Tabelle durchgeführt und findet in drei Schritten statt.<br>
Im ersten Schritt wird eine temporäre Tabelle angelegt, in welche die Daten im zweiten Schritt eingefügt werden.<br>
Im dritten Schritt wird dann die temporäre Tabelle mit der Zieltabelle gemergt und anschließend die temporäre Tabelle gelöscht.

![Destination-Exa-Makt-Merge](/img/content/Destination-Exa-Makt-Merge.jpg){:class="img-responsive"}

Der Merge-Befehl aktualisiert vorhandene Datensätze bzw. fügt Nichtvorhandene ein. Welche Felder aktualisiert werden, kann man dem SQL-Statement entnehmen.<br>
Der SQL-Befehl kann bei Bedarf geändert werden, um z.B. bestimmte Spalten von der Aktualisierung auszuschließen.<br>
Felder, welche nicht im SQL-Statement auftauchen, sind von Änderungen nicht betroffen.

Es ist wichtig, dass ein entsprechender Index angelegt ist, um den Merge-Befehl schnell auszuführen. 
Ohne einen Index würde die Ausführung des Merge-Befehls abhängig von der Datenmenge lange dauern.


**Custom SQL** 

Hier können Sie eigene SQL- bzw. Skript-Ausdrücke definieren. Bestehende SQL-Befehle können Sie als Vorlage verwenden. 

**Vorlagen**

Sie können eigene SQL-Ausdrücke schreiben und haben damit die Möglichkeit, das Laden der Daten an Ihre Bedürfnisse anzupassen. <br>
Darüber hinaus können Sie z.B. auch auf der Datenbank bestehende Stored Procedures ausführen.
Dafür können Sie die angeboten SQL-Vorlagen der folgenden Phasen verwenden:
- *Preparation (z.B. Drop & Create oder Create if Not Exists)* 
- *Row Processing (z.B. Insert oder Merge)* und 
- *Finalization*.

**Skript-Ausdrücke**

Für den Custom SQL-Befehl können Sie nun auch Skript-Ausdrücke einsetzen. Weitere Infos finden Sie auf der Seite Skript-Ausdrücke (unter Fortgeschrittene Techniken).

![Formula-ExistsTable](/img/content/Formula-ExistsTable.jpg){:class="img-responsive"}

Unter anderem können Sie den Befehl *ExistsTable(tableName)* verwenden, um die Existenz einer Tabelle zu überprüfen. Diese Funktion wurde eingeführt, da manche Datenbanksysteme dies nur unter Einschränkung unterstützen.

<details>
<summary>SQL-Skript</summary>
{% highlight sql %}
#{
   iif
   (
      ExistsTable("MAKT"),
      "TRUNCATE TABLE \"MAKT\";",
      "
         CREATE TABLE \"MAKT\"(
            \"MATNR\" VARCHAR(18),
            \"SPRAS\" VARCHAR(2),
            \"MAKTX\" VARCHAR(40));
      "
   )
}#

{% endhighlight %}
</details>

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
