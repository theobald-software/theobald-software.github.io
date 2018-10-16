---
ref: xr-queries-03
layout: page
title: Select Options füllen
description: Select Options füllen
product: xtract-rs
parent: queries
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-RS-DE/default.aspx?pageid=select-options-fuellen
---

In dem Selektionsbildschirm einer Query haben Sie im SAP die Möglichkeit, komplexe Einschränkungen zu hinterlegen. Das geht im Xtract RS Query genauso. Klicken Sie im Editor im gewünschten Parameter auf den *Edit*-Link.

![Query-Select-Options-001](/img/content/Query-Select-Options-001.png){:class="img-responsive"}


Das folgende Fenster öffnet sich:

![Query-Select-Options-002](/img/content/Query-Select-Options-002.png){:class="img-responsive"}

Die Spalte Sign definiert, ob die Ergebnismenge der Einschränkung eingeschlossen (Include) oder ausgeschlossen wird (Exclude). Die Spalte Option ist ein Operator (z.B. =,> oder [] für von ... bis). In den Spalten *Low Value* und *High Value* sind dann die jeweiligen Werte einzutragen. Der Screenshot oben beispielsweise selektiert alle Wert von AA bis UA (Include, [] -> von ... bis), außer den Einzelwert LH (Exclude, =). Selbstverständlich können für die Wertfelder auch Variablen verwendet werden (mit @, wie bei der Tabellenextraktion).