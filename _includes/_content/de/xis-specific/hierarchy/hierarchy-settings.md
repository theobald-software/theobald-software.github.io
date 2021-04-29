
![XIS_BWHierarchy_settings](/img/content/XIS_BWHierarchy_settings.png){:class="img-responsive"}

**Automatic String Conversion**<br>
bedeutet, dass die Datenquelle alle Strings nach NVarChar konvertiert, wenn SAP ein Unicode-System ist, und nach VarChar, wenn SAP kein Unicode-System ist.

**Convert Strings to VarChar**<br>
bedeutet, dass die Datenquelle alle Strings nach VarChar konvertiert.

**Convert Strings to NVarChar**<br>
bedeutet, dass die Datenquelle alle Strings nach NVarChar konvertiert.


**Representation**

- **Parent-child:** Die Hierarchie hat das SAP Standard-Parent-Child Format.
- **Natural/flattened:** Die Parent-Child Beziehung wird in eine reguläre, flache Hierarchie umgewandelt.

**Remove leading zeros**<br>
Vorhandene, führende Nullen in der Spalte NodeName werden mittels ALPHA-Konvertierung entfernt. Das Feld NodeName kann dann in einer Join-Bedingung mit dem entsprechenden Schlüssel-Feld einer BWCube-Extraktion verwendet werden.<br>
Funktioniert auch bei zusammengesetzten InfoObjekten. Beispiel: 0CO_AREA (1000) und 0COSTCENTER (0000003100) werden zu 1000/3100.
 
**Fetch description texts**<br>
bedeutet, dass die zugehörigen Stammdaten-Texte in der jeweiligen Anmeldesprache mit dazugelesen werden. Hinweis: Die Texte von nicht-bebuchbaren Knoten werden immer mit dazugelesen.

**Legacy Mode**<br>
wenn die Option aktiviert ist, werden weder Links noch Intervalle aufgelöst noch ungültige Knoten bei Hierarchien mit zeitabhängiger Struktur herausgefiltert und die Node-Ids genau so übetragen, wie sie im SAP in der Tabelle stehen.

**Natural Representation Settings**<br>
ist nur aktiv, wenn Representation den Wert *Natural/flattened* hat.

**Level count**<br>
Legt die maximale Anzahl der Ebenen fest, falls die Representation Natural gewählt ist. Im nächsten Screenshot sehen Sie die obige Hierarchie in der Repräsentation Natural mit 5 Ebenen.

**Leaves only**<br>
liefert nur für die Blätter jeweils einen eigenen Datensatz.

**Fill empty levels**<br>
Es wird das unterste Element in der Hierarchie bis in die letzte Ebene kopiert. Im nächsten Screenshot sehen Sie die obige Hierarchie in der Repräsentation Natural mit 5 Ebenen und der Option Repeat Leaves.

**Description texts for levels**<br>
bedeutet, dass für jedes Level-Feld *LevelN* das Feld *LevelTextN* ausgegeben wird, welches den Stammdaten-Text in der jeweiligen Anmeldesprache enthält. 
