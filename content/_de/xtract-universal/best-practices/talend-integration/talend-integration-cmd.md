---
ref: talend-integration-cmd
layout: page
title: Talend Integration über die Kommandozeile
description: Talend Integration über die Kommandozeile
product: xtract-universal
parent: talend-integration_notreleased
permalink: /:collection/:path
weight: 10
lang: de_DE
old_url: 
---

Hier zeigen wir die Pentaho-Integration über die Kommandozeile (xu.exe).
Das untere Bild zeigt die Archtitektur. 
In Xtract Universal haben wir eine Extraktion mit einer SQL Server als Destination definiert. 
In Pentaho führen wir die Extraktion durch einen Aufruf des Command Line Tools von Xtract universal (xu.exe). Bei erfolgreicher Extraktion werden die Daten aus SAP extrahiert und in die SQL Server-Datenbank geladen. In Pentaho können wir anschließend die Daten aus der Datenbanktabelle lesen und weiterverarbeiten.
![xu-pdi-push](/img/content/xu/best-practices/pdi-cmd/xu-pdi-push.png){:class="img-responsive"}

Dieses Szenario setzt voraus, dass Pentaho auf einem Windows-Betriebssystem läuft bzw. ein Windows Command Tool ausführen kann.
Im Fall anderer Betriebssysteme kann alternativ der Aufruf über HTTP aufrufen. 
<br>
**Extraktion in Xtract Universal**<br>
Hier sehen wir die Definition der Extraktion in Xtract Universal mit SQL Server Destination: 
![pdi-cmd-xu](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-xu.png){:class="img-responsive"}

<br>
**Transformation in PDI**<br>
Die Übersicht der Transformation in Kettle zeigt die verwendeten Schritte: 
![pdi-cmd-transf-overview](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-overview.png){:class="img-responsive"}

<br>
**Initialisierungsparameter**<br>
Wir schauen uns die Einstellungen der wichtigen Schritte.
Im ersten Schritt definieren wir 2 Parameter: 
- Das Feld XUCmd enthält den Pfad zur Kommandozeite: "C:\Program Files\XtractUniversal\xu.exe"	
- Das Feld XUArg enthält die URL der Extraktion in Xtract Universal: http://KETSWIN16DC02:8065/?name=SAPCustomersToSQL
 
![pdi-cmd-transf-generate-rows-settings](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-generate-rows-settings.png){:class="img-responsive"}

<br>
**Kommandozeile aufrufen**<br>
Im zweiten Schritt rufen wir die Kommandozeile mit den folgenden Einstellungen auf. Wie man leicht sieht, haben wir auch Fehlerbehanldung eingebaut.  
![pdi-cmd-transf-exe-settings01](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-exe-settings01.png){:class="img-responsive"}
 
![pdi-cmd-transf-exe-settings02](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-exe-settings02.png){:class="img-responsive"}

<br>
**Datenbank-Verbindung**<br>
So sieht die Verbindung zum SQL Server, die wir nutzen, um die Daten aus der Tabelle zu lesen: 
![pdi-cmd-transf-sql-server-connection](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-sql-server-connection.png){:class="img-responsive"}

<br>
**Table Input**<br>
Folgende Einstellungen nutzen wir in Table Input: 
![pdi-cmd-transf-table-input-settings](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-table-input-settings.png){:class="img-responsive"}

<br>
**Ausführung der Transformation in PDI**<br>
Nach erfolgreicher Ausführung schauen wir uns die Metriken. 
![pdi-cmd-transf-metrics](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-metrics.png){:class="img-responsive"}

<br>
**Preview in PDI**<br>
Auch das Preview der einzelnen Schritte ist möglich.Preview der Eingabefelder:  
![pdi-cmd-transf-generate-rows-preview](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-generate-rows-preview.png){:class="img-responsive"}

<br>
Preview der Daten vom Table Input: 
![pdi-cmd-transf-table-input-preview](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-transf-table-input-preview.png){:class="img-responsive"}

<br>
**Daten im SQL Server**<br>
Hier nochmal ein Preview der Daten im SQL Server: 
![pdi-cmd-sql](/img/content/xu/best-practices/pdi-cmd/pdi-cmd-sql.png){:class="img-responsive"}

<br>
**Download der Vorlage für PDI**<br>
Die Transformation der Vorlage für Pentaho Data Integration (PDI) aka Kettle können Sie hier herunterladen:
[Call SAP Extraction from Xract Universal via CMD.ktr](/img/content/xu/best-practices/pdi-cmd/Call SAP Extraction from Xract Universal via CMD.ktr)