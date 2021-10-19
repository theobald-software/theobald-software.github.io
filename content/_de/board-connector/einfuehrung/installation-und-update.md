---
ref: bc-introduction-03
layout: page
title: Installation und Update
description: Installation und Update
product: board-connector
parent: einfuehrung
permalink: /:collection/:path
weight: 3
lang: de_DE
progressstate: 5
---
### Voraussetzungen

{: .box-note }
**Hinweis:** Administratorberechtigungen sind notwendig, um BOARD Connector zu installieren.

{% include _content/de/einfuehrung/produktversion.md %}	

### Setup

Die `BOARD ConnectorSetup.exe` ist ein branchenübliches Setup.  Führen Sie die Datei *BOARD ConnectorSetup.exe* aus und folgen Sie den Anweisungen des Setups.

Beim Starten des Setups können die optionalen Komponenten (1) für die Installation ausgewählt werden. Bei der Auswahl der Komponenten werden die Optionsdetails im "Description" Feld angezeigt (2). 

![BC-Setup](/img/content/board/BC_Setup_2.png){:class="img-responsive"}

|Komponente | Subkomponente |Beschreibung |
|:----|:---| :---|
|Main Product Files |- |Installiert alle notwendigen Dateien, die zum Verwenden von BOARD Connector notwendig sind.|
|Designer | -|Installiert die Designer-Anwendung, entfernen Sie die Markierung bei dieser Option, wenn Sie BOARD Connector ohne die grafische Schnittstelle verwenden wollen. |
|Server | Installiert BOARD Connector Server. | 
|<!----> | Install Service |Installiert die Serverkomponente als Windows-Service. Mehr Details im Abschnitt [Server Starten](../server/server-starten) |
| <!---->| Convert config files| Konvertiert Extraktionen, Sources (Quellen), Destinationen usw. vom Format der vorherigen Version in das neue Format. Diese Komponente ist entscheidend bei der Installation von Major Releases und Upgrades von z.B. Version 3.x auf 4.x. |
|Start Menu Shortcuts | Komponente, die dem Startmenü Verknüpfungen hinzufügt.|

Die Installationsschritte werden im Abschnitt [Lizenz](./lizenz) beschrieben.

### Dateien des Installationsordners
Die folgende Liste zeigt einige der wichtigsten Dateien, die nach der Installation in das Standardverzeichnis ``C:\Program Files\BOARDConnector`` abgelegt werden:

