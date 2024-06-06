
Die Komponente kann verwendet werden, um MDX oder BICS Daten aus BW InfoProvidern (z.B. Cubes) direkt oder aus BW Queries zu extrahieren. 
Die BW Queries können auf allen möglichen InfoProvidern basieren. <br>

### Einen BW Cube oder ein Query suchen

1. Im Hauptfenster der Komponente klicken Sie auf **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol). Das Fenster “Cube or Query Lookup” öffnet sich.
![Bw-Cube-Data-Source](/img/content/Bw-Cube-Data-Source.png){:class="img-responsive"}
2. Wählen Sie *Extractor*, *Datasource Type* und *Extraction Settings* des Objekts (1).<br>
![Look-Up-Cube](/img/content/xfa/xfa_cube-query-look.png){:class="img-responsive"} 

   |------------------------------------|---------------------------------------------------------------------------------------------|
   | *Extractor*   | definiert, ob Daten mit dem OLAP BAPI Interface (MADX) oder dem nativen BICS Interface extrahiert werden. Der BICS-Modus kann nur in Kombination mit einem [NetWeaver RFC-Protokoll](../einfuehrung/sap-verbindungen-anlegen) verwendet werden. |
   | *Datasource Type* | definiert, ob nach einer BEx-Query oder einem InfoProvider gesucht wird.  | 
   | *Extraction Settings*  | nur verfügbar für den MDX Extraktor. Verwenden Sie **Only Structure**, wenn Ihre BWCube Extraktion in einer veralteten Software-Version erstellt wurde, siehe [Extraktionseinstellungen](./infocube-extraktionseinstellungen#extraction-settings) für mehr Informationen. | 

3. Geben Sie den Namen eines Query oder eines BW Cube / InfoProvider in die Suchleiste (2) ein. Die Verwendung von Wildcards (*) wird unterstützt. <br>
4. Klicken Sie auf **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol) und wählen Sie ein Objekt aus den Suchergebnissen (3) aus.<br>
Alternativ klicken Sie auf **[Direct Load]**, um den Suchvorgang zu überspringen und den BW Cube / InfoProvider direkt zu laden. **[Direct Load]** funktioniert nur, wenn der vollständige Name korrekt in die Suchleiste eingegeben wurde.
5. Klicken Sie auf **[OK]**, um Ihre Auswahl zu bestätigen.

Die Anwendung kehrt zum Hauptfenster der Komponente zurück.

{: .box-note }
**Hinweis:** Verwenden Sie **[Refresh Metadata]**, um Metadaten zu aktualisieren. Dies ist nötig, wenn eine Datenquelle SAP-seitig angepasst, ein anderes Quellsystem angebunden, oder ein Update des Quellsystems durchgeführt wurde.

