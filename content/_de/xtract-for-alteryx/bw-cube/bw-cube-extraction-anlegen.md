---
ref: xfa-bw-cube-01
layout: page
title: Eine BW Cube Extraktion definieren
description: BW Cube Extraction Anlegen
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 1
lang: de_DE
progressstate: 5
---
Der folgende Abschnitt beschreibt die Anwendung der BW Cube Komponente.<br>

### Eine BEx Query oder einen BW Infofrovider finden
1. Klicken Sie im Hauptfenster der Komponente auf  **[Suche]** (Lupensymbol). Das Fenster “Cube and Query Lookup” wird geöffnet.
![Cube Query search](/img/content/xfa/xfa_cube-query-look.png){:class="img-responsive"}
2. Geben Sie im Feld **Name** (1) den Namen eines BEx-Queries oder eines InfoProviders ein. Verwenden Sie Wildcards (*), falls notwendig.
3. Definieren Sie den Extraktor und Typ des gesuchten Objekts den Feldern **Extractor** und **Type** (2).<br>
- **Extractor** definiert, ob Daten mit dem OLAP BAPI Interface (MADX) oder dem nativen BICS Interface extrahiert werden. BICS befindet sich noch in der Beta-Phase.
- **Type** spezifiziert, ob nach einer BEx-Query oder einem InfoProvider gesucht wird.
4. Klicken Sie auf **[Suche]** (Lupensymbol) (3).
5. Wählen Sie (4) das Objekt aus der Liste und klicken Sie auf **[OK]** (5) zum Bestätigen. <br>


### Auswählen von Messwerten ( Key Figures), Abmessungen und Eigenschaften
Wenn ein Objekt ausgewählt ist, wird im Hauptfenster der Komponente auf der linken Seite eine Baumstruktur angezeigt. Die Baumstruktur stellt die Metadaten der Query (oder des InfoProviders) dar. <br>
![Query Structure](/img/content/xfa/xfa_cube-query-select.png){:class="img-responsive"}
Das erste Verzeichnis enthält alle Messwerte (Kennzahlen) (1). Die folgenden Verzeichnisse entsprechen den Dimensionen und enthalten oft zusätzliche Dimensionseigenschaften (2). <br>
1. Wählen Sie die Kennzahlen, Dimensionen und Eigenschaften für eine Extraktion.
2. Klicken Sie innerhalb des Kennzahlenverzeichnisses auf den Pfeil, um die verfügbaren Einheiten zu öffnen. Wählen Sie die Einheiten aus, falls erforderlich.
3. Klicken Sie auf **[Load live preview]** um die Ausgabe mit Daten aus dem BW anzuzeigen. Wenn eine Einheit ausgewählt ist (z.B. Währung), wird das entsprechende Feld in der Echtzeitvorschau angezeigt.

{: .box-note }
**Hinweis:** Für jede ausgewählte Dimension oder Eigenschaft wird im Ergebnis eine Kennzahl und eine Einheit angezeigt. 

### Einstellen eines Dimensionsfilters 
1. Klicken Sie mit der rechten Maustaste auf eine Dimension. Die Schaltfläche **[Edit Filter]** erscheint.
![Query Filter](/img/content/xfa/xfa_cube-query-filter.png){:class="img-responsive"}
2. Klicken Sie **[Edit Filter]**. Das Fenster "Member Filter" wird geöffnet. Sie können die *Einzelnen Werte (Single Values)* (linke Seite des Fensters) setzen und / oder *Wertebereiche (Value Ranges)* (rechte Seite des Fensters) definieren.
![Query Filter Define](/img/content/xfa/xfa_cube-query-filter-def.png){:class="img-responsive"}
3. Wählen Sie einen einzelnen Wert (3)oder klicken Sie auf **[Add]** (4) um Wertebereiche hinzuzufügen. 
4. Definieren Sie die Werte für die Filterung. Löschen Sie ggf. die Filter (Mülltonnensymbol).
5. Klicken Sie auf **[OK]** zum Bestätigen. Das Fenster "Member Filter" wird geschlossen.
6. Wenn ein Filter definiert ist, erscheint ein Filtersymbol in der Metadatenstruktur.

****
#### Weiterführende Links
- [Allow external access to BW Queries](https://kb.theobald-software.com/general/allow-external-access-to-bw-queries).
- [Query Variablen](./bw-cube-variablen)
