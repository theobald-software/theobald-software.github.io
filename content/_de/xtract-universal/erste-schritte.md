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
Dieser Abschnitt enthält eine allgemeine Einführung in Xtract Universal und die notwendigen Voraussetzungen zum Betrieb und Einsatz unseres SAP-Hubs.

| Voraussetzung     | Beschreibung  | Details | 
|------------|---------------|----------------|
| 1. Installation auf Windows Server / VM. | Laden Sie sich die aktuelle Version als Trial von unserer Webseite.  | [your trial version](https://theobald-software.com/en/download-trial) | 
| 2. Netzwerkverbindung zum SAP-Gateway.     | Stellen Sie den netzwerktechnischen Zugriff auf die SAP NetWeaver Komponente sicher.|  [TCP/IP Ports of All SAP Products](https://help.sap.com/docs/Security/575a9f0e56f34c6e8138439eefc32b16/616a3c0b1cc748238de9c0341b15c63c.html?language=en-US) | 
| 3. Berechtigungen des SAP-Benutzers. | Der Zugriff auf die RFC-Schnittstelle der SAP-Instanz sowie Benutzerrechte für die Prozessierung notwendig.  | [Authority Objects - SAP User Rights](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights) | 
| 4. Ablage & Test der SAP-Verbindung.   | Erstellung & Test einer SAP-Verbindung gemäß Anleitung.|  [SAP-Verbindung Erstellen](https://help.theobald-software.com/de/xtract-universal/einfuehrung/sap-verbindungen-anlegen) | 
| 5. Transport der Z-Bausteine. | Die Z-Funktionsbausteine / ABAP-Framework werden als Teil der Theobald Software Produkte ausgeliefert und können mithilfe von Transportaufträgen installiert werden. | [SAP Customizing](http://localhost:4000/de/xtract-universal/sap-customizing/) |


{: .box-tip }
**Tipp:** Wir empfehlen einen SAP-Systembenutzer für die Produktivumgebung zu verwenden und einen Dialogbenutzer mit erweiterten Rechten (SE37, SE16, RSA3, ...) für die Evaluierungsphase.
Während der Evaluierung kann es sinnvoll sein, über die SAP-GUI Daten im SAP-System einzusehen. Ein SAP-Systembenutzer kann nicht via SAP-GUI auf SAP zugreifen.

******

Weitere Informationen finden Sie in den folgenden Unterabschnitten:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
