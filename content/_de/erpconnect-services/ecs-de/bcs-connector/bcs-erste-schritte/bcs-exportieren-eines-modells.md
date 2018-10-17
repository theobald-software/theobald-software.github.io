---
ref: ecs-getting-started-with-the-bcs-connector-07
layout: page
title: Exportieren eines Modells
description: Exportieren eines Modells
product: erpconnect-services
parent: bcs-erste-schritte
permalink: /:collection/:path
weight: 7
lang: de_DE
old_url: /ERPConnect-Services-DE/default.aspx?pageid=bcs-exportieren-eines-modells
---

**Export nach XML**

Sie können ein Modell mit dem Sie gerade im BCS Connector arbeiten in eine XML-Datei exportieren. Für diese Option müssen Sie mit dem SharePoint System verbunden sein und das Modell muss im BCS Metadata Store vorhanden sein. Das Modell wird im XML Format in einer BDC Model Datei (.bdcm) gespeichert. Anschließend können Sie mit Hilfe der Central Administration Konsole die .bdcm Dateien in verschiedene SharePoint BCS Metadata Stores importieren oder mit der .bdcm Datei in Visual Studio SharePoint Anwendungen entwickeln.

Um die BCS Modelle in eine XML Datei zu exportieren, wählen Sie den *Export to XML* Befehl vom Ribbon.

![BCS-Export-XML-01](/img/content/BCS-Export-XML-01.png){:class="img-responsive"}

Im Dialog mit dem Titel *Where do you want to save the file?* geben Sie den Speicherort und den Dateinamen des Modells an.

![BCS-Export-XML-02](/img/content/BCS-Export-XML-02.png){:class="img-responsive"}

Betätigen Sie die Save Schaltfläche. Die Datei wird als BDC Model Datei (.bdcm) gespeichert.

**Export nach Visual Studio 2010**

Sie können das Modell, mit dem Sie im BCS Connector arbeiten, auch nach Visual Studio 2010 exportieren. Der BCS Connector generiert eine vollständige Visual Studio Solution Datei(.sln), inklusive der BCS Model Definition Datei (.bdcm), sowie die Code Dateien (.cs oder .vb) für die Implementierung der Enitität und deren Methoden. Diese Solution Datei stellt einen idealen Einstiegspunkt für die Entwicklung anspruchsvoller SharePoint Lösungen dar.

Um ein Modell nach Visual Studio 2010 zu exportieren wählen Sie den *Export to VS2010* Befehl vom Ribbon.

![BCS-Export-Visual-Studio-01](/img/content/BCS-Export-Visual-Studio-01.png){:class="img-responsive"}

Im *Export to Visual Studio* Dialogfenster legen Sie die nachfolgenden Parameter fest:


**Solution Name** - 	Name der Solution in Visual Studio. Der Standardwert ist der Modellname im BCS Connector.<br>
**Solution Folder** -	Der Speicherort, an dem die Solution Dateien abgelegt werden sollen. Es wird empfohlen, jede Solution in einem eigenen Ordner zu speichern.<br>
**Namespace** -	Der Namespace für die Klassendefinition innerhalb der Visual Studio Solution. Der Standardwert ist der Modellname im BCS Connector.<br>
**Model** -	Der Name des Modells im Visual Studio Projekt. Der Standardwert ist der Modellname im BCS Connector, erweitert um 'VS2010'.<br>
**LOB System** -	Der Name des LOB System im Visual Studio Project. Der Standardname ist der Name des LOB System im BCS Connector, erweitert um 'VS2010'.<br>
**LOB System Instance** -	Name der LOB System Instanz im Visual Studio Project. Der Standardname ist der Name der LOB System Instanz im BCS Connector, erweitert um 'VS2010'.<br>
**Entity Namespace Appendix** -	Der Appendix um die Entitäten in Visual Studio von den Entitäten im BCS Connector zu unterscheiden. Standardmäßig ist der Appendix 'VS2010'.<br>
**Language Choose between** -	Visual Basic oder CSharp. Standard ist CSharp.<br>
**Open Folder** -	Aktivieren, um den Zielordner nach dem Export zu öffnen.

![BCS-Export-Visual-Studio-02](/img/content/BCS-Export-Visual-Studio-02.png){:class="img-responsive"}

Bestätigen Sie mit *OK*, um das Modell zu exportieren und die definierte Visual Studio 2010 Solution zu erstellen.

Sie sehen die nachfolgende Mitteilung, wenn der Export erfolgreich durchgeführt wurde.

![BCS-Export-Visual-Studio-03](/img/content/BCS-Export-Visual-Studio-03.png){:class="img-responsive"}

Im Export-Ordner sollten jetzt die Solution Datei (.sln) und ein Unterordner, der alle übrigen Dateien enthält, vorhanden sein.

![BCS-Export-Visual-Studio-04](/img/content/BCS-Export-Visual-Studio-04.png){:class="img-responsive"}

Sie können jetzt die Solution Datei (.sln) in Visual Studio 2010 öffnen und mit der Entwicklung Ihrer SharePoint Anwendung beginnen.
