---
ref: xu-introduction-04
layout: page
title: License
description: License
product: xtract-universal
parent: introduction
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=license
---

Xtract Universal will be installed along with a trial license. To see the details of the license, please go to *Help -> Info*.

![Demo_License](/img/content/Demo_License.jpg){:class="img-responsive"}

Since Xtract Universal version 2.99.0 the license files are delivered as json text files. For updating a license or replacing a trial license with a regular license, just place the json file in the server's application directory (default is C:\Program Files\XtractUniversal). A restart of the Xtract service is no longer necessary.

Prior to Xtract Universal version 2.99.0 license files were delivered as .dll files. The steps for replacing a license are the same as with json files. However with .dll licenses a restart of the Xtract service is required.

![XU_license](/img/content/xu\json_lizenz_datei.png){:class="img-responsive"}

If you run XU Designer and XU Server on different machines, it is only necessary to replace the license on the server.
The server name is part of the regular license.
![client-server-archi](/img/content/xu/client_server_architektur_xu.png){:class="img-responsive"}