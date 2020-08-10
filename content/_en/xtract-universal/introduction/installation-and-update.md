---
ref: xu-introduction-03
layout: page
title: Installation and Update
description: Installation and Update
product: xtract-universal
parent: introduction
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=installation
progressstate: 5
---
### Prerequisites

{: .box-note }
**Note:** administrator permissions are required to install Xtract Universal.

### Setup

*XtractUniversalSetup.exe* is an industry standard setup.  Execute the *XtractUniversalSetup.exe* file and follow the instructions of the setup.

When starting the setup, components (1) can be selected during the installation. When selecting a component details are displayed in the description field (2).

![XU-Setup](/img/content/xu/XU_Setup_2.png){:class="img-responsive"}

|Component | Description |
|:----|:---|
|Tableau Extract API | Component is only required for Tableau destination |
|Start Menu Shortcut | Component that adds shortcuts to the start menu |
|Convert Config files | Converts extractions, sources, destinations, etc. from previous version format to new format. Crucial when installing major releases and upgrading from e.g., version 3.x to 4.x.|
Install Service | Installs the server component as a windows service. See also section [Architecture](./architecture).|

The license installation procedure is described in the section [Installing the license](license#installing-the-xtract-universal-license---xtractuniversallicensejson).

#### Installation Directory Files
The list below shows several most important files that are placed into the default directory ``C:\Program Files\XtractUniversal`` after installation:

|Filename | Description |
|:----|:---|
| ABAP directory | Directory with SAP function modules. Read the readme.txt within the directory for more information. See also [SAP Customizing](../sap-customizing/).|
| Alteryx directory| Directory with a plugin setup for the [Alteryx destination](./xu-destinations/alteryx/alteryx-requirements).|
| logs directory| Directory with server and extraction etc. logs. See also section [Logging](../logging). |
| config directory | Directory containing all SAP connections, extractions, destinations and other settings. See also [Backup and Migration](./backup-and-migration).|
| powerbi directory| Directory containing files related to [Power BI Connector Destination](../xu-destinations/Power-BI-Connector/).|
| result-cache directory | Directory with extraction cache files, only applicable for pull destinations. See also sections [Pull Destinations](../xu-destinations#pull-and-push-destinations) and [General Settings > Misc. Tab > Cache Result Setting](../getting-started-xu/general-settings#misc-tab).|
| xu.exe | Command line tool used for executing extractions. See also section [Scheduling an Extraction](../advanced-techniques/scheduling_extraction). |
| XtractDesigner.exe | [Xtract Universal Designer](../getting-started-xu/designer-overview) application to create, test and monitor extractions.|
| ConfigConverter.exe| Application that converts extractions, sources, destinations, etc. from previous version format to new format. Crucial when installing major releases and upgrading from e.g., version 3.x to 4.x. |
| uninstall.exe| Tool for uninstalling and removing Xtract Universal with all its components from your machine. |
|XtractUniversalSetup.exe| Setup of the currently installed version. See also [Migrating to a Different Machine](./backup-and-migration#migration-to-a-different-machine).|
| Eula_XtractUniversal.rtf | Document containing the license agreement for the use of the software Xtract Universal.|
| XtractUniversalLicense.json |  License file with information about the server, the component and runtime. |


{: .box-note }
**Note:** For more details on starting Xtract Universal Server as a console application see section [Troubleshooting](./troubleshooting) and the knowledge base article [How to use target principal field](https://kb.theobald-software.com/xtract-universal/target-principal-TPN).


### New Installation and Update

{: .box-warning}
**Warning! Data loss:**
System updates or changes can restrict software functionalities and this may lead to data loss. 
Create a backup of the directory: `C:\Program Files\XtractUniversal\config` at regular intervals.

A regular update of the software is crucial for stable performance, especially major changes and high ([H]) priority
updates. Check the [Version history](https://kb.theobald-software.com/version-history) for updates. A newer version
can be installed over the older version. All settings and created objects are preserved. When migrating data and
settings to another server, follow the instructions described in section [Backup and Migration](./backup-and-migration).

#### Update Preparation

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

There are two ways of upgrading the product version from XU 2.x and 3.x to XU 4.x:
- Upgrade during installation
- Manual upgrade


#### Upgrade During Installation
1. Start the Xtract Universal setup.
2. Make sure to mark the checkbox **Convert config files** checkbox. <br>
The option *Convert config files* starts the *ConfigConverter* application, which ensures that all extractions, source systems, destinations, server and user settings from XU 2.x or 3.x are available in the new version. <br> 
![XU3_Migration_1](/img/content/XU4_Migration_1.png){:class="img-responsive"}
3. Confirm the conversion process in the command line pop-up window.  
![XU3_Migration_2](/img/content/XU3_Migration_2.png){:class="img-responsive"}


#### Manual Upgrade
If the *ConfigConverter* is not executed automatically during installation, it can also be started manually from the installation directory: ``C:\Program Files\XtractUniversal``. <br>

![XU3_Migration_3](/img/content/XU3_Migration_3.png){:class="img-responsive"}

{:.box-note}
**Note:** Any issues that may occur during the conversion process are displayed in the command line window. Copy and send the command line context to the support team, if required.   

****
#### Related Links
- [Backup and Migration](./backup-and-migration)