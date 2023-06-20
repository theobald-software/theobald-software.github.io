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

Eine Versionskontrolle kann verwendet werden, um den Datentransfer zwischen Test- und Produktivumgebung zu überwachen.<br>
Git oder Azure DevOps sind Systeme zur Versionskontrolle, die sicherstellen dass:
- der Einsatz neuer Extraktionen, Quellen und Destinationen **keinen** Schaden in der Produktivumgebung anrichten können.
- Änderungen durch Benutzerrechte und andere Funktionen im Vorfeld geprüft werden können.
- Änderungen schnell und einfach rückgängig gemacht werden können.

Mehr Informationen zum Einrichten einer Versionskontrolle mit Xtract Universal finden Sie im Knowledge Base Artikel [Deploying Extractions Using Git Version Control](https://kb.theobald-software.com/xtract-universal/deploying-extractions-using-Git-version-control).

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

#### Erstellen eines Backups
1. Kopieren Sie das komplette `config`-Verzeichnis der Maschine auf der der Xtract Universal Service läuft. Das Standardverzeichnis des `config` Ordners ist `C:\Program Files\XtractUniversal\config`. 
2. Optional: kopieren Sie das `logs`-Verzeichnis (`C:\Program Files\XtractUniversal\logs`), um ein Backup der Log-Dateien zu erstellen.
3. Um ein Backup Ihrer Lizenz zu erstellen, kopieren Sie die Datei `XtractUniversalLicense.json`.

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
Konfigurationsdateien können teilweise oder vollständig migriert werden.<br>
Je nach Szenario kann es sinnvoll sein, eine Teilmigration durchzuführen - z.B. wenn Sie Extraktionen von einer Test- in eine Produktivumgebung transportieren.<br>
Wenn Sie eine Maschine vollständig ersetzen, führen Sie eine vollständige Migration durch.

{: .box-note }
**Hinweis**: Da Xtract Universal-Lizenzen servergebunden sind, brauchen Sie bei einem Umzug auf einen neuen Server auch eine neue Lizenz.
Kontaktieren Sie dafür unseren Vertrieb unter [sales@theobald-software.com](mailto:sales@theobald-software.com).

#### Voraussetzung <br>
Die Xtract Universal Versionen müssen auf beiden Maschinen übereinstimmen. <br>
Installieren Sie die `XtractUniversalSetup.exe` aus dem Xtract Universal Installationsverzeichnis (`C:\Program Files\XtractUniversal`) der aktuellen Maschine auf der anderen Maschine, um zu gewährleisten, dass die Versionen übereinstimmen.
Um die Version Ihres Produkts zu überprüfen, öffnen Sie den Designer und navigieren Sie zu **Help > Info** oder drücken Sie **[F12]**.

#### Migration
1. Erstellen Sie ein Backup des `config`-Verzeichnisses der aktuellen Maschine. Das Standardverzeichnis des `config` Ordners ist `C:\Program Files\XtractUniversal\config`.
2. Entscheiden Sie, ob Sie eine teilweise oder eine vollständige Migration benötigen. <br> 
Für eine vollständige Migration können Sie das gesamte `config`-Verzeichnis auf der anderen Maschine wiederherstellen.<br>
Für eine teilweise Migration können Sie Teile des Backups wiederherstellen, indem Sie nur Unterordner von `config` kopieren, z.B. nur die Destinations- oder Extraktions-Verzeichnisse.
Wenn Sie einzelne `config` Ordner kopieren, müssen Sie die `version.txt` Datei mit kopieren.
Die `version.txt` Datei befindet sich im `config` Ordner.
3. Starten Sie den [Xtract Universal Service](../server/server-starten) neu, wenn Sie eine vollständige Migration durchführen oder das Verzeichnis `server` auf die andere Maschine kopieren.

{: .box-note }
**Hinweis:** Ab Xtract Universal Version 5.0 werden SAP Passwörter anhand eines Schlüssels verschlüsselt, der von dem Windows Service-Account abgeleitet wird, unter dem der Xtract Universal Service läuft.
Auf die Passwörter kann man nur von diesem Service-Account aus zugreifen. Achten Sie darauf, wenn Sie Backups aufspielen oder Dateien auf eine andere Maschine verschieben.
Wenn Sie das Service-Account wechseln, müssen Sie Passwörter manuell neu eingeben.

****
#### Weiterführende Links
- [Installation und Update](../einfuehrung/installation-und-update)
- [Versionshistorie](https://kb.theobald-software.com/version-history/xtract-universal-version-history)
