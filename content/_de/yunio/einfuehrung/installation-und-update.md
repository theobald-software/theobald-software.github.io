---
ref: yunio-intro02
layout: page
title: Installation und Update
description: Installation und Update
product: yunio
parent: einfuehrung
permalink: /:collection/:path
weight: 2
lang: de_DE
progressstate: 5
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für yunIO.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [HelpCenter für yunIO](https://helpcenter.theobald-software.com/yunio/).

yunIO stellt einen Windows-Service für die Kommunikation mit dem SAP-System zur Verfügung und verfügt über eine eingebettete Web UI, den yunIO Designer. 

### Setup

{: .box-note }																   
**Hinweis:** Administratorrechte sind notwendig, um den yunIO-Service zu installieren.

Die `yunIOSetup.exe` ist ein branchenübliches Setup.  Führen Sie die Datei `yunIOSetup.exe` aus und folgen Sie den Anweisungen des Setups.

Beim Starten des Setups können die optionalen Komponenten für die Installation ausgewählt werden.

![XU-Setup](/img/content/yunio/yunio-setup.png){:class="img-responsive"}

|Komponente | Subkomponente |Beschreibung |
|:----|:---| :---|
|Main Product Files | |Installiert alle notwendigen Dateien, die zum Verwenden von yunIO notwendig sind.|
|<!----> | Install Service |Installiert die Serverkomponente als Windows-Service. |
|Start Menu Shortcuts |- | Komponente, die dem Startmenü Verknüpfungen hinzufügt.|
| Enable .NET updates via Windows Updater <br>for Windows Server Edition. |- | Erzeugt einen Eintrag in der Regitry, der automatisch .NET aktualisiert. |
|Open the yunIO Designer after installation|- | Öffnet nach der Installation den yunIO Designer in Ihrem Standard-Browser.|

Für Informationen zur Installation der Lizenz, siehe [Lizenz](./lizenz).

#### Enable .NET updates via Windows Updater for Windows Server Edition
Diese Option ist nur auf Windows Server Editionen verfügbar und nur wenn sie nicht bereits aktiv ist.<br>
Sie erzeugt einen Eintrag in der Regitry (`[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\.NET]//"AllowAUOnServerOS"=dword:00000001`), der automatisch .NET über Windows Update aktualisiert. 
Um diese Option zu deaktivieren, löschen Sie den Registry-Eintrag.


### Dateien des Programmverzeichnisses
Die folgende Liste zeigt einige der wichtigsten Dateien, die nach der Installation in dem Standardverzeichnis `C:\Program Files\Theobald Software\yunIO` abgelegt werden:

|Dateiname | Beschreibung |
|:----|:---|
| logs Verzeichnis| Verzeichnis mit Server- und Extraktionsprotokollen etc. |
| config Verzeichnis | Verzeichnis mit allen SAP-Verbindungen, Extraktionen, Destinationen und anderen Einstellungen.|
| Uninstall yunIO Shortcut | Shortcut zum Deinstallieren und Entfernen von yunIO mit allen dazugehörigen Komponenten von Ihrer Maschine. |
| yunIOSetup.exe| Setup der aktuell installierten Version. |
| yunIOLicense.json | Lizenzdatei mit Komponenten- und Laufzeitinformationen. |


### Neuinstallation und Update

{: .box-warning}
**Warnung!** **Datenverlust:**
Systemänderungen oder Updates können die Funktionalität der Software einschränken, dabei können Daten verloren gehen. 
Erstellen Sie ein Backup des Verzeichnis: `C:\Program Files\Theobald Software\yunIO\config` in regelmäßigen Abständen.

Eine regelmäßige Aktualisierung der Software ist entscheidend für eine stabile Performance, insbesondere bei größeren Änderungen und Updates hoher ([H])-Priorität. 
Prüfen Sie die [Versionshistorie](https://kb.theobald-software.com/version-history) auf Updates. Eine neuere Version kann über die ältere Version installiert werden. 
Alle Einstellungen und angelegte Objekte bleiben erhalten.

#### Update-Vorbereitung

1. Prüfen Sie, ob Sie über eine funktionierende Testumgebung mit einer gültigen Lizenz und Wartung verfügen.
2. Stellen Sie sicher, dass die Testumgebung eine Kopie der aktuellen Produktivumgebung ist.
3. Prüfen Sie die [Versionshistorie](https://kb.theobald-software.com/version-history) und die Veröffentlichungshinweise (Release Notes) in der Knowledge-Base, um eine Update-Notwendigkeit auszuschließen. 
4. Erstellen Sie ein Backup der aktuellen Installation.
5. Führen Sie alle notwendigen Vorbereitungen und Änderungen durch, die in den Veröffentlichungshinweisen (Release Notes) / Versionshistorie  beschrieben sind. 

{: .box-tip }
**Tipp:** Abonnieren Sie per [E-Mail](mailto:info@theobald-software.com) den regelmäßig erscheinenden Newsletter von Theobald Software, der Sie über Änderungen in der Versionshistorie und Veröffentlichungshinweise (Release Notes) informiert.

### Versionsnummer
Um Ihre aktuellen Versionsnummer einzusehen, öffnen Sie das **About** Menü in der Hauptmenüleiste des yunIO Designers.<br>
Die Versionsnummer wird Ihnen unter dem Seitentitel angezeigt.<br>

![Demo_License](/img/content/yunio/About.png){:class="img-responsive"}


****
#### Weiterführende Links
- [Theobald Software Kundenportal](https://my.theobald-software.com/)
