---
ref: xfa-bwhier-table-output
layout: page
title: Ausgabeformate
description: Tabellenausgabe
product: xtract-for-alteryx
parent: bw-hierarchien
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
- **NodeID:**
Eindeutiger Schlüssel des Knoten.
- **ParentNodeID:**
Schlüssel des Vaterknotens.
- **FirstChildNodeID:**
Schlüssel des ersten Kindknotens.
- **NextNodeID:**
Schlüssel des nächsten Knotens in derselben Hierarchieebene.
- **InfoObjectName:**
Name des InfoObjects, das hinter dem jeweiligen Knoten steht.
- **NodeName:**
Der (technische) Name des Knotens.
- **NodeText:**
Der beschreibende Text in der jeweiligen Anmeldesprache  (nur wenn *FetchText* in den Einstellungen auf *true/wahr* gesetzt wurde).
- **DateFrom:** 
Datum ab wann der Knoten gültig ist.
- **DateTo:**
Datum bis wann der Knoten gültig ist.
- **Link:** 
Wenn der Wert in *Link* größer als 0 ist, handelt es sich bei dem Knoten um eine Verknüpfung. 
Die ID des ursprünglichen Knotens wird angezeigt. 
- **Row:**
Zeilennummer. Die Zeilennummer kann in der Weiterverarbeitung der Daten als ID oder Ordnungskriterium verwendet werden.<br>
![Hierarchy-Table-Output](/img/content/Hierarchy-Table-Output-Result.png){:class="img-responsive"}

### Natural Format

- **LevelN:**
Technischer Name des Knotens in der n-ten Ebene. Die Anzahl der Ebenen ist in der [Extraktionseinstellung](./hierarchie-extraktionseinstellungen) **Level Count** definiert.
Die Ebenenanzahl beginnt bei 0. 
- **LevelTextN:**
Der beschreibende Text des Knotens in der n-ten Ebene. 
Diese Spalte wird nur erstellt, wenn die [Extraktionseinstellung](./hierarchie-extraktionseinstellungen) **Description texts for levels** aktiv ist.
 **InfoObjectName:**
Name des InfoObjects, das hinter dem jeweiligen Knoten steht.
- **NodeName:**
Der (technische) Name des Knotens.
- **NodeText:**
Der beschreibende Text in der jeweiligen Anmeldesprache  (nur wenn *FetchText* in den Einstellungen auf *true/wahr* gesetzt wurde).
- **DateFrom:** 
Datum ab wann der Knoten gültig ist.
- **DateTo:**
Datum bis wann der Knoten gültig ist.
- **Link:** 
Wenn der Wert in *Link* größer als 0 ist, handelt es sich bei dem Knoten um eine Verknüpfung. 
Die ID des ursprünglichen Knotens wird angezeigt. 
- **Row:**
Zeilennummer. Die Zeilennummer kann in der Weiterverarbeitung der Daten als ID oder Ordnungskriterium verwendet werden.<br>
![Hierarchy-Table-Output](/img/content/Hierarchy-description-texts.png){:class="img-responsive"}

### ParentChildWithNodeNames Format

- **NodeID:**
Eindeutiger Schlüssel des Knoten.
- **NodeName:**
Der (technische) Name des Knotens.
- **NodeText:**
Der beschreibende Text in der jeweiligen Anmeldesprache  (nur wenn *FetchText* in den Einstellungen auf *true/wahr* gesetzt wurde).
- **ParentNodeID:**
Schlüssel des Vaterknotens.
- **ParentNodeName:**
Name des Vaterknotens.
- **InfoObjectName:**
Name des InfoObjects, das hinter dem jeweiligen Knoten steht.
- **DateFrom:** 
Datum ab wann der Knoten gültig ist.
- **DateTo:**
Datum bis wann der Knoten gültig ist.
- **Link:** 
Wenn der Wert in *Link* größer als 0 ist, handelt es sich bei dem Knoten um eine Verknüpfung. Die ID des ursprünglichen Knotens wird angezeigt. 
- **Row:**
Zeilennummer. Die Zeilennummer kann in der Weiterverarbeitung der Daten als ID oder Ordnungskriterium verwendet werden.<br>
![Hierarchy-Table-Output](/img/content/extractors.bwhier/Hierarchy-ParentChildWithNodes.png){:class="img-responsive"}

