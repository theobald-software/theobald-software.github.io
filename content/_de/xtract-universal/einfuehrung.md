---
ref: xtract-universal-02
layout: page
title: Einführung in Xtract Universal
description: Einführung
product: xtract-universal
parent: xtract-universal
childidentifier: einfuehrung
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=einfuehrung
---

### Grundfunktionalität - Architektur

Extraktionen sind die Hauptentitäten in Xtract Universal. Eine [Extraktion](./erste-schritte/eine-neue-extraktion-anlegen) ist eine Kombination aus einer Quelle (SAP-System), 
einer Destination (Xtract Unversal Seite) / Zielumgebung (z.B. SQL-Server) (Kundenseitig) und einen definierten Extraktionstyp (z.B. Xtract Table).


Eine Quelle stellt eine [Verbindung zu einem SAP-System](./einfuehrung/sap-verbindungen-anlegen) dar. Eine [Destination](./xu-destinationen) repräsentiert eine Verbindung zu einer Zielumgebung.
Die Verwendung von Xtract Universal umfasst zwei Hauptphasen:
- Entwurfsphase
- Ausführungsphase

![xu-arch-01](/img/content/xu/xu-arch-01.png){:class="img-responsive"}

Während der Designphase kann der Benutzer Extraktionen, Quellen und Destinationen erstellen und modifizieren; und die [Servereinstellungen](./server/server-settings) mit Hilfe des [Designers](./erste-schritte/designer-overview) anpassen. 

Während der Ausführungsphase kann der Benutzer die in der Designphase entworfenen Extraktionen ausführen. Abhängig von der Destination kann eine Ausführung entweder durch das [XU-Kommandozeilen-Tool - xu.exe oder xu.elf](./fortgeschrittene-techniken/extraktion_einplanen) oder durch den Datenkonsumenten ausgelöst werden. Mehr Details dazu im Abschnitt [Pull- und Push-Destinationen](./xu-destinationen#pull--und-push-destinationen). 


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
