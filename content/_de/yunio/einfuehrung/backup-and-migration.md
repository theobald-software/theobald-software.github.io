---
ref: yunio-12
layout: page
title: Backup und Migration
description: Backup und Migratio
product: yunio
parent: einfuehrung
permalink: /:collection/:path
weight: 12
lang: de_DE
progressstate: 5
---

### Konfigurationsdateien 
Alle Einstellungen von Services, Quellen, Benutzern und Servern werden im `config`-Ordner des yunIO Installationsverzeichnisses gespeichert, z.B. in `C:\Program Files\Theobald Software\yunIO\config`.
Verwenden Sie den `config`-Ordner für Versionskontrolle oder für manuelle Backups.

|Dateiname | Beschreibung |
|:----|:---|
| `extractions` | Enthält die [Service-Definitionen](../erste-schritte#einen-service-anlegen).|
|`servers`  | Enthält die [Servereinstellungen](../server-settings).|
| `sources` | Enthält die [SAP-Verbindungen](../sap-verbindungen-anlegen). |
| `users` | Enthält die [Benutzereinstellungen](../benutzer).|

### Backup

{: .box-tip }
**Empfehlung:** Erstellen Sie *regelmäßige* Backups der Konfigurationsdateien, um die Arbeit zu sichern, die Sie in das Design und die Optimierung Ihrer Services investieren.
Alternativ empfehlen wir die Verwendung eines Systems zur Versionkontrolle, z.B. Git oder Azure DevOps.

Bevor Sie eine neue Produktversion installieren oder die aktuelle Version aktualisieren, stellen Sie sicher, dass Sie ein Backup erstellen. 
Falls erforderlich, ermöglicht das Backup es Ihnen leicht zur vorherigen Produktversion zurück zu wechseln. 
Mehr Details dazu finden Sie auch im Abschnitt [Installation und Update](./installation-und-update).

#### Erstellen eines Backups
1. Öffnen Sie das yunIO Installationsverzeichnis, z.B. `C:\Program Files\Theobald Software\yunIO`.
2. Kopieren Sie den kompletten `config`-Ordner aus dem yunIO Installationsverzeichnis und speichern Sie den Ordner an einem sicheren Ort.
3. Optional: Kopieren Sie den kompletten `logs`-Ordner aus dem yunIO Installationsverzeichnis, um ein Backup der Log-Dateien zu erstellen.
4. Kopieren Sie die Datei `yunIOLicense.json`, um ein Backup Ihrer Lizenz zu erstellen.

{: .box-warning }
**Warnung! Datensicherheit.** <br>
Sowohl `config`- als auch `logs`-Verzeichnisse können sensible Informationen enthalten.


#### Wiederherstellen des Backups

1. Öffnen Sie das yunIO Installationsverzeichnis, z.B. `C:\Program Files\Theobald Software\yunIO`.
2. Entfernen Sie den `config`-Ordner aus dem Installationsverzeichnis .
3. Kopieren Sie das Backup des `config`-Ordners in das Installationsverzeichnis.
3. Um die Lizenz wiederherzustellen, ersetzen Sie die Datei `yunIOLicense.json` im Installationsverzeichnis durch das Backup.

{: .box-warning } 
**Warnung!Datenverlust!** <br>
Das Wiederherstellen des Backups des `config`-Ordners ersetzt die bestehende Konfiguration. Stellen Sie sicher, dass Sie die vorhandenen Dateien entfernen, bevor Sie die Backups wiederherstellen.

### Manuelle Migration auf eine andere Maschine

{: .box-note }
**Hinweis**: Da yunIO-Lizenzen servergebunden sind, brauchen Sie bei einem Umzug auf einen neuen Server auch eine neue Lizenz.<br>
Kontaktieren Sie dafür unseren Vertrieb unter [sales@theobald-software.com](mailto:sales@theobald-software.com).

#### Voraussetzung <br>
Die yunIO Versionen müssen auf beiden Maschinen übereinstimmen. <br>
Verwenden Sie die `YunIOSetup.exe` aus dem yunIO Installationsverzeichnis der aktuellen Maschine, um dieselbe Software-Version auf der anderen Maschine zu installieren.
Um die Version Ihres Produkts zu überprüfen, öffnen Sie den Designer und navigieren Sie zu dem **About** Menü.

#### Migration
1. Öffnen Sie auf der aktuellen Maschine das yunIO Installationsverzeichnis, z.B. `C:\Program Files\Theobald Software\yunIO`.
2. Erstellen Sie ein Backup des `config`-Ordners der aktuellen Maschine.
3. Entscheiden Sie, ob Sie eine teilweise oder eine vollständige Migration benötigen. <br> 
Für eine vollständige Migration kopieren Sie den gesamten `config`-Ordner in das Installationsverzeichnis auf der neuen Maschine.<br>
Für eine teilweise Migration kopieren Sie nur Unterordner des `config`-Ordners auf die neue Maschine, siehe [Konfigurationsdateien](#konfigurationsdateien).
4. Neustarten Sie den yunIO Windows Dienst auf der neuen Maschine.


****
#### Weiterführende Links
- [Installation und Update](./installation-und-update)
- [Versionshistorie](https://kb.theobald-software.com/version-history/yunio-version-history)
