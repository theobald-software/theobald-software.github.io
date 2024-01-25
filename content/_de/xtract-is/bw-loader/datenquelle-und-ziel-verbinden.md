---
ref: xi-bw-loader-03
layout: page
title: Datenquelle und Ziel verbinden
description: Datenquelle und Ziel verbinden
product: xtract-is
parent: bw-loader
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=datenquelle-und-ziel-verbinden
---
Die BW Loader Zielumgebung bietet innerhalb eines Packages genau eine Input-Pipeline. Verbinden Sie Ihre Datenquelle mit dieser Pipeline. Wenn ein Infopackage im Editor gewählt wurde (siehe [InfoPackages suchen](./infopackages-suchen)), können nun die Elemente der eingehenden Pipeline mit der Transferstruktur des Infopackages verbunden werden.<br>
Die drei zusätzlichen Textfelder sind ebenfalls zu füllen. Das Feld Gateway Host entspricht in der Regel der Netzwerk-Adresse Ihres BW-Systems. Der *Gateway Service* ist (fast) immer *sapgwXX, wobei XX* die Systemnummer ist. Die *Program ID* muss dem Eintrag im Quellsystem entsprechen. Falls Sie Ihre einzutragenden Werte nicht wissen, fragen Sie bitte in Ihrer Basis-Abteilung nach.

![XIS_BWL_Komponente](/img/content/XIS_BWL_Komponente.png){:class="img-responsive"}

Danach steht die Komponente bereit, um sie im Debug-Modus laufen zu lassen.