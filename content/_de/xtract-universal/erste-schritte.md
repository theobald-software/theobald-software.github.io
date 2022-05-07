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
Dieser Abschnitt enthält eine allgemeine Einführung in Xtract Universal und die notwendigen Voraussetzungen zum Betrieb und Einsatz des SAP-Hubs.

### Voraussetzung

- Installation von Xtract Universal auf einem Windows Server / einer VM. Laden Sie sich die aktuelle Version von unserer Webseite herunter, siehe [Download Trial Version](https://theobald-software.com/en/download-trial).
- Der Netzwerk-Zugriff auf die SAP NetWeaver Komponente muss gewährleistet sein, siehe [TCP/IP Ports of All SAP Products](https://help.sap.com/docs/Security/575a9f0e56f34c6e8138439eefc32b16/616a3c0b1cc748238de9c0341b15c63c.html?language=en-US). 
- Der Zugriff auf die RFC-Schnittstelle der SAP-Instanz muss gewährleistet sein, siehe [Authority Objects - SAP User Rights](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).
- Für folgende Komponenten sind Anpassungen in SAP notwendig: [Table](./sap-customizing/funktionsbaustein-fuer-table-extraktion) (optional), [Report](./sap-customizing/report-funktionsbaustein-installieren), [OHS](./sap-customizing/vorbereitung-fuer-ohs-im-bw), [DeltaQ](./sap-customizing/customizing-fuer-deltaq). <br>
Z-Funktionsbausteine für die Table und Report-Komponente werden als Teil der Theobald Software Produkte ausgeliefert und können mithilfe von Transportaufträgen installiert werden. 
Die Verwendung der OHS und DeltaQ-Komponenten erfordert manuelle Einstellungen in SAP. 

{: .box-tip }
**Tipp:** Wir empfehlen einen SAP-Systembenutzer für die Produktivumgebung zu verwenden und einen Dialogbenutzer mit erweiterten Rechten (SE37, SE16, RSA3, ...) für die Evaluierungsphase.
Während der Evaluierung kann es sinnvoll sein, über die SAP-GUI Daten im SAP-System einzusehen. Ein SAP-Systembenutzer kann nicht via SAP-GUI auf SAP zugreifen.

Eine kurze Einführung in die Benutzung von Xtract Universal erhalten Sie in unserem Tutorial-Video [Get started with Xtract Universal](https://www.youtube.com/watch?v=pdlsfm0dLMA).

******

Weitere Informationen finden Sie in den folgenden Unterabschnitten:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
