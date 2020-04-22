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
### Prerequisites

{: .box-note }
**Note:** Administration rights are required to install Xtract IS.

To use Xtract IS, the file *XtractISSetup.exe* must be executed and installed **both** on the local development environment (Visual Studio or SSDT) and on the SSIS server. For more information, see section [Licensing](./installing-the-license).



### Normal Setup

In the standard setup, execute the *XtractISSetup.exe* file and follow the instructions of the setup program.

![XIS_Setup](/img/content/xis/xis_setup-exe.png){:class="img-responsive"}

During setup, various DLLs are copied to certain directories to be used by Integration Services. 

The installation of the license file is described in the section [Installing the license](./installing-the-license).


#### Installation Folder Files
The list below shows several most important files that are placed into the default directory ``C:\Program Files\XtractIS`` during installation:

|Filename | Description |
|:----|:---|
| ABAP folder | Folder with customer-specific function modules (.txt) and SAP transport requests (.zip)|
| InstallXtractIS.exe | Console program for installing and registering the components on the system|
| xis_version.bat | XtractISVersionInfo.exe call in cmd window |
| XtractLicenseManager.exe | Program to manage and view licenses, see also section [Licensing](./installing-the-license)|
| uninst.exe | Tool for uninstalling Xtract IS |
| gac-uninstall.bat | Tool to clear the GAC of all Xtract related components|
| Eula_XtractIS.rtf | Document containing the license agreement for the use of the software XtractIS|
| XtractISLicense.json | The newer version of Xtract IS license file |


### Blocking, Exit-Codes and Authorization

{: .box-note }
**Note:** All switches are case sensitive.

Using the */w* switch at the beginning of the statement provides the following functions:
- You can let the setup program or the license manager to block the calling process (e.g., a batch) until the installation is finished. 
- You can to receive a correct exit code to check the successful and correct installation finish

**Examples:**
```
start /w XtractISSetup.exe /S
start /w XtractLicenseManager.exe "My License\XtractIS.License.json"
start /w XtractLicenseManager.exe XtractIS.License.json
```

### Silent Setup

The setup program can also be started without the GUI - silent setup. If you want to execute a silent setup, use the switch */S* . <br>
To set the installation path, use the switch */D*.

You can find more settings for the setup on the following website ([Command Line Usage](http://nsis.sourceforge.net/Docs/Chapter3.html#3.2.1)).


### Displaying the Xtract IS components within SSIS
After a successful installation of the Xtract IS, the Xtract IS components are automatically available in the SSIS Toolbox of a Data Flow Task in your Visual Studio Integration Services project.

![XIS_SSIS_Toolbox](/img/content/XIS_SSIS_Toolbox.png){:class="img-responsive"}<br>
