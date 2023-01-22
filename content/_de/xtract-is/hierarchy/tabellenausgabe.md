---
ref: xi-hierarchy-02
layout: page
title: Tabellenausgabe
description: Tabellenausgabe
product: xtract-is
parent: hierarchy
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=tabellenausgabe
---
Im Gegensatz zu den anderen Quellkomponenten ist die Ausgabe der Hierarchie-Komponente starr. <br>
Im Fall der *Parent-child Representation*, s. Settings, hat sie bei jeder Hierarchie immer dieselben Spalten, die im folgenden beschrieben sind:

**NodeID**<br>
Eindeutiger Schlüssel des Knoten.

**ParentNodeID**<br>
Schlüssel des Elternknotens.

**FirstChildNodeID**<br>
Schlüssel des ersten Kindknotens.

**NextNodeID**<br>
Schlüssel des nächsten Knotens in derselben Hierarchiebene.

**InfoObjectName**<br>
Name des InfoObjects, das hinter dem jeweiligen Knoten steht.

**NodeName**<br>
Der (technische) Name des Knotens.

**NodeText**<br>
Der Beschreibungstext in der jeweiligen Anmeldesprache (nur wenn FetchText in den Settings auf true steht).

![Hierarchy-Table-Export](/img/content/Hierarchy-Table-Export.png){:class="img-responsive"}