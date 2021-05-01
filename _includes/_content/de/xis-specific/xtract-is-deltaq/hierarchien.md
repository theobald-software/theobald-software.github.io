### Datenquelle auswählen
Wie in [Defining an extractor](../xtract-is-deltaq/stammdaten-im-full-update) gezeigt, wählen Sie im Editor "Look Up OLTP Source" über die **Suche** (Lupensymbol) einen **OLTP Source Name**.

Beispiel: Datenquelle *0COSTCENTER_0101_HIER*.
![DeltaQ-Hierarchy-001](/img/content/DeltaQ-Hierarchy-001.png){:class="img-responsive"}

Wählen Sie im Editor "Look UP Hierarchy Details" einen **Hierarchy Name**.

Beispiel: Hierarchiename *0001C2000*.
![DeltaQ-Hierarchy-002](/img/content/DeltaQ-Hierarchy-002.png){:class="img-responsive"}

Im Hauptfenster "Extract SAP DataSources and Extractors" wird die Struktur angezeigt, die in jeder Hierarchie die gleiche ist. 

Klicken Sie auf **[Extraction Settings]**, um die Sprache der Hierarchie einzustellen.
![DeltaQ-Hierarchy-003](/img/content/Deltaq-Hierarchy-Selected.png){:class="img-responsive"}

### Vorschau der Extraktion
Aktivieren Sie den Datenviewer für den Datenfluss und führen Sie die DeltaQ-Extraktion aus.
![DeltaQ-Hierarchy-004](/img/content/xis/data_view_deltaQ_xtract_is.png){:class="img-responsive"}

**NodeID** ist die fortlaufende Nummer eines Knotens in der Hierarchie.
**NodeName** ist der aktuelle Wert. Mit der **ParentID** und **ChildID** kann die Hierarchie rekonstruiert werden.
Der **Short/Medium/Long Text** befindet sich im Backend-Bereich.

{: .box-tip }
**Tipp:** Im Gegensatz zu Attributen und Transaktionen müssen Hierarchien nicht aktiviert werden.