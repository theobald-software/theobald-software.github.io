---
ref: xi-requirements-and-installation-02
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
### Requirements

{: .box-note }
**Note:** Administration rights are required to install Xtract IS.

To be able to use Xtract IS, the file *XtractISSetup.exe* must be executed **both** in the local development environment (visual studio or SSDT) and on the SSIS server. This means that the Xtract IS installation routine must be installed on both environments.

### Normal Setup

In the standard setup, execute the *XtractISSetup.exe* file and follow the instructions of the setup program.

![XIS_Setup](/img/content/xis/xis_setup-exe.png){:class="img-responsive"}

During setup, various DLLs are copied to certain directories so that they can be used by Integration Services. 

The installation of the license file is described in the section [Installing the license](./installing-the-license).

{: .box-note }
**Note:** All switches are case sensitive.

#### Installation Folder Files
The list below shows several most important files that are placed into directory ``\XtractIS\`` during installation:

|Filename | Description |
|:----|:---|
| ABAP folder | contains customer-specific function modules (.txt) and SAP transport requests (.zip)|
| InstallXtractIS.exe | console program for installing and registering the components on your system|
| XtractISConversionPreparer.exe | use this tool after upgrading your SSIS version (see chapter [SSIS Migration](https://help.theobald-software.com/de/xtract-is/voraussetzungen-und-installation/ssis-migration)).|
| XtractLicenseManager.exe | a program to manage and view your licenses |
| uninst.exe | tool for uninstalling Xtract IS |
| gac-uninstall.bat | this tool clears the GAC of all Xtract related components|
| Eula_XtractIS.rtf | Contains the license agreement for the use of the software XtractIS|




**XtractLicenseManager**

You can transfer the licence file as an argument to the XtractLicenseManager. This file will be installed without a GUI. In case of an error a message box will pop up and a corresponding error code will be returned. 


### Blocking, Exit-Codes and Authorization

If you want the setup program or the license manager to block the calling process  (e.g., a batch) until the installation has finished and to receive a correct exit code to check that the installation has finished correctly, you have to use the start statement with the /w switch.


**Examples:**
```
start /w XtractISSetup.exe /S
start /w XtractLicenseManager.exe "My License\XtractIS.License.json"
start /w XtractLicenseManager.exe XtractIS.License.json
```

### Silent Setup

The setup program can also be started without the GUI. If you want to start it that way you have to use the switch /S . Using the switch /D you can set the installation path. 

You can find more settings for the setup on the following website ([Command Line Usage](http://nsis.sourceforge.net/Docs/Chapter3.html#3.2.1)).



### Displaying the Xtract IS components within SSIS
After a successful installation of the Xtract IS, the Xtract IS components are automatically available in the SSIS Toolbox of a Data Flow Task in your Visual Studio Integration Services project.

![XIS_SSIS_Toolbox](/img/content/XIS_SSIS_Toolbox.png){:class="img-responsive"}<br>
