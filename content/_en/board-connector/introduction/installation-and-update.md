---
ref: bc-introduction-03
layout: page
title: Installation and Update
description: Installation and Update
product: board-connector
parent: introduction
permalink: /:collection/:path
weight: 6
lang: en_GB
progressstate: 5
---

{: .box-warning}
**Warning: Deprecated documentation** <br>
You are using the old version of the online help for Board Connector.<br>
Make sure to use the documentation within the new [Board Connector HelpCenter](https://helpcenter.theobald-software.com/board-connector/documentation/introduction/).

### Prerequisites

{: .box-note }
**Note:** administrator permissions are required to install Board Connector.

{% include _content/en/requirements/productversion.md %}	

### Setup

*BOARDConnectorSetup.exe* is an industry standard setup.  Execute the *BOARDConnectorSetup.exe* file and follow the instructions of the setup.

When starting the installation program, optional components can be selected during the setup. 
![BC-Setup](/img/content/board/BC_Setup_2.png){:class="img-responsive"}

|Component | Sub Component| Description |
|:----|:---|:---|
|Main Product Files |- | All required files to use Board Connector. |
|Designer | -| Installs the Designer application, uncheck the option if you want to use Board Connector without a graphical interface. |
|Server | | Installs the Board Connector Server |
|<!---->| Install Service| Installs the server component as a windows service. See also section [Start Server](../server/start-server). |
| <!---->  |  Convert config files | Converts extractions, sources, destinations, etc. from previous version format to new format. Crucial when installing major releases and upgrading from e.g., version 3.x to 4.x.|
|Start Menu Shortcuts |- |Component that adds shortcuts to the start menu.|

{: .box-note }
**Note:** Make sure to mark the option “Server > Install Service” during the Installation, as installing a server without the service is only used for development purposes.

The license installation procedure is described in the section [Installing the license](./license#installing-the-board-connector-license---board-connectorlicensejson).

### Program Directory Files
The list below shows several most important files that are placed into the default directory ``C:\Program Files\BOARDConnector`` after installation:

|Filename | Description |
|:----|:---|
| ABAP directory | Directory with customer-specific function modules (.txt) corresponding to SAP transport requests (.zip).|
| logs directory| Directory with server and extraction logs. See also section [Logging](../logging). |
| config directory | Directory created automatically with the first extraction, containing all extractions and the corresponding log files. See also section [Backup](./backup-and-migration). |
| result-cache directory | Directory with extraction cache files. |
| BCDesigner.exe | Application that launches Board Connector Designer to create, test and monitor extractions.|
| BCService.exe | Application that launches Board Connector Server as Windows Service.  Usually boots automatically and runs in the background. |
| BCApiServer.exe| Unencrypted WCF service for retrieving metadata to the Designer.  |
| Theobald.Bc.Web.Listener.exe| Theobald.Bc.Web.Listener.exe a listener process that waits for HTTP requests. |
| Theobald.Bc.Web.Worker.exe| For each TCP connection the Theobald.Bc.Web.Listener.exe starts a new instance of Theobald.Bc.Web.Worker.exe, which processes all HTTP requests coming in over the TCP connection. |
| BCCleanup.exe| Application that cleans up the old server logs, as defined in the [server settings](../server/server-settings). |
| BCConfigServer.exe| Listener process waits for new connection requests from the Designer. |
| ConfigConverter.exe| Application that converts extractions, sources, etc. from previous version format to new format. Crucial when installing major releases and upgrading from e.g., version 3.x to 4.x. |
| uninstall.exe| Tool for uninstalling and removing Board Connector with all its components from your machine. |
| BOARDConnectorSetup.exe| Setup of the currently installed version. See also [Migrating to a Different Machine](./backup-and-migration#migration-to-a-different-machine).|
| Eula_Board Connector.rtf | Document containing the license agreement for the use of the software Board Connector.|
| BOARDConnectorLicense.json |  License file with information about the server, the component and runtime. |


{: .box-note }
**Note:** The Board Connector Server can be started as a console program for test purposes.
For more details on starting Board Connector Server as a console program see the knowledge base article [How to use target principal field](https://kb.theobald-software.com/xtract-universal/target-principal-TPN) (Xtract Universal example).

### Unattended Installation
{% include _content/en/silent-setup.md %}

### New Installation and Update

{: .box-warning}
**Warning! Data loss:**
System updates or changes can restrict software functionalities and this may lead to data loss. 
Create a backup of the directory: `C:\Program Files\BOARDConnector\config` at regular intervals.

A regular update of the software is crucial for stable performance, especially major changes and high ([H]) priority
updates. Check the [Version history](https://kb.theobald-software.com/version-history) for updates. A newer version
can be installed over the older version. All settings and created objects are preserved. When migrating data and
settings to another server, follow the instructions described in section [Backup and Migration](./backup-and-migration).

{: .box-tip }
**Tip:** Subscribe via [email](mailto:info@theobald-software.com) to Theobald Software’s regular newsletter that
informs about changes in the version history and release notes.

1. Check if you have a working test environment with a valid license and maintenance.
2. Make sure that the test environment is a copy of the current production environment.
3. Check the [Version History](https://kb.theobald-software.com/version-history) and release notes in the
knowledge base to check, if update is needed.
4. Create a [backup](./backup-and-migration) of the current installation.
5. Conduct any necessary preparations and changes as described in the Release Note / Version History. In case of major changes, use the ConfigConverter.

### Upgrading Major Releases - ConfigConverter

There are two ways of upgrading the product version from BC 2.x and 3.x to BC 4.x:
- Upgrade during installation
- Manual upgrade


#### Upgrade During Installation
1. Start the Board Connector setup.
2. Make sure to mark the checkbox **Convert config files** checkbox. <br>
The option *Convert config files* starts the *ConfigConverter* application, which ensures that all extractions, source systems, server and user settings from BC 2.x or 3.x are available in the new version. <br> 
![BC-Setup](/img/content/board/BC_Setup_2.png){:class="img-responsive"}
3. Confirm the conversion process in the command line pop-up window.  
![BC3_Migration_2.png](/img/content/board/BC_Migration_3.png){:class="img-responsive"}


#### Manual Upgrade
If the *ConfigConverter* is not executed automatically during installation, the converter can also be started manually from the installation directory: ``C:\Program Files\BOARDConnector``. <br>

![BC3_Migration_3](/img/content/XU3_Migration_3.png){:class="img-responsive"}

{:.box-note}
**Note:** Any issues that may occur during the conversion process are displayed in the command line window. Copy and send the command line context to the support team, if required.   

****
#### Related Links
- [Backup and Migration](./backup-and-migration)
