### Datenquelle auswählen

1. Suchen Sie eine Hierarchie, siehe [Einen Extraktor finden](./eine-deltaq-quelle-definieren#einen-extraktor-finden).<br>
Beispiel: Datenquelle *0COSTCENTER_0101_HIER*.
![DeltaQ-Hierarchy-001](/img/content/DeltaQ-Hierarchy-001.png){:class="img-responsive"}
2. Wählen Sie im Editor "Look UP Hierarchy Details" einen **Hierarchy Name**.<br>
Beispiel: Hierarchy Name *0001C2000*.
![DeltaQ-Hierarchy-002](/img/content/DeltaQ-Hierarchy-002.png){:class="img-responsive"}
Im Hauptfenster "Extract SAP DataSources and Extractors" wird die Struktur angezeigt, die in jeder Hierarchie die gleiche ist. 
3. Optional: klicken Sie auf **[Extraction Settings]**, um die Sprache der Hierarchie einzustellen.
4. Definieren Sie Einzelheiten der Extraktion, wie in [Eine DeltaQ-Extraktion definieren](./eine-deltaq-quelle-definieren#eine-deltaq-extraktion-definieren) beschrieben.

### Vorschau der Extraktion
Klicken Sie auf **[Run]**, um das Fenster **Run Extraction** anzuzeigen und den Laufzeitparameter **Preview** zu aktivieren
![DeltaQ-Hierarchy-004](/img/content/DeltaQ-Hierarchy-004.png){:class="img-responsive"}

**NodeID** ist die fortlaufende Nummer eines Knotens in der Hierarchie.<br>
**NodeName** ist der aktuelle Wert (die laufende Nummer des Knotens in der Hierarchie). <br>
Mit der **ParentID** und **ChildID** kann die Hierarchie rekonstruiert werden.<br>
Der **Short/Medium/Long Text** befindet sich im Backend-Bereich.

{: .box-tip }
**Tipp:** Im Gegensatz zu Attributen und Transaktionen müssen Hierarchien nicht aktiviert werden.
