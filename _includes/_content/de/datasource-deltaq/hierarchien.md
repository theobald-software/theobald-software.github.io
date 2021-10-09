### Datenquelle auswählen
Wie in [Einen Extraktor definieren](./eine-deltaq-quelle-definieren) gezeigt, wählen Sie im Editor "Look Up OLTP Source" über **[Search]** (magnifying glas icon) einen **OLTP Source Name**.

Beispiel: Datenquelle *0COSTCENTER_0101_HIER*.
![DeltaQ-Hierarchy-001](/img/content/DeltaQ-Hierarchy-001.png){:class="img-responsive"}

Wählen Sie im Editor "Look UP Hierarchy Details" einen **Hierarchy Name**.

Beispiel: Hierarchy Name *0001C2000*.
![DeltaQ-Hierarchy-002](/img/content/DeltaQ-Hierarchy-002.png){:class="img-responsive"}

Im Hauptfenster "Extract SAP DataSources and Extractors" wird die Struktur angezeigt, die in jeder Hierarchie die gleiche ist. 

Klicken Sie auf **[Extraction Settings]**, um die Sprache der Hierarchie einzustellen.
![DeltaQ-Hierarchy-003](/img/content/Deltaq-Hierarchy-Selected.png){:class="img-responsive"}

### Vorschau der Extraktion
Klicken Sie auf **[Run]**, um das Fenster **Run Extraction** anzuzeigen und den Laufzeitparameter **Preview** zu aktivieren
![DeltaQ-Hierarchy-004](/img/content/DeltaQ-Hierarchy-004.png){:class="img-responsive"}

**NodeID**ist die fortlaufende Nummer eines Knotens in der Hierarchie. **NodeName** ist der aktuelle Wert (die laufende Nummer des Knotens in der Hierarchie). Mit der **ParentID** und **ChildID** kann die Hierarchie rekonstruiert werden.
Der **Short/Medium/Long Text** befindet sich im Backend-Bereich.

{: .box-tip }
**Tipp:** Im Gegensatz zu Attributen und Transaktionen müssen Hierarchien nicht aktiviert werden.
