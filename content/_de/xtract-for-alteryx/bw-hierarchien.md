---
ref: xtract-for-alteryx-08
layout: page
title: Xtract Hierarchy
description: BW Hierarchien
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: bw-hierarchien
permalink: /:collection/:path
weight: 8
lang: de_DE
progressstate: 5
---

Der folgende Abschnitt beschreibt die Funktion der Xtract Hierarchy-Komponente. <br>
Die Komponente Xtract Hierarchy ermöglicht die Extraktion von Hierarchien von einem SAP BW System.

{: .box-warning}
**Warnung!** **Fehlende Berechtigungen**
Um die BW Hierarchy Komponente zu verwenden, muss der Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP verfügbar sein. 
Weitere Informationen finden Sie im Knowledge-Base-Artikel [SAP Zugriffsrechte: BW Hierarchies](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#bw-hierarchies).

{: .box-tip }
**Tipp:** Grundlagen zum Produkt sind im Abschnitt [Erste Schritte mit Xtract for Alteryx](./erste-schritte) beschrieben.

### Xtract Hierarchy verwenden
1. Ziehen Sie die "Xtract Hierarchy" Komponente per drag & drop auf Ihr Alteryx-Workflow.
2. Wählen Sie eine SAP-Verbindung, navigieren Sie zu der **gewählten Extraktion** und klicken Sie auf **[Edit]**. Das Hauptfenster der Komponente wird geöffnet.

Auf die meisten Funktionen der Komponente kann über das Hauptfenster zugegriffen werden.

### Funktionsübersicht
Das Hauptfenster der BW Hierarchy Komponente besteht aus zwei Unterabschnitten:
- Selected Hierarchy
- Preview

![Hierarchy Extractor](/img/content/xfa/xfa_hierarchy.png){:class="img-responsive"}

#### Hierarchy Extraction
Innerhalb des Unterabschnitts **Hierarchy Extraction** können Sie nach [SAP BW Hierarchien suchen](./bw-hierarchien/hierarchien-als-datenquelle-definieren). 
Verwenden Sie dafür **[Suche]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol).
Der Standartwert für das Feld *DateTo* ist 99991231. Um den Standardwert zu ändern, klicken Sie auf **[Run]** und überschreiben Sie den Wert. 

#### Preview
Der Unterabschnitt **Preview** [zeigt die Felder](./bw-hierarchien/hierarchien-als-datenquelle-definieren#echtzeitvorschau-der-ausgewählten-hierarchie-anzeigen) der ausgewählten SAP BW Hierarchie. Klicken Sie dafür auf **[Load Live Preview]**.

#### Schaltflächen
- **[Extraction Settings]** öffnet die [spezifischen Extraktionseinstellungen](./bw-hierarchien/hierarchie-extraktionseinstellungen) z.B. Darstellung oder Ebenenanzahl. <br>
- **[Load Live Preview]** lädt eine Vorschau der Hierarchie ohne eine Extraktion.

----

Weitere Informationen zum Arbeiten mit der Xtract Hierarchy Komponente finden Sie in den folgenden Unterabschnitten.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}