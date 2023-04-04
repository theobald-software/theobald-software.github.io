Unter dem Tab *Tables And Fields* können eine oder mehrere SAP-Tabellen oder Views ausgewählt werden.
Der Tab *Tables and Fields* besteht aus drei Unterabschnitten:
- Tables
- Fields
- Preview


### Tables
 Um eine neue Tabelle hinzuzufügen oder eine bestehende Tabelle zu entfernen, klicken Sie auf **[Add]** oder **[Remove]**
 
 ![Add_table](/img/content/table/table_main-window_add.png){:class="img-responsive"}


### Fields
![Fields](/img/content/table/table_fields_filter.png){:class="img-responsive"}
Folgende Optionen stehen rechts unter *Fields* bei der Spaltenselektion zur Verfügung: <br>

Die Table-Komponente importiert und markiert die dedizierten Indizes, wie z.B. Primärschlüssel oder Sortieroptionen, aus SAP.

{: .box-note}
**Hinweis:** Die Verwendung der indizierten Felder zur Filterung erhöht die Performance bei der Anwendung der WHERE-Bedingung.

**Filter (1)** <br>
Der Spaltenname (Name) und die Spaltenbeschreibung (Description) lassen sich filtern.

**Aggregate Function (2)** <br>
Es stehen folgende Aggregatfunktionen für Spalteninhalte zur Verfügung:
- None: Keine Aggregierung 
- MEAN: Durchschnitt
- COUNT: Anzahl  
- MAX: Maximum
- MIN: Minimum 
- SUM: Summe

{: .box-tip }
**Tipp:** Die Aggregatfunktionen sind nur bei nummerischen Felddatentypen (z.B. INT, FLOAT, DECIMAL) verfügbar.

**Conv. - Use Conversion Routine (3)**  <br>
Durch Aktivieren der Tri-State-Checkbox wird festgelegt, ob die im Data Dictionary gespeicherten Konvertierungsroutinen für die jeweiligen Felder verwendet werden. 

{: .box-note}
**Hinweis:** die Verwendung von Conversion Routines in SAP führt zu einem merklichen Performance-Verlust (Leistungseinbuße). Die Extraktionsdauer erhöht sich. 


![tri-state box](/img/content/table/tri-state_checkbox.png){:class="img-responsive"}

| Status der Checkbox| Beschreibung | Kommentar |
|:-----:|-----|
|(1) | keine Konvertierungsroutine ausgewählt | | 
|(2)| Konvertierungsroutine aktiviert;<br> nur mit dem Funktionsbaustein Z_XTRACT_IS_TABLE_COMPRESSION verfügbar| keine Datentypsicherheit |
|(3)  | Konvertierungsroutine aktiviert;<br> nur mit dem Funktionsbaustein Z_THEO_READ_TABLE verfügbar| Datentypsicherheit garantiert |

![Conversion routine](/img/content/table/table_fields_filter3.png){:class="img-responsive"}

Typische Beispiele für Konvertierungsroutinen sind der Sprachenschlüssel (z.B. D **(4)** auf der Datenbank, aber DE nach der Konvertierung) oder die Projektnummer (z.B. T000012738GT auf der Datenbank, T/12738/GT nach der Konvertierung). Nach der Konvertierung wird immer der Wert angezeigt, so wie er auch in der Transaktion *SE16N* im SAP GUI erscheinen würde

### Preview
Das Fenstersegment *Preview* eine Echtzeit-Vorschau der ausgewählten Felder und Tabellendaten an. 

{: .box-note }
**Hinweis:** das Verwenden von nicht indizierten Feldern in der WHERE-Bedingung kann bei großen Tabellen ggf. zu langen Wartezeiten / Timeouts beim Preview führen.


### Schaltflächen
**[Load live preview]** <br>
Ermöglicht eine Echtzeit-Vorschau der Extraktionsdaten ohne dafür die Extraktion auszuführen. <br>
Daten mit Aggregatfunktionen lassen sich auch als Vorschau anzeigen. 
 
**[Count rows]** <br>
Gibt die Anzahl der Zeilen/Datensätze einer Extraktion aus unter Berücksichtigung der hinterlegten WHERE- und HAVING-Bedingungen. 

**[Refresh Metadata]** <br>
Durchführung eines erneuten Lookups auf die selektierte(n) Tabelle(n). Bestehende Mappings und Feldselektionen bleiben dabei erhalten, anders als beim erneuten Hinzufügen.<br>
Die *Refresh Metadata* Funktionalität kann z.B. notwendig sein, wenn eine Tabelle SAP-seitig angepasst, ein anderes Quellsystem angebunden, oder ein Update des Quellsystems durchgeführt wurde. In solchen Fällen kann es zu Datenschiefständen kommen, die durch diese Funktion bereinigt werden.   
 
