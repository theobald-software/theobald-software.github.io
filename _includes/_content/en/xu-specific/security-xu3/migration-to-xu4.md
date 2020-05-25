There are two ways of upgrading the product version from XU 2.x and 3.x to XU 4.x:
- Upgrade during installation
- Manual upgrade

### Upgrade During Installation
1. Start the [installation routine](../introduction/installation-and-backup).
2. Make sure to mark the checkbox **Convert config files** checkbox. <br>
The option *Convert config files* starts the *ConfigConverter* application, which ensures that all extractions, source systems, destinations, server and user settings from XU 2.x or 3.x are available in the new version. <br>
Fore more information about installation folder files see also section [Installation and Backup](../introduction/installation-and-backup). 
![XU3_Migration_1](/img/content/XU4_Migration_1.png){:class="img-responsive"} <br>
3. Confirm the conversion process in the command line pop-up window. <br>
![XU3_Migration_2](/img/content/XU3_Migration_2.png){:class="img-responsive"} <br>

### Manual Upgrade
If the *ConfigConverter* is not executed automatically during installation, it can also be started manually from the installation directory: ``C:\Program Files\XtractUniversal``. <br>

![XU3_Migration_3](/img/content/XU3_Migration_3.png){:class="img-responsive"}

{:.box-note}
**Note:** Any issues that may occur during the conversion process are displayed in the command line window. Copy and send the command line context to the support team, if required.   