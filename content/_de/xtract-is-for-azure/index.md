---
ref: xtract-is-for-azure-01
layout: page
title: Xtract IS for Azure
description: Xtract IS for Azure
product: xtract-is-for-azure
parent: home
childidentifier: xtract-is-for-azure
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-IS-DE/
---

Willkommen in der Online Help von Xtract IS for Azure.

Xtract IS for Azure ist ein Plug-in für die [SQL Server Integration Services (SSIS)](https://docs.microsoft.com/de-de/sql/integration-services/sql-server-integration-services).

### Über Azure SSIS-IR

*Xtract IS for Azure* ermöglicht es, SSIS Pakete die Xtract IS Komponenten enthalten, auf einer Azure-SSIS Integration Runtime (IR), basierend auf [Microsoft's Azure Data Factory v2](https://azure.microsoft.com/de-us/blog/lift-sql-server-integration-services-packages-to-azure-with-azure-data-factory/) oder [Azure Synapse Analytics](https://docs.microsoft.com/en-us/azure/synapse-analytics/) auszuführen.

Bei der Nutzung der Azure-SSIS IR werden die SSIS Pakete immer noch lokal und on-prem in Visual Studio/SSDT Umgebung entwickelt.
Anstatt die entwickelten Pakete auf einem SSIS-Server vor Ort bereitzustellen, werden die Pakete auf einer Azure-SSIS IR bereitgestellt, um in der Azure-Cloud eingeplant und ausgeführt zu werden.

### Architektur

![XISforAzure_Architecture](/img/content/xis/Xtract_IS_for_Azure.png){:class="img-responsive"}

Xtract IS for Azure stellt sicher, dass Azure-SSIS IR SSIS-Pakete unterstützt, die Xtract IS-Komponenten zur Verbindung mit einer SAP-Quelle und zur Extraktion von Daten aus SAP enthalten.
Das SAP-System muss von der Azure-SSIS IR aus erreichbar sein, zum Beispiel über einen VPN-Tunnel oder eine selbst gehostete Integration Runtime.

Xtract IS for Azure basiert auf der bestehenden Xtract IS (on-prem) Version.
Daher bietet Xtract IS for Azure genau die gleiche SAP-Datenextraktionsfunktionalität wie Xtract IS.

**Voraussetzungen und Installation auf einer Visual Studio/SSDT Umgebung** (für die Entwicklung von SSIS-Paketen) unterscheiden sich nicht vom [Xtract IS Setup-Prozess](./einfuehrung/installation).

**Voraussetzungen und Installation auf einer Azure-SSIS IR** (zum Ausführen der SSIS-Pakete) sind in den nachfolgenden Abschnitten beschrieben.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
