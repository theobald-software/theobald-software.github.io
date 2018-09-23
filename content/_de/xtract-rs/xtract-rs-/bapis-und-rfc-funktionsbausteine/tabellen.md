---
layout: page
title: Tabellen
description: Tabellen
product: xtract-rs
parent: bapis-und-rfc-funktionsbausteine
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-RS-DE/default.aspx?pageid=tabellen
---

Tabellen können sowohl in den Baustein hinein, als auch aus ihm heraus 'fließen'. Im unteren Bereich des Editors können Sie für jede Tabelle des BAPIs einen Input- und OutputType definieren.

Um eine Tabelle vor dem Aufruf zu füllen, stellen Sie den Input Type von Skip auf Static. Danach können Sie mit Hilfe des *Edit*-Links einen Dialog öffnen, um die Tabelle zu füllen.

Der Output Type definiert, ob die zurückgegebene Tabelle verworfen werden soll (*Skip*) oder ob sie Grundlage für das DataSet werden soll (*Dataset*).

Da eine Datenquelle aufgrund der Architektur der Reporting Services nur genau eine tabellenartige Ausgabe haben kann, kann auch nur genau eine Tabelle auf *Dataset* stehen.

![BAPI-Table](/img/content/BAPI-Table.png){:class="img-responsive"}


