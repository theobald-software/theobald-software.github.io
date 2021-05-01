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

Für die Verwendung der Alteryx-Destination wird das Xtract Universal Alteryx Plugin für den Alteryx-Designer und -Server benötigt. 

### Installation durch das Xtract Universal Setup

Falls Alteryx bereits installiert ist, wird das Xtract Universal Alteryx Plugin zusammen mit Xtract Universal auf dem Zielsystem installiert. <br>
Falls Sie Alteryx nach Xtract Universal installieren, können Sie entweder das Extract-Universal-Setup erneut ausführen oder das Plugin manuell installieren.

Nach der Installation von Xtract Universal erstellt das Setup die folgenden Einträge und Erweiterungen im Installationsverzeichnis von Alteryx:
- `Alteryx\Settings\AdditionalPlugins\XtractUniversal.ini`
- `Alteryx\bin\RuntimeData\icons\categories\XtractUniversal.png`
- `Alteryx\bin\RuntimeData\DefaultSettings.xml`

{: .box-note }
**Hinweis:** Sollten sich mehrere Alteryx-Installationen auf Ihrem System befinden, erkennt das Setup nur eine Installation und kopiert die o.g. Dateien dorthin.
Für alle weiteren Alertyx Installationen, müssen Sie eine manuelle Installtion des Plugins durchführen.

### Manuelle Installation (für ein separates Alteryx-System

1. Kopieren Sie den Alteryx-Ordner `C:\Program Files\XtractUniversal\alteryx` aus ihrer lokalen Xtract Universal Installation in einen beliebigen Ordner auf dem Server, auf dem Sie das Plugin installieren möchten. 
2. Führen Sie die `C:\Program Files\XtractUniversal\alteryx\AlteryxPluginSetup.exe` über die Windows Eingabeaufforderung aus. 

Die folgenden Befehle werden in Kombination mit einem Parameter, der auf das Installationsverzeichnis von Alteryx verweist unterstützt. 
- */i* (für "install") z.B. `C:\Program Files\XtractUniversal\alteryx>AlteryxPluginSetup /i "C:\Users\mywindowsuser\AppData\Local\Alteryx"`
- */u* (für "uninstall")

{: .box-note }
**Hinweis:** Sollte es Probleme bei der Installation des Plugins geben, schicken Sie die setup.log Datei aus `C:\Program Files\XtractUniversal\alteryx\setup.log` an den [Theobald Support](mailto:support@theobald-software.com).