---
layout: page
title: Technische Einstellungen und Ausführung
description: Technische Einstellungen und Ausführung
product: xtract-universal
parent: bw-open-hub-services
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=technische-einstellungen-und-ausfuehrung
---

Es sind nun noch drei zusätzliche Parameter zu füllen: Der *GatewayHost* (i.d.R. derselbe Host wie der Applikationsserver des SAP), der *Gateway Service* (sapgwXX, wobei XX die Systemnummer ist) und die Program ID aus der RFC-Destination.

![Open-Hub-Services-Technical-Preferences](/img/content/Open-Hub-Services-Technical-Preferences.png){:class="img-responsive"}

Bevor Sie die Extraktion im BW aktivieren bzw. ausführen, prüfen Sie die Einstellungen mit dem Link *Customizing Check*.

![Open-Hub-Services-Customizing-Check](/img/content/Open-Hub-Services-Customizing-Check.png){:class="img-responsive"}

Nun kann eine lokale Testextraktion gestartet werden. Bitte überprüfen Sie nach erfolgreicher Extraktion auch das Protokoll des Open Hub Service Monitors. Im Preview werden zunächst alle Systemmeldungen angezeigt und danach die extrahierten Daten:

![Open-Hub-Services-Preview](/img/content/Open-Hub-Services-Preview.png){:class="img-responsive"}