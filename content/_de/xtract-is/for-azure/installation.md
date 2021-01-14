---
ref: xi-for-azure-02
layout: page
title: Installation
description: Installation
product: xtract-is
parent: for-azure
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=installation1
---

Im folgenden Abschnitt wird beschrieben, wie Sie Xtract IS für Azure auf einer Azure SSIS-IR für die Ausführung von SSIS-Paketen mit Xtract IS-Komponenten einrichten.

### Manuelles Setup

Die Installtion von *Xtract IS for Azure* erfolgt gemäß der von Microsoft [hier](https://docs.microsoft.com/de-de/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup) beschriebenen Installation von Drittanbieter-Komponenten. Relevant ist der Abschnitt für das Einrichten eines Azure Storage Containers und das Anlegen einer Shared Access Signature (SAS).

Laden Sie das *Xtract IS for Azure* Setup herunter. Das Setup besteht aus zwei Dateien: *XtractISSetup.exe* (welche von unserer Webseite oder dem Kundenportal heruntergeladen werden kann) und [*main.cmd*](https://cdn-files.theobald-software.com/download/XtractIS/main.cmd).
Platzieren Sie beide Dateien in den im obigen Schritt angelegten Azure Storage Container.

![XISforAzure_StorageContainer](/img/content/XISforAzure_StorageContainer.png){:class="img-responsive"}

Vor dem Start der IR muss die SAS URI des Azure Storage Containers referenziert werden.

“Wenn Sie Azure-SSIS IR mit PowerShell bereitstellen oder neu konfigurieren, führen Sie vor dem Start von Azure-SSIS IR das Cmdlet *Set-AzureRmDataFactoryV2IntegrationRuntime* mit dem SAS-URI des Containers als Wert für den neuen Parameter SetupScriptContainerSasUri aus.", siehe [hier]().

![XISforAzure_PS_CustomSetupContainer](/img/content/XISforAzure_PS_CustomSetupContainer.png){:class="img-responsive"}

Wenn Sie Azure-SSIS IR über das Azure Portal bereitstellen, geben Sie die SAS-URI des Containers in dem entsprechenden Feld unter *Advanced Settings* an, so wie [hier]() beschrieben.


![XISforAzure_Poral_CustomSetupContainer](/img/content/XISforAzure_Poral_CustomSetupContainer.png){:class="img-responsive"}

Starten Sie die IR über das Azure Portal oder per PowerShell Skript. ACHTUNG: Der Startprozess kann 20 -30 min dauern.

### Nutzung einer selbstgehosteten Integration Runtime (SHIR)
Xtract IS for Azure unterstützt SHIR um den Zugriff von einer Azure SSIS-IR auf ein on-premises SAP-System zu ermöglichen. Allgemeine Informationen zu SHIR findet man in der [Microsoft Dokumentation](https://docs.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-proxy-ssis). 

Für Xtract IS for Azure haben wir den Prozess in unserer [knowledgebase](https://kb.theobald-software.com/xtract-is/XIS-for-Azure-SHIR) dokumentiert.

