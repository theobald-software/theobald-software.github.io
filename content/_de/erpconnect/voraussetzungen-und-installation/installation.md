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

Die Installation erfolgt über die ausgelieferte Installationsroutine. <br>
Alle mitgebrachten Dateien werden im Programmverzeichnis abgelegt. Folgende Dateien und Verzeichnisse sind wichtig.<br>
Die mit ( * ) gekennzeichneten Dateien können zusammen mit der erstellten Anwendung an den Kunden ausgeliefert werden (Redistributables).

|                                        |                                                                                                                                      |
|----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| ERPConnect35.dll (*)                   | ERPConnect Assembly für .NET 3.5 SP1                                                                                                 |
| ERPConnect35.xml| Doku-Dateien für Visual Studio                                                                                                       |
| TransactionRecorder.exe                | Kleines Hilfetool, mit dem Programmcode für die Klasse Transaction erzeugt werden kann (siehe [Batch Input Hintergrundverarbeitung](../spezialklassen/batch-input-hintergrundverarbeitung) ). |
| IdocSchemeGenerator.exe                | Dieses Tool erzeugt Schema-Dateien (.xsd) für das IDoc-Handling (siehe [IDocs als XML verarbeiten](../idocs-senden-und-empfangen/idocs-als-xml-verarbeiten) ).                                  |
| FunctionTemplateGenerator.exe          | Dieses Tool erzeugt XML-Templates für RFCFunction-Objekthierarchie   (siehe [Performance-Tuning durch XML-Templates](../rfc-client-funktionen-und-bapis/performance-tuning-durch-xml-templates) )                 |