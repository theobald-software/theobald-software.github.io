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

| Voraussetzung     | Beschreibung  |  
|------------|---------------|
| Installation auf Windows Server / VM | Laden Sie sich die aktuelle Version als Trial von unserer Webseite, siehe [Download Trial Version](https://theobald-software.com/en/download-trial). | 
| Netzwerkverbindung zum SAP-Gateway    | Der Netzwerk-Zugriff auf die SAP NetWeaver Komponente muss gewährleistet sein, siehe [TCP/IP Ports of All SAP Products](https://help.sap.com/docs/Security/575a9f0e56f34c6e8138439eefc32b16/616a3c0b1cc748238de9c0341b15c63c.html?language=en-US). | 
| Berechtigungen des SAP-Benutzers | Der Zugriff auf die RFC-Schnittstelle der SAP-Instanz muss gewährleistet sein. Benutzerrechte für die Prozessierung sind notwendig, siehe [Authority Objects - SAP User Rights](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights). | 
| Anpassungen in SAP für folgende Komponenten: <br>[Table](./sap-customizing/funktionsbaustein-fuer-table-extraktion) (optional) <br>[Report](./sap-customizing/report-funktionsbaustein-installieren) <br>[OHS](./sap-customizing/vorbereitung-fuer-ohs-im-bw) <br>[DeltaQ](./sap-customizing/customizing-fuer-deltaq) | Z-Funktionsbausteine für die Table und Report-Komponente werden als Teil der Theobald Software Produkte ausgeliefert und können mithilfe von Transportaufträgen installiert werden. Die Verwendung der OHS und DeltaQ-Komponenten erfordert manuelle Einstellungen in SAP. |
| Test der SAP-Verbindung  | Erstellen und testen Sie eine SAP-Verbindung wie im Kapitel [SAP-Verbindung Erstellen](./einfuehrung/sap-verbindungen-anlegen) beschrieben. | 

{: .box-tip }
**Tipp:** Wir empfehlen einen SAP-Systembenutzer für die Produktivumgebung zu verwenden und einen Dialogbenutzer mit erweiterten Rechten (SE37, SE16, RSA3, ...) für die Evaluierungsphase.
Während der Evaluierung kann es sinnvoll sein, über die SAP-GUI Daten im SAP-System einzusehen. Ein SAP-Systembenutzer kann nicht via SAP-GUI auf SAP zugreifen.

******

Weitere Informationen finden Sie in den folgenden Unterabschnitten:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
