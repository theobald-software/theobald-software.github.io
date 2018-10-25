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

Für die Verwendung der Alteryx-Zielumgebung wird das Xtract Universal Alteryx Plugin für den Alteryx-Designer und -Server benötigt. Dieses kommt mit dem Setup von Xtract Universal.

**Installation durch das Xtract Universal Setup:**<br>
Das Xtract Universal Alteryx Plugin wird zusammen mit Xtract Universal auf dem Zielsystem installiert. Falls eine gültige Alteryx Installation gefunden wurde, wird dieses direkt zum Alteryx Designer oder Server hinzugefügt.

Bei der Installation von Xtract Universal erstellt das Setup eine Datei im Alteryx-Verzeichnis. Diese Datei befindet sich unter *[alteryx]\Settings\AdditionalPlugins\Xtract Universal.ini.* Sie wird für die Verwendung des Plugins im Alteryx Designer benötigt. Zudem wird die DefaultSettings.xml unter *[alteryx]\bin\RuntimeData* angepasst (ein Backup wird erstellt).
Im Ordner [alteryx]\bin\RuntimeData\icons\categories wird eine Bilddatei von Xtract Univesal abgelegt.

**Achtung:** Sollten sich mehrere alteryx-Installationen auf Ihrem System befinden, kann unser Setup nur eine Installation erkennen und die obigen Dateien dort platzieren. Welche Installation erkannt wurde können Sie der setup.log-Datei (s. unten) entnehmen. Für die anderen alteryx-Installationen müssen obige Dateien manuell in die jeweiligen Ordner kopiert werden.


**Manuelle Installation (auf einem separaten Alteryx-System):**<br>
Kopieren Sie den alteryx-Ordner (z.B. C:\Program Files\XtractUniversal\alteryx) aus ihrer lokalen Xtract Universal Installation in einen beliebigen Ordner auf dem System, auf welchem Sie das Plugin installieren möchten. 

Öffnen Sie dort den alteryx-Ordner und führen Sie anschließend die Setup-Datei *AlteryxPluginSetup.exe* als Administrator aus (rechte Maustaste – „Als Administrator ausführen“).

Sollte es Probleme mit der Installation des Plugins geben, schicken Sie bitte die setup.log-Datei aus dem alteryx-Ordner an den Theobald Software Support.