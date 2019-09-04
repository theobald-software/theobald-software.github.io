---
ref: board-connector-08
layout: page
title: Table Join
description: Table Join
product: board-connector
parent: board-connector
childidentifier: table-join
permalink: /:collection/:path
weight: 8
lang: de_DE
---

Die Table Join-Komponente dient dazu, mehrere Tabellen (und Views) auf SAP-Seite zusammenzufassen (Join).  <br>
Mögliche Szenarien dafür wären, Tabellen für Kopf- und Postionsdaten (z.B. einer Bestellung oder Rechnung) oder Tabellen für Stammdaten und Texte (z.B. eines Materials) zu joinen. <br>
Dazu wird dynamisch der entsprechende SQL-Befehl generiert und auf dem SAP-Server ausgeführt. <br>
Die Komponente unterstützt darüber hinaus die Definition von Aggregat-Funktionen, Where- und Having-Bedingungen. 

Voraussetzung dafür ist die Installation eines Z-Funktionssbausteins auf der SAP-Seite. 

*Bemerkung*: Cluster- und Pool-Tabellen werden von der Table Join-Komponente nicht unterstützt, können aber wie gewohnt mit der Table-Komponente extrahiert werden. 

**Achtung!!** Bitte beachten Sie, dass dieser Abschnitt nur die Anwendung der Table Join-Komponente enthält. Alle anderen Grundlagen entnehmen Sie bitte dem Abschnitt [Erste Schritte mit Table](./erste-schritte-mit-xtract-table) . Das Wissen über die grundsätzliche Funktionsweise des BOARD Connectors wird in diesem Kapitel vorausgesetzt!

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}