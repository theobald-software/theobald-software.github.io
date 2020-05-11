### Verwendung von WHERE-Bedingung

1. Navigieren Sie zum Reiter **WHERE Clause**.
2. Geben Sie die WHERE-Bedingung ein.
3. Um die Ergebnisse im Abschnitt **Preview** anzuzeigen, klicken Sie auf **[Load live preview]**.

{: .box-note }
**Hinweis:** Wenn der Feldname nicht eindeutig ist, muss der Tabellenname dem Feldnamen vorangestellt werden, z.B. MAKT~MATNR. Dies kann z.B. bei [Table Joins](./table-joins) der Fall sein.

![Extraction-Settings-01](/img/content/xu/Table-Extraction-Where-Clause.png){:class="img-responsive"}

### Schaltflächen
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
  - Die Jahresperiode 001.1999 hat die interne Darstellung 1999001 (YYYYYPPP)
  - Zahlen müssen führende Nullen enthalten, z.B. hat die Kundennummer 1000 die interne Darstellung 0000001000.

| Operator   |      Bedeutung      |  
|----------|:------------- |
| =, EQ |  Wahr, wenn der Inhalt von operand1 gleich dem Inhalt von operand2 ist|
|<>, NE |Wahr, wenn der Inhalt von operand1 ungleich dem Inhalt von operand2 ist|
| <, LT | Wahr, wenn der Inhalt von operand1 kleiner als der Inhalt von operand2 ist|
|>, GT |  Wahr, wenn der Inhalt von operand1 größer als der Inhalt von operand2 ist|
| <=, LE | Wahr, wenn der Inhalt von operand1 kleiner oder gleich dem Inhalt von operand2 ist|
|>=, GE |  Wahr, wenn der Inhalt von operand1 größer oder gleich dem Inhalt von operand2 ist|
| LIKE |  Wahr, wenn der Wert von operand1 mit dem Muster ('%' ist eine beliebige Zeichenkette) im operand2 übereinstimmt.|
| NOT LIKE |  Wahr, wenn der Wert von operand1 mit dem Muster ('%' ist eine beliebige Zeichenkette) im operand2 nicht übereinstimmt |

 Weitere Informationen über die OpenSQL-Syntax erhalten Sie auf der [SAP Helpseite - Select WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/de-DE/abapwhere.htm?file=abapwhere.htm). 

### Einschränkungen bei WHERE-Bedingungen

{: .box-note }
**Hinweis:** 
Bei Verwendung von Table Joins können Felder der rechten Tabelle eines LEFT OUTER JOIN erst ab SAP-Release 7.40, SP05 eingeschränkt werden. <br>

Wenn Ihr SAP-System älter als Release 7.40, SP05 ist, erscheint folgender Fehler:
*RFC_ERROR_SYSTEM_FAILURE - Illegal access to the right table of a LEFT OUTER JOIN*<br>
(Unzulässiger Zugriff auf die rechte Tabelle eines LEFT OUTER JOIN)


Weitere Informationen über die Änderungen in Release 7.40, SP05 erhalten Sie auf der [SAP Helpseite](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/de-DE/abennews-740_sp05-open_sql.htm#!ABAP_MODIFICATION_5@5@).

