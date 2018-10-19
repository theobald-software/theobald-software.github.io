---
ref: bc-introduction-02
layout: page
title: Installation and Backup
description: Installation and Backup
product: board-connector
parent: introduction
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=installation1
---

The installer is an industry-standard installation routine that copies all necessary files into the program directory 
and creates a menu item for BOARD with a few shortcuts.<br>
The installer will silently install the Visual C++ 2005 Runtime libraries.

**BCConsole.exe**

is the BOARD Connector server that can be started as a console program.

**BCDesigner.exe**

is the BOARD Connector Designer.

**BCService.exe**

is the BOARD Connector Server that can be started as a Windows service.

**Installutil.exe**

is a tool to register the Server as a Windows service.

The subdirectory config is created automatically with the first extraction and contains all extractions and log files.

**New Installation**<br>
A newer version can be installed without uninstalling the older version. All settings and created objects remain.
Before installing a new version, we recommend creating a backup of the installation directory or of the config subdirectory. This allows you to easily revert to the previous version of the BOARD Connector if needed.


**Backup**<br>
All settings related to extraction, source, destination, etc. are stored in the config subdirectory. We recommend regular backups of this folder. 