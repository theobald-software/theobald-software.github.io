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
lang: en_GB
---
Welcome to the Online Help of Xtract for Alteryx.


Xtract for Alteryx is a plug-in for [Alteryx Designer and Server](https://help.alteryx.com/). 
Xtract for Alteryx enables integrating data from the SAP system into the data flow of your Alteryx solution.

### Available Components

![XFA-Architecture](/img/content/xfa/Xtract_for_Alteryx.png){:class="img-responsive"}

{: .box-tip }
**Tip:** For a short introduction into the product, see [Getting Started with Alteryx](./getting-started).


### Extraction Types
The following extraction types  are available within Xtract for Alteryx:
![Xfa_components](/img/content/xfa/xfa_components_overview.png){:class="img-responsive"}

- [**BAPI**](./bapi) - calls BAPIs and RFC function modules and can be used for *read* and *write* access to SAP.
- [**BW Cube**](./bw-cube) - extracts data from BW Queries and BW Cubes, MultiProviders and other InfoProviders.
- [**BW Hierarchy**](./bwhierarchy) - extracts hierarchies from SAP BW systems.
- [**ODP**](./odp) -  extracts data from DataSources, CDS views, BW objects, and HANA Views using Operational Data Provisioning (ODP) framework.
- [**Report**](./reports) - extracts data from most standard and custom ABAP reports and SAP transactions.
- [**Table**](./table) - extracts data from SAP tables and views; allows joining several tables on the SAP side.

{: .box-note }
**Note:** An [SAP Connection](./introduction/sap-connection) is a requirement for using any of Xtract for Alteryx components.

Depending on the type of SAP source system, there are different scenarios when using the components:
The overview below shows you for which component read (R) and write (W) rights are available.  

| Component | ERP | BW | 
|:------------|:-----:|:----:|
| BAPI        | R/W  | R/W |
| BW Cube  |     | R  |
| BW Hierarchy   |     | R  | 
| Report   |   R  | R  | 
| Table       | R   | R  | 


{: .box-note }
**Note:** Further scenarios and combinations are possible.

More information on functions of Xtract for Alteryx is provided in the following sections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}