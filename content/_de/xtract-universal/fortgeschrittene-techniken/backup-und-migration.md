---
ref: xu-advanced-techniques-12
layout: page
title: Backup und Migration
description: Backup und Migratio
product: xtract-universal
parent: fortgeschrittene-techniken
permalink: /:collection/:path
weight: 12
lang: de_DE
progressstate: 5
---

### Versionskontrolle

Eine Versionskontrolle kann verwendet werde, um den Datentransfer zwischen Test- und Produktivumgebung zu überwachen.<br>
Git oder Azure DevOps sind Systeme zur Versionskontrolle, die sicherstellen dass:
- der Einsatz neuer Extraktionen, Quellen und Destinationen **keinen** Schaden in der Produktivumgebung anrichten können.
- Änderungen durch Benutzerrechte und andere Funktionen im Vorfeld geprüft werden können.
- Änderungen schnell und einfach rückgängig gemacht werden können.

Für mehr Informationen zum Einrichten einer Versionskontrolle mit Xtract Universal, siehe [Knowledge Base Artikel: Deploying Extractions Using Git Version Control](https://kb.theobald-software.com/xtract-universal/deploying-extractions-using-Git-version-control).

### Konfigurationsdateien 
Alle Einstellungen für Extraktionen, Quellen (Sources), Destinationen usw. werden im Unterverzeichnis `config` gespeichert (`C:\Program Files\XtractUniversal\config`).
Verwenden Sie das `config` Verzeichnis für [Versionskontrolle](#versionskontrolle) oder [manuelle Backups](#manuelles-backup).

|Dateiname | Beschreibung |
|:----|:---|
|`destinationen`| Verzeichnis mit den [Destinationen](../destinationen). Jede `.json`-Datei enthält eine gleichnamige Destination.|
| `extractions` | Verzeichnis mit den [Extraktionen](../erste-schritte/eine-neue-extraktion-anlegen). Jedes Unterverzeichnis enthält eine gleichnamige Extraktion. |
|`servers`  | Verzeichnis mit den [Servereinstellungen](../server/server_einstellungen).|
| `sources` | Verzeichnis mit den [SAP-Verbindungen](../einfuehrung/sap-verbindungen-anlegen). Jedes Unterverzeichnis enthält eine gleichnamige Quelle (Source). |
| `version.txt` | Textdatei mit der Versionsnummer, die mit der aktuellen Konfiguration übereinstimmt. Mehr Details dazu finden Sie auch im Abschnitt [Neuinstallation und Update](../einfuehrung/installation-und-update#neuinstallation-und-update).|


### Manuelles Backup

{: .box-tip }
**Empfehlung:** Erstellen Sie *regelmäßige* Backups der Konfigurationsdateien, um die Arbeit sichern, die Sie in das Design und die Optimierung Ihrer Datenextraktionsprozesse investieren.

Bevor Sie eine neue Produktversion installieren oder die aktuelle Version aktualisieren, stellen Sie sicher, dass Sie ein Backup erstellen. 
Falls erforderlich, ermöglicht das Backup es Ihnen leicht zur vorherigen Produktversion zurück zu wechseln. 
Mehr Details dazu finden Sie auch im Abschnitt [Installation und Update](../einfuehrung/installation-und-update).

#### Wie erstelle ich ein Backup?
Kopieren Sie das komplette `config`-Verzeichnis, der Maschine auf der der Xtract Universal Service läuft:  `C:\Program Files\XtractUniversal\config` (standardmäßig). 
Optional, können Sie auch das komplette`logs`-Verzeichnis (`C:\Program Files\XtractUniversal\logs` standardmäßig) kopieren, um ein Backup der Log-Dateien zu erstellen.

{: .box-warning }
**Warnung! Datensicherheit.** <br>
Sowohl `config`- als auch `logs`-Verzeichnisse können sensible Informationen enthalten.


#### Wiederherstellen des Backups

1. Um die Konfigurationsdateien wiederherzustellen, entfernen Sie das Konfigurationsverzeichnis (`config`) aus dem Programmverzeichnis (`C:\Program Files\XtractUniversal` standardmäßig) der Maschine, auf der der Xtract Universal Service läuft.
2. Kopieren Sie das Backup des Konfigurationsverzeichnisses in das Programmverzeichnis.
3. Um die Lizenz wiederherzustellen, ersetzen Sie die Datei XtractUniversalLicense.json innerhalb des Programmverzeichnisses durch das Backup.

{: .box-warning } 
**Warnung!Datenverlust!** <br>
Das Wiederherstellen des Backups des Konfigurationsverzeichnisses (`config`) ersetzt die bestehende Konfiguration. Stellen Sie sicher, dass Sie die vorhandenen Dateien entfernen, bevor Sie die Backups wiederherstellen.

### Manuelle Migration auf eine andere Maschine
Konfigurationsdateien können teilweise oder vollständig migriert werden.

Je nach Szenario kann es sinnvoll sein, eine Teilmigration durchzuführen - z.B. wenn Sie Extraktionen von einer Test- in eine Produktivumgebung transportieren.<br>
Wenn Sie eine Maschine vollständig ersetzen, führen Sie eine vollständige Migration durch.

{: .box-note }																   
**Hinweis:** Wenn Sie Ihre Testumgebung aktualisieren und einzelne `config` Ordner aus der Produktionsumgebung in die Testumgebung kopieren, stellen Sie sicher, dass Sie die `version.txt` Datei mit kopieren.
Die `version.txt` Datei befindet sich im `config` Ordner.


**Voraussetzung**: Die Xtract Universal Versionen stimmen auf beiden Maschinen überein. <br>
Installieren Sie die `XtractUniversalSetup.exe` aus dem Xtract Universal Installationsverzeichnis (`C:\Program Files\XtractUniversal`) der aktuellen Maschine auf der anderen Maschine, um zu gewährleisten, dass die Versionen übereinstimmen.
Um die Version Ihres Produkts zu überprüfen, öffnen Sie den Designer und navigieren Sie zu **Help > Info** oder drücken Sie **[F12]**.

1. Erstellen Sie ein Backup des `config`-Verzeichnisses der aktuellen Maschine.
2. Entscheiden Sie, ob Sie eine teilweise oder eine vollständige Migration benötigen. <br> 
Für eine vollständige Migration können Sie das gesamte `config`-Verzeichnis auf der anderen Maschine wiederherstellen.
Sie können alternativ Teile des Backups wiederherstellen, indem Sie z.B. nur die Destinations- oder Extractions-Verzeichnisse kopieren.
3. Starten Sie den [Xtract Universal Service](../server/server-starten) neu, wenn Sie eine vollständige Migration durchführen oder das Verzeichnis `server` auf die andere Maschine kopieren.

{: .box-note }
**Hinweis**: Da Xtract Universal-Lizenzen servergebunden sind, brauchen Sie bei einem Umzug auf einen neuen Server auch eine neue Lizenz.
Kontaktieren Sie dafür unseren Vertrieb unter [sales@theobald-software.com](mailto:sales@theobald-software.com).

****
#### Weiterführende Links
- [Installation und Update](../einfuehrung/installation-und-update)
- [Versionshistorie](https://kb.theobald-software.com/version-history/xtract-universal-version-history)
