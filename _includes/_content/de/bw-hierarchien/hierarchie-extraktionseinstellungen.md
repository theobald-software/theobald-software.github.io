
Um die Extraktionseinstellungen zu öffnen, klicken Sie im Hauptfenster der Komponente auf {% if page.product == "xtract-is" %}**Settings** {% else %} **[Extraction Settings]**{% endif %}.
Das Fenster “Hierarchy Settings” öffnet sich.<br>
![Hierarchies-Settings](/img/content/extractors.bwhier/Hierarchy-settings.png){:class="img-responsive"}

### Extracton Settings - Extraktionseinstellungen
**Representation:** 
- *ParentChild*: Die Hierarchie ist im Parent-Child-Format repräsentiert, siehe [Ausgabeformate: ParentChild](./tabellenausgabe#parentchild-format). Beispiel: <br>
![Hierarchies-Parent-Child](/img/content/extractors.bwhier/Hierarchy-Table-Output-Result.png){:class="img-responsive"}
- *Natural*: Die SAP Parent-Child-Hierarchie wird in eine reguläre Hierarchie transformiert, siehe [Ausgabeformate: Natural](./tabellenausgabe#natural-format). Beispiel: <br>
![Hierarchy-Parent-Child-Natural](/img/content/extractors.bwhier/Hierarchy-Parent-Child-Natural.png){:class="img-responsive"}
- *ParentChildWithNodeNames*: Die Hierarchie ist in einem reduzierten Parent-Child-Format repräsentiert, das nur den Knoten und den Vaterknoten beinhaltet, siehe [Ausgabeformate: ParentChildWithNodeNames](./tabellenausgabe#parentchildwithnodenames-format). Beispiel:<br>
![Hierarchy-Parent-Child-With-Node-Names](/img/content/extractors.bwhier/Hierarchy-ParentChildWithNodes.png){:class="img-responsive"}

**Remove Leading Zeros (Führende Nullen entfernen)**<br>
Entfernt alle führende Nullen in der Spalte *NodeName* der Leaves.
*NodeName* kann dann in einer Join-Bedingung mit dem entsprechenden Dimension-Key einer BW Cube-Extraktion verwendet werden.<br>
Die Umwandlung funktioniert auch für zusammengesetzte InfoObjects.<br> 
Beispiel: 0CO_AREA (1000) und 0COSTCENTER (0000003100) wird zu 1000/3100.

**Fetch description texts (Beschreibungstexte holen)**<br>
Setzt das *NodeText* auf den Knotentext basierend auf den Einstellungen der Systemsprache. 

### Natural Settings - Darstellungseinstellungen

{: .box-note}
**Hinweis:** Der Unterabschnitt *Natural Settings* ist nur dann aktiv, wenn das Feld **Representation** den Wert *Natural* hat.

**Level Count** <br>
Definiert die maximale Anzahl von Ebenen. 
Das folgende Beispiel demonstriert die zuvor gezeigte Hierarchie mit fünf Ebenen und in der Darstellung gesetzt auf *Natural*.
![Hierarchy-Parent-Child-Natural](/img/content/extractors.bwhier/Hierarchy-Parent-Child-Natural.png){:class="img-responsive"}

**Leaves only**<br>
Liefert nur Leaves als Datensätze.<br>
![Hierarchy-Leaves-Only](/img/content/extractors.bwhier/Hierarchy-leaves-only.png){:class="img-responsive"}

**Fill empty levels**  <br>
Kopiert das unterste Element der Hierarchie bis zur letzten Ebene.
Das folgende Beispiel demonstriert die zuvor gezeigte Hierarchie mit der aktivierten Option *Repeat Leaves*.<br>
![Hierarchy-Parent-Child-Repeat](/img/content/extractors.bwhier/Hierarchy-Parent-Child-Repeat.png){:class="img-responsive"}

**Description texts for levels**<br>
Setzt das Output-Feld *LevelTextN* für jedes Feld *LevelN* , welches den Text beinhaltet, der auf den Einstellungen der Systemsprache basiert.<br>
![Hierarchy-Description-Texts](/img/content/Hierarchy-description-texts.png){:class="img-responsive"}

### Debug

**Enable Debug Logging:**<br>
Fügt den Extraktions-Logs detailierte Logs für die Hierarchy-Komponente hinzu.
Aktivieren Sie **Enable Debug Logging** nur bei Bedarf, z.B. auf Anfrage des Support-Teams.

*****
#### Weiterführende Links
- [SAP Dokumentation: About SAP BW Hierarchies](https://help.sap.com/saphelp_scm41/helpdata/en/90/fd36709c6411d5b4000050dadfb23f/content.htm?no_cache=true)
