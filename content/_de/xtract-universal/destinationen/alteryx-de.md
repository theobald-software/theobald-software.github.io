---
ref: destinations-20
layout: page
title: Alteryx
description: Alteryx
product: xtract-universal
parent: destinationen
childidentifier: alteryx-de
permalink: /:collection/:path
weight: 20
lang: de_DE
progressstate: 5
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract Universal.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).


Der folgende Abschnitt behandelt das Laden der SAP-Extraktionsdaten aus Alteryx.

## Voraussetzungen

Für die Verwendung der Alteryx-Destination wird das Xtract Universal Alteryx Plugin für den Alteryx-Designer und -Server benötigt. 

### Installation durch das Xtract Universal Setup

Das Xtract Universal Setup installiert das Xtract Universal Alteryx Plugin automatisch, wenn Alteryx bereits auf dem Zielsystem installiert. <br>
Wenn Sie Alteryx nach Xtract Universal installieren, führen Sie das Xtract Universal Setup erneut aus.

Das Xtract Unviersal Setup erstellt die folgenden Einträge und Erweiterungen im Installationsverzeichnis dieser Alteryx Installation:
- `Alteryx\Settings\AdditionalPlugins\XtractUniversal.ini`
- `Alteryx\bin\RuntimeData\icons\categories\XtractUniversal.png`
- `Alteryx\bin\RuntimeData\DefaultSettings.xml`

{: .box-note }
**Hinweis:** Führen Sie das Xtract Universal Setup auf allen Maschinen aus, die das Xtract Universal Alteryx Plugin benötigen.
Wenn Sie mehrere Alteryx-Installationen auf einem System haben, erkennt das Xtract Universal Setup nur eine Installation.

<!---
#### Mehrere Alteryx-Installationen auf einer Maschine

Wenn Sie mehrere Alteryx-Installationen auf einem System haben, erkennt das Xtract Universal Setup nur eine Installation.
Führen Sie das Xtract Universal Setup for diese eine Installation aus. 
Das Xtract Unviersal Setup erstellt die folgenden Einträge und Erweiterungen im Installationsverzeichnis dieser Alteryx Installation:
- `Alteryx\Settings\AdditionalPlugins\XtractUniversal.ini`
- `Alteryx\bin\RuntimeData\icons\categories\XtractUniversal.png`
- `Alteryx\bin\RuntimeData\DefaultSettings.xml`

Um das Xtract Universal Alteryx Plugin in allen Alteryx-Installationen zu verwenden, kopieren Sie die o.g. Dateien manuell in die Alteryx-Installationsverzeichnisse, die nicht vom Xtract Universal Setup erkannt wurden.
-->

<!---
{: .box-note }
**Hinweis:** Sollten sich mehrere Alteryx-Installationen auf Ihrem System befinden, erkennt das Setup nur eine Installation und kopiert die o.g. Dateien dorthin.
Für alle weiteren Alertyx Installationen, müssen Sie eine manuelle Installtion des Plugins durchführen.

### Manuelle Installation (für ein separates Alteryx-System

1. Kopieren Sie den Alteryx-Ordner `C:\Program Files\XtractUniversal\alteryx` aus ihrer lokalen Xtract Universal Installation in einen beliebigen Ordner auf dem Server, auf dem Sie das Plugin installieren möchten. 
2. Führen Sie die `C:\Program Files\XtractUniversal\alteryx\AlteryxPluginSetup.exe` über die Windows Eingabeaufforderung aus. 

Die folgenden Befehle werden in Kombination mit einem Parameter, der auf das Installationsverzeichnis von Alteryx verweist unterstützt. 
- */i* (für "install") z.B. `C:\Program Files\XtractUniversal\alteryx>AlteryxPluginSetup /i "C:\Users\mywindowsuser\AppData\Local\Alteryx"`
- */u* (für "uninstall")

