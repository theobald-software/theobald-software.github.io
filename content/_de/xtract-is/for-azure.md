---
ref: xtract-is-03
layout: page
title: Xtract IS for Azure
description: Xtract IS for Azure
product: xtract-is
parent: xtract-is
childidentifier: for-azure
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=voraussetzungen_und_installation___xis_for_azure
progressstate: 3
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract IS.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/xtract-is-for-azure/introduction/).

### Über Azure SSIS-IR

*Xtract IS for Azure* ermöglicht es, SSIS Pakete, welche Xtract IS Komponenten enthalten, auf einer [Azure-SSIS Integration Runtime (IR), based on Microsoft's Azure Data Factory v2 (ADFv2)](https://azure.microsoft.com/en-us/blog/lift-sql-server-integration-services-packages-to-azure-with-azure-data-factory/) auszuführen.

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
