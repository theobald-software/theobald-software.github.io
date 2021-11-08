---
ref: xi-requirements-and-installation-05
layout: page
title: SSIS Migration
description: SSIS Migration
product: xtract-is
parent: einfuehrung
permalink: /:collection/:path
weight: 5
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=ssis-migration
---

Der folgende Abschnitt befasst sich mit der Migration von SSIS Paketen mit Xtract-Komponenten von einer niedrigeren SQL Server/SSIS-Version in eine höhere Version. 

Wenn Sie von SQL Server 2012 oder niedriger nach SQL Server 2019 migrieren, folgen Sie den Anweisungen in [Migration von SSIS 2008/2012 nach SSIS 2019](#migration-von-ssis-20082012-nach-ssis-2019).<br>
Wenn Sie von SQL Server 2014 oder höher nach SQL Server 2019 migrieren, folgen Sie den Anweisungen in [Migration von SSIS 2014/2016 nach SSIS 2019](#migration-von-ssis-20142016-nach-ssis-2019).


### Migration von SSIS 2008/2012 nach SSIS 2019

Eine Migration von SSIS 2008/2012 nach SSIS 2019 erfordert auch eine Migration der SSIS Pakete.

Die SSIS-Pakete werden dafür mit dem *XtractIS Conversion Preparer* zuerst auf SSIS 2016 konvertiert.
Der *XtractIS Conversion Preparer* ist ein Tool, das SSIS-Pakete (inkl. Xtract IS-Komponente), die für ältere Versionen von SSIS erstellt wurden, für die Migration auf neuere Versionen von SSIS vorbereitet. 
Sie finden die *XtractISConversionPreparer.exe* im Installationsverzeichnis von Xtract IS. Das Standard-Verzeichnis ist `C:\Program Files\XtractIS\XtractISConversionPreparer.exe`. 

1. Starten Sie die *XtractISConversionPreparer.exe*.
2. Klicken Sie auf **[Add file(s)]** und wählen Sie die Pakete aus, die für die Konvertierung vorbereitet werden müssen.
Wenn sich ein Paket im Debug-Ordner befindet, wird es automatisch eingebunden. 
3. Wählen Sie aus der Drop-Down-Liste die SSIS-Version aus, für die die Pakete konvertiert werden sollen.<br>
Für die Migration nach SSIS 2019, wählen Sie *SSIS 2016* aus dem Pull-Down-Menü aus. Der Zwischenschritt über *SSIS 2016* ist zwingend notwendig.
Während der Konvertierung erstellt das Tool ein Backup Ihres SSIS-Pakets. <br>
**Empfehlung:** Erstellen Sie vor der Konvertierung manuell eine Sicherungskopie.<br> 
![XIS_ConversionPreparer_2016](/img/content/XIS_ConversionPreparer_2016.png){:class="img-responsive"}
4. Klicken Sie auf **[Prepare]**, um den Konvertierungsprozess zu starten.<br>
5. Um nun von SSIS 2016 auf SSIS 2019 zu migrieren, folgen Sie den Anweisungen in [Migration von SSIS 2014/2016 nach SSIS 2019](#migration-von-ssis-20142016-nach-ssis-2019).

{: .box-note }
**Hinweis:** Die Passwortverschlüsselung der SSIS-Pakete muss für die Konvertierung der SSIS-Pakete über die Eigenschaft [ProtectionLevel](https://docs.microsoft.com/de-de/sql/integration-services/security/access-control-for-sensitive-data-in-packages?view=sql-server-ver15#set_protection) deaktiviert oder angepasst werden.


### Migration von SSIS 2014/2016 nach SSIS 2019

1. Öffnen Sie Ihre Solution in Visual Studio. 
2. Öffnen Sie die Projekteigenschaften und wählen Sie *SQL Server 2019* als neue Zielversion des SQL Servers (Deployment Target Version) aus.<br>
![VS-Deployment-Target](/img/content/VS_Deployment_Target.png){:class="img-responsive"}
3. Importieren Sie Ihre SSIS-Pakete und speichern Sie das Projekt. Ggf. schließen Sie die Solution und/oder VS komplett und öffnen sie wieder.<br>

{: .box-note }
**Hinweis:** Wenn vor der Migration bereits *SQL Server 2019* als Zielversion des SQL Servers ausgewählt ist, müssen Sie erst Ihre alte SQL Server Version wiederherstellen, um anschließend die Konvertierung auf *SQL Server 2019* durchzuführen.
Beispiel: Wenn Sie von SQL Server 2016/SSIS 2016 migrieren, ändern Sie die Version des Zielservers zu *SQL Server 2016*. Anschließend Konvertieren Sie auf *SQL Server 2019*.<br>

### Aktuelle XtractISSetup.exe installieren
Installieren Sie die aktuelle Xtract IS Version auf Ihrem SSIS Server und auf jeder anderen Deployment-Umgebung (Visual Studio/SSDT).