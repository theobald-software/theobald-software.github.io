---
layout: page
title: Fehlerbehebung
description: Fehlerbehebung
product: xtract-rs
parent: voraussetzungen-und-installation
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /Xtract-RS-DE/default.aspx?pageid=fehlerbehebung
---

**"Edit"-Knop für Datasource ist ausgegraut in Visual Studio**

Problem:<br> 
Manchmal ist der "Edit"-Knopf für die Datasource-Verbindung in Visual Studio ausgegraut. 

Lösung:<br>
Einloggen mit dem Benutzer, der dieses Problem hat. <br>
Im Unterordner VsEditButtonFix im Installationsordner von Xtract RS (standardmäßig unter C:\Program Files\XtractRS\VsEditButtonFix) führen Sie die .reg-Datei aus (Doppelklick) für die entsprechende Visual Studio Version, z.B. vs2015-edit-fix.reg für VS 2015.<br>
Im Ordner finden Sie auch eine entsprechende readme-Datei. 