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
lang: en_GB
old_url: /Xtract-IS-EN/
---
Welcome to the Online Help for Xtract IS. 

Xtract IS is a plug-in for the [SQL Server Integration Services (SSIS)](https://docs.microsoft.com/en-us/sql/integration-services/sql-server-integration-services).
Xtract IS allows extracting data from SAP systems and writing data to SAP systems.

### Available Components

The Xtract IS offers you a total of 10 different Data Flow components for the SQL Server Integration Services.

![XIS-Architecture](/img/content/xis/architectures_xis_neu.png){:class="img-responsive"}


The overview below depicts the types of the Data Flow components.

| Name   | Data Flow Component Type | 
|-------------|:-----:|
| Table       | Source   |
| BAPI        | Transformation  | 
| Query       | Source   | 
| ABAP Report | Source   | 
| DeltaQ      | Source   | 
| BW Cube     | Source   |  
| Hierarchy   | Source |
| OHS         | Source  |  
| BW Loader   |  Destination   |
| ODP         | Source |

<!--Tabelle alphabetisch sortieren und Xtract vor jedem Namen einfügen-->

#### Extraction Types

- [**Table**](./table) extracts data from SAP tables and views; allows joining several tables on the SAP side.

- [**Table Join**](./table-join) -  allows to join several SAP tables. The Join-process takes place entirely within the SAP system without downloading single tables.<br>
**Note: obsolete component! Use Table component instead.**

- [**BAPI**](./bapi) accesses BAPIs and RFC function modules.

- [**Query**](./query) extracts ERP queries. **Note: not BEx queries supplied by BW Cube**.

- [**Report**](./report) extracts ABAP Reports.

- [**DeltaQ**](./deltaq) extracts DataSources (OLTP) and extractors from ERP and ECC systems.

- [**BW Cube**](./bw-cube) extracts data from SAP BW InfoCubes and BEx Queries.

- [**BW Hierarchy**](./hierarchy) extracts Hierarchies from an SAP BW / BI system.

- [**Open Hub Services (OHS)**](./open-hub-service-ohs) extracts InfoSpokes and OHS destinations. <!--Frage: kann man destinations extrahieren?-->

- [**BW Loader**](./bw-loader) loads data into SAP BW systems.
- [**ODP**](./odp) extracts data via the SAP Operational Data Provisioning (ODP) framework.


The online help for Xtract IS consists of the following sections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