|Dateiname | Beschreibung |
|:----|:---|
| ABAP Ordner | Ordner mit eigenentwickelten Z-Funktionsbausteinen (.txt) und den dazugehörigen Transportaufträgen (.zip).|
| logs Ordner| Ordner mit Server- und Extraktionsprotokollen etc. Siehe auch Abschnitt [Logging](../logging). |
| config Ordner | Ordner, der bei der ersten Extraktion automatisch erstellt wird und alle Extraktionen und die entsprechenden Protokolldateien enthält. <!-----Siehe auch Abschnitt [Backup](#backup). ----> |
| result-cache Ordner | Ordner mit Extraktions-Cache-Dateien.  |
| BCDesigner.exe | Anwendung zum Starten von BOARD Connector Designer, der das Erstellen, Testen und Überwachen von Extraktionen ermöglicht.|
| BCService.exe | Anwendung, die den BOARD Connector Server als einen Windows Service startet.  Diese Anwendung startet in der Regel automatisch und läuft im Hintergrund. |
| BCApiServer.exe| Unverschlüsselter WCF-Service zum Abrufen von Metadaten durch den Designer.  |
| Theobald.Bc.Web.Listener.exe| Theobald.Bc.Web.Listener.exe ein Listener-Prozess, der auf HTTP-Anfragen wartet. |
| Theobald.Bc.Web.Worker.exe| Für jede TCP-Verbindung startet die Theobald.Bc.Web.Listener.exe eine neue Instanz von Theobald.Bc.Web.Worker.exe, die alle über die TCP-Verbindung eingehenden HTTP-Requests abarbeitet. |
| BCCleanup.exe| Anwendung, die die alten Server-Logs aufräumt, wie in den [Server-Einstellungen](../server/server_einstellungen) definiert. |
| ConfigConverter.exe|  Anwendung, die Extraktionen, Sources (Quellen) usw. vom Format der vorherigen Version in das neue Format konvertiert. Diese Anwendung ist entscheidend bei der Installation von Hauptversionen (Major Releases) und Upgrades von z.B. Version 3.x auf 4.x. |
| uninstall.exe| Tool zum Deinstallieren und Entfernen von BOARD Connector mit allen dazugehörigen Komponenten von Ihrem Rechner. |
| BOARDConnectorSetup.exe| Setup der aktuell installierten Version. Mehr Details dazu finden Sie auch in [Migration auf eine andere Maschine](../fortgeschrittene-techniken/backup-und-migration#migration-auf-eine-andere-maschine).|
| Eula_BOARD Connector.rtf | Dokument mit der Lizenzvereinbarung zur Nutzung der Software BOARD Connector.|
| BOARD ConnectorLicense.json |  Lizenzdatei mit Server-, Komponenten- und Laufzeitinformationen. |


{: .box-note }
**Hinweis:** Der BOARD Connector Server kann zu Testzwecken als Konsolenprogramm gestartet werden. 
Mehr Details zum Starten von BOARD Connector Server als Konsolenprogramm, finden Sie im Knowledgebase-Artikel [How to use target principal field](https://kb.theobald-software.com/xtract-universal/target-principal-TPN) (Am Beispiel von Xtract Universal).

### Unbeaufsichtigte Installation 
{% include _content/de/silent-setup.md %}	

### Neuinstallation und Update

{: .box-warning}
**Warnung! Datenverlust:** <br>
Systemänderungen oder Updates können die Funktionalität der Software einschränken, dabei können Daten verloren gehen.
Führen Sie ein Backup des Ordners: `C:\Program Files\BOARDConnector\config` in regelmäßigen Abständen durch. 

Eine regelmäßige Aktualisierung der Software ist entscheidend für eine stabile Performance, insbesondere bei größeren Änderungen und Updates hoher ([H])-Priorität. 
 Prüfen Sie die [Versionshistorie](https://kb.theobald-software.com/version-history) auf Updates. Eine neuere Version kann über die ältere Version installiert werden. 

Alle Einstellungen und angelegten Objekte bleiben erhalten.
Beim Migrieren von Daten und Einstellungen auf einen anderen Server, folgen Sie den Anweisungen, die im Abschnitt  [Backup und Migration](../fortgeschrittene-techniken/backup-und-migration).

#### Update-Vorbereitung

{: .box-tip }
**Tipp:** Abonnieren Sie per [E-Mail](mailto:info@theobald-software.com) den regelmäßig erscheinenden Newsletter von Theobald Software, der Sie über Änderungen in der Versionshistorie und Veröffentlichungshinweise (Release Notes) informiert.

1. Prüfen Sie, ob Sie über eine funktionierende Testumgebung mit einer gültigen Lizenz und Wartung verfügen.
2. Stellen Sie sicher, dass die Testumgebung eine Kopie der aktuellen Produktivumgebung ist.
3. Prüfen Sie die [Versionshistorie](https://kb.theobald-software.com/version-history) und die Veröffentlichungshinweise (Release Notes) in der Knowledge-Base, um eine Update-Notwendigkeit auszuschließen. 

4. Erstellen Sie ein [Backup](../fortgeschrittene-techniken/backup-und-migration) der aktuellen Installation.
5. Führen Sie alle notwendigen Vorbereitungen und Änderungen durch, die in den Veröffentlichungshinweisen (Release Notes) / Versionshistorie  beschrieben sind. Bei größeren Änderungen verwenden Sie den ConfigConverter.

### Aktualisieren von Hauptversionen (Major Releases) - ConfigConverter

Es gibt zwei Möglichkeiten, die Produktversion von BC 2.x und 3.x auf BC 4.x zu aktualisieren:
- Upgrade während der Installation
- Manuelles Upgrade


### Upgrade während der Installation
1. Starten Sie das BOARD Connector Setup.
2. Markieren Sie die Checkbox **Convert config files**. <br>
Die Option *Convert config files* startet die *ConfigConverter*-Anwendung, die sicherstellt, dass alle Extraktionen, Quellsysteme (Source Systems), Destinationen sowie Server- und Benutzereinstellungen von XU 2.x oder 3.x in der neuen Version verfügbar sind. <br> 
![BC-Setup](/img/content/board/BC_Setup_2.png){:class="img-responsive"}
3. Bestätigen Sie den Konvertierungsprozess im Pop-up-Fenster der Kommandozeile.
![BC3_Migration_2.png](/img/content/board/BC_Migration_3.png){:class="img-responsive"}


### Manuelles Upgrade
Wird der *ConfigConverter* nicht automatisch bei der Installation ausgeführt, kann dieser auch nachträglich manuell aus dem Installationsverzeichnis ``C:\Program Files\BOARDConnector gestartet werden.C:\Program Files\BOARDConnector``. <br>

![XU3_Migration_3](/img/content/XU3_Migration_3.png){:class="img-responsive"}

{:.box-note}
**Hinweis:** Alle Probleme, die während des Konvertierungsprozesses auftreten können, werden im Befehlszeilenfenster angezeigt. Kopieren Sie den Befehlszeilenkontext und senden Sie ihn bei Bedarf an das Support-Team.   

****
#### Weiterführende Links
- [Backup und Migration](../fortgeschrittene-techniken/backup-und-migration)