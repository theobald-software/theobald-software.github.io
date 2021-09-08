---
ref: xu-ssrs-01
layout: page
title: Voraussetzungen
description: Voraussetzungen
product: xtract-universal
parent: ssrs
permalink: /:collection/:path
weight: 1
lang: en_GB
---

Um sie SSRS-Destination zu nutzen, benötigen Sie folgende Komponenten:

- Visual Studio 2017 oder höher
- das [Microsoft Reporting Services Projects](https://marketplace.visualstudio.com/items?itemName=ProBITools.MicrosoftReportProjectsforVisualStudio) Plugin (Version 2.6.11 oder höher) für Visual Studio.
- Power BI Report Server (Januar 2020 oder später)
- Xtract Universal (Version 4.29 oder höher)

{: .box-note }
**Hinweis:** Der Power BI Report Builder wird nicht unterstützt.


### Installation

Um die SSRS-Destination zu nutzen, installieren Sie das [Microsoft Reporting Services Projects](https://marketplace.visualstudio.com/items?itemName=ProBITools.MicrosoftReportProjectsforVisualStudio) Plugin in Visual Studio.
Nach der Installation, schließen Sie Visual Studio.

Microsoft SQL Server Reporting Services unterstützt eine große Auswahl von Datenquellen out-of-the-box. Um Xtract Universal als Datenquelle hinzuzufügen, installieren Sie die [Xtract Universal Data Extension](./voraussetzungen#installation-using-the-xtract-universal-data-extension) für Visual Studio **und** den Report Server.
Die Erweiterung wird bei der Installation des [Xtract Universal Setup](../../einfuehrung/installation-und-update) automatisch installiert.

Um die Installation zu beenden, schließen Sie Visual Studio.

{: .box-note }
**Hinweis:** Achten Sie darauf den Report Server sowohl auf der Entwicklungsumgebung als auch auf der Produktivumgebung zu installieren.

{: .box-warning }
**Warnung!** Stellen Sie sicher, dass Sie die aktuelle Version des *Microsoft Reporting Services Projects* Plugins und von Xtract Universal installieren.

Nach der Installation der `C:\Program Files\XtractUniversal\ssrs\SSRSDataExtensionSetup.exe` erstellt das Setup die folgenden Einträge und Erweiterungen im Installationsverzeichnis von Visual Studio:
- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\SSRS\XUDataExtension2020.05.dll`
- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\SSRS\Theobald.Common.dll`
- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\SSRS\Theobald.Distillery.Common.dll`
- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\SSRS\Theobald.Net.dll`
- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\SSRS\RSReportDesigner.config`

Achten Sie darauf, dass folgende Erweiterungen aus dem o.g. Installationsverzeichnis in Ihrem Power BI Report Server Verzeichnis vorhanden sind:
- `C:\Program Files\Microsoft Power BI Report Server\PBIRS\ReportServer\bin\Theobald.Common.dll`
- `C:\Program Files\Microsoft Power BI Report Server\PBIRS\ReportServer\bin\Theobald.Net.dll`
- `C:\Program Files\Microsoft Power BI Report Server\PBIRS\ReportServer\bin\XUDataExtension2020.01.dll`

### Installation der Xtract Universal Data Extension

Um die Xtract Universal Erweiterung auf mehreren Umgebungen zu installieren, ohne den kompletten Xtract Universal Designer zu installieren, führen Sie folgende Schritte aus:

1. Stellen Sie sicher, dass das *Microsoft Reporting Services Projects* Plugin für Visual Studio bereits installiert und aktiviert ist. 
2. Schließen Sie Visual Studio.
3. [Installieren Sie Xtract Universal](../../einfuehrung/installation-und-update) auf der Umgebung, auf der die Lizenz läuft.
4. Nach der Installation, öffnen Sie das Verzeichnis von Xtract Universal, z.B. `C:\Program files\Xtract Universal\` und kopieren Sie den Ordner `\ssrs` auf jede Umgebung, auf der Visual Studio verwendet wird um Reports zu erstellen oder auf denen der Report Server läuft.
5. Führen Sie die *SSRSDataExtensionSetup.exe* als Administrator aus, um die Xtract Universal Erweiterung auf allen kompatiblen Versionen von Visual Studio und/oder dem Report Server zu installieren. 
6. Nach der Installation auf dem Report Server starten Sie den Report Server neu, damit die Änderungen in Kraft treten.
Sie können den Server im *Configuration Manager* neu starten. Klicken Sie auf **[stop]** und anschließend auf **[start]**.

Um die Erweiterung zu deinstallieren, verwenden Sie die *uninstall.bat* Datei aus dem `\ssrs`-Ordner des Xtract Universal Verzeichnisses.

{: .box-note }
**Hinweis:** Wenn das *Reporting Services Projects* Plugin in Visual Studio upgedatet wird, ist die Xtract Universal Data Extension nicht mehr verfügbar. Die Xtract Universal Data Extension muss dann neu installiert werden.

Sollten bei der Installation der Xtract Universal Data Extension Schwierigkeiten auftreten, Senden Sie die Log-Datei aus dem Verzeichnis `C:\Program Files\XtractUniversal\ssrs\log.txt` an [Theobald Support](mailto:support@theobald-software.com).

