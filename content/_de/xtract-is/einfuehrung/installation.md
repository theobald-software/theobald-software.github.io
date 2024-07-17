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

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract IS.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

Xtract IS wird für die Entwicklung und Ausführung von SSIS-Paketen benötigt. 

### Voraussetzungen 

Administratorberechtigungen sind notwendig, um Xtract IS zu installieren.

Achten Sie darauf die notwendigen Tools in der richtigen Reihenfolge zu installieren:

Reihenfolge | Laufzeitumgebung | Entwicklungsumgebung(en)
------------ | -------------
1 | SQL Server (+ [Integration Services](https://learn.microsoft.com/en-us/sql/integration-services/install-windows/install-integration-services?view=sql-server-ver16#install-integration-services)) | [Visual Studio](https://visualstudio.microsoft.com/downloads) + [SQL Server Data Tools](https://learn.microsoft.com/de-de/sql/ssdt/download-sql-server-data-tools-ssdt?view=sql-server-ver16)
2 | Optional: [Visual Studio](https://visualstudio.microsoft.com/downloads) + [SQL Server Data Tools](https://learn.microsoft.com/de-de/sql/ssdt/download-sql-server-data-tools-ssdt?view=sql-server-ver16)| [SQL Server Integration Services](https://marketplace.visualstudio.com/items?itemName=SSIS.MicrosoftDataToolsIntegrationServices)
3 |Xtract IS| Xtract IS

{: .box-note }
**Hinweis:** Wenn Sie Visual Studio installieren, achten Sie darauf das Toolset "Data Storage & Processing" auszuwählen. 

![xis_client_server_generell](/img/content/xis/client_server_architektur_xis_generell.png){:class="img-responsive"}

Der SQL-Server läuft auf der Laufzeitumgebung. Auf dieser Laufzeitumgebung werden die entwickleten SSIS-Pakete / Projekte in der SSISDB bereitgestellt und können mittels SQL Server Agent eingeplant und ausgeführt werden.


Um Xtract IS Data Flow Tasks verwenden zu können, muss die Datei *XtractISSetup.exe* auf allen Instanzen mit einer gültigen Lizenz installiert werden. 
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
| XtractISVersionInfo.exe | Starten Sie die XtractISVersionInfo.exe Datei über das Kommandozeilen-Tool aus, um die installierte installierte Xtract IS Version auszulesen udn anzuzeigen.|
| XtractLicenseManager.exe | Anwendung zum Einspielen und Prüfen der aktuellen Lizenz. |
|Uninstall Xtract IS.lnk| Tool zum Deinstallieren und Entfernen von Xtract IS mit allen dazugehörigen Komponenten von Ihrem Rechner. |
| gac-uninstall.bat | Tool zum Leeren des GAC von allen Xtract IS-bezogenen Komponenten.|
| Eula_XtractIS.rtf | Dokument mit der Lizenzvereinbarung zur Nutzung der Software Xtract IS.|
|XtractISLicense.json| Lizenzdatei mit Server-, Komponenten-  und Laufzeitinformationen|



### Unattended Installation (Unbeaufsichtigte Installation) 

Das Setup-Programm und der Lizenz-Manager können nicht interaktiv und ohne die Anzeige der GUI gestartet werden. 

- Um `XtractISSetup.exe` im unbeaufsichtigten Modus auszuführen, verwenden Sie den Switch *--unattended*.
- Um den `XtractLicenseManager.exe` (Lizenz-Manager)  im unbeaufsichtigten Modus auszuführen, übergeben Sie den Pfad zur Lizenzdatei als Argument.

Da beide Programme `XtractISSetup.exe` und `XtractLicenseManager.exe` Windows-Anwendungen sind, wartet die Windows Eingabeaufforderung nicht bis die Installation abgeschlossen ist. 
Um zu warten, bis die Installation abgeschlossen ist, verwenden Sie den [start](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/start)-Befehlt mit dem Switch `/wait`.

{: .box-note }
**Hinweis:** Achten Sie auf die Groß- und Kleinschreibung der Parameter. 

```
start /wait XtractISSetup.exe --unattended
start /wait XtractLicenseManager.exe "C:\Program Files\XtractIS\XtractISLicense.json"
```


{% include _content/de/einfuehrung/produktversion.md %}	


### Xtract IS Komponenten in Visual Studio anzeigen
Nach erfolgreicher Installation von Xtract IS erscheinen die Xtract IS Komponenten automatisch als Datenfluss-Komponenten in der SSIS-Toolbox Ihres Visual Studio Integration Services Projekts.

![XIS_SSIS_Toolbox](/img/content/XIS_SSIS_Toolbox.png){:class="img-responsive"}

Wenn die Xtract IS Komponenten nicht sichtbar sind, prüfen Sie die Übereinstimmung der Versionen der Tools. 

Die Deployment Target Version des verwendeten SSIS-Projektes muss mit der Version der installierten SQL Server Data Tools (SSDT) übereinstimmen.
Wenn die Versionen nicht übereinstimmen, fehlen die notwendigen Xtract IS-Erweiterungen in der SQL Server-Installation (SSDT) und Laufzeitfehler können angezeigt werden. 

Ändern Sie die Target Server Version für das Deployment, um die Xtract IS Komponenten in der Toolbox anzuzeigen.

![XIS_deployment_target_version_vNext](/img/content/VS_Deployment_Target.png){:class="img-responsive"}

****
#### Weiterführende Links
- [Visual Studio + SQL Server Data Tools](https://visualstudio.microsoft.com/free-developer-offers/)
- [SQL Server Integration Services](https://marketplace.visualstudio.com/items?itemName=SSIS.MicrosoftDataToolsIntegrationServices)
- [Integration Services](https://learn.microsoft.com/en-us/sql/integration-services/install-windows/install-integration-services?view=sql-server-ver16#install-integration-services)


