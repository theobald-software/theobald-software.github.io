---
ref: xi-requirements-and-installation-04
layout: page
title: Licensing
description: About the license of Xtract IS
product: xtract-is
parent: requirements-and-installation
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=installing-the-license
---
### About licensing concept of Xtract IS
The following graphic shows the on which workstations the installation of Xtract IS with a valid license required.  <br>
![client_Server_architecture_xis_final](/img/content/xis/client_server_xis.png){:class="img-responsive"} <br>

Xtract IS is licensed per Windows server on which SSIS packages are deployed and executed. The same license file can be used on the local workstations to develop the SSIS packages.
A demo license is automatically installed with the installation of Xtract IS. <br>
A regular license is provided, after purchasing the product. The product license is bound to your company and a specific server name. 

### Installing the Xtract IS license - XtractISLicense.json
1. For installing the regular license, find and double-click the Xtract IS License Manager executable file in the installation directory of Xtract IS:<br>
`C:\Program Files\XtractIS\XtractLicenseManager.exe` <br>
The license manager opens.<br>
![XIS_License_Manager](/img/content/xis/xis_license-manager.png){:class="img-responsive" width="400px"}
2. Click **[Install]**. The window "Install Xtract License" opens.
3. Locate and select the regular "XtractISLicense.json" file within the installation directory of Xtract IS:<br>
`C:\Program Files\XtractIS\XtractISLicense.json`
4. Close and restart the license manager to view the properly installed license. <br>
![XIS_License_Info](/img/content/XIS_License_Info.jpg){:class="img-responsive" width="400px"}

<div class="alert alert-success">
  <i class="fas fa-lightbulb"></i> <strong>Tip:</strong> To inspect your current license data, click the Xtract IS Info link located at the top of each component editor.<br>
</div>

### Updating the Xtract.License.dll to XtractISLicense.json
The older version of Xtract IS license file is a .dll-file that was registered in the GAC.
In the newer versions of Xtract IS license file is provided in form of a .json-file.<br>
Copy the XtractISLicense.json into one of the following paths: <br>
`CSIDL_COMMON_APPDATA\TheobaldSoftware\XtractIS\` <br>
 or `C:\ProgramData\TheobaldSoftware\XtractIS\` <br>
If you have an older .dll license file, remove the older version to be able to use the newer version.

#### To remove the former Xtract.License.dll from GAC
1. Run Windows CMD as administrator.
2. Run the uninstall license file: `C:\Program Files\XtractIS>UninstallDllLicense.bat` <br>
The .dll license is removed.
3. Perform the installation of the newer XtractISLicense.json file.
