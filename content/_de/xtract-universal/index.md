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

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract Universal.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract Universal HelpCenter](https://helpcenter.theobald-software.com/xtract-universal/documentation/introduction/).

Willkommen in der Online Help für Xtract Universal. 

Xtract Universal ist ein SAP Connector zur Datenextraktion aus SAP in verschiedene Zielumgebungen. Die extrahierten Daten können dann weiterverarbeitet werden, z.B. 
im Rahmen von Business Intelligence, Datenintegration und Datenanalyse. 

### Verfügbare Komponenten

Xtract Universal bietet einen Satz von neun Extraktionstypen, um eine Reihe von Anforderungen der SAP-Datenextraktion abzudecken.
In der folgenen Übersicht finden Sie, welche Komponente für die Datenextraktion aus einem SAP-System verwendet werden können. 
![XU-Components](/img/content/xu/xu_components.png){:class="img-responsive" width="800px" }

Je nach Art des SAP-Quellsystems gibt es unterschiedliche Szenarien beim Einsatz der Komponenten:

- [**BAPI**](./bapis-und-funktionsbausteine) greift auf BAPIs und RFC-Funktionsmodule zu.
- [**BW Cube**](./bw-infocubes-und-bex-queries) extrahiert Daten aus SAP BW InfoCubes und BEx Queries.
- [**BW Hierarchy**](./bw-hierarchien) extrahiert Hierarchien aus SAP BW / BI Systemen.
- [**DeltaQ**](./datasource-deltaq) extrahiert DataSources (OLTP) und Extraktoren aus dem ERP und ECC System.
- [**ODP**](./odp) extrahiert Daten über das SAP Operational Data Provisioning (ODP) Framework.
- [**Open Hub Services (OHS)**](./bw-open-hub-services) extrahiert InfoSpokes und OHS Destinationen. <!--Frage: kann man destinationen extrahieren?-->
- [**Query**](./sap-queries) extrahiert ERP-Queries. **Hinweis: nicht die BEx-Queries von BW Cube**.
- [**Report**](./report-abap-reports-ansteuern) extrahiert ABAP Reports.
- [**Table**](./table) extrahiert Daten aus SAP-Tabellen und Views; ermöglicht das Zusammenführen mehrerer Tabellen auf der SAP-Seite.
- [**TableCDC**](./table-cdc) extrahiert Delta-Inhalte von SAP-Tabellen und Views.


| Komponente   | ERP | BW |
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
| TableCDC       | X   | X  |

{: .box-note }
**Hinweis:** Weitere Szenarien und Kombinationen sind möglich.

*****

Weitere Informationen zu den Funktionen von Xtract Universal finden Sie in den folgenden Abschnitten:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.de %}
