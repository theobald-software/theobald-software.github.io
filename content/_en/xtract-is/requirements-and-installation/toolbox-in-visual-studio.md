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

After successfully installing Xtract IS the Xtract IS components are automatically available in the SSIS Toolbox of a Data Flow Task in your Visual Studio Integration Services Project.

![XIS_SSIS_Toolbox](/img/content/XIS_SSIS_Toolbox.jpg){:class="img-responsive" width="200px"}

**Attention:** With the latest version of SQL Server Data Tools for Visual Studio 2015 *SQL Server vNext* or *SQL Server 2017* will be the default selection for the Deployment Target Version for SSIS projects. With this setting, the Xtract IS components will not be visible in the SSIS toolbox. Please change the Deployment Target Version to *SQL Server 2016* to display the Xtract IS components in the toolbox.

![SSIS_Target_Server_Version](/img/content/SSIS_Target_Server_Version.jpg){:class="img-responsive" width="800px" }  

To get the Xtract IS components into the toolbox in Visual Studio 2008 or earlier within the Integration Service environment:

- In an open data flow task, right-click the toolbox and choose Select Items.
- In the new window, select the SSIS Data Flow Components tab.

If everything is installed correctly, the Xtract IS components are available there and must be marked. If you import the Xtract IS BW Loader component, it appears in the toolbox under Data Flow Targets (not under Sources like the others).

![Toolbox-01](/img/content/Toolbox-01.png){:class="img-responsive" width="800px"}
