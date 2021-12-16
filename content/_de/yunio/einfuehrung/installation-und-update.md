---
ref: yunio-introduction-03
layout: page
title: Installation und Update
description: Installation
product: yunio
parent: einfuehrung
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=installation
progressstate: 5
---

Bei yunIO handelt es sich um einen Windows-Dienst mit einer eingebetteten Web-UI. Der yunIO-Dienst wird auf einer lokalen oder Cloud-gehosteten Windows-Serverumgebung installiert. 

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
|Open the yunIO Designer after installation|- | Öffnet nach der Installation den yunIO Designer in Ihrem Standard-Browser.|

Die Installationsschritte werden im Abschnitt [Lizenz](./lizenz) beschrieben.

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
