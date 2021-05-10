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
- SQL Server Reporting Services
- Power BI Report Server
- Xtract Universal (version 4.29 or higher).

### Installation

To use the SSRS destination, you need to install the [Microsoft Reporting Services Projects](https://marketplace.visualstudio.com/items?itemName=ProBITools.MicrosoftReportProjectsforVisualStudio)
 plugin for Visual Studio.
 
 1. Navigate to the Extensions menu in Visual Studio and search for the *Microsoft Reporting Services Projects* plugin in the Visual Studio Marketplace.
 2. Close Visual Studio.
 3. Install the Xtract Universal plugin for Visual Studio and the Report Server using the [Xtract Universal Setup](../../introduction/installation-and-update) or the [Xtract Universal Data Extension](./requirements#installation-using-the-xtract-universal-data-extension).
 
 {: .box-warning }
**Warning!** Make sure to install the latest version of the *Microsoft Reporting Services Projects* plugin and Xtract Universal.  

### Installation using the Xtract Universal Data Extension

To install the Xtract Universal plugin for Visual Studio on multiple computers without installing the Xtract Universal Designer, follow the following steps:

1. Make sure the *Microsoft Reporting Services Projects* plugin for Visual Studio is installed and up to date. 
2. Close Visual Studio.
2. [Install Xtract Universal](../../introduction/installation-and-update) e.g., on the server on which the license runs.
2. After the installation is complete, navigate to the Xtract Universal directory e.g., ```C:\Program files\Xtract Universal\ssrs```.
3. Copy the ```\ssrs```folder to any computer on which Visual Studio is used to design reports or on which the Report Server runs.
4. Run *SSRSDataExtensionSetup.exe* as administrator to install the Xtract Universal plugin for Visual Studio and the Report Server. 
5. After the installation is complete, restart the Report Server.

 {: .box-note }
**Note:** To uninstall the Data Extension use the *uninstall.bat* file from the Xtract universal directory.  

<!--- After installation of Xtract Universal the setup creates the following entries and extensions in the Alteryx installation directory:
- `Alteryx\Settings\AdditionalPlugins\XtractUniversal.ini`
- `Alteryx\bin\RuntimeData\icons\categories\XtractUniversal.png`
- `Alteryx\bin\RuntimeData\DefaultSettings.xml`
--->