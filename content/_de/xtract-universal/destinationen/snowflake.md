---
ref: destinations-103
layout: page
title: Snowflake
description: Snowflake
product: xtract-universal
parent: destinationen
childidentifier: snowflake
permalink: /:collection/:path
weight: 103
lang: de_DE
progressstate: 5
---

Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten in eine Snowflake-Umgebung. 


## Voraussetzungen
Die Anbindung an die Snowflake Zielumgebung erfolgt über den ODBC-Treiber für Windows 64-Bit Architekturen.<br>
Es sind keine zusätzlichen Installationen für die Nutzung der Snowflake Destination erforderlich.

- [Download SnowflakeDSIIDriver](https://sfc-repo.snowflakecomputing.com/odbc/win64/latest/index.html)
- Konfigurieren Sie die folgenden Umgebungsvariablen, um sich mit einem Proxy-Server zu verbinden: `http_proxy`, `https_proxy`, `no_proxy`.<br>
Für mehr Informationen, siehe [Snowflake: ODBC Configuration and Connection Parameters](https://docs.snowflake.com/en/user-guide/odbc-parameters.html#using-environment-variables)

## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	

### Destination Details
![Snowflake-Destination](/img/content/xu/snowflake/snowflake-destination-details_1.png){:class="img-responsive"}

#### Connection

**Output directory**<br>
Angabe eines lokalen Verzeichnisses, in das die extrahierten Daten als csv-Datei abgelegt werden.

Wenn die Datei eine bestimmte Größe erreicht hat, wird sie gezippt (gzip) und via PUT-Befehl in den Snowflake Staging-Bereich hochgeladen. 
Anschließend werden die Daten per COPY-Befehl in die entsprechende Snowflake-Tabelle kopiert.
Wenn der Extraktionsvorgang noch nicht abgeschlossen ist, wird eine neue csv-Datei erzeugt und der Vorgang (gzip + PUT-Befehl) wiederholt sich.
Das lokale Verzeichnis und der Staging-Bereich werden im Verlauf der Extraktion geleert, d.h., die erzeugten csv-Dateien werden wieder gelöscht.<br>
Für weitere Informationen, siehe [File Splitting](#file-splitting). 

**Region**<br>
Wählen Sie die Region der Snowflake-Umgebung aus.<br>
In diesem Beispiel ist die Region *AWS - EU (Frankfurt)* ausgewählt. Die gewählte Region muss den Angaben im zugewiesen Account entsprechen. 

{: .box-note}
**Hinweis:** Regionen mit dem Suffix *(legacy)* sind veraltet. Die *Cloud Region ID* dieser Regionen wurde von Snowflake umbenannt.
Wählen Sie die *(legacy)*-Option, wenn Sie sich über einen Link mit einer alten *Cloud Region ID* mit Snowflake verbinden. <br>
Für mehr Informationen zu den aktuellen *Cloud Region IDs*, siehe [Snowflake: Supported Cloud Regions](https://docs.snowflake.com/en/user-guide/intro-regions.html).

**Account**<br>
Name des vom Snowflake zugewiesenen Kontos.
In unserem Beispiel ist es "dummy_account", wie es in der folgenden URL steht:<br>
`https://dummy_account.eu-central-1.snowflakecomputing.com/console#/`


**User Name**<br>
Name des Benutzers eingeben.

**Password**<br>
Passwort des Benutzers eingeben.

**Database**<br>
Name der Datenbank eingeben.

**Schema**<br>
Name des Schema eingeben.

**Connect**<br>
Klicken Sie auf Connect, um Ihre Verbindung zu prüfen.
Ist die Verbindung erfolgreich, dann können Sie weitere Einstellungen definieren. 

#### Stage
**Stage name**<br>
Name der Snowflake Stage eingeben. 
Beachten Sie, dass nur "Internal" Stages unterstützt werden. 


**Warehouse**<br>
Name der Snowflake Data Warehouse eingeben.

## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![Snowflake-Destination-Einstellungen](/img/content/xu/snowflake/snowflake-destination-spec-settings.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/file-name.md %}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

{% include _content/de/xu-specific/destinationen/general/file-splitting.md %}

### Preparation - SQL Anweisungen

Aktion auf der Zieldatenbank, bevor die Daten in die Zieltabelle eingefügt werden.
- *Drop & Create*: Tabelle entfernen falls vorhanden und neu anlegen (Default).
- *Truncate Or Create*: Tabelle entleeren falls vorhanden, sonst anlegen.
- *Create If Not Exists*: Tabelle anlegen falls nicht vorhanden.
- *None*: keine Aktion
- *Custom SQL*: Hier können Sie eigenes Skript definieren. Siehe den unteren Abschnitt Custom SQL. 

Wollen Sie im ersten Schritt nur die Tabelle anlegen und keine Daten einfügen, dann haben Sie zwei Möglichkeiten:
1. Sie kopieren das SQL-Statement und führen es direkt auf der Zieldaten-Datenbank aus.
2. Sie wählen die Option None für Row Processing und führen die Extraktion aus.

Nachdem die Tabelle angelegt ist, bleibt es Ihnen überlassen, die Tabellendefinition zu ändern, 
indem Sie bspw. entsprechende Schlüsselfelder und Indizes bzw. zusätzliche Felder anlegen.


### Row Processing - SQL Anweisungen

Definiert, wie die Daten in die Zieltabelle eingefügt werden.
- *None*: keine Aktion.
- *Copy file to table*: Datensätze einfügen (Default).
- *Merge File to table*: Datensätze in die Staging-Tabelle einfügen.
- *Custom SQL*: Hier können Sie eigenes Skript definieren. Siehe den unteren Abschnitt Custom SQL.


### Finalization - SQL Anweisungen

Aktion auf der Zieldatenbank, nachdem die Daten in die Zieltabelle erfolgreich eingefügt werden.
- *None*: keine Aktion (Default).
- *Custom SQL*: Hier können Sie eigenes Skript definieren. Siehe den unteren Abschnitt Custom SQL. 

#### Über Merging
Die Zusammenführung gewährleistet eine Deltaverarbeitung: neue Datensätze werden in die Datenbank eingefügt und/oder bestehende Datensätze werden aktualisiert. 
Mehr Details im Abschnitt [Daten zusammenführen (mergen)](#daten-mergen).

### Custom SQL 

Die Option Custom SQL ermöglicht die Erstellung benutzerdefinierter SQL-Anweisungen. Vorhandene SQL-Befehle können 
als Vorlagen verwendet werden:

1. Wählen Sie im Unterabschnitt z.B. **Preparation** die Option **Custom SQL** (1) aus der Dropdown-Liste.
2. Klicken Sie auf **[Edit SQL]**. das Fenster "Edit SQL" wird geöffnet.
![Formula-ExistsTable](/img/content/Formula-ExistsTable.png){:class="img-responsive"}
3. Navigieren Sie zum Dropdown-Menü und wählen Sie einen vorhandenen Befehl (3). 
4. Klicken Sie auf **[Generate Statement]**. Eine neue Anweisung wird generiert.
![Formula-ExistsTable](/img/content/Formula-ExistsTable-02.png){:class="img-responsive"}
5. Klicken Sie auf **[Copy]** um die Anweisung in den Zwischenspeicher zu kopieren.
6. Klicken Sie zur Bestätigung auf **[OK]**.

<!---Einzelheiten zu vordefinierten Ausdrücken finden Sie im [Microsoft SQL Server Beispiel](https://help.theobald-software.com/de/xtract-universal/destinationen/microsoft-sql-server/sql-server-custom-sql).

{:.box-note}
**Note:** Der benutzerdefinierte SQL-Code wird für SQL Server-Destinationen verwendet. 
Um den benutzerdefinierten SQL-Code für andere Datenbank-Destinationen zu verwenden, ist eine syntaktische Anpassung des Codes erforderlich.-->

##### **Vorlagen**

Sie können eigene SQL-Ausdrücke schreiben und haben damit die Möglichkeit, das Laden der Daten an Ihre Bedürfnisse anzupassen. <br>
Darüber hinaus können Sie z.B. auch auf der Datenbank bestehende "Stored Procedures" ausführen.
Dafür können Sie die vordefinierten SQL-Vorlagen der folgenden Phasen verwenden:
- *Preparation (z.B. Drop & Create oder Create if Not Exists)* 
- *Row Processing (z.B. Merge)* und 
- *Finalization*

{:.box-note}
**Hinweis:** Für nähere Informationen zu benutzerdefinierten SQL-Anweisungen, siehe [Custom SQL](#custom-sql).

<!---##### **Skript-Ausdrücke**

Sie können [Skript-Ausdrücke](https://help.theobald-software.com/de/xtract-universal/fortgeschrittene-techniken/script-ausdruecke) für die Custom-SQL-Befehle verwenden.

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

{:.box-tip}
**Tipp:** Der Befehl *ExistsTable(tableName)* ermöglicht die Überprüfung des Vorhandenseins einer Tabelle in einer Datenbank.-->

{% include _content/de/xu-specific/destinationen/general/transaction-style.md %}



## Daten Mergen

Das folgende Beispiel zeigt die Aktualisierung der vorhandenen Datensätze in einer 
Datenbank durch Ausführen einer Extraktion. Dabei geht es um Zusammenzuführen (Merge) der Daten, d.h. z.B. den Wert eines Feldes zu ändern oder eine neue Datenzeile einzufügen oder eine vorhandene zu aktualisieren. 

Alternativ zum Zusammenführen (Merge) können die Datensätze durch einen "Full Load" aktualisiert werden. Das Full-Load-Verfahren ist weniger effizient und performant.

Voraussetzung für das Zusammenführen (Merge) ist eine Tabelle mit vorhandenen Daten, in welche neue Daten zusammengeführt werden sollen.

Im Idealfall wird die Tabelle mit den vorhandenen Daten im initialen Lauf erstellt und mit der Option *Merge file to table* in **Row Processing** befüllt.


{:.box-warning}
**Warnung! Fehlerhaftes Zusammenführen** <br>
Ein Primärschlüssel ist eine Voraussetzung für einen Merge-Befehl. Wenn kein Primärschlüssel gesetzt ist, läuft der Zusammenführungsbefehl in einen Fehler.
Erstellen Sie einen entsprechenden Primärschlüssel in [General Settings](../erste-schritte/allgemeine-einstellungen#primary-key-tab), um den Merge-Befehl ausführen zu können.


### Aktualisierter Datensatz in SAP
Ein Feldwert innerhalb einer SAP-Tabelle wird aktualisiert. Mit einem Merge-Befehl wird der aktualisierte Wert in die Zieldatenbanktabelle geschrieben. 
![Update-Merge-Example-Data](/img/content/xu/merge_db_scheme.png){:class="img-responsive"}

Der Merge-Befehl gewährleistet eine Deltaverarbeitung: neue Datensätze werden in die Datenbank eingefügt und/oder bestehende Datensätze aktualisiert. <br>


### Merge-Befehl in Xtract Universal
Der Merge-Prozess wird mit Hilfe einer Staging-Tabelle durchgeführt und erfolgt in drei Schritten.
Im ersten Schritt wird eine temporäre Tabelle angelegt, in die die Daten im zweiten Schritt eingefügt werden.
Im dritten Schritt wird die temporäre Tabelle mit der Zieltabelle zusammengeführt und anschließend wird die temporäre Tabelle gelöscht.

1. Wählen Sie im Hauptfenster des Designers die entsprechende Extraktion aus und klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
2. Stellen Sie sicher, dass Sie die passende Destination wählen: eine Datenbankdestination.
3. Navigieren Sie zum rechten Teil des Fensters "Destination Settings" und wenden Sie die folgenden Einstellungen an:
- **Preparation**: *None*
- **Row Processing**: *Merge file to table*, um die Staging-Tabelle mit Dateien zu befüllen.
- **Finalization**: *None*
![Extraction-Specific-Settings-Merge-Makt](/img/content/xu/destination_data_merge_snowflake.png){:class="img-responsive"}

Weitere Informationen über die aktualisierten Felder finden Sie in der SQL-Anweisung ([nur Custom SQL](#custom-sql)).<br>
Es ist möglich, die SQL-Anweisung bei Bedarf zu bearbeiten, z.B. bestimmte Spalten von der Aktualisierung auszuschließen.<br>
Felder, die nicht in der SQL-Anweisung erscheinen, sind von den Änderungen nicht betroffen.


## Custom SQL

### Custom SQL Statement - Benutzerdefinierte SQL-Anweisung

Im Fenster [Destination settings](#destination-settings---destinationseinstellungen) können Sie eine benutzerdefinierte SQL-Anweisung für die drei verschiedenen Datenbank-Prozessschritte verwenden und / oder die SQL-Anweisung an Ihre Anforderungen anpassen.
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


*****
## Weiterführende Links
- [.NET-Framework](../einfuehrung/systemvoraussetzungen#andere-anwendungen-und-frameworks)
- [64-Bit Architektur](../einfuehrung/systemvoraussetzungen#hardware-anforderungen)
- [Installing and Configuring the ODBC Driver for Windows](https://docs.snowflake.com/en/user-guide/odbc-windows.html)
- [Snowflake Identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#double-quoted-identifiers)
- [Extraktionsparameter](../extraktionen-ausfuehren-und-einplanen/extraktionsparameter#custom)