### Selektion und Filter

1. Wählen Sie ein Element im Unterabschnitt **Fields** und klicken Sie auf *Edit*. Das Fenster "Edit Selections" wird geöffnet.<br> 
![ODP Fields](/img/content/odp/odp-fiter.png){:class="img-responsive"}<br>
2. Klicken Sie auf **[Add]**, um Filterkriterien hinzuzufügen. <br>
![ODP Selection With Parameters](/img/content/odp/odp-selection-with-parameters.png){:class="img-responsive"}
3. Wählen Sie in der Spalte **Sign** die Option *Include*, um nur die gefilterten Daten zu extrahieren.<br>
Wählen Sie in der Spalte **Sign** die Option *Exclude*, um die gefilterten Daten nicht nicht zu extrahieren.
4. Wählen Sie in der Spalte **Option** einen Operator. Der Operator filtert Daten wie in der folgenden Tabelle beschrieben:

   | Operator   |      Bedeutung      |  
   |:---------|:------------- |
   |(Not)Equal |  Wahr, wenn die Daten (nicht) gleich dem Inhalt von Operand 1 sind.|
   |LessThan  | Wahr, wenn die Daten kleiner sind als der Inhalt von Operand 1.|
   |GreaterThan |  Wahr, wenn die Daten größer sind als der Inhalt von Operand 1.|
   |LessOrEqual | Wahr, wenn die Daten kleiner oder gleich dem Inhalt von Operand 1. sind.|
   |GreaterOrEqual |  Wahr, wenn die Daten größer oder gleich dem Inhalt von Operand 1. sind.|
   |(Not)Between | Wahr, wenn die Daten (nicht) zwischen den Werten der Operanden Operand 1 und Operand 2 liegen. |
   |In | Wahr, wenn die Daten (nicht) Teil des Inhalts von Operand 1 sind. Dieser Operator ist nur für Parameter vom Typ Liste verfügbar.|
5. Geben Sie für die Filter feste Werte ein oder wählen Sie Laufzeitparameter. 
Mit einem Klick auf das Symbol neben den Eingabefeldern wechseln Sie zwischen festen Werten und Laufzeitparametern.<br>
- Feste Werte ( ![static-value](/img/content/icons/runtime-parameters-static.png) Symbol oder kein Symbol): Geben Sie Werte direkt in die Eingabefelder unter **Low** und **High** ein.
- Laufzeitparameter ( ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png) Symbol): 
Wählen Sie einen Laufzeitparameter aus der Dropdown-Liste aus.
Wenn neben dem Eingabefeld kein Symbol angezeigt wird und keine Dropdown-Liste verfügbar ist, öffnen Sie das [Edit Runtime Parameters](./odp-settings#edit-runtime-parameters) Menü und erstellen Sie Laufzeitparameter.<br>
6. Klicken Sie auf **[OK]**, um Ihre Eingabe zu bestätigen.
7. Klicken Sie im Hauptfenster der Komponente auf **[Load live preview]**, um die Funktionalität der definierten Filter zu prüfen. <br>
Wenn Laufzeitparameter definiert sind, werden Sie aufgefordert, die Parameter mit echten Werten zu füllen. 

Die Anzahl der definierten Filter wird in eckigen Klammern neben *Edit* angezeigt.
