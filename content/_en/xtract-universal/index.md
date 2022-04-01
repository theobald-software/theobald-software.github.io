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
lang: en_GB
old_url: /Xtract-Universal-EN/
---

Welcome to the Online Help for Xtract Universal. 

Xtract Universal is an SAP Connector for data extraction from SAP to various target environments. The extracted data can than be further processed  e.g., 
in the context of business intelligence, data integration and data analytics.

### Available Components
<!--- Tabelle notwendig? Nicht vollständig nicht 100%ig korrekt. Pre-Sales fragen. Unterteilung in BW und ERP sinnvoll für den Kunden?--->
The following overview shows, which components are available to extract data from SAP systems. 
![XU-Components](/img/content/xu/xu_components.png){:class="img-responsive" width="800px" }

<!-- Auflistung der Komponenten mit der kurzen Beschreibung und dem Link zu den Inhalten-->

<!--- KE: wir könnten allerdings das so beschreiben, dass die als Orientierungshilfe gilt und auch andere Szenarien technisch möglich sind--->

### Extraction Types

Xtract Universal offers a set of nine extraction types to cover a range of demands of SAP data extraction.

- [**BAPI**](./bapis-and-function-modules) accesses BAPIs and RFC function modules.
- [**BW Cube**](./bw-infocubes-and-bex-queries) extracts data from SAP BW InfoCubes and BEx Queries.
- [**BW Hierarchy**](./bw-hierarchies) extracts Hierarchies from an SAP BW / BI system.
- [**DeltaQ**](./datasource-deltaq) extracts DataSources (OLTP) and extractors from ERP and ECC systems.
- [**ODP**](./odp) extracts data via the SAP Operational Data Provisioning (ODP) framework.
- [**Open Hub Services (OHS)**](./bw-open-hub-services) extracts InfoSpokes and OHS destinations. <!--Frage: kann man destinations extrahieren?-->
- [**Query**](./sap-queries) extracts ERP queries. **Note: not BEx queries supplied by BW Cube**.
- [**Report**](./abap-reports) extracts ABAP Reports.
- [**Table**](./table) extracts data from SAP tables and views; allows joining several tables on the SAP side.

Common scenarios when using the components depending on the type of the SAP source system:

| Extraction Type   | ERP/ ECC | BW |
|-------------|-----|----|
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

More information on functions of Xtract Universal is provided in the following sections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
