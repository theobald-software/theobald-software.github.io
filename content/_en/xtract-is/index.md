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

Welcome to the Online Help of Xtract IS.

Xtract IS is a plug-in for the [SQL Server Integration Services (SSIS)](https://docs.microsoft.com/en-us/sql/integration-services/sql-server-integration-services).
Xtract IS allows extracting data from SAP systems and writing data to SAP systems.

### Available Components

The Xtract IS offers you a total of 10 different Data Flow components for the SQL Server Integration Services.

![XIS-Architecture](/img/content/xis/architectures_xis_neu.png){:class="img-responsive"}


The overview below depicts the types of the Data Flow components.

| Name   | Data Flow Component Type | 
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


### Extraction Types

- [**BAPI**](./bapi) accesses BAPIs and RFC function modules.
- [**BW Cube**](./bw-cube) extracts data from SAP BW InfoCubes and BEx Queries.
- [**BW Hierarchy**](./hierarchy) extracts Hierarchies from an SAP BW / BI system.
- [**BW Loader**](./bw-loader) loads data into SAP BW systems.
- [**DeltaQ**](./deltaq) extracts DataSources (OLTP) and extractors from ERP and ECC systems.
- [**ODP**](./odp) extracts data via the SAP Operational Data Provisioning (ODP) framework.
- [**Open Hub Services (OHS)**](./open-hub-service-ohs) extracts InfoSpokes and OHS destinations. <!--Frage: kann man destinations extrahieren?-->
- [**Query**](./query) extracts ERP queries. **Note: not BEx queries supplied by BW Cube**.
- [**Report**](./report) extracts ABAP Reports.
- [**Table**](./table) extracts data from SAP tables and views; allows joining several tables on the SAP side.

The online help for Xtract IS consists of the following sections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
