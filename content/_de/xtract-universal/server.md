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

Dieser Abschnitt beinhaltet Informationen zum Thema Server und Servereinstellungen.

Der Server übernimmt zwei Hauptaufgaben:

1. Im [Config](./fortgeschrittene-techniken/backup-und-migration#konfigurationsdateien)-Verzeichnis gespeicherte Extraktionen ausführen 
2. Im [Config](./fortgeschrittene-techniken/backup-und-migration#konfigurationsdateien)-Verzeichnis gespeicherte Einstellungen dem Designer zur Verfügung stellen

### 1. Extraktion auf dem Server ausführen

Ausführung wird durch eine HTTP-Anfrage (Request) ausgelöst. Die HTTP-Anfrage kann bei [Pull-Destinationen](./xu-destinationen#pull--und-push-destinationen) aus der Zielumgebung oder von der xu-Kommandozeilen-Tool (xu.exe /xu.elf) gestartet werden. 

{: .box-tip }
**Tipp:** Der Server-Prozess kann im [Extraktions-Log](./logging/extraktion-logging) nachvollzogen werden.

1. XtractRun.exe prüft die Authentisierung und Autorisierung der Anfrage. 
2. Die Zielumgebung wird für das Schreiben der extrahierten Daten vorbereitet (z.B. Datenbakverbindung herstellen, Datei anlegen).
3. Die Lizenz wird geprüft.
4. Eine Verbindung zum in der Source definierten SAP-System wird hergestellt.
5. Die Daten des definierten Extraktionstyps werden angefordert.
6. Jedes extrahierte Datenpaket wird in die Zielumgebung geschrieben.
7. Nachdem alle Pakete empfangen wurden, wird die Verbindung zum SAP-System getrennt und die Zielumgebung wird über den Abschluss der Extraktion informiert.


### 2. Auf die Einstellungen mit dem Designer zugreifen

1. XtractConfigServer.exe prüft die Authentisierung und Autorisierung der Anfrage.
2. Designer fragt eine bestimmte Einstellung an, z.B. Liste aller Extraktionen. 
3. XtractConfigServer.exe liest die angefragten Einstellungen aus dem [Config-Verzeichnis](./fortgeschrittene-techniken/backup-und-migration#konfigurationsdateien) und sendet diese Einstellungen an den Designer.
4. Der Benutzer ändert die die Einstellungen im Designer (z.B. Destinationseinstellungen).
5. Der Designer sendet die geänderten Einstellungen an XtractConfigServer.exe zurück. XtractConfigServer.exe speichert die geänderten Einstellungen im [Config-Verzeichnis](./fortgeschrittene-techniken/backup-und-migration#konfigurationsdateien).


### Serverarchitektur

Der Server läuft als Windows-Service und der Hauptprozess von diesem Service ist XtractService.exe. Der Windows-Service kann über die Windows-Diensteverwaltung oder den Taskmanager [verwaltet](./server-starten) werden.
xtractservice.exe startet zwei Listener-Prozesse:
- XtractWebServer.exe
- XtractConfigServer.exe

{: .box-tip }
**Tipp:** Die XtractService.exe protokolliert ihre Aktionen in ServiceLog.txt. 
Die Log-Datei befindet sich im Logs-Unterverzeichnis des Programmverzeichnisses: `C:ProgramFiles\XtractUniversal\logs` (standartmäßig).


Die beiden Listener-Prozesse lauschen auf den [Ports](./ports), die in den [Server-Einstellungen](./server_einstellungen) definiert sind.

XtractConfigServer.exe wartet auf neue Verbindungsanfragen vom Designer. 

{: .box-tip }
**Tipp:** Die XtractConfigServer.exe protokolliert ihre Aktionen in Log-Dateien. 
Die Log-Dateien befinden sich im Logs-Unterverzeichnis des Programmverzeichnisses: `C:ProgramFiles\XtractUniversal\logs\server\config` (standartmäßig).

XtractWebServer.exe wartet auf HTTP-Anfragen. 

Für jede TCP-Verbindung startet die XtractWebServer.exe eine neue Instanz der XtractRun.exe, die alle über diese TCP-Verbindung eingehenden HTTP-Anfragen bearbeitet.

{: .box-tip }
**Tipp:** Die XtractRun.exe protokolliert ihre Aktionen in dem Log-Unterverzeichnis. 
Die Log-Dateien befinden sich im Logs-Unterverzeichnis des Programmverzeichnisses:`C:ProgramFiles\XtractUniversal\logs\server\run` (standartmäßig). 
Das sind auch die Logs, die man sich im Designer unter **[Server]>[Logs]** anzeigen lassen kann.

Die folgenden HTTP-Anfragen sind möglich:
- Ausführen einer Extraktion
- Leeren des Result-Caches einer Extraktion
- Abbrechen aller Läufe einer Extraktion
- REST API-Anfragen z.B. [Logs](./logging/log-zugriff-ueber-http), [Metadaten](./fortgeschrittene-techniken/metadaten-zugriff-ueber-http) etc.

{: .box-tip }
**Tipp:** Die XtractWebServer.exe protokolliert ihre Aktionen in Log-Dateien. 
Die Log-Dateien befinden sich im Logs-Unterverzeichnis des Programmverzeichnisses: `C:ProgramFiles\XtractUniversal\logs\server\web` (standartmäßig).

Weitere Informationen zum Server finden Sie in den folgenden Abschnitten:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
