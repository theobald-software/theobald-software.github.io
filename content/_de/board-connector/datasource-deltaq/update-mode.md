---
ref: bc-datasource-deltaq-06
layout: page
title: Update Mode
description: Hierarchien
product: board-connector
parent: datasource-deltaq
permalink: /:collection/:path
weight: 6
lang: de_DE
---

Im folgenden Beispiel erfolgt der Download von Hierarchiedaten aus der DataSource 0Costcenter_0101_Hier. Selektieren Sie diese DataSource mit der Suchhilfe (erster Fernglas-Button im Editor)

![DeltaQ-Hierarchies-01](/img/content/DeltaQ-Hierarchies-01.png){:class="img-responsive"}

Im folgenden Fenster wählen Sie eine Hierarchie aus (in diesem Beispiel 0001C2000).

![DeltaQ-Hierarchies-02](/img/content/DeltaQ-Hierarchies-02.png){:class="img-responsive"}

In der folgenden Maske sehen wir die Struktur, die in jeder Hierarchie gleich ist. Wir setzen noch oben rechts das logische Zielsystem und die technischen Einstellungen zur RFC-Destination ein. Unter *Extraction Settings* ist die Sprache der Hierarchie noch anzugeben.

![DeltaQ-Hierarchies-03](/img/content/DeltaQ-Hierarchies-03.png){:class="img-responsive"}


Im Gegensatz zu Attributen und Transaktionen müssen Hierarchien nicht aktiviert werden. Es kann sofort ein Preview erfolgen, der das folgende Ergebnis liefert.

![DeltaQ-Hierarchies-04](/img/content/DeltaQ-Hierarchies-04.png){:class="img-responsive"}

Die *NodeID* ist die laufende Nummer des Knotens in der Hierarchie. *NodeName* ist der eigentliche Wert. Durch die *ParentID* und die *ChildID* kann die Hierarchie rekonstruiert werden. Im hinteren Bereich findet man die Texte.

