---
layout: page
title: BAPIs und RFC-Funktionsbausteine
description: BAPIs und RFC-Funktionsbausteine
product: xtract-rs
parent: xtract-rs-
childidentifier: bapis-und-rfc-funktionsbausteine
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /Xtract-RS-DE/default.aspx?pageid=bapis-und-rfc-funktionsbausteine
---

Mit Hilfe der BAPI-Datenquelle lassen sich BAPIs und Funktionsbausteine als Datenlieferanten nutzen (im Folgenden reden wir nur noch von BAPIs, gemeint sind aber genauso RFC-Funktionsbausteine).

Grundsätzlich lassen sich zwar alle BAPIs mit Xtract RS ansteuern, aber es sei an dieser Stelle empfohlen, BAPIs zu nehmen, die einen oder mehrere Eingangsparameter haben und genau eine Ausgabetabelle, die dann als Grundlage für ein Dataset dient. Behalten Sie diese Struktur im Hinterkopf wenn Sie einen eigenen Funktionsbaustein entwerfen.

![BAPI-1](/img/content/BAPI-1.png){:class="img-responsive"}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}