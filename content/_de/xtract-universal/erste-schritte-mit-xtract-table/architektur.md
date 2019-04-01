---
ref: xu-getting-started-table-01
layout: page
title: Architektur
description: Architektur
product: xtract-universal
parent: erste-schritte-mit-xtract-table
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=architektur
---

Xtract Universal ist eine Middleware-Komponente, die es ermöglicht, Daten aus SAP-Systemen zu extrahieren, um sie dann in verschiedene Zielumgebungen weiterzuverarbeiten.

Im Wesentlichen besteht Xtract Universal aus zwei Komponenten: Eine Server- und eine Designer-Komponente.

Die Server-Komponente ist für die eigentliche Extraktion zuständig. Die Zielumgebung kommuniziert mit der Server-Komponente, und diese wiederum mit SAP. <br>
Der Xtract Designer wird für die Verwaltung der Extraktionen und Verbindung und für die Konfiguration verwendet. Vom Designer besteht auch eine Verbindung direkt zum SAP. Dieser wird nicht für den Datentransport, sondern ausschließlich für die Metadatenabfrage während des Design-Prozesses verwendet. 

![xu-arch-01](/img/content/xu-arch-01.jpg){:class="img-responsive" width= "1000px"}

### Extraktionstypen 

Xtract Universal ist ein Satz von insgesamt zehn Extraktionstypen, die es ermöglichen, die komplette Brandbreite an unterschiedlichsten Anforderungen an eine SAP-Extraktion abzudecken.

### Extraktion aus ERP-Systemen

![xu-arch-03](/img/content/xu-arch-03.jpg){:class="img-responsive" width= "1000px"}

**Table** extrahiert aus Tabellen und Views.

**Table Join** erlaubt es, mehrere Tabellen miteinander zu verknüpfen. 
Der Join-Vorgang findet dann schon innerhalb des SAP-Systems statt. Es ist also nicht mehr notwendig, jede Tabelle einzeln herunterzuladen.

**Query** extrahiert aus Queries (nicht zu verwechseln mit den BEx-Queries, die von BW Cube abgedeckt werden).

**BAPI** extrahiert Daten aus BAPIs und RFC-Funktionsbausteinen.

**Report** extrahiert das Ergebnis eines ABAP-Reprts.

**DeltaQ** extrahiert Datasources (OLTP) und Extraktoren aus SAP ERP und ECC.

### Extraktion aus BW-Systemen

![xu-arch-04](/img/content/xu-arch-04.jpg){:class="img-responsive" width= "1000px"}

**BW Cube** extrahiert flache Daten aus SAP BW InfoCubes und QueryCubes (auch bekannt als BEx-Queries).

**Hierarchy** extrahiert Hierarchien aus SAP BW / BI.

**Open Hub Service** extrahiert InfoSpokes und OHS destinations.

**DeltaQ** extrahiert Export DataSources aus SAP BW / BI.

### Instant Data Warehousing

Die Idee des Instant Datawarehousing mit Xtract Universal besteht darin, das Design des Ladeprozesses so einfach und damit so zeitsparend wie irgend möglich zu gestalten.

![xu-arch-02](/img/content/xu-arch-02.jpg){:class="img-responsive" width= "1000px"}

Ganz einfach lässt sich das jeweilige Zielobjekt automatisiert aus dem SAP-Quellobjekt erstellen. Die Metadaten des Objektes werden dabei optimal und automatisch in die Zielumgebung umgesetzt. Eine Kundennummer, die beispielsweise im SAP 10 Stellen hat, wird im Zielsystem immer noch 10 Stellen haben. Ein Wertfeld mit drei Nachkommastellen verändert seine Genauigkeit nicht. Dieses Verfahren bezeichnet man im Allgemeinen als Typsicherheit und ist beim Instant Datawarehousing konsequent umgesetzt.

Genauso wie der Automatismus zur Umsetzung der Metadaten gelingt die Verarbeitung der Dateninhalte. Im einfachen Fall eines Full Loads wird das SAP-Objekt als Ganzes repliziert.<br> 
Noch spannender ist die inkrementelle Delta-Beladung, also die Beschränkung des Downloads auf die Dateninhalte, die sich seit dem letzten Download geändert haben oder neu hinzugekommen sind. <br>
Die zu ladenden Daten werden dann gegen die verbucht, die bereits aus älteren Läufen im Ziel vorhanden sind. Die Verbuchung kann entweder wieder automatisch geschehen oder je nach Anforderung mit individuellen Erweiterungen im Ladeprozess versehen werden.

### Destinations / Zielumgebungen 

Xtract Universal unterstützt eine ganze Reihe von Systemen als Ziel der Extraktion, siehe [Zielumgebungen](../xu-zielumgebungen).

