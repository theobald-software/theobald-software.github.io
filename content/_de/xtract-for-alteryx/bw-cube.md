---
ref: xtract-for-alteryx-06
layout: page
title: BW Cube
description: BW Cube
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: bw-cube
permalink: /:collection/:path
weight: 6
lang: de_DE
progressstate: 5
---
Der folgende Abschnitt beschreibt die Funktion der Xtract for Alteryx BW Cube Komponente. <br>
Die BW Cube Komponente von Xtract for Alteryx kann verwendet werden, um die Daten aus  SAP BW InfoProviders (z.B. Cubes) oder Queries zu extrahieren und im Anschluss in Alteryx weiter zu bearbeiten.

{: .box-tip }
**Tipp:** Grundlagen zum Produkt sind im Abschnitt [Erste Schritte mit Xtract for Alteryx](./erste-schritte) beschrieben.

### BW Cube verwenden
1. Ziehen Sie die "Xtract BW Cube" Komponente per drag & drop auf Ihr Alteryx-Workflow.
2. Wählen Sie eine SAP-Verbindung, navigieren Sie zu der **gewählten Extraktion** und klicken Sie auf **[Edit]**. Das Hauptfenster der Komponente öffnet sich.

Auf die meisten Funktionen der Komponente kann über das Hauptfenster zugegriffen werden.

### Funktionsübersicht
Das Hauptfenster der BW Cube Komponente besteht aus zwei Unterabschnitten und einigen  Schaltflächen:

- Cube orQuery
- Preview
![Cube Extractor](/img/content/xfa/xfa-cube-query-overview.png){:class="img-responsive"}

#### Cube or Query
Innerhalb des Unterabschnitts **Cube or Query** können Sie nach Queries oder BW Cubes / InfoProvider suchen über **[Suche]** (Lupensymbol).
Die Felder *Key Figures*, *Dimensions* und *Properties*, die für ein Output ausgewäht sind, werden in diesem Unterabschnitt angezeigt. 


#### Preview
Im Unterabschnitt **Preview**  wird der Inhalt des ausgewählten Querys oder BW Cubes / InfoProviders when clicking the **[Load Live Preview]** button.

#### Schaltflächen
- **[Extraction Settings]** öffnet die [extraktionsspezifische Einstellungen](./bw-cube/bw-cube-einstellungen) z.B. Paketgröße (Package Size), Zeilenbegrenzung (Row Limit) oder Automatic Slicing Dimension. <br>
- **[Load live preview]** lädt eine Echtzeitvorschau einer Query oder eines BW Cubes / InfoProviders ohne eine Extraktion auszuführen.
- **[Show MDX]** zeigt das für die Selektion generierte MDX-Statement, das zur Laufzeit auf dem BW-System ausgeführt wird.Wenn der Zugang zum BW-System verfügbar ist, können Sie zusätzlich die Transaktion *MDXTEST* verwenden, um das MDX-Statement zu verwenden.
- **[Edit Variables]** ermöglicht die Definition der [Variablen](./bw-cube/bw-cube-variablen). 
- **[Edit Runtime Parameters]** ermöglicht die Definition von [Laufzeitparametern](./bw-cube/edit-runtime-parameters). 

Weitere Informationen zum Arbeiten mit der BW Cube Komponente finden Sie in den folgenden Unterabschnitten.

---

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}