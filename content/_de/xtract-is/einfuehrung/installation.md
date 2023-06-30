---
ref: xi-requirements-and-installation-02
layout: page
title: Installation
description: Installation
product: xtract-is
parent: einfuehrung
permalink: /:collection/:path
weight: 6
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=installation
progressstate: 5
---

Xtract IS wird für die Entwicklung und Ausführung von SSIS-Paketen benötigt. 

### Voraussetzungen 

{: .box-note }
**Hinweis:** Administratorberechtigungen sind notwendig, um Xtract IS zu installieren.

Achten Sie darauf die notwendigen Tools in der richtigen Reihenfolge zu installieren:

Laufzeitumgebung | Entwicklungsumgebung(en)
------------ | -------------
1. SQL Server | Visual Studio + SQL Sever Data Tools
2. Visual Studio + SQL Sever Data Tools | SQL Server Integration Services
3. Xtract IS| Xtract IS

![xis_client_server_generell](/img/content/xis/client_server_architektur_xis_generell.png){:class="img-responsive"}

 SQL-Server läuft auf der Laufzeitumgebung. Auf der Laufzeitumgebung werden die entwickelten SSIS Pakete bereitgestellt (SSISDB) und können
mittels SQL Server Agent eingeplant. 

Um Xtract IS Dataflow Task verwenden zu können, muss die Datei  *XtractISSetup.exe* auf allen Instanzen mit einer gültigen Lizenz installiert werden. 
Weitere Informationen dazu finden Sie im Abschnitt [Lizenzierung](./lizenz-einspielen).

### Installation mittels Setup-Programm

Führen Sie die Datei *XtractISSetup.exe* aus und folgen Sie den Anweisungen des Setup-Programms. 

![XIS_Setup](/img/content/xis/xis_setup-exe.png){:class="img-responsive"}

Das Xtract IS Setup-Programm installiert Xtract IS als Plug-in in SSIS.

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



### Unattended Installation (Unbeaufsichtigte Installation) 

Das Setup-Programm und der Lizenz-Manager können nicht interaktiv und ohne die Anzeige der GUI gestartet werden. 

Um `XtractISSetup.exe` im unbeaufsichtigten Modus auszuführen, verwenden Sie den Switch *--unattended* . <br>
Um den `XtractLicenseManager.exe` (Lizenz-Manager)  im unbeaufsichtigten Modus auszuführen, übergeben Sie den Pfad zur Lizenzdatei als Argument.

Da beide Programme `XtractISSetup.exe` und `XtractLicenseManager.exe` Windows-Anwendungen sind, wartet die Windows Eingabeaufforderung nicht bis die Installation abgeschlossen ist. 

Um zu warten, bis die Installation abgeschlossen ist, verwenden Sie den [start](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/start)-Befehlt mit dem Switch `/wait`.


{: .box-note }
**Hinweis:** Achten Sie auf die Groß- und Kleinschreibung der Parameter. 

```
start /wait XtractISSetup.exe --unattended
start /wait XtractLicenseManager.exe "C:\Program Files\XtractIS\XtractISLicense.json"
```


### Aktualisierung

{: .box-tip }
**Empfehlung:** Eine regelmäßige Aktualisierung der Software ist entscheidend für eine stabile Performance. 
Prüfen Sie die [Versionshistorie](https://kb.theobald-software.com/version-history/xtract-is-version-history) auf Updates. 
Eine neuere Version kann über die ältere Version installiert werden. 

{% include _content/de/einfuehrung/produktversion.md %}	


### Xtract IS Komponenten in Visual Studio anzeigen
Nach erfolgreicher Installation von Xtract IS erscheinen die Xtract IS Komponenten automatisch als Datenfluss-Komponenten in der SSIS-Toolbox Ihres Visual Studio Integration Services Projekts.

![XIS_SSIS_Toolbox](/img/content/XIS_SSIS_Toolbox.png){:class="img-responsive"}

Sollten die Xtract IS Komponenten jedoch unsichtbar sein, kann das an der fehlenden Übereinstimmung der Versionen der Tools liegen. Die Target Server Version des verwendeten SSIS-Projektes muss mit der Version der installierten SQL Server Data Tools (SSDT) übereinstimmen.
Sonst fehlen die notwendigen Xtract IS-Erweiterungen in der SQL Server-Installation (SSDT) und Laufzeitfehler können angezeigt werden. 

Ändern Sie die Zielumgebung für das Deployment, um die Xtract IS Komponenten in der Toolbox anzuzeigen.

![XIS_deployment_target_version_vNext](/img/content/VS_Deployment_Target.png){:class="img-responsive"}




