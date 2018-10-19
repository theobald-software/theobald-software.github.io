---
ref: xu-logging-02
layout: page
title: Server-Logging
description: Server-Logging
product: xtract-universal
parent: logging
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=server-logging
---

Xtract Universal protokolliert alle durchgeführten Schritte auf einem System in Protokolldateien mit. Dies geschieht im Wesentlichen auf zwei Ebenen: Das Server-Log enthält Protokolle, die den kompletten Server betreffen, also beispielsweise das Hoch- und Runterfahren, sowie die Ausführung einer einzelnen Extraktion. Darüber hinaus gibt es noch das Extraction-Log, das Detailinfos zu jedem einzelnen Extraktionsvorgang enthält. 

Um das Server-Log anzusehen, klicken Sie im Hauptmenü bitte auf *Server -> Log*. Wie im folgenden Screenshot zu sehen, wird pro Tag ein Protokoll erzeugt. Zwischen zwei Protokollen können Sie über die Liste links hin- und herspringen. 

![View-Server-Log](/img/content/View-Server-Log.jpg){:class="img-responsive"}

Jeder Log-Eintrag ist einem so genannten Log-Level zugewiesen. Es gibt folgende Log-Level:

**Errors** - sind Fehler.

**Informationen** - sind Tätigkeiten, die nicht zu einem Fehler geführt haben.

**Debug Details** - sind Detailinfos, die normalerweise nicht benötigt werden.

Sie können über die Checkboxen links oben wählen, welche Log-Levels angezeigt werden sollen, um die Übersicht nicht zu verlieren. Mit Hilfe des Buttons Copy To Clipboard wird die aktuelle Log-Ausgabe in den Zwischenspeicher kopiert, um Sie bei Bedarf in eine Email einfügen zu können.