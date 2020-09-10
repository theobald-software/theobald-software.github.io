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
---
Xtract IS wird für die Entwicklung und Ausführung von SSIS-Paketen benötigt. 
Stellen Sie sicher, dass Sie Xtract IS auf beiden Maschinentypen installieren:
- Auf der Entwicklungsmaschine, auf der Visual Studio / SQL Sever Data Tools läuft. Es können auch mehrere Maschinen sein.
- Auf der Maschine, auf dem der SQL-Server läuft. Diese Maschine wird für das Deployment und den Betrieb der Pakete verwendet.


![xis_client_server_generell](/img/content/xis/client_server_architektur_xis_generell.png){:class="img-responsive"}


### Voraussetzungen

{: .box-note }
**Hinweis:** Administratorberechtigungen sind notwendig, um Xtract IS zu installieren.

Um Xtract IS verwenden zu können, muss die Datei  *XtractISSetup.exe* in der lokalen Entwicklungsumgebung (Visual Studio oder SSDT)
**und** auf dem  SSIS Server ausgeführt und installiert werden. Weitere Informationen finden Sie im Abschnitt [Lizenzierung](./lizenz-einspielen).

### Standard Setup

Beim Standard Setup führen Sie die Datei *XtractISSetup.exe* aus und folgen Sie den Anweisungen des Setup-Programms. 

![XIS_Setup](/img/content/xis/xis_setup-exe.png){:class="img-responsive"}

Beim Setup werden verschiedene DLLs in bestimmte Verzeichnisse kopiert, um von den Integration Services verwendet zu werden. <br>

Der Lizenzinstallationsvorgang ist im Abschnitt [Lizenz einspielen](./lizenz-einspielen#installation-der-xtract-is-lizenz---xtractislicensejson) beschrieben.

#### Dateien des Installationsverzeichnisses

Die folgende Liste zeigt einige der wichtigsten Dateien, die nach der Installation in das Standardverzeichnis ``C:\Programme\XtractIS`` abgelegt werden:

|Dateiname | Beschreibung |
|:----|:---|
| ABAP Ordner | Ordner mit eigenentwickelten Z-Funktionsbausteinen (.txt) und den dazugehörigen Transportaufträgen (.zip).|
| InstallXtractIS.exe | Konsolenprogramm zum Installieren und Registrieren der Xtract IS Komponenten und DLLs auf dem System.|
| XtractISConversionPreparer.exe | Tool, das SSIS-Pakete (inkl. Xtract IS-Komponente), die für ältere Versionen von SSIS erstellt wurden, für die Migration auf neuere Versionen von SSIS vorbereitet. Weitere Informationen im Abschnitt [SSIS Migration](./ssis-migration).|
|xis_version.bat | Versions-Batchdatei. Achten Sie beim Start von xis_version.bat darauf, die Datei XtractISVersionInfo.exe aus dem Installationsverzeichnis als Parameter zu übergeben.|
| XtractLicenseManager.exe | Anwendung zum Einspielen und Prüfen der aktuellen Lizenz. |
|Uninstall Xtract IS.lnk| Tool zum Deinstallieren und Entfernen von Xtract IS mit allen dazugehörigen Komponenten von Ihrem Rechner. |
| gac-uninstall.bat | Tool zum Leeren des GAC von allen Xtract IS-bezogenen Komponenten.|
| Eula_XtractIS.rtf | Dokument mit der Lizenzvereinbarung zur Nutzung der Software Xtract IS.|
|XtractISLicense.json| Lizenzdatei mit Server-, Komponenten-  und Laufzeitinformationen|

### Silent Setup

{: .box-note }
**Hinweis:** Achten Sie auf die Groß- und Kleinschreibung der Parameter. 

Das Setup-Programm kann auch ohne die Anzeige der GUI gestartet werden. Diese Art von Ausführung des Setup-Programms heißt "Silent Setup". 

Wenn Sie das Silent Setup ausführen möchten, verwenden Sie dazu den Parameter */S*. <b>

Um das Installationsverzeichnis festzulegen, verwenden Sie den Parameter */D*.  

Weitere Einstellung- und Steuermöglichkeiten für das Setup finden Sie auf der folgenden Webseite: [Command Line Usage](http://nsis.sourceforge.net/Docs/Chapter3.html#3.2.1).


#### Blocking, Exit-Codes und Berechtigung

Die Verwendung des */w*-Schalters am Anfang der Anweisung bietet die folgenden Funktionen:

- Sie können das Setup bzw. den License Manager den aufrufenden Prozess (z. B. ein Batch) blockieren lassen bis die Installation abgeschlossen ist
- Sie können einen korrekten Exit-Code bekommen, um den Erfolg der Installation zu überprüfen


**Beispiele:**
```
start /w XtractISSetup.exe /S
start /w XtractLicenseManager.exe "My License\XtractIS.License.json"
start /w XtractLicenseManager.exe XtractIS.License.json
```



### Xtract IS Komponenten in SSIS anzeigen
Nach erfolgreicher Installation von Xtract IS erscheinen die Xtract IS Komponenten automatisch als Datenfluss-Komponenten in der SSIS-Toolbox Ihres Visual Studio Integration Services Projekts.

![XIS_SSIS_Toolbox](/img/content/XIS_SSIS_Toolbox.png){:class="img-responsive"}

{: .box-warning }
**Warnung! Xtract IS Komponenten nicht sichtbar**<br> Mit der aktuellen Version der SSDT für VS 2015 ist der *SQL Server vNext* oder *SQL Server 2017* standardmäßig als Zielumgebung für das Deployment von SSIS Projekten ausgewählt. Mit dieser Einstellung sind die Xtract IS Komponenten in der SSIS Toolbox nicht sichtbar. <br> Ändern Sie die Zielumgebung für das Deployment auf SQL Server 2016, um die Xtract IS Komponenten in der Toolbox anzuzeigen.

![XIS_deployment_target_version_vNext](/img/content/VS_Deployment_Target.png){:class="img-responsive"}



