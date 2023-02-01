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
progressstate: 5
---

### Voraussetzungen

{: .box-note }
**Hinweis:** Administratorberechtigungen sind notwendig, um Xtract Universal zu installieren.

{% include _content/de/einfuehrung/produktversion.md %}	

### Setup

Die `XtractUniversalSetup.exe` ist ein branchenübliches Setup. Führen Sie die Datei *XtractUniversalSetup.exe* aus und folgen Sie den Anweisungen des Setups.

Beim Starten des Setups können die optionalen Komponenten (1) für die Installation ausgewählt werden. Bei der Auswahl der Komponenten werden die Optionsdetails im "Description" Feld angezeigt (2). 

![XU-Setup](/img/content/xu/XU_Setup_2.png){:class="img-responsive"}

|Komponente | Subkomponente |Beschreibung |
|:----|:---| :---|
|Main Product Files |- |Installiert alle notwendigen Dateien, die zum Verwenden von Xtract Universal notwendig sind.|
|Designer | -|Installiert die Designer-Anwendung, entfernen Sie die Markierung bei dieser Option, wenn Sie Xtract Universal ohne die grafische Schnittstelle verwenden wollen. |
|Server || Installiert Xtract Universal Server. | 
|<!----> | Install Service |Installiert die Serverkomponente als Windows-Service. Mehr Details im Abschnitt [Server Starten](../server/server-starten) |
| <!---->| Convert config files| Konvertiert Extraktionen, Sources (Quellen), Destinationen usw. vom Format der vorherigen Version in das neue Format. Diese Komponente ist entscheidend bei der Installation von Major Releases und Upgrades von z.B. Version 3.x auf 4.x. |
|Start Menu Shortcuts | Komponente, die dem Startmenü Verknüpfungen hinzufügt.|

{: .box-note }
**Hinweis:** Markieren Sie bei der Installation die Option “Server > Install Service”. Eine Installation des Servers ohne Service dient nur Entwicklungszwecken.

