---
ref: bc-security-05
layout: page
title: Migration to BOARD Connector Version 4.x
description: Migration from BC 2.x and BC 3.x to BC 4.x
product: board-connector
parent: security
permalink: /:collection/:path
weight: 5
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=user-management
progressstate: 5
---

There are two ways of upgrading the product version from BOARD Connector version 2.x and 3.x to version 4.x:
- Upgrade during installation
- Manual upgrade

### Upgrade During Installation
1. Start the [setup](../introduction/installation-and-update).
2. Make sure to mark the checkbox **Convert config files** checkbox. <br>
The option *Convert config files* starts the *ConfigConverter* application, which ensures that all extractions, source systems, destinations, server and user settings from BC 2.x or 3.x are available in the new version. <br>
Fore more information about installation folder files see also section [Installation and Update](../introduction/installation-and-update). 
![BC4_Migration_1](/img/content/BC4_Migration_1.png){:class="img-responsive"}
3. Confirm the conversion process in the command line pop-up window.  
![BC4_Migration_2](/img/content/BC4_Migration_2.png){:class="img-responsive"}

### Manual Upgrade
If the *ConfigConverter* is not executed automatically during installation, it can also be started manually from the installation directory: ``C:\Program Files\BOARDConnector``. <br>

![BC4_Migration_3](/img/content/BC4_Migration_3.png){:class="img-responsive"}

{:.box-note}
**Note:** Any issues that may occur during the conversion process are displayed in the command line window. Copy and send the command line context to the support team, if required.   


