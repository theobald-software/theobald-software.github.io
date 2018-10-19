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

Die Installtion von *Xtract IS for Azure* erfolgt gemäß der von Microsoft [hier](https://docs.microsoft.com/de-de/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup) beschriebenen Installation von Drittanbieter-Komponenten. Relevant ist der Abschnitt für das Einrichten eines Azure Storage Containers und das Anlegen einer Shared Access Signature (SAS).

Laden Sie das *Xtract IS for Azure* Setup herunter. Das Setup besteht aus zwei Dateien: *XtractISSetup.exe* (welche von unserer Webseite oder dem Kundenportal heruntergeladen werden kann) und [*main.cmd*](https://files.theobald-software.com/download/XtractIS/main.cmd).
Platzieren Sie beide Dateien in den im obigen Schritt angelegten Azure Storage Container.

![XISforAzure_StorageContainer](/img/content/XISforAzure_StorageContainer.jpg){:class="img-responsive"}

Vor dem Start der IR muss die SAS URI des Azure Storage Containers referenziert werden.

“Wenn Sie Azure-SSIS IR mit PowerShell bereitstellen oder neu konfigurieren, führen Sie vor dem Start von Azure-SSIS IR das Cmdlet *Set-AzureRmDataFactoryV2IntegrationRuntime* mit dem SAS-URI des Containers als Wert für den neuen Parameter SetupScriptContainerSasUri aus.", siehe [hier]().

![XISforAzure_PS_CustomSetupContainer](/img/content/XISforAzure_PS_CustomSetupContainer.jpg){:class="img-responsive"}

Wenn Sie Azure-SSIS IR über das Azure Portal bereitstellen, geben Sie die SAS-URI des Containers in dem entsprechenden Feld unter *Advanced Settings* an, so wie [hier]() beschrieben.


![XISforAzure_Poral_CustomSetupContainer](/img/content/XISforAzure_Poral_CustomSetupContainer.jpg){:class="img-responsive"}

Starten Sie die IR über das Azure Portal oder per PowerShell Skript. ACHTUNG: Der Startprozess kann 20 -30 min dauern.

