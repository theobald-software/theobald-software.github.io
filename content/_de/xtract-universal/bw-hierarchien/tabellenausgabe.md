---
ref: xu-bw-hierarchies-02
layout: page
title: Tabellenausgabe
description: Tabellenausgabe
product: xtract-universal
parent: bw-hierarchien
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=tabellenausgabe
---

Im Gegensatz zu den anderen Quellkomponenten ist die Ausgabe der Hierarchie-Komponente starr. Sie hat bei jeder Hierarchie immer dieselben Spalten, die im Folgenden beschrieben sind:

**NodeID**<br>
Eindeutiger Schlüssel des Knoten.

**ParentNodeID**<br>
Schlüssel des Elternknotens.

**FirstChildNodeID**<br>
Schlüssel des ersten Kindknotens.

**NextNodeID**<br>
Schlüssel des nächsten Knotens in derselben Hierarchieebene.

**InfoObjectName**<br>
Name des InfoObjects, das hinter dem jeweiligen Knoten steht.

**NodeName**<br>
Der (technische) Name des Knotens.

**NodeText**<br>
Der Beschreibungstext in der jeweiligen Anmeldesprache (nur wenn *FetchText* in den Settings auf *true* steht).

Die Original-Hierarchie zu dem Beispiel PM_COUNTRY aus dem SAP sieht folgendermaßen aus:

![Hierarchy-Table-Output](/img/content/Hierarchy-Table-Output.png){:class="img-responsive"}

Daraus ergibt sich folgende, flache Datenausgabe:

![Hierarchy-Table-Output-Browser](/img/content/Hierarchy-Table-Output-Browser.png){:class="img-responsive"}

