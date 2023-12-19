Die meisten Reports erlauben die Eingabe von Selektionen vor Ausführung der Reports.
Selektionen limitieren die Ausgabe des Reports, sodass nur Daten die der Selektion entsprechen ausgegeben werden.

In SAP kann eine [Variante mit Selektionen](https://help.sap.com/docs/btp/ABAP/3353524716.html) kann im Eingabebildschirm eines ABAP-Reports erstellt werden.
Der Zweck einer Variante ist es, Selektionen in Ihrem Eingabebildschirm zu speichern.
Das minimiert die Eingabe von Selektionen, wenn Sie Reports ausführen.

{: .box-note }
**Hinweis:** Manuelle Selektionen und Varianten können kombiniert werden. Manuelle Selektionen überschreiben Selektionen in Varianten.


### Eine Variante wählen
Wählen Sie eine Variante aus der Dropdown-Liste *Variant* (1).
Wenn Sie eine neue Variante in SAP erstellen, nachdem die Report Extraktion in XU erstellt wurde, klicken Sie auf den **[Refresh]** Button neben der Dropdown-Liste, um die neue Variante abzurufen.

![Report-Variants-Section](/img/content/Report-Variants-Selection.png){:class="img-responsive"}

{: .box-note }
**Hinweis:** Die Selektionen der Variante werden **nicht** im Abschnitt *Selection Screen* angezeigt. 
Um die Definition der Variante einzusehen, öffnen Sie die Variante in SAP.

### Selektionen bearbeiten

Dieser Abschnitt bezieht sich auf den Eingabebildschirm von Reports in SAP.
Einige Selektionsfelder haben nur technische Bezeichnungen und keine Beschreibungen.
Um zu verstehen, welche Felder welchen Feldern in SAP entsprechen, prüfen Sie den Eingabebildschirm in SAP. <br>
Klicken Sie auf ein Selektionsfeld und drücken Sie die F1-Taste. Dadurch wird die technische Bezeichnung des Selektionsfelds angezeigt.

1. Klicken Sie neben den Selektionen, die Sie bearbeiten möchten auf **[Edit]** (2). Das Fenster “Edit Selections” öffnet sich.
2. Klicken Sie auf **[Add Selection]**, um Filterkriterien hinzuzufügen. <br>
![ODP Selection With Parameters](/img/content/Report-Edit-Selections.png){:class="img-responsive"}
3. Wählen Sie in der Spalte **Sign** (3) die Option *Include*, um nur die gefilterten Daten zu extrahieren.<br>
Wählen Sie in der Spalte **Sign** (3) die Option *Exclude*, um die gefilterten Daten nicht nicht zu extrahieren.
4. Wählen Sie in der Spalte **Option** (4) einen Operator. Der Operator filtert Daten wie in der folgenden Tabelle beschrieben:

   | Operator   |      Bedeutung      |  
   |:---------|:------------- |
   |(Not)Equal |  Wahr, wenn die Daten (nicht) gleich dem Inhalt von Operand 1 sind.|
   |LessThan  | Wahr, wenn die Daten kleiner sind als der Inhalt von Operand 1.|
   |GreaterThan |  Wahr, wenn die Daten größer sind als der Inhalt von Operand 1.|
   |LessOrEqual | Wahr, wenn die Daten kleiner oder gleich dem Inhalt von Operand 1. sind.|
   |GreaterOrEqual |  Wahr, wenn die Daten größer oder gleich dem Inhalt von Operand 1. sind.|
   |(Not)Between | Wahr, wenn die Daten (nicht) zwischen den Werten der Operanden Operand 1 und Operand 2 liegen. |
   |In | Wahr, wenn die Daten (nicht) Teil des Inhalts von Operand 1 sind. Dieser Operator ist nur für Parameter vom Typ Liste verfügbar.|
5. Geben Sie für die Filter feste Werte ein oder wählen Sie Laufzeitparameter. <br>
- Feste Werte: Geben Sie Werte direkt in die Eingabefelder unter **Low** und **High** ein.
Wenn Laufzeitparameter verfügbar sind, prüfen Sie ob das ![static-value](/img/content/icons/runtime-parameters-static.png) Symbol neben dem Eingabefeld angezeigt wird.
Mit einem Klick auf das Symbol wechseln Sie zwischen statischen Werten und Laufzeitparametern.
- Laufzeitparameter: Klicken Sie auf das ![static-value](/img/content/icons/runtime-parameters-static.png) Symbol, um auf die definierten Laufzeitparameter zuzugreifen ( ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png) Symbol).
Wenn keine Symbole angezeigt werden, öffnen Sie das [Edit Runtime Parameters](./edit-runtime-parameters) Menü und erstellen Sie Laufzeitparameter.<br>
Wählen Sie einen Laufzeitparameter aus der Dropdown-Liste aus.
6. Klicken Sie auf **[OK]**, um Ihre Selektion zu bestätigen.
7. Klicken Sie im Hauptfenster der Komponente auf **[Load Preview]**, um die Selektion zu prüfen. <br>
Wenn Laufzeitparameter definiert sind, werden Sie aufgefordert, die Parameter mit echten Werten zu füllen. 

{: .box-tip }
**Tipp:** Wenn Sie mehrere Parameter für Ihre Selektion verwenden, erstellen Sie dafür eine Variante in SAP. Mit der Variante müssen Sie die Parameter nicht mehrmals manuell eingeben. 

### Datenformat

{% include _content/de/sap-data-format.md  %}