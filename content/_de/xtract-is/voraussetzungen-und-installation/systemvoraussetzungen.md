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

**SQL Server**
 	
- SQL Server 2008 (alle SQL Server Versionen. Die Express-Version beinhaltet die SSIS nicht).
- SQL Server 2008 R2
- SQL Server 2012
- SQL Server 2014
- SQL Server 2016
- SQL Server 2017
- SQL Server Integration Services (SSIS)
- Für die Entwicklung: Die entsprechende Visual Studio Version (außer der Express-Version) für Business Intelligence zur Erstellung von SSIS-Paketen. Siehe [Liste der unterstützen Versionen von SSIS & VS](https://kb.theobald-software.com/xtract-is/list-of-the-ssisvs-versions-supported-by-xtract-is). 

**SAP Releases**
 	
- SAP R/3 Version 4.0B oder höher oder SAP ECC
- SAP S/4 HANA
- SAP BW Version 3.1 oder höher
- SAP BW/4 HANA

Die Integration findet über den SAP-Applikationsserver statt. Daher spielt die Datenbank 
unter dem SAP-System keine Rolle. Insbesondere SAP-Systeme auf HANA werden somit ohne Einschränkung unterstützt.

| Komponente  | SAP Release       | Anforderung an das SAP System                                                |
|------------|-------------------|-------------------------------------------------------------------------------|
| Table      | Rel.above 4.0B    | For most tasks, the installation of a Z-module is necessary, but not for all. |
| Table Join | Rel. 7.0 or above | Installation of a custom function module is necessary.                        |
| Query      | Rel. above 4.0B   | Nothing.                                                                      |
| BAPI       | Rel. above 4.0B   | Nothing.                                                                      |
| Report     | Rel. above 4.0B   | Installation of a custom function module is necessary.                        |
| BW Cube    | Rel. above BW 3.1 | Nothing.                                                                      |
| Hierarchy  | Rel. above BW 3.1 | Nothing.                                                                      |
| OHS        | Rel. above BW 3.5 | Customizing.                                                                  |
| DeltaQ     | Rel. above 4.6A   | Customizing.                                                                  |


Informationen über die Installation der Z-Funktionsbausteine bzw. das Customizing finden Sie im Kapitel SAP Customizing.

**Ports**

Folgende Ports müssen abhängig vom SAP-System offen sein,
wobei nn die Instanznummer des SAP Systems ist (z.B. 00 oder 99).

- SAP Application Server: Port 33nn
- SAP Message Server (Load Balancing): Port 36nn
- Secure Communication Network (SCN): Port 48nn
- SAP Router: Port 3399

**Benutzerberechtigungen**
 	
SAP System oder Dialog-Anwender mit den entsprechenden [Berechtigungsobjekten](https://kb.theobald-software.com/sap/authority-objects---sap-user-rights).

**SAP-Lizenzen**

Zusätzliche SAP-Lizenzen für die Extraktion der SAP-Daten können erforderlich sein. Bitte dazu SAP kontaktieren.

{% include _content/de/operating-systems.md %}

**Andere Anwendungen und Frameworks**
 	
- bis SSIS 2008: .NET Framework 3.5 SP1
- ab SSIS 2012: .NET Framework 4.5.2 oder höher. Das Famework können Sie [hier](https://www.microsoft.com/de-de/download/details.aspx?id=42643) herunterladen.

**Arbeitsspeicher**
 	
- 4 GB minimum, abhängig vom Datenvolumen, eventuell mehr.

**Festplattenspeicher**
 	
- Für die Installation werden 50 MB 
Festplattenspeicher benötigt.

**32/64-Bit Umgebung**
 	
- Das Produkt kann auf 32-Bit und 64-Bit Betriebssystemen installiert werden.
