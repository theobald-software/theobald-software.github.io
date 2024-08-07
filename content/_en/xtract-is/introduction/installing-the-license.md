---
ref: xi-requirements-and-installation-04
layout: page
title: Licensing
description: About the license of Xtract IS
product: xtract-is
parent: introduction
permalink: /:collection/:path
weight: 11
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=installing-the-license
progressstate: 5
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Xtract IS.<br>
Make sure to use the documentation within the new [Xtract IS HelpCenter](https://helpcenter.theobald-software.com/xtract-is/documentation/introduction/).


<!---Xtract IS cannot be used outside SSIS,
which is why an SQL Server license is required, even if the SQL Server database is not used.-->

<!---
| Component   | ERP | BW | Enterprise <br> License | Ultimate <br> License |
|-------------|:-----:|:----:|:--------------------:|:------------------:|
| Table       | R   | R  | X                  | X                |
| BAPI        | R/W  | R/W | X                  | X                |
| Query       | R   |    | X                  | X                |
| ABAP Report | R   |    |                    | X                |
| DeltaQ      | R   | R  |                    | X                |
| BW Cube     |     | R  | X                  | X                |
| Hierarchy   |     | R  |                    | X                |
| OHS         |     | R  |                    | X                |
| BW Loader   |     | W  |                    | X                | 
| ODP         | R | R |  | X |
-->



### About licensing concept of Xtract IS
The following graphic shows on which workstations the installation of Xtract IS is required to have a valid license.   
![client_Server_architecture_xis_final](/img/content/xis/client_server_xis.png)<br>

Xtract IS is licensed per Windows server on which SSIS packages are deployed and executed. The same license file can be used on the local workstations to develop the SSIS packages.
A demo license is automatically installed with the installation of Xtract IS. <br>
A regular license is provided, after purchasing the product. The product license is bound to your company and a specific server name. 

### Maintenance
Contact the [sales department](mailto:sales@theobald-software.com) for information about available maintenance options.<br>
In case of technical difficulties, contact the support team: [https://support.theobald-software.com](https://support.theobald-software.com).

### Installing the Xtract IS license - XtractISLicense.json
1. For installing the regular license, find and double-click the Xtract IS License Manager executable file in the installation directory of Xtract IS:<br>
`C:\Program Files\XtractIS\XtractLicenseManager.exe` <br>
The license manager opens. 
![XIS_License_Manager](/img/content/xis/xis_license-manager.png){:class="img-responsive" width="400px"}
2. Click **[Install]**. The window "Install Xtract License" opens.
3. Locate and select the provided "XtractISLicense.json" file you downloaded from the [Customer Portal - My Theobald Software](https://my.theobald-software.com).

![XIS_License_Info](/img/content/XIS_License_Info.png){:class="img-responsive"}

{: .box-tip }
**Tip:** To inspect your current license data, click the Xtract IS Info link located at the top of each component editor.

The *About* tab of the info window contains useful links to the customer portal, knowledge base, Online Help and the support. <br> 
![Abot](/img/content/about-xis.png){:class="img-responsive"}

****
#### Related Links
- [My Theobald Software - Portal for Customers and Partners](https://my.theobald-software.com/)


