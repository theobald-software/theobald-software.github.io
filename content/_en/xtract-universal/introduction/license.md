---
ref: xu-introduction-05
layout: page
title: Licensing
description: About the license of Xtract Universal
product: xtract-universal
parent: introduction
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=license
---
### About licensing concept of Xtract Universal
The following graphic shows the on which workstations the installation of Xtract Universal with a valid license required.  <br>
![client-server-archi](/img/content/xu/client_server_architektur_xu.png){:class="img-responsive"}<br>

Xtract Universal is licensed per Windows server responsible for extractions. A demo license is automatically installed with the installation of Xtract Universal. <br>
A regular license is provided after purchasing the product. The product license is bound to your company and a specific server name.<br>
If you run Xtract Universal Designer and Xtract Universal Server on different machines, it is only necessary to replace the license on the server.
 

### Installing the Xtract Universal license - XtractUniversalLicense.json
For installing the regular license, place the regular XtractUniversalLicense.json into the following directory of the server: <br>
`C:\Program Files\XtractUniversal`
 <br>
 ![XU_license](/img/content/xu/xu_json_license.png ){:class="img-responsive"}
 
A restart of the Xtract Universal service is no longer necessary.

{: .box-tip }
**Tip:** To inspect your current license data, go to the main menu bar of the Xtract Universal Designer and choose **[Help] > [Info]** or press F12.

![Demo_License](/img/content/xu/xu_demo_license.png){:class="img-responsive"}

Prior to Xtract Universal version 2.99.0 license files were delivered as .dll files. The procedure for replacing a .dll file license is similar to the .json file procedure, but a restart of the Xtract Universal service is required.
