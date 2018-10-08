---
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
---

*Xtract IS for Azure* ermöglicht es, SSIS Pakete, welche Xtract IS Komponenten enthalten, auf einer [Azure-SSIS Integration Runtime (IR), based on Microsoft's Azure Data Factory v2 (ADFv2)](https://azure.microsoft.com/en-us/blog/lift-sql-server-integration-services-packages-to-azure-with-azure-data-factory/) auszuführen.

Bei der Nutzung der Azure-SSIS IR werden SSIS Pakete wie bisher lokal und on-prem in Visual Studio/SSDT entwickelt.
Diese Pakete werden dann allerdings nicht auf einem on-prem SSIS Server deployt, sondern auf eine Azure-SSIS IR in der Azure cloud, um dort eingeplant und ausgeführt zu werden.

![XISforAzure_Architecture](/img/content/XISforAzure_Architecture.jpg){:class="img-responsive" width="800px"}

*Xtract IS for Azure* ermöglicht es, SSIS packages, welche Xtract IS Komponenten für die Extraktion aus SAP enthalten, auf der Azure-SSIS IR auszuführen.

*Xtract IS for Azure* basiert auf *Xtract IS Ultimate*, welches bereits seit Jahren für on-prem Installationen existiert.<br>
*Xtract IS for Azure* bietet daher genau die gleiche Funktionalität bezüglich Datenextraktion aus SAP wie *Xtract IS Ultimate*.

**Voraussetzungen und Installation auf einer Visual Studio/SSDT Umgebung** (für die Entwicklung von SSIS-Paketen) unterscheidet sich nicht vom *Xtract IS* Setup.

**Voraussetzungen und Installation auf einer Azure-SSIS IR** (zum Ausführen der SSIS-Pakete) ist in den nachfolgenden Abschnitten beschrieben.

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}