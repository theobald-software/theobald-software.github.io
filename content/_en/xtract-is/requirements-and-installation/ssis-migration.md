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

This section deals with migrating SSIS packages (containing Xtract IS components) from a lower SQL Server/SSIS version to a higher version. 
Example: You are migrating from SQL Server 2012 to SQL Server 2017. This requires a migration of your SSIS packages, as well.

Keep in mind the dependency of Visual Studio/SSDT and SSIS version. See more details in the knowledge base article - [Step-by-step instructions for migrating SSIS 2008/2012 packages to SSIS 2017](https://kb.theobald-software.com/xtract-is/step-by-step-ssis-migration).

### Migrating from SSIS 2008/2012 to SSIS 2017
1. Prepare SSIS packages for migration using *XtractISConversionPreparer.exe*
2. In the SSIS package, change the target deployment environment to SSIS 2017
3. Install the latest Xtract IS version  

### Executing XtractISConversionPreparer.exe
The Xtract IS Conversion Preparer is a tool that prepares SSIS packages (containing Xtract IS components) created for older versions of SSIS for migration to newer versions of SSIS. This tool can be found in the Xtract IS installation folder.

1. For migration to SSIS 2017, select *SSIS 2016* from the pull-down menu.
During conversion, the tool creates a backup of your SSIS package. <br>
**Recommendation:** Manually create a backup copy prior to conversion.

2. Click **[Add file(s)]** and select the packages, which need to be prepared for conversion from the file dialog.
If there is a package in the debug folder, it is automatically be included.

3. Select the SSIS version, for which you are preparing the packages from the drop-down menu.
![XIS_ConversionPreparer_2016](/img/content/XIS_ConversionPreparer_2016.png){:class="img-responsive" width="600px"}

4. Click **[Prepare]** to start the conversion process. <br>
After opening the converted package in Visual Studio and depending on the version of Visual Studio, the Visual Studio Conversion Wizard launches and converts the package to the format of the selected Visual Studio version.

{: .box-tip }
**Tip:** If an error message appears in Visual Studio after converting the SSIS package with the Xtract IS Conversion Preparer, you may have to deactivate SSIS package protection first before running the Xtract IS Conversion Preparer.<br>

{: .box-warning }
**Warning! Package does not run successfully**<br> 
When opening the converted SSIS packages in Visual Studio the target server version must be changed accordingly. Make sure to save by clicking **[Save the SSIS package]**.

Example: If you selected 'SSIS 2016' in Xtract IS Conversion Preparer, change the target server version to 'SQL Server 2016'. 

For additional details, see the knowledge base article [Step-by-step instructions for migrating SSIS 2008/2012 packages to SSIS 2017](https://kb.theobald-software.com/xtract-is/step-by-step-ssis-migration).

### 2. Migration from SSIS 2014/2016 to SSIS 2017
With VS/SSDT 2015 and 2017, you can select the target server version in the project's properties.

![VS_Deployment_Target](/img/content/VS_Deployment_Target.png){:class="img-responsive" width="400px"}

For more information about supported SSIS versions, their relation to different Visual Studio versions and how to upgrade to higher SSIS versions check:<br>
[List of the SSIS/VS Versions Supported by Xtract IS](https://kb.theobald-software.com/xtract-is/list-of-the-ssisvs-versions-supported-by-xtract-is)

### 3. Install the latest version of Xtract IS
Install the latest version of Xtract IS on your SSIS Server and any development environment (Visual Studio/SSDT).
