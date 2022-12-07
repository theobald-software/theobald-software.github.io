---
ref: xfa-bwhier-table-output
layout: page
title: Ausgabeformat
description: Tabellenausgabe
product: xtract-for-alteryx
parent: bwhierarchy
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=tabellenausgabe
---

### Ausgabe einer Hierarchie Struktur

Im Vergleich zu anderen Quellkomponenten ist die Ausgabe von Hierarchiekomponenten vorgegeben. Eine Hierarchie enthält immer die gleichen Spalten.
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

### Ausgabe in SAP
Die PM_COUNTRY-Hierarchie aus dem Beispiel, sieht in SAP wie folgt aus:

![Hierarchy-Table-SAP](/img/content/Hierarchy-Table-Output.png){:class="img-responsive"}

Die entsprechende flache Datenausgabe in einem Browser sieht wie folgt aus:
![Hierarchy-Table-SAP](/img/content/Hierarchy-Table-Output-Browser.png){:class="img-responsive"}


