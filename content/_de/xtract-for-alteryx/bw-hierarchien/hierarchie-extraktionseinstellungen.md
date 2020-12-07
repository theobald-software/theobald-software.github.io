---
ref: xfa-bwhier-settings
layout: page
title: BW Hierarchy - Extraktionseinstellungen
description: Extraktionseinstellungen
product: xtract-for-alteryx
parent: bw-hierarchien
permalink: /:collection/:path
weight: 2
lang: de_DE
progressstate: 5
---

### Extraktionseinstellungen öffnen
1. Im Hauptfenster des Designers klicken Sie auf **Extraction Settings**. Der Dialog "Hierarchy Settings" wird geöffnet.
![Hierarchies-Parent-Child](/img/content/Hierarchy-settings.png){:class="img-responsive"}
2. Ändern Sie die Einstellungen, falls erforderlich.
3. Klicken Sie auf **[OK]** zum Bestätigen.

### Hierachy Einstellungen 
Der Dialog “Hierarchy Settings” besteht aus zweu Unterabschnitten:
- Extraction Settings
- Natural Representation Settings

#### Extraction Settings (Extraktionseinstellungen)
**Representation:** 
- **ParentChild**: Die Hierarchie ist im Parent-Child-Format repräsentiert.
![Hierarchies-Parent-Child](/img/content/Hierarchies-Parent-Child.png){:class="img-responsive"}
- **Natural**: Die SAP Parent-Child-Hierarchie wird in eine reguläre Hierarchie transformiert.

**Remove Leading Zeros (Führende Nullen entfernen)**<br>
Entfernt alle führende Nullen (mittels ALPHA-Conversion) in der Spalte *NodeName*.
NodeName kann dann in einer Join-Bedingung mit dem entsprechenden Dimension-Key einer BW Cube-Extraktion verwendet werden.<br>
Die Umwandlung funktioniert auch für zusammengesetzte InfoObjects.<br> 
Beispiel: 0CO_AREA (1000) und 0COSTCENTER (0000003100) wird zu 1000/3100.

**Fetch description texts (Beschreibungstexte holen)**<br>
Setzt das *NodeText* auf den Knotentext basierend auf den Einstellungen der Systemsprache.

#### Natural Representation Settings

{: .box-note}
**Hinweis:** Der Unterabschnitt **Natural Representation Settings** ist nur dann aktiv, wenn das Feld **Representation** hat den Wert *Natural*.

**Level Count** <br>
Definiert die maximale Anzahl von Ebenen. 
Das folgende Beispiel demonstriert die zuvor gezeigte Hierarchie mit fünf Ebenen und in der Darstellung gesetzt auf *Natural*.
![Hierarchy-Parent-Child-Natural](/img/content/Hierarchy-Parent-Child-Natural.png){:class="img-responsive"}

**Fill empty levels**  <br>
Kopiert das unterste Element der Hierarchie bis zur letzten Ebene.
Das folgende Beispiel demonstriert die zuvor gezeigte Hierarchie mit der aktivierten Option *Repeat Leaves*.
![Hierarchy-Parent-Child-Repeat](/img/content/Hierarchy-Parent-Child-Repeat.png){:class="img-responsive"}

**Description texts for levels**<br>
Setzt das Output-Feld *LevelTextN* für jedes Feld *LevelN* , welches den Text beinhaltet, der auf den Einstellungen der Systemsprache basiert.

**Leaves only**<br>
Liefert nur Leaves als Datensätze.
![Hierarchy-Parent-Child-Repeat](/img/content/Hierarchy-leaves-only.png){:class="img-responsive"}

*****
#### Weiterführende Links
- [About SAP BW Hierarchies](https://help.sap.com/saphelp_scm41/helpdata/en/90/fd36709c6411d5b4000050dadfb23f/content.htm?no_cache=true)


