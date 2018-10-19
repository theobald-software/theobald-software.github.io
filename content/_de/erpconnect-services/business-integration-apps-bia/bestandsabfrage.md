---
ref: ecs-business-integration-apps-01
layout: page
title: Bestandsabfrage
description: Bestandsabfrage
product: erpconnect-services
parent: business-integration-apps-bia
childidentifier: bestandsabfrage
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bestandsabfrage
---

**Bestandsabfrage** (Stockinfo) ist eine mit ERPConnect Services entwickelte Business Integration App für SharePoint.<br>
Mit der Anwendung haben die Anwender die Möglichkeit, über eine einfach aufgebaute Suchmaske Lagerbestände in SAP zu einer bestimmten Materialnummer abzufragen und sich über Materialbewegungen zu informieren. 

Die Lösung wird als Installerpaket ausgeliefert und kann damit bequem auf Ihrem SharePoint Server installiert werden.


**Aufbau der App**

Der Aufbau der App ist denkbar einfach gehalten. Es existieren die vier Eingabefelder *Material, Buchungskreis, Werk und Lagerort*, über die Bestandsabfragen gesteuert werden können. Der Materialnummer kommt dabei eine Schlüsselfunktion zu: Diese muss zwingend hinterlegt werden, um Treffer angezeigt zu bekommen. Die übrigen Felder dienen dabei zur weiteren Einschränkung der Treffermenge. 

![ECS-BIA-StockInfo1](/img/content/ECS-BIA-StockInfo1.png){:class="img-responsive"}

**Durchführung einer Bestandsabfrage**

Zur Durchführung einer Bestandsabfrage gibt man im Feld *Material* die gewünschte Materialnummer ein. Alternativ dient das Feld auch als Suchmaske, in der zum Beispiel auch nach der Materialbezeichung gesucht werden kann. Hat man das gewünschte Material ausgewählt, stehen mit den Feldern *Buchungskreis, Werk und Lagerort* noch zusätzliche Selektionskriterien zur Einschränkung der Treffermenge zur Verfügung. Mit dem Lupensymbol auf der rechten Seite wird die Abfrage dann gestartet. 

Man erhält – falls für die gewählte Materialnummer Bestände existieren – eine nach Buchungskreis gestaffelte Aufstellung der Materialbestände. Die Aufstellung ist hierarchisch gegliedert und kann ausgehend vom Buchungskreis auf die untergeordneten Ebenen Werk und Lagerort weiter aufgeklappt werden. Die Bestände werden dabei auf jeder Ebene getrennt nach ihrem jeweiligen Status aufgelistet. Der Anwender erhält so einen schnellen und klar strukturierten Überblick über alle notwendigen Bestandsinformationen.   

![ECS-BIA-StockInfo2](/img/content/ECS-BIA-StockInfo2.png){:class="img-responsive"}

Über das Chart-Symbol lässt sich für die Trefferliste optional noch eine grafische Darstellung als Balkendiagramm ausgeben. Den einzelnen Bestandsarten (In Transf., On-Order, Unrestr. Use, etc.) sind dabei unterschiedliche Farben zugewiesen. Damit wird die Verteilung der Bestände auf unterschiedliche Buchungskreise und Bestandsarten grafisch veranschaulicht.

![ECS-BIA-StockInfo3](/img/content/ECS-BIA-StockInfo3.png){:class="img-responsive"}

![ECS-BIA-StockInfo4](/img/content/ECS-BIA-StockInfo4.png){:class="img-responsive"}

Über das Lastwagen-Symbol auf der rechten Seite der Trefferliste oder in der Menüleiste können für jeden Materialbestand zusätzlich noch die Materialbewegungen angezeigt und die Ausgabeliste gedruckt werden. 

![ECS-BIA-StockInfo5](/img/content/ECS-BIA-StockInfo5.png){:class="img-responsive"}

![ECS-BIA-StockInfo6](/img/content/ECS-BIA-StockInfo6.png){:class="img-responsive"}

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
