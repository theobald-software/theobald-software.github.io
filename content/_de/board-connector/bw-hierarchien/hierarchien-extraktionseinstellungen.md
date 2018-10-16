---
ref: bc-bw-hierarchies-03
layout: page
title: Extraktionseinstellungen
description: Extraktionseinstellungen
product: board-connector
parent: bw-hierarchien
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=hierarchien-extraktionseinstellungen
---

Über den *Extraction Settings*-Link im Editor öffnet sich das Einstellungsfenster. 

![Hierachy-Settings](/img/content/Hierachy-Settings.png){:class="img-responsive"}

**Representation**

- ParentChild:  Die Hierarchie hat das SAP Parent-Child Format.

![Hierarchy-Parent-Child](/img/content/Hierarchy-Parent-Child.png){:class="img-responsive"}

- Natural: Die Parent-Child Beziehung wird in eine reguläre Hierarchie umgewandelt.

**Remove Leading Zeros**<br>
Vorhandene, führende Nullen in der Spalte NodeName werden entfernt. 

**Fetch description texts**<br>
bedeutet, dass das Feld NodeText den Stammdaten-Text fürs Blatt in der jeweiligen Anmeldesprache enthält. 

**Abschnitt Natural Representation Settings**<br>
ist nur aktiv, wenn Representation den Wert Natural hat.

**Level Count**<br>
Legt die maximale Anzahl der Ebenen fest, falls die Representation Natural gewählt ist. Im nächsten Screenshot sehen Sie die obige Hierarchie in der Repräsentation Natural mit 5 Ebenen.

![Hierarchy-Parent-Child-Natural](/img/content/Hierarchy-Parent-Child-Natural.png){:class="img-responsive"}

**Repead leaves**<br>
Falls die Representation Natural gewählt ist, wird das unterste Element in der Hierarchie bis in die letzte Ebene kopiert. Im nächsten Screenshot sehen Sie die obige Hierarchie in der Repräsentation Natural mit 5 Ebenen und der Option Repeat Leaves.

![Hierarchy-Parent-Child-Repeat](/img/content/Hierarchy-Parent-Child-Repeat.png){:class="img-responsive"}

**Description texts for levels**<br>
bedeutet, dass für jedes Level-Feld *LevelN* das Feld *LevelTextN* ausgegeben wird, welches den Stammdaten-Text in der jeweiligen Anmeldesprache enthält. 

**Leaves only**<br>
liefert nur für die Blätter jeweils einen eigenen Datensatz.