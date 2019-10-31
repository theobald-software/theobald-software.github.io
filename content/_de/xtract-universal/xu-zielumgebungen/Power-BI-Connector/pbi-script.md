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

Anstatt von Power BI Custom Connector, können Sie auch den Custom Power Query M-script zum Verbinden von Power BI mit Xtract Universal verwenden. Power Query M-script ist in Form einer Text-Datei namens *loading script* bereitgestellt. Diese Datei befindet sich im Ordner *powerbi* innerhalb des Installationsverzeichnisses von Xtract Universal.
<br>
### Custom Power Query M-script einrichten

**Achtung:** Power Query M-script und Power BI Custom Connector gehören nicht zusammen. Verwenden Sie entweder Power Query M-script **oder** Power BI Custom Connector.

### Power Query M-script in Power BI verwenden

1.  Erstellen Sie einen Power BI-Bericht mithilfe eines *Blank Query* als Datenquelle.
2. Öffnen Sie den *Advanced Editor*.
3. Öffnen Sie den Xtract Universal *loading_script* in jedem beliebigen Texteditor.
4. Kopieren Sie den kompletten Inhalt in das *Advanced Editor*-Fenster von Power BI.
4. Ändern Sie die Werte in den Feldern *ExtractionName* und  *ServerURL* enstprechend dem Namen Ihrer Xtract Universal Extraktion und dem Webserver. **Achtung:** Vernwenden Sie nur die Extraktionen, die der *Power BI Connector* Destination in Xtract Universal zugewiesen sind.
5. Schließen Sie den *Advanced Editor*.
6. Klicken Sie den *Close & Apply* Button.
7. Wenn Sie aufgefordert werden eine der folgenden Authentifizierungsmethoden auszuwählen: *Anonymous*, *Basic* or *Windows*, befolgen Sie die Handlungsanweisungen aus dem Abschnitt [Singe Sign On und SAP-Authentifizierung](./pbi-SSO).<br>
![M-Script](/img/content/XU_PowerQueryScript.png){:class="img-responsive"}

---

![PowerQueryEditor](/img/content/XU_PBI_PowerQueryEditor.png){:class="img-responsive"}







