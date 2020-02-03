---
ref: xi-requirements-and-installation-03
layout: page
title: Toolbox in Visual Studio
description: Toolbox in Visual Studio
product: xtract-is
parent: voraussetzungen-und-installation
permalink: /:collection/:path
weight: 3
lang: de_DE
old_url: /Xtract-IS-DE/default.aspx?pageid=toolbox-in-visual-studio-2005
---
### Xtract IS Komponenten in SSIS anzeigen
Nach erfolgreicher Installation von Xtract IS erscheinen die Xtract IS Komponenten automatisch als Datenfluss-Komponenten in der SSIS-Toolbox Ihres Visual Studio Integration Services Projekts.

![XIS_SSIS_Toolbox](/img/content/XIS_SSIS_Toolbox.png){:class="img-responsive"} <br>

{: .box-warning }
**Warnung! Xtract IS Komponenten nicht sichtbar**<br> Mit der aktuellen Version der SSDT für VS 2015 ist der *SQL Server vNext* oder *SQL Server 2017* standardmäßig als Zielumgebung für das Deploymnet von SSIS Projekten ausgewählt. Mit dieser Einstellung sind die Xtract IS Komponenten in der SSIS Toolbox nicht sichtbar. <br> Ändern Sie die Zielumgebung für das Deployment auf SQL Server 2016. Danach werden die Xtract IS Komponenten in der Toolbox angezeigt.

![XIS_deployment_target_version_vNext](/img/content/XIS_deployment_target_version_vNext.png){:class="img-responsive"}



