---
ref: xi-bw-loader-packages-02
layout: page
title: Einstellungen im InfoPackage
description: Einstellungen im InfoPackage
product: xtract-is
parent: bw-loader-pakete-starten
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=einstellungen-im-infopackage
---
Im InfoPackage wählen sie den Tab *3rd party selections* aus. Hier finden sie 4 Parameter. *Path to executable* ist der Pfad des auszuführenden Programmes (z.B. dtexec.exe für die Ausführung eines SSIS Paketes). Darüber hinaus gibt es noch drei weitere Parameter, die die Kommandozeilenargumente enthalten. In unserem Fall müssen wir die Request ID der Variable des Paketes übermitteln. Die Kommandozeile würde dann wie folgt lauten:

Dtexec.exe /f "C:\Source\XtractIS\Demos\BWLoadTest\BI7 InfoObject AdventureWorks ZAWVEND.dtsx" /set \package.variables[RequestID].Value;%REQUESTID%

Bitte schauen Sie in der Microsoft Dokumentation nach, um mehr über die Erstellung der korrekten Kommandozeilenargumente für das dtexec Tool herauszufinden. Der BI Notification Receiver ersetzt den Platzhalter %REQUESTID% mit dem richtigen Wert.
Wenn die Parameter im InfoPackage nicht zur Verfügung stehen, klicken Sie bitte auf den Refresh Button.

![Notification-Server-Settings-InfoPackage](/img/content/Notification-Server-Settings-InfoPackage.png){:class="img-responsive"}

