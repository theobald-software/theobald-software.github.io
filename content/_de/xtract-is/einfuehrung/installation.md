---
ref: xi-requirements-and-installation-02
layout: page
title: Installation
description: Installation
product: xtract-is
parent: einfuehrung
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=installation
progressstate: 5
---

Xtract IS wird für die Entwicklung und Ausführung von SSIS-Paketen benötigt. 
Stellen Sie sicher, dass Sie Xtract IS auf beiden Maschinentypen installieren:
- Auf der Entwicklungsmaschine, auf der Visual Studio / SQL Sever Data Tools läuft. Es können auch mehrere Maschinen sein.
- Auf der Maschine, auf dem der SQL-Server läuft. Diese Maschine wird für das Deployment und den Betrieb der Pakete verwendet.

{: .box-tip }
**Empfehlung:** Eine regelmäßige Aktualisierung der Software ist entscheidend für eine stabile Performance. 
Prüfen Sie die [Versionshistorie](https://kb.theobald-software.com/version-history/xtract-is-version-history) auf Updates. 
Eine neuere Version kann über die ältere Version installiert werden. 

![xis_client_server_generell](/img/content/xis/client_server_architektur_xis_generell.png){:class="img-responsive"}


### Voraussetzungen

- SSIS / Visual Studio Extentions sind installiert

{: .box-note }
**Hinweis:** Administratorberechtigungen sind notwendig, um Xtract IS zu installieren.

Um Xtract IS verwenden zu können, muss die Datei  *XtractISSetup.exe* in der lokalen Entwicklungsumgebung (Visual Studio oder SSDT)
**und** auf dem  SSIS Server ausgeführt und installiert werden. Weitere Informationen finden Sie im Abschnitt [Lizenzierung](./lizenz-einspielen).

{% include _content/de/einfuehrung/produktversion.md %}	

### Interaktive Installation

Interaktive Installation ist die Standardprozedur mit GUI. Führen Sie die Datei *XtractISSetup.exe* aus und folgen Sie den Anweisungen des Setup-Programms. 

![XIS_Setup](/img/content/xis/xis_setup-exe.png){:class="img-responsive"}

Das Xtract IS Setup installiert Xtract IS als Plug-in in SSIS.

Der Lizenzinstallationsvorgang ist im Abschnitt [Lizenz einspielen](./lizenz-einspielen#installation-der-xtract-is-lizenz---xtractislicensejson) beschrieben.

#### Dateien des Installationsverzeichnisses

Die folgende Liste zeigt einige der wichtigsten Dateien, die nach der Installation in das Standardverzeichnis ``C:\Programme\XtractIS`` abgelegt werden:

|Dateiname | Beschreibung |
|:----|:---|
| ABAP Verzeichnis | Verzeichnis mit eigenentwickelten Z-Funktionsbausteinen (.txt) und den dazugehörigen Transportaufträgen (.zip).|
| XtractISSetup.exe | Anwendung zur Installation und Registrierung der Xtract IS-Komponenten innerhalb von SSIS.|
| XtractISConversionPreparer.exe | Tool, das SSIS-Pakete (inkl. Xtract IS-Komponente), die für ältere Versionen von SSIS erstellt wurden, für die Migration auf neuere Versionen von SSIS vorbereitet. Weitere Informationen im Abschnitt [SSIS Migration](./ssis-migration).|
|xis_version.bat | Versions-Batchdatei. Achten Sie beim Start von xis_version.bat darauf, die Datei XtractISVersionInfo.exe aus dem Installationsverzeichnis als Parameter zu übergeben.|
| XtractLicenseManager.exe | Anwendung zum Einspielen und Prüfen der aktuellen Lizenz. |
|Uninstall Xtract IS.lnk| Tool zum Deinstallieren und Entfernen von Xtract IS mit allen dazugehörigen Komponenten von Ihrem Rechner. |
| gac-uninstall.bat | Tool zum Leeren des GAC von allen Xtract IS-bezogenen Komponenten.|
| Eula_XtractIS.rtf | Dokument mit der Lizenzvereinbarung zur Nutzung der Software Xtract IS.|
|XtractISLicense.json| Lizenzdatei mit Server-, Komponenten-  und Laufzeitinformationen|
| UninstallDllLicense.bat| **Für ältere Lizenzdateien**. Mehr Details dazu finden Sie unter [Aktualisierung der Xtract.License.dll auf XtractISLicense.json](./lizenz-einspielen#aktualisierung-der-xtractlicensedll-auf-xtractislicensejson)|



### Unbeaufsichtigte Installation 

Das Setup-Programm und der Lizenz-Manager können nichtinteraktiv und ohne die Anzeige der GUI gestartet werden. 

#### XtractISSetup.exe
Um ein Setup im Silent-Modus auszuführen, verwenden Sie den Switch *--unattended* . <br>

![XIS_Setup-unattended](/img/content/xis/cmd-unattended-switch.png){:class="img-responsive"}

{: .box-note }
**Hinweis:** Achten Sie auf die Groß- und Kleinschreibung der Parameter. 

#### XtractLicenseManager.exe
Um den Lizenz-Manager im Silent-Modus auszuführen, übergeben Sie den Pfad zur Lizenzdatei als Argument.

#### Warten bis die Installation abgeschlossen ist
Da beide Programme `XtractISSetup.exe` und `XtractLicenseManager.exe` Windows-Anwendungen sind, wartet die Windows Eingabeaufforderung nicht bis die Installation abgeschlossen ist. 

Um zu warten, bis die Installation abgeschlossen ist, verwenden Sie den [start](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/start)-Befehlt mit dem Switch `/wait`.

**Beispiele:**
```
start /wait XtractISSetup.exe --unattended
start /wait XtractLicenseManager.exe "C:\Program Files\XtractIS\XtractISLicense.json"
```

### Xtract IS Komponenten in Visual Studio anzeigen
Nach erfolgreicher Installation von Xtract IS erscheinen die Xtract IS Komponenten automatisch als Datenfluss-Komponenten in der SSIS-Toolbox Ihres Visual Studio Integration Services Projekts.

![XIS_SSIS_Toolbox](/img/content/XIS_SSIS_Toolbox.png){:class="img-responsive"}

{: .box-warning }
**Warnung! Xtract IS Komponenten nicht sichtbar.**<br> Mit der aktuellen Version der SSDT für VS 2015 ist der *SQL Server vNext* oder *SQL Server 2017* standardmäßig als Zielumgebung für das Deployment von SSIS Projekten ausgewählt. Mit dieser Einstellung sind die Xtract IS Komponenten in der SSIS Toolbox nicht sichtbar. <br> Ändern Sie die Zielumgebung für das Deployment auf SQL Server 2016, um die Xtract IS Komponenten in der Toolbox anzuzeigen.

![XIS_deployment_target_version_vNext](/img/content/VS_Deployment_Target.png){:class="img-responsive"}




