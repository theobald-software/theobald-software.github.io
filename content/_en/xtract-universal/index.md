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

Xtract Universal is a tool for data extraction from SAP to various target environments. The extracted data can than be further processed  e.g., 
in the context of business intelligence, data integration and data analytics.

![XU-architecture](/img/content/xu/theobald-software-graphic.png){:class="img-responsive" width="600px"} 

### Available Components
<!--- Tabelle notwendig? Nicht vollständig nicht 100%ig korrekt. Pre-Sales fragen. Unterteilung in BW und ERP sinnvoll für den Kunden?--->
The following overview shows, which components are available to extract data from SAP systems. 

<!-- Auflistung der Komponenten mit der kurzen Beschreibung und dem Link zu den Inhalten-->

<!--- KE: wir könnten allerdings das so beschreiben, dass die als Orientierungshilfe gilt und auch andere Szenarien technisch möglich sind--->

#### Extraction Types

Xtract Universal offers a set of ten extraction types to cover a range of demands of SAP data extraction.

Common scenarios when using the components depending on the type of the SAP source system:

| Component   | ERP/ ECC | BW |
|-------------|-----|----|
| SAP Table or Views | X   | X  |
| SAP Table Join  | X   | X  |
| BAPI        | X   | X  |
| Query       | X   |    |
| ABAP Report | X   |    |
| DeltaQ      | X   | X  |
| BW Cube     |     | X  |
| Hierarchy   |     | X  |
| OHS         |     | X  |
| ODP         | X   | X  |

{: .box-note }
**Note:** Further scenarios and combinations are possible.


### Extraction from ERP / ECC systems

![xu-arch-03](/img/content/xu/erp_extraction_xu.png){:class="img-responsive" width="600px"}

- [**SAP Table or Views**](./table) extracts Tables and Views from SAP.

- [**SAP Table Join**](./table-join) -  allows to join several SAP tables. The Join-process takes place entirely within the SAP system without downloading single tables.<br>
**Note: obsolete component!**

- [**BAPIs and Function Modules**](./bapis-and-function-modules) accesses BAPIs and RFC function modules.

- [**SAP Queries**](./sap-queries) extracts ERP queries. **Note: not BEx queries supplied by BW Cube**.

- [**ABAP Reports**](./abap-reports) extracts ABAP Reports.

- [**Datasource DeltaQ**](./datasource-deltaq) extracts DataSources (OLTP) and extractors from ERP and ECC systems.

### Extraction from BW systems

![xu-arch-04](/img/content/xu/bw_extractions.png){:class="img-responsive" width="600px"}

- [**BW InfoCubes and BEx Queries**](./bw-infocubes-and-bex-queries) extracts data from SAP BW InfoCubes and BEx Queries.

- [**BW Hierarchies**](../bw-hierarchies) extracts Hierarchies from an SAP BW / BI system.

- [**BW Open Hub Services (OHS)**](../bw-open-hub-services) extracts InfoSpokes and OHS destinations. <!--Frage: kann man destinations extrahieren?-->

- [**Datasource DeltaQ**](../datasource-deltaq) extracts Export DataSources.



{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
