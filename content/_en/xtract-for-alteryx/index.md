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


Xtract for Alteryx is a plug-in for Alteryx Designer and Server. 
Xtract for Alteryx enables integrating data from the SAP system into the data flow of your Alteryx solution.

![XFA-Architecture](/img/content/xfa/Xtract_for_Alteryx.png){:class="img-responsive"}

### Xtract for Alteryx Components
The following components are available within Xtract for Alteryx:
![Xfa_components](/img/content/xfa/xfa_components_overview.png){:class="img-responsive"}

- [Xtract Table](../table) - extracts data from SAP tables and views; allows joining several tables on the SAP side
- [Xtract BAPI](../bapi) - calls BAPIs and RFC function modules and can be used for *read* and *write* access to SAP
- [Xract ODP](../odp) -  extracts data from DataSources, CDS views, BW objects, and HANA Views using Operational Data Provisioning (ODP) framework
- [Xtract Cube](../bw-cube) - extracts data from BW Queries and BW Cubes, MultiProviders and other InfoProviders
- [Xtract Hierarchy](../bwhierarchy) - extracts hierarchies from SAP BW systems

{: .box-note }
**Note:** An [SAP Connection](.getting-started/sap-connection) is a requirement for using any of Xtract for Alteryx components.

The overview below shows you for which component read (R) and write (W) rights are available.  

<<<<<<< Updated upstream
| Component | ERP | BW | 
|:------------:|:-----:|:----:|
| BAPI        | R/W  | R/W |
| BW Cube  |     | R  |
| BW Hierarchy   |     | R  | 
=======
| Komponente | ERP | BW | 
|:------------|:-----:|:----:|
| Table       | R   | R  | 
| Table Join  | R   | R  | 
| Function/BAPI        | R/W  | R/W |
>>>>>>> Stashed changes
| ODP       | R   |  R  |
| Table       | R   | R  |


{: .box-note }
**Note:** Further scenarios and combinations are possible.

More information on functions of Xtract for Alteryx is provided in the following sections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}