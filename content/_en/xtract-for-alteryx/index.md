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

### Available Components
The Xtract for Alteryx component suite offers you a total of 5 different components for SAP integration in Alteryx.
Common scenarios when using the components depending on the type of the SAP source system:

- [**BAPI**](./bapis-and-function-modules) accesses BAPIs and RFC function modules.
- [**BW Cube**](./bw-infocubes-and-bex-queries) extracts data from SAP BW InfoCubes and BEx Queries.
- [**BW Hierarchy**](./bw-hierarchies) extracts Hierarchies from an SAP BW / BI system.
- [**ODP**](./odp) extracts data via the SAP Operational Data Provisioning (ODP) framework.
- [**Table**](./table) extracts data from SAP tables and views; allows joining several tables on the SAP side.


The overview below shows you for which component read (R) and write (W) rights are available.  

| Component | ERP | BW | 
|:------------:|:-----:|:----:|
| BAPI        | R/W  | R/W |
| BW Cube  |     | R  |
| BW Hierarchy   |     | R  | 
| ODP       | R   |  R  |
| Table       | R   | R  |


{: .box-note }
**Note:** Further scenarios and combinations are possible.

More information on functions of Xtract for Alteryx is provided in the following sections:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}