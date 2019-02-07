---
ref: xr-requirements-and-installation-01
layout: page
title: Systemvoraussetzungen
description: Systemvoraussetzungen
product: xtract-rs
parent: voraussetzungen-und-installation
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-RS-DE/default.aspx?pageid=systemvoraussetzungen
---

**SQL Server**
 	
- SQL Server 2005 (Standard, Professional oder Enterprise)
- SQL Server 2008
- SQL Server 2008 R2
- SQL Server 2012
- SQL Server 2014
- SQL Server 2016
- SQL Server Reporting Services
- Power BI Report Server 2018

**SAP Releases**
 	
- SAP R/3 Version 4.0B oder höher oder SAP ECC.
- SAP BW Version 3.1 oder höher.

| Komponente    | SAP Release            | Anforderung an das SAP System                                        |
|---------------|------------------------|----------------------------------------------------------------------|
| **Table**     | Rel. above 4.0B        | In den meisten Fällen ist die Installation eines Z-Funktionsbuasteins notwendig. |
| **Query**     | Rel. 4.0B und höher.   | Keine.                                                               |
| **BAPI**      | Rel. 4.0B und höher.   | Keine.                                                               |
| **Report**    | Rel. 4.0B und höher.   | [Installation eines Z-Moduls](../sap-customizing/funktionsbaustein-fuer-table-komprimierung) ist notwendig.                           |
| **BW Cube**   | Rel. BW 3.1 und höher. | Keine.                                                               |
| **Hierarchy** | Rel. BW 3.1 und höher. | Keine.                                                               |
                                                       |

{% include _content/de/operating-systems.md %}

**Andere Anwendungen und Frameworks**
 	
- Visual C++ 2005 Runtime. Die Runtime können Sie [hier](https://www.microsoft.com/en-us/download/details.aspx?id=14431) herunterladen.
- .NET Framework 3.0 oder höher. Das Famework können Sie [hier](https://www.microsoft.com/en-us/download/details.aspx?id=21) herunterladen.
- Librfc32.dll falls SAP GUI nicht installiert ist. Einen Download-Link finden Sie [hier](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/54/9/useful-links).

**Arbeitsspeicher**
 	
- 2 GB minimum, abhängig vom Datenvolumen, eventuell mehr.

**Festplattenspeicher**
 	
- Für die Installation werden 30 MB Festplattenspeicher benötigt.

**32/64-Bit Umgebung**
 	
- Das Produkt kann auf 32-Bit und 64-Bit Betriebssystemen installiert werden.

**Sicherheitseinstellungen**
 	
- Benutzerauthentifizierung.
- SAP Authentifizierung: SSO (Single Sign On) oder SAP Anmeldedaten.
- SAP System oder or Dialog-Anwender mit entsprechenden [Berechtigungsobjekten](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/7/67/authority-objects).

**Netzwerkeinstellungen**
 	
- Port 33nn muss offen sein, wobei nn = die Systemnummer des SAP Systems ist.
