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
- On the machine running the SQL server, which is used for deploying and running the packages.

<!---text anpassen --->
![xis_client_server_generell](/img/content/xis/client_server_architektur_xis_generell.png){:class="img-responsive"}


### Prerequisites

- SSIS / Visual Studio Extentions are installed

{: .box-note }
**Note:** administrator permissions are required to install Xtract IS.

To use Xtract IS, the file *XtractISSetup.exe* must be executed and installed **both** on the local development environment (Visual Studio or SSDT) and on the SSIS server. For more information, see section [Licensing](./installing-the-license).



### Normal Setup

In the standard setup, execute the *XtractISSetup.exe* file and follow the instructions of the setup program.

![XIS_Setup](/img/content/xis/xis_setup-exe.png){:class="img-responsive"}

The Xtract IS Setup installs Xtract IS as a plug-in into SSIS.

The license installation procedure is described in the section [Installing the license](./installing-the-license#installing-the-xtract-is-license---xtractislicensejson).


#### Installation Folder Files
The list below shows several most important files that are placed into the default directory ``C:\Program Files\XtractIS`` after installation:

|Filename | Description |
|:----|:---|
| ABAP folder | Directory with SAP function modules. Read the readme.txt within the directory for more information. See also [SAP Customizing](./sap-customizing) |
| XtractISSetup.exe | Application for installing and registering the Xtract IS components within SSIS.|
|XtractISConversionPreparer.exe| Tool, which prepares older version of SSIS packages (containing Xtract IS components) for migration to newer versions of SSIS. See also section [SSIS Migration](./ssis-migration).|
| xis_version.bat | Starts the `XtractISVerisonInfo.exe` to display and read the currently installed version.|
| XtractLicenseManager.exe | Application to manage and view licenses.|
| Uninstall Xtract IS| Tool for uninstalling and removing Xtract IS with all its components from your machine. |
| gac-uninstall.bat | **For debugging only**. Tool to clear the GAC of all Xtract IS related components in case of installation issues.|
| Eula_XtractIS.rtf | Document containing the license agreement for the use of the software Xtract IS.|
| XtractISLicense.json | License file with information about the server, the component and runtime. |
| UninstallDllLicense.bat| **For older license files**. See [Updating the Xtract.License.dll to XtractISLicense.json](./installing-the-license#updating-the-xtractlicensedll-to-xtractislicensejson)|



### Unattended Installation - Silent Setup

{: .box-note }
**Note:** All switches are case sensitive.

The setup program and the license installer can also be started without the GUI in a so called "silent setup" way.

#### XtractISSetup.exe
To execute the silent setup, use the switch *--unattended* . <br>


#### Waiting Switch

As both programs `XtractISSetup.exe` and `XtractLicenseManager.exe` are windows applications, they return immediately when called from the command line. 
To wait until the setup or the installation is complete, use the start command with the */wait* switch. Get more details on Windows Commands in the official [Microsoft Documentation](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/start).


**Examples:**
```
start /wait XtractISSetup.exe --unattended
start /wait XtractLicenseManager.exe "C:\temp\Xtract IS\XtractIS.License.json"

```

### Displaying the Xtract IS components within SSIS
After a successful installation of the Xtract IS, the Xtract IS components are automatically available in the SSIS Toolbox of a Data Flow Task in your Visual Studio Integration Services project.

![XIS_SSIS_Toolbox](/img/content/XIS_SSIS_Toolbox.png){:class="img-responsive"}

<!---{: .box-warning }
**Warning! Xtract IS components not visible**<br> With the current version of the SSDT for VS 2015, *SQL Server vNext* or *SQL Server 2017* are selected by default as the target environment for the deployment network of SSIS projects.  With this setting, the Xtract IS components are not visible in the SSIS toolbox. <br> Change the target environment for the deployment to SQL Server 2016 to display the Xtract IS components in the toolbox.

![XIS_deployment_target_version_vNext](/img/content/VS_Deployment_Target.png){:class="img-responsive"}--->