Der folgende Abschnitt beschreibt die Anwendung der BW Cube Komponente.<br>

Die Komponente BW Cube kann verwendet werden, um MDX oder BICS Daten aus BW InfoProvidern (z.B. Cubes) direkt oder aus BW Queries zu extrahieren. 
Die BW Queries können auf allen möglichen InfoProvidern basieren. <br>

[Bw-Cube-Data-Source](/img/content/Bw-Cube-Data-Source.png){:class="img-responsive"}

### Einen BW Cube oder ein Query suchen

1. Im Hauptfenster der Komponente klicken Sie auf den **[Search]**-Button (Lupensymbol). Das Fenster “Cube or Query Lookup” öffnet sich.
![Look-Up-Cube](/img/content/xfa/xfa_cube-query-look.png){:class="img-responsive"}
2. Geben Sie im Feld **Name** (1) den Namen eines Query oder eines BW Cube / InfoProvider ein. Die Verwendung von Wildcards (*) wird unterstützt. 
3. Definieren Sie den **Extractor** und **Type** des Objekts (2).
- **Extractor** definiert, ob Daten mit dem OLAP BAPI Interface (MADX) oder dem nativen BICS Interface extrahiert werden. Der BICS-Modus kann nur in Kombination mit einem [NetWeaver RFC-Protokoll](../einfuehrung/sap-verbindungen-anlegen#rfc-options) verwendet werden. BICS befindet sich noch in der Beta-Phase.
- **Type** definiert, ob nach einer BEx-Query oder einem InfoProvider gesucht wird.
4. Klicken Sie auf **[Search]** (Lupensymbol) (3) und wählen Sie ein Objekt aus der Liste (4) aus.
5. Klicken Sie auf **[OK]** (5) zum Bestätigen.

{: .box-note }
**Hinweis:** Verwenden Sie **[Refresh Metadata]**, um die Metadaten zu aktualisieren. Dies ist nötig, wenn eine Datenquelle SAP-seitig angepasst, ein anderes Quellsystem angebunden, oder ein Update des Quellsystems durchgeführt wurde.

{: .box-warning }
**Warning! Invalid action**<br>
Beachten Sie, dass für jede Query, die in dieser Liste erscheinen soll, das Feld *Externen Zugriff auf diese Query zulassen* im BEx Query Designer oder im BW Modeling Tool angehakt sein muss. 
Mehr Details finden Sie im Knowledge Base Artikel [Allow external access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries).

#### MDX und BICS (beta)

|                                    | MDX                                                                                         | BICS (beta)                                        |
|------------------------------------|---------------------------------------------------------------------------------------------|----------------------------------------------------|
| Syntax bei der Suche von BEx-Queries   | `[tech. Name des InfoPoviders]/[tech. Name der BEx-Query]` <br /> Beispiel: 0SD_C03/0SD_C03_Q0018        | `[tech. Name der BEx-Query]` <br /> Beispiel: 0SD_C03_Q0018   |
| Syntax bei der Suche von InfoProivders | `$[tech. Name des InfoProvoiders]`  <br /> Beispiel: $0SD_C03                                            | `[tech. Name des InfoProviders]` <br /> Beispiel: 0SD_C03      |
| Wildcards bei der Suche                | unterstützt<br /> Beispiel: *0SD_C03_Q0018 anstatt 0SD_C03/0SD_C03_Q0018                          | nicht unterstützt          |
| Unterstützte InfoProviders            | InfoCubes, Multiproviders, Composite Providers                                              | InfoCubes, MuliProviders, Composite Providers, DSOs |
| Einstellungen der BEx-Query               | Die Einstellung "Allow External Access to this Query" muss aktiv sein. Falls nicht, taucht die BEx-Query nicht in der Suche auf, siehe [Allow External Access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries). | keine Einstellungen nötig.      

{: .box-note }
**Hinweis:** Die BICS-Komponente befindet sich noch in der Beta-Phase. Bei Problemen mit der Komponente, kontaktieren Sie den [Theobald Support](https://support.theobald-software.com).

### Auswählen von Messwerten ( Key Figures), Abmessungen und Eigenschaften
Wenn ein Objekt ausgewählt ist, wird im Hauptfenster der Komponente auf der linken Seite eine Baumstruktur angezeigt. Die Baumstruktur stellt die Metadaten der Query (oder des InfoProviders) dar. <br>
![Cube-Details](/img/content/xu/cube-measures.png){:class="img-responsive"}
Das erste Verzeichnis enthält alle Messwerte (Kennzahlen) (6). Die folgenden Verzeichnisse entsprechen den Dimensionen und enthalten oft zusätzliche Dimensionseigenschaften (7). <br>

1. Wählen Sie die Kennzahlen, Dimensionen und Eigenschaften für eine Extraktion.
2. Klicken Sie innerhalb des Kennzahlenverzeichnisses auf den Pfeil, um die verfügbaren Einheiten zu anzuzeigen. Wählen Sie die Einheiten aus, falls erforderlich.
3. Klicken Sie auf **[Load live preview]**, um die Ausgabe mit Daten aus dem BW anzuzeigen. Wenn eine Einheit ausgewählt ist (z.B. Währung), wird das entsprechende Feld in der Echtzeitvorschau angezeigt.

{: .box-note }
**Hinweis:** Für jede ausgewählte Dimension oder Eigenschaft wird im Ergebnis eine Kennzahl und eine Einheit angezeigt. 

### Einstellen eines Dimensionsfilters 
1. Klicken Sie mit der rechten Maustaste auf eine Dimension. Die Schaltfläche **[Edit Filter]** erscheint.
![Query Filter](/img/content/cube-query-filter.png){:class="img-responsive"}
2. Klicken Sie **[Edit Filter]**. Das Fenster "Member Filter" öffnet sich. Sie können *Einzelne Werte (Single Values)* setzen, *Wertebereiche (Value Ranges)* definieren oder *Listenparameter* selektieren.
![Query Filter Define](/img/content/xu/cube-filter.png){:class="img-responsive"}
3. Wählen Sie einen einzelnen Wert (8) oder klicken Sie auf **[Add]** (9), um Wertebereiche hinzuzufügen. 
4. Definieren Sie die Werte für die Filterung. Dynamische Parameter werden unterstützt, siehe [Laufzeitparameter](./edit-runtime-parameters). Um eine Liste von Werten zu verwenden, die zur Laufzeit gesetzt wird, wählen Sie einen Listenparameter aus der Drop-down-Liste *List Parameter* (10).
Wenn nötig, löschen Sie Filter über den **[Remove]**-Button (Mülltonnensymbol).
5. Klicken Sie auf **[OK]** zum Bestätigen. Das Fenster "Member Filter" schließt sich.

Wenn ein Filter definiert ist, erscheint ein Filtersymbol in der Metadatenstruktur.

{: .box-note }
**Hinweis:** BW-Queries haben oft definierte Variablen zum Erstellen von Filteroptionen. Um Variablen zu definieren, siehe [Query Variablen](./variablen).
 

****
#### Weiterführende Links
- [Allow external access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries).
- [Query Variablen](./variablen)
