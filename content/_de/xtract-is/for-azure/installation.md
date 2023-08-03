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

Die Installtion von *Xtract IS for Azure* erfolgt gemäß der von Microsoft [hier](https://docs.microsoft.com/de-de/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup#standard-custom-setup) beschriebenen Installation von Drittanbieter-Komponenten. Relevant ist der Abschnitt für das Einrichten eines Azure Storage Containers und das Anlegen einer Shared Access Signature (SAS).

Laden Sie das *Xtract IS for Azure* Setup herunter. Das Setup besteht aus zwei Dateien: *XtractISSetup.exe* (welche von unserer Webseite oder dem Kundenportal heruntergeladen werden kann) und [*main.cmd*](https://cdn-files.theobald-software.com/download/XtractIS/main.cmd).
Platzieren Sie beide Dateien in den im obigen Schritt angelegten Azure Storage Container.

![XISforAzure_StorageContainer](/img/content/XISforAzure_StorageContainer.png){:class="img-responsive"}

Vor dem Start der IR muss die SAS URI des Azure Storage Containers referenziert werden.

- Wenn Sie die Azure-SSIS IR mit PowerShell bereitstellen, befüllen Sie den Parameter ```-SetupScriptContainerSasUri``` mit der SAS URI des Azure Storage Containers.
- Wenn Sie Azure-SSIS IR über das Azure Portal bereitstellen, geben Sie die SAS-URI des Containers in dem entsprechenden Feld unter *Advanced Settings* an.


![XISforAzure_Poral_CustomSetupContainer](/img/content/XISforAzure_Portal_CustomSetupContainer.png){:class="img-responsive"}

Starten Sie die IR über das Azure Portal oder per PowerShell Skript.

{: .box-note }
**Hinweis** Der Startprozess kann 20 - 30 min dauern.


{: .box-tip }
**Empfehlung:** Eine regelmäßige Aktualisierung der Software ist entscheidend für eine stabile Performance. 
Prüfen Sie die [Versionshistorie](https://kb.theobald-software.com/version-history/xtract-is-version-history) auf Updates. 
Eine neuere Version kann über die ältere Version installiert werden. 

### Express Custom Setup
Als Alternative zum manuellen Setup kann das Express Custom Setup genutzt werden, siehe [Microsoft Dokumentation](https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup#express-custom-setup).

![XISforAzure_ExpressCustomSetup_1](/img/content/XISforAzure_ExpressCustomSetup_1.png){:class="img-responsive" }

![XISforAzure_ExpressCustomSetup_2](/img/content/XISforAzure_ExpressCustomSetup_2.png){:class="img-responsive" }

Das Setup von Xtract IS for Azure über das Express Custom Setup erfordert eine gültige Lizenzdatei.<br>
Das Express Custom Setup installiert eine bestimmte Version von Xtract IS for Azure. Welche Version aktuell installiert wird, ist in der [Microsoft Dokumentation](https://docs.microsoft.com/en-us/azure/data-factory/how-to-configure-azure-ssis-ir-custom-setup#installing-licensed-components) einsehbar. Alternativ kontaktieren Sie [Theobald Software](mailto:info@theobald-software.com).

{: .box-note }
**Hinweis** Die beim Express Custom Setup verwendete Version von Xtract IS for Azure wird ohne Vorankündigung in regelmäßigen Abständen aktualisiert.

### Nutzung einer selbstgehosteten Integration Runtime (SHIR)
Xtract IS for Azure unterstützt SHIR um den Zugriff von einer Azure SSIS-IR auf ein On-Premisess SAP-System zu ermöglichen. Allgemeine Informationen zu SHIR findet man in der [Microsoft Dokumentation](https://docs.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-proxy-ssis). 



