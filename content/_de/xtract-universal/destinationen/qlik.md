---
ref: destinations-90
layout: page
title: QlikSense & QlikView
description: QlikSense & QlikView
product: xtract-universal
parent: destinationen
childidentifier: qlik
permalink: /:collection/:path
weight: 90
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=qlik
progressstate: 5
---

Die folgenden Abschnitte beschreiben, wie Xtract Universal mit QlikSense oder QlikView verbunden wird.

Zum Zweck der Verbindung verfügt Xtract Universal über eine Destination vom Typ *Qlik*. Die Destination Qlik generiert ein Datenladeskript, das in den Data Load-Editor Ihrer Qlik-Anwendung eingefügt werden muss. Je nachdem, ob Sie eine QlikSense- oder QlikView-Anwendung ausführen, erstellt Xtract Univeral ein passendes Datenladeskript.

Die Ausführung der Qlik-Anwendung triggert die entsprechende Extraktion von Xtract Univeral über das Datenladeskript. Xtract Universal sendet die extrahierten SAP-Daten über einen http-csv-Stream direkt an Ihre Qlik-Anwendung.


{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}