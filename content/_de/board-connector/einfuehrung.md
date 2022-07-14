---
ref: board-connector-03
layout: page
title: Einführung in BOARD Connector
description: Einführung
product: board-connector
parent: board-connector
childidentifier: einfuehrung
permalink: /:collection/:path
weight: 3
lang: de_DE
progressstate: 5
---
### Grundfunktionalität - Architektur

BOARD Connector für SAP ist eine Middleware-Komponente, die eine Datenextraktion aus SAP-Systemen ermöglicht, um die Daten in Board weiterzuverarbeiten.
Extraktionen sind die Hauptentitäten in BOARD Connector. Eine [Extraktion](./erste-schritte/eine-neue-extraktion-anlegen) ist eine Kombination aus einer [Verbindung zu einer Quelle (SAP-System)](./einfuehrung/sap-verbindungen-anlegen), 
einer Verbindung zu Board im Sinne einer Destination und einen definierten Extraktionstyp (z.B. [Table](./table)).

BOARD Connector besteht aus zwei Komponenten:
- Designer
- Server

![Architecture-01](/img/content/Architecture-01.png){:class="img-responsive"}

Während der Designphase kann der Benutzer Extraktionen, Quellen und die [Servereinstellungen](./server/server_einstellungen) mit Hilfe des [Designers](./erste-schritte/bc-designer-overview) erstellen, modifizieren und anpassen. 

Während der Ausführungsphase kann der Benutzer die in der Designphase entworfenen Extraktionen ausführen. Die Ausführung der Extraktionen findet auf dem [Server](./server) statt. 

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}

