---
ref: xu-ssrs-04
layout: page
title: SSRS in Visual Studio
description: SSRS in Visual Studio
product: xtract-universal
parent: ssrs
permalink: /:collection/:path
weight: 4
lang: en_GB
progressstate: 5
---

### Create an SSRS Extraction in XU Designer


### Add an SSRS Extraction as a Data Source in Visual Studio

1. Create a new "Report Server Project". If *Reporting Services* is not available, check if the [*Microsoft Reporting Services Projects* plugin](./requirements#installation) version 2.6.11 or higher is installed.
![Destination-settings](/img/content/xu/ssrs/New-Project.png){:class="img-responsive"}
2. Add a new data source by right-clicking **Shared Data Sources** in the *Solution Explorer*. A window "Shared Data Source Properties" opens.
3. Enter a name for the data source (1).
4. Select *Xtract Universal* as the data source *Type* from the dropdown menu (2). If *Xtract Universal* is not available or displayed in all caps, check if Xtract Universal and *Microsoft Reporting Services Projects* plugin version 2.6.11 or higher are both installed.
5. Enter a connection string (3). xxx
![Destination-settings](/img/content/xu/ssrs/Shared-Data-Source-Properties.png){:class="img-responsive"}
6. Optional: If you use [*Windows Authentication* or other credentials](../../security/user-management), go to *Credentials* (4) and enter your data.
7. Confirm your Input with **[OK]**.

Was tun, wenn Xtract Universal nciht in dropdown liste auftaucht: ----

### Use the Data Source to create a new Report