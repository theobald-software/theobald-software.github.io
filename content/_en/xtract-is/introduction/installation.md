---
ref: xi-requirements-and-installation-02
layout: page
title: Installation
description: Installation
product: xtract-is
parent: introduction
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=installation
---

Xtract IS is required when developing and running SSIS packages. 
Make sure to install Xtract IS on both types of machines:
- On the development machine running Visual Studio / SQL Sever Data Tools. Development can be performed on several machines.
- On the machine running the SQL server. This machine is used for deploying and running the packages.

<!---text anpassen --->
![xis_client_server_generell](/img/content/xis/client_server_architektur_xis_generell.png){:class="img-responsive"}


### Prerequisites

{: .box-note }
**Note:** administrator permissions are required to install Xtract IS.

To use Xtract IS, the file *XtractISSetup.exe* must be executed and installed **both** on the local development environment (Visual Studio or SSDT) and on the SSIS server. For more information, see section [Licensing](./installing-the-license).



### Normal Setup

In the standard setup, execute the *XtractISSetup.exe* file and follow the instructions of the setup program.

![XIS_Setup](/img/content/xis/xis_setup-exe.png){:class="img-responsive"}

During setup, various DLLs are copied to certain directories to be used by Integration Services. 

The license installation procedure is described in the section [Installing the license](./installing-the-license#installing-the-xtract-is-license---xtractislicensejson).


#### Installation Folder Files
The list below shows several most important files that are placed into the default directory ``C:\Program Files\XtractIS`` after installation:

|Filename | Description |
|:----|:---|
| ABAP folder | Folder with customer-specific function modules (.txt) corresponding to SAP transport requests (.zip).|
| InstallXtractIS.exe | Application for installing and registering the Xtract IS components and DLLs on the system.|
|XtractISConversionPreparer.exe| Tool, which prepares older version of SSIS packages (containing Xtract IS components) for migration to newer versions of SSIS. See also section [SSIS Migration](./ssis-migration).|
| xis_version.bat | Version batch file. When starting xis_version.bat, make sure to pass XtractISVersionInfo.exe file from the installation directory as a parameter.|
| XtractLicenseManager.exe | Application to manage and view licenses.|
| Uninstall Xtract IS.lnk | Tool for uninstalling and removing Xtract IS with all its components from your machine. |
| gac-uninstall.bat | Tool to clear the GAC of all Xtract IS related components.|
| Eula_XtractIS.rtf | Document containing the license agreement for the use of the software Xtract IS.|
| XtractISLicense.json | License file with information about the server, the component and runtime. |



### Silent Setup

{: .box-note }
**Note:** All switches are case sensitive.

The setup program can also be started without the GUI. This type of setup  program execution is called "silent setup". If you want to execute the silent setup, use the switch */S* . <br>
To set the installation path, use the switch */D*.

You can find more settings for the setup on the following website: [Command Line Usage](http://nsis.sourceforge.net/Docs/Chapter3.html#3.2.1).

#### Blocking, Exit-Codes and Authorization

Using the */w* switch at the beginning of the statement provides the following functions:
- You can let the setup program or the license manager block the calling process (e.g., a batch) until the installation is finished. 
- You can receive a correct exit code to check the successful and correct installation finish

**Examples:**
```
start /w XtractISSetup.exe /S
start /w XtractLicenseManager.exe "My License\XtractIS.License.json"
start /w XtractLicenseManager.exe XtractIS.License.json
```

### Displaying the Xtract IS components within SSIS
After a successful installation of the Xtract IS, the Xtract IS components are automatically available in the SSIS Toolbox of a Data Flow Task in your Visual Studio Integration Services project.

![XIS_SSIS_Toolbox](/img/content/XIS_SSIS_Toolbox.png){:class="img-responsive"}

{: .box-warning }
**Warning! Xtract IS components not visible**<br> With the current version of the SSDT for VS 2015, *SQL Server vNext* or *SQL Server 2017* are selected by default as the target environment for the deployment network of SSIS projects.  With this setting, the Xtract IS components are not visible in the SSIS toolbox. <br> Change the target environment for the deployment to SQL Server 2016 to display the Xtract IS components in the toolbox.

![XIS_deployment_target_version_vNext](/img/content/VS_Deployment_Target.png){:class="img-responsive"}