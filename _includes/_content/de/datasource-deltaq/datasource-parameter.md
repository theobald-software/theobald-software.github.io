Selektionen filtern die extrahierten Daten.
Nicht alle Elemente einer DataSource unterstützen Selektionen.

### Selektionen bearbeiten 

{: .box-note }
 **Hinweis:** Definieren Sie keine Selektionen, wenn Sie den Update-Modus *Delta Update* verwenden, da die Selektionen des *Init*-Modus automatisch angewendet werden.

<!--- ab hier weiterübersetzen
-->

1. Wählen Sie im Abschnitt **OLTP-Felder** ein Element aus und klicken Sie auf *Edit* (Bearbeiten).
Das Fenster "Edit Selections" wird geöffnet.<br>
![DeltaQ-Edit](/img/content/DeltaQ-Edit.png){:class="img-responsive"}
2. Fügen Sie einen der folgenden Filtertypen ein:<br>
a) Klicken Sie auf **[Single]**, um die Daten mit einzelnen Eingabewerten zu vergleichen.<br>
b) Klicken Sie auf **[Range]**, um zu prüfen, ob die Daten (nicht) in einem Bereich zwischen zwei Eingabewerten liegen. {% if page.product != "xtract-is" %}<br>c) Klicken Sie auf **[List]**, um zu prüfen, ob die Daten (nicht) Teil einer Liste von Eingabewerten ist. {% endif %}<br>
3. Wählen Sie in der Spalte **Sign** (1) die Option *Include*, um nur die gefilterten Daten zu extrahieren.<br>
Wählen Sie in der Spalte **Sign** (1) die Option *Exclude*, um die gefilterten Daten nicht nicht zu extrahieren.
{% if page.product == "xtract-is" %} ![selections](/img/content/selections-xis.png){:class="img-responsive"} {% else %}![selections](/img/content/selections.png){:class="img-responsive"} {% endif %}
4. Wählen Sie in der Spalte **Option** (2) einen Operator. Der Operator filtert Daten wie in der folgenden Tabelle beschrieben:

   | Operator   |      Bedeutung      |  
   |:---------|:------------- |
   |(not) like pattern |  Wahr, wenn die Daten (nicht) den Inhalt von Operand 1 beinhalten|
   |(not) equal to|  Wahr, wenn die Daten (nicht) gleich dem Inhalt von Operand 1 sind.|
   |less than  | Wahr, wenn die Daten kleiner sind als der Inhalt von Operand 1.|
   |more than |  Wahr, wenn die Daten größer sind als der Inhalt von Operand 1.|
   |at most | Wahr, wenn die Daten kleiner oder gleich dem Inhalt von Operand 1. sind.|
   |at least |  Wahr, wenn die Daten größer oder gleich dem Inhalt von Operand 1. sind.|
   |(not) between | Wahr, wenn die Daten (nicht) zwischen den Werten der Operanden Operand 1 und Operand 2 liegen. |
   |elements of | Wahr, wenn die Daten Teil des Inhalts von Operand 1 sind. Dieser Operator ist nur für Parameter vom Typ Liste verfügbar.|
5. Geben Sie für die Filter feste Werte ein oder wählen Sie {% if page.product == "xtract-is"%}SSIS-Variablen{% else %}Laufzeitparameter{% endif %} (3). <br>
6. Klicken Sie auf **[OK]**, um Ihre Eingabe zu speichern.

Sie können mehrere Filter anwenden oder Filter löschen, indem Sie auf ![trashbin](/img/content/icons/trashbin.png) klicken.<br>
Die Anzahl der definierten Filter wird in eckigen Klammern neben der Option *Edit* angezeigt.