{: .box-note }
**Hinweis:** Sollte es Probleme bei der Installation des Plugins geben, schicken Sie die setup.log Datei aus `C:\Program Files\XtractUniversal\alteryx\setup.log` an den [Theobald Support](https://support.theobald-software.com).
-->


## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	 

### Destination Details

Für das Anlegen einer Alteryx Zielumgebung müssen keine weiteren Einstellungen vorgenommen werden.

![alteryx-create-destination](/img/content/alteryx-create-destination.PNG){:class="img-responsive"}


## Einstellungen

### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen, siehe [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen).
2. Klicken Sie auf **[Destination]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen
![alteryx-configuration](/img/content/alteryx-configuration.PNG){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}


## Einstellungen in Alteryx


### Xtract Universal Tool in Alteryx verwenden
1. Fügen Sie das Tool Xtract Universal zu Ihrem Alteryx-Workflow hinzu.
![XU_alteryx_plugin](/img/content/XU_alteryx_plugin.png){:class="img-responsive"}
2. Legen Sie die folgenden Einstellungen für das Xtract Universal-Tool im Alteryx Designer fest:
- Connection
- Parameters

### Verbindung

**Server**<br>
Der Name, die IP oder die Domain und der Port unter denen der Server zu erreichen ist.<br>
Format: [Server]:[Port].

**Extraction**<br>
Der Name der auszuführenden Extraktion. Durch das Klicken auf den Pfeil neben dem Textbereich, werden alle verfügbaren Extraktionen des angegebenden Servers abgerufen und in einem Dropdown-Menü dargestellt. 
Es werden nur die Extraktionen mit Alteryx als Destinationstyp angezeigt. Den Destinationstyp können Sie im Xtract Universal Designer definieren.

{: .box-note }
**Hinweis:** Stellen Sie sicher, dass der Xtract Universal Server läuft.

**Send SAP credentials** <br>
Markieren Sie die Checkbox *Send SAP credentials*, wenn die Checkbox *Require SAP Credentials to be explicitly supplied for execution* in den [SAP Source-Einstellungen](../einfuehrung/sap-verbindungen-anlegen) in Xtract Unviersal gesetzt ist.
Über **Username** und **Password** übermitteln Sie Ihre SAP-Zugangsdaten für die Extraktion.

Die Einstellung *Send SAP credentials* kann in Self-Service-Szenarien nützlich sein. Wenn jede Extraktion mit den SAP-Anmeldeinformationen eines einzelnen Benutzers anstelle der global definierten Anmeldeinformationen ausgeführt werden muss.

**Authenticate using current Windows user** <br>
Markieren Sie die Checkbox *Authenticate using current Windows user*, um sich mit Ihrem Windows-Benutzer anzumelden.

### Parameter 

Im Tab **Parameters** können die extraktionsspezifischen Parameter festgelegt werden. 

### Beispiel 1: Das statische Überschreiben eines benutzerdefinierten Parameters
Im folgenden Beispiel enthält eine Extraktion von SAP-Kunden den Parameter *city*, der in den **Custom Defined Parameters** definiert ist. 
Der Parameter *city* kann mit einem statischen Wert überschrieben werden (hier: Stuttgart).
Um den Parameter *city* zu überschreiben, markieren Sie die Checkbox **Override** und geben einen neuen Wert unter *Value* ein.

![alteryx-custom-parameters](/img/content/alteryx-custom-parameters.PNG){:class="img-responsive"}

### Beispiel 2: Das dynamische Überschreiben eines benutzerdefinierten Parameters**<br>
Das Xtract Universal-Tool kann auch Eingaben empfangen, z. B. über das Input Data Tool.
Die eingegebenen Daten können dynamisch verwendet werden, um den benutzerdefinierten Parameter in Xtract Universal zu übersteuern.<br> 
Im folgenden Beispiel enthält eine Extraktion von SAP-Kunden den Parameter *city*, der in den **Custom Defined Parameters** definiert ist und dynamisch parametrisiert werden soll. 
Um den Parameter *city* zu überschreiben, markieren Sie die Checkbox **Override** und die Checkbox **Map**. Wählen Sie einen Eintrag aus der Dropdown-Liste im Feld *Value*.

![alteryx-custom-parameters](/img/content/alteryx-custom-parameters-override.PNG){:class="img-responsive"}

Weitere Informationen zu benutzerdefinierten Parametern finden Sie unter [Benutzerdefinierte Variablen](../fortgeschrittene-techniken/benutzerdefinierte-variablen).

Sind bei der Verbindung zu Ihrem Xtract Universal Server keine Fehler aufgetreten, dann trägt das Tool ein Tooltip in folgendem Format: [Extraktion] @ [Server].

![alteryx-full-workflow](/img/content/alteryx-full-workflow.PNG){:class="img-responsive"}

## Related Links
- [Benutzerdefinierte Variablen](../fortgeschrittene-techniken/benutzerdefinierte-variablen)
