---
ref: bc-bw-infocubes-and-bex-queries-05
layout: page
title: Metadaten-Refresh
description: Metadaten-Refresh
product: board-connector
parent: bw-infocube-und-bex-queries
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=metadaten-refresh
---

Bei sehr komplexen Cubes oder Queries kann es möglich sein, dass sich der Cube oder die Query nach der Definition der Extraktion noch verändert (z.B. weil jemand noch eine zusätzliche Kennzahl mit aufnimmt). In diesem Fall ist es nicht nötig, die ganze Extraktion neu zu definieren, klicken Sie nur auf den Link *Refresh Metadata*. 

![BWCube-MetaData-Refresh](/img/content/BWCube-MetaData-Refresh.png){:class="img-responsive"}

Dann werden die bestehenden Metadaten um die neuen Attribute / Kennzahlen ergänzt.

ACHTUNG: Bei Extraktionen, die mit einer BOARD Connector Version vom Februar 2015 oder früher erstellt wurden, haken Sie bitte das Feld Legacy metadata retrieval in den Extraction Settings an. Siehe auch Kapitel Extraktionseinstellungen.