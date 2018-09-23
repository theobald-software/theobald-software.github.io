---
layout: page
title: Hierarchien
description: Hierarchien
product: xtract-is
parent: xtract-is-deltaq
permalink: /:collection/:path
weight: 8
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=hierarchien
---

Im folgenden Beispiel erfolgt der Download von Hierarchiedaten aus der Datasource 0Costcenter_0101_Hier. Selektieren Sie diese DataSource mit der Suchhilfe (erster Fernglas-Button im Editor).

![DeltaQ-Hierarchy-001](/img/content/DeltaQ-Hierarchy-001.png){:class="img-responsive"}


Im folgenden Fenster wählen Sie eine Hierarchie aus (in diesem Beispiel 0001C2000).

![DeltaQ-Hierarchy-002](/img/content/DeltaQ-Hierarchy-002.png){:class="img-responsive"} 


In der folgenden Maske sehen wir die Struktur, die in jeder Hierarchie gleich ist. Wir setzen noch oben rechts das logische Zielsystem und die technischen Einstellungen zur RFC-Destination ein. Unter Settings ist noch die Sprache der Hierarchie anzugeben.

![DeltaQ-Hierarchy-003](/img/content/DeltaQ-Hierarchy-003.png){:class="img-responsive"}


Im Gegensatz zu Attributen und Transaktionen müssen Hierarchien nicht aktiviert werden. Es kann sofort ein Preview erfolgen, der das folgende Ergebnis liefert.


![DeltaQ-Hierarchy-004](/img/content/DeltaQ-Hierarchy-004.png){:class="img-responsive"}

Die NodeID ist die laufende Nummer des Knotens in der Hierarchie. NodeName ist der eigentliche Wert. Durch die ParentID und die ChildID kann die Hierarchie rekonstruiert werden. Im hinteren Bereich findet man die Texte.