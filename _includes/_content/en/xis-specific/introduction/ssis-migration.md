The following section contains information on migrating SSIS packages that contain Xtract IS components 
from a lower SQL Server/SSIS version to a higher version. 

When migrating from SQL Server 2012 or lower to SQL Server 2019, follow the instructions in [Migrating from SSIS 2008/2012 to SSIS 2019](#migrating-from-ssis-2012-to-ssis-2019).
When migrating from SQL Server 2014 or higher to SQL Server 2019, follow the instructions in [Migration from SSIS 2014/2016 to SSIS 2019](#migration-from-ssis-20142016-to-ssis-2019).

### Install the latest version of Xtract IS
Install the latest version of Xtract IS on your SSIS server and any development environment (Visual Studio/SSDT).


### Migrating from SSIS 2008/2012 to SSIS 2019

A migration from SQL Server 2012 to SQL Server 2019 also requires a migration of SSIS packages.

The SSIS packages are converted to SSIS 2016 using the *XtractIS Conversion Preparer* before they can be migrated to SSIS 2019.
The XtractIS Conversion Preparer is a tool that prepares SSIS packages (containing Xtract IS components) created for older versions of SSIS for migration to newer versions of SSIS.
You can find the *XtractISConversionPreparer.exe* in the installation directory of Xtract IS. the default directory is `C:\Program Files\XtractIS\XtractISConversionPreparer.exe`. 

1. Start the *XtractISConversionPreparer.exe*.
2. Click **[Add file(s)]** and select the packages that need to be prepared for conversion.
If there is a package in the debug folder, it is automatically be included.
3. Select the SSIS version, for which you are preparing the packages from the drop-down list.
For migration to SSIS 2019, select *SSIS 2016* from the pull-down menu. 
During conversion, the tool creates a backup of your SSIS package. <br>
**Recommendation:** Manually create a backup copy prior to conversion.<br>
![XIS_ConversionPreparer_2016](/img/content/XIS_ConversionPreparer_2016.png){:class="img-responsive"}
4. Click **[Prepare]** to start the conversion process. <br>
5. To migrate from SSIS 2016 to SSIS 2019, follow the instructions in [Migration from SSIS 2014/2016 to SSIS 2019](#migration-from-ssis-20142016-to-ssis-2019).

{: .box-note }
**Note:** The password encryption of the SSIS packages set by the [ProtectionLevel property](https://docs.microsoft.com/en-us/sql/integration-services/security/access-control-for-sensitive-data-in-packages?view=sql-server-ver15#set_protection) 
must be deactivated or changed for the conversion of the SSIS packages.

### Migration from SSIS 2014/2016 to SSIS 2019

{: .box-note }
**Note:** SSIS packages created by an SSTD/VS version from **before** 2015 must be migrated to SQL Server 2016 before it can be migrated to SQL Server 2019.
To migrate correctly, select SQL Server 2016 as the target version, then save and reopen the project.

1. Open a new Solution in Visual Studio.
2. Open the project properties and select an SQL server as "Deployment Target Version":
- If your SSIS packages have been created by an SSDT/VS version from **after** 2015 for SQL Server 2014/2016, continue with step 6.
- If your SSIS packages have been created by an SSTD/VS version from **before** 2015 for SQL Server 2014/2016, select the SQL Server on which your packages have run until now (SQL Server 2014 or SQL Server 2016).
- If the SSIS packages have been prepared by the *XtractIS Conversion Preparer* from [Migrating from SSIS 2008/2012 to SSIS 2019](#migrating-from-ssis-2012-to-ssis-2019), select SQL Server 2016.<br>
![VS-Deployment-Target](/img/content/VS_Deployment_Target.png){:class="img-responsive"}
3. Save the project.
4. Add the SSIS packages to the project.
5. Save the project again.
6. Change the "Deployment Target Version" to SQL Server 2019.
7. If Xtract IS components are not displayed correctly in the Data Flow Task, close the Solution and reopen it.
If the Xtract IS components are still not displayed correctly, close and restart Visual Studio.

Saving the project before and after the import of SSIS packages is necessary for the migration to work correctly.
