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
Bevor Sie eine neue Produktversion installieren oder die aktuelle Version aktualisieren, stellen Sie sicher, dass Sie ein Backup erstellen. Falls erforderlich, das Backup ermöglicht es Ihnen
leicht zur vorherigen Version von Xtract Universal zurück zu wechseln. Mehr Details dazu finden Sie auch im Abschnitt [Installation und
Update](./installation-und-update).

Alle Einstellungen für Extraktionen, Quellen (Sources), Destinationen, usw. werden im Unterverzeichnis *config* gespeichert. 

#### Dateien des Config Verzeichnisses

|Dateiname | Beschreibung |
|:----|:---|
| Verzeichnis Destinations | Verzeichnis mit den [Destinationen](../xu-destinationen).|
| Verzeichnis Extractions  | Verzeichnis mit den [Extraktionen](../erste-schritte-mit-xu/eine-neue-extraktion-anlegen).|
| Verzeichnis Server  | Verzeichnis mit den [Servereinstellungen](../server/server_einstellungen).|
| Verzeichnis Sources | Verzeichnis mit den[SAP-Verbindungen](./sap-verbindungen-anlegen).|
| Version.txt | Textdatei mit der Versionsnummer, die mit der aktuellen Konfiguration übereinstimmt. Mehr Details dazu finden Sie auch im Abschnitt [New Installation and Update](./installation-und-update#neuinstallation-und-update).|

### Wie erstelle ich ein Backup?
Kopieren Sie das komplette *config*-Verzeichnis, der Maschine auf der der Xtract Universal Service läuft:  `C:\Program Files\XtractUniversal\config` (standardmäßig). 
Das config-Verzeichnis beinhaltet alle Einstellungen, Extraktionen und Verbindungen. 
Notieren Sie sich die Produktversion, die Sie gerade verwenden, um im Falle eines Problems wieder zur gleichen [Version](https://kb.theobald-software.com/version-history/xtract-universal-version-history) wechseln zu können.

### Migration auf eine andere Maschine
Die Migration auf einen anderen Server ist möglich, ohne dass Einstellungen wie Quellen (Sources), Benutzernamen oder Passwörter usw. verloren gehen.

**Voraussetzung**: Die Xtract Universal Versionen stimmen auf beiden Maschinen überein.

{: .box-tip }
**Tipp**: Um die Version Ihres Produkts zu überprüfen, öffnen Sie den Designer und navigieren Sie zu **Help > Info** oder drücken Sie **[F12]**.

{: .box-note }
**Hinweis:** Wenn Ihre aktuelle Version nicht die neueste Version von Xtract Universal ist, installieren Sie die passende Version `XtractUniversalSetup.exe` aus dem Xtract Universal Verzeichnis: `C:\Program Files\XtractUniversal` (standardmäßig) auf der anderen Maschine.

1. Stellen Sie sicher, dass die Versionen von Xtract Universal auf beiden Maschinen übereinstimmen.
2. Erstellen Sie ein Backup des Config-Verzeichnisses der aktuellen Maschine.
3. Entscheiden Sie, ob Sie eine teilweise oder eine vollständige Migration benötigen. <br> 
Für eine vollständige Migration können Sie das gesamte config-Verzeichnis auf der anderen Maschine wiederherstellen (standardmäßig: `C:\Program Files\XtractUniversal\config`).
Sie können alternativ Teile des Backups wiederherstellen, indem Sie z.B. nur die Destinations- oder Extractions-Verzeichnisse kopieren.
4. Starten Sie den Xtract Universal Service neu, wenn Sie eine vollständige Migration durchführen oder das Verzeichnis "Sources" auf die andere Maschine kopieren.

****
#### Weiterführende Links
- [Installation und Update](./installation-und-update)
- [Versionshistorie](https://kb.theobald-software.com/version-history/xtract-universal-version-history)