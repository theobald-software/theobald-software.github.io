---
ref: yunio-03
layout: page
title: Einführung in yunIO
description: Einführung
product: yunio
parent: yunio
childidentifier: einfuehrung
permalink: /:collection/:path
weight: 5
lang: de_DE
redirect_from:
  - de/yunio/einfuehrung/systemvoraussetzungen
  - de/yunio/einfuehrung/installation-und-update
  - de/yunio/einfuehrung/lizenz
progressstate: 5
---

yunIO ist ein auf Cloud-Umgebungen ausgerichteter Konnektor, der REST-basierte Webservices für den Lese- und Schreibzugriff auf SAP-Systeme bereitstellt.<br>
Die Webervices können mit allen Lösungen konsumiert werden, die mit REST, Swagger/OpenAPI umgehen können, wie z.B. Power Automate, Nintex und vielen Weiteren.  

#### Automation
![yunIO-Automation](/img/content/yunio/yunio-automation.png){:class="img-responsive" width="800px" }<br>
#### Business Processes
![yunIO-Business-Processes](/img/content/yunio/yunio-business.png){:class="img-responsive" width="800px" }<br>
#### Data Management
![yunIO-Data-Management](/img/content/yunio/yunio-data-management.png){:class="img-responsive" width="800px" }

## Systemvoraussetzungen

### Unterstützte SAP-Systeme und Releases
Die gesamte Kommunikation mit SAP erfolgt über das RFC-Protokoll. 
Es werden alle SAP ABAP basierten Systeme unterstützt, die RFC-Konnektivität bereitstellen.
Die Integration erfolgt auf der Ebene des SAP-Anwendungsservers. 
Daher ist die vom SAP-System verwendete Datenbank irrelevant. SAP-ABAP-Systeme auf beliebigen Datenbanken (einschließlich HANA) werden unterstützt. 
Das bedeutet auch, dass das Betriebssystem des SAP-Systems irrelevant ist - alle Betriebssysteme werden unterstützt.
SAP-Systeme, die auf Big Endian- und Little Endian-Hardware laufen, werden unterstützt.

SAP Release 4.6C und neuer werden unterstützt. Dazu gehören:<br/> 
* mySAP	
* SAP Application Server ABAP, Message Server, Router, Standalone Gateway
* SAP Business Suite 7 (CRM, SRM, SCM etc.)
* SAP Business All in One, CAR, APO, PI, IS-U etc.
* SAP BW 3.1 and later
* SAP BW/BI 7.x
* SAP BW/4HANA
* SAP ERP / ECC 5.0 / ECC 6.0 (including all EhPs)
* SAP R/3 Version 4.6C and later
* SAP S/4HANA

Die folgenden SAP Releases werden nur eingeschränkt unterstützt:
- SAP S/4HANA Cloud Extended Edition (EX)

{% include _content/de/einfuehrung/sap-authentication-xtract.md %}
{% include _content/de/einfuehrung/sap-misc.md %}
{% include _content/de/einfuehrung/operating-systems.md %}

### Unterstützte Webbrowser

yunIO unterstützt die aktuellen Versionen folgender Webbrowser:
- Firefox 
- Chrome
- Edge
- Safari

### Hardwareanforderungen

#### Prozessor-Kerne
- Minimum: 2 Kerne. 

#### Prozessorgeschwindigkeit   
- Minimum: Prozessor: 1,4 GHz, empfohlen: 2,0 GHz oder schneller

#### Hauptspeicher
- Minimum: 8 GB

#### Festplattenspeicher
Für die Installation werden 70 MB Festplattenspeicher benötigt.

#### 64-Bit-Umgebung	
Das Produkt kann nur auf 64-Bit-Betriebssystemen installiert werden.

#### Bildschirmauflösung
Das Produkt unterstützt eine Auflösung von min. 1920x1080x1.25, wobei 1.25 für die Bildschirmskalierung steht.

