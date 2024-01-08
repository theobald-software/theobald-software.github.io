---
ref: xtract-for-alteryx-07
layout: page
title: Xtract Cube
description: BW Cube
product: xtract-for-alteryx
parent: xtract-for-alteryx
childidentifier: bw-cube
permalink: /:collection/:path
weight: 7
lang: de_DE

---
Der folgende Abschnitt beschreibt die Funktion der Xtract Cube-Komponente in Xtract for Alteryx. <br>
Die Xtract Cube Komponente kann verwendet werden, um die Daten aus SAP BW (BEx) Queries und InfoProviders (z.B. InfoCubes) zu extrahieren. 
Die Xtract Cube Komponente unterstützt zwei Extraktionsmodi: MDX und BICS (beta).

{: .box-warning}
**Warnung!** **Fehlende Berechtigungen**
Um die BW Cube Komponente zu verwenden, muss der Zugriff auf die entsprechenden Berechtigungsobjekte (RFC) in SAP verfügbar sein. 
Weitere Informationen finden Sie im Knowledge-Base-Artikel [SAP Zugriffsrechte: BW Query / BW Cube](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#bw-query--bw-cube).


{: .box-tip }
**Tipp:** Grundlagen zum Produkt sind im Abschnitt [Erste Schritte mit Xtract for Alteryx](./erste-schritte) beschrieben.

### Xtract Cube verwenden
{% include _content/de/alteryx-component-intro.md %}


### Funktionsübersicht
Das Hauptfenster der BW Cube Komponente besteht aus zwei Unterabschnitten und einigen  Schaltflächen:

- Cube orQuery
- Preview
![Cube Extractor](/img/content/xfa/xfa-cube-query-overview.png){:class="img-responsive"}

#### Cube or Query
Im Unterabschnitt **Cube or Query** können Sie über **[Suche]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol) nach BEx-Queries oder InfoProviders suchen.
Die Felder *Key Figures*, *Dimensions* und *Properties*, die für die Ausgabe ausgewäht werden können, werden in diesem Unterabschnitt angezeigt. 


#### Preview
Der Unterabschnitt **Preview** zeigt eine Echtzeit-Vorschau der ausgewählten BEx-Query oder des ausgewählten InfoProviders an. Klicken Sie dafür auf die Schaltfläche **[Load Live Preview]**.

#### Schaltflächen
- **[Extraction Settings]** öffnet die [Extraktionseinstellungen](./bw-cube/infocube-extraktionseinstellungen), z.B. **Paketgröße (Package Size)**, **Zeilenbegrenzung (Row Limit)** oder **Automatic Slicing Dimension**. <br>
- **[Load live preview]** lädt eine Echtzeitvorschau einer BEx-Query oder eines InfoProviders ohne eine Extraktion auszuführen.
- **[Show MDX]** zeigt das für die Selektion generierte MDX-Statement, das zur Laufzeit auf dem BW-System ausgeführt wird. Im BICS-Modus ist diese Schaltfläche nicht verfügbar. Um das MDX-Statement zu testen, können Sie die SAP-Transaktion *MDXTEST* verwenden.
- **[Edit Variables]** ermöglicht die Definition von [BEx Query-Variablen](./bw-cube/variablen). 
- **[Edit Runtime Parameters]** ermöglicht die Definition von [Laufzeitparametern](./bw-cube/edit-runtime-parameters). 

Weitere Informationen zum Arbeiten mit der Xtract Cube Komponente finden Sie in den folgenden Unterabschnitten.

---

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}