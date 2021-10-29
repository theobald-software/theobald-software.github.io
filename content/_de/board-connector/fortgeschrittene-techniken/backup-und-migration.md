---
ref: bc-advanced-techniques-12
layout: page
title: Backup und Migration
description: Backup und Migratio
product: board-connector
parent: fortgeschrittene-techniken
permalink: /:collection/:path
weight: 12
lang: de_DE
progressstate: 5
---


### Backup

{: .box-tip }
**Empfehlung:** Erstellen Sie *regelmäßige* Backups der Konfigurationsdateien, um die Arbeit sichern, die Sie in das Design und die Optimierung Ihrer Datenextraktionsprozesse investieren.

Bevor Sie eine neue Produktversion installieren oder die aktuelle Version aktualisieren, stellen Sie sicher, dass Sie ein Backup erstellen. 
Falls erforderlich, ermöglicht das Backup es Ihnen leicht zur vorherigen Produktversion zurück zu wechseln. 
Mehr Details dazu finden Sie auch im Abschnitt [Installation und Update](../einfuehrung/installation-und-update).

### Konfigurationsdateien 
Alle Einstellungen für Extraktionen, Quellen (Sources) usw. werden im Unterverzeichnis `config` gespeichert.  
Standardmäßig: `C:\Program Files\BOARDConnector\config`.

|Dateiname | Beschreibung |
|:----|:---|
| `extractions` | Verzeichnis mit den [Extraktionen](../erste-schritte/eine-neue-extraktion-anlegen). Jedes Unterverzeichnis enthält eine gleichnamige Extraktion. |
|`server`  | Verzeichnis mit den [Servereinstellungen](../server/server_einstellungen).|
| `sources` | Verzeichnis mit den [SAP-Verbindungen](../einfuehrung/sap-verbindungen-anlegen). Jedes Unterverzeichnis enthält eine gleichnamige Quelle (Source). |
| `version.txt` | Textdatei mit der Versionsnummer, die mit der aktuellen Konfiguration übereinstimmt. Mehr Details dazu finden Sie auch im Abschnitt [Neuinstallation und Update](../einfuehrung/installation-und-update#neuinstallation-und-update).|

### Wie erstelle ich ein Backup?
Kopieren Sie das komplette `config`-Verzeichnis, der Maschine auf der der BOARD Connector Service läuft: `C:\Program Files\BOARDConnector\config` (standardmäßig). 
Optional, können Sie auch das komplette`logs`-Verzeichnis (`C:\Program Files\BOARDConnector\logs` standardmäßig) kopieren, um ein Backup der Log-Dateien zu erstellen.

{: .box-warning }
**Warnung! Datensicherheit.** <br>
Sowohl `config`- als auch `logs`-Verzeichnisse können sensible Informationen enthalten.


### Wiederherstellen des Backups

{: .box-warning }
**Warnung! Datenverlust!** <br>
Das Wiederherstellen des Backups des Konfigurationsverzeichnisses (`config`) ersetzt die bestehende Konfiguration. Stellen Sie sicher, dass Sie die vorhandenen Dateien entfernen, bevor Sie die Backups wiederherstellen.

1. Um die Konfigurationsdateien wiederherzustellen, entfernen Sie das Konfigurationsverzeichnis (`config`) aus dem Programmverzeichnis (`C:\Program Files\BOARDConnector` standardmäßig) der Maschine, auf der der BOARD Connector Service läuft.
2. Kopieren Sie das Backup des Konfigurationsverzeichnisses in das Programmverzeichnis.
3. Um die Lizenz wiederherzustellen, ersetzen Sie die Datei BOARD ConnectorLicense.json innerhalb des Programmverzeichnisses durch das Backup.


### Migration auf eine andere Maschine
Konfigurationsdateien können teilweise oder vollständig migriert werden.

Je nach Szenario kann es sinnvoll sein, eine Teilmigration durchzuführen - z.B. wenn Sie Extraktionen von einer Test- in eine Produktivumgebung transportieren.

Wenn Sie eine Maschine vollständig ersetzen, führen Sie eine vollständige Migration durch.

**Voraussetzung**: Die BOARD Connector Versionen stimmen auf beiden Maschinen überein.

{: .box-tip }
**Tipp**: Um die Version Ihres Produkts zu überprüfen, öffnen Sie den Designer und navigieren Sie zu **Help > Info** oder drücken Sie **[F12]**.

{: .box-tip }
**Tipp:** Wenn Ihre aktuelle Version nicht die neueste Version von BOARD Connector ist, installieren Sie die passende Version `BOARD ConnectorSetup.exe` aus dem BOARD Connector Verzeichnis: `C:\Program Files\BOARDConnector` (standardmäßig) auf der anderen Maschine.


1. Erstellen Sie ein Backup des `config`-Verzeichnisses der aktuellen Maschine.
2. Entscheiden Sie, ob Sie eine teilweise oder eine vollständige Migration benötigen. <br> 
Für eine vollständige Migration können Sie das gesamte `config`-Verzeichnis auf der anderen Maschine wiederherstellen.
Sie können alternativ Teile des Backups wiederherstellen, indem Sie z.B. nur die Extractions-Verzeichnisse kopieren.
3. Starten Sie den [BOARD Connector Service](../server/server-starten) neu, wenn Sie eine vollständige Migration durchführen oder das Verzeichnis `server` auf die andere Maschine kopieren.

{: .box-note }
**Hinweis**: Da BOARD Connector-Lizenzen servergebunden sind, brauchen Sie bei einem Umzug auf einen neuen Server auch eine neue Lizenz.
Kontaktieren Sie dafür unseren [Vertrieb](mailto:sales@theobald-software.com).

****
#### Weiterführende Links
- [Installation und Update](../einfuehrung/installation-und-update)
- [Versionshistorie](https://kb.theobald-software.com/version-history/xtract-universal-version-history)
