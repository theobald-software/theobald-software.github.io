---
ref: xi-requirements-and-installation-05
layout: page
title: SSIS Migration
description: SSIS Migration
product: xtract-is
parent: introduction
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=ssis-migration
---

The following section contains detailed information on migrating SSIS packages (containing Xtract IS components) from a lower SQL Server/SSIS version to a higher version. 
Example: You are migrating from SQL Server 2012 to SQL Server 2019. This migration requires a migration of your SSIS packages, as well.

Keep in mind the dependency of Visual Studio/SSDT and SSIS version. 

### Migrating from SSIS 2012 to SSIS 2019
1. Prepare SSIS packages for migration using *XtractISConversionPreparer.exe*
2. In the SSIS package, change the target deployment environment to SSIS 2019.
3. Install the latest Xtract IS version.

### Executing XtractISConversionPreparer.exe
The XtractIS Conversion Preparer is a tool that prepares SSIS packages (containing Xtract IS components) created for older versions of SSIS for migration to newer versions of SSIS.

{: .box-note }
**Note:** The password encryption of the SSIS packages set by the [ProtectionLevel property](https://docs.microsoft.com/en-us/sql/integration-services/security/access-control-for-sensitive-data-in-packages?view=sql-server-ver15#set_protection) 
must be deactivated or changed for the conversion of the SSIS packages.

{: .box-note }
**Note:** Only SSIS packages created with SSIS 2012 must be converted using XtractIS Conversion Preparer located in: <br>`C:\Program Files\XtractIS\XtractISConversionPreparer.exe`. 


For any other newer SSIS packages adjust the "Deployment Target Version" in project properties, see below.<br>

1. Start the XtractIS Conversion Preparer.
2. For migration to SSIS 2019, select *SSIS 2016* from the pull-down menu.
During conversion, the tool creates a backup of your SSIS package. <br>
**Recommendation:** Manually create a backup copy prior to conversion.
2. Click **[Add file(s)]** and select the packages, which need to be prepared for conversion from the file dialog.
If there is a package in the debug folder, it is automatically be included.

4. Select the SSIS version, for which you are preparing the packages from the drop-down list.
![XIS_ConversionPreparer_2016](/img/content/XIS_ConversionPreparer_2016.png){:class="img-responsive"}

4. Click **[Prepare]** to start the conversion process. <br>
After opening the converted package in Visual Studio, depending on the version, the Visual Studio Conversion Wizard launches and converts the package to the format of the selected Visual Studio version.

{: .box-warning }
**Warning! Package does not run successfully**<br> 
When opening the converted SSIS packages in Visual Studio the target server version must be changed accordingly e.g., if you select **SSIS 2016** in Xtract IS Conversion Preparer, the target server version must be **SQL Server 2016**. 
Make sure to save by clicking **[Save the SSIS package]**.<br>


### Migration from SSIS 2014/2016 to SSIS 2019
With VS/SSDT 2015 and 2019, you can select the target server version in the project's properties.

![VS_Deployment_Target](/img/content/VS_Deployment_Target.png){:class="img-responsive"}

### Install the latest version of Xtract IS
Install the latest version of Xtract IS on your SSIS server and any development environment (Visual Studio/SSDT).
