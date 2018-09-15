---
layout: page
title: Installation
description: Installation
product: xtract-is
parent: requirements-and-installation
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=installation
---

**Normal Setup**

For normal setup please execute XtractISSetup.exe and follow the instructions of the setup program.  

During setup several DLLs are copied to special directories to make them work within the Integration Services environment. Copying and registering is done with the help of InstallXtractIS.exe.

**Silent Setup**

The setup program can also be started without the GUI. If you want to start it that way you have to use the switch /S . Using the switch /D you can set the installation path. 

You can find more settings for the setup on the following website (http://nsis.sourceforge.net/Docs/Chapter3.html#3.2.1).

**Important:** All switches are case sensitive.

**XtractLicenseManager**

You can transfer the licence file as an argument to the XtractLicenseManager. This file will be installed without a GUI. In case of an error a message box will pop up and a corresponding error code will be returned. 

**Blocking, Exit-Codes and authorization**

If you want the setup programm or the license manager to block the calling process  (e.g. a batch) until the installation has finished and to receive a correct exit code to check that the installation has finished correctly, you have to use the start statement with the /w switch.

**Important:** Both programs need administration rights.

**Examples:**

start /w XtractISSetup.exe /S
start /w XtractLicenseManager.exe "My License\XtractIS.License.json"
start /w XtractLicenseManager.exe XtractIS.License.json


The list below shows some of the files that are placed on your system during installation.

Directory \XtractIS\:

**ERPConnect35.dll**

contains backend functionality for SAP communication.

**XtractIS^.dll**

contains the kernel of the Xtract IS component.

**XtractIS^.GUI.dll**

contains the GUI components for Xtract IS.

**XtractIS^.ConnectionManager.dll**

contains the connection manager.

**XtractIS.License.json**

contains information about your license.

**^.txt**

contains templates for custom function modules, located in the ABAP folder.

**InstallXtractIS.exe**

console program for installing and registering the components on your system.

**XtractISConversionPreparer.exe**

Use this tool after upgrading your SSIS version (see chapter "SSIS Migration").

**Gacutil.exe**

this tool is for internal use only.

**gac-uninstall.bat**

this tool clears the GAC of all Xtract related components.

**XtractLicenseManager.exe**

a program to manage and view your licenses.

All dll files must be registered in the system's Global Assembly Cache GAC.