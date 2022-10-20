---
ref: xu-introduction-06
layout: page
title: Licensing
description: About the license of Xtract Universal
product: xtract-universal
parent: introduction
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=license
progressstate: 5
---
<!--- ### About the licensing concept of Xtract Universal
Xtract Universal is licensed per target environment, source system and Windows server. <br>
The following graphic shows on which workstations the installation of Xtract Universal with a valid license is required.   

![client-server-archi](/img/content/xu/client_server_architektur_xu.png){:class="img-responsive"}

A demo license is automatically installed with the installation of Xtract Universal.<br>
A regular license is provided in the [costumer portal - My Theobald Software](https://my.theobald-software.com/) after purchasing the product. 
The product license is bound to your company and a specific server name.<br>
If you run Xtract Universal Designer and Xtract Universal Server on different machines, it is only necessary to replace the license on the server.
 -->

### About the licensing concept of Xtract Universal

A demo license is automatically installed with the installation of Xtract Universal.<br>
A regular license is provided in the [costumer portal - My Theobald Software](https://my.theobald-software.com/) after purchasing the product. 

The product license is bound to your company and a specific server name.
The following graphic shows the on which workstations the installation of Xtract Universal with a valid license required.<br>
![client-server-archi](/img/content/xu/client_server_architektur_xu.png){:class="img-responsive"}

The license defines the following properties:
- The name of the server that runs the Xtract Universal Server.
- The [destinations](../destinations) to which you can extract data to.
- The number of [extractions](../getting-started/define-a-table-extraction) you can define.

These properties are checked when the XtractUniversal Server runs an Extraction.

{: .box-note }
**Note:** The number of defined extractions and other license information is displayed in the [status bar](../getting-started/designer-overview#status-bar) of the Designer.<br>

{: .box-tip }
**Recommendation:** According to our experience medium-sized businesses use less than 100 extractions.


### Installing the Xtract Universal license - XtractUniversalLicense.json
For installing the regular license, place the regular XtractUniversalLicense.json into the following directory of the server: <br>
`C:\Program Files\XtractUniversal`
 <br>
 ![XU_license](/img/content/xu/xu_json_license.png ){:class="img-responsive"}
 
A restart of the Xtract Universal service is not necessary.<br>
To inspect your current license data, go to the main menu bar of the Xtract Universal Designer and choose **[Help] > [Info]** or press F12.

![Demo_License](/img/content/xu/xu_demo_license.png){:class="img-responsive"}


### Moving a License to a new Server
When moving your setup to a new server, a new license file must be issued for that server.
Contact our sales team at [sales@theobald-software.com](mailto:sales@theobald-software.com) to let us know the name of the new server.

For more information on the migration process, see [Migration to a Different Machine](../advanced-techniques/backup-and-migration#migration-to-a-different-machine).


****
#### Related Links
- [My Theobald Software - Portal for Customers and Partners](https://my.theobald-software.com/)