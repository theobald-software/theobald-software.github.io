---
ref: xi-requirements-and-installation-05
layout: page
title: SSIS Migration
description: SSIS Migration
product: xtract-is
parent: voraussetzungen-und-installation
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=ssis-migration
---

Dieses Kapitel behandelt die Migration von SSIS Paketen.<br>
Beispielhaft wird ein SQL Server 2012 nach SQL Server 2017 migriert. Dies erfordert ebenfalls eine Migration der SSIS Pakete.

Beachten Sie in diesem Zusammenhang auch das Zusammenspiel von Visual Studio/SSDT und SSIS, siehe [hier](https://kb.theobald-software.com/xtract-is/list-of-the-ssisvs-versions-supported-by-xtract-is).

### Migration von SSIS 2008/2012 nach SSIS 2017

1.  Migration mithilfe des *XtractISConversionPreparer.exe*
2.  Anpassung der Deployment-Zielumgebung *Migration von SSIS 2014/2016 nach SSIS 2017*
3.  Installation der aktuellen Xtract IS Version 

### Ausführen der XtractISConversionPreparer.exe<br>
Der Xtract IS Conversion Preparer ist ein Tool, welches Pakete, die für ältere Versionen von SSIS (z.B. 2008) erstellt worden sind und Xtract Komponenten beinhalten, auf die Migration für neuere SSIS-Versionen (z.B. 2014 oder 2016) vorbereitet. Sie finden es im Installationsverzeichnis von Xtract IS.

Für die Migration nach SSIS 2017 wählen Sie bitte SSIS 2014 oder SSIS 2016 aus.

Das Tool legt während der Konvertierung ein Backup Ihrer Pakete an. Es ist jedoch sinnvoll, vor der Konvertierung manuell eine Sicherheitskopie der SSIS Pakete anzulegen.

Wir starten das Tool und fügen mit *Add file(s)* neue SSIS Pakete hinzu, die Sie in einem Dateidialog auswählen können.

![XIS_ConversionPreparer_2016](/img/content/XIS_ConversionPreparer_2016.jpg){:class="img-responsive"}

Sofern ein Paket im Debug-Ordner existiert, wird dieses automatisch mit einbezogen.
Anschließend wählen Sie aus der Drop-Down Liste die SSIS-Version aus, für die die Pakete konvertiert werden sollen.

Mit Klick auf den Button Prepare wird die Konvertierung schließlich ausgeführt.

Nach dem Öffnen des Paketes in Visual Studio erscheint gegebenenfalls der Visual Studio Conversion Wizard, der das Paket in das entsprechende Visual Studio Format konvertiert.

Sollte nach Konvertierung des Pakets und Öffnen in Visual Studio eine entsprechende Fehlermeldung erscheinen, müssen Sie eventuell den ProtectionLevel im SSIS Paket vor der Konvertierung deaktivieren.

**ACHTUNG:**<br>
Nachdem Sie die konvertierten Pakete in Visual Studio geöffnet haben, ändern Sie die Zielversion des SQL Servers in den Projekteigenschaften und **speichern Sie das SSIS-Paket**, siehe Screenshot.
Wenn Sie im Xtract IS Conversion Preparer 'SSIS 2014' ausgewählt hatten, ändern Sie die Zielversion auf 'SQL Server 2014'. Wenn Sie 'SSIS 2016' ausgewählt hatten, ändern Sie auf 'SQL Server 2016'.

### Migration von SSIS 2014/2016 nach SSIS 2017<br>
Bei VS/SSDT 2015 sowie 2017 können Sie die Zielversion des SQL Servers (Deployment Target Version) in den Projekteigenschaften auswählen.

![VS-Deployment-Target](/img/content/VS-Deployment-Target.jpg){:class="img-responsive"}

Weitere Informationen zu den unterstützten SSIS- und Visual Studio-Versionen bzw. den Upgrade auf höhere SSIS-Versionen finden Sie hier:<br> 
[List of the SSIS/VS Versions Supported by Xtract IS(englisch)](https://kb.theobald-software.com/xtract-is/list-of-the-ssisvs-versions-supported-by-xtract-is)

### Aktuelle XtractISSetup.exe installieren<br>
Bitte installieren Sie mittels XtractISSetup.exe die aktuelle Xtract IS Version auf die Deployment Umgebung (SSIS Server). In diesem, Zuge ist die Ausführung und Installation der aktuellen  Version auf die Entwicklungsumgebung ebenfalls notwendig (Visual Studio).
