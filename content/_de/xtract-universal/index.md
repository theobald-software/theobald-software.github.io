---
ref: xtract-universal-01
layout: page
title: Xtract Universal
description: Xtract Universal
product: xtract-universal
parent: home
childidentifier: xtract-universal
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-Universal-DE/
---

Willkommen in der Online Help für Xtract Universal. 

Xtract Universal ist ein Werkzeug zur Datenextraktion aus SAP in verschiedene Zielumgebungen. Die extrahierten Daten können dann weiterverarbeitet werden, z.B. 
im Rahmen von Business Intelligence, Datenintegration und Datenanalyse. 


![XU-architecture](/img/content/xu/theobald-software-graphic.png){:class="img-responsive" width="600px"} 


### Verfügbare Komponenten

In der unteren Übersicht finden Sie, welche Komponente für die Datenextraktion aus einem SAP-System verwendet werden können. 

#### Extraktionstypen
Xtract Universal bietet einen Satz von neun Extraktionstypen, um eine Reihe von Anforderungen der SAP-Datenextraktion abzudecken.

Je nach Art des SAP-Quellsystems gibt es unterschiedliche Szenarien beim Einsatz der Komponenten:


| Komponente   | ERP | BW |
|-------------|:---:|:--:|
| Table       | X   | X  |
| BAPI        | X   | X  |
| Query       | X   |    |
| ABAP Report | X   |    |
| DeltaQ      | X   | X  |
| BW Cube     |     | X  |
| Hierarchy   |     | X  |
| OHS         |     | X  |
| ODP         | X   | X |

{: .box-note }
**Hinweis:** Weitere Szenarien und Kombinationen sind möglich.

### Extraktion aus ERP- / ECC-Systemen


- [**Table**](./table)  extrahiert Daten aus SAP-Tabellen und Views; ermöglicht das Zusammenführen mehrerer Tabellen auf der SAP-Seite.

- [**Table Join**](./table-join) -  ermöglicht das Joinen von mehreren SAP-Tabellen. Der Join-Prozess findet vollständig innerhalb des SAP-Systems statt, ohne dass einzelne Tabellen heruntergeladen werden müssen.ermöglicht das Joinen von mehreren SAP-Tabellen. Der Join-Prozess findet vollständig innerhalb des SAP-Systems statt, ohne dass einzelne Tabellen heruntergeladen werden müssen.<br>
**Hinweis: veraltete Komponente! Verwenden Sie die Table-Komponente**

- [**BAPI**](./bapis-and-function-modules) greift auf BAPIs und RFC-Funktionsmodule zu.

- [**Query**](./sap-queries) extrahiert ERP-Queries. **Hinweis: nicht die BEx-Queries von BW Cube**.

- [**Report**](./abap-reports) extrahiert ABAP Reports.

- [**DeltaQ**](./datasource-deltaq) extrahiert DataSources (OLTP) und Extraktoren aus dem ERP und ECC System.


### Extraktion aus BW-Systemen
- [**BW Cube**](./bw-infocubes-and-bex-queries) extrahiert Dateb aus SAP BW InfoCubes und BEx Queries.

- [**BW Hierarchy**](../bw-hierarchies) extrahiert Hierarchien aus SAP BW / BI Systemen.

- [**Open Hub Services (OHS)**](../bw-open-hub-services) extrahiert InfoSpokes und OHS Destinationen. <!--Frage: kann man destinations extrahieren?-->

- [**DeltaQ**](../datasource-deltaq) extrahiert Export DataSources.

Weitere Informationen zu den Funktionen von Xtract Universal finden Sie in den folgenden Abschnitten:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
