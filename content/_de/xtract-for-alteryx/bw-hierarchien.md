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

{% include _content/de/hierarchies-recommendation.md %} 

{: .box-tip }
**Tipp:** Grundlagen zum Produkt sind im Abschnitt [Erste Schritte mit Xtract for Alteryx](./erste-schritte) beschrieben.

### Xtract Hierarchy verwenden
{% include _content/de/alteryx-component-intro.md %}

### Funktionsübersicht
Das Hauptfenster der BW Hierarchy Komponente besteht aus zwei Unterabschnitten:
- Selected Hierarchy
- Preview

![Hierarchy Extractor](/img/content/xfa/xfa_hierarchy.png){:class="img-responsive"}

#### Selected Hierarchy
Innerhalb des Unterabschnitts **Hierarchy Extraction** können Sie nach [SAP BW Hierarchien suchen](./bw-hierarchien/hierarchien-als-datenquelle-definieren). 
Verwenden Sie dafür **[Suche]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol).
Der Standartwert für das Feld *DateTo* ist 99991231.

#### Preview
Der Unterabschnitt **Preview** [zeigt die Felder](./bw-hierarchien/hierarchien-als-datenquelle-definieren#echtzeitvorschau-der-ausgewählten-hierarchie-anzeigen) der ausgewählten SAP BW Hierarchie. Klicken Sie dafür auf **[Load Live Preview]**.

#### Schaltflächen
- **[Extraction Settings]** öffnet die [spezifischen Extraktionseinstellungen](./bw-hierarchien/hierarchie-extraktionseinstellungen) z.B. Darstellung oder Ebenenanzahl. <br>
- **[Load Live Preview]** lädt eine Vorschau der Hierarchie ohne eine Extraktion.

Weitere Informationen zum Arbeiten mit der Xtract Hierarchy Komponente finden Sie in den folgenden Unterabschnitten.

----

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
