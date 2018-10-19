---
ref: xi-q-delta-07
layout: page
title: Daten- und Protokoll-Output
description: Daten- und Protokoll-Output
product: xtract-is
parent: xtract-is-deltaq
permalink: /:collection/:path
weight: 7
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=daten-und-protokoll-output
---

Jede DeltaQ-Quelle hat zwei Outputs: Einen für die Daten (DeltaQDataOutput) und einen für das Protokoll (DeltaQLogOutput). Der beste Weg ist, das Protokoll ebenfalls mit in das Datenziel wegzuschreiben. Insbesondere bei Delta-Mechanismen kann ein ausführliches Protokoll bei der Fehlersuche sehr hilfreich sein. Der Daten-Output entspricht den angehakten Spalten (plus die RequestID), der Protokoll-Output hat immer dieselben Spalten. Folgender Screenshot zeigt das Protokoll in der DatenViewer-Ansicht:

![DeltaQ-DataOutput-01](/img/content/DeltaQ-DataOutput-01.png){:class="img-responsive"}
