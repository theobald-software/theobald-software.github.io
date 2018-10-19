---
ref: xr-requirements-and-installation-02
layout: page
title: Installation
description: Installation
product: xtract-rs
parent: requirements-and-installation
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-RS-EN/default.aspx?pageid=installation
---

The list below shows the files that are placed on your system during installation.

Directory [Program Files]\XtractRS\:

**ERPConnect20.dll**<br>
contains backend functionality for SAP communication.

**XtractRS.DataExtension.dll**<br>
contains the kernel of the Xtract RS component.

**XtractRS.License.dll**<br>
contains information about your license.

**^.txt**<br>
contains templates for custom function modules.

**InstallXtractRS.exe**<br>
is a console program for installing and registrating the components on your system.

**Gacutil.exe**<br>
is a tool for internal use only.

**XtractLicenseManager.exe**<br>
is a program to manage and view your licenses.

All dll files must be registered in the system’s Global Assembly Cache GAC.

Furthermore, it is necessary to place several files from above in special directories to make them work within the Visual Studio 2008 environment. Copying and registering is done with the help of InstallXtractRS.exe, which can be launched by double-clicking it in Windows Explorer.