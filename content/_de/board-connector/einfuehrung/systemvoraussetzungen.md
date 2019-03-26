---
ref: bc-introduction-01
layout: page
title: Systemvoraussetzungen
description: Systemvoraussetzungen
product: board-connector
parent: einfuehrung
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /BOARD-Connector-DE/default.aspx?pageid=systemvoraussetzungen
---

**BOARD**
 	
- Version 7.3.1 oder höher.

**SAP Releases**
 	
- SAP R/3 Version 4.0B oder höher oder SAP ECC
- SAP S/4 HANA
- SAP BW Version 3.1 oder höher
- SAP BW/4 HANA

Die Integration findet über den SAP-Applikationsserver statt. Daher spielt die Datenbank <br>
unter dem SAP-System keine Rolle. Insbesondere SAP-Systeme auf HANA werden somit ohne Einschränkung unterstützt.

| Komponente    | SAP Release            | Anforderung an das SAP System                                        |
|---------------|------------------------|----------------------------------------------------------------------|
| **Table**     | Rel. above 4.0B        | In den meisten Fällen ist die Installation eines Z-Moduls notwendig. |
| **Table Join** | SAP 7.0 und höher     | Installation eines Z-Moduls ist notwendig. |
| **Query**     | Rel. 4.0B und höher.   | Keine.                                                               |
| **BAPI**      | Rel. 4.0B und höher.   | Keine.                                                               |
| **Report**    | Rel. 4.0B und höher.   | Installation eines Z-Moduls ist notwendig.                           |
| **BW Cube**   | Rel. BW 3.1 und höher. | Keine.                                                               |
| **Hierarchy** | Rel. BW 3.1 und höher. | Keine.                                                               |
| **OHS**       | Rel. BW 3.5 und höher. | Customizing.                                                         |
| **DeltaQ**    | Rel. 4.6A und höher.   | Customizing.                                                         |

Informationen über die Installation der Z-Funktionsbausteine bzw. das Customizing finden Sie im Kapitel SAP Customizing.

**Ports**

Folgende Ports müssen abhängig vom SAP-System offen sein,
wobei nn die Instanznummer des SAP Systems ist (z.B. 00 oder 99).

- SAP Application Server: Port 33nn
- SAP Message Server (Load Balancing): Port 36nn
- Secure Communication Network (SCN): Port 48nn
- SAP Router: Port 3399

**Benutzerberechtigungen**
 	
SAP System oder Dialog-Anwender mit den entsprechenden [Berechtigungsobjekten](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/7/67/authority-objects).

**SAP-Lizenzen**

Zusätzliche SAP-Lizenzen für die Extraktion der SAP-Daten können erforderlich sein. Bitte dazu SAP kontaktieren.

{% include _content/de/operating-systems.md %}

**Andere Anwendungen und Frameworks**

- .NET Framework 4.6.1 oder höher. Das Famework können Sie von der [Microsoft-Webseite](https://www.microsoft.com/de-de/download/details.aspx?id=49982) herunterladen.

**Hardware Anforderungen**
 	
- **Prozessorkerne**
	Minimum: 2 Cores.<br>
	1 zusätzlicher Prozessorkern ist erforderlich für jede parallele Extraktion.

- **Prozessorgeschwindigkeit**
	Minimum: 1.4 GHz, Empfohlen: 2.0 GHz oder schneller

- **Arbeitsspeicher**
	Der Verbrauch des Arbeitsspeichers hängt von vielen Faktoren ab, u.a. vom Komponententyp, Anzahl der Spalten und Anzahl der Zeilen pro Paket (d.h. package size). Z.B. benötigt die BW Cube Komponente im Vergleich mehr Speicher als die Table-Komponente.<br>
	Minimum: 8 GB, Empfohlen: 12 GB oder mehr abhängig vom Datenvolumen.

- **Festplattenspeicher**
	Für die Installation werden 150 MB Festplattenspeicher benötigt. 

**32/64-Bit Umgebung**
 	
- Das Produkt kann nur auf 64-Bit Betriebssystemen installiert werden.

**Sicherheitseinstellungen**
 	
- Benutzerauthentifizierung.
- SAP Authentifizierung: SSO (Single Sign On) oder SAP Anmeldedaten.
- SAP System- oder Dialog-Anwender mit entsprechenden [Berechtigungsobjekten](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/7/67/authority-objects).

**Netzwerkenistellungen**
 	
- Port 33nn muss offen sein, wobei nn = die Systemnummer des SAP-Systems ist.
- Die Kommunikation zwischen BOARD Connector Designer und Service erfolgt standardmäßig über Port 8096.
- Der Aufruf der Extraktionen erfolgt standardmäßgi über Port 8097.
- Der BOARD Server verbindet sich mit dem BOARD Connector standardmäßig über Port 8098.

