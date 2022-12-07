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

### Ausgabe in SAP
Die Beispiel-Hierarchie PM_COUNTRY sieht in SAP wie folgt aus:<br>
![Hierarchy-Table-SAP](/img/content/Hierarchy-Table-Output.png){:class="img-responsive"}

### ParentChild Format

Die Standardausgabe der HB Hierarchy Komponente beinhaltet die folgenden Spalten:
![Hierarchy-Table-Output](/img/content/Hierarchy-Table-Output-Result.png){:class="img-responsive"}

### Natural Format

![Hierarchy-Table-Output](/img/content/Hierarchy-description-texts.png){:class="img-responsive"}

### ParentChildWithNodeNames Format

![Hierarchy-Table-Output](/img/content/extractors.bwhier/Hierarchy-ParentChildWithNodes.png){:class="img-responsive"}


- **NodeID:**
Eindeutiger Schlüssel des Knoten.
- **ParentNodeID:**
Schlüssel des ersten Kindknotens.
- **FirstChildNodeID:**
Schlüssel des ersten Kindknotens.
- **NextNodeID:**
Schlüssel des nächsten Knotens in derselben Hierarchieebene.
- **InfoObjectName:**
Name des InfoObjects, das hinter dem jeweiligen Knoten steht.
- **NodeName:**
Der (technische) Name des Knotens..
- **NodeText:**
Der beschreibende Text in der jeweiligen Anmeldesprache  (nur wenn *FetchText* in den Einstellungen auf *true/wahr* gesetzt wurde).
