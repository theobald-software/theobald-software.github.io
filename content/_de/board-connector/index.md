---
ref: board-connector-01
layout: page
title: BOARD Connector
description: BOARD Connector main page
product: board-connector
parent: home
childidentifier: board-connector
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /BOARD-Connector-DE/
---
Willkommen in der Online Help vom BOARD Connector.

Der BOARD Connector ist ein SAP Connector, der diverse SAP Objekte im Pull-Verfahren im BOARD Server verfügbar macht. 

### Verfügbare Komponenten


In der folgenen Übersicht finden Sie, welche Komponente für die Datenextraktion aus einem SAP-System verwendet werden können. 
![BOARD Connector-architecture](/img/content/board/Board.png)

### Extraktionstypen
BOARD Connector bietet einen Satz von neun Extraktionstypen, um eine Reihe von Anforderungen der SAP-Datenextraktion abzudecken.

Je nach Art des SAP-Quellsystems gibt es unterschiedliche Szenarien beim Einsatz der Komponenten:

- [**BAPI**](./bapis-und-funktionsbausteine) greift auf BAPIs und RFC-Funktionsmodule zu.
- [**BW Cube**](./bw-infocube-und-bex-queries) extrahiert Dateb aus SAP BW InfoCubes und BEx Queries.
- [**BW Hierarchy**](./bw-hierarchien) extrahiert Hierarchien aus SAP BW / BI Systemen.
- [**DeltaQ**](./datasource-deltaq) extrahiert DataSources (OLTP) und Extraktoren aus dem ERP und ECC System.
- [**ODP**](./odp) extrahiert Daten über das SAP Operational Data Provisioning (ODP) Framework.
- [**Open Hub Services (OHS)**](./bw-open-hub-service) extrahiert InfoSpokes und OHS Destinationen. <!--Frage: kann man destinations extrahieren?-->
- [**Query**](./sap-queries) extrahiert ERP-Queries. **Hinweis: nicht die BEx-Queries von BW Cube**.
- [**Report**](./abap-reports-ansteuern) extrahiert ABAP Reports.
- [**Table**](./table)  extrahiert Daten aus SAP-Tabellen und Views; ermöglicht das Zusammenführen mehrerer Tabellen auf der SAP-Seite.


| Extraktionstyp   | ERP | BW |
|-------------|:---:|:--:|
| BAPI        | X   | X  |
| BW Cube     |     | X  |
| BW Hierarchy   |     | X  |
| DeltaQ      | X   | X  |
| ODP         | X   | X |
| OHS         |     | X  |
| Query       | X   |    |
| Report | X   |    |
| Table       | X   | X  |


{: .box-note }
**Hinweis:** Weitere Szenarien und Kombinationen sind möglich.


Weitere Informationen zu den Funktionen von BOARD Connector finden Sie in den folgenden Abschnitten:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
