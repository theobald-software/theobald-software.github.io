---
ref: ec-prerequisites-and-installation-02
layout: page
title: Installation
description: Installation
product: erpconnect
parent: voraussetzungen-und-installation
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /ERPConnect-DE/default.aspx?pageid=installation
---

### Voraussetzungen

{: .box-note }
**Hinweis:** Administratorberechtigungen sind notwendig, um ERPConnect zu installieren.

### Setup

Die `ERPConnectSetup.exe` ist ein branchenübliches Setup. Führen Sie die Datei `ERPConnectSetup.exe` aus und folgen Sie den Anweisungen des Setups.<br>
Der Installationsprozess kopiert die Klassenbibliothek, das LINQToERPSetup und alle verfügbaren Tools in das angegebene Programmverzeichnis.

![ERPConnect_Setup](/img/content/erpconnect/ERPConnect_Setup.png){:class="img-responsive" }

Nach der Installation können Sie ERPConnect in Ihrer .NET Umgebung verwenden.<br>
Die Installation von Lizenzen wird im Abschnitt [Lizenz](./lizenzierung) beschrieben.

{: .box-note }
**Hinweis:** Um den LINQ Designer zu verwenden, führen Sie das *LINQToERPSetup* für Ihre VisualStudio Umgebung aus.
Siehe [LINQ to SAP - Installation und Erste Schritte](../linq-to-sap/linq-to-sap-installation-und-erste-schritte) für mehr Informationen.

### Dateien des Programmverzeichnisses
Die folgende Liste zeigt einige der wichtigsten Dateien, die nach der Installation in das Standardverzeichnis ``C:\Program Files\ERPConnect`` abgelegt werden:

| Datei | Beschreibung |
| :------ |:--- | :--- |
| ERPConnect35.dll (*)                   | ERPConnect Assembly für .NET 3.5 SP1.                                                                                                |
| ERPConnect45.dll (*)                   | ERPConnect Assembly für .NET 4.5.2 oder höher.                                                                                       |
| ERPConnect35.xml<br>  ERPConnect45.xml | Doku-Dateien für Visual Studio.                                                                                                      |
| TransactionRecorder.exe                | Dieses Tool erzeugt Programmcode für die Klasse Transaction, siehe [Batch Input Hintergrundverarbeitung](../spezialklassen/transaktionen-aufrufen-und-steuern-die-klasse-transaction). |
| IdocSchemeGenerator.exe                | Dieses Tool erzeugt Schema-Dateien (.xsd) für das IDoc-Handling, siehe [IDocs als XML verarbeiten](../idocs-senden-und-empfangen/idocs-als-xml-verarbeiten).                                  |
| FunctionTemplateGenerator.exe          | Dieses Tool erzeugt XML-Templates für RFCFunction-Objekthierarchie, siehe [Performance-Tuning durch XML-Templates](../rfc-client-funktionen-und-bapis/performance-tuning-durch-xml-templates).    |

Die mit (<b>*</b>) gekennzeichneten Dateien können zusammen mit der erstellten Anwendung an den Kunden ausgeliefert werden (Redistributables).
