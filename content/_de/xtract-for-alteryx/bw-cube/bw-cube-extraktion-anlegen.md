---
ref: xfa-bw-cube-01
layout: page
title: BW Cube Extraktion Anlegen
description: BW Cube Extraction Anlegen
product: xtract-for-alteryx
parent: bw-cube
permalink: /:collection/:path
weight: 1
lang: de_DE
progressstate: 5
---
Die Komponente BW Cube kann verwendet werden, um Daten aus BW InfoProvidern (z.B. Cubes) direkt oder aus BW Queries zu extrahieren. Die BW Queries können in diesem Fall auf allen möglichen InfoProvidern basieren. <br>
Ein üblicher Ansatz für die Extraktion besteht darin, eine Abfrage zu erstellen, die Ihren Geschäftsanforderungen entspricht.

### Nach BW Cube oder Query suchen
1. Im Hauptfenster des Designers navigieren Sie zum Unterabschnitt **Cube or Query** und klicken Sie auf  **Search** (Lupensymbol). Das Fenster “Cube or Query Lookup” wird geöffnet.
![Cube Query search](/img/content/xfa/xfa_cube-query-look.png){:class="img-responsive"}
2. Geben Sie im Feld **Name** (1) den Namen des Query oder des BW Cubes / InfoProviders ein. Die Verwendung von Wildcards (*) ist unterstützt. 
3. Definieren Sie den Typ des gesuchten Objekts im Feld **Type** (2).
4. Klicken Sie auf **Search** (Lupensymbol) (3).
5. Wählen Sie (4) das Objekt aus der Liste und klicken Sie auf **[OK]** (5) zum Bestätigen.

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
- [Query Variablen](./bw-cube-variables)
