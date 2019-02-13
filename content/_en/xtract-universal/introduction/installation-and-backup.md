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

The installation program *XtractUniversalSetup.exe* is an industry standard installation routine that does nothing but copy all necessary files into the program directory and create a group with some shortcuts in the Windows program menu.
The setup installs the Visual C++ 2015 and 2013 runtime libraries. 

Please make sure that the .NET Framework 4.5.2 or higher is installed on your computer. If this is not the case, a warning will appear and the setup will be terminated. 
You will be redirected to the download page of the framework.

During setup, optional components can be selected for installation:

![XU-Setup](/img/content/XU-Setup.jpg){:class="img-responsive"}

**XtractDesigner.exe** 

Launches Xtract Universal Designer to create, test and monitor extraction.

**XtractService.exe**

The server that is installed and started by default as a Windows service. Usually the service does not have to be started manually. 

The service is installed during setup and starts when the operating system is booted. The service runs in the background.

**XtractConsole.exe**

Is the Xtract server that can be started as a console program for test purposes. For internal use only. Please do not use it!

The subdirectory *config* is created automatically with the first extraction and contains all extractions as well as the corresponding log files. 

**New Installation and Update**

A newer version can simply be installed over the old version. All settings and created objects are preserved. 

It is recommended to run a test on a non-productive environment and backup the complete program directory or at least the *config* subdirectory before reinstalling. 

**Backup**

All settings for extractions, sources, destinations, etc. are stored in the subdirectory *config*. It is recommended to make a backup of this directory at regular intervals. 

This allows you to easily switch back to the previous version of Xtract Universal.

**Version History**<br>
A list of the versions can be found in the [version history](https://kb.theobald-software.com/version-history/xtract-universal-version-history).