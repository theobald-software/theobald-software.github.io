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
### Architecture<br>
Xtract IS is a plug-in for the SQL Server Integration Services (SSIS). It cannot be used outside SSIS, 

so that a SQL Server license is required, even if the SQL Server database is not used. 

The Xtract IS component suite offers you a total of 10 different modules for the SQL Server integration services.

This provides you with the complete range of data extraction for different SAP objects.

![XIS-Architecture](/img/content/xis/architectures_xis_neu.png){:class="img-responsive"}


### Using the components<br>
In the overview below you can see for which components read (R) and write (W) rights are available. 

The required license for using the different components in SAP ERP and SAP BW can also be found in the table.

| Component   | ERP | BW | Enterprise <br> License | Ultimate <br> License |
|-------------|-----|----|--------------------|------------------|
| Table       | R   | R  | X                  | X                |
| Table Join  | R   | R  |                    | X                |
| BAPI        | R/W  | R/W | X                  | X                |
| Query       | R   |    | X                  | X                |
| ABAP Report | R   |    |                    | X                |
| DeltaQ      | R   | R  |                    | X                |
| BW Cube     |     | R  | X                  | X                |
| Hierarchy   |     | R  |                    | X                |
| OHS         |     | R  |                    | X                |
| BW Loader   |     | W  |                    | X                | 
| ODP | R | R |  | X |

Here you can find the following chapters:

{% include _content/table-of-contents.html parent=page.childidentifier collection=site.en %}