## Installation und Update


yunIO stellt einen Windows-Dienst für die Kommunikation mit dem SAP-System zur Verfügung und verfügt über eine eingebettete Web UI, den yunIO Designer. 

### Setup

{: .box-note }																   
**Hinweis:** Administratorrechte sind notwendig, um den yunIO-Dienst zu installieren.

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

Die Installationsschritte werden im Abschnitt [Lizenz](#lizenz) beschrieben.

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

{: .box-tip }
**Tipp:** Abonnieren Sie per [E-Mail](mailto:info@theobald-software.com) den regelmäßig erscheinenden Newsletter von Theobald Software, der Sie über Änderungen in der Versionshistorie und Veröffentlichungshinweise (Release Notes) informiert.

1. Prüfen Sie, ob Sie über eine funktionierende Testumgebung mit einer gültigen Lizenz und Wartung verfügen.
2. Stellen Sie sicher, dass die Testumgebung eine Kopie der aktuellen Produktivumgebung ist.
3. Prüfen Sie die [Versionshistorie](https://kb.theobald-software.com/version-history) und die Veröffentlichungshinweise (Release Notes) in der Knowledge-Base, um eine Update-Notwendigkeit auszuschließen. 
4. Erstellen Sie ein Backup der aktuellen Installation.
5. Führen Sie alle notwendigen Vorbereitungen und Änderungen durch, die in den Veröffentlichungshinweisen (Release Notes) / Versionshistorie  beschrieben sind. 

## Lizenz

### Über das Lizenzierungskonzept von yunIO
yunIO wird pro Windows Server lizenziert. Eine Demo-Lizenz gültig für 30 Tage wird automatisch mit der Installation bereitgestellt.

Eine reguläre Lizenz wird nach dem Kauf des Produkts im [Kundenportal - My Theobald Software](https://my.theobald-software.com/) zur Verfügung gestellt. 
Die Lizenz ist an Ihre Entität und einen bestimmten Servernamen gebunden.<br>
Wenn Sie den yunIO Designer und den yunIO Server auf verschiedenen Rechnern betreiben, muss nur die Demo-Serverlizenz, durch eine reguläre Lizenz ersetzt werden.
 
### Installieren von yunIO Lizenz - YunIOLicense.json
Um die reguläre Lizenz zu installieren, legen Sie die YunIOLicense.json-Datei in das folgende Programm-Verzeichnis des Servers ab:
`C:\Program Files\Theobald Software\YunIO` <br>

Ein Neustart des yunIO Windows-Dienstes ist nicht notwendig.

### About yunIO - Info-Fenster

{: .box-tip }
**Tipp:** Um Ihre aktuellen Lizenzdaten einzusehen, wählen Sie in der Hauptmenüleiste des yunIO Designers **[About]**.
Die Versionsnummer wird Ihnen rechts neben dem Seitentitel angezeigt.<br>

Das *About* Menü von yunIO stellt Direktlinks zu folgenden Theobald Software Support-Seiten zur Verfügung:
- Kundenportal
- Online Hilfe
- Knowledge Base
- Support

![Demo_License](/img/content/yunio/About.png){:class="img-responsive"}


### Wartung
Allgemeine Informationen zu Wartungspreisen finden Sie auf der [offiziellen Website](https://theobald-software.com/yunio/) von Theobald Software und auf [My Theobald Software - Portal für Kunden und Partner](https://my.theobald-software.com/). 
Kontaktieren Sie die [Sales Abteilung](mailto:sales@theobald-software.com) für weitere Informationen über verfügbare Wartungsoptionen.<br>
Bei technischen Problemen wenden Sie sich das Support-Team per Email [https://support.theobald-software.com](https://support.theobald-software.com) oder [Helpdesk](https://support.theobald-software.com/helpdesk).


****
#### Weiterführende Links
- [My Theobald Software - Portal für Kunden und Partner](https://my.theobald-software.com/)
