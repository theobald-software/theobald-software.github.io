### Hierarchien Suchen

1. Navigieren Sie im Hauptfenster der Komponente zu **OLTP** und klicken Sie auf ![magnifying-glass](/img/content/icons/magnifying-glass.png). Das Fenster “Look Up OLTP Source” wird geöffnet.<br>
![DeltaQ](/img/content/DeltaQ.png){:class="img-responsive"}
2. Geben Sie den Namen einer *Hierarchie* im Feld **Name** oder geben Sie die Beschreibung einer Hierarchie in das Feld **Description** (1) ein. Verwenden Sie Wildcards ( * ), wenn nötig.<br>
![search-ds-mat-attr](/img/content/DeltaQ-Hierarchy-001.png){:class="img-responsive"}
3. Klicken Sie auf ![magnifying-glass](/img/content/icons/magnifying-glass.png) und wählen Sie einen Extraktor aus der angezeigten Liste aus (2).
4. Klicken Sie auf **[OK]**, um Ihre Auswahl zu bestätigen. Das Fenster "Look UP Hierarchy Details" wird geöffnet.
5. Wählen Sie die gewünschte Hierarchie aus der angezeigten Liste aus. <br>
![DeltaQ-Hierarchy-002](/img/content/DeltaQ-Hierarchy-002.png){:class="img-responsive"}
6. Klicken Sie auf **[OK]**, um Ihre Auswahl zu bestätigen.

Die Anwendung kehrt nun zum Hauptfenster der Komponente zurück.

<!---
The following subsection is new and correlates to the section on page "Defining a deltaQ Extraction". 
-->

### Definieren der DeltaQ-Extraktion

Führen Sie nach der Suche nach einer Hierarchie die folgenden Schritte aus:

1. Navigieren Sie zu **Gateway** und klicken Sie auf ![magnifying-glass](/img/content/icons/magnifying-glass.png) (1), um nach einer RFC-Destination zu suchen. 
Für mehr Informationen, siehe [DeltaQ Customizing](./deltaq-customizing).<br>
![DeltaQ2](/img/content/DeltaQ2.png){:class="img-responsive"}
2. Navigieren Sie zu **Logical Destination** und klicken Sie auf ![magnifying-glass](/img/content/icons/magnifying-glass.png) (2), um ein logisches RFC-Zielsystem zu suchen. Für mehr Informationen, siehe [DeltaQ Customizing](./deltaq-customizing).
3. Klicken Sie auf **Customizing Check** (3) zur Validierung des DeltaQ-Customizings auf dem SAP-System.
Stellen Sie sicher, dass alle Häkchen grün sind. Für mehr Informationen, siehe [DeltaQ Customizing](./deltaq-customizing).<br>
![customizing-check-successfull](/img/content/customizing-check-successfull.png){:class="img-responsive"}
4. Wählen Sie ein [Update Mode](#update-mode) aus, um z.B. Delta-Extraktionen zu initialisieren.
5. Optional: Klicken Sie auf **[Edit]** Option neben dem Element, um [Filter](./datasource-parameters) hinzuzufügen. 
6. Optional: Klicken Sie auf **[Extraction Settings]**, um die Sprache der Hierarchie festzulegen, siehe [{% if page.product != "xtract-is" %}Extraktions {% endif %} einstellungen](./extraktionseinstellungen). 
7. Klicken Sie auf **[Run]**, um die Extraktion zu testen und Ihre Einstellungen zu validieren.
![Datasource Preview](/img/content/odp/odp-datasource-2lis-11-vaitm-02-preview.png){:class="img-responsive"}

{: .box-tip }
**Tipp:** Im Gegensatz zu Attributen und Transaktionen müssen Hierarchien nicht aktiviert werden.


### Hierarchy Output (Ausgabe)

Die Ausgabe einer Hierarchie wird durch die ausgewählte **Representation** in den [{% if page.product != "xtract-is" %}Extraktions {% endif %}einstellungen](./extraktionseinstellungen) definiert.<br>

Die Ausgabe einer Hierarchie kann die folgenden Spalten enthalten:

- **NodeID:**
Eindeutiger Schlüssel des Knoten.
- **ParentNodeID:**
Schlüssel des Vaterknotens.
- **FirstChildNodeID:**
Schlüssel des ersten Kindknotens.
- **NextNodeID:**
Schlüssel des nächsten Knotens in derselben Hierarchieebene.
- **InfoObjectName:**
Name des InfoObjects, das hinter dem jeweiligen Knoten steht.
- **NodeName:**
Der (technische) Name des Knotens.
- **NodeText:**
Der beschreibende Text in der jeweiligen Anmeldesprache  (nur wenn *FetchText* in den [Extraktionseinstellungen](./hierarchie-extraktionseinstellungen) auf *true/wahr* gesetzt wurde).
- **DateFrom:** 
Datum ab wann der Knoten gültig ist.
- **DateTo:**
Datum bis wann der Knoten gültig ist.
- **Link:** 
Wenn der Wert in *Link* größer als 0 ist, handelt es sich bei dem Knoten um eine Verknüpfung. 
Die ID des ursprünglichen Knotens wird angezeigt. 
- **Row:**
Zeilennummer. Die Zeilennummer kann in der Weiterverarbeitung der Daten als ID oder Ordnungskriterium verwendet werden.<br>