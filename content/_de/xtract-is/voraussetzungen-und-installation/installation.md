---
ref: xi-requirements-and-installation-02
layout: page
title: Installation
description: Installation
product: xtract-is
parent: voraussetzungen-und-installation
permalink: /:collection/:path
weight: 2
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=installation
---
Um Xtract IS verwenden zu können, müssen sowohl in der lokalen Entwicklungsumgebung (visual studio oder SSDT) als auch auf dem  SSIS Server die Datei  *XtractISSetup.exe* ausgeführt werden. Somit muss zwingend auf **beiden** Umgebungen die Installationsroutine von Xtract IS installiert werden.

### Standard Setup

Beim Standard Setup führen Sie die Datei *XtractISSetup.exe* aus und folgen den Anweisungen des Setup-Programms. 

Beim Setup werden verschiedene DLLs in bestimmte Verzeichnisse kopiert, damit sie von  den Integration Services verwendet werden können. <br>

Die Installation der Lizenzdatei ist im Kapitel [Lizenz einspielen](./lizenz-einspielen) beschrieben.


### Silent Setup

Das Standard Setup kann auch ohne die Anzeige der GUI gestartet werden. Dazu muss das Setup mit dem /S Parameter gestartet werden. Über den /D Parameter lässt sich das Installationsverzeichnis festlegen. 

Weitere Einstellung- und Steuermöglichkeiten für das Setup finden Sie unter [Command Line Usage](http://nsis.sourceforge.net/Docs/Chapter3.html#3.2.1).

**Wichtig:** <br>Bitte achten Sie auf die Groß- und Kleinschreibung der Parameter. 

**XtractLicenseManager**<br>
Dem XtractLicenseManager kann die zu installierende Lizenzdatei als Argument übergeben werden. Diese Datei wird ohne GUI installiert, im Fehlerfall geht eine Messagebox auf und es wird ein enstprechender Exit-Code zurückgegeben.

**Blocking, Exit-Codes und Berechtigung**<br>
Wenn man möchte, dass das Setup bzw. der License Manager den aufrufenden Prozess (z. B. ein Batch) blockiert bis die Installation fertig ist und wenn man einen korrekten Exit-Code haben möchte, um zu prüfen, ob die Installation erfolgreich war, muss man das jeweilige Programm mit dem start Befehl und /w switch starten. Das kommt daher, dass beides keine Konsolenanwendungen sind.

**Wichtig**: Beide Programme benötigen Admininistratorrechte.

**Beispiele:**

- start /w XtractISSetup.exe /S<br>
- start /w XtractLicenseManager.exe "My License\XtractIS.License.json"<br>
- start /w XtractLicenseManager.exe XtractIS.License.json<br>

Die folgende Tabelle zeigt wichtige Dateien, die die Installationsroutine mitbringt und auf dem Zielrechner Im Verzeichnis \XtractIS\: installiert:


|Dateiname | Beschreibung |
|:----|:---|
| ABAP Ordner | Enthält kundeneigene Funktionsbausteine (.txt) und SAP Transportaufträge (.zip).|
| InstallXtractIS.exe | Konsolenprogramm für die Installation (verteilen und registrieren der Dlls).|
| XtractISConversionPreparer.exe | Tool zum Konvertieren der Xtract-Komponenten auf eine höhere SSIS-Version (siehe Kapitel [SSIS Migration](https://help.theobald-software.com/de/xtract-is/voraussetzungen-und-installation/ssis-migration)).|
| XtractLicenseManager.exe | Programm zum Einspielen und Prüfen Ihrer aktuellen Lizenz. |
| uninst.exe | Tool zum De-installieren von Xtract IS. |
| gac-uninstall.bat | Tool zum Deregistrieren aller Xtract-eigenen dlls.|
| ERPConnect35.dll | Enthält die Backend-Funktionen für den SAP-Zugriff. |
| XtractIS.dll | Enthält den Kern der Xtract IS Komponenten.| 
| XtractIS.GUI.dll | Enthält die Masken zur Manipulation der Datenquelle zur Design-Zeit.|
| XtractIS.ConnectionManager.dll | Enthält Funktionen für den Verbindungsmanager.|
|XtractISLicense.json | Enthält Lizenz-Informationen.|

Sämtliche  Dll-Dateien werden im Global Assembley Cache registriert.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyODEyOTk1MzYsLTEwOTM4NzU5ODQsMT
Q0NDc2NjkwNywtMTU2NTM0NDg4OSw5NDY1MTA5MjEsLTcwMjE1
MTYyMiw2NjYzNTEwMTYsMjEyMTAzMTI1NV19
-->
