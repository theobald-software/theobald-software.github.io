
### Preparation - SQL Anweisungen

Definiert die Aktion auf der Zieldatenbank, bevor die Daten in die Zieltabelle eingefügt werden.
- *Drop & Create*: Tabelle entfernen falls vorhanden und neu anlegen (Default).
- *Truncate Or Create*: Tabelle entleeren falls vorhanden, sonst anlegen.
- *Create If Not Exists*: Tabelle anlegen falls nicht vorhanden.
- *Prepare Merge*: bereitet den Merge-Prozess vor und erstellt z.B. eine temporäre Staging-Tabelle. Für weitere Infos siehe [Daten Mergen](#daten-mergen). 
- *None*: keine Aktion
- *Custom SQL*: Hier können Sie eigenes Skript definieren. Siehe den unteren Abschnitt Custom SQL. 

Wollen Sie im ersten Schritt nur die Tabelle anlegen und keine Daten einfügen, dann haben Sie zwei Möglichkeiten:
1. Sie kopieren das SQL-Statement und führen es direkt auf der Zieldaten-Datenbank aus.
2. Sie wählen die Option None für Row Processing und führen die Extraktion aus.

Nachdem die Tabelle angelegt ist, bleibt es Ihnen überlassen, die Tabellendefinition zu ändern, 
indem Sie bspw. entsprechende Schlüsselfelder und Indizes bzw. zusätzliche Felder anlegen.


### Row Processing - SQL Anweisungen

Definiert, wie die Daten in die Zieltabelle eingefügt werden.
- *Insert*: Datensätze einfügen (Default).
- *Fill merge staging table*: Datensätze in die Staging-Tabelle einfügen.
- *None*: keine Aktion.
- *Custom SQL*: Hier können Sie eigenes Skript definieren. Siehe den unteren Abschnitt Custom SQL.
- *Merge (deprecated)*: Diese Option ist veraltet. Bitte nutzen Sie die Option Fill merge staging table und prüfen Sie den Abschnitt Über Merging. 


### Finalization - SQL Anweisungen

Definiert die Aktion auf der Zieldatenbank, nachdem die Daten in die Zieltabelle erfolgreich eingefügt werden.
- *Finalize Merge*: schließt den Merge-Prozess ab und löscht z.B. die temporäre Staging-Tabelle. Für weitere Infos siehe Abschnitt Über Merging. 
- *None*: keine Aktion (Default).
- *Custom SQL*: Hier können Sie eigenes Skript definieren. Siehe den unteren Abschnitt Custom SQL. 

#### Über Merging
Die Zusammenführung gewährleistet eine Deltaverarbeitung: neue Datensätze werden in die Datenbank eingefügt und/oder bestehende Datensätze werden aktualisiert. 
Mehr Details im Abschnitt [Daten zusammenführen (mergen)](#daten-mergen).

### Custom SQL 

Die Option Custom SQL ermöglicht die Erstellung benutzerdefinierter SQL- oder Skriptausdrücke. Vorhandene SQL-Befehle können 
als Vorlagen verwendet werden:

1. Wählen Sie im Unterabschnitt z.B. **Preparation** die Option **Custom SQL** (1) aus der Dropdown-Liste.
2. Klicken Sie auf **[Edit SQL]**. Der Dialog "Edit SQL" wird geöffnet.
![Formula-ExistsTable](/img/content/Formula-ExistsTable.png){:class="img-responsive"}
3. Navigieren Sie zum Dropdown-Menü und wählen Sie einen vorhandenen Befehl (3). 
4. Klicken Sie auf **[Generate Statement]**. Eine neue Anweisung wird generiert.
![Formula-ExistsTable](/img/content/Formula-ExistsTable-02.png){:class="img-responsive"}
5. Klicken Sie auf **[Copy]** um die Anweisung in den Zwischenspeicher zu kopieren.
6. Klicken Sie zur Bestätigung auf **[OK]**.

Einzelheiten zu vordefinierten Ausdrücken finden Sie im [Microsoft SQL Server Beispiel](./microsoft-sql-server#custom-sql).

{:.box-note}
**Note:** Der benutzerdefinierte SQL-Code wird für SQL Server-Destinationen verwendet. 
Um den benutzerdefinierten SQL-Code für andere Datenbank-Destinationen zu verwenden, ist eine syntaktische Anpassung des Codes erforderlich.

##### **Vorlagen**

Sie können eigene SQL-Ausdrücke schreiben und haben damit die Möglichkeit, das Laden der Daten an Ihre Bedürfnisse anzupassen. <br>
Darüber hinaus können Sie z.B. auch auf der Datenbank bestehende "Stored Procedures" ausführen.
Dafür können Sie die vordefinierten SQL-Vorlagen der folgenden Phasen verwenden:
- *Preparation (z.B. Drop & Create oder Create if Not Exists)* 
- *Row Processing (z.B. Insert oder Merge)* und 
- *Finalization*


##### **Skript-Ausdrücke**

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
**Tipp:** Der Befehl *ExistsTable(tableName)* ermöglicht die Überprüfung des Vorhandenseins einer Tabelle in einer Datenbank.

