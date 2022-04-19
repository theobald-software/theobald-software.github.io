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

Dieser Abschnitt enthält eine allgemeine Einführung in Xtract Universal.
Dieser Abschnitt ist die Voraussetzung für alle nachfolgenden Abschnitte.<br>
Bevor Sie Xtract Universal das erste Mal starten:
- prüfen Sie, ob die Standard-Ports für die Kommunikation zwischen SAP und Xtract Universal geöffnet sind, siehe [Netzwerk-Einstellungen](#netzwerk-einstellungen).
- prüfen Sie, ob der SAP Benutzer für die SAP-Verbindung alle benötigten Benutzerrechte hat, siehe [SAP Benutzerrechte](#sap-benutzerrechte).
- prüfen Sie, ob Anpassungen in Ihrem SAP-System nötig sind, siehe [Anpassungen in SAP](#anpassungen-in-sap).

### Netzwerk-Einstellungen

#### SAP Ports

Die folgenden Ports müssen für die Kommunikation zwischen dem Windows Server, auf dem Xtract universal läuft und dem SAP-System, von dem Daten extrahiert werden, offen sein:

| SAP NetWeaver Komponente | Port<br> NN = Systemnummer des SAP-Systems, <br>siehe [SAP-Dokumentation: TCP/IP Ports of All SAP Products](https://help.sap.com/viewer/ports) |
| ------------- |:-------------:|
| SAP Application Server | 33\<NN> |
| SAP Message Server | 36\<NN> |
| Secure Network Communication (SNC)| 48\<NN\> |
| SAP-Router | 3399 |

#### Xtract Universal Ports

- Der Standard-Port für die Kommunikation zwischen dem Xtract Universal Designer und dem Xtract Universal Server ist 8064.
- Die Standard-Ports für die Kommunikation mit dem Xtract Universal (web) Server sind 8065 (HTTP) und 8165 (HTTPS).

Die Ports können in den [Server settings](./server/server_einstellungen) geändert werden.

### SAP Benutzerrechte

Um ein Verbindung zu einem SAP-System herzustellen und Daten zu extrahieren, wird ein SAP-Benutzer mit entsprechenden Zugriffsrechten benötigt.
Welche Benutzerrechte erforderlich sind, ist abhängig von den [Komponenten](./index#verfügbare-komponenten), die für die Extraktion verwendet werden.
- Die Benutzerrechte für eine Verbindung mit SAP via RFC, sind im Knowledge Base Artikel [Authority Objects - SAP User Rights: General Authorization Objects](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#general-authorization-objects) aufgelistet.
- Die Benutzerrechte für die einzelnen Komponenten, sind im Knowledge Base Artikel [Authority Objects - SAP User Rights](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights) aufgelistet.

Wenden Sie sich an Ihr SAP Basis Team, um einen Benutzer mit den entsprechenden Benutzerrechten einzurichten.
Der SAP-Benutzer kann sowohl ein Systembenutzer als auch ein Dialogbenutzer sein.

{: .box-tip }
**Tipp:** Wir empfehlen einen SAP-Systembenutzer für die Produktivempfehlung zu verwenden und einen Dialogbenutzer mit erweiterten Rechten (SE37, SE16, RSA3, ...) für die Evaluierungsphase.
Während der Evaluierung kann es sinnvoll sein, über die SAP-GUI Daten im SAP-System einzusehen.
Ein SAP-Systembenutzer kann nicht via SAP-GUI auf SAP zugreifen.


### Anpassungen in SAP

Ob eine Installation von Funktionsbausteinen oder Anpassungen an Ihrem SAP-System notwendig sind, ist abhängig von den [Komponenten](./index#verfügbare-komponenten), die für die Extraktion verwendet werden.
Die folgende Tabelle zeigt, welche Komponenten welche Anpassungen in SAP erfordern:

| Komponente | Details |
| ------------- |:-------------:|
| Table <br>Extraktion & Verknüpfung von SAP Tabellen und Ansichten | Installation eines Funktionsbausteins ist empfohlen und je nach Szenario erforderlich, siehe [Funktionsbaustein für Table-Extraktionen](./sap-customizing/funktionsbaustein-fuer-table-extraktion). |
| Report <br>Extraktion von ABAP-Reports | Installation eines Funktionsbausteins ist erforderlich, siehe [Funktionsbaustein für Reports](./sap-customizing/report-funktionsbaustein-installieren). |
| DeltaQ <br>Extraktion von (OLTP / Export) DataSources und (BW) Extraktoren | Anpassungen in SAP sind erforderlich, siehe [Customizing für DeltaQ](./sap-customizing/customizing-fuer-deltaq). |
| OHS (Open Hub Services) Extraction of OHS destinations from a BW system | Anpassungen in SAP sind erforderlich, siehe [Customizing für OHS im BW](./sap-customizing/vorbereitung-fuer-ohs-im-bw). |

Alle anderen Komponenten erfordern keine Anpassungen in Ihrem SAP-System.<br>
Für mehr Informationen über Komponenten und Ihre SAP-Abhängigkeiten, siehe [Systemvoraussetzungen: Installation und Konfiguration auf SAP](./einfuehrung/systemvoraussetzungen#installation-und-konfiguration-auf-sap).
 
 
******

Weitere Informationen finden Sie in den folgenden Unterabschnitten:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
