---
ref: xu-pbi_connector-04
layout: page
title: Power Query M-script
description: Power Query M-script 
product: xtract-universal
parent: Power-BI-Connector
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url:
---

### Einrichtung von Power Query M-script

Zusammen mit der Destination *Power BI Connector* wird Xtract Universal mit einer benutzerdefinierten Erweiterungsdatei für Power BI ausgeliefert. Die Erweiterungsdatei, bennant *XtractUniversalExtension.pqx*, befindet sich im Ornder *powerbi* innerhalb des  Installationsverzeichnisses von Xtract Universal. <br>

**Achtung:** M-script und der Custom Connector sind  *unabhändig*. Verwenden Sie den Power Query M-script oder den Power BI Connector.

### Benutzen von M-script in Power BI

1. Erstellen Sie einen Bericht in Power BI und verwenden Sie *Blank Query* als Datenquelle.
![M-Script](/img/content/XU_PowerQueryScript.png){:class="img-responsive"}
2. Öffnen Sie den *Erweiterten Editor*
![PowerQueryEditor](/img/content/XU_PBI_PowerQueryEditor.png){:class="img-responsive"}
3. Öffnen Sie den *loading_script* in Xtract Universal in jedem beliebigen Texteditor und kopieren Sie den kompletten Inhalt in das Fenster *Erweiterter Editor* von Power BI.
4. Im Erweiterten Editor, passen Sie die Werte im Feld *ExtractionName* und im Feld *ServerURL* den Bezeichnungen der gewünschten Extraktion und dem Namen des Webservers von Xtract Universal an. <br> *Achtung*: Verwenden Sie nur die Extractionen, die die Daten in die Destination *Power BI Connector* schreiben.
5. Schließen Sie den *Erweiterten Editor* und wählen Sie *Close & Apply*, um die Änderungen zu übernehmen und das Fenster zu schließen.
6. Sie können aufgefordert werden  *Anonymous*, *Basic* oder *Windows* Authentifizierungsmethode auszuwählen. Weitere Informationen dazu finden Sie im Abschnitt [Singe Sign On und SAP-Authentifizierung](./pbi-SSO).. 








