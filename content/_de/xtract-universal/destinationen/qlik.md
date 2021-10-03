---
ref: destinations-90
layout: page
title: QlikSense & QlikView
description: QlikSense & QlikView
product: xtract-universal
parent: destinationen
childidentifier: qlik
permalink: /:collection/:path
weight: 90
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=qlik
progressstate: 5
---

Die folgenden Abschnitte beschreiben, wie Xtract Universal mit QlikSense oder QlikView verbunden wird.

Zum Zweck der Verbindung verfügt Xtract Universal über eine Destination vom Typ *Qlik*. Die Destination Qlik generiert ein Datenladeskript, das in den Data Load-Editor Ihrer Qlik-Anwendung eingefügt werden muss. Je nachdem, ob Sie eine QlikSense- oder QlikView-Anwendung ausführen, erstellt Xtract Univeral ein passendes Datenladeskript.

Die Ausführung der Qlik-Anwendung triggert die entsprechende Extraktion von Xtract Univeral über das Datenladeskript. Xtract Universal sendet die extrahierten SAP-Daten über einen http-csv-Stream direkt an Ihre Qlik-Anwendung.

## Voraussetzungen
Für die Nutzung der Qlik Destination müssen keine besonderen Voraussetzungen erfüllt sein.


## Verbindung

{% include _content/de/xu-specific/destinationen/general/connection.md %}	

### Destination Details
Um Qlik zu verwenden, müssen keine weiteren Einstellungen vorgenommen werden.

