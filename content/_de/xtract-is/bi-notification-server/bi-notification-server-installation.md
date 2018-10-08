---
layout: page
title: Installation
description: Installation
product: xtract-is
parent: bi-notification-server
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=bi-notification-server-installation
---

Alle Tools befinden sich im Unterordner BINotificationReceiver im Xtract IS Installationsverzeichnis. Dieses Programm kann mit einem Doppelklick auf das Konsolenprogramm (BINotificationReceiverConsole.exe) gestartet oder als WindowsDienst (BINotificationReceiverService.exe) installiert werden. Es wird empfohlen für Testzwecke das Konsolenprogramm zu verwenden, da es einfacher zu verwenden ist. Später im Produktivbetrieb können Sie das Tool als Windows Dienst installieren und starten. Um den Dienst zu installieren führen Sie installutil.exe BINotificationReceiverService.exe in der Konsole aus.


![Notification-Server-Install-01](/img/content/Notification-Server-Install-01.png){:class="img-responsive"}

Editieren Sie das Config File BINotificationReceiver.config.xml, um ein oder mehrere BW Systeme zu definieren, an die sich das Notifier-Tool registrieren soll. Sie müssen den Hostnamen, den Gatewayservice und die Programm ID eintragen.

![Notification-Server-Install-02](/img/content/Notification-Server-Install-02.png){:class="img-responsive"}

Dann können Sie den Dienst starten.

![Notification-Server-Install-03](/img/content/Notification-Server-Install-03.png){:class="img-responsive"}