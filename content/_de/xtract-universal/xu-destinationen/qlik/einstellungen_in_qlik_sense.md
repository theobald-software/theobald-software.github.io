---
ref: xu-qliksense-qlikview-04
layout: page
title: Einstellungen in Qlik Sense
description: Einstellungen in Qlik Sense
product: xtract-universal
parent: qlik
permalink: /:collection/:path
weight: 4
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=einstellungen_in_qlik_sense
---

### Eine Extraktion aus QlikSense triggern

Bevor Sie das von Xtract Universal generierte Qlik-Skript nach QlikSense kopieren, führen Sie die folgenden Schritte in QlikSense aus:

1. Erstellen Sie eine neue Datenverbindung vom Typ REST.
2. Geben Sie die URL des Xtract Universal Servers und den Port in das URL-Textfeld ein. Im Beispiel unten läuft der Xtract Universal Server auf `http://localhost:8065/`.
3. Geben Sie *Xtract_Universal* in das Textfeld für den Namen ein.
    ![XU_qlik_QlikSense_data_connection](/img/content/XU_qlik_QlikSense_data_connection.png){:class="img-responsive"}
4. Fügen Sie das QlikSense-Skript aus Xtract Universal in den Data-Load-Editor von QlikSense ein.
    ![XU_qlik_QlikSense_load_editor](/img/content/XU_qlik_QlikSense_load_editor.png){:class="img-responsive"}
	
{: .box-note }
**Hinweis**: In QlikSense ist der Standardwert für das *Timeout* 30 Sekunden. Erhöhen Sie den Timeout auf einen ausreichend hohen Wert, wenn die Zeit bis zum Eintreffen des ersten Datenpakets von SAP höher als 30 Sekunden ist. Der maximale Eingabewert beträgt 10.000 Sekunden.


### Erläuterung des QlikSense Datenlade-Skripts 

1. Xtract Universal erstellt ein QlikSense-Skript, das die [QlikSense-Interpretationsfunktionen](https://help.qlik.com/en-US/sense/June2020/Subsystems/Hub/Content/Sense_Hub/Scripting/InterpretationFunctions/interpretation-functions.htm) *Num#*, *Text*, *Datum* und *Zeit* verwendet. Für Felder, für die kein adäquater Datentyp bestimmt werden kann, wird keine Interpretationsfunktion verwendet. 
2. Xtract Universal erstellt ein QlikSense-Skript, das allen Feldern die Feldbeschreibung und die SAP-Herkunft des Feldes als Tags zuordnet.
3. Xtract Universal erstellt ein QlikSense-Skript, das alle Datumsfelder explizit mit *$date* markiert. Diese Funktion stellt sicher, dass Felder, die ein [Datum vor dem 1. Januar 1980] enthalten (https://help.qlik.com/en-US/sense/April2020/Subsystems/Hub/Content/Sense_Hub/Scripting/date-time-interpretation.htm), in QlikSense als Datumsfelder erkannt werden.
4. Das QlikSense-Skript unterstützt die Verwendung von Xtract Universal [Extraktionsparameter](../../fortgeschrittene-techniken/extraktionsparameter). 
    ![XU_qlik_QlikSense_XUParameter](/img/content/XU_qlik_QlikSense_XUParameter.png){:class="img-responsive"}
    
    ![XU_qlik_QlikSense_XUParameter_Log2](/img/content/XU_qlik_QlikSense_XUParameter_Log2.png){:class="img-responsive"}


{: .box-note }
**Hinweis**: Ändern Sie nicht den zugewiesenen Wert der Variablen *xuOriginDateFormat* und *xuOriginTimeFormat*.
 Das gewählte Format ermöglicht es Xtract Universal, die Daten von Datums- und Zeitfeldern an QlikSense zu senden. Eine Änderung des Formats verhindert die Ausführung des QlikSense-Skripts.

*****

#### Weiterführende Links
- [Destinationen](./xu-destinationen)
- [Qlik Help](https://help.qlik.com/)