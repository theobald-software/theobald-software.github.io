---
layout: page
title: Server-Logging
description: Server-Logging
product: board-connector
parent: logging
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=server-logging
---

BOARD protokolliert alle durchgeführten Schritte auf einem System in Protokolldateien mit. Dies geschieht im Wesentlichen auf zwei Ebenen: Das Server-Log enthält Protokolle, die den kompletten Server betreffen, also beispielsweise das Hoch- und Runterfahren, sowie die Ausführung einer einzelnen Extraktion. Darüber hinaus gibt es noch das Extraction-Log, das Detailinfos zu jedem einzelnen Extraktionsvorgang enthält. 

Um das Server-Log anzusehen, klicken Sie im Hauptmenü bitte auf *Server -> Log*. Wie im folgenden Screenshot zu sehen, wird pro Tag ein Protokoll erzeugt. Zwischen zwei Protokollen können Sie über die Liste links hin- und herspringen. 

![Connection-Manager-Logging-02](/img/content/Connection-Manager-Logging-02.png){:class="img-responsive"}


Jeder Log-Eintrag ist einem so genannten Log-Level zugewiesen. Es gibt folgende Log-Level:

**Errors** - sind Fehler.

**Informationen** - sind Tätigkeiten, die nicht zu einem Fehler geführt haben.

**Debug Details** - sind Detailinfos, die normalerweise nicht benötigt werden.

Sie können über die Checkboxen links oben wählen, welche Log-Levels angezeigt werden sollen, um die Übersicht nicht zu verlieren. Mit Hilfe des Buttons *Copy To Clipboard* wird die aktuelle Log-Ausgabe in den Zwischenspeicher kopiert, um Sie bei Bedarf in eine Email einfügen zu können.


