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

### Standard Setup

Beim Standard Setup führen Sie die Datei XtractISSetup.exe aus und folgen den Anweisungen des Setup-Programms. 

Die Installation der Lizenzdatei ist im Kapitel [Lizenz einspielen](./lizenz-einspielen) beschrieben.

Beim Setup werden verschiedene DLLs in bestimmte Verzeichnisse kopiert, damit sie von  den Integration Services verwendet werden können. <br>
Das Kopieren und Registrieren der DLLs übernimmt das Konsolenprogramm *InstallXtractIS.exe* automatisch. 

### Silent Setup

Das Standard Setup kann auch ohne die Anzeige der GUI gestartet werden. Dazu muss das Setup mit dem /S Parameter gestartet werden. Über den /D Parameter lässt sich das Installationsverzeichnis festlegen. 

Weitere Einstellung- und Steuermöglichkeiten für das Setup finden Sie unter [Command Line Usage](http://nsis.sourceforge.net/Docs/Chapter3.html#3.2.1).

**Wichtig:** Bitte achten Sie auf die Groß- und Kleinschreibung der Parameter. 

**XtractLicenseManager**<br>
Dem XtractLicenseManager kann die zu installierende Lizenzdatei als Argument übergeben werden. Diese Datei wird ohne GUI installiert, im Fehlerfall geht eine Messagebox auf und es wird ein enstprechender Exit-Code zurückgegeben.

**Blocking, Exit-Codes und Berechtigung**<br>
Wenn man möchte, dass das Setup bzw. der License Manager den aufrufenden Prozess (z. B. ein Batch) blockiert bis die Installation fertig ist und wenn man einen korrekten Exit-Code haben möchte, um zu prüfen, ob die Installation erfolgreich war, muss man das jeweilige Programm mit dem start Befehl und /w switch starten. Das kommt daher, dass beides keine Konsolenanwendungen sind.

**Wichtig**: Beide Programme benötigen Admininistratorrechte.

**Beispiele:**

start /w XtractISSetup.exe /S<br>
start /w XtractLicenseManager.exe "My License\XtractIS.License.json"<br>
start /w XtractLicenseManager.exe XtractIS.License.json<br>

Die folgende Tabelle zeigt einige Dateien, die die Installationsroutine mitbringt und auf dem Zielrechner installiert:

Im Verzeichnis \XtractIS\:

|Dateiname | Beschreibung |
|:----|:---|
| ERPConnect35.dll | Enthält die Backend-Funktionen für den SAP-Zugriff. |
| XtractIS* .dll | Enthält den Kern der Xtract IS Komponenten.| 
| XtractIS* .GUI.dll | Enthält die Masken zur Manipulation der Datenquelle zur Design-Zeit.|
| XtractIS* .ConnectionManager.dll | Enthält Funktionen für den Verbindungsmanager.|
|XtractISLicense.json | Enthält Lizenz-Informationen.|
| __ .txt__ | Enthält Templates für kundeneigene Funktionsbausteine (im Ordner ABAP).|
| InstallXtractIS.exe | Konsolenprogramm für die Installation (verteilen und registrieren der Dlls).|
| Gacutil.exe | Nur zur internen Nutzung für die Assembly-Registrierung.|
| gac-uninstall.bat | Tool zum Deregistrieren aller Xtract-eigenen dlls.|
| uninst.exe | Tool zum De-installieren von Xtract IS. |
| 


**<br>
Tool zum Konvertieren der Xtract-Komponenten auf eine höhere SSIS-Version (s. Kapitel "SSIS Migration").

**XtractLicenseManager.exe** <br>
Programm zum Einspielen und Prüfen Ihrer aktuellen Lizenz.

Alle Dll-Dateien werden im Global Assembley Cache registriert.
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTUxMTU4ODk4MiwyMTIxMDMxMjU1XX0=
-->