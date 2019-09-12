---
ref: bc-introduction-01
layout: page
title: Architektur
description: Architektur
product: board-connector
parent: einfuehrung
permalink: /:collection/:path
weight: 1
lang: de_DE
---

BOARDConnector für SAP ist eine Middleware-Komponente, die es ermöglicht, Daten aus SAP-Systemen zu extrahieren, um sie dann iin BOARD weiterzuverarbeiten.

Im Wesentlichen besteht BOARD aus zwei Komponenten: Eine Server-Komponente BOARDConnector Server und eine Client-Komponente BOARDConnector Designer.

Die Server-Komponente ist für die eigentliche Extraktion zuständig. BOARD kommuniziert mit der Server-Komponente, und diese wiederum mit SAP. Der Designer wird für die Verwaltung der Extraktionen verwendet. Vom Designer besteht auch eine Verbindung direkt zum SAP. Dieser wird nicht für den Datentransport, sondern ausschließlich für die Metadatenabfrage während des Design-Prozesses verwendet. 


![Architecture-01](/img/content/Architecture-01.png){:class="img-responsive"}

 
BOARD ist ein Satz von insgesamt acht Extraktionstypen, die es ermöglichen, die komplette Brandbreite an unterschiedlichsten Anforderungen an eine SAP-Extraktion abzudecken:

**Table** extrahiert aus Tabellen und Views.

**Query** extrahiert aus Queries (nicht zu verwechseln mit den BEx-Queries, die von BW Cube abgedeckt werden)

**BAPI** extrahiert Daten aus BAPIs und RFC-Funktionsbausteinen.

**BW Cube** extrahiert flache Daten aus SAP BW InfoCubes und QueryCubes (auch bekannt als BEx-Queries).

**Hierarchy** extrahiert Hierarchien aus SAP BW / BI.

**Open Hub Service** extrahiert InfoSpokes und OHS destinations.

**DeltaQ** extrahiert DataSources (OLTP).

**Report** führt ABAP-Reports aus.
