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


Xtract for Alteryx ist ein Plug-In für den [Alteryx Designer und Server](https://help.alteryx.com/).
Xtract for Alteryx ermöglicht es Daten aus dem SAP-System direkt innerhalb des Alteryx Designers in den Datenfluss einzubinden.

### Verfügbare Komponenten

![XFA-Architecture](/img/content/xfa/Xtract_for_Alteryx.png){:class="img-responsive"}


{: .box-tip }
**Tipp:** Eine kurze Einführung in das Produkt finden Sie unter [Erste Schritte mit Alteryx](./erste-schritte).


### Extraktionstypen
Die folgenden Extraktionstypen sind innerhalb von Xtract for Alteryx verfügbar:

![Xfa_components](/img/content/xfa/xfa_components_overview.png){:class="img-responsive"}

- [**BAPI**](./bapis-und-funktionsbausteine) greift auf BAPIs und RFC-Funktionsmodule zu.
- [**BW Cube**](./bw-cube) extrahiert Daten aus SAP BW InfoCubes und BEx Queries.
- [**BW Hierarchy**](./bw-hierarchien) extrahiert Hierarchien aus SAP BW / BI Systemen.
- [**ODP**](./odp) extrahiert Daten über das SAP Operational Data Provisioning (ODP) Framework.
- [**Report**](./reports) extrahiert Daten der meisten Standard und benutzerdefineirten ABAP Reports und SAP Transaktionen.
- [**Table**](./table)  extrahiert Daten aus SAP-Tabellen und Views; ermöglicht das Zusammenführen mehrerer Tabellen auf der SAP-Seite.

{: .box-note }
**Hinweis:** Eine [SAP-Verbindung](./einfuehrung/sap-verbindung) ist eine Voraussetzung für die Verwendung der Komponenten von Xtract for Alteryx.


Je nach Art des SAP-Quellsystems gibt es unterschiedliche Szenarien beim Einsatz der Komponenten:

In der unten stehenden Übersicht sehen Sie, bei welcher Komponente Lese (R),- und Schreibrechte (W) zur Verfügung stehen. 

| Komponente | ERP | BW | 
|:------------|:-----:|:----:|
| BAPI        | R/W  | R/W |
| BW Cube  |     | R  |
| BW Hierarchy   |     | R  | 
| Table       | R   | R  | 
| Table Join  | R   | R  | 


{: .box-note }
**Hinweis:** Weitere Szenarien und Kombinationen sind möglich.


Weitere Informationen zu den Funktionen von Xtract for Alteryx finden Sie in den folgenden Abschnitten:
{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}