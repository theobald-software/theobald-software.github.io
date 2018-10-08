---
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

Nach erfolgreicher Installation von Xtract IS erscheinen die Xtract IS-Komponenten automatisch als Datenfluss-Komponenten in der SSIS-Toolbox Ihres Visual Studio Integration Services Projekts.

![XIS_SSIS_Toolbox](/img/content/XIS_SSIS_Toolbox.jpg){:class="img-responsive"}

**Achtung:** Mit der aktuellen Version der SSDT für VS 2015 ist der SQL Server vNext standardmäßig als Zielumgebung für das Deploymnet von SSIS Projekten ausgewählt. Mit dieser Einstellung sind die Xtract IS Komponenten in der SSIS Toolbox nicht sichtbar.
Bitte ändern Sie die Zielumgebung für das Deployment auf SQL Server 2016. Danach werden die Xtract IS Komponenten in der Toolbox angezeigt.

![XIS_deployment_target_version_vNext](/img/content/XIS_deployment_target_version_vNext.png){:class="img-responsive"}

Um die Xtract IS Komponenten in Visual Studio 2008 oder früher innerhalb der Integration Service Umgebung in die Toolbox zu bekommen, klicken Sie in einem geöffneten Datenflusstask mit der rechten Maustaste auf die Toolbox und wählen Sie *Elemente Auswählen*. Wählen Sie in dem neuen Fenster den Reiter *SSIS Datenflusskomponenten*. Wenn alles richtig installiert ist, stehen dort die Xtract IS Komponenten zur Verfügung und müssen markiert werden. Falls Sie die Komponente Xtract IS BW Loader importieren, erscheint diese in der Toolbox unter Datenflussziele (nicht unter Quellen wie die anderen).

![Toolbox-01](/img/content/Toolbox-01.png){:class="img-responsive"}

