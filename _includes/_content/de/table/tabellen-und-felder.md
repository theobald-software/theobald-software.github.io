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

**Filter** <br>
Der Spaltenname (Name) und die Spaltenbeschreibung (Description) lassen sich filtern.

**Aggregate Function** <br>
Es stehen folgende Aggregatfunktionen für Spalteninhalte zur Verfügung:
- None: Keine Aggregierung 
- AVG: Durchschnitt
- COUNT: Anzahl  
- MAX: Maximum
- MIN: Minimum 
- SUM: Summe

**Conv. - Use Conversion Routine**  <br>
Ankreuzen des Kästchens definiert, ob die im Data Dictionary hinterlegte Konvertierungsroutinen für die jeweiligen selektierten Felder angewendet werden. 
Typische Beispiele dafür sind der Sprachenschlüssel (z.B. D auf der Datenbank, aber DE nach der Konvertierung) oder die Projektnummer (z.B. T000012738GT auf der Datenbank, T/12738/GT nach der Konvertierung). 
Nach der Konvertierung wird immer der Wert angezeigt, so wie er auch in einer Transaktion im SAP GUI erscheinen würde. 

{: .box-note}
**Note:** Die Option "Use Conversion Routine" wird nur im Zusammenhang mit dem Funktionsbaustein [Z_XTRACT_IS_TABLE_COMPRESSION](./extraktionseinstellungen) unterstützt. 


### Preview
Das Fenstersegment *Preview* eine Echtzeit-Vorschau der ausgewählten Felder und Tabellendaten an. 


### Schaltflächen
**[Load live preview]** <br>
Ermöglicht eine Echtzeit-Vorschau der Extraktionsdaten ohne dafür die Extraktion auszuführen. <br>
Daten mit Aggregatfunktionen lassen sich auch als Vorschau anzeigen. 
 
**[Count rows]** <br>
Gibt die Anzahl der Zeilen/Datensätze einer Extraktion aus unter Berücksichtigung der hinterlegten WHERE- und HAVING-Bedingungen. 

**[Refresh Metadata]** <br>
Durchführung eines erneuten Lookups auf die selektierte(n) Tabelle(n). Bestehende Mappings und Feldselektionen bleiben dabei erhalten, anders als beim erneuten Hinzufügen.<br>
Die *Refresh Metadata* Funktionalität kann z.B. notwendig sein, wenn eine Tabelle SAP-seitig angepasst, ein anderes Quellsystem angebunden, oder ein Update des Quellsystems durchgeführt wurde. In solchen Fällen kann es zu Datenschiefständen kommen, die durch diese Funktion bereinigt werden.   
 
