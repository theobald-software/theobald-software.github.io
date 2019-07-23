---
ref: xu-introduction-02
layout: page
title: Systemvoraussetzungen
description: Systemvoraussetzungen
product: xtract-universal
parent: einfuehrung
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=systemvoraussetzungen
---

**SAP Releases**
 	
- SAP R/3 Version 4.0B oder höher oder SAP ECC
- SAP S/4 HANA
- SAP BW Version 3.1 oder höher
- SAP BW/4 HANA

Die Integration findet über den SAP-Applikationsserver statt, daher spielt die Datenbank unter dem SAP-System keine Rolle.<br>
Insbesondere SAP-Systeme auf HANA werden somit ohne Einschränkung unterstützt.

| Komponente    | SAP Release            | Anforderung an das SAP System                                        |
|---------------|------------------------|----------------------------------------------------------------------|
| **Table**     | Rel. above 4.0B        | In den meisten Fällen ist die Installation eines Z-Moduls notwendig. |
| **Table Join** | SAP 7.0 und höher     | Installation eines Z-Moduls ist notwendig. |
| **Query**     | Rel. 4.0B und höher   | keine                                                               |
| **BAPI**      | Rel. 4.0B und höher   | keine                                                               |
| **Report**    | Rel. 4.0B und höher   | Installation eines Z-Moduls ist notwendig.                           |
| **BW Cube**   | Rel. BW 3.1 und höher | keine                                                               |
| **Hierarchy** | Rel. BW 3.1 und höher | keine                                                               |
| **OHS**       | Rel. BW 3.5 und höher | Customizing                                                        |
| **DeltaQ**    | Rel. 4.6A und höher  | Customizing                                                         |

Informationen über die Installation der Z-Funktionsbausteine bzw. das Customizing finden Sie im Kapitel [SAP Customizing](https://help.theobald-software.com/de/xtract-universal/sap-customizing)

**Ports**

Folgende Ports müssen abhängig vom SAP-System offen sein,
wobei *nn* die Instanznummer des SAP Systems ist (z.B. 00 oder 99). <br>

- SAP Application Server: Port 33*nn*
- SAP Message Server (Load Balancing): Port 36*nn*
- Secure Communication Network (SCN): Port 48*nn*
- SAP Router: Port 3399

**Sicherheitseinstellungen** <br> 	
- SAP System- oder Dialog-Anwender mit entsprechenden [Berechtigungosbjekten](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).
- SAP Authentifizierung: SSO (Single Sign On) oder SAP Anmeldedaten.


**SAP-Lizenzen** <br>

Zusätzliche SAP-Lizenzen für die Extraktion der SAP-Daten können erforderlich sein. Bitte dazu SAP kontaktieren.

{% include _content/de/operating-systems.md %}

**Andere Anwendungen und Frameworks** <br> 	
- .NET Framework 4.7.1 oder höher. Das Famework können Sie von der [Microsoft-Webseite](https://www.microsoft.com/de-de/download/details.aspx?id=56116) herunterladen.

**Hardware Anforderungen**
 	
- **Prozessorkerne** <br>
		Minimum: 2 Cores. 
		1 zusätzlicher Prozessorkern ist erforderlich für jede parallele Extraktion. 

- **Prozessorgeschwindigkeit**  <br>
		Minimum: 1.4 GHz, Empfohlen: 2.0 GHz oder schneller 

- **Arbeitsspeicher** <br>
		Minimum: 8 GB, Empfohlen: 12 GB oder mehr abhängig vom Datenvolumen.<br>
		Der Verbrauch des Arbeitsspeichers hängt von vielen Faktoren ab, u.a. vom Komponententyp, Anzahl der Spalten und Anzahl der Zeilen pro Paket (d.h. package size). Z.B. benötigt die BW Cube Komponente im Vergleich mehr Speicher als die Table-Komponente. <br>

- **Festplattenspeicher** <br>
		Für die Installation werden 150 MB Festplattenspeicher benötigt. 

**32/64-Bit Umgebung** <br> 	
- Das Produkt kann nur auf 64-Bit Betriebssystemen installiert werden.

**Zielumgebungen (Destinations)** <br>
- Für eine Zielumgebung kann die Installation einer entsprechenden Bibliothek nötig sein. Weitere Informationen finden Sie auf der jeweiligen Seite *Voraussetzungen* der Zielumgebung.
