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
### Über BW Cube
Die BW Cube Komponente von Xtract for Alteryx kann verwendet werden, um die Daten aus  SAP BW InfoProviders (z.B. Cubes) oder Queries zu extrahieren und im Anschluss in Alteryx weiter zu bearbeiten.

### BW Cube verwenden
Grundkenntnisse von Xtract for Alteryx sind erforderlich, um die folgenden Abschnitte zu verstehen, mehr Details finden Sie im Abschnitt [ Erste Schritte mit Xtract for Alteryx](./erste-schritte).

1. Ziehen Sie die BW Cube Komponente per drag & drop auf Ihr Alteryx-Workflow.
2. Wählen Sie eine SAP-Verbindung, navigieren Sie zu der **gewählten Extraktion** und klicken Sie auf **[Edit]**. 
Das Hauptfenster der Komponente wird geöffnet.

Auf die meisten Funktionen der Komponente kann über das Hauptfenster zugegriffen werden.

### BW Cube - Funktionsübersicht

Das Hauptfenster der BW Cube Komponente besteht aus zwei Unterabschnitten und einigen  Schaltflächen:

- Cube orQuery
- Preview
![Cube Extractor](/img/content/xfa/xfa-cube-query-overview.png){:class="img-responsive"}

#### Cube or Query
Innerhalb des Unterabschnitts **Cube or Query** können Sie nach Queries oder BW Cubes / InfoProvider mit Hilfe von **Cube or Query Lookup** (Lupensymbol) suchen.
Die Felder *Key Figures*, *Dimensions* und *Properties*, die für ein Output ausgewäht sind, werden in diesem Unterabschnitt angezeigt. 


#### Preview
Im Unterabschnitt **Preview**  wird der Inhalt des ausgewählten Querys oder BW Cubes / InfoProviders when clicking the **[Load Live Preview]** button.

#### Schaltflächen
- **[Extraction Settings]** öffnet die [extraktionsspezifische Einstellungen](./bw-cube/bw-cube-settings) z.B. Paketgröße (Package Size), Zeilenbegrenzung (Row Limit) oder Automatic Slicing Dimension. <br>
- **[Load live preview]** lädt eine Echtzeitvorschau einer Query oder eines BW Cubes / InfoProviders ohne eine Extraktion auszuführen.
- **[Show MDX]** zeigt das für die Selektion generierte MDX-Statement, das zur Laufzeit auf dem BW-System ausgeführt wird.Wenn der Zugang zum BW-System verfügbar ist, können Sie zusätzlich die Transaktion *MDXTEST* verwenden, um das MDX-Statement zu verwenden.
- **[Edit Variables]** ermöglicht die Definition der [Variablen](./bw-cube/bw-cube-variables). 

Weitere Informationen finden Sie zum Thema "Arbeiten mit der BW Cube Komponente" finden Sie in den folgenden Unterabschnitten:




{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}