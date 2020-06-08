---
ref: bc-introduction-03
layout: page
title: Installation and Backup
description: Installation and Backup
product: board-connector
parent: introduction
permalink: /:collection/:path
weight: 3
lang: en_GB
progressstate: 5
---
### Prerequisites

{: .box-note }
**Note:** administrator permissions are required to install BOARD Connector.

### Installation Routine

The installation program *BoardConnectorSetup.exe* is an industry standard installation routine.  Execute the *BoardConnectorSetup.exe* file and follow the instructions of the installation program.

When starting the installation program, optional components (1) can be selected during the setup. When selecting a component details are displayed in the description field (2).

![BC-Setup](/img/content/board/BC_Setup_2.png){:class="img-responsive"}

|Component | Description |
|:----|:---|
|Main Program Files | Default setting of the installation routine |
|Start Menu Shortcut | Component that adds shortcuts to the start menu |
|Convert Config files | Converts extractions, sources, destinations, etc. from previous version format to new format. Crucial when installing major releases and upgrading from e.g., version 3.x to 4.x.
|Install Service | Installs the server component as a windows service and automatically boots it. See also section [Architecture](./architecture).|

The license installation procedure is described in the section [Installing the license](license#installing-the-xtract-universal-license---xtractuniversallicensejson).

#### Installation Folder Files
The list below shows several most important files that are placed into the default directory ``C:\Program Files\BoardConnector`` after installation:

|Filename | Description |
|:----|:---|
| ABAP folder | Folder with customer-specific function modules (.txt) corresponding to SAP transport requests (.zip).|
| logs folder| Folder with server and extraction etc. logs. See also section [Logging](../logging). |
| config folder | Folder created automatically with the first extraction, containing all extractions and the corresponding log files. See also section [Backup](#backup). |
| result-cache folder | Folder with extraction cache files. |
| BCDesigner.exe | Application that launches BOARD Connector Designer to create, test and monitor extractions.|
| BCService.exe | Application that launches BOARD Connector Server as Windows Service.  Usually boots automatically and runs in the background. |
| ConfigConverter.exe| Application that converts extractions, sources, destinations, etc. from previous version format to new format. Crucial when installing major releases and upgrading from e.g., version 3.x to 4.x. |
| uninstall.exe| Tool for uninstalling and removing BOARD Connector with all its components from your machine. |
| Eula_BOARDConnector.rtf | Document containing the license agreement for the use of the software BOARD Connector.|
| BOARDConnectorLicense.json |  License file with information about the server, the component and runtime. |


{: .box-note }
**Note:** The BOARD Connector Server can be started as a console program for test purposes.

For more details on starting BOARD Connector Server as a console program see section [Troubleshooting](./troubleshooting) and the knowledge base article [How to use target principal field](https://kb.theobald-software.com/xtract-universal/target-principal-TPN) (Xtract Universal example).


### Backup

Before installing a new product version or updating the current version, make sure to create a backup. 
Backup allows you to easily switch back to the previous version of BOARD Connector, if needed. See also section [Update Installation](./update#how-do-i-create-a-backup).


{: .box-warning}
**Warning! Data loss:**
System updates or changes can restrict software functionalities and this may lead to data loss. 
Create a backup of the directory: `C:\Program Files\BoardConnector\config` at regular intervals.

All settings for extractions, sources, destinations, etc. are stored in the subdirectory *config*. 

### New Installation and Update

A newer version can be installed over the older version. All settings and created objects are preserved. See also section [Installing an Update](./update#installing-an-update-or-a-newer-version-on-a-test-environment).


### Version History
A list of the versions can be found in the [version history](https://kb.theobald-software.com/version-history/board-connector-version-history).
To check the version of your product, open the Designer, navigate to **Help > Version History** or press **[F12]**.