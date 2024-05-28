
Die meisten Queries erlauben die Eingabe von Selektionen vor Ausführung der Query.
Selektionen limitieren die Ausgabe der Query, sodass nur Daten die der Selektion entsprechen ausgegeben werden.<br>
Eine Variante mit Selektionen kann in SAP erstellt werden, siehe [SAP Documentation: Query Variants](https://help.sap.com/docs/SAP_NETWEAVER_750/40d2cb3a4f9249d58e9bbc95f4dbaff8/4e535406a32c4f49e10000000a42189e.html?locale=en-US). 
Der Zweck einer Variante ist es, Selektionen zu speichern. Das minimiert die Eingabe von Selektionen, wenn Sie Queries ausführen.

{: .box-note }
**Hinweis:** Manuelle Selektionen und Varianten können kombiniert werden. Manuelle Selektionen überschreiben Selektionen in Varianten.

### Eine Variante wählen
Wählen Sie eine Variante aus der Drop-Down-Liste *Variant* aus. <br>
Wenn Sie nach dem Anlegen der Query-Extraktion eine neue Variante in SAP anlegen, klicken Sie ![refresh](/img/content/icons/refresh.png), um die neue Variante zu laden.

{% if page.product == "xtract-universal" or page.product == "board-connector"%}
![Variants-Section](/img/content/query/query-variant1.png){:class="img-responsive"}
{% elsif page.product == "xtract-for-alteryx"%}
![Variants-Section](/img/content/xfa/query-variant1.png){:class="img-responsive"}
{% else %}
![Variants-Section](/img/content/xis/query-variant1.png){:class="img-responsive"}
{% endif %}

{: .box-note }
**Hinweis:** Die Selektionen der Variante werden in der *Selektionsansicht* des Fensters **nicht** angezeigt.
Um die Definition einer Variante zu sehen, öffnen Sie die Variante in SAP.

{% if page.product == "xtract-universal"%}

{: .box-tip }
**Tipp:** Sie können eine Variante über einen Parameter in der Extraktions-URL dynamisieren, siehe [Extraktionsparameter](../extraktionen-ausfuehren-und-einplanen/extraktionsparameter). 

{% endif %}

### Selektionen bearbeiten

Die *Selektionsansicht* in der Query-Fenster entspricht der Query-Eingabemaske in SAP.

{: .box-note }
**Hinweis:** Einige Selektionsfelder haben nur einen technischen Namen und keine Beschreibung.  
Um zu verstehen, welches Feld einem Feld in SAP entspricht, öffnen Sie die Eingabemaske der Query in SAP. 
Klicken Sie auf ein Selektionsfeld und drücken Sie die Funktionstaste **[F1]**, um den technischen Namen des Selektionsfeldes anzuzeigen. 

Führen Sie die folgenden Schritte aus:
1. Klicken Sie auf **[Edit]** neben dem zu bearbeitenden Selektionsfeld. Das Fenster “Edit Selection” wird geöffnet.<br>
{% if page.product == "xtract-universal" or page.product == "board-connector"%}![Variants-Section](/img/content/query/query-variant2.png){:class="img-responsive"}{% elsif page.product == "xtract-for-alteryx"%}![Variants-Section](/img/content/xfa/query-variant2.png){:class="img-responsive"}{% else %}![Variants-Section](/img/content/xis/query-variant2.png){:class="img-responsive"}{% endif %}
2. Fügen Sie einen der folgenden Filtertypen ein:<br>
a) Klicken Sie auf **[Single]**, um die Daten mit einzelnen Eingabewerten zu vergleichen.<br>
b) Klicken Sie auf **[Range]**, um zu prüfen, ob die Daten (nicht) in einem Bereich zwischen zwei Eingabewerten liegen. <br>{% if page.product != "xtract-is" %}c) Klicken Sie auf **[List]**, um zu prüfen, ob die Daten (nicht) Teil einer Liste von Eingabewerten ist. {% endif %}<br>
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
   |elements equal | Wahr, wenn die Daten Teil des Inhalts von Operand 1 sind. Dieser Operator ist nur für Parameter vom Typ Liste verfügbar.|
5. Geben Sie für die Filter feste Werte ein oder wählen Sie Laufzeitparameter (3). <br>
- Feste Werte: Geben Sie Werte direkt in die Eingabefelder unter **Low** und **High** ein.
Wenn {% if page.product == "xtract-is"%}SSIS-Variablen{% else %}Laufzeitparameter{% endif %} verfügbar sind, prüfen Sie ob das ![static-value](/img/content/icons/runtime-parameters-static.png) Symbol neben dem Eingabefeld angezeigt wird.
Mit einem Klick auf das Symbol wechseln Sie zwischen statischen und dynamischen Eingabewerten.
- {% if page.product == "xtract-is"%}SSIS-Variablen{% else %}Laufzeitparameter{% endif %}: Klicken Sie auf ![static-value](/img/content/icons/runtime-parameters-static.png), um auf die definierten {% if page.product == "xtract-is"%}SSIS-Variablen{% else %}Laufzeitparameter{% endif %} zuzugreifen ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png).
Wählen Sie {% if page.product == "xtract-is"%}eine SSIS-Variable{% else %}einen Laufzeitparameter{% endif %} aus der Dropdown-Liste aus.
6. Klicken Sie **[OK]**, um Ihre Eingabe zu bestätigen.

Beachten Sie, dass bearbeitete Selektionsfelder die Selektionsfelder in der Variante überschreiben. 

{: .box-tip }
**Tipp:** Wenn Sie mehrere Selektionsparameter verwenden, ist es effizienter in SAP eine neue Variante anzulegen.


