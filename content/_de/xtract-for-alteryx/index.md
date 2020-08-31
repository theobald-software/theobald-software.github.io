---
ref: home-8
layout: page
title: Xtract for Alteryx
description: Xtract for Alteryx main page
product: xtract-for-alteryx
parent: home
childidentifier: xtract-for-alteryx
permalink: /:collection/:path
weight: 1
lang: de_DE
---
Willkommen in der Online Help von Xtract for Alteryx.


Xtract for Alteryx ist ein Plug-In für den Alteryx Designer und Server.
Xtract for Alteryx ermöglicht es Daten aus dem SAP-System direkt innerhalb des Alteryx Designers in den Datenfluss einzubinden.

![XFA-Architecture](/img/content/xfa/Xtract_for_Alteryx.png){:class="img-responsive"}

### Verfügbare Komponenten
Die Xtract for Alteryx Komponentensuite bietet Ihnen insgesamt 5 unterschiedliche Komponenten für die SAP-Integration in Alteryx an.
Je nach Art des SAP-Quellsystems gibt es unterschiedliche Szenarien beim Einsatz der Komponenten:

- [**BAPI**](./bapi) greift auf BAPIs und RFC-Funktionsmodule zu.
- [**BW Cube**](./bw-cube) extrahiert Dateb aus SAP BW InfoCubes und BEx Queries.
- [**BW Hierarchy**](./bw-hierarchien) extrahiert Hierarchien aus SAP BW / BI Systemen.
- [**ODP**](./odp) extrahiert Daten über das SAP Operational Data Provisioning (ODP) Framework.
- [**Table**](./table)  extrahiert Daten aus SAP-Tabellen und Views; ermöglicht das Zusammenführen mehrerer Tabellen auf der SAP-Seite.

In der unten stehenden Übersicht sehen Sie, bei welcher Komponente Lese (R),- und Schreibrechte (W) zur Verfügung stehen. 

| Komponente | ERP | BW | 
|:------------:|:-----:|:----:|
| BAPI        | R/W  | R/W |
| BW Cube  |     | R  |
| BW Hierarchy   |     | R  | 
| ODP       | R   |  R  |
| Table       | R   | R  |

{: .box-note }
**Hinweis:** Weitere Szenarien und Kombinationen sind möglich.


Weitere Informationen zu den Funktionen von Xtract for Alteryx finden Sie in den folgenden Abschnitten:
{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}