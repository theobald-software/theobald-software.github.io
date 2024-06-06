
### Über Query Variablen
BW-Queries haben oft definierte Variablen zum Erstellen von Filteroptionen. 
Abhängig vom Typ der BEx-Variablen (Einzelwert, Mehrfachwert, Intervall oder komplexe Auswahl) werden die Eingabefelder der Variablen aktiviert oder deaktiviert.

Sie können BEx-Variablen mit Werten definieren, die zur Laufzeit dynamisch gesetzt werden, siehe [Laufzeitparameter](./edit-runtime-parameters).

### Variablen anpassen
1. Führen Sie eine [Query-Suche](./eine-bw-cube-quelle-definieren#nach-bw-cube-oder-query-suchen) durch und wählen Sie ein Query mit definierten Variablen aus (1).
{% if page.product == "xtract-for-alteryx" %}![Edit Variables Button](/img/content/xfa/xfa_variables.png){:class="img-responsive"}{% else %}![Edit Variables Button](/img/content/XU-BExQuery-Variable.png){:class="img-responsive"}{% endif %}
2. Klicken Sie auf **[Edit Variables]** (2). Das Fenster "Edit variables for [Name des Query]" öffnet sich und die Felder mit verfügbaren Variablen werden aktiviert.
3. Wählen Sie ein Feld aus, das eine VAriable hat (3).<br>
![Edit-Variables](/img/content/selections-cube.png){:class="img-responsive"}
4. Fügen Sie einen der folgenden Filtertypen ein:<br>
a) Klicken Sie auf **[Single]**, um die Daten mit einzelnen Eingabewerten zu vergleichen.<br>
b) Klicken Sie auf **[Range]**, um zu prüfen, ob die Daten (nicht) in einem Bereich zwischen zwei Eingabewerten liegen. <br>{% if page.product != "xtract-is" %}c) Klicken Sie auf **[List]**, um zu prüfen, ob die Daten (nicht) Teil einer Liste von Eingabewerten ist. {% endif %}<br>
5. Wählen Sie in der Spalte **Sign** (4) die Option *Include*, um nur die gefilterten Daten zu extrahieren.<br>
Wählen Sie in der Spalte **Sign** (4) die Option *Exclude*, um die gefilterten Daten nicht nicht zu extrahieren.
6. Wählen Sie in der Spalte **Option** (5) einen Operator. Der Operator filtert Daten wie in der folgenden Tabelle beschrieben:

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
7. Geben Sie für die Filter feste Werte ein oder wählen Sie [Laufzeitparameter](./edit-runtime-parameters) (6). <br>
Falls verfügbar, klicken Sie auf das ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol neben den Eingabefeldern, um eine Liste auswählbarer Variablenwerte anzuzeigen. Beispiel:<br>
![Edit Variables](/img/content/xfa/xfa_query_var.png){:class="img-responsive"}
8. Klicken Sie auf **[OK]** um Ihre Eingabe zu bestätigen. 
9. Klicken Sie auf **[Load Live Preview]** um eine Vorschau der gefilterten Ergebnisse anzuzeigen.
