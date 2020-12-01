---
ref: board-connector-07
layout: page
title: Server
description: Server
product: board-connector
parent: board-connector
childidentifier: server
permalink: /:collection/:path
weight: 7
lang: de_DE
progressstate: 5
---

Dieser Abschnitt beinhaltet Informationen zum Thema Server und Servereinstellungen.

Der Server übernimmt zwei Hauptaufgaben:

1. Im [Config](./fortgeschrittene-techniken/backup-und-migration#konfigurationsdateien)-Verzeichnis gespeicherte Extraktionen ausführen 
2. Im [Config](./fortgeschrittene-techniken/backup-und-migration#konfigurationsdateien)-Verzeichnis gespeicherte Einstellungen dem Designer zur Verfügung stellen

### 1. Extraktion auf dem Server ausführen

Ausführung wird durch eine HTTP-Anfrage (Request) ausgelöst. Die HTTP-Anfrage wird aus der Zielumgebung gestartet.

{: .box-tip }
**Tipp:** Der Server-Prozess kann im [Extraktions-Log](./logging/extraktion-logging) nachvollzogen werden.

1. BCRun.exe prüft die Authentisierung und Autorisierung der Anfrage. 
2. Die Zielumgebung wird für das Schreiben der extrahierten Daten vorbereitet (z.B. Datenbakverbindung herstellen, Datei anlegen).
3. Die Lizenz wird geprüft.
4. Eine Verbindung zum in der Source definierten SAP-System wird hergestellt.
5. Die Daten des definierten Extraktionstyps werden angefordert.
6. Jedes extrahierte Datenpaket wird in die Zielumgebung geschrieben.
7. Nachdem alle Pakete empfangen wurden, wird die Verbindung zum SAP-System getrennt und die Zielumgebung wird über den Abschluss der Extraktion informiert.


### 2. Auf die Einstellungen mit dem Designer zugreifen

1. BCConfigServer.exe prüft die Authentisierung und Autorisierung der Anfrage.
2. Designer fragt eine bestimmte Einstellung an, z.B. Liste aller Extraktionen. 
3. BCConfigServer.exe liest die angefragten Einstellungen aus dem [Config-Verzeichnis](./fortgeschrittene-techniken/backup-und-migration#konfigurationsdateien) und sendet diese Einstellungen an den Designer.
4. Der Benutzer ändert die die Einstellungen im Designer.
5. Der Designer sendet die geänderten Einstellungen an BCConfigServer.exe zurück. BCConfigServer.exe speichert die geänderten Einstellungen im [Config-Verzeichnis](./fortgeschrittene-techniken/backup-und-migration#konfigurationsdateien).


### Serverarchitektur

Der Server läuft als Windows-Service und der Hauptprozess von diesem Service ist BCService.exe. Der Windows-Service kann über die Windows-Diensteverwaltung oder den Taskmanager [verwaltet](./server/server-starten) werden.
BCService.exe startet zwei Listener-Prozesse:
- BCWebServer.exe
- BCConfigServer.exe

{: .box-tip }
**Tipp:** Die BCService.exe protokolliert ihre Aktionen in ServiceLog.txt. 
Die Log-Datei befindet sich im Logs-Unterverzeichnis des Programmverzeichnisses: `C:ProgramFiles\BOARDConnector\logs` (standartmäßig).


Die beiden Listener-Prozesse lauschen auf den [Ports](./server/ports), die in den [Server-Einstellungen](./server/server_einstellungen) definiert sind.

BCConfigServer.exe wartet auf neue Verbindungsanfragen vom Designer. 

{: .box-tip }
**Tipp:** Die BCConfigServer.exe protokolliert ihre Aktionen in Log-Dateien. 
Die Log-Dateien befinden sich im Logs-Unterverzeichnis des Programmverzeichnisses: `C:ProgramFiles\BOARDConnector\logs\server\config` (standartmäßig).

BCWebServer.exe wartet auf HTTP-Anfragen. 

Für jede TCP-Verbindung startet die BCWebServer.exe eine neue Instanz der BCRun.exe, die alle über diese TCP-Verbindung eingehenden HTTP-Anfragen bearbeitet.

{: .box-tip }
**Tipp:** Die BCRun.exe protokolliert ihre Aktionen in dem Log-Unterverzeichnis. 
Die Log-Dateien befinden sich im Logs-Unterverzeichnis des Programmverzeichnisses:`C:ProgramFiles\BOARDConnector\logs\server\run` (standartmäßig). 
Das sind auch die Logs, die man sich im Designer unter **[Server]>[Logs]** anzeigen lassen kann.

Die folgenden HTTP-Anfragen sind möglich:
- Ausführen einer Extraktion
- Leeren des Result-Caches einer Extraktion
- Abbrechen aller Läufe einer Extraktion
- REST API-Anfragen z.B. [Logs](./logging/log-zugriff-ueber-http), [Metadaten](./fortgeschrittene-techniken/metadaten-zugriff-ueber-http) etc.

{: .box-tip }
**Tipp:** Die BCWebServer.exe protokolliert ihre Aktionen in Log-Dateien. 
Die Log-Dateien befinden sich im Logs-Unterverzeichnis des Programmverzeichnisses: `C:ProgramFiles\BOARDConnector\logs\server\web` (standartmäßig).

Weitere Informationen zum Server finden Sie in den folgenden Abschnitten:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}