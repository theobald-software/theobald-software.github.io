---
ref: xi-requirements-and-installation-05
layout: page
title: SSIS Migration
description: SSIS Migration
product: xtract-is
parent: einfuehrung
permalink: /:collection/:path
weight: 12
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=ssis-migration
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract IS.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

Der folgende Abschnitt befasst sich mit der Migration von SSIS Paketen mit Xtract-Komponenten von einer niedrigeren SQL Server Version auf eine höhere Version. 

Wenn Sie von SQL Server 2012 oder niedriger nach SQL Server 2019 migrieren, folgen Sie der Anleitung [Migration von SQL Server 2008/2012 nach SQL Server 2019](#migration-von-sql-server-20082012-nach-sql-server-2019).<br>
Wenn Sie von SQL Server 2014 oder höher nach SQL Server 2019 migrieren, folgen Sie der Anleitung [Migration von SQL Server 2014/2016 nach SQL Server 2019](#migration-von-sql-server-20142016-nach-sql-server-2019).

### Aktuelle XtractISSetup.exe installieren
Installieren Sie die aktuelle Xtract IS Version auf Ihrem SSIS Server und auf jeder anderen Deployment-Umgebung (Visual Studio/SSDT).

### Migration von SQL Server 2008/2012 nach SQL Server 2019

Eine Migration von SQL Server 2008/2012 nach SQL Server 2019 erfordert auch eine Migration der SSIS Pakete.

Die SSIS-Pakete werden dafür mit dem *XtractIS Conversion Preparer* zuerst für den SQL Server 2016 konvertiert.
Der *XtractIS Conversion Preparer* ist ein Tool, das SSIS-Pakete, die für ältere SQL Server Versionen erstellt wurden, für die Migration auf neuere SQL Server Versionen vorbereitet. 
Sie finden die *XtractISConversionPreparer.exe* im Installationsverzeichnis von Xtract IS, z.B. `C:\Program Files\XtractIS\XtractISConversionPreparer.exe`. 

1. Führen Sie die *XtractISConversionPreparer.exe* aus. Das Fenster "XtractIS Conversion Preparer" öffnet sich.
2. Klicken Sie auf **[Add file(s)]** und wählen Sie die Pakete aus, die für die Konvertierung vorbereitet werden müssen.
Wenn sich ein Paket im Debug-Ordner befindet, wird es automatisch eingebunden. 
3. Wählen Sie aus der Drop-Down-Liste die SQL Server Version aus, für die die Pakete konvertiert werden sollen.<br>
Für die Migration nach SQL Server 2019, wählen Sie *SSIS 2016* aus dem Pull-Down-Menü aus. Der Zwischenschritt über SQL Server 2016 ist zwingend notwendig.
Während der Konvertierung erstellt das Tool ein Backup Ihres SSIS-Pakets. <br>
**Empfehlung:** Erstellen Sie vor der Konvertierung manuell eine Sicherungskopie.<br> 
![XIS_ConversionPreparer_2016](/img/content/XIS_ConversionPreparer_2016.png){:class="img-responsive"}
4. Klicken Sie auf **[Prepare]**. Der Konvertierungsprozess wird gestartet.<br>
5. Um nun die SSIS Pakete von SQL Server 2016 auf SQL Server 2019 zu migrieren, folgen Sie den Anweisungen in [Migration von SQL Server 2014/2016 nach SQL Server 2019](#migration-von-sql-server-20142016-nach-sql-server-2019).

{: .box-note }
**Hinweis:** Die Passwortverschlüsselung der SSIS-Pakete muss für die Konvertierung der SSIS-Pakete über die Eigenschaft [ProtectionLevel](https://docs.microsoft.com/de-de/sql/integration-services/security/access-control-for-sensitive-data-in-packages?view=sql-server-ver15#set_protection) deaktiviert oder angepasst werden.


### Migration von SSIS 2014/2016 nach SSIS 2019

{: .box-note }
**Hinweis:** SSIS-Pakete, die mit einer SQL Server Data Tools (SSDT) / Visual Studio (VS) Version **vor** 2015 angelegt wurden, müssen erst auf SQL Server 2016 migriert werden, bevor sie auf SQL Server 2019 migriert werden können.
Um die Migration auf SQL Server 2016 korrekt abzuschließen, wählen Sie SQL Server 2016 als Zielversion aus, dann speichern und schließen Sie das Projekt. 

1. Öffnen Sie eine neue Solution in Visual Studio. 
2. Öffnen Sie die Projekteigenschaften und wählen Sie eine Zielversion für den SQL Server aus:
- Wenn mit einer SSDT/VS-Version **nach** 2015 SSIS-Pakete für die Zielversion SQL Server 2014/2016 angelegt wurden, fahren Sie mit Schritt 6 fort.
- Wenn mit einer SSDT/VS-Version **vor** 2015 SSIS-Pakete für die Zielversion SQL Server 2014/2016 angelegt wurden, wählen Sie SQL Server 2014 oder SQL Server 2016 aus, je nachdem, auf welcher SQL Server-Version Ihre Pakete bisher liefen. 
- Wenn Sie die Pakete zuvor gemäß der Anleitung [Migration von SQL Server 2008/2012 nach SQL Server 2019](#migration-von-sql-server-20082012-nach-sql-server-2019) mit dem Conversion Preparer vorbereitet haben, wählen Sie SQL Server 2016.<br>
![VS-Deployment-Target](/img/content/VS_Deployment_Target.png){:class="img-responsive"}
3. Speichern Sie das Projekt.
4. Fügen Sie dem Projekt die SSIS Pakete hinzu.
5. Speichern Sie das Projekt erneut.
6. Ändern Sie die Zielversion des SQL Servers auf 2019.
7. Xtract IS-Komponenten sollten im Datenfluss korrekt angezeigt werden. 
Falls nicht, schließen Sie die komplette Solution und öffnen diese erneut. 
Falls immer noch nicht, schließen Sie das komplette Visual Studio und öffnen erneut.

Beachten Sie, dass das Speichern des Projekts vor und nachdem die SSIS-Pakete hinzugefügt wurden für eine korrekte Migration notwendig ist.