Die Installationsschritte werden im Abschnitt [Lizenz](./lizenz#installieren-von-xtract-universal-lizenz---xtractuniversallicensejson) beschrieben.

### Dateien des Programmverzeichnisses
Die folgende Liste zeigt einige der wichtigsten Dateien, die nach der Installation in das Standardverzeichnis ``C:\Program Files\XtractUniversal`` abgelegt werden:

|Dateiname | Beschreibung |
|:----|:---|
| ABAP Verzeichnis | Verzeichnis mit den SAP-Funktionsbausteinen. Die readme.txt innerhalb des Verzeichnisses beinhaltet weitere Informationen. Mehr Details dazu finden Sie auch in [SAP Customizing](../sap-customizing).|
| Alteryx Verzeichnis| Verzeichnis mit dem Plugin-Setup für die [Alteryx Destination](../destinationen/alteryx-de#voraussetzungen).|
| logs Verzeichnis| Verzeichnis mit Server- und Extraktionsprotokollen etc. Mehr Details dazu finden Sie in [Logging](../logging). |
| config Verzeichnis | Verzeichnis mit allen SAP-Verbindungen, Extraktionen, Destinationen und anderen Einstellungen. Mehr Details dazu finden Sie auch [Backup und Migration](../fortgeschrittene-techniken/backup-und-migration).|
| powerbi Verzeichnis| Verzeichnis mit Dateien, die mit der [Power BI Connector Destination](../destinationen/Power-BI-Connector) in Zusammenhang stehen.|
| result-cache Verzeichnis | Verzeichnis mit Extraktions-Cache-Dateien, anwendbar nur für Pull-Destinationen. Mehr Details dazu finden Sie auch in Abschnitten [Pull-Destinationen](../destinationen#pull--und-push-destinationen) und [Allgemeine Einstellungen: General Settings > Misc. Tab > Cache Result Setting](../erste-schritte/allgemeine-einstellungen#misc-tab).|
| xu.exe | Kommandozeilentool zum Ausführen von Extraktionen. Mehr Details dazu finden Sie auch im Abschnitt [Extraktion einplanen](../extraktionen-ausfuehren-und-einplanen). |
| xu-config.exe | Kommandozeilentool zum Erstellen von Extraktionen. Mehr Details dazu finden im Knowledge Base Artikel [Creating extractions without using the Xtract Universal designer GUI](https://kb.theobald-software.com/xtract-universal/using-config-command-line-tool). |
| XtractCleanup.exe | Anwendung, die alle Ergebnisse im Cache und Log-Dateien entsprechend der [Web Server Einstellungen](../server/server_einstellungen#web-server) von Xtract Universal löscht.|
| XtractDesigner.exe | [Xtract Universal Designer](../erste-schritte/designer-overview) Anwendung zum Erstellen, Testen und Überwachen von Extraktionen.|
| ConfigConverter.exe|  Anwendung, die Extraktionen, Quellen (Sources), Destinationen usw. vom Format der vorherigen Version in das neue Format konvertiert. Diese Anwendung ist entscheidend bei der Installation von Major Releases und Upgrades von z.B. Version 3.x auf 4.x. |
| uninstall.exe| Tool zum Deinstallieren und Entfernen von Xtract Universal mit allen dazugehörigen Komponenten von Ihrer Maschine. |
|XtractUniversalSetup.exe| Setup der aktuell installierten Version. Mehr Details dazu finden Sie auch in [Migration auf eine andere Maschine](../fortgeschrittene-techniken/backup-und-migration#migration-auf-eine-andere-maschine).|
| Eula_XtractUniversal.rtf | Dokument mit der Lizenzvereinbarung zur Nutzung der Software Xtract Universal.|
| XtractUniversalLicense.json | Lizenzdatei mit Server-, Komponenten- und Laufzeitinformationen. |


{: .box-note }
**Hinweis:** Mehr Details zum Starten von Xtract Universal Server als Konsolenprogramm, finden Sie im Knowledge-Base-Artikel [How to use target principal field](https://kb.theobald-software.com/xtract-universal/target-principal-TPN).


### Unbeaufsichtigte Installation 
{% include _content/de/silent-setup.md %}	


### Verwendung des Standalone-Designers

Wenn Sie Xtract Universal aus dem [Kundenportal - My Theobald Software ](https://my.theobald-software.com/) beziehen, haben Sie die Option eine Standalone-Version des Designers für Windows herunterzuladen.
Der Standalone-Designer kann genutzt werden, um sich auf ein zentrales Xtract Universal Repository zu verbinden ohne die Software installiert zu haben.

#### Voraussetzungen
Der Xtract Universal Service muss auf einer zentralen Serverinstanz, z.B. einem firmenweiten Anwendungsserver, installiert sein. <br>
Dadurch ist der Zugriff auf ein gemeinsames Xtract Universal Repository (`C:\Program Files\XtractUniversal\config`) möglich, das von mehreren Xtract Universal Anwendern genutzt werden kann.

#### Den Standalone-Designer starten
Wenn Sie den Standalone-Designer heruntergeladen haben, entpacken Sie die Dateien aus dem `.zip` Ordner in ein beliebiges Verzeichnis.<br>
Der Ordner enthält zwei ausführbare Dateien:<br>
- `XtractDesigner.exe` startet den Designer.
- `xu.exe` ist ein Kommandozeilentool zum Ausführen von Extraktionen siehe [Aufruf via Kommandozeile](../extraktionen-ausfuehren-und-einplanen/call-via-commandline).

Verwenden Sie `XtractDesigner.exe`, um den Designer zu starten. Bevor Sie sich mit einem XU-Server verbinden, stellen Sie sicher, dass Sie Zugriffsrechte auf Server und Repository haben, siehe [Zugriffssteuerung](../sicherheit/zugriffsverwaltung).

{: .box-note }																   
**Hinweis:** Bei einem Softwareupdate laden Sie die aktuelle Version des Standalone-Designers manuell aus dem [Kundenportal - My Theobald Software ](https://my.theobald-software.com/) herunter und ersetzen Sie das bisher verwendete Verzeichnis des Standalone-Designers.

{: .box-note }																   
**Hinweis:** Der Standalone-Designer kann ggf. von Antivirensoftware als 'gefährlich' eingestuft werden. Stellen Sie sicher, dass der Designer nicht von Antivirensoftware blockiert wird.


### Neuinstallation und Update

{: .box-warning}
**Warnung!** **Datenverlust:**
Systemänderungen oder Updates können die Funktionalität der Software einschränken, dabei können Daten verloren gehen. 
Erstellen Sie ein Backup des Verzeichnis: `C:\Program Files\XtractUniversal\config` in regelmäßigen Abständen.

Eine regelmäßige Aktualisierung der Software ist entscheidend für eine stabile Performance, insbesondere bei größeren Änderungen und Updates hoher ([H])-Priorität. 
 Prüfen Sie die [Versionshistorie](https://kb.theobald-software.com/version-history) auf Updates. Eine neuere Version kann über die ältere Version installiert werden. 

Alle Einstellungen und angelegten Objekte bleiben erhalten.
Beim Migrieren von Daten und Einstellungen auf einen anderen Server, folgen Sie den Anweisungen, die im Abschnitt  [Backup und Migration](../fortgeschrittene-techniken/backup-und-migration).

#### Update-Vorbereitung

{: .box-tip }
**Tipp:** Abonnieren Sie per [E-Mail](mailto:news@theobald-software.com) den technischen Newsletter von Theobald Software, der Sie über neue Software Features, Knowledge Base Artikel und Veröffentlichungshinweise (Release Notes) informiert.

1. Prüfen Sie, ob Sie über eine funktionierende Testumgebung mit einer gültigen Lizenz und Wartung verfügen.
2. Stellen Sie sicher, dass die Testumgebung eine Kopie der aktuellen Produktivumgebung ist.
3. Prüfen Sie die [Versionshistorie](https://kb.theobald-software.com/version-history) und die Veröffentlichungshinweise (Release Notes) in der Knowledge-Base, um eine Update-Notwendigkeit auszuschließen. 
4. Erstellen Sie ein [Backup](../fortgeschrittene-techniken/backup-und-migration) der aktuellen Installation.
5. Führen Sie alle notwendigen Vorbereitungen und Änderungen durch, die in den Veröffentlichungshinweisen (Release Notes) / Versionshistorie  beschrieben sind. Bei größeren Änderungen verwenden Sie den ConfigConverter.

{: .box-note }																   
**Hinweis:** Wenn Sie Ihre Testumgebung aktualisieren und einzelne `config` Ordner aus der Produktionsumgebung in die Testumgebung kopieren, stellen Sie sicher, dass Sie die `version.txt` Datei mit kopieren.
Die `version.txt` Datei befindet sich im `config` Ordner.

### Aktualisieren von Hauptversionen (Major Releases) - ConfigConverter

Es gibt zwei Möglichkeiten Produktversion zu aktualisieren:
- Upgrade während der Installation
- Manuelles Upgrade


#### Upgrade während der Installation
1. Starten Sie das Xtract Universal Setup.
2. Markieren Sie die Checkbox **Convert config files**. <br>
Die Option *Convert config files* startet die *ConfigConverter*-Anwendung, die sicherstellt, dass alle Extraktionen, Quellsysteme (Source Systems), 
Destinationen sowie Server- und Benutzereinstellungen in der neuen Version verfügbar sind. <br> 
![XU-Setup](/img/content/xu/XU_Setup_2.png){:class="img-responsive"}
3. Bestätigen Sie den Konvertierungsprozess im Pop-up-Fenster der Kommandozeile.
![XU3_Migration_2](/img/content/XU3_Migration_2.png){:class="img-responsive"}

{:.box-note}
**Hinweis:** Wenn der *ConfigConverter* ausgeführt wird, wird automatisch ein Backup-Ordner im Installationsverzeichnis erstellt, z.B. `C:\Program Files\XtractUniversal\backup-[alte Versionsnummer]`.
Diese Ordner enthält die Extraktionen, die vom *ConfigConverter* geändert wurden.

#### Manuelles Upgrade
Wird der *ConfigConverter* nicht automatisch bei der Installation ausgeführt, kann dieser auch nachträglich manuell aus dem Installationsverzeichnis `C:\Program Files\XtractUniversal` gestartet werden. <br>

![XU3_Migration_3](/img/content/XU3_Migration_3.png){:class="img-responsive"}

{:.box-note}
**Hinweis:** Alle Probleme, die während des Konvertierungsprozesses auftreten können, werden im Befehlszeilenfenster angezeigt. Kopieren Sie den Befehlszeilenkontext und senden Sie ihn bei Bedarf an das Support-Team.   

****
#### Weiterführende Links
- [Backup und Migration](../fortgeschrittene-techniken/backup-und-migration)
