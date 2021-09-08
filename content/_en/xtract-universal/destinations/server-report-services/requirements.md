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
- Power BI Report Server (January 2020 or later)
- Xtract Universal (version 4.29 or higher)

{: .box-note }
**Note:** The Power BI Report Builder is not supported.

### Installation

To use the SSRS destination, install the [Microsoft Reporting Services Projects](https://marketplace.visualstudio.com/items?itemName=ProBITools.MicrosoftReportProjectsforVisualStudio)
plugin in Visual Studio. After the installation is complete, close Visual Studio.

Microsoft SQL Server Reporting Services supports a wide variety of data sources out of the box.
To add Xtract Universal to the list of data sources, install the [Xtract Universal Data Extension](./requirements#installation-using-the-xtract-universal-data-extension) for Visual Studio and the Report Server.
The data extension is installed automatically when using the [Xtract Universal Setup](../../introduction/installation-and-update).

To complete the installation close all Visual Studio windows.
 
 {: .box-warning }
**Warning!** Make sure to install both Xtract Universal and the Report Server. Only use the latest software and plugin versions for all components.  

After installation of `C:\Program Files\XtractUniversal\ssrs\SSRSDataExtensionSetup.exe` the setup creates the following entries and extensions in the Visual Studio installation directory:
- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\SSRS\XUDataExtension2020.05.dll`
- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\SSRS\Theobald.Common.dll`
- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\SSRS\Theobald.Distillery.Common.dll`
- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\SSRS\Theobald.Net.dll`
- `C:\Program Files (x86)\Microsoft Visual Studio\2019\Enterprise\Common7\IDE\CommonExtensions\Microsoft\SSRS\RSReportDesigner.config`

Make sure that the following extensions from the installation directory above are available in your Power BI Report Server directory:
- `C:\Program Files\Microsoft Power BI Report Server\PBIRS\ReportServer\bin\Theobald.Common.dll`
- `C:\Program Files\Microsoft Power BI Report Server\PBIRS\ReportServer\bin\Theobald.Net.dll`
- `C:\Program Files\Microsoft Power BI Report Server\PBIRS\ReportServer\bin\XUDataExtension2020.01.dll`

### Installation using the Xtract Universal Data Extension

To install the Xtract Universal extension on multiple environments without installing the Xtract Universal Designer, follow these steps:

1. Make sure the *Microsoft Reporting Services Projects* plugin for Visual Studio is already installed and activated. 
2. Close Visual Studio.
3. [Install Xtract Universal](../../introduction/installation-and-update) on the environment on which the license runs.
4. After the installation is complete, navigate to the Xtract Universal directory e.g., `C:\Program files\Xtract Universal\`and copy the `\ssrs` folder from the directory to any environment on which Visual Studio is used to design reports or on which the Report Server runs.
5. Run *SSRSDataExtensionSetup.exe* as administrator to install the Xtract Universal Data Extension on all compatible versions of Visual Studio and/or Report Server found on the environment. 
6. After the installation on the Report Server is complete, restart the Report Server for the changes to take effect. 
You can restart the server in the Report Server Configuration Manager by clicking **[stop]** and then **[start]**.

To uninstall the Data Extension use the *uninstall.bat* file from the `\ssrs`folder in the Xtract universal directory.  

{: .box-note }
**Note:** If the *Reporting Services Projects* plugin for Visual Studio is updated, the Xtract Universal Data Extension won't be available anymore. The Data Extension must be reinstalled.


Should you encounter issues with the installation of the Xtract Universal Data Extension, send the log file located in `C:\Program Files\XtractUniversal\ssrs\log.txt` to [Theobald Support](mailto:support@theobald-software.com).


<!--- After installation of Xtract Universal the setup creates the following entries and extensions in the Alteryx installation directory:
- `Alteryx\Settings\AdditionalPlugins\XtractUniversal.ini`
- `Alteryx\bin\RuntimeData\icons\categories\XtractUniversal.png`
- `Alteryx\bin\RuntimeData\DefaultSettings.xml`
--->