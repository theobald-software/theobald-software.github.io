---
ref: xi-bw-loader-packages-01
layout: page
title: BW Loader Pakete starten
description: BW Loader Pakete starten
product: xtract-is
parent: bw-loader-pakete-starten
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=das-ssis-paket-vorbereiten
---
Um das SSIS-Paket für das externe Antriggern einzurichten, erstellen Sie bitte eine Variable für die RequestID.

![Notification-Server-SSIS-Package-Prepare-01](/img/content/Notification-Server-SSIS-Package-Prepare-01.png){:class="img-responsive"}

In Ihrem Datenflusstask öffnen Sie den Settings Dialog der BW Loader Komponente. Markieren Sie die Option *Use external Notifier* und tragen Sie den Namen der Variable ein, in welcher sich die RequestID befindet.

![XIS_BWL_Settings2](/img/content/XIS_BWL_Settings2.png){:class="img-responsive"}

**Debug Details**<br>
Diese Option erzeugt eine detailierter Ausgabe der einzelnen Schritte im SSIS-Protokoll.

**Enable Parallel Processing**<br>
Mit dieser Option werden mehrere zu sendende Paket gleichzeitig für das Senden vorbereitet. Diese Option erhöht die Gesamtperformance, beansprucht aber mehr Hauptspeicher.

**Allow multiple SAP connections**<br>
Diese Option erlaubt es der Komponente, mehrere Verbindungen zum SAP zu öffnen, um Pakete zu senden. Dadurch erhöht sich die Gesamtperformance, aber die Belastung des SAP-System steigt ebenfalls an.

**Max. Number of Threads**<br>
Diese Zahl definiert die maximale Anzahl der gleichzeitigen Sendevorgänge. Sie sollte nicht größer als 10 sein und nur nach Rücksprache mit dem SAP-Basis-Administrator gesetzt werden.

