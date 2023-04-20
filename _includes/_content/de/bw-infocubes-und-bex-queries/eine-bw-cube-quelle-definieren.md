
Die Komponente kann verwendet werden, um MDX oder BICS Daten aus BW InfoProvidern (z.B. Cubes) direkt oder aus BW Queries zu extrahieren. 
Die BW Queries können auf allen möglichen InfoProvidern basieren. <br>

### Einen BW Cube oder ein Query suchen

1. Im Hauptfenster der Komponente klicken Sie auf **[Search]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol). Das Fenster “Cube or Query Lookup” öffnet sich.
![Bw-Cube-Data-Source](/img/content/Bw-Cube-Data-Source.png){:class="img-responsive"}
2. Wählen Sie *Extractor*, *Datasource Type* und *Extraction Settings* des Objekts (1).<br>
![Look-Up-Cube](/img/content/xfa/xfa_cube-query-look.png){:class="img-responsive"} 

   |------------------------------------|---------------------------------------------------------------------------------------------|
   | *Extractor*   | definiert, ob Daten mit dem OLAP BAPI Interface (MADX) oder dem nativen BICS Interface extrahiert werden. Der BICS-Modus kann nur in Kombination mit einem [NetWeaver RFC-Protokoll](../einfuehrung/sap-verbindungen-anlegen) verwendet werden. BICS befindet sich noch in der Beta-Phase. Das heißt, dass Breaking Changes veröffentlich werden können, die nicht rückwärtskompatibel sind. Extraktionen, die den BICS-Extraktor verwenden, müssen nach einem Softwareupdate ggf. komplett neu erstellt werden. |
   | *Datasource Type* | definiert, ob nach einer BEx-Query oder einem InfoProvider gesucht wird.  | 
   | *Extraction Settings*  | **Only Structure**: nur verfügbar für den MDX Extraktor. Verwenden Sie **Only Structure**, wenn Ihre BWCube Extraktion in einer veralteten Software-Version erstellt wurde, siehe [Extraktionseinstellungen](./infocube-extraktionseinstellungen#extraction-settings) für mehr Informationen. <br>**Use BICS fast mode**: nur verfügbar für den BICS Extraktor, siehe [Extraktionseinstellungen: Experimental](infocube-extraktionseinstellungen#experimental).  | 

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
Mehr Details finden Sie im Knowledge Base Artikel [Allow external access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries).

#### MDX und BICS (beta)

|                                    | MDX                                                                                         | BICS (beta)                                        |
|------------------------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------|
| Syntax bei der Suche von BEx-Queries   | `[tech. Name des InfoPoviders]/[tech. Name der BEx-Query]` <br /> Beispiel: 0SD_C03/0SD_C03_Q0018        | `[tech. Name der BEx-Query]` <br /> Beispiel: 0SD_C03_Q0018   |
| Syntax bei der Suche von InfoProivders | `$[tech. Name des InfoProvoiders]`  <br /> Beispiel: $0SD_C03                                            | `[tech. Name des InfoProviders]` <br /> Beispiel: 0SD_C03      |
| Wildcards bei der Suche                | Die BEx-Query Einstellung "Allow External Access to this Query" muss aktiv sein, siehe [Allow External Access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries). <br /> Beispiel: *0SD_C03_Q0018 anstatt 0SD_C03/0SD_C03_Q0018                          | nicht unterstützt          |
| Unterstützte InfoProviders            | InfoCubes, Multiproviders, Composite Providers                                              | InfoCubes, MuliProviders, Composite Providers, DSOs |   
| Spaltennamen von Key Figures          | EnterpriseID                                              | Technischer Name <br>Wenn der techn. Name nicht vorhanden ist: Name des Basis-Messwerts. <br>Wenn Name des Basis-Messwerts nicht vorhanden ist: EnterpriseID<br>**Tipp:** Wenn Namen doppelt vorkommen, ändern Sie den techn. Namen im BEx Query Designer.|   

{: .box-note }
**Hinweis:** Die BICS-Komponente befindet sich noch in der Beta-Phase. 
Das heißt, dass Breaking Changes veröffentlich werden können, die nicht rückwärtskompatibel sind. Extraktionen, die den BICS-Extraktor verwenden, müssen nach einem Softwareupdate ggf. komplett neu erstellt werden.


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
1. Klicken Sie mit der rechten Maustaste auf eine Dimension. Die Schaltfläche **[Edit Filter]** erscheint.
![Query Filter](/img/content/cube-query-filter.png){:class="img-responsive"}
2. Klicken Sie **[Edit Filter]**. Das Fenster "Member Filter" öffnet sich. Sie können *Einzelne Werte (Single Values)* setzen, *Wertebereiche (Value Ranges)* definieren oder *Listenparameter* selektieren.
![Query Filter Define](/img/content/xfa/xfa_cube-query-filter-def.png){:class="img-responsive"}
3. Wählen Sie einen einzelnen Wert (6) oder klicken Sie auf **[Add]** (7), um Wertebereiche hinzuzufügen. 
4. Definieren Sie die Werte für die Filterung. Dynamische Parameter werden unterstützt, siehe [Laufzeitparameter](./edit-runtime-parameters). Um eine Liste von Werten zu verwenden, die zur Laufzeit gesetzt wird, wählen Sie einen Listenparameter aus der Dropdown-Liste *List Parameter* (8).
Wenn nötig, löschen Sie Filter über **[Remove]** ( ![dustbin](/img/content/icons/trashbin.png) Symbol).
5. Klicken Sie auf **[OK]**, um Ihre Auswahl zu bestätigen. Das Fenster "Member Filter" schließt sich.

Wenn ein Filter definiert ist, erscheint ein Filtersymbol in der Metadatenstruktur.
