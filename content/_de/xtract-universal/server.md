---
ref: xtract-universal-07
layout: page
title: Server
description: Server
product: xtract-universal
parent: xtract-universal
childidentifier: server
permalink: /:collection/:path
weight: 30
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=server
---

Dieser Abschnitt beinhaltet Informationen zum Thema Server und Servereinstellungen.

Der Server übernimmt zwei Hauptaufgaben:

1. Im [Config](./einfuehrung/backup-und-migration#konfigurationsdateien)-Verzeichnis gespeicherte Extraktionen ausführen 
2. Im [Config](./einfuehrung/backup-und-migration#konfigurationsdateien)-Verzeichnis gespeicherte Einstellungen dem Designer zur Verfügung stellen

### Extraktion auf dem Server ausführen

Ausführung wird durch eine HTTP-Anfrage (Request) ausgelöst. Die HTTP-Anfrage kann bei [Pull-Destinationen](./destinationen#pull--und-push-destinationen) aus der Zielumgebung oder von dem xu-Kommandozeilen-Tool (xu.exe / xu.elf) gestartet werden, siehe [Extraktionen Ausführen und Einplanen](./extraktionen-ausfuehren-und-einplanen).<br> 
Der Server-Prozess kann im [Extraktions-Log](./logging/log-zugriff-ueber-designer#extraktions-logs) nachvollzogen werden.

1. Theobald.Xu.Web.Worker.exe prüft die Authentisierung und Autorisierung der Anfrage. 
2. Die Zielumgebung wird für das Schreiben der extrahierten Daten vorbereitet (z.B. Datenbakverbindung herstellen, Datei anlegen).
3. Die Lizenz wird geprüft.
4. Eine Verbindung zum in der Source definierten SAP-System wird hergestellt.
5. Die Daten des definierten Extraktionstyps werden angefordert.
6. Jedes extrahierte Datenpaket wird in die Zielumgebung geschrieben.
7. Nachdem alle Pakete empfangen wurden, trennt Theobald.Xu.Web.Worker.exe die Verbindung zum SAP-System und informiert die Zielumgebung wird über den Abschluss der Extraktion.

{: .box-tip }
**Tipp:** Die Theobald.Xu.Web.Worker.exe protokolliert ihre Aktionen in Log-Dateien. 
Die Log-Dateien befinden sich im Logs-Unterverzeichnis des Programmverzeichnisses:`C:Program Files\XtractUniversal\logs\servers\web\worker` (standartmäßig). 
Die Logs kann man sich auch im Designer unter **[Server]>[Logs (Web Worker)]** anzeigen lassen.

### Auf die Einstellungen mit dem Designer zugreifen

1. Theobald.Xu.Rpc.Worker.exe prüft die Authentisierung und Autorisierung der Anfrage.
2. Designer fragt eine bestimmte Einstellung an, z.B. Liste aller Extraktionen. 
3. Theobald.Xu.Rpc.Worker.exe liest die angefragten Einstellungen aus dem [Config-Verzeichnis](./einfuehrung/backup-und-migration#konfigurationsdateien) und sendet diese Einstellungen an den Designer.
4. Der Benutzer ändert die die Einstellungen im Designer (z.B. Destinationseinstellungen).
5. Der Designer sendet die geänderten Einstellungen an Theobald.Xu.Rpc.Worker.exe zurück. Theobald.Xu.Rpc.Worker.exe speichert die geänderten Einstellungen im [Config-Verzeichnis](./einfuehrung/backup-und-migration#konfigurationsdateien).

{: .box-tip }
**Tipp:** Die Theobald.Xu.Rpc.Worker.exe protokolliert ihre Aktionen in Log-Dateien. 
Die Log-Dateien befinden sich im Logs-Unterverzeichnis des Programmverzeichnisses: `C:\Program Files\XtractUniversal\logs\server\rpc\worker` (Standard).


### Serverarchitektur

Der Server läuft als Windows-Service und der Hauptprozess von diesem Service ist XtractService.exe. Der Windows-Service kann über die Windows-Diensteverwaltung oder den Taskmanager [verwaltet](./server/server-starten) werden.

XtractService.exe startet zwei Listener-Prozesse:
- Theobald.Xu.Web.Listener.exe
- Theobald.Xu.Rpc.Listener.exe

Die beiden Listener-Prozesse lauschen auf den [Ports](./server/ports), die in den [Server-Einstellungen](./server/server_einstellungen) definiert sind.

{: .box-tip }
**Tipp:** Die XtractService.exe protokolliert ihre Aktionen in ServiceLog.txt. 
Die Log-Datei befindet sich im Logs-Unterverzeichnis des Programmverzeichnisses: `C:ProgramFiles\XtractUniversal\logs` (Standard).

#### Theobald.Xu.Rpc.Listener.exe

Theobald.Xu.Rpc.Listener.exe wartet auf neue Verbindungsanfragen vom Designer. <br>
Für jede TCP-Verbindung startet die Theobald.Xu.Rpc.Listener.exe eine neue Instanz der Theobald.Xu.Rpc.Worker.exe, die alle über die TCP-Verbindung eingehenden Anfragen des Designers prozessiert, siehe [Auf die Einstellungen mit dem Designer zugreifen](#auf-die-einstellungen-mit-dem-designer-zugreifen).
 
{: .box-tip }
**Tipp:** Die Theobald.Xu.Rpc.Listener.exe protokolliert ihre Aktionen in Log-Dateien. 
Die Log-Dateien befinden sich im Logs-Unterverzeichnis des Programmverzeichnisses: `C:\ProgramFiles\XtractUniversal\logs\server\rpc\listener` (Standard).

#### Theobald.Xu.Web.Listener.exe

Theobald.Xu.Web.Listener.exe wartet auf HTTP-Anfragen. <br>
Für jede TCP-Verbindung startet die Theobald.Xu.Web.Listener.exe eine neue Instanz der Theobald.Xu.Web.Worker.exe, die alle über diese TCP-Verbindung eingehenden HTTP-Anfragen bearbeitet, siehe [Extraktion auf dem Server ausführen](#extraktion-auf-dem-server-ausführen).

Die folgenden HTTP-Anfragen sind möglich:
- Ausführen einer Extraktion
- Leeren des Result-Caches einer Extraktion
- Abbrechen aller Läufe einer Extraktion
- REST API-Anfragen z.B. [Logs](./logging/log-zugriff-ueber-http), [Metadaten](./fortgeschrittene-techniken/metadaten-zugriff-ueber-http) etc.

{: .box-tip }
**Tipp:** Die Theobald.Xu.Web.Listener.exe protokolliert ihre Aktionen in Log-Dateien. 
Die Log-Dateien befinden sich im Logs-Unterverzeichnis des Programmverzeichnisses: `C:ProgramFiles\XtractUniversal\logs\server\web` (standartmäßig).

*****
Weitere Informationen zum Server finden Sie in den folgenden Abschnitten:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
