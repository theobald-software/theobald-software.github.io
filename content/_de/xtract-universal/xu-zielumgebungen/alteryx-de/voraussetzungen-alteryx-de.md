---
ref: xu-alteryx-01
layout: page
title: Voraussetzungen
description: Voraussetzungen
product: xtract-universal
parent: alteryx-de
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=voraussetzungen-alteryx-de
---

Für die Verwendung der Alteryx-Zielumgebung wird das Xtract Universal Alteryx Plugin für den Alteryx-Designer und -Server benötigt. Dieses ist Teil des  Xtract Universal Setups.

**Installation durch das Xtract Universal Setup:**<br>
Das Xtract Universal Alteryx Plugin wird zusammen mit Xtract Universal auf dem Zielsystem installiert. Falls eine gültige Alteryx Installation gefunden wurde, wird dieses direkt zum Alteryx Designer oder Server hinzugefügt.

Bei der Installation von Xtract Universal erstellt das Setup eine Datei im Alteryx-Verzeichnis. Diese Datei befindet sich unter *[alteryx]\Settings\AdditionalPlugins\Xtract Universal.ini.* Sie wird für die Verwendung des Plugins im Alteryx Designer benötigt. Zudem wird die DefaultSettings.xml unter *[alteryx]\bin\RuntimeData* angepasst (ein Backup wird erstellt).
Im Ordner [alteryx]\bin\RuntimeData\icons\categories wird eine Bilddatei von Xtract Univesal abgelegt.

**Achtung:** Sollten sich mehrere alteryx-Installationen auf Ihrem System befinden, kann unser Setup nur eine Installation erkennen und die obigen Dateien dorthin kopieren. Welche Installation erkannt wurde können Sie der setup.log-Datei (s. unten) entnehmen. Für die anderen alteryx-Installationen folgen Sie bitte den Schritten für *Manuelle Installation*, s.unten.


**Manuelle Installation (z.B. auf einem separaten Alteryx-Server oder wenn die Alteryx Installation nicht erkannt wurde):**<br>
Kopieren Sie den alteryx-Ordner *(z.B. C:\Program Files\XtractUniversal\alteryx)* aus ihrer lokalen Xtract Universal Installation in einen beliebigen Ordner auf dem Server, auf welchem Sie das Plugin installieren möchten. 

Öffnen Sie ein Windows Command-Fenster und führen Sie dort die Setup-Datei *AlteryxPluginSetup.exe* aus. Alternativ können Sie die die Setup-Datei *AlteryxPluginSetup.exe* auch über *rechte Maustaste – „Als Administrator ausführen“. <br>
Die *AlteryxPluginSetup.exe* unterstützt die Befehle */i* (Installation) und */u* (Deinstallation). Den Befehlen folgt als erstes Argumentdas das alteryx Installationsverzeichnis. <br>
*Beispiel*: <br>
```C:\Program Files\XtractUniversal\alteryx>AlteryxPluginSetup /i "C:\Users\mywindowsuser\AppData\Local\Alteryx"```

**Troubleshooting** <br>
Sollte es Probleme mit der Installation des Plugins geben, schicken Sie bitte die setup.log-Datei aus dem alteryx-Ordner an den Theobald Software Support.