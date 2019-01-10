---
ref: xu-introduction-01
layout: page
title: Systemvoraussetzungen
description: Systemvoraussetzungen
product: xtract-universal
parent: einfuehrung
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=systemvoraussetzungen
---

**SAP Releases**
 	
- SAP R/3 Version 4.0B oder höher oder SAP ECC
- SAP S/4 HANA
- SAP BW Version 3.1 oder höher
- SAP BW/4 HANA

Die Integration findet über den SAP-Applikationsserver statt. Daher spielt die Datenbank 
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

**Sicherheitseinstellungen**
 	
- SAP System- oder Dialog-Anwender mit entsprechenden [Berechtigungosbjekten](https://kb.theobald-software.com/sap/authority-objects---sap-user-rights).
- SAP Authentifizierung: SSO (Single Sign On) oder SAP Anmeldedaten.


**SAP-Lizenzen**
Zusätzliche SAP-Lizenzen für die Extraktion der SAP-Daten können erforderlich sein. Bitte dazu SAP kontaktieren.

{% include _content/de/operating-systems.md %}

**Andere Anwendungen und Frameworks**
 	
- .NET Framework 4.5.2 oder höher. Das Famework können Sie von der Microsoft-Webseite herunterladen.

**Hardware Anforderungen**
 	
- **Prozessorkerne** 
		Minimum: 2 Cores. 
		1 zusätzlicher Prozessorkern ist erforderlich für jede parallele Extraktion. 

- **Prozessorgeschwindigkeit**  
		Minimum: 1.4 GHz, Empfohlen: 2.0 GHz oder schneller 

- **Arbeitsspeicher**
		Der Verbrauch des Arbeitsspeichers hängt von vielen Faktoren ab, u.a. vom Komponententyp, Anzahl der Spalten und Anzahl der Zeilen pro Paket (d.h. package size). Z.B. benötigt die BW Cube Komponente im Vergleich mehr Speicher als die Table-Komponente. <br>
		Minimum: 8 GB, Empfohlen: 12 GB oder mehr abhängig vom Datenvolumen.

- **Festplattenspeicher** 
		Für die Installation werden 150 MB Festplattenspeicher benötigt. 

**32/64-Bit Umgebung**
 	
- Das Produkt kann auf 32-Bit und 64-Bit Betriebssystemen installiert werden.


**Zielumgebungen (Destinations)**

Für eine Zielumgebung kann die Installation einer entsprechenden Bibliothek nötig sein. Weitere Informationen finden Sie auf der jeweiligen Seite **Voraussetzungen** der Zielumgebung.
