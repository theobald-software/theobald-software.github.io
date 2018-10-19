---
ref: xtract-is-06
layout: page
title: Xtract IS Table Join
description: Xtract IS Table Join
product: xtract-is
parent: xtract-is
childidentifier: xtract-is-table-join
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=xtract-is-table-join
---

Die Table Join-Komponente dient dazu, mehrere Tabellen (und Views) auf SAP-Seiten zusammenzufassen (Join).  <br>
Mögliche Szenarien dafür wären, Tabellen für Kopf- und Postionsdaten (z.B. einer Bestellung oder Rechnung) oder Tabellen für Stammdaten und Texte (z.B. eines Materials) zu joinen. <br>
Dazu wird dynamisch der entsprechende SQL-Befehl generiert und auf dem SAP-Server ausgeführt. 
Die Komponente unterstützt darüber hinaus die Definition von Aggregat-Funktionen, Where- und Having-Bedingungen. 

Voraussetzung dafür ist die Installation eines Z-Funktionssbausteins auf der SAP-Seite. 

*Bemerkung*: Cluster- und Pool-Tabellen werden von der Table Join-Komponente nicht unterstützt, können aber wie gewohnt mit der Table-Komponente extrahiert werden. 
 

**SSIS-Version**

Die Komponente Table Join setzt die Version SQL Server 2012 Integration Services (SSIS) voraus. Ältere Versionen werden nicht unterstützt. 

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}