![XU_qlik_destination](/img/content/XU_qlik_destination.png){:class="img-responsive}


## Einstellungen
### Destination Settings öffnen

1. Eine bestehende Extraktion anlegen oder auswählen (siehe auch [Erste Schritte mit Xtract Universal](../erste-schritte/eine-neue-extraktion-anlegen)).
2. Klicken Sie auf **[Destinations]**. Das Fenster "Destination Settings" wird geöffnet.
![Destination-settings](/img/content/xu/xu_designer_destination.png){:class="img-responsive"}

Die folgenden Einstellungen können für die Destination definiert werden. 
  
### Destination Settings - Destinationseinstellungen

![XU_qlik_destination_settings](/img/content/XU_qlik_destination_settings.png){:class="img-responsive"}

{% include _content/de/xu-specific/destinationen/general/column-name-style.md %}

{% include _content/de/xu-specific/destinationen/general/date-conversion.md %}

## Datenladeskript generieren

### Anzeigen eines Qlik-Skripts
1. Führen Sie eine Extraktion mit der Destination "Qlik" aus. Das Fenster "Run Extraction" wird geöffnet.
![XU_qlik_generate_Script](/img/content/XU_qlik_generate_Script.png){:class="img-responsive"}
2. *Optional (bei Verwendung von QlikSense)*: Markieren Sie im Abschnitt *Parameter* die Checkboxen für die Parameter, die Sie als SET-Variablen im QlikSense-Skript hinzufügen möchten.
3. Klicken Sie auf **[Generate Qlik Script]**, um ein Datenladeskript zu generieren. Das Fenster "Script" wird geöffnet.

### Skript Weiterverarbeiten
1. Wählen Sie einen der beiden Tabs aus: *QlikView Script* oder *QlikSense Script*.
2. Klicken Sie auf **[Copy to Clipboard]**, um das Skript zu kopieren.
![XU_qlik_generate_Script](/img/content/XU_qlik_generate_Script_2.png){:class="img-responsive"}
3. Fügen Sie das kopierte Skript in den Datenlade-Editor von Qlik View oder von Qlik Sense ein.
Mehr Details zu QlikSense finden Sie im Abschnitt [Einstellungen in QlikSense](#einstellungen_in_qlik_sense).

{: .box-note }
**Hinweis:** die "SET-Methoden" können nicht im Fenster "Script" editiert werden. Editieren Sie die SET-Methoden auf der Destinationsseite.  


## Einstellungen in Qlik Sense

### Eine Extraktion aus QlikSense triggern

Bevor Sie das von Xtract Universal generierte Qlik-Skript nach QlikSense kopieren, führen Sie die folgenden Schritte in QlikSense aus:

1. Erstellen Sie eine neue Datenverbindung vom Typ REST. <br>
**Hinweis**: In QlikSense ist der Standardwert für das *Timeout* 30 Sekunden. Erhöhen Sie den Timeout auf einen ausreichend hohen Wert, wenn die Zeit bis zum Eintreffen des ersten Datenpakets von SAP höher als 30 Sekunden ist. Der maximale Eingabewert beträgt 10.000 Sekunden.
2. Geben Sie die URL des Xtract Universal Servers und den Port in das URL-Textfeld ein. Im Beispiel unten läuft der Xtract Universal Server auf `http://localhost:8065/`.
3. Geben Sie *Xtract_Universal* in das Textfeld für den Namen ein.
![XU_qlik_QlikSense_data_connection](/img/content/XU_qlik_QlikSense_data_connection.png){:class="img-responsive"}
4. Fügen Sie das QlikSense-Skript aus Xtract Universal in den Data-Load-Editor von QlikSense ein.
![XU_qlik_QlikSense_load_editor](/img/content/XU_qlik_QlikSense_load_editor.png){:class="img-responsive"}
	

### Erläuterung des QlikSense Datenlade-Skripts 

1. Xtract Universal erstellt ein QlikSense-Skript, das die [QlikSense-Interpretationsfunktionen](https://help.qlik.com/en-US/sense/June2020/Subsystems/Hub/Content/Sense_Hub/Scripting/InterpretationFunctions/interpretation-functions.htm) *Num#*, *Text*, *Datum* und *Zeit* verwendet. Für Felder, für die kein adäquater Datentyp bestimmt werden kann, wird keine Interpretationsfunktion verwendet. 
2. Xtract Universal erstellt ein QlikSense-Skript, das allen Feldern die Feldbeschreibung und die SAP-Herkunft des Feldes als Tags zuordnet.
3. Xtract Universal erstellt ein QlikSense-Skript, das alle Datumsfelder explizit mit *$date* markiert. Diese Funktion stellt sicher, dass Felder, die ein [Datum vor dem 1. Januar 1980](https://help.qlik.com/en-US/sense/April2020/Subsystems/Hub/Content/Sense_Hub/Scripting/date-time-interpretation.htm) enthalten, in QlikSense als Datumsfelder erkannt werden.
4. Das QlikSense-Skript unterstützt die Verwendung von Xtract Universal [Extraktionsparameter](../extraktionen-ausfuehren-und-einplanen/extraktionsparameter). <br>
![XU_qlik_QlikSense_XUParameter](/img/content/XU_qlik_QlikSense_XUParameter.png){:class="img-responsive"}<br>
![XU_qlik_QlikSense_XUParameter_Log2](/img/content/XU_qlik_QlikSense_XUParameter_Log2.png){:class="img-responsive"}

{: .box-note }
**Hinweis:** Ändern Sie nicht den zugewiesenen Wert der Variablen *xuOriginDateFormat* und *xuOriginTimeFormat*.
Das gewählte Format ermöglicht es Xtract Universal, die Daten von Datums- und Zeitfeldern an QlikSense zu senden. Eine Änderung des Formats verhindert die Ausführung des QlikSense-Skripts.

## Migration von Xtract QV

Sie haben Xtract QV installiert, dort SAP-Quelle(n) und Extraktionen definiert und diese in Qlik als Datenquelle angebunden.<br>

Wenn Sie dieses Szenario nach Xtract Universal migrieren möchten, wenden Sie sich an [info@theobald-software.com](mailto:info@theobald-software.com).
Wir werden Ihnen dann alle notwendigen Informationen zum Migrationsprozess zukommen lassen.


****
## Weiterführende Links

- [Qlik Help](https://help.qlik.com/)