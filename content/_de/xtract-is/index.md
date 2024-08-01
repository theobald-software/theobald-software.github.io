---
ref: xtract-is-01
layout: page
title: Xtract IS
description: Xtract IS
product: xtract-is
parent: home
childidentifier: xtract-is
permalink: /:collection/:path
weight: 1
lang: de_DE
old_url: /Xtract-IS-DE/
---

{: .box-warning}
**Warnung: Veraltete Dokumentation!** <br>
Sie verwenden die alte Version der Online-Hilfe für Xtract IS.<br>
Verwenden Sie die *englischsprachige* Dokumentation im neuen [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).

Willkommen in der Online Help von Xtract IS.

Xtract IS ist ein Plug-in für die [SQL Server Integration Services (SSIS)](https://docs.microsoft.com/en-us/sql/integration-services/sql-server-integration-services).
Xtract IS ermöglicht die Extraktion von Daten aus SAP-Systemen und das Schreiben von Daten in SAP-Systeme.

### Verfügbare Komponenten
Die Xtract IS Komponentensuite bietet Ihnen insgesamt 10 unterschiedliche Komponenten für die SQL-Server-Integration-Services an.

![XIS-Architecture](/img/content/xis/architectures_xis_neu.png){:class="img-responsive"}

Die folgende Übersicht stellt die Typen der Data-Flow-Komponenten dar.

| Name   | Datenfluss-Komponententyp | 
|-------------|:-----:|
| BAPI        | Transformation  | 
| BW Cube     | Source   |  
| BW Hierarchy   | Source |
| BW Loader | Destination |
| DeltaQ      | Source   | 
| ODP         | Source |
| Open Hub Services (OHS) | Source  |  
| Query       | Source   | 
| Report | Source   | 
| Table       | Source   |

### Extraktionstypen

- [**BAPI**](./xtract-is-bapi) greift auf BAPIs und RFC-Funktionsmodule zu.
- [**BW Cube**](./bw-cube) extrahiert Daten aus SAP BW InfoCubes und BEx Queries.
- [**BW Hierarchy**](./hierarchy) extrahiert Hierarchien aus SAP BW / BI Systemen.
- [**BW Loader**](./bw-loader) lädt Daten in SAP BW-Systeme.
- [**DeltaQ**](./xtract-is-deltaq) extrahiert DataSources (OLTP) und Extraktoren aus dem ERP und ECC System.
- [**ODP**](./odp) extrahiert Daten über das SAP Operational Data Provisioning (ODP) Framework.
- [**Open Hub Services (OHS)**](./open-hub-service) extrahiert InfoSpokes und OHS Destinationen.
- [**Query**](./query) extrahiert ERP-Queries. **Hinweis: nicht die BEx-Queries von BW Cube.** 
- [**Report**](./report) extrahiert ABAP Reports.
- [**Table**](./xtract-is-table) extrahiert Daten aus SAP-Tabellen und Views; ermöglicht das Zusammenführen mehrerer Tabellen auf der SAP-Seite.

Die Online Help zu Xtract IS besteht aus den folgenden Abschnitten:

{% include _content/table-of-contents.html parent="xtract-is" collection=site.de %}
