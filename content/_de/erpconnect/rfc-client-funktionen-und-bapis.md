---
ref: erpconnect-03
layout: page
title: BAPIs/Funktionsbausteine
description: RFC-Client-Funktionen und BAPIs
product: erpconnect
parent: erpconnect
childidentifier: rfc-client-funktionen-und-bapis
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=rfc-client-funktionen-und-bapis
---

Funktionsbausteine sind einzelne Funktionen, die im SAP Function Builder (Transaktion SE37) verwaltet und in ABAP entwickelt werden. Wenn ein Funktionsbaustein das Attribut Remotefähig hat, kann er von einem externen System per RFC-Protokoll aufgerufen werden. Genau das erledigt ERPConnect sehr komfortabel und einfach. 

Jeder Funktionsbaustein besteht aus Im- und Export-Parametern, die - wie der Name schon sagt - entweder an den Baustein übergeben oder von ihm zurückgegeben werden. Außer diesen skalaren Parametern gibt es noch einen Austausch von Tabellen. Die Grafik unten zeigt, wie der Klassenzusammenhang von ERPConnect dieser Situation gerecht wird.

In den Beispielen erfahren Sie, wie die Objekthierarchie aufgebaut wird und dann der Aufruf an das SAP-System erfolgt. 


![ERPConnect-Client-Function-Architecture](/img/content/ERPConnect-Client-Function-Architecture.png){:class="img-responsive"}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
