---
ref: yunio-01
layout: page
title: yunIO
description: yunIO
product: yunio
parent: home
childidentifier: yunio
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/
---

Willkommen in der Online Help für yunIO. 

yunIO ist ein Konnektor, der eine Konfigurationsplattform zum Einrichten einer Verbindung zwischen SAP- und Cloud-Anwendungen zur Verfügung stellt.<br>
Der Dienst ermöglicht eine einfache Integration von SAP Daten und Geschäftsprozessen in unterschiedliche Plattformen und Anwendungen.<br>
Die extrahierten Daten können dann weiterverarbeitet werden, z.B. im Rahmen von Business Intelligence, Datenintegration und Datenanalyse. 

### Software-Architektur 

Bei yunIO handelt es sich um einen Windows-Dienst mit einer eingebetteten Web-UI.<br>

Der yunIO-Dienst wird auf einer lokalen oder Cloud-gehosteten Windows-Serverumgebung installiert. Der Zugriff auf die Web-UI erfolgt über einen Browser Ihrer Wahl.<br>
Eine Azure Relay-Registrierung kann als sicherer Gateway verwendet werden, um das lokale SAP-System mit der jeweiligen Cloud-Anwendung zu verbinden.

![yunIO-Components](/img/content/yunio/theobald-software_architecture_yunio.png){:class="img-responsive" width="800px" }

### Extraktionstypen

yunIO bietet drei Extraktionstypen, um eine Reihe von Anforderungen der SAP-Datenextraktion abzudecken.

- [**SAP Table und Views**](./table-and-views) extrahiert Daten aus SAP-Tabellen und Views; ermöglicht das Zusammenführen mehrerer Tabellen auf der SAP-Seite.
- [**Funktionsbausteine / BAPIs**](./bapis-and-function-modules) greift auf BAPIs und RFC-Funktionsbausteine zu.
- [**Transaktionen**](./transactions) führt SAP-Transaktionen direkt aus yunIO aus.