{: .box-warning }
**Warning! Invalid action**<br>
Beachten Sie, dass für jede Query, die in dieser Liste erscheinen soll, das Feld *Externen Zugriff auf diese Query zulassen* im BEx Query Designer oder im BW Modeling Tool angehakt sein muss. 
Mehr Details finden Sie im Knowledge Base Artikel [Allow external access to BW Queries](https://support.theobald-software.com/helpdesk/KB/View/13800-allow-external-access-to-bw-queries).

### MDX und BICS

|                                    | MDX                                                                                         | BICS                                        |
|------------------------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------|
| Syntax bei der Suche von BEx-Queries   | `[tech. Name des InfoPoviders]/[tech. Name der BEx-Query]` <br /> Beispiel: 0SD_C03/0SD_C03_Q0018        | `[tech. Name der BEx-Query]` <br /> Beispiel: 0SD_C03_Q0018   |
| Syntax bei der Suche von InfoProivders | `$[tech. Name des InfoProvoiders]`  <br /> Beispiel: $0SD_C03                                            | `[tech. Name des InfoProviders]` <br /> Beispiel: 0SD_C03      |
| Wildcards bei der Suche                | Die BEx-Query Einstellung "Allow External Access to this Query" muss aktiv sein, siehe [Allow External Access to BW Queries](https://support.theobald-software.com/helpdesk/KB/View/13800-allow-external-access-to-bw-queries). <br /> Beispiel: *0SD_C03_Q0018 anstatt 0SD_C03/0SD_C03_Q0018                          | nicht unterstützt          |
| Unterstützte InfoProviders            | InfoCubes, Multiproviders, Composite Providers                                              | InfoCubes, MuliProviders, Composite Providers, DSOs |   
| Spaltennamen von Key Figures          | EnterpriseID                                              | Technischer Name <br>Wenn der techn. Name nicht vorhanden ist: Name des Basis-Messwerts. <br>Wenn Name des Basis-Messwerts nicht vorhanden ist: EnterpriseID<br>**Tipp:** Wenn Namen doppelt vorkommen, ändern Sie den techn. Namen im BEx Query Designer.|   
| Maximale Zeichenlänge für Dimensionselemente | max. 60 Zeichen      | -      |


### Auswählen von Messwerten ( Key Figures), Abmessungen und Eigenschaften
Wenn ein Objekt ausgewählt ist, wird im Hauptfenster der Komponente auf der linken Seite eine Baumstruktur angezeigt. Die Baumstruktur stellt die Metadaten der Query (oder des InfoProviders) dar. <br>
![Cube-Details](/img/content/xu/cube-measures.png){:class="img-responsive"}
Das erste Verzeichnis enthält alle Messwerte (Kennzahlen) (4). Die folgenden Verzeichnisse entsprechen den Dimensionen und enthalten oft zusätzliche Dimensionseigenschaften (5). <br>

1. Wählen Sie die Kennzahlen, Dimensionen und Eigenschaften für eine Extraktion.
2. Klicken Sie innerhalb des Kennzahlenverzeichnisses auf den Pfeil, um die verfügbaren Einheiten zu anzuzeigen. Wählen Sie die Einheiten aus, falls erforderlich.
3. Klicken Sie auf **[Load live preview]**, um die Ausgabe mit Daten aus dem BW anzuzeigen. Wenn eine Einheit ausgewählt ist (z.B. Währung), wird das entsprechende Feld in der Echtzeitvorschau angezeigt.

{: .box-note }
**Hinweis:** Für jede ausgewählte Dimension oder Eigenschaft wird im Ergebnis eine Kennzahl und eine Einheit angezeigt. 

### Einstellen eines Dimensionsfilters 
1. Klicken Sie mit der rechten Maustaste auf eine Dimension. Das K0ntextmenü öffnet sich.<br>
![Query Filter](/img/content/cube-query-filter.png){:class="img-responsive"}
2. Klicken Sie **[Edit Filter]**. Das Fenster "Edit Selections" öffnet sich. 
3. Fügen Sie einen der folgenden Filtertypen ein:<br>
a) Klicken Sie auf **[Single]**, um die Daten mit einzelnen Eingabewerten zu vergleichen.<br>
b) Klicken Sie auf **[Range]**, um zu prüfen, ob die Daten (nicht) in einem Bereich zwischen zwei Eingabewerten liegen. <br>{% if page.product != "xtract-is" %}c) Klicken Sie auf **[List]**, um zu prüfen, ob die Daten (nicht) Teil einer Liste von Eingabewerten ist. {% endif %}<br>
4. Wählen Sie in der Spalte **Sign** (1) die Option *Include*, um nur die gefilterten Daten zu extrahieren.<br>
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
5. Geben Sie für die Filter feste Werte ein oder wählen Sie Laufzeitparameter (3). <br>
- Feste Werte: Geben Sie Werte direkt in die Eingabefelder unter **Low** und **High** ein.
Wenn Laufzeitparameter verfügbar sind, prüfen Sie ob das ![static-value](/img/content/icons/runtime-parameters-static.png) Symbol neben dem Eingabefeld angezeigt wird.
Mit einem Klick auf das Symbol wechseln Sie zwischen statischen Werten und Laufzeitparametern.
- Laufzeitparameter: Klicken Sie auf das ![static-value](/img/content/icons/runtime-parameters-static.png) Symbol, um auf die definierten Laufzeitparameter zuzugreifen ( ![dynamic-value](/img/content/icons/runtime-parameters-dynamic.png) Symbol).
Wenn keine Symbole angezeigt werden, öffnen Sie das [Edit Runtime Parameters](./edit-runtime-parameters) Menü und erstellen Sie Laufzeitparameter.<br>
Wählen Sie einen Laufzeitparameter aus der Dropdown-Liste aus.
6. Klicken Sie auf **[OK]**, um Ihre Selektion zu bestätigen.
7. Klicken Sie im Hauptfenster der Komponente auf **[Load Preview]**, um die Selektion zu prüfen. <br>
Wenn Laufzeitparameter definiert sind, werden Sie aufgefordert, die Parameter mit echten Werten zu füllen. 

Wenn ein Filter definiert ist, erscheint ein Filtersymbol in der Metadatenstruktur.
