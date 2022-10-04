---
ref: board-connector-01
layout: page
title: Board Connector
description: Board Connector main page
product: board-connector
parent: home
childidentifier: board-connector
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /BOARD-Connector-EN/
---
Welcome to the Online Help of the Board Connector.

The Board Connector is a SAP Connector that makes various SAP objects available in the Board Server in pull mode.

### Available Components

The following overview shows, which components are available to extract data from SAP systems. 
![Board Connector-architecture](/img/content/board/Board.png)

### Extraction Types

Board Connector offers a set of nine extraction types to cover a range of demands of SAP data extraction.

- [**BAPI**](./bapis-and-function-modules) accesses BAPIs and RFC function modules.
- [**BW Cube**](./bw-infocubes-and-bex-queries) extracts data from SAP BW InfoCubes and BEx Queries.
- [**BW Hierarchy**](./bw-hierarchies) extracts Hierarchies from an SAP BW / BI system.
- [**DeltaQ**](./datasource-deltaq) extracts DataSources (OLTP) and extractors from ERP and ECC systems.
- [**ODP**](./odp) extracts data via the SAP Operational Data Provisioning (ODP) framework.
- [**Open Hub Services (OHS)**](./bw-open-hub-services) extracts InfoSpokes and OHS destinations. <!--Frage: kann man destinations extrahieren?-->
- [**Query**](./sap-queries) extracts ERP queries. **Note: not BEx queries supplied by BW Cube**.
- [**Report**](./abap-reports) extracts ABAP Reports.
- [**Table**](./table) extracts data from SAP tables and views; allows joining several tables on the SAP side.

| Extraction Type   | ERP / ECC | BW |
|-------------|:---:|:--:|
| BAPI        | X   | X  |
| BW Cube     |     | X  |
| DeltaQ      | X   | X  |
| BW Hierarchy   |     | X  |
| ODP         | X   | X |
| OHS         |     | X  |
| Query       | X   |    |
| Report | X   |    |
| Table       | X   | X  |

{: .box-note }
**Note:** Further scenarios and combinations are possible.

More information on functions of Board Connector is provided in the following sections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
