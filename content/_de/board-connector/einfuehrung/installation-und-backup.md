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

### Installationsroutine

Das Installationsprogramm *BoardConnectorSetup.exe* ist eine branchenübliche Installationsroutine.  Führen Sie die Datei *BoardConnectorSetup.exe* aus und folgen Sie den Anweisungen des Installationsprogramms.

Beim Starten des Installationsprogramms können die optionalen Komponenten (1) für die Installation ausgewählt werden. Bei der Auswahl der Komponenten werden die Optionsdetails im "Description" Feld angezeigt (2). 

![BC-Setup](/img/content/board/BC_Setup_2.png){:class="img-responsive"}

|Komponente | Beschreibung |
|:----|:---|
|Main Program Files | Standardeinstellung der Installationsroutine |
|Start Menu Shortcut | Komponente, die dem Startmenü Verknüpfungen hinzufügt |
|Convert Config files | Konvertiert Extraktionen, Sources (Quellen) usw. vom Format der vorherigen Version in das neue Format. Diese Anwendung ist entscheidend bei der Installation von Hauptversionen (Major Releases) und Upgrades von z.B. Version 3.x auf 4.x.
Install Service | Installiert die Serverkomponente als Windows-Service und bootet den Service automatisch. Mehr Details im Abschnitt [Architektur](./architektur).

Die Installationsschritte werden im Abschnitt [Lizenz](./lizenz) beschrieben.

#### Dateien des Installationsordners
Die folgende Liste zeigt einige der wichtigsten Dateien, die nach der Installation in das Standardverzeichnis ``C:\Program Files\BoardConnector`` abgelegt werden:

|Dateiname | Beschreibung |
|:----|:---|
| ABAP Ordner | Ordner mit eigenentwickelten Z-Funktionsbausteinen (.txt) und den dazugehörigen Transportaufträgen (.zip).|
| logs Ordner| Ordner mit Server- und Extraktionsprotokollen etc. Siehe auch Abschnitt [Logging](../logging). |
| config Ordner | Ordner, der bei der ersten Extraktion automatisch erstellt wird und alle Extraktionen und die entsprechenden Protokolldateien enthält. Siehe auch Abschnitt [Backup](#backup). |
| result-cache Ordner | Ordner mit Extraktions-Cache-Dateien.  |
| BCDesigner.exe | Anwendung zum Starten von BOARD Connector Designer, der das Erstellen, Testen und Überwachen von Extraktionen ermöglicht.|
| BCService.exe | Anwendung, die den BOARD Connector Server als einen Windows Service startet.  Diese Anwendung startet in der Regel automatisch und läuft im Hintergrund. |
| ConfigConverter.exe|  Anwendung, die Extraktionen, Sources (Quellen) usw. vom Format der vorherigen Version in das neue Format konvertiert. Diese Anwendung ist entscheidend bei der Installation von Hauptversionen (Major Releases) und Upgrades von z.B. Version 3.x auf 4.x. |
| uninstall.exe| Tool zum Deinstallieren und Entfernen von BOARD Connector mit allen dazugehörigen Komponenten von Ihrem Rechner. |
| Eula_BOARDConnector.rtf | Dokument mit der Lizenzvereinbarung zur Nutzung der Software BOARD Connector.|
| BOARDConnectorLicense.json |  Lizenzdatei mit Server-, Komponenten- und Laufzeitinformationen. |


{: .box-note }
**Hinweis:** Der BOARD Connector Server kann zu Testzwecken als Konsolenprogramm gestartet werden. 

Mehr Details zum Starten von Xtract Universal Server als Konsolenprogramm, finden Sie im Abschnitt [Fehlerbehandlung](./fehlerbehandlung) und im Knowledgebase-Artikel [How to use target principal field](https://kb.theobald-software.com/xtract-universal/target-principal-TPN) (Am Beispiel von Xtract Universal).


### Backup

Bevor Sie eine neue Produktversion installieren oder die aktuelle Version aktualisieren, stellen Sie sicher, dass Sie ein Backup erstellen. 
Mit einem Backup können Sie bei Bedarf einfach auf die vorherige Version von BOARD Connector zurückwechseln. Mehr Details dazu finden Sie im Abschnitt [Installation eines Updates](update#wie-erstelle-ich-ein-backup).


{: .box-warning}
**Warnung! Datenverlust:** <br>
Systemänderungen oder Updates können die Funktionalität der Software einschränken, dabei können Daten verloren gehen.
Führen Sie ein Backup des Ordners: `C:\Program Files\BoardConnector\config` in regelmäßigen Abständen durch. 

Alle Einstellungen zu Extraktionen, Sources etc. werden im Unterverzeichnis *config* gespeichert. 

### Neuinstallation und Update

Eine neuere Version kann über die ältere Version installiert werden. Alle Einstellungen und angelegten Objekte bleiben erhalten. Mehr Informationen finden Sie im Abschnitt [Installation eines Updates](./update).


### Versionshistorie
Eine Liste der aktuellen Versionen finden Sie in der [Versionshistorie](https://kb.theobald-software.com/version-history/board-connector-version-history).
Um die Version Ihres Produkts zu überprüfen, öffnen Sie den Designer, navigieren Sie zu **Help > Version History** oder drücken Sie **[F12]**.
