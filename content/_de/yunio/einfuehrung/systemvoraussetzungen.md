---
ref: yunio-introduction-01
layout: page
title: Systemvoraussetzungen
description: Systemvoraussetzungen
product: yunio
parent: einfuehrung
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/default.aspx?pageid=systemvoraussetzungen
Progressstate: 5
---

### Unterstützte SAP-Systeme und Releases
Die gesamte Kommunikation mit SAP erfolgt über das RFC-Protokoll. 
Es werden alle SAP ABAP basierten Systeme unterstützt, die RFC-Konnektivität bereitstellen.
Die Integration erfolgt auf der Ebene des SAP-Anwendungsservers. 
Daher ist die vom SAP-System verwendete Datenbank irrelevant. SAP-ABAP-Systeme auf beliebigen Datenbanken (einschließlich HANA) werden unterstützt. 
Das bedeutet auch, dass das Betriebssystem des SAP-Systems irrelevant ist - alle Betriebssysteme werden unterstützt.
SAP-Systeme, die auf Big Endian- und Little Endian-Hardware laufen, werden unterstützt.

SAP Release 4.6C und neuer werden unterstützt. Dazu gehören:<br/> 
* mySAP	
* SAP Application Server ABAP, Message Server, Router, Standalone Gateway
* SAP Business Suite 7 (CRM, SRM, SCM etc.)
* SAP Business All in One, CAR, APO, PI, IS-U etc.
* SAP BW 3.1 and later
* SAP BW/BI 7.x
* SAP BW/4HANA
* SAP ERP / ECC 5.0 / ECC 6.0 (including all EhPs)
* SAP R/3 Version 4.6C and later
* SAP S/4HANA

Die folgenden SAP Releases werden nur eingeschränkt unterstützt:
- SAP S/4HANA Cloud Extended Edition (EX)

{% include _content/de/einfuehrung/sap-misc.md %}
{% include _content/de/einfuehrung/operating-systems.md %}


### Prozessor-Kerne
- Minimum: 2 Kerne. 
Für jede weitere parallele Extraktion wird ein zusätzlicher Kern benötigt. 


### Prozessorgeschwindigkeit   
- Minimum: Prozessor: 1,4 GHz, empfohlen: 2,0 GHz oder schneller

### Hauptspeicher
- Minimum: 8 GB, empfohlen: 12 GB für bis zu 2 parallele Extraktionen.<br> 4 GB dedizierter Speicher durchschnittlich für jede zusätzliche parallele Extraktion.
Prüfen Sie den genauen Speicherbedarf einer Extraktion in Ihrem Szenario.

<!---Der Speicherverbrauch hängt von vielen Faktoren ab, einschließlich Komponententyp (d.h. Table, Extractor oder BW Query), Anzahl der Spalten und Anzahl der Zeilen in jedem Datenpaket (d.h. Paketgröße). <br> 
Beispielsweise benötigt die BW-Cube-Komponente für die Extraktion und Verarbeitung der Daten mehr Hauptspeicherplatz als z.B. die Tabellenkomponente für die gleiche Datenmenge.--->

### Festplattenspeicher
Für die Installation werden 150 MB Festplattenspeicher benötigt.
Bei manchen Destinationen kann zusätzlicher Speicherplatz benötigt werden.

### 64-Bit-Umgebung	
Das Produkt kann nur auf 64-Bit-Betriebssystemen installiert werden.
