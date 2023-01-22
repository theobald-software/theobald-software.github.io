---
ref: xi-bw-loader-01
layout: page
title: Einrichtung im SAP BW
description: Einrichtung im SAP BW
product: xtract-is
parent: bw-loader
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=einrichtung-im-sap-bw
---
Damit Xtract IS BW Loader die Daten korrekt abliefern kann, ist es nötig, im SAP BW entsprechende Vorkehrungen zu treffen. Um den Rahmen nicht zu sprengen, sind im Folgenden nur die wichtigsten Punkte beschrieben, weitere Infos zum Einrichten von externen Datenlieferanten im SAP BW finden Sie in der BW-Doku oder unter help.sap.com.<br> 
Zunächst einmal ist es nötig, in der BW Administrator Workbench ein neues Quellsystem anzulegen (z.B. mit dem Namen XTRACTSYS). Dieses Quellsystem muss vom Typ *Drittanbieter / Staging BAPIs* sein. Bitte merken Sie sich die im Quellsystem vergebene *Programm ID*. Wir werden sie später wieder brauchen.

![BWLoader-Configuration-02](/img/content/BWLoader-Configuration-02.png){:class="img-responsive"}

Nun können Sie eine InfoSource mit dem Quellsystem verknüpfen und ein entsprechendes InfoPackage anlegen. Diese Konstellation ist im folgenden Bild gezeigt. Hier taucht im Übrigen auch wieder das oben angelegte Quellsystem auf. Der Anker für die Xtract IS BW Loader Komponente ist immer ein InfoPackage.

![BWLoader-Configuration-03](/img/content/BWLoader-Configuration-03.png){:class="img-responsive"}
