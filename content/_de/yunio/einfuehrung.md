---
ref: yunio-03
layout: page
title: Einführung in YunIO
description: Einführung
product: yunio
parent: yunio
childidentifier: einfuehrung
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=einfuehrung
progressstate: 5
---

### Grundfunktionalität - Architektur

Extraktionen sind die Hauptentitäten in YunIO. Eine [Extraktion](./erste-schritte/eine-neue-extraktion-anlegen) ist eine Kombination aus einer Quelle (SAP-System), 
einer Destination (Xtract Unversal Seite) / Zielumgebung (z.B. SQL-Server) (Kundenseitig) und einen definierten Extraktionstyp (z.B. [Table](./table)).


Eine Quelle stellt eine [Verbindung zu einem SAP-System](./einfuehrung/sap-verbindungen-anlegen) dar. Eine [Destination](./destinationen) repräsentiert eine Verbindung zu einer Zielumgebung.
Die Verwendung von YunIO umfasst zwei Hauptphasen:
- Entwurfsphase
- Ausführungsphase

![xu-arch-01](/img/content/xu/xu-arch-01.png){:class="img-responsive"}

Während der Designphase kann der Benutzer Extraktionen, Quellen und Destinationen erstellen und modifizieren; und die [Servereinstellungen](./server/server_einstellungen) mit Hilfe des [Designers](./erste-schritte/designer-overview) anpassen. 

Während der Ausführungsphase kann der Benutzer die in der Designphase entworfenen Extraktionen ausführen. Die Ausführung der Extraktionen findet auf dem [Server](./server) statt. Abhängig von der Destination kann eine Ausführung entweder durch das [XU-Kommandozeilen-Tool - xu.exe oder xu.elf](./extraktionen-ausfuehren-und-einplanen/call-via-commandline) oder durch den Datenkonsumenten ausgelöst werden. Mehr Details dazu im Abschnitt [Pull- und Push-Destinationen](./destinationen#pull--und-push-destinationen). 


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
