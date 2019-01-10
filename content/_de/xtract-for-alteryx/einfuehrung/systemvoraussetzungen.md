---
ref: xfa-introduction-01
layout: page
title: Systemvoraussetzungen
description: Systemvoraussetzungen
product: xtract-for-alteryx
parent: einfuehrung
permalink: /:collection/:path
weight: 1
lang: de_DE
---

**Alteryx**
 	
- Alteryx Designer und Server ab Version 2018 oder höher.

**SAP Releases**
Grundsätzlich werden alle auf dem ABAP Netweaver Stack basierenden SAP-Systeme unterstützt. 

- SAP R/3 Version 4.0B oder höher oder SAP ECC
- SAP S/4 HANA (on-premises)
- SAP BW Version 3.1 oder höher
- SAP BW/4 HANA
- SAP-Systeme aus der Business Suite (CRM, SRM, SCM usw.) 
- Alle auf SAP ABAP Netweaver Stack basierende Systeme (z.B. SAP Business All in One)

Die von SAP zugekauften und nicht auf dem ABAP Netweaver Stack basierenden Systeme, wie z.B. Sybase, Ariba, Success Factors und Concur, werden nicht unterstützt.<br>
Die Integration findet über den SAP-Applikationsserver statt. Daher spielt die Datenbank unter dem SAP-System keine Rolle. <br>
Insbesondere SAP-Systeme auf HANA (wie S/4 HANA oder BW/4 HANA) werden somit ohne Einschränkung unterstützt.<br>
Direkter Lesezugriff aus der HANA-Datenbank wird nicht unterstützt. <br>


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


**SAP Benutzerberechtigungen**
 	
- Benutzerauthentifizierung (Benutzername und Passwort).
- SAP Authentifizierung mit Single Sign On (SSO) und Kerberos
- SAP Logon Ticket (über SAP Ticket Issuer)
- SAP System- oder Dialog-Anwender mit entsprechenden [Berechtigungsobjekten](https://kb.theobald-software.com/sap/authority-objects---sap-user-rights).

**Ports**

Folgende Ports müssen abhängig vom SAP-System offen sein,
wobei nn die Instanznummer des SAP Systems ist (z.B. 00 oder 99).

- SAP Application Server: Port 33nn
- SAP Message Server (Load Balancing): Port 36nn
- Secure Communication Network (SCN): Port 48nn
- SAP Router: Port 3399

**SAP-Lizenzen**

Zusätzliche SAP-Lizenzen für die Extraktion der SAP-Daten können erforderlich sein. Bitte dazu SAP kontaktieren.


**Unterstützte Windows-Betriebssysteme**
 	
Grundsätzlich alle von Microsoft momentan untersützten Windows-Betriebssysteme.

- Windows 7
- Windows 8
- Windows 10
- Windows Server 2008
- Windows Server 2008 R2
- Windows Server 2012
- Windows Server 2012 R2
- Windows Server 2016

**Andere Anwendungen und Frameworks**
 	
- .NET Framework 4.7.1 oder höher. Das Famework können Sie [hier](https://www.microsoft.com/en-US/download/details.aspx?id=56116) herunterladen.
- Visual C++ 2005 Laufzeit-Bibliothek ist benötigt und wird mitinstalliert.

**Hardware Anforderungen**

Bitte beachten Sie an erster Stelle die Anforderung an den Alteryx Designer bzw. Server. 
 	
- **Arbeitsspeicher**
	Der Verbrauch des Arbeitsspeichers hängt von vielen Faktoren ab, u.a. vom Komponententyp, Anzahl der Spalten und Anzahl der Zeilen pro Paket (d.h. package size). Z.B. benötigt die BW Cube Komponente im Vergleich mehr Speicher als die Table-Komponente.<br>
	Minimum: 8 GB, Empfohlen: 12 GB oder mehr abhängig vom Datenvolumen.

- **Festplattenspeicher**
	Für die Installation werden 150 MB Festplattenspeicher benötigt. 

