---
ref: bc-introduction-04
layout: page
title: License
description: License
product: board-connector
parent: introduction
permalink: /:collection/:path
weight: 5
lang: en_GB
---

The BOARD Connector will be installed along with a trial license.  To view the details of the license, please go to *help -> info*.

![BOARDConnector_Demo_License](/img/content/BOARDConnector_Demo_License.png){:class="img-responsive"}

Since BOARD Connector version 2.28.0 the license files are delivered as json text files. For updating a license or replacing a trial license with a regular license, just place the json file in the server's application directory (default is C:\Program Files\BOARDConnector). A restart of the BOARD Connector Service is no longer necessary.

Prior to BOARD Connector version 2.28.0 license files were delivered as .dll files. The steps for replacing a license are the same as with json files. However with .dll licenses a restart of the BOARD Connector Service is required.

![BOARDConnector_License_Folder](/img/content/BOARDConnector_License_Folder.png){:class="img-responsive"}

If you run BOARD Connector client and server on different machines, it's only necessary to replace the license on the server.
The server name is part of the regular license.
