---
ref: xu-ssrs-01
layout: page
title: Requirements
description: Requirements
product: xtract-universal
parent: ssrs
permalink: /:collection/:path
weight: 1
lang: en_GB
---

To use the SSRS destination, you need the following components:

- Visual Studio 2017 or higher
- the [Microsoft Reporting Services Projects](https://marketplace.visualstudio.com/items?itemName=ProBITools.MicrosoftReportProjectsforVisualStudio) plugin (version 2.6.11 or higher) for Visual Studio.
- SQL Server Reporting Services (Report Server January 2020 or later)
- Xtract Universal (version 4.29 or higher)

### Installation

To use the SSRS destination, install the [Microsoft Reporting Services Projects](https://marketplace.visualstudio.com/items?itemName=ProBITools.MicrosoftReportProjectsforVisualStudio)
plugin in Visual Studio. After the installation is complete, close Visual Studio.

Microsoft SQL Server Reporting Services supports a wide variety of data sources out of the box.
To add Xtract Universal to the list of data sources, install the [Xtract Universal Data Extension](./requirements#installation-using-the-xtract-universal-data-extension) for Visual Studio and the Report Server.
The data extension is installed automatically when using the [Xtract Universal Setup](../../introduction/installation-and-update).

To complete the installation close all Visual Studio windows.
 
 {: .box-warning }
**Warning!** Make sure to install the latest version of the *Microsoft Reporting Services Projects* plugin and Xtract Universal.  

### Installation using the Xtract Universal Data Extension

To install the Xtract Universal extension on multiple environments without installing the Xtract Universal Designer, follow these steps:

1. Make sure the *Microsoft Reporting Services Projects* plugin for Visual Studio is already installed and activated. 
2. Close Visual Studio.
3. [Install Xtract Universal](../../introduction/installation-and-update) on the environment on which the license runs.
4. After the installation is complete, navigate to the Xtract Universal directory e.g., `C:\Program files\Xtract Universal\`.
5. Copy the `\ssrs` folder from the directory to any environment on which Visual Studio is used to design reports or on which the Report Server runs.
6. Run *SSRSDataExtensionSetup.exe* as administrator to install the Xtract Universal Data Extension on all compatible versions of Visual Studio and/or Report Server found on the environment. 
7. After the installation on the Report Server is complete, restart the Report Server for the changes to take effect. 
You can restart the server in the Report Server Configuration Manager by clicking **stop** and then **start**.

To uninstall the Data Extension use the *uninstall.bat* file from the `\ssrs`folder in the Xtract universal directory.  

{: .box-note }
**Note:** Should you encounter issues with the installation of the Xtract Universal Data Extension, send the log file located in `C:\Program Files\XtractUniversal\ssrs\log.txt` to [Theobald Support](mailto:support@theobald-software.com).


<!--- After installation of Xtract Universal the setup creates the following entries and extensions in the Alteryx installation directory:
- `Alteryx\Settings\AdditionalPlugins\XtractUniversal.ini`
- `Alteryx\bin\RuntimeData\icons\categories\XtractUniversal.png`
- `Alteryx\bin\RuntimeData\DefaultSettings.xml`
--->