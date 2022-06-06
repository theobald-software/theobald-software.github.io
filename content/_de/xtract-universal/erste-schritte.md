---
ref: xtract-universal-04
layout: page
title: Erste Schritte mit Xtract Universal
description: Erste Schritte mit Xtract Universal
product: xtract-universal
parent: xtract-universal
childidentifier: erste-schritte
permalink: /:collection/:path
weight: 10
lang: de_DE
---
Dieser Abschnitt enthält eine allgemeine Einführung in Xtract Universal und die notwendigen Voraussetzungen zum Betrieb und Einsatz des SAP-Hubs.<br>
Einen kurzen Einblick in die Benutzung von Xtract Universal erhalten Sie in unserem Tutorial-Video [Get started with Xtract Universal](https://www.youtube.com/watch?v=pdlsfm0dLMA).

### Voraussetzung

![XU-getting-started](/img/content/xu/getting-started-with-xu.png){:class="img-responsive" width="450px"}

1. Laden Sie sich die aktuelle Version von Xtract Universal von unserer Webseite herunter, siehe [Download Trial Version](https://theobald-software.com/en/download-trial).
Installieren Sie Xtract Universal auf einem Windows Server / einer VM. 
2. Prüfen Sie, ob der Netzwerk-Zugriff auf Ihr SAP-System gewährleistet ist, siehe [SAP TCP/IP Ports](https://kb.theobald-software.com/sap/sap-tcpip-ports). 
3. Richten Sie die nötigen SAP Benutzerrechte für den Zugriff auf Ihr SAP-System ein, siehe [Authority Objects - SAP User Rights](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).
4. Für folgende Xtract Universal-Komponenten sind Anpassungen in Ihrem SAP-System notwendig: [Table](./sap-customizing/funktionsbaustein-fuer-table-extraktion) (optional), [Report](./sap-customizing/report-funktionsbaustein-installieren), [OHS](./sap-customizing/vorbereitung-fuer-ohs-im-bw) und [DeltaQ](./sap-customizing/customizing-fuer-deltaq). <br>
Für alle anderen Xtract Universal-Komponenten sind keine Anpassungen erforderlich.
5. Starten Sie Xtract Universal und folgen Sie den Schritten aus den folgenden Unterabschnitten.

{: .box-tip }
**Tipp:** Wir empfehlen einen SAP-Systembenutzer für die Produktivumgebung zu verwenden und einen Dialogbenutzer mit erweiterten Rechten (SE37, SE16, RSA3, ...) für die Evaluierungsphase.
Während der Evaluierung kann es sinnvoll sein, über die SAP-GUI Daten im SAP-System einzusehen. Das ist mit einem SAP-Systembenutzer nicht möglich.

******

Weitere Informationen finden Sie in den folgenden Unterabschnitten:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
