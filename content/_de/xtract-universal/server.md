---
ref: xtract-universal-07
layout: page
title: Server
description: Server
product: xtract-universal
parent: xtract-universal
childidentifier: server
permalink: /:collection/:path
weight: 7
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=server
---

Dieses Abschnitt beinhaltet Informationen zum Thema Server und Servereinstellungen.

Der Server übernimmt zwei Hauptaufgaben:

- Im [Config](./fortgeschrittene-techniken/backup-und-migration#konfigurationsdateien)-Verzeichnis gespeicherte Extraktionen ausführen (inkl Lizenzthemen)

- Im [Config](./fortgeschrittene-techniken/backup-und-migration#konfigurationsdateien)-Verzeichnis gespeicherte Extraktionen dem Designer zur Verfügung stellen.

### Extraktion auf dem Server ausführen

Ausführung wird durch eine HTTP-Anfrage (Request) ausgelöst. Die HTTP-Anfrage kann bei [Pull-Destinationen](./xu-destinationen#pull--und-push-destinationen) aus der Zielumgebung kommen oder von der xu-Kommandozeilen-Tool (xu.exe /xu.elf). 

{: .box-tip }
**Tipp:** Der Prozess kann im [Extraktions-Log](./logging/extraktion-logging) nachvollzogen werden.

1. Server prüft die Authentisierung und Autorisierung der Anfrage. 
2. Die Zielumgebung wird für das Schreiben der extrahierten Daten vorbereitet (z.B. Datenbakverbindung herstellen, Datei anlegen).
3. Die Lizenz wird geprüft.
4. Eine Verbindung zum in der Source definierten SAP-System wird hergestellt.
5. Die Daten des definierten Extraktionstyps werden angefordert.
6. Jedes extrahierte Datenpaket wird in die Zielumgebung geschrieben.
7. Nachdem alle Pakete empfangen wurden, wird die Verbindung zum SAP-System getrennt und die Zielumgebung wird über den Abschluss der Extraktion informiert.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
