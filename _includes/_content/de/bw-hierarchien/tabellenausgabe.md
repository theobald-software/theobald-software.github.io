
### Ausgabe einer Hierarchie Struktur

Im Vergleich zu anderen Quellkomponenten ist die Ausgabe von Hierarchiekomponenten vorgegeben. Sie enthält immer die gleichen Spalten.
![Hierarchy-Table-Output (Hierachietabelle Ausgabe)](/img/content/Hierarchy-Table-Output-Result.png){:class="img-responsive"}

**NodeID**<br>
Eindeutiger Schlüssel des Knoten.

**ParentNodeID**<br>
Schlüssel des ersten Kindknotens.

**FirstChildNodeID**<br>
Schlüssel des ersten Kindknotens.

**NextNodeID**<br>
Schlüssel des nächsten Knotens in derselben Hierarchieebene.

**InfoObjectName**<br>
Name des InfoObjects, das hinter dem jeweiligen Knoten steht.

**NodeName**<br>
Der (technische) Name des Knotens..

**NodeText** <br>
Der beschreibende Text in der jeweiligen Anmeldesprache  (nur wenn *FetchText* in den Einstellungen auf *true/wahr* gesetzt wurde).

### Ausgabe aus SAP
Das folgende Beispiel gibt die Original Hierarchie aus SAP von PM_COUNTRY wieder.

![Hierarchy-Table-SAP](/img/content/Hierarchy-Table-Output.png){:class="img-responsive"}



