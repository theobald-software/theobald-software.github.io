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
A regular license is provided after purchasing the product. The product license is bound to your company and a specific server name.<br>
If you run BOARD Connector Designer and BOARD Connector Server on different machines, it is only necessary to replace the license on the server.
 

### Installing the BOARD Connector license - BOARDConnectorLicense.json
For installing the regular license, place the regular BOARDConnectorLicense.json into the following directory of the server: <br>
`C:\Program Files\BoardConnector`
 <br>
 ![XU_license](/img/content/BOARDConnector_License_Folder.png ){:class="img-responsive"}
 
A restart of the BOARD Connector service is no longer necessary.

{: .box-tip }
**Tip:** To inspect your current license data, go to the main menu bar of the BOARD Connector Designer and choose **[Help] > [Info]** or press F12.

![Demo_License](/img/content/BOARDConnector_Demo_License.png){:class="img-responsive"}

In erarlier versions BOARD Connector license files were delivered as .dll files. The procedure for replacing a .dll file license is similar to the .json file procedure, but a restart of the BOARD Connector service is required.
