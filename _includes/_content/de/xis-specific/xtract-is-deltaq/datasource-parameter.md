### Parameter bearbeiten 

{: .box-note } 
**Hinweis:** Parameter sind beim Modus **Delta Update** nicht erlaubt, da die Parameter des Modus **Init** automatisch übernommen werden.

Parameter können *Einzelwerte*, *Intervalle* und *komplexe Auswahlen* haben. <br>
![Edit-Parameters](/img/content/Parameters_edit.png){:class="img-responsive"}

Klicken Sie auf **[Edit]** (1) und öffnen Sie den Editor zum Ändern der Parameter. Es öffnet sich das Fenster "Edit Range".

Stellen Sie die Werte für **Sign** (2), **Option** (3), **Low Value** (4) und falls erforderlich, für **High Value** (5) ein.<br>
![Parameters-2](/img/content/Parameters-2.png){:class="img-responsive"}

**Sign** (2) kann zwei Werte erhalten: *Include* oder *Exclude*. Damit wird für jede Zeile festgelegt, ob das Ergebnis der Bedingung in der gesamten Ergebnismenge für alle Zeilen ein- oder ausgeschlossen wird.<br>
**Option** (3) enthält die Auswahlmöglichkeit für die Bedingung der Zeile in Form von logischen Operatoren.<br>
**Low Value** (4) bezeichnet den Vergleichswert bzw. die untere Intervallgrenze.<br>
**High Value** (5) bezeichnet die obere Intervallgrenze.

| Operator   |      Bedeutung      |  
|:---------|:------------- |
|=, EQ |  Wahr, wenn der Inhalt von operand1 gleich dem Inhalt von operand2 ist|
|<>, NE |Wahr, wenn der Inhalt von operand1 ungleich dem Inhalt von operand2 ist|
|<, LT | Wahr, wenn der Inhalt von operand1 kleiner als der Inhalt von operand2 ist|
|>, GT |  Wahr, wenn der Inhalt von operand1 größer als der Inhalt von operand2 ist|
|<=, LE | Wahr, wenn der Inhalt von operand1 kleiner oder gleich dem Inhalt von operand2 ist|
|>=, GE |  Wahr, wenn der Inhalt von operand1 größer oder gleich dem Inhalt von operand2 ist|
|*, LIKE | Wahr, wenn der Wert des Operanden operand1 mit dem Muster im Operanden operand2 übereinstimmt (nicht übereinstimmt). |
|[], BETWEEN | Wahr, wenn der Inhalt des Operanden operand (nicht) zwischen den Werten der Operanden operand1 und operand2 liegt. |

### Löschen
Um eine Zeile zu *löschen*, klicken Sie auf das Symbol unten links.

### Unterstützte Funktionen

SSIS-Variablen werden unterstützt. 

{: .box-note }
**Hinweis:** Fügen Sie *@* direkt vor dem Wert ein, um ihn als Variable zu kennzeichnen.