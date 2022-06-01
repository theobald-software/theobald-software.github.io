
### Verwendung von WHERE-Bedingung

1. Navigieren Sie zum Tab **WHERE Clause**.
2. Geben Sie die WHERE-Bedingung entweder über die manuelle Texteingabe oder über den Editor ein.
3. Um die Ergebnisse im Abschnitt **Preview** anzuzeigen, klicken Sie auf **[Load live preview]**.

{: .box-note }
**Hinweis:** Wenn der Feldname nicht eindeutig ist, muss der Tabellenname dem Feldnamen vorangestellt werden, z.B. MAKT~MATNR. Dies kann z.B. bei der Extraktion mehrerer Tabellen der Fall sein.

![Extraction-Settings-01](/img/content/xu/Table-Extraction-Where-Clause.png){:class="img-responsive"}

**[Text mode]** <br>
Ermöglicht die direkte Eingabe einer WHERE-Bedingung. **[Text mode]** ist der Standart-Eingabemodus.

**[Editor mode]** <br>
Öffnet den WHERE Clause Editor. Der WHERE Clause Editor bietet ein Toolkit, um WHERE-Bedingungen zu erstellen, siehe [WHERE Clause Editor](#where-clause-editor).

**[Load live preview]** <br>
Ermöglicht eine Echtzeit-Vorschau der Extraktionsdaten ohne dafür die Extraktion auszuführen. <br>
Daten mit Aggregatfunktionen lassen sich auch als Vorschau anzeigen. 
 
**[Count rows]** <br>
Gibt die Anzahl der Zeilen/Datensätze einer Extraktion aus unter Berücksichtigung der hinterlegten WHERE- und HAVING-Bedingungen. 

**[Refresh Metadata]** <br>
Durchführung eines erneuten Lookups auf die selektierte(n) Tabelle(n). Bestehende Mappings und Feldselektionen bleiben dabei erhalten, anders als beim erneuten Hinzufügen.<br>
Die *Refresh Metadata* Funktionalität kann z.B. notwendig sein, wenn eine Tabelle SAP-seitig angepasst, ein anderes Quellsystem angebunden, oder ein Update des Quellsystems durchgeführt wurde. In solchen Fällen kann es zu Datenschiefständen kommen, die durch diese Funktion bereinigt werden.   
 
### Einschränkungen bei WHERE-Bedingungen

{: .box-note }
**Hinweis:** 
Bei Verwendung von Table Joins können Felder der rechten Tabelle eines LEFT OUTER JOIN erst ab SAP-Release 7.40, SP05 eingeschränkt werden. <br>

Wenn Ihr SAP-System älter als Release 7.40, SP05 ist, erscheint folgender Fehler:
*RFC_ERROR_SYSTEM_FAILURE - Illegal access to the right table of a LEFT OUTER JOIN*<br>
(Unzulässiger Zugriff auf die rechte Tabelle eines LEFT OUTER JOIN)

Weitere Informationen über die Änderungen in Release 7.40, SP05 erhalten Sie auf der [SAP Helpseite](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/de-DE/abennews-740_sp05-open_sql.htm#!ABAP_MODIFICATION_5@5@).


### Syntax der WHERE-Bedingung  

{: .box-warning }
**Warnung! Fehlschlagen der Extraktion wegen Syntaxfehler!** <br>
Die Extraktionen schlagen fehl, wenn in der WHERE-Bedingung eine falsche Syntax verwendet wird.<br>
Stellen Sie sicher, dass Sie die korrekte SAP OpenSQL-Syntax verwenden. Einige wichtige Syntax-Regeln sind in diesem Hilfeabschnitt aufgeführt.

{: .box-tip}
**Tipp:** Um die Syntax der WHERE-Bedingung zu überprüfen, klicken Sie auf **[Load live preview]**. Auf diese Weise ist es nicht notwendig, eine Extraktion durchzuführen, um zu sehen, ob die Syntax korrekt ist.

{: .box-tip}
**Tipp:** Um die Leistung beim Extrahieren zu erhöhen, stellen Sie sicher, dass Sie die indizierten Felder als erste Auswahlfilteroperation in der WHERE-Bedingung platzieren.


#### Syntaxregeln

- Geben Sie ein Leerzeichen vor und nach dem Gleichheitszeichen ein:<br>
 **Korrekt:** *JAHR = '1999'* <br>
 **Falsch:** *JAHR= '1999 '*, *JAHR ='1999'* oder *JAHR='1999'*

- Setzten Sie die Fließkommazahlen in einfache Anführungszeichen: <br>
**Korrekt:** *KMENG > '10.3'* <br>
**Falsch** *KMENG > 10.3*


{: .box-note }
**Hinweis:** Die WHERE-Bedingung benötigt keinen Zeilenumbruch (Return-Taste).

- Die Werte müssen der internen SAP-Darstellung entsprechen:<br>
  - Das Datum 01.01.1999 hat die interne Darstellung 19990101 (JJJJMMTT) 
  - Die Jahresperiode 001.1999 hat die interne Darstellung 1999001 (JJJJPPP)
  - Zahlen müssen führende Nullen enthalten, z.B. hat die Kundennummer 1000 die interne Darstellung 0000001000.

| Operator   |      Bedeutung      |  
|:---------|:------------- |
|=, EQ |  Wahr, wenn der Inhalt von operand1 gleich dem Inhalt von operand2 ist|
|<>, NE |Wahr, wenn der Inhalt von operand1 ungleich dem Inhalt von operand2 ist|
|<, LT | Wahr, wenn der Inhalt von operand1 kleiner als der Inhalt von operand2 ist|
|>, GT |  Wahr, wenn der Inhalt von operand1 größer als der Inhalt von operand2 ist|
|<=, LE | Wahr, wenn der Inhalt von operand1 kleiner oder gleich dem Inhalt von operand2 ist|
|>=, GE |  Wahr, wenn der Inhalt von operand1 größer oder gleich dem Inhalt von operand2 ist|
| (NOT) LIKE | Wahr, wenn der Wert des Operanden operand1 mit dem Muster im Operanden operand2 übereinstimmt (nicht übereinstimmt). |
| (NOT) BETWEEN | Wahr, wenn der Inhalt des Operanden operand1 (nicht) zwischen den Werten der Operanden operand2 und operand3 liegt. |
| (NOT) IN | Wahr, wenn der Inhalt von operand1 (nicht) Teil des Inhalts von operand2 ist. Operand2 muss vom Typ LIST oder SQL sein.|

Für mehr Informationen über die OpenSQL-Syntax, siehe [SAP Help: Select WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/de-DE/abapwhere.htm?file=abapwhere.htm). 

### Verwendung von Subqueries

{: .box-note }
**Hinweis:** Die Verwendung von Subqueries (Unterabfragen) ist ab SAP Release 7.40, SP05 oder höher möglich.

Eine Subquery ist eine SQL-Abfrage, die innerhalb einer größeren Abfrage verschachtelt ist. 
Subqueries sind verschachtelte Abfragen, die Daten an die umschließende Abfrage liefern. Subqueries müssen in Klammern gesetzt werden und können einzelne Werte oder eine Liste von Datensätzen zurückgeben.
Weitere Informationen über die Subqueries erhalten Sie auf der [SAP Helpseite - Bedingungen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_in_subquery.htm).)

Im folgenden Beispiel wird eine Subquery mit dem Operator *IN* verwendet. 
Die folgende Anweisung gibt alle *aktiven* Kunden (Zeilen in der Tabelle KNA1) zurück, die z.B. einen Verkaufsbeleg in der Tabelle VBAK für Verkaufsbelegkopfdaten haben.

![WHERE Clause Subquery](/img/content/table/table_where_sub-select.png){:class="img-responsive"}


### WHERE Clause Editor

Der WHERE Clause Editor stellt ein Toolkit zur Verfügung, mit dem WHERE-Bedingungen auch ohne nähere Kenntnisse über die Syntax erstellt werden können.
Klicken Sie auf **[Editor mode]**, um das Toolit zu öffnen.

![WHERE-Clause-Builder-01](/img/content/where-clause-builder.png){:class="img-responsive"}

Es gibt 2 Optionen, um der WHERE-Bedingung neue Kriterien hinzuzufügen:
- **[Add Criteria]** fügt ein einzelnes Kriterium hinzu. <br>
	- Der Standardaufbau für ein Kriterium mit statischen Werten ist `[Spalte][Operator][Wert]`, z.B. *MARC~WERKS = 1000*.
	- Der Standardaufbau für ein Kriterium mit Parametern ist `[Spalte][Operator][Parameter]`, z.B. *MARC~WERKS = [p_WERKS]*.
- **[Add Criteria Group]** fügt eine Gruppe hinzu, die mehrere Kriterien beinhaltet.
	- Der Standardaufbau für eine Kriteriengruppe ist `([Spalte1][Operator1][Wert1][Logik][Spalte2][Operator2][Wert2])`, z.B. *(MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')*.

{: .box-tip }
**Tipp:** Kombinieren Sie einzelne Kriterien mit Kriteriengruppen, um komplexe Filter zu erstellen. <br>
Beispiel:
*MARC~WERKS = 1000 AND (MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB')* extrahiert nur Daten, bei denen die Spalte WERKS einen Wert von 1000 hat und die Spalte PSTAT entweder den Wert 'L' oder 'LB' hat.


#### Komponenten des WHERE Clause Editors

Entfernen oder bearbeiten Sie die Reihenfolge der einzelnen Kriterien über die Schalflächen links (1):
- **Delete row** löscht ein Kriterium.
- **Move row up** ändert die Reihenfolge der Kriterien. Das ausgewählte Kriterium wird um 1 nach oben verschoben.
- **Move row down** ändert die Reihenfolge der Kriterien. Das ausgewählte Kriterium wird um 1 nach unten verschoben.

Die Reihenfolge der Kriterien kann auch per Drag&Drop bearbeitet werden.

![WHERE-Clause-Builder-Example](/img/content/where-clause-builder-2.png){:class="img-responsive"}

Folgende Komponenten stehen im Editor zur Verfügung (2):

| Komponente    | Funktion          | 
| ------------- |-------------| 
| Column    | fügt die Spalte einer Tabelle hinzu. Klicken Sie auf die Komponente, um eine Spalte aus den verfügbaren Tabellen auszuwählen. | 
| SQL       | fügt eine SQL-Anweisung hinzu.      |  
| Operator  | fügt einen Operator hinzu, z.B. =, <, >, etc. |  
| Value | fügt einen statischen Wert vom Typ *String*, *Number*, *Flag* oder *List* hinzu. *List* bietet einen separaten Editor, um Listen vom Typ *String*, *Number* oder *Select* zu erstellen. *Select* ermöglicht die Eingabe einer SELECT-Anweisung.|
| Parameter | fügt einen zuvor definierten Laufzeitparameter hinzu, siehe [Laufzeitparameter im WHERE Clause Editor](#laufzeitparameter-im-where-clause-editor).|
| Criteria | fügt der WHERE-Bedingung ein neues Kriterium hinzu. |
| Group | fügt der WHERE-Bedingung eine neue Gruppe hinzu.| 

- Klicken Sie auf eine vorhandene Komponente, um sie zu bearbeiten.
Alle grün markierten Flächen können bearbeitet werden.<br>
- Klicken Sie auf das (x) Icon über einer Komponente, um die Komponente zu löschen.

{: .box-note }
**Hinweis:** Wenn neue Kriterien hinzugefügt oder bearbeitet werden, werden nur relevante Komponenten angezeigt.
**Operator** ist zum Beispiel nur verfügbar, wenn eine Spalte oder eine SQL-Anweisung existiert, auf die ein Operator angewendet werden kann.


### Laufzeitparameter im WHERE Clause Editor

1. Klicken Sie im Hauptfenster der Komponente auf **Edit Runtime Parameters**, um Laufzeitparameter anzulegen und zu bearbeiten. 
Das Fenster “Edit Runtime Parameters” öffnet sich.<br>
![dd-parameters](/img/content/where-clause-parameter.png){:class="img-responsive"}
2. Klicken Sie auf **[Add Scalar]**, um Skalarparameter zu definieren, die als Platzhalter für echte Werte verwendet werden können.<br>
Die Platzhalter müssen zur Extraktionslaufzeit mit echten Werten befüllt werden.<br>
**Tipp:** Parameter0..-n sind die Standardnamen für die hinzugefügten Parameter. Sie können einen beliebigen Namen eingeben (siehe vorliegendes Beispiel: “p_MATNR”).
3. Klicken Sie auf das Drop-Down-Menü (2) und weisen Sie einen der folgenden Datentypen einem Parameter zu. <br>
Die Datentypen müssen mit den SAP-Datentypen übereinstimmen.
- String: dieser Datentyp kann für jeden Typ der SAP-Selektionsfelder verwendet werden.
- Number: dieser Datentyp kann nur für numerische SAP-Selektionsfelder verwendet werden.
- Flag: dieser Datentyp kann nur für SAP-Selektionsfelder verwendet werden, die einen ‘X’ (true) oder eine leere Eingabe ‘‘ (false) als Eingabewert benötigen.
Klicken Sie auf **[OK]** (3) zum Bestätigen.
4. Klicken Sie im WHERE Clause Tab des Hauptfensters auf **[Editor mode]**, um den WHERE Clause Editor zu öffnen.
5. Fügen Sie der WHERE-Bedingung über **[Add Criteria]** und **[Default with Parameter]** ein neues Kriterium hinzu.
6. Klicken Sie auf die *Parameter* Komponente des Kriteriums. Eine Drop-Down-Liste öffnet sich und zeigt alle verfügbaren Laufzeitparameter an.
Wählen Sie einen der Laufzeitparameter aus.<br>
![WHERE-Clause-Builder-Example](/img/content/where-clause-param.png){:class="img-responsive"}
7. Klicken Sie auf **[Load live Preview]**, um die WHERE-Bedingung zu testen. 
Weisen Sie den Parametern Werte zu, wenn Sie aufgefordert werden.


{: .box-note }
**Hinweis:** Listenparameter sind noch nicht verfügbar.