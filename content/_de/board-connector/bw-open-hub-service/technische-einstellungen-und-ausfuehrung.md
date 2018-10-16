---
ref: bc-bw-open-hub-services-03
layout: page
title: Technische Einstellungen und Ausführung
description: Technische Einstellungen und Ausführung
product: board-connector
parent: bw-open-hub-service
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=technische-einstellungen-und-ausfuehrung
---

Es sind nun noch drei zusätzliche Parameter zu füllen: Der *GatewayHost* (i.d.R. derselbe Host wie der Applikationsserver des SAP), der *Gateway Service* (sapgwXX, wobei XX die Systemnummer ist) und die Program ID aus der RFC-Destination.

![OHS-Gateway](/img/content/OHS-Gateway.png){:class="img-responsive"}


Bevor Sie die Extraktion im BW aktivieren bzw. ausführen, prüfen Sie die Einstellungen mit dem Link *Customizing Check*.

![OHS-Preferences-02](/img/content/OHS-Preferences-02.png){:class="img-responsive"}


Nun kann eine lokale Testextraktion gestartet werden. Bitte überprüfen Sie nach erfolgreicher Extraktion auch das Protokoll des Open Hub Service Monitors. Im Preview werden zunächst alle Systemmeldungen angezeigt und danach die extrahierten Daten:

![OHS-Preferences-03](/img/content/OHS-Preferences-03.png){:class="img-responsive"}