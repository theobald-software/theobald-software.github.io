---
ref: xu-introduction-03
layout: page
title: Installation und Update
description: Installation
product: xtract-universal
parent: einfuehrung
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=installation
---

### Voraussetzungen

{: .box-note }
**Hinweis:** Administratorberechtigungen sind notwendig, um Xtract Universal zu installieren.

### Setup

Das XtractUniversalSetup.exe ist ein branchenübliches Setup.  Führen Sie die Datei *XtractUniversalSetup.exe* aus und folgen Sie den Anweisungen des Setups.

Beim Starten des Setups können die optionalen Komponenten (1) für die Installation ausgewählt werden. Bei der Auswahl der Komponenten werden die Optionsdetails im "Description" Feld angezeigt (2). 

![XU-Setup](/img/content/xu/XU_Setup_2.png){:class="img-responsive"}

|Komponente | Beschreibung |
|:----|:---|
|Tableau Extract API | Komponente erforderlich nur für die Tableau Destination |
|Start Menu Shortcut | Komponente, die dem Startmenü Verknüpfungen hinzufügt |
|Convert Config files | Konvertiert Extraktionen, Sources (Quellen), Destinationen usw. vom Format der vorherigen Version in das neue Format. Diese Komponente ist entscheidend bei der Installation von Major Releases und Upgrades von z.B. Version 3.x auf 4.x.
Install Service | Installiert die Serverkomponente als Windows-Service. Mehr Details im Abschnitt [Architektur](./architektur).

Die Installationsschritte werden im Abschnitt [Lizenz](./lizenz#installieren-von-xtract-universal-lizenz---xtractuniversallicensejson) beschrieben.

#### Dateien des Installationsverzeichnisses
Die folgende Liste zeigt einige der wichtigsten Dateien, die nach der Installation in das Standardverzeichnis ``C:\Program Files\XtractUniversal`` abgelegt werden:

|Dateiname | Beschreibung |
|:----|:---|
| ABAP Verzeichnis | Verzeichnis mit den SAP-Funktionsbausteinen. Die readme.txt innerhalb des Verzeichnisses beinhaltet weitere Informationen. Mehr Details dazu finden Sie auch in [SAP Customizing](../sap-customizing/).|
| Alteryx Verzeichnis| Verzeichnis mit dem Plugin-Setup für die [Alteryx Destination](./xu-destinationen/alteryx-de/voraussetzungen-alteryx-de).|
| logs Verzeichnis| Verzeichnis mit Server- und Extraktionsprotokollen etc. Mehr Details dazu finden Sie in [Logging](../logging). |
| config Verzeichnis | Verzeichnis mit allen SAP-Verbindungen, Extraktionen, Destinationen und anderen Einstellungen. Mehr Details dazu finden Sie auch [Backup und Migration](./backup-und-migration).|
| powerbi Verzeichnis| Verzeichnis mit Dateien, die mit der [Power BI Connector Destination](../xu-destinationen/Power-BI-Connector/) in Zusammenhang stehen.|
| result-cache Verzeichnis | Verzeichnis mit Extraktions-Cache-Dateien, anwendbar nur für Pull-Destinationen. Mehr Details dazu finden Sie auch in Abschnitten [Pull-Destinationen](../xu-destinationen#pull--und-push-destinationen) und [Allgemeine Einstellungen: General Settings > Misc. Tab > Cache Result Setting](../erste-schritte-mit-xu/allgemeine-einstellungen#misc-tab).|
| xu.exe | Kommandozeilentool zum Ausführen von Extraktionen. Mehr Details dazu finden Sie auch im Abschnitt [Extraktion einplanen](../fortgeschrittene-techniken/extraktion_einplanen). |
| XtractDesigner.exe | [Xtract Universal Designer](../erste-schritte-mit-xu/designer-overview) Anwendung zum Erstellen, Testen und Überwachen von Extraktionen.|
| ConfigConverter.exe|  Anwendung, die Extraktionen, Quellen (Sources), Destinationen usw. vom Format der vorherigen Version in das neue Format konvertiert. Diese Anwendung ist entscheidend bei der Installation von Major Releases und Upgrades von z.B. Version 3.x auf 4.x. |
| uninstall.exe| Tool zum Deinstallieren und Entfernen von Xtract Universal mit allen dazugehörigen Komponenten von Ihrer Maschine. |
|XtractUniversalSetup.exe| Setup der aktuell installierten Version. Mehr Details dazu finden Sie auch in [Migration auf eine andere Maschine](./backup-und-migration#migration-auf-eine-andere-maschine).|
| Eula_XtractUniversal.rtf | Dokument mit der Lizenzvereinbarung zur Nutzung der Software Xtract Universal.|
| XtractUniversalLicense.json | Lizenzdatei mit Server-, Komponenten- und Laufzeitinformationen. |


{: .box-note }
**Hinweis:** Mehr Details zum Starten von Xtract Universal Server als Konsolenprogramm, finden Sie im Abschnitt [Fehlerbehandlung](./fehlerbehandlung) und im Knowledge-Base-Artikel [How to use target principal field](https://kb.theobald-software.com/xtract-universal/target-principal-TPN).


### Neuinstallation und Update

{: .box-warning}
**Warnung!** **Datenverlust:**
Systemänderungen oder Updates können die Funktionalität der Software einschränken, dabei können Daten verloren gehen. 
Erstellen Sie ein Backup des Verzeichnis: `C:\Program Files\XtractUniversal\config` in regelmäßigen Abständen.

Eine regelmäßige Aktualisierung der Software ist entscheidend für eine stabile Performance, insbesondere bei größeren Änderungen und Updates hoher ([H])-Priorität. 
 Prüfen Sie die [Versionshistorie](https://kb.theobald-software.com/version-history) auf Updates. Eine neuere Version kann über die ältere Version installiert werden. 

Alle Einstellungen und angelegten Objekte bleiben erhalten.
Beim Migrieren von Daten und Einstellungen auf einen anderen Server, folgen Sie den Anweisungen, die im Abschnitt  [Backup und Migration](./backup-und-migration).

#### Update-Vorbereitung

{: .box-tip }
**Tipp:** Abonnieren Sie per [E-Mail](mailto:info@theobald-software.com) den regelmäßig erscheinenden Newsletter von Theobald Software, der Sie über Änderungen in der Versionshistorie und Veröffentlichungshinweise (Release Notes) informiert.

1. Prüfen Sie, ob Sie über eine funktionierende Testumgebung mit einer gültigen Lizenz und Wartung verfügen.
2. Stellen Sie sicher, dass die Testumgebung eine Kopie der aktuellen Produktivumgebung ist.
3. Prüfen Sie die [Versionshistorie](https://kb.theobald-software.com/version-history) und die Veröffentlichungshinweise (Release Notes) in der Knowledge-Base, um eine Update-Notwendigkeit auszuschließen. 

4. Erstellen Sie ein [Backup](./backup-und-migration) der aktuellen Installation.
5. Führen Sie alle notwendigen Vorbereitungen und Änderungen durch, die in den Veröffentlichungshinweisen (Release Notes) / Versionshistorie  beschrieben sind. Bei größeren Änderungen verwenden Sie den ConfigConverter.

### Aktualisieren von Hauptversionen (Major Releases) - ConfigConverter

Es gibt zwei Möglichkeiten, die Produktversion von XU 2.x und 3.x auf XU 4.x zu aktualisieren:
- Upgrade während der Installation
- Manuelles Upgrade


#### Upgrade während der Installation
1. Starten Sie das Xtract Universal Setup.
2. Markieren Sie die Checkbox **Convert config files**. <br>
Die Option *Convert config files* startet die *ConfigConverter*-Anwendung, die sicherstellt, dass alle Extraktionen, Quellsysteme (Source Systems), Destinationen sowie Server- und Benutzereinstellungen von XU 2.x oder 3.x in der neuen Version verfügbar sind. <br> 
![XU3_Migration_1](/img/content/XU4_Migration_1.png){:class="img-responsive"}
3. Bestätigen Sie den Konvertierungsprozess im Pop-up-Fenster der Kommandozeile.
![XU3_Migration_2](/img/content/XU3_Migration_2.png){:class="img-responsive"}


#### Manuelles Upgrade
Wird der *ConfigConverter* nicht automatisch bei der Installation ausgeführt, kann dieser auch nachträglich manuell aus dem Installationsverzeichnis ``C:\Program Files\XtractUniversal gestartet werden.C:\Program Files\XtractUniversal``. <br>

![XU3_Migration_3](/img/content/XU3_Migration_3.png){:class="img-responsive"}

{:.box-note}
**Hinweis:** Alle Probleme, die während des Konvertierungsprozesses auftreten können, werden im Befehlszeilenfenster angezeigt. Kopieren Sie den Befehlszeilenkontext und senden Sie ihn bei Bedarf an das Support-Team.   

****
#### Weiterführende Links
- [Backup und Migration](./backup-und-migration)