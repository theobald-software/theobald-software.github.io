{% if page.product != "yunio" %}
### Syntax der WHERE-Bedingung  

{: .box-warning }
**Warnung! Fehlschlagen der Extraktion wegen Syntaxfehler!** <br>
Die Extraktionen schlagen fehl, wenn in der WHERE-Bedingung eine falsche Syntax verwendet wird.<br>
Stellen Sie sicher, dass Sie die korrekte SAP OpenSQL-Syntax verwenden. Einige wichtige Syntax-Regeln sind in diesem Hilfeabschnitt aufgeführt.

{: .box-tip}
**Tipp:** Um die Syntax der WHERE-Bedingung zu überprüfen, klicken Sie auf **[Load live preview]**. Auf diese Weise ist es nicht notwendig, eine Extraktion durchzuführen, um zu sehen, ob die Syntax korrekt ist.

{: .box-tip}
**Tipp:** Um die Leistung beim Extrahieren zu erhöhen, stellen Sie sicher, dass Sie die indizierten Felder als erste Auswahlfilteroperation in der WHERE-Bedingung platzieren.
{% endif %}

#### Syntaxregeln

- Geben Sie ein Leerzeichen vor und nach dem Gleichheitszeichen ein:<br>
 **Korrekt:** *JAHR = '1999'* <br>
 **Falsch:** *JAHR= '1999 '*, *JAHR ='1999'* oder *JAHR='1999'*

- Setzten Sie Fließkommazahlen in einfache Anführungszeichen: <br>
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
| (NOT) IN | Wahr, wenn der Inhalt von operand1 (nicht) Teil des Inhalts von operand2 ist. Operand2 muss vom Typ LIST oder SQL sein.|

<!--- | (NOT) BETWEEN | Wahr, wenn der Inhalt des Operanden operand1 (nicht) zwischen den Werten der Operanden operand2 und operand3 liegt. | -->
Für mehr Informationen über die OpenSQL-Syntax, siehe [SAP Help: Select WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/de-DE/abapwhere.htm?file=abapwhere.htm). 

{% if page.product == "xtract-universal" or page.product == "board-connector" %}
<!--- Script Expressions are not supported by Xtract IS and Xtract for Alteryx-->

### Skript-Ausdrücke

Der **[Text-Modus]** der WHERE-Bedingung unterstützt die Verwendung von Skript-Ausdrücken.
Sie werden normalerweise verwendet, um ein dynamisches Datum auf der Basis des aktuellen Datums zu bestimmen. <br>
Um Skript-Ausdrücke in der WHERE-Bedingung zu verwenden, müssen sie in einfache Anführungszeichen gesetzt werden.<br>
{% if page.product == "xtract-universal" %}
Für mehr Informationen zu Skript-Ausdrücken, siehe [Skript-Ausdrücke](../fortgeschrittene-techniken/script-ausdruecke).
{% endif %}

**Syntax:**<br>
```[Field_name][Space][Operator][Space]'#[Script-Expression]#'```<br>
```BUDAT >= '#{DateTime.Now.AddYears(-5).ToString("yyyyMMdd")}#'```

**Beispiele:**

|   Eingabe                         | Ausgabe                                                                         | Beschreibung              |
|:--------------------------------------|:------------------------------------------------------------------------------|:--------------------|
|```#{ DateTime.Now.ToString("yyyyMMdd") }#```                                       | yyyyMMdd | Aktuelles Datum im SAP-Format          |
|```#{ String.Concat(DateTime.Now.Year.ToString(), "0101") }#```                     | yyyy0101 | Aktuelles Datum verkettet mit "0101"           |
|```#{ String.Concat(DateTime.Now.ToString("yyyy"), "0101") }#```                    | yyyy0101 | Aktuelles Datum verkettet mit "0101"            |
|```#{ String.Concat(DateTime.Now.ToString("yyyyMMdd").Substring(0,4), "0101") }#``` | yyyy0101 | Aktuelles Datum verkettet mit "0101""           |

<!--- Script Expressions are not supported by Xtract IS and Xtract for Alteryx-->
{% endif %}

{% if page.product != "yunio" %}
### Verwendung von Subqueries

{: .box-note }
**Hinweis:** Die Verwendung von Subqueries (Unterabfragen) ist ab SAP Release 7.40, SP05 oder höher möglich.

Eine Subquery ist eine SQL-Abfrage, die innerhalb einer größeren Abfrage verschachtelt ist. 
Subqueries sind verschachtelte Abfragen, die Daten an die umschließende Abfrage liefern. Subqueries müssen in Klammern gesetzt werden und können einzelne Werte oder eine Liste von Datensätzen zurückgeben.
Weitere Informationen über die Subqueries erhalten Sie auf der [SAP Helpseite - Bedingungen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_in_subquery.htm).)

Im folgenden Beispiel wird eine Subquery mit dem Operator *IN* verwendet. 
Die folgende Anweisung gibt alle *aktiven* Kunden (Zeilen in der Tabelle KNA1) zurück, die z.B. einen Verkaufsbeleg in der Tabelle VBAK für Verkaufsbelegkopfdaten haben.

![WHERE Clause Subquery](/img/content/table/table_where_sub-select.png){:class="img-responsive"}
{% endif %}