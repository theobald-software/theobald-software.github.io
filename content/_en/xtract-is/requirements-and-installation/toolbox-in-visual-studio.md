---
ref: xi-requirements-and-installation-03
layout: page
title: Toolbox in Visual Studio
description: Toolbox in Visual Studio
product: xtract-is
parent: requirements-and-installation
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=toolbox-in-visual-studio
---
### Displaying the Xtract IS components within SSIS
After a successful installation of the Xtract IS, the Xtract IS components are automatically available in the SSIS Toolbox of a Data Flow Task in your Visual Studio Integration Services project.

![XIS_SSIS_Toolbox](/img/content/XIS_SSIS_Toolbox.png){:class="img-responsive"}<br>

{: .box-warning }
**Warning! Xtract IS components not visible**<br>*SQL Server vNext* or *SQL Server 2017* will be the default selection for the Deployment Target Version for SSIS projects with the latest version of SQL Server Data Tools for Visual Studio 2015. With this setting, the Xtract IS components will not be visible in the SSIS toolbox.<br> Change the Deployment Target Version to *SQL Server 2016* to display the Xtract IS components in the toolbox.

![XIS_deployment_target_version_vNext](/img/content/XIS_deployment_target_version_vNext.png){:class="img-responsive"}
