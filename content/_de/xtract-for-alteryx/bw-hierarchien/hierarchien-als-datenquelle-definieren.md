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

1. Im Hauptfenster des Designers klicken Sie auf  **[Suche]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol). Das Fenster "Hierarchy Lookup" wird geöffnet.
2. Im Feld **Hierarchy Name** (1) geben Sie den Namen einer Hierarchie ein. Alternativ können Sie im Feld **InfoObject** nach InfoObjects suchen. Verwenden Sie Wildcards (*), falls notwendig.
![Look Up Hierarchy](/img/content/extractors.bwhier/Hierarchy-Search-01.png){:class="img-responsive"}
3. Klicken Sie auf **[Suche]** ( ![magnifying-glass](/img/content/icons/magnifying-glass.png) Symbol) und wählen Sie den gewünschten Extraktor aus der angezeigten Liste (2).
4. Klicken Sie auf **[Select]** zum Bestätigen.


### Ausgabe Formatieren
1. Klicken Sie auf **[Extraction Settings]** (3), um das Ausgabeformat der Hierarchie zu definieren, siehe [Extraktionseinstellungen](./hierarchie-extraktionseinstellungen).
2. Klicken Sie auf **[Load live preview]** (4), um eine Echtzeitvorschau anzuzeigen, ohne eine Extraktion auszuführen.<br>
![Define-Data-Source-Hierarchy](/img/content/extractors.bwhier/Define-Data-Source-Hierarchy.png){:class="img-responsive"}
3. Optional: Der Standardwert für **DateTo** ist 99991231. Um den Wert zu ändern, verwenden Sie einen [Parameter](../parametrisierung).

****
#### Weiterführende Links
- [BW Hierarchy Settings](./hierarchie-extraktionseinstellungen)
- [SAP Online Help - Uploading Hierarchies from Flat Files](https://help.sap.com/saphelp_scm700_ehp02/helpdata/en/fa/e92637c2cbf357e10000009b38f936/frameset.htm)
