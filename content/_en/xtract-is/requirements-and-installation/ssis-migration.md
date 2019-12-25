---
ref: xi-requirements-and-installation-05
layout: page
title: SSIS Migration
description: SSIS Migration
product: xtract-is
parent: requirements-and-installation
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=ssis-migration
---

This chapter deals with migrating SSIS packages (containing Xtract IS components) from a lower SQL Server/SSIS version to a higher version. 
Example: You are migrating from SQL Server 2012 to SQL Server 2017. This requires a migration of your SSIS packages, as well.

Please do also note the dependency of Visual Studio/SSDT and SSIS version, see [here](https://kb.theobald-software.com/xtract-is/list-of-the-ssisvs-versions-supported-by-xtract-is).

### Migration from SSIS 2008/2012 to SSIS 2017
1. Prepare SSIS packages for migration using *XtractISConversionPreparer.exe*
2. In the SSIS package, change the target deployment environment to SSIS 2017
3. Install the latest Xtract IS version  

### 1.Execute XtractISConversionPreparer.exe
The Xtract IS Conversion Preparer is a tool that prepares SSIS packages (containing Xtract IS components) created for older versions of SSIS for migration to newer versions of SSIS. This tool can be found in the Xtract IS installation folder.

For migration to SSIS 2017, please select SSIS 2016  from the pull down menu.

During conversion, the tool creates a backup of your SSIS package. However, it is still advisable to manually create a backup copy prior to conversion.

First, click on Add file(s) and select the packages from the file dialog which need to be prepared for conversion.
If there is a package in the debug folder, it will automatically be included.

Secondly, select the SSIS version you are preparing the packages for from the drop down box .

![XIS_ConversionPreparer_2016](/img/content/XIS_ConversionPreparer_2016.jpg){:class="img-responsive" width="600px"}

Finally, click on the *Prepare* button to start the conversion process.


After opening the converted package in Visual Studio and depending on the version of Visual Studio, the Visual Studio Conversion Wizard will launch and convert the package to the format of the selected Visual Studio version.

Should you encounter an error message in Visual Studio after converting the SSIS package with the Xtract IS Conversion Preparer, you may have to deactivate SSIS package protection first before running the Xtract IS Conversion Preparer.<br>
**ATTENTION:**<br> 
When opening the converted SSIS packages in Visual Studio please change the target server version accordingly and **save the SSIS package**.
Example: If you selected 'SSIS 2016' in Xtract IS Conversion Preparer, change the target server version to 'SQL Server 2016'. 

Subsequently, you can read the detailed [step-by-step instructions](https://kb.theobald-software.com/xtract-is/step-by-step-ssis-migration).

### 2. Migration from SSIS 2014/2016 to SSIS 2017
With VS/SSDT 2015 and 2017, you can select the target server version in the project's properties.

![VS_Deployment_Target](/img/content/VS_Deployment_Target.jpg){:class="img-responsive" width="400px"}

For more information about supported SSIS versions, their relation to different Visual Studio versions and how to upgrade to higher SSIS versions please check:<br>
[List of the SSIS/VS Versions Supported by Xtract IS](https://kb.theobald-software.com/xtract-is/list-of-the-ssisvs-versions-supported-by-xtract-is)

### 3. Install the latest version of Xtract IS
Please install the latest version of Xtract IS on your SSIS Server and any development environment (Visual Studio/SSDT).
