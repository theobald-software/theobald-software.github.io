---
ref: board-connector-03
layout: page
title: Einführung
description: Einführung
product: board-connector
parent: board-connector
childidentifier: einfuehrung
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=einfuehrung
---

Dieser Abschnitt bietet einen Überblick über die Architektur vom BOARD Connector und führt in die Installation und Benutzung ein.
BOARDConnector für SAP ist eine Middleware-Komponente, die es ermöglicht, Daten aus SAP-Systemen zu extrahieren, um sie dann in BOARD weiterzuverarbeiten.

Im Wesentlichen besteht BOARD aus zwei Komponenten: Eine Server-Komponente BOARDConnector Server und eine Client-Komponente BOARDConnector Designer.

Die Server-Komponente ist für die eigentliche Extraktion zuständig. BOARD kommuniziert mit der Server-Komponente, und diese wiederum mit SAP. Der Designer wird für die Verwaltung der Extraktionen verwendet. Vom Designer besteht auch eine Verbindung direkt zum SAP. Dieser wird nicht für den Datentransport, sondern ausschließlich für die Metadatenabfrage während des Design-Prozesses verwendet. 


![Architecture-01](/img/content/Architecture-01.png){:class="img-responsive"}

 
BOARD ist ein Satz von insgesamt acht Extraktionstypen, die es ermöglichen, die komplette Brandbreite an unterschiedlichsten Anforderungen an eine SAP-Extraktion abzudecken:

**Table** extrahiert aus Tabellen und Views.

**Query** extrahiert aus Queries (nicht zu verwechseln mit den BEx-Queries, die von BW Cube abgedeckt werden)

**BAPI** extrahiert Daten aus BAPIs und RFC-Funktionsbausteinen.

**BW Cube** extrahiert flache Daten aus SAP BW InfoCubes und QueryCubes (auch bekannt als BEx-Queries).

**Hierarchy** extrahiert Hierarchien aus SAP BW / BI.

**Open Hub Service** extrahiert InfoSpokes und OHS Destinationen.

**DeltaQ** extrahiert DataSources (OLTP).

**Report** führt ABAP-Reports aus.
{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
