
### Verwendung von WHERE-Bedingung

1. Navigieren Sie zum Tab **WHERE Clause**.
2. Geben Sie die WHERE-Bedingung entweder über die manuelle Texteingabe oder über den Editor ein.
3. Um die Ergebnisse im Abschnitt **Preview** anzuzeigen, klicken Sie auf **[Load live preview]**.

{: .box-note }
**Hinweis:** Wenn der Feldname nicht eindeutig ist, muss der Tabellenname dem Feldnamen vorangestellt werden, z.B. MAKT~MATNR. Dies kann z.B. bei der Extraktion mehrerer Tabellen der Fall sein.

![Extraction-Settings-01](/img/content/xu/Table-Extraction-Where-Clause.png){:class="img-responsive"}


### Schaltflächen

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
| (NOT) BETWEEN | Wahr, wenn der Inhalt des Operanden operand1 (nicht) zwischen den Werten der Operanden operand1 und operand2 liegt. |
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

### Einschränkungen bei WHERE-Bedingungen

{: .box-note }
**Hinweis:** 
Bei Verwendung von Table Joins können Felder der rechten Tabelle eines LEFT OUTER JOIN erst ab SAP-Release 7.40, SP05 eingeschränkt werden. <br>

Wenn Ihr SAP-System älter als Release 7.40, SP05 ist, erscheint folgender Fehler:
*RFC_ERROR_SYSTEM_FAILURE - Illegal access to the right table of a LEFT OUTER JOIN*<br>
(Unzulässiger Zugriff auf die rechte Tabelle eines LEFT OUTER JOIN)

Weitere Informationen über die Änderungen in Release 7.40, SP05 erhalten Sie auf der [SAP Helpseite](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/de-DE/abennews-740_sp05-open_sql.htm#!ABAP_MODIFICATION_5@5@).

### WHERE Clause Editor

Der WHERE Clause Editor stellt ein Toolkit zur Verfügung, mit dem WHERE-Bedingungen auch ohne nähere Kenntnisse über die Syntax erstellt werden können.
Klicken Sie auf **[Editor mode]**, um das Toolit zu öffnen.

![WHERE-Clause-Builder-01](/img/content/where-clause-builder.png){:class="img-responsive"}

Es gibt 2 Optionen, um der WHERE-Bedingung neue Kriterien hinzuzufügen:
- **[Add Criteria]** fügt ein einzelnes Kriterium hinzu. <br>
	- Der Standardaufbau für ein einzelnes Kriterium mit statischen Werten ist `[Spalte][Operator][Wert]`, z.B. MARC~WERKS = 1000.
	- Der Standardaufbau für ein einzelnes Kriterium mit Parametern ist `[Spalte][Operator][Parameter]`, z.B. MARC~WERKS = [p_WERKS].
- **[Add Criteria Group]** fügt eine Gruppe hinzu, die mehrere Kriterien beinhaltet.
	- Der Standardaufbau für eine Kriteriengruppe `([Spalte1][Operator1][Wert1][Logik][Spalte2][Operator2][Wert2])`, z.B. (MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB').

{: .box-tip }
**Tipp:** Kombinieren Sie einzelne Kriterien mit Kriteriengruppen, um komplexe Filter zu erstellen. Beispiel:
MARC~WERKS = 1000 AND (MARC~PSTAT = 'L' OR MARC~PSTAT = 'LB') extrahiert nur Daten, bei denen die Spalte WERKS einen Wert von 1000 hat und die Spalte PSTAT entweder den Wert 'L' oder 'LB' hat.


#### Components of the WHERE Clause Editor

![WHERE-Clause-Builder-Example](/img/content/where-clause-builder-2.png){:class="img-responsive"}

The following options can be used to organize the criteria of the WHERE clause (1):
- **Delete row** deletes a criteria.
- **Move row up** changes the sequence of the criteria. The selected criteria moves up.
- **Move row down** changes the sequence of the criteria. The selected criteria moves down.

The following components can be added to the WHERE clause (2):
- **Add Column** adds a column. Click on the component to open a selection window for tables and columns.
![WHERE-Clause-Builder-Select-Column](/img/content/where-clause-builder-select-column.png){:class="img-responsive"}
- **Add SQL** adds an SQL statement.
- **Add Operator** adds an operator e.g., =, <, >, etc.
- **Add literal Value** adds a static value of type *String*, *Number*, *Flag* or *List*. *List* offers a separate editor to create lists of type *String* or *Number*. 
*List* also offers the option of using a SELECT statement to create a list.<br>
![WHERE-Clause-Builder-Value](/img/content/where-clause-value.png){:class="img-responsive"}
- **Add Parameter** adds a parameter defined in [**Edit Runtime Parameters**](#using-runtime-parameters-in-the-where-clause-builder).<br>
![WHERE-Clause-Builder-Example](/img/content/where-clause-param.png){:class="img-responsive"}
- **Add new Criteria** adds a new criteria after the selected criteria.
- **Add new Group** adds a new group of criteria the selected criteria.

<!---
When adding or editing a criteria only the relevant components are displayed e.g., **Add Operator** is only available if there is a column or SQL statement to use an operator on.
-->

To edit existing components, click on the component. All areas that are marked green can be edited.<br>
To delete a component, click the (x) icon above the component.<br>

### Using Runtime Parameters in the WHERE Clause Editor

1. Click **Edit Runtime Parameters** to create or edit dynamic runtime parameters.
The window “Edit Runtime Parameters” opens.<br>
![dd-parameters](/img/content/where-clause-parameter.png){:class="img-responsive"}
2. Click **[Add]** (1) to define parameters which can be used as placeholders for data selections. These placeholders need to be populated with actual values at extraction runtime. 
This allows you to dynamically set filters at runtime.<br>
**Tip:** Parameter0..-n is the default naming for the added parameter. You can enter a name of your choice (see the given example: “p_MATNR”).
3. Click on the drop-down menu (2) and assign one of the following data types to a parameter. 
The data types can, but don’t need to correlate to SAP data types.
- String: This data type can be used for any type of SAP selection field.
- Integer: This data type can be used for numeric SAP selection fields.
- Flag: This data type can only be used for SAP selection fields, which require an ‘X’ (true) or a blank ‘‘ (false) as input value.
Click **[OK]** (3) to confirm.
4. Click **[Editor mode]** in the WHERE clause tab of the main window to open the WHERE clause editor.
5. Add a new criteria and use **[Default with Parameter]** or add the components manually.
6. Click on the *Parameter* component and select a parameter from the drop down list.<br>
![WHERE-Clause-Builder-Example](/img/content/where-clause-param.png){:class="img-responsive"}
7. To test the WHERE clause, click **[Load live Preview]** and provide a parameter value when prompted.

