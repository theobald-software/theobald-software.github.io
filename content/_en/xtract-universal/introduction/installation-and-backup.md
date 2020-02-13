---
ref: xu-introduction-03
layout: page
title: Installation and Backup
description: Installation and Backup
product: xtract-universal
parent: introduction
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=installation
---

The installation program *XtractUniversalSetup.exe* is an industry standard installation routine that copies all necessary files into the program directory and creates a group with shortcuts in the Windows program menu.

![XU-Setup](/img/content/xu/XU_Setup_1.png){:class="img-responsive"}

During setup, optional components can be selected for installation:

![XU-Setup](/img/content/xu/XU_Setup_2.png){:class="img-responsive"}

### XtractDesigner.exe

Launches Xtract Universal Designer to create, test and monitor extractions.

### XtractService.exe

The server that is installed and started by default as a Windows service. Usually the service does not have to be started manually. 

The service is installed during the setup and starts when the operating system is booted. The service runs in the background.

### XtractConsole.exe

{: .box-warning}
**Warning! Internal feature**
The option **XtractConsole** is for internal use only.<br>
Do not use this option!

Is the Xtract server that can be started as a console program for test purposes.
The subdirectory *config* is created automatically with the first extraction and contains all extractions as well as the corresponding log files. 

### New Installation and Update

{: .box-tip}
**Recommendation:** run a test on a non-productive environment and create a backup of the complete program directory or at least of the *config* subdirectory before reinstalling. 

A newer version can be installed over the older version. All settings and created objects are preserved. 

### Backup

{: .box-tip}
**Recommendation:** create a backup of the directory: `C:\Program Files\XtractUniversal\config` at regular intervals. 

All settings for extractions, sources, destinations, etc. are stored in the subdirectory *config*. 

Backup allows you to easily switch back to the previous version of Xtract Universal.

### Version History
A list of the versions can be found in the [version history](https://kb.theobald-software.com/version-history/xtract-universal-version-history).