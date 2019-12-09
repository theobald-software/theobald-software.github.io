---
ref: xu-introduction-03
layout: page
title: Installation
description: Installation
product: xtract-universal
parent: einfuehrung
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=installation
---

Das Installationsprogramm *XtractUniversalSetup.exe* ist eine branchenübliche Installationsroutine, die nichts anderes macht, als alle nötigen Dateien in das Programmverzeichnis zu kopieren und im Windows-Programmenü eine Gruppe mit einigen Shortcuts anzulegen.
Das Setup installiert die Visual C++ 2015 und 2013 Laufzeit-Bibliotheken (Runtime libraries). 

Bitte stellen Sie sicher, dass das .NET Framework 4.5.2 oder höher auf Ihrem Rechner installiert ist. Sollte das nicht der Fall sein, wird eine Warnung eingeblendet und das Setup beendet. 
Sie werden auf die Download-Seite des Frameworks weitergeleitet.

Während des Setups können optionale Komponenten für die Installation ausgewählt werden:

![XU-Setup](/img/content/XU-Setup.jpg){:class="img-responsive"}

**XtractDesigner.exe** 

Startet den Xtract Universal Designer, mit dem Extraktion angelegt, getestet und gemonitort werden können.

**XtractService.exe**

Ist der Server, der standardmäßig als Windows-Service installiert und gestartet wird. In der Regel muss der Service nicht manuell gestartet werden. 

Der Service wird mit dem Setup installiert und startet beim Boot-Vorgang des Betriebssystems. Der Service läuft im Hingergrund.

**XtractConsole.exe**

Ist der Xtract Server, der für Testzwecke als Konsolenprogramm gestartet werden kann. Nur für interne Zwecke. Bitte nicht nutzen!

Das Unterverzeichnis *config* wird mit der ersten Extraktion automatisch angelegt und enthält alle Extraktionen sowie die dazugehörigen Protokolldateien. 

**Neue Installation und Update**

Eine neuere Version kann einfach über die alte Version installiert werden. Alle Einstellungen und angelegten Objekte bleiben erhalten. 

Es wird empfohlen, vor der Neuinstallation ein Test auf einer nichtproduktiven Umgebung und ein Backup des kompletten Programmverzeichnisses oder zumindest des *config* Unterverzeichnisses durchzuführen. 

**Backup**

Alle Einstellungen zu Extraktionen, Sources, Destinationen, etc. werden im Unterverzeichnis *config* gespeichert. 

{:.box-warning}
**Warnung:** Verlust von Daten<br>
Systemänderungen oder Updates können die Funktionalität der Software einschränken, dabei können Daten verloren gehen.<br>
Führen Sie ein Backup des Ordners: `C:\Program Files\XtractUniversal\config` in regelmäßigen Abständen durch.

**Version History**<br>
Eine Liste der aktuellen Versionen finden Sie in der [version history](https://kb.theobald-software.com/version-history/xtract-universal-version-history).
