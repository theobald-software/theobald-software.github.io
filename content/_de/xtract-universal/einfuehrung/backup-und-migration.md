---
ref: xu-introduction-04
layout: page
title: Backup und Migration
description: Backup und Migratio
product: xtract-universal
parent: einfuehrung
permalink: /:collection/:path
weight: 4
lang: de_DE
progressstate: 5
---


### Backup

{: .box-tip }
**Empfehlung:** Erstellen Sie *regelmäßige* Backups der Konfigurationsdateien, um die Arbeit sichern, die Sie in das Design und die Optimierung Ihrer Datenextraktionsprozesse investieren.

Bevor Sie eine neue Produktversion installieren oder die aktuelle Version aktualisieren, stellen Sie sicher, dass Sie ein Backup erstellen. 
Falls erforderlich, ermöglicht das Backup es Ihnen leicht zur vorherigen Produktversion zurück zu wechseln. 
Mehr Details dazu finden Sie auch im Abschnitt [Installation und
Update](./installation-und-update).

### Konfigurationsdateien 
Alle Einstellungen für Extraktionen, Quellen (Sources), Destinationen usw. werden im Unterverzeichnis `config` gespeichert.  
Standardmäßig: `C:\Program Files\XtractUniversal\config`.

|Dateiname | Beschreibung |
|:----|:---|
|`destinations`| Verzeichnis mit den [Destinationen](../xu-destinationen). Jede `.json`-Datei enthält eine gleichnamige Destination.|
| `extractions` | Verzeichnis mit den [Extraktionen](../erste-schritte-mit-xu/eine-neue-extraktion-anlegen). Jedes Unterverzeichnis enthält eine gleichnamige Extraktion. |
|`server`  | Verzeichnis mit den [Servereinstellungen](../server/server_einstellungen).|
| `sources` | Verzeichnis mit den[SAP-Verbindungen](./sap-verbindungen-anlegen). Jedes Unterverzeichnis enthält eine gleichnamige Quelle (Source). |
| `version.txt` | Textdatei mit der Versionsnummer, die mit der aktuellen Konfiguration übereinstimmt. Mehr Details dazu finden Sie auch im Abschnitt [New Installation and Update](./installation-und-update#neuinstallation-und-update).|

### Wie erstelle ich ein Backup?
Kopieren Sie das komplette `config`-Verzeichnis, der Maschine auf der der Xtract Universal Service läuft:  `C:\Program Files\XtractUniversal\config` (standardmäßig). 
Optional, können Sie auch das komplette`logs`-Verzeichnis (`C:\Program Files\XtractUniversal\logs` standardmäßig) kopieren, um ein Backup der Log-Dateien zu erstellen.

{: .box-warning }
**Warnung!** <br>
**Datensicherheit**. Sowohl `config`- als auch `logs`-Verzeichnisse können sensible Informationen enthalten.


### Migration auf eine andere Maschine
Konfigurationsdateien können teilweise oder vollständig migriert werden.

**Voraussetzung**: Die Xtract Universal Versionen stimmen auf beiden Maschinen überein.

{: .box-tip }
**Tipp**: Um die Version Ihres Produkts zu überprüfen, öffnen Sie den Designer und navigieren Sie zu **Help > Info** oder drücken Sie **[F12]**.

{: .box-note }
**Hinweis:** Wenn Ihre aktuelle Version nicht die neueste Version von Xtract Universal ist, installieren Sie die passende Version `XtractUniversalSetup.exe` aus dem Xtract Universal Verzeichnis: `C:\Program Files\XtractUniversal` (standardmäßig) auf der anderen Maschine.


1. Erstellen Sie ein Backup des `config`-Verzeichnisses der aktuellen Maschine.
2. Entscheiden Sie, ob Sie eine teilweise oder eine vollständige Migration benötigen. <br> 
Für eine vollständige Migration können Sie das gesamte `config`-Verzeichnis auf der anderen Maschine wiederherstellen (standardmäßig: `C:\Program Files\XtractUniversal\config`).
Sie können alternativ Teile des Backups wiederherstellen, indem Sie z.B. nur die Destinations- oder Extractions-Verzeichnisse kopieren.
3. Starten Sie den Xtract Universal Service neu, wenn Sie eine vollständige Migration durchführen oder das Verzeichnis `server` auf die andere Maschine kopieren.

****
#### Weiterführende Links
- [Installation und Update](./installation-und-update)
- [Versionshistorie](https://kb.theobald-software.com/version-history/xtract-universal-version-history)