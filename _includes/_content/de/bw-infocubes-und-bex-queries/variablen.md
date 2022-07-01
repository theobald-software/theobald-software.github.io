
### Über Query Variablen
BW-Queries haben oft definierte Variablen zum Erstellen von Filteroptionen. 
Abhängig vom Typ der BEx-Variablen (Einzelwert, Mehrfachwert, Intervall oder komplexe Auswahl) werden die Eingabefelder der Variablen aktiviert oder deaktiviert.

Sie können BEx-Variablen mit Werten definieren, die zur Laufzeit dynamisch gesetzt werden, siehe [Laufzeitparameter](./edit-runtime-parameters).

### Variablen anpassen
1. Führen Sie eine [Query-Suche](./eine-bw-cube-quelle-definieren#nach-bw-cube-oder-query-suchen) durch und wählen Sie ein Query mit definierten Variablen aus (1).
2. Laden Sie eine Echtzeitvorschau über **[Load Live Preview]** (2). 
![Edit-Variables-Button](/img/content/XU-BExQuery-Variable.png){:class="img-responsive"}
3. Klicken Sie auf **[Edit Variables]** (3). Das Fenster "Edit variables for [Name des Query]" öffnet sich und die Felder mit verfügbaren Variablen werden aktiviert.
![Edit-Variables](/img/content/Edit-Variables.png){:class="img-responsive"}
4. Wählen Sie in der Spalte **Sign** die Option *Include*, um nur die gefilterten Daten zu extrahieren.<br>
Wählen Sie in der Spalte **Sign** die Option *Exclude*, um die gefilterten Daten nicht nicht zu extrahieren.
5. Wählen Sie in der Spalte **Option** einen Operator. Der Operator filtert Daten wie in der folgenden Tabelle beschrieben:

   | Operator   |      Bedeutung      |  
   |:---------|:------------- |
   |(Not)Equal |  Wahr, wenn die Daten (nicht) gleich dem Inhalt von Operand 1 sind.|
   |LessThan  | Wahr, wenn die Daten kleiner sind als der Inhalt von Operand 1.|
   |GreaterThan |  Wahr, wenn die Daten größer sind als der Inhalt von Operand 1.|
   |LessOrEqual | Wahr, wenn die Daten kleiner oder gleich dem Inhalt von Operand 1. sind.|
   |GreaterOrEqual |  Wahr, wenn die Daten größer oder gleich dem Inhalt von Operand 1. sind.|
   |(Not)Between | Wahr, wenn die Daten (nicht) zwischen den Werten der Operanden Operand 1 und Operand 2 liegen. |
   |In | Wahr, wenn die Daten (nicht) Teil des Inhalts von Operand 1 sind. Dieser Operator ist nur für Parameter vom Typ Liste verfügbar.|
6. Geben Sie für die Filter feste Werte ein oder wählen Sie Laufzeitparameter. 
Mit einem Klick auf das Symbol neben den Eingabefeldern wechseln Sie zwischen festen Werten und Laufzeitparametern.<br>
- Auswahlliste ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol): Wählen Sie einen festen Wert aus einer Liste verfügbarer Werte aus.
- Feste Werte ( ![static-value](/img/content/icons/runtime-parameters-static.png) Symbol oder kein Symbol): Geben Sie Werte direkt in die Eingabefelder unter **Low** und **High** ein.
- Laufzeitparameter ( ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png) Symbol): 
Wählen Sie einen Laufzeitparameter aus der Dropdown-Liste aus.
Wenn neben dem Eingabefeld kein Symbol angezeigt wird und keine Dropdown-Liste verfügbar ist, öffnen Sie das [Edit Runtime Parameters](./einstellungen#edit-runtime-parameters---laufzeitparameter) Menü und erstellen Sie Laufzeitparameter.<br>
7. Klicken Sie auf **[OK]**, um Ihre Eingabe zu bestätigen.
8. Klicken Sie im Hauptfenster der Komponente auf **[Load live preview]**, um die Funktionalität der definierten Filter zu prüfen. <br>
Wenn Laufzeitparameter definiert sind, werden Sie aufgefordert, die Parameter mit echten Werten zu füllen. 

