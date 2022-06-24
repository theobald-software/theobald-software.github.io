---
ref: xfa-bwhier-define
layout: page
title: Eine Hierarchie-Extraktion definieren
description: Hierarchien als Datenquelle definieren
product: xtract-for-alteryx
parent: bw-hierarchien
permalink: /:collection/:path
weight: 1
lang: de_DE
progressstate: 5
---
Der folgende Abschnitt beschreibt die Anwendung der Xtract Hierarchy Komponente.

### Eine BW Hierarchy finden

1. Im Hauptfenster des Designers navigieren Sie zum Unterabschnitt **Hierarchy Extraction** und klicken Sie auf  **[Suche]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol)(1).  
![Define-Data-Source-Hierarchy](/img/content/xfa/Define-Data-Source-Hierarchy_1.png){:class="img-responsive"}
Das Fenster "Hierarchy Lookup" wird geöffnet.
2. Im Feld **Hierarchy Name** (2) geben Sie einen Namen eines beliebigen Extraktors, verwenden Sie Wildcards (*), falls notwendig.
![Look-Up-Hierarchy](/img/content/extractors.bwhier/Look-Up-Hierarchy.png){:class="img-responsive"}
3. Klicken Sie auf **[Suche]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol)(3) und wählen Sie den gewünschten Extraktor aus der angezeigten Liste(4).
4. Klicken Sie auf **[OK]** (5) zum Bestätigen.

Klicken auf **[[Extraction Settings](./hierarchie-extraktionseinstellungen)]**, um die Hierarchieeinstellungen zu definieren.

### Ausgewählte BW Hierarchie in Echtzeitvorschau
Klicken Sie auf **[Load live preview]** (6), um eine Echtzeitvorschau anzuzeigen, ohne eine Extraktion auszuführen.<br>

![Define-Data-Source-Hierarchy](/img/content/extractors.bwhier/Define-Data-Source-Hierarchy.png){:class="img-responsive"}

Die angezeigte Hierarchie ist im Parent-Child-Format, deswegen sind die Output-Spalten festgelegt.Das Output hat immer die folgenden Spalten für jede Hierarchie:

![Hierarchy-Table-Output](/img/content/xfa/Hierarchy-Table-Output-Result.png){:class="img-responsive"}

| **NodeID** | **ParentNodeID**  | **FirstChildNodeID**  |  **NextNodeID** | **InfoObjectName**  | **NodeName** | **NodeText**  |
|---|---|---|---|---|---|---|---|
| Eindeutiger Knotenschlüssel  | Schlüssel für den Parent-Knoten  | Schlüssel für den ersten Child-Knoten  | Schlüssel für den nächsten Knoten in der selben Hierarchieebene  | Name des InfoObjects hinter dem entsprechenden Knoten  | (Technischer) Name des Knotens | Beschreibungstext in der ausgewählten Logon-Sprache (nur wenn FetchText in den Einstellungen auf "true" gesetzt ist)|


Die Originalhierarchie von PM_COUNTRY in SAP sieht folgendermaßen aus:

![Hierarchy-Table-SAP](/img/content/extractors.bwhier/Hierarchy-Table-Output.png){:class="img-responsive"}


****
#### Weiterführende Links
- [BW Hierarchy Settings](./hierarchie-extraktionseinstellungen)
- [SAP Online Help - Uploading Hierarchies from Flat Files](https://help.sap.com/saphelp_scm700_ehp02/helpdata/en/fa/e92637c2cbf357e10000009b38f936/frameset.htm)
