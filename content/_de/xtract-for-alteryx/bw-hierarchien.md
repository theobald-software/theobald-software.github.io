---
ref: xtract-for-alteryx-07
layout: page
title: BW Hierarchy
description: BW Hierarchien
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: bw-hierarchien
permalink: /:collection/:path
weight: 7
lang: de_DE
progressstate: 5
---
### Über BW Hierarchy
Die Komponente BW Hierarchy ermöglicht die Extraktion von Hierarchien von einem SAP BW System.


### BW Hierarchy verwenden
Grundkenntnisse von Xtract for Alteryx sind erforderlich, um die folgenden Abschnitte zu verstehen, mehr Details finden Sie im Abschnitt [ Erste Schritte mit Xtract for Alteryx](./erste-schritte).

1. Ziehen Sie die "BW Hierarchy" per drag & drop auf Ihr Alteryx-Workflow.
2. Wählen Sie eine SAP-Verbindung, navigieren Sie zu der **gewählten Extraktion** und klicken Sie auf **[Edit]**. Das Hauptfenster der Komponente wird geöffnet.

Auf die meisten Funktionen der Komponente kann über das Hauptfenster zugegriffen werden.

### Hierarchy Hauptfenster - Funktionsübersicht
Das Hauptfenster der BW Hierarchy Komponente besteht aus zwei Unterabschnitten:
- Hierarchy Extraction
- Preview

![Hierarchy Extractor](/img/content/xfa/xfa_hierarchy.png){:class="img-responsive"}

#### Hierarchy Extraction
Innerhalb des Unterabschnitts **Hierarchy Extraction** können Sie nach [SAP BW Hierarchien suchen](./bw-hierarchien/hierarchien-als-datenquelle-definieren). Verwenden Sie dafür das **Hierarchy Look-Up** (Lupensymbol).
![Hierarchy Suche](/img/content/xfa/xfa_hierarchy_search.png){:class="img-responsive"}

**Date To**<br>
Der Standartwert für das Feld *Date To* ist 99991231. Um den Standardwert zu ändern, klicken Sie auf **[Run]** und überschreiben Sie den Wert. 

#### Preview
Der Unterabschnitt **Preview** [zeigt die Felder](./bw-hierarchien/hierarchien-als-datenquelle-definieren#echtzeitvorschau-der-ausgewählten-hierarchie-anzeigen) der ausgewählten SAP BW Hierarchie. Klicken Sie dafür auf **[Load Live Preview]**.
![Hierarchy preview](/img/content/xfa/xfa_hierarchy_buttons.png){:class="img-responsive"}

#### Schaltflächen
- **[Extraction Settings]** öffnet die [spezifischen Extraktionseinstellungen](./bw-hierarchien/hierarchie-extraktionseinstellungen) z.B. Darstellung oder Ebenenanzahl. <br>
- **[Load Live Preview]** lädt eine Vorschau der Hierarchie ohne eine Extraktion.


***
#### Weiterführende Links
- [SAP Online Help - Uploading Hierarchies from Flat Files](https://help.sap.com/saphelp_scm700_ehp02/helpdata/en/fa/e92637c2cbf357e10000009b38f936/frameset.htm)