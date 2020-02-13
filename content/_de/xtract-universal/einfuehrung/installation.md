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

Das Installationsprogramm *XtractUniversalSetup.exe* ist eine branchenübliche Installationsroutine, die alle nötigen Dateien in das Programmverzeichnis kopiert und im Windows-Programmenü eine Gruppe mit Shortcuts anlegt.

![XU-Setup](/img/content/xu/XU_Setup_1.png){:class="img-responsive"}

Während des Setups können optionale Komponenten für die Installation ausgewählt werden:

![XU-Setup](/img/content/xu/XU_Setup_2.png){:class="img-responsive"}

### XtractDesigner.exe 

Startet den Xtract Universal Designer, mit dem Extraktion angelegt, getestet und gemonitort werden können.

### XtractService.exe

Ist der Server, der standardmäßig als Windows-Service installiert und gestartet wird. In der Regel muss der Service nicht manuell gestartet werden. 

Der Service wird mit dem Setup installiert und startet beim Boot-Vorgang des Betriebssystems. Der Service läuft im Hintergrund.

### XtractConsole.exe

{: .box-warning}
**Warnung! Internes Feature**
Die Option **XtractConsole** ist nur für interne Zwecke.
Option nicht benutzen!

Ist der Xtract Server, der für Testzwecke als Konsolenprogramm gestartet werden kann. 
Das Unterverzeichnis *config* wird mit der ersten Extraktion automatisch angelegt und enthält alle Extraktionen sowie die dazugehörigen Protokolldateien. 

### Neue Installation und Update

{: .box-tip}
**Empfehlung:** Führen Sie einen Test auf einer nichtproduktiven Umgebung durch vor der Neuinstallation.
Legen Sie ein Backup des kompletten Programmverzeichnisses oder zumindest des *config* Unterverzeichnisses an. 

Eine neuere Version kann über die ältere Version installiert werden. Alle Einstellungen und angelegten Objekte bleiben erhalten. 


### Backup
{:.box-tip}
**Empfehlung:** Systemänderungen oder Updates können die Funktionalität der Software einschränken, dabei können Daten verloren gehen.<br>
Führen Sie ein Backup des Ordners: `C:\Program Files\XtractUniversal\config` in regelmäßigen Abständen durch.

Alle Einstellungen zu Extraktionen, Sources, Destinationen, etc. werden im Unterverzeichnis *config* gespeichert. 
Ein Backup ermöglicht es Ihnen, einfach zur vorherigen Version von Xtract Universal zurück zu wechseln.

### Version History
Eine Liste der aktuellen Versionen finden Sie in der [Versionshistorie](https://kb.theobald-software.com/version-history/xtract-universal-version-history).
