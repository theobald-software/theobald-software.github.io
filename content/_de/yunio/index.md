---
ref: yunio-01
layout: page
title: YunIO
description: YunIO
product: yunio
parent: home
childidentifier: yunio
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/
---

Willkommen in der Online Help für YunIO. 

YunIO ist ein Konnektor der eine Konfigurationsplattform zum Einrichten der Konnektivität zwischen SAP- und Cloud-Anwendungen zur Verfügung stellt.<br>
Der Dienst ermöglicht eine einfache Integration von SAP Daten und Geschäftsprozessen in unterschiedliche Plattformen und Anwendungen.<br>
Die extrahierten Daten können dann weiterverarbeitet werden, z.B. im Rahmen von Business Intelligence, Datenintegration und Datenanalyse. 

### Software-Architektur 

Bei YunIO handelt es sich um einen Windows-Dienst mit einer eingebetteten Web-UI.<br>

Der YunIO-Dienst wird auf einer lokalen oder Cloud-gehosteten Windows-Serverumgebung installiert. Der Zugriff auf die Web-UI erfolgt über einen Browser Ihrer Wahl.<br>
Eine Azure Relay-Registrierung kann als sicherer Gateway verwendet werden, um das lokale SAP-System mit der jeweiligen Cloud-Anwendung zu verbinden.

![YunIO-Components](/img/content/xu/xu_components.png){:class="img-responsive" width="800px" }

### Extraktionstypen

YunIO bietet zwei Extraktionstypen, um eine Reihe von Anforderungen der SAP-Datenextraktion abzudecken.

- [**Funktionsbausteine**](./bapis-und-funktionsbausteine) greift auf BAPIs und RFC-Funktionsbausteine zu.
- [**SAP Table und Views**](./table) extrahiert Daten aus SAP-Tabellen und Views; ermöglicht das Zusammenführen mehrerer Tabellen auf der SAP-Seite.

