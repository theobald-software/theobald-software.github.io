---
ref: xia-requirements-and-installation-05
layout: page
title: SSIS Migration
description: SSIS Migration
product: xtract-is-for-azure
parent: einfuehrung
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=ssis-migration
---

Der folgende Abschnitt befasst sich mit den Informationen über die Migration von SSIS Paketen (mit Xtract IS for Azure-Komponenten) von einer niedrigeren SQL Server/SSIS-Version in eine höhere Version. 
Beispielweise Sie migrieren von SQL Server 2012 nach SQL Server 2019. Diese Migration erfordert ebenfalls eine Migration der SSIS Pakete.

Beachten Sie in diesem Zusammenhang auch das Zusammenspiel von Visual Studio/SSDT- und SSIS-Version. 

### Migration von SSIS 2008/2012 nach SSIS 2019
1.  Bereiten Sie die SSIS-Pakete für Migration mithilfe des *XtractISConversionPreparer.exe*.
2.  Im SSIS-Paket, passen sie die Deployment-Zielumgebung an: SSIS 2019.
3.  Installieren Sie die aktuelle Xtract IS for Azure Version.

### Ausführen der XtractISConversionPreparer.exe
Der XtractIS Conversion Preparer ist ein Tool, das SSIS-Pakete (inkl. Xtract IS-Komponente), die für ältere Versionen von SSIS erstellt wurden, für die Migration auf neuere Versionen von SSIS vorbereitet. 

{: .box-note }
**Hinweis:** Die Passwortverschlüsselung der SSIS-Pakete muss für die Konvertierung der SSIS-Pakete über die Eigenschaft [ProtectionLevel](https://docs.microsoft.com/de-de/sql/integration-services/security/access-control-for-sensitive-data-in-packages?view=sql-server-ver15#set_protection) deaktiviert oder angepasst werden.

{: .box-note }
**Hinweis:** Nur SSIS-Pakete, die mit SSIS 2012 erstellt wurden, müssen mit dem XtractIS Conversion Preparer konvertiert werden.  Der XtractIS Conversion Preparer befindet sich im Verzeichnis <br>`C:\Program Files\XtractIS\XtractISConversionPreparer.exe`. 

Für alle anderen neueren SSIS-Pakete passen Sie die "Deployment Target Version" (s.u.) in den Projekteigenschaften an. <br>


1. Starten Sie den XtractIS Conversion Preparer.
2. Für die Migration nach SSIS 2019 wählen Sie *SSIS 2016* aus dem Pull-Down-Menü aus.
Während der Konvertierung erstellt das Tool ein Backup Ihres SSIS-Pakets. <br>
**Empfehlung:** Erstellen Sie vor der Konvertierung manuell eine Sicherungskopie (Backup).
3. Klicken Sie auf **[Add file(s)]** und wählen Sie im Dateidialog die Pakete aus, die für die Konvertierung vorbereitet werden müssen.
Wenn sich ein Paket im Debug-Ordner befindet, wird es automatisch eingebunden. 
4. Wählen Sie aus der Drop-Down-Liste die SSIS-Version aus, für die die Pakete konvertiert werden sollen.
![XIS_ConversionPreparer_2016](/img/content/XIS_ConversionPreparer_2016.png){:class="img-responsive"}
5. Klicken Sie auf **[Prepare]**, um den Konvertierungsprozess zu starten.<br>
Nach dem Öffnen des konvertierten Pakets in Visual Studio wird, je nach Version, 
der Visual Studio-Konvertierungsassistent (Conversion Wizard) gestartet und konvertiert das Paket in das Format der ausgewählten Visual Studio Version.


{: .box-warning }
**Warnung! Paket läuft nicht erfolgreich durch**<br> 
Beim Öffnen der konvertierten SSIS-Pakete in Visual Studio muss die Version des Zielservers entsprechend geändert werden.
Klicken auf **[Save the SSIS package]**, um dies sicherzustellen.
Beispiel: Wenn Sie im XtractIS Conversion Preparer **SSIS 2016** ausgewählt haben, ändern Sie die Version des Zielservers zu **SQL Server 2016**. 

### Migration von SSIS 2014/2016 nach SSIS 2019
Bei VS/SSDT 2015 sowie 2019 können Sie die Zielversion des SQL Servers (Deployment Target Version) in den Projekteigenschaften auswählen.

![VS-Deployment-Target](/img/content/VS_Deployment_Target.png){:class="img-responsive"}

### Aktuelle XtractISSetup.exe installieren
Installieren Sie die aktuelle Xtract IS for Azure Version auf Ihrem SSIS Server und auf jeder anderen Deployment-Umgebung (Visual Studio/SSDT).
