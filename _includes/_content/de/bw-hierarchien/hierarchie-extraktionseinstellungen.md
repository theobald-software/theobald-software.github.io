Über den *Extraction Settings*-Link im Editor öffnet sich das Einstellungsfenster. 

![Hierarchy-Extraction-Preferences](/img/content/Hierarchy-Extraction-Preferences.png){:class="img-responsive"}

**Representation**

- ParentChild:  Die Hierarchie hat das SAP Parent-Child Format.

![Hierarchies-Parent-Child](/img/content/Hierarchies-Parent-Child.png){:class="img-responsive"}

- Natural: Die Parent-Child Beziehung wird in eine reguläre Hierarchie umgewandelt.

**Remove Leading Zeros**<br>
Vorhandene, führende Nullen in der Spalte NodeName werden mittels ALPHA-Konvertierung entfernt. Das Feld NodeName kann dann in einer Join-Bedingung mit dem entsprechenden Schlüssel-Feld einer BWCube-Extraktion verwendet werden.<br>
Funktioniert auch bei zusammengesetzten InfoObjekten. Beispiel: 0CO_AREA (1000) und 0COSTCENTER (0000003100) werden zu 1000/3100.

**Fetch description texts**<br>
bedeutet, dass das Feld NodeText den Stammdaten-Text fürs Blatt in der jeweiligen Anmeldesprache enthält. 

**Abschnitt Natural Representation Settings**
ist nur aktiv, wenn Representation den Wert Natural hat.

**Level Count**
Legt die maximale Anzahl der Ebenen fest, falls die Representation Natural gewählt ist. Im nächsten Screenshot sehen Sie die obige Hierarchie in der Repräsentation Natural mit 5 Ebenen.

![Hierarchy-Parent-Child-Natural](/img/content/Hierarchy-Parent-Child-Natural.png){:class="img-responsive"}

**Repead leaves**<br>
Falls die Representation Natural gewählt ist, wird das unterste Element in der Hierarchie bis in die letzte Ebene kopiert. Im nächsten Screenshot sehen Sie die obige Hierarchie in der Repräsentation Natural mit 5 Ebenen und der Option Repeat Leaves.

![Hierarchy-Parent-Child-Repeat](/img/content/Hierarchy-Parent-Child-Repeat.png){:class="img-responsive"}

**Description texts for levels**<br>
bedeutet, dass für jedes Level-Feld LevelN das Feld LevelTextN ausgegeben wird, welches den Stammdaten-Text in der jeweiligen Anmeldesprache enthält. 

**Leaves only**<br>
liefert nur für die Blätter jeweils einen eigenen Datensatz.
