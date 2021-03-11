### Parameter bearbeiten 

Parameter können *Einzelwerte*, *Intervalle* und *komplexe Auswahlen* haben. <br>
![Edit-Parameters](/img/content/Parameters_edit.png){:class="img-responsive"}

Klicken Sie auf **[Edit]** (1) und öffnen Sie den Editor zum Ändern der Parameter. Es öffnet sich das Fenster "Edit Range".

Stellen Sie die Werte für **Sign** (2); **Option** (3), **Low Value** (4) und **High Value** (5) ein, falls erforderlich.<br>
![Parameters-2](/img/content/Parameters-2.png){:class="img-responsive"}

**Sign** (2) kann zwei Werte erhalten: *Include* oder *Exclude*. Damit wird für jede Zeile festgelegt, ob das Ergebnis der Bedingung in der gesamten Ergebnismenge für alle Zeilen ein- oder ausgeschlossen wird.<br>
**Option** (3) enthält die Auswahlmöglichkeit für die Bedingung der Zeile in Form von logischen Operatoren.<br>
**Low Value** (4) bezeichnet den Vergleichswert bzw. die untere Intervallgrenze.<br>
**High Value** (5) bezeichnet die obere Intervallgrenze.

{: .box-note }
**Hinweis:** Fügen Sie *@* direkt vor dem Wert ein, um ihn als Variable zu kennzeichnen.

|Operator|Beschreibung|
|:---|:---|
| = | Gleich|
| != |Nicht gleich|
| < |Niedriger als|
| <= |Niedriger oder gleich als|
| > |Größer als|
| >= |Größer oder gleich al|
| [] |Zwischen|
| ][ |Nicht Zwischen|
| * |Enthält Muster (wie)| 

### Löschen
Um eine Zeile zu *löschen*, klicken Sie auf das Symbol unten links.

### Unterstützte Funktionen

Variablen und [Skript-Ausdrücke](../fortgeschrittene-techniken/script-ausdruecke) werden ebenfalls unterstützt. 

{: .box-note } 
**Hinweis:** Parameter sind im Modus **Delta Update** nicht erlaubt, da die Parameter des Modus **Init** automatisch übernommen werden.

|"!="| ungleich |
| "<" | Kleiner als |
|"<=" |Kleiner oder gleich |
|">"| Größer als |
|">=" |Größer oder gleich |
|"[]"| zwischen (Intervall) |
|"][" | nicht zwischen (Intervall) |
|"*" | enthält (Like)|

Die Spalte Low Value muss bei jedem Operator gefüllt werden.<br>
Die Spalte High Value wird nur von den Operatoren verwendet, welche einen zweiten Paramter erwarten. 


Auch Variablen und [Skript-Ausdrücke](../fortgeschrittene-techniken/script-ausdruecke) werden unterstützt.<br>
Parameter (Filter) sind nicht erlaubt für den Delta Update Modus, denn die Filter des Init Modus werden hier angewendet. 
