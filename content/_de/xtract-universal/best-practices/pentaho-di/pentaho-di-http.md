---
ref: pentaho-di-http
layout: page
title: Pentaho Integration über HTTP
description: Pentaho Integration HTTP
product: xtract-universal
parent: pentaho-di
permalink: /:collection/:path
weight: 20
lang: de_DE
old_url: 
---

Hier zeigen wir die Pentaho-Integration über den Aufruf eines HTTP-Webservices.
In Pentaho führen wir die Extraktion durch einen HTTP Aufruf. 
Das untere Bild zeigt die Archtitektur. Xtract Universal extrahiert die Daten aus SAP und liefert sie über HTTP im CSV-Format.
In Pentaho können wir anschließend die extrahierten Daten weiterverarbeiten und z.B. in eine Datenbank schreiben.
![xu-pdi-ws](/img/content/xu/best-practices/pdi-http/xu-pdi-ws.png){:class="img-responsive"}

Dieses Szenario setzt kein bestimmtes Betriebssystem voraus, im Unterschied zum Szenario mit der Kommandozeile, das nur auf einem Windows-Betriebssystem läuft.
In Xtract Universal haben wir eine Extraktion mit HTTP-CSV Destination definiert. 
<br>
**Extraktion in Xtract Universal**<br>
Hier sehen wir die Definition der Extraktion in Xtract Universal mit HTTP-CSV Destination: 
![pdi-http-xu](/img/content/xu/best-practices/pdi-http/pdi-http-xu.png){:class="img-responsive"}

<br>
**Transformation in PDI**<br>
Die Übersicht der Transformation in Kettle zeigt die verwendeten Schritte: 
![Transformation](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-overview.png){:class="img-responsive"}

<br>
**Initialisierungsparameter**<br>
Wir schauen uns die Einstellungen der wichtigen Schritte.
Im ersten Schritt definieren wir die URL der Extraktion in Xtract Universal: http://KETSWIN16DC02:8065/?name=SAPCustomer
 
![Initialisieren](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-generate-rows.png){:class="img-responsive"}


<br>
**HTTP Aufruf**<br>
Im zweiten Schritt führen wir den HTTP-Call aus. Der URL-Parameter wird übergeben. 
Die Rückgabe wird ins Feld ExtractionResult geschrieben. Auch der HTTP-Status-Code wird geschrieben.
Der HTTP-Status-Code kann für Fehlerbehandlung verwendet werden.  
![HTTP](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-http-client.png){:class="img-responsive"}


**Switch-Verzweisung**<br>
Fall der Status Code 200 ist, dann war die Ausführung erfolgreich. Im Fehlerfall schreiben wir ins Log. 
![Switch Case](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-switch.png){:class="img-responsive"}

**In Zeilen splitten**<br>
Die Daten werden anhand des Zeichens für Zeilenumbruch in Zeilen gesplittet. 
Hier muss man beachten, dass die ersten Zeile die Spaltennamen enthält. Die letzte Zeile enthält nur NULL-Werte.
Diese 2 Zeilen entfernen wir später. 
![In Zeilen splitten](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-split-to-rows.png){:class="img-responsive"}
Xtract Universal bietet auch Optionen, um die Daten ohne die Spaltennamen und ohne Zeilentrenner nach der letzten Zeile zu liefern, aber wir verwenden die Standardeinstellungen für die http-csv-Destination.<br>.



**Letzte Zeile identifizieren**<br>
In dem Schritt identifizieren wir die letzte Zeile. Der Schritt ist hilfreich, wenn wir die Anzahl der Datensätze berechnen und die letzte Zeile entfernen. 
![Letzte Zeile identifizieren](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-last-row.png){:class="img-responsive"}

**Datensätze filtern**<br>
Erste und letzte Zeile werden entfernt. 
![Datensätze filtern](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-filter-rows.png){:class="img-responsive"}


**In Spalten splitten**<br>
Datensätze werden in Spalten gesplittet. In diesem Schritt müssen wir die Spaltennamen und den Datentyp definieren. 
![In Spalten splitten](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-split-to-columns.png){:class="img-responsive"}

<br>
**Datenbank-Verbindung**<br>
So sieht die Verbindung zum SQL Server, die wir nutzen, um die Daten in eine Tabelle zu schreiben: 
![Datenbank-Verbindung](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-sql-con.png){:class="img-responsive"}

<br>
**Tabelle ausgeben**<br>
Folgende Einstellungen nutzen wir für die Tabellenausgabe: 
![Tabelle](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-table-out.png){:class="img-responsive"}

<br>
**Dateiausgabe**<br>
Zusätzlich schreiben wir die Daten in eine Datei. Folgende Einstellungen werden verwendet: 
![Datei](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-file-out.png){:class="img-responsive"}

**Anzahl Datensätze berechnen**<br>
In dem Zweig wollen wir die Anzahl der Datensätze berechnen. 

In dem Schritt entfernen wir die ersten Zeile, welche die ursprünglichen Spaltennamen enthält. Es bleibt nur die letzte Zeile. 
![Filter](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-filter-rows-02.png){:class="img-responsive"}

**Formelberechnung**<br>
Jetzt können wir die Anzahl der Datensätze berechnen. 
![Berechnung der Anzahl der Datensätze](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-formula-rowcount.png){:class="img-responsive"}

<br>
In dem Schritt schreiben wir ins Log 
![Log Anzahl der Datensätze](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-log-rowcount.png){:class="img-responsive"}


<br>
**Ausführung der Transformation in PDI**<br>
Nach erfolgreicher Ausführung schauen wir uns die Metriken. 
![Ausführung](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-executed-metrics.png){:class="img-responsive"}

<br>
**Preview in PDI**<br>
Auch das Preview der einzelnen Schritte ist möglich.<br> 

Preview der Ausgabe des HTTP-Aufrufs: 
![HTTP Client Preview](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-http-client-preview.png){:class="img-responsive"}

<br>
Preview des Schritts: In Zeilen splitten 
![Zeilen Preview](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-split-to-rows-preview.png){:class="img-responsive"}

<br>
Preview des Schritts: In Spalten splitten 
![Spalten Preview](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-split-to-columns-preview.png){:class="img-responsive"}

<br>
Preview der Ausgabedaten: 
![Ausgabe Preview](/img/content/xu/best-practices/pdi-http/pdi-http-xu-transf-output-preview.png){:class="img-responsive"}

<br>
**Daten im SQL Server**<br>
Hier sehen wir die Daten, welche wir in den SQL Server geschrieben haben: 
![SQL Server](/img/content/xu/best-practices/pdi-http/pdi-http-sql-data.png){:class="img-responsive"
<br>

In diesem Kapitel haben wir gesehen, wie wir in Pentaho SAP-Extraktionen, welche Xtract Universal zur Verfügung stellt, über HTTP aufgerufen und verwendet haben.<br>
Eine mögliche Erweiterung dieses Szenarios wäre, die Metadaten (Spaltennamen und Datentyp) aus dem Xtract Universal Server zu holen und in der Transformation dynamisch zu verwenden.<br>

<br>
**Download der Vorlage für PDI**<br>
Die Transformation der Vorlage für Pentaho Data Integration (PDI) aka Kettle können Sie hier herunterladen:
[Call SAP Extraction from Xract Universal via HTTP.ktr](/img/content/xu/best-practices/pdi-http/Call SAP Extraction from Xract Universal via HTTP.ktr)