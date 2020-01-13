---
ref: xi-requirements-and-installation-01
layout: page
title: Systemvoraussetzungen
description: Systemvoraussetzungen
product: xtract-is
parent: voraussetzungen-und-installation
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=systemvoraussetzungen
---

### SQL Server
 	
- SQL Server 2012 SP4 (bis 12.07.2022)
- SQL Server 2014 SP3 (bis 09.07.2024)
- SQL Server 2016 SP2 (bis 14.07.2026)
- SQL Server 2017 (bis 12.10.2027)
- SQL Server 2019 (bis 08.01.2030)
- SQL Server Integration Services (SSIS)
- Für die Entwicklung: Die entsprechende Visual Studio Version (außer der Express-Version) für Business Intelligence zur Erstellung von SSIS-Paketen. 

### SAP Releases
 	
- SAP R/3 Version 4.0B oder höher oder SAP ECC
- SAP S/4 HANA
- SAP BW Version 3.1 oder höher
- SAP BW/4 HANA

Die Integration findet über den SAP-Applikationsserver statt. Daher spielt die Datenbank 
unter dem SAP-System keine Rolle. Insbesondere SAP-Systeme auf HANA werden somit ohne Einschränkung unterstützt.

| Komponente  | SAP Release       | Anforderung an das SAP System                                                                         |
|------------|:------------------|--------------------------------------------------------------------------------------------------------|
| Table      | Rel. above 4.0B    | für die meisten Aufgaben erfordern die Installation eines Funktionsbausteins, jedoch nicht für alle |
| Table Join | Rel. 7.0 or above | die Installation eines Z-Funktionsbausteins ist notwendig                                            |
| Query      | Rel. above 4.0B   | keine                                                                                                |
| BAPI       | Rel. above 4.0B   | keine                                                                                                |
| Report     | Rel. above 4.0B   | die Installation eines Z-Funktionsbausteins ist notwendig                                            |
| BW Cube    | Rel. above BW 3.1 | keine                                                                                                |
| Hierarchy  | Rel. above BW 3.1 | keine                                                                                                |
| OHS        | Rel. above BW 3.5 | Anpassung / customizing                                                                              |
| DeltaQ     | Rel. above 4.6A   | Anpassung / customizing                                                                              |


Informationen über die Installation der Z-Funktionsbausteine bzw. das Customizing finden Sie im Kapitel [SAP Customizing](https://help.theobald-software.com/de/xtract-is/sap-customizing) .

### Ports

Folgende Ports müssen abhängig vom SAP-System offen sein,
wobei *nn* die Instanznummer des SAP Systems ist (z.B. 00 oder 99).

- SAP Application Server: Port 33*nn*
- SAP Message Server (Load Balancing): Port 36*nn*
- Secure Communication Network (SCN): Port 48*nn*
- SAP Router: Port 3399

### Benutzerberechtigungen
 	
SAP System oder Dialog-Anwender mit den entsprechenden [Berechtigungsobjekten](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).

### SAP-Lizenzen

Zusätzliche SAP-Lizenzen für die Extraktion der SAP-Daten können erforderlich sein. Bitte dazu SAP kontaktieren.

{% include _content/de/operating-systems.md %}

### Andere Anwendungen und Frameworks
 	
.NET Framework 4.7.1 oder höher. Das Famework können Sie [hier](https://www.microsoft.com/de-DE/download/details.aspx?id=56116) herunterladen.

### Arbeitsspeicher
 	
- 4 GB minimum, abhängig vom Datenvolumen, eventuell mehr

### Festplattenspeicher
 	
- für die Installation werden 50 MB 
Festplattenspeicher benötigt

### 32/64-Bit Umgebung
 	
- das Produkt kann auf 32-Bit und 64-Bit Betriebssystemen installiert werden
<!--stackedit_data:
eyJoaXN0b3J5IjpbMzc2MDMwMDIyXX0=
-->
