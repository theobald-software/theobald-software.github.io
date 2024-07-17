---
ref: xfa-introduction-03
layout: page
title: Installation 
description: Installation und Erste Schritte
product: xtract-for-alteryx
parent: einfuehrung
permalink: /:collection/:path
weight: 3
lang: de_DE
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract for Alteryx.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract for Alteryx HelpCenter](https://helpcenter.theobald-software.com/xtract-for-alteryx/documentation/introduction/).

### Voraussetzungen

{: .box-note }
**Hinweis:** Administratorberechtigungen sind für die Installation von Xtract for Alteryx erforderlich.

1. Installieren Sie Alteryx Designer, bevor Sie Xtract for Alteryx installieren.
2. Schließen Sie den Alteryx Designer und installieren Sie dann Xtract for Alteryx wie im folgenden Abschnitt beschrieben.
Das Schließen des Alteryx-Designers stellt sicher, dass die Xtract for Alteryx Komponenten korrekt installiert sind.
3. Öffnen Sie den Alteryx Designer erneut und prüfen Sie, ob Xtract for Alteryx Komponenten verfügbar sind.

{% include _content/de/einfuehrung/produktversion.md %}	

### Installation von Xtract for Alteryx

Das Installationsprogramm *XtractForAlteryxSetup.exe* ist ein branchenübliches Installationsprogramm. Führen Sie die Datei *XtractForAlteryxSetup.exe* aus und folgen Sie den Anweisungen des Installationsprogramms.<br>

![Xtract for Alteryx Installation](/img/content/xfa/xfa_install.png){:class="img-responsive"}<br>

{: .box-note }
**Hinweis:** Während der Installation werden Sie aufgefordert, sowohl ein Installationsverzeichnis für Xtract for Alteryx, als auch das Installationsverzeichnis von Alteryx anzugeben.
Wenn Sie mehrere Alteryx-Instanzen installiert haben, wählen Sie während der Installation die Instanz, auf der Sie Xtract for Alteryx verwenden möchten.

Nach der Installation legt Xtract for Alteryx folgende Einträge und Erweiterungen im Alteryx Installationsverzeichnis an:
- `Alteryx\Settings\AdditionalPlugins\XtractForAlteryx.ini`
- `Alteryx\bin\RuntimeData\icons\categories\XtractForAlteryx.png`
- `Alteryx\bin\RuntimeData\DefaultSettings.xml`

Eine regelmäßige Aktualisierung der Software ist entscheidend für eine stabile Performance. 
Prüfen Sie die [Versionshistorie](https://kb.theobald-software.com/version-history/xtract-for-alteryx-version-history) auf Updates. 
Eine neuere Version kann über die ältere Version installiert werden. 

### Unbeaufsichtigte Installation 
{% include _content/de/silent-setup.md %}	

### Installationsverzeichnis-Dateien
Die folgende Liste zeigt einige der wichtigsten Dateien, die im Standardverzeichnis `C:\Programme\XtractForAlteryx` abgelegt werden: <br>

|Dateiname | Beschreibung |
|:----|:---|
|ABAP Verzeichnis | Verzeichnis mit SAP-Transportaufträgen (.zip) und einer README-Datei (.txt).|
|XtractForAlteryxSetup.exe | Installationsanwendung, die Xtract for Alteryx als Plugin für den Alteryx Designer / Server installiert. |
|Uninstall Xtract for Alteryx | Shortcut zur Deinstallation von Xtract for Alteryx mit all seinen Komponenten.|
|Eula_Xtract_for_Alteryx.rtf |Dokument mit dem Lizenzvertrag für die Nutzung der Software Xtract for Alteryx.  |
|XtractForAlteryxLicense.json| Lizenzdatei mit Server-, Komponenten- und Laufzeitinformationen.|
|XtractForAlteryxSetup.log| Protokolldatei, in der die genauen Änderungen aufgezeichnet werden, die auf Ihrem System durchgeführt wurden. Diese Datei wird auch verwendet zum Überprüfen, ob während der Installation Fehler aufgetreten sind .|


****
#### Weiterführende Links
- [Installation eines Updates](./update)
- [Lizensierung](./lizensierung)
- [Xtract for Alteryx Version History](https://kb.theobald-software.com/version-history/xtract-for-alteryx-version-history)
