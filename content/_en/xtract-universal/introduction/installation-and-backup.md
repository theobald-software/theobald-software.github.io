---
ref: xu-introduction-02
layout: page
title: Installation and Backup
description: Installation and Backup
product: xtract-universal
parent: introduction
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=installation
---

The installer is an industry-standard installation routine that copies all necessary files into the program directory 
and creates a menu item for Xtract Universal with a few shortcuts.
Please make sure, you have .NET framework 4.5.2 or higher installed on your system, prior to executing the Xtract Universal setup.
The setup will display a warning and quit if this framework is not installed. You will be redirected to the framework's download page.

During the setup, you can check optional components to be installed or actions to be performed.

![XU-Setup](/img/content/XU-Setup.jpg){:class="img-responsive"}

In the installation folder you would find the following executables:

**XtractDesigner.exe**<br> 
Starts the Xtract Universal Designer. This is the UI you use, for creating extractions, test extractions, monitor extractions, etc..

**XtractService.exe**<br> 
Is the Xtract Server that can be started as a Windows service. Usually, you don't need to start this service manually. It will be installed as a Windows Service with the XU setup and will be automatically started on OS boot. Runs in the background.

**XtractConsole.exe**<br>
Is the Xtract server that can be started as a console program. This file is meant for internal purposes only.
Please don't use! (If you do, the XtractService might not start. In this case, end the XtractConsole process in the Windows Task Manager)


**New Installation and Update**<br>
A newer version can be installed without uninstalling the older version. All settings and created objects (extractions, connections etc.) remain. 

Before installing a new version, we recommend testing on a non-production environment and creating a *backup of the installation directory* or of the config subdirectory. 

**Backup**<br>
All settings related to extraction, source, destination, etc. are stored in the *config* subdirectory. We recommend regular backups of this folder. This allows you to easily revert to the previous version of Xtract Universal if needed.

**Version History**<br>
A list of the versions can be found in the [version history](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/86/52/xtract-universal-version-history).