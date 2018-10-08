---
layout: page
title: Xtract IS BW Loader
description: Xtract IS BW Loader
product: xtract-is
parent: xtract-is
childidentifier: bw-loader
permalink: /:collection/:path
weight: 14
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=bw-loader
---

Die Xtract IS BW Loader Komponente ist im Gegensatz zu den anderen Komponenten ein Datenflussziel, keine Quelle. Um sie zu nutzen, ziehen Sie das entsprechende Element aus der Toolbox in den Datenflusstask.

![BWLoader](/img/content/BWLoader.png){:class="img-responsive"}

Das BW Loader Ziel hat immer genau eine Input-Pipeline, die innerhalb des Datenflusses angedockt werden muss. Die Elemente der Input-Pipeline können dann später auf die Transferstruktur gemappt werden.

Der BW Loader unterstützt sowohl den 3.x (InfoSources) als auch den 7.x (DataSources) Datenfluss.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}