---
ref: bc-introduction-03
layout: page
title: Installation und Backup
description: Installation und Backup
product: board-connector
parent: einfuehrung
permalink: /:collection/:path
weight: 3
lang: de_DE
---

Das Installationsprogramm ist eine branchenübliche Installationsroutine, die nichts anderes macht, als alle nötigen  Dateien in das Programmverzeichnis zu kopieren und im Windows-Programmmenü einen Menüeintrag mit einigen Shortcuts anzulegen.<br>
Das Setup installiert die Visual C++ 2005 Laufzeit-Bibliothek (Runtime library).  

**BCConsole.exe**

ist der BOARDConnectorServer, der für Testzwecke als Konsolenprogramm gestartet werden kann.

**BCDesigner.exe**

ist der BOARD Connector Designer.

**BCService.exe**

ist der BOARDConnetor Server, der standardmäßig als Windows-Service installiert und gestartet wird.


**Installutil.exe**

ist ein kleines Tool, um den Server als Windows-Service zu registrieren.

Das Unterverzeichnis config wird mit der ersten Extraktion automatisch angelegt und enthält alle Extraktionen sowie die Protokolldateien derselben. 


**Neue Installation**<br>
Eine neuere Version kann einfach über die alte Version installiert werden. Alle Einstellungen und angelegten Objekte bleiben erhalten. Es wird empfohlen, vor der Neuinstallation ein Backup des kompletten Programmverzeichnisses oder zumindest des *config* Unterverzeichnisses zu erstellen. Das erlaubt es Ihnen, bei Bedarf problemlos wieder auf die vorige Version des BOARD Connectors zu wechseln.


**Backup**<br>
Alle Einstellungen zu Extraktionen, Sources, Destinationen, etc. werden im Unterverzeichnis *config* gespeichert. Es wird empfohlen, von diesem Verzeichnis in regelmäßigen Abständen ein Backup zu machen.