---
ref: xu-introduction-03
layout: page
title: Installation und Backup
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

### Installationsroutine

Das Installationsprogramm *XtractUniversalSetup.exe* ist eine branchenübliche Installationsroutine.  Führen Sie die Datei *XtractUniversalSetup.exe* aus und folgen Sie den Anweisungen des Installationsprogramms.


Beim Starten des Installationsprogramms können die optionalen Komponenten (1) für die Installation ausgewählt werden. Bei der Auswahl der Komponenten werden die Optionsdetails im "Description" Feld angezeigt (2). 

![XU-Setup](/img/content/xu/XU_Setup_2.png){:class="img-responsive"}

|Komponente | Beschreibung| 
||:---|
|Tableau Extract API | Komponente erforderlich nur für die Tableau Destination
|Main Program Files | Standardeinstellung der Installationsroutine
|Start Menu Shortcut | Komponente, die dem Startmenü Verknüpfungen hinzufügt
|Convert Config files | Konvertiert Extraktionen, Sources (Quellen), Destinationen usw. vom Format der vorherigen Version in das neue Format. <br> Diese Komponente ist entscheidend bei der Installation von Hauptversionen (Major Releases) und Upgrades von z.B. Version 3.x auf 4.x.
Install Service | Installiert die Serverkomponente als Windows-Service und bootet den Service automatisch. Mehr Details im Abschnitt [Architektur](./architektur).

Die Installationsschritte werden im Abschnitt [Lizenz](./lizenz#installieren-von-xtract-universal-lizenz---xtractuniversallicensejson) beschrieben.

#### Dateien des Installationsordners
Die folgende Liste zeigt einige der wichtigsten Dateien, die nach der Installation in das Standardverzeichnis ``C:\Program Files\XtractUniversal`` abgelegt werden:

|Dateiname | Beschreibung |
|:----|:---|
| ABAP Ordner | Ordner mit eigenentwickelten Z-Funktionsbausteinen (.txt) und den dazugehörigen Transportaufträgen (.zip).|
| logs Ordner| Ordner mit Server- und Extraktionsprotokollen etc. Siehe auch Abschnitt [Logging](../logging). |
| config Ordner | Ordner, der bei der ersten Extraktion automatisch erstellt wird und alle Extraktionen und die entsprechenden Protokolldateien enthält. Siehe auch Abschnitt [Backup](#backup). |
| result-cache Ordner | Ordner mit Extraktions-Cache-Dateien, anwendbar nur für Pull-Destinationen. Siehe auch Abschnitt [Pull-Destinationen](../xu-zielumgebungen#pull--und-push-destinationen).|
| xu.exe | Kommandozeilen-Tool zum Einplanen von Extraktionen (Automatisierung). Siehe auch Abschnitt [Extraktion einplanen](../fortgeschrittene-techniken/extraktion_einplanen). |
| XtractDesigner.exe | Anwendung zum Starten von Xtract Universal Designer, der das Erstellen, Testen und Überwachen von Extraktionen ermöglicht.|
| XtractService.exe | Anwendung zum Starten von Xtract Universal Server als XU Windows-Service (Dienst). Diese Anwendung startet in der Regel automatisch und läuft im Hintergrund. |
| ConfigConverter.exe|  Anwendung, die Extraktionen, Sources (Quellen), Destinationen usw. vom Format der vorherigen Version in das neue Format konvertiert. Diese Anwendung ist entscheidend bei der Installation von Hauptversionen (Major Releases) und Upgrades von z.B. Version 3.x auf 4.x. |
| XtractLicenseManager.exe | Programm zum Einspielen und Prüfen der aktuellen Lizenz.|
| uninstall.exe| Tool zum Deinstallieren und Entfernen von Xtract Universal mit allen dazugehörigen Komponenten von Ihrem Rechner. |
| Eula_xtractUniversal.rtf | Dokument mit der Lizenzvereinbarung zur Nutzung der Software Xtract Universal.|
| XtractUniversalLicense.json |  Lizenzdatei mit Server-, Komponenten- und Laufzeitinformationen. |

{: .box-note }
**Hinweis:** Der Xtract Universal Server kann zu Testzwecken als Konsolenprogramm 
gestartet werden. 

Mehr Details zum Starten von Xtract Universal Server als Konsolenprogramm, finden Sie im Abschnitt [Fehlerbehandlung](./fehlerbehandlung) und im Knowledgebase-Artikel [How to use target principal field](https://kb.theobald-software.com/xtract-universal/target-principal-TPN).

### Backup

Bevor Sie eine neue Produktversion installieren oder die aktuelle Version aktualisieren, stellen Sie sicher, dass Sie ein Backup erstellen. 
Mit einem Backup können Sie bei Bedarf einfach auf die vorherige Version von Xtract Universal zurückwechseln. Mehr Details dazu finden Sie im Abschnitt [Installation eines Updates](update#wie-erstelle-ich-ein-backup).

{:.box-warning}
**Warnung! Datenverlust:** Systemänderungen oder Updates können die Funktionalität der Software einschränken, dabei können Daten verloren gehen.<br>
Führen Sie ein Backup des Ordners: `C:\Program Files\XtractUniversal\config` in regelmäßigen Abständen durch.

Alle Einstellungen zu Extraktionen, Sources, Destinationen, etc. werden im Unterverzeichnis *config* gespeichert. 
	
### Neuinstallation und Update

Eine neuere Version kann über die ältere Version installiert werden. Alle Einstellungen und angelegten Objekte bleiben erhalten. 

### Versionshistorie

Eine Liste der aktuellen Versionen finden Sie in der [Versionshistorie](https://kb.theobald-software.com/version-history/xtract-universal-version-history).
Um die Version Ihres Produkts zu überprüfen, öffnen Sie den Designer, navigieren Sie zu **Help > Version History** oder drücken Sie **[F12]**.