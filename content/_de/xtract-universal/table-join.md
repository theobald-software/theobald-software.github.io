---
ref: xtract-universal-11
layout: page
title: Table Join
description: Table Join
product: xtract-universal
parent: xtract-universal
childidentifier: table-join
permalink: /:collection/:path
weight: 11
lang: de_DE
---

{: .box-warning }
**Warnung! Veraltete Komponente** 
Ab [Xtract Universal Version 4.0](https://kb.theobald-software.com/release-notes/XtractUniversal-4.0.0.html) ist die Table Join Komponente obsolet.<br>
Nutzen sie die Table Join Funktionalität der neuen [Table-](./table/table-joins)Komponente.


Die Table Join-Komponente dient dazu, mehrere Tabellen (und Views) auf SAP-Seite zusammenzufassen (Join) und zu extrahieren.  
Mögliche Szenarien dafür sind Tabellen für Kopf- und Postionsdaten (z.B. einer Bestellung oder Rechnung) oder Tabellen für Stammdaten und Texte (z.B. eines Materials) zu joinen.
Dazu wird dynamisch der entsprechende SQL-Befehl generiert und auf dem SAP-Server ausgeführt. 
Die Komponente unterstützt darüber hinaus die Definition von Aggregat-Funktionen, WHERE- und HAVING-Bedingungen. 

Voraussetzung dafür ist die Installation eines [Z-Funktionssbausteins](./sap-customizing/funktionsbaustein-fuer-table-extraktion) auf der SAP-Seite. 

{: .box-note }
**Hinweis:** Cluster- und Pool-Tabellen werden von der Table Join-Komponente nicht unterstützt, können aber wie gewohnt mit der Table-Komponente extrahiert werden. 

Beachten Sie, dass dieser Abschnitt nur die Beschreibung der Anwendung der Table Join-Komponente von Xtract Universal enthält. Das Wissen über die grundsätzliche Funktionsweise von Xtract Universal wird in diesem Abschnitt vorausgesetzt. 
Die Grundlagen von Xtract Unviversal werden im Abschnitt [Erste Schritte mit Table](./erste-schritte-mit-table) beschrieben.


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}