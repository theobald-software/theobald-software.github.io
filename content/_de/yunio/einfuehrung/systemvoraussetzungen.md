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

{% include _content/de/einfuehrung/sap-authentication-xtract.md %}
{% include _content/de/einfuehrung/sap-misc.md %}
{% include _content/de/einfuehrung/operating-systems.md %}

### Unterstützte Webbrowser

yunIO unterstützt die aktuellen Versionen folgender Webbrowser:
- Firefox 
- Chrome
- Edge
- Safari

### Prozessor-Kerne
- Minimum: 2 Kerne. 


### Prozessorgeschwindigkeit   
- Minimum: Prozessor: 1,4 GHz, empfohlen: 2,0 GHz oder schneller

### Hauptspeicher
- Minimum: 8 GB

### Festplattenspeicher
Für die Installation werden 70 MB Festplattenspeicher benötigt.

### 64-Bit-Umgebung	
Das Produkt kann nur auf 64-Bit-Betriebssystemen installiert werden.

### Bildschirmauflösung
Das Produkt unterstützt eine Auflösung von min. 1920x1080x1.25, wobei 1.25 für die Bildschirmskalierung steht.
