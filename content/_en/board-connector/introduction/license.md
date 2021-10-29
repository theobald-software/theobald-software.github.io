---
ref: bc-introduction-05
layout: page
title: License
description: License
product: board-connector
parent: introduction
permalink: /:collection/:path
weight: 5
lang: en_GB
progressstate: 5
---

### About licensing concept of BOARD Connector

BOARD Connector is licensed per Windows server responsible for extractions. A demo license is automatically installed with the installation of BOARD Connector. <br>
A regular license is provided after purchasing the product in [My Theobald Software - Portal for Customers and Partners](https://my.theobald-software.com/). The product license is bound to your company and a specific server name.<br>
If you run BOARD Connector Designer and BOARD Connector Server on different machines, it is only necessary to replace the license on the server.
 

### Installing the BOARD Connector license - BOARD ConnectorLicense.json
For installing the regular license, place the regular BOARD ConnectorLicense.json into the following directory of the server: <br>
`C:\Program Files\BOARDConnector`
 <br>
 ![XU_license](/img/content/BOARDConnector_License_Folder.png ){:class="img-responsive"}
 
A restart of the BOARD Connector service is no longer necessary.

{: .box-tip }
**Tip:** To inspect your current license data, go to the main menu bar of the BOARD Connector Designer and choose **[Help] > [Info]** or press F12.

![Demo_License](/img/content/BOARDConnector_Demo_License.png){:class="img-responsive"}

In erarlier versions BOARD Connector license files were delivered as .dll files. The procedure for replacing a .dll file license is similar to the .json file procedure, but a restart of the BOARD Connector service is required.

### Moving a License to a new Server
Because licenses are linked to a server name, you need a new license when moving to a new server.
Contact your Theobald Software distributor to let us know the name of the new server.
Install the latest version of Xtract Universal together with your new license.

To keep the settings and extractions of your current setup, copy the `Config` folder from your current server to the installation directory of the new server.

### Maintenance
General information on maintenance pricing is available on the [official website](https://theobald-software.com/en/board-connector-pricing-and-order/) of Theobald Software. Contact the [sales department](mailto:sales@theobald-software.com) for more information about available maintenance options.<br>
In case of technical difficulties, contact the support team by email: [support@theobald-software.com](mailto:support@theobald-software.com).


****
#### Related Links
- [My Theobald Software - Portal for Customers and Partners](https://my.theobald-software.com/)