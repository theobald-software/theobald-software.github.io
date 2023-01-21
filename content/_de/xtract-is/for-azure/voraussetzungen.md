---
ref: xi-for-azure-01
layout: page
title: Voraussetzungen
description: Voraussetzungen
product: xtract-is
parent: for-azure
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=voraussetzungen
---


### Notwendige Komponenten
- ADFv2
- Azure-SSIS Integration Runtime (IR)

### Einrichten der Umgebung

Das Einrichten der notwendigen Umgebung ist in der folgenden Microsoft-Dokumentation dokumentiert:

- [Bereitstellen der Azure-SSIS Integration Runtime in Azure Data Factory](https://docs.microsoft.com/de-de/azure/data-factory/tutorial-deploy-ssis-packages-azure)
- [Bereitstellen der Azure-SSIS Integration Runtime in Azure Data Factory mit PowerShell](https://docs.microsoft.com/de-de/azure/data-factory/tutorial-deploy-ssis-packages-azure-powershell).

Sobald die Umgebung läuft, entwickeln Sie ein einfaches SSIS-Paket (das KEINE Xtract IS-Komponenten enthält) und stellen Sie das Paket auf der Azure-SSIS IR bereit und führen es aus.

Wenn die Ausführung des SSIS-Pakets erfolgreich ist, fahren Sie mit der Einrichtung von Xtract IS für Azure auf der Azure-SSIS-IR fort. 

### Unterstützte Versionen der SQL Server Integration Services (SSIS)
 	
- SQL Server Integration Services (SSIS) 2012 SP4 (bis 12.07.2022)
- SQL Server Integration Services (SSIS) 2014 SP3 (bis 09.07.2024)
- SQL Server Integration Services (SSIS) 2016 SP2 (bis 14.07.2026)
- SQL Server Integration Services (SSIS) 2017 (bis 12.10.2027)
- SQL Server Integration Services (SSIS) 2019 (bis 08.01.2030)

Für die Entwicklung: SQL Server Data Tools werden benötigt, um SSIS-Pakete zu erstellen. Verwenden Sie das entsprechende SSDT für den von Ihnen eingesetzten SQL Server. Weitere Details finden Sie in der [Microsoft Hilfe](https://docs.microsoft.com/en-us/sql/ssdt/download-sql-server-data-tools-ssdt?view=sql-server-ver15).

Die Version der SQL Server-Datenbank, die in SSIS zum Lesen oder Schreiben von Daten verwendet wird, kann sich von der Version der SQL Server Integration Services (SSIS) unterscheiden, d.h. man kann z.B. SSIS Version 2019 verwenden, um Daten in SQL Server-Datenbank Version 2014 zu schreiben.

{% include _content/de/einfuehrung/sap-systeme.md %} 
{% include _content/de/einfuehrung/sap-installation.md %} 
{% include _content/de/einfuehrung/sap-authentication-xtract.md %}
{% include _content/de/einfuehrung/sap-misc.md %}
{% include _content/de/einfuehrung/operating-systems.md %}

### Andere Anwendungen und Frameworks
 	
.NET Framework 4.7.2 oder höher. Laden Sie das Framework direkt von der [Website von Microsoft](https://support.microsoft.com/en-us/help/4054530/microsoft-net-framework-4-7-2-offline-installer-for-windows) herunter.

### Hardware

#### Arbeitsspeicher
 	
- 4 GB minimum. Abhängig vom Datenvolumen kann mehr Arbeitsspeicher benötigt werden.

#### Festplattenspeicher
 	
- Für die Installation werden 50 MB Festplattenspeicher benötigt

#### 32/64-Bit Umgebung
 	
- 32-Bit und 64-Bit Betriebssysteme

