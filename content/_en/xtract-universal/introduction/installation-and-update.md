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
progresstate: 5
---
### Prerequisites

{: .box-note }
**Note:** administrator permissions are required to install Xtract Universal.

### Installation Routine

The installation program *XtractUniversalSetup.exe* is an industry standard installation routine.  Execute the *XtractUniversalSetup.exe* file and follow the instructions of the installation program.

When starting the installation program, optional components (1) can be selected during the setup. When selecting a component details are displayed in the description field (2).

![XU-Setup](/img/content/xu/XU_Setup_2.png){:class="img-responsive"}

|Component | Description |
|:----|:---|
|Tableau Extract API | Component is only required for Tableau destination |
|Main Program Files | Default setting of the installation routine |
|Start Menu Shortcut | Component that adds shortcuts to the start menu |
|Convert Config files | Converts extractions, sources, destinations, etc. from previous version format to new format. Crucial when installing major releases and upgrading from e.g., version 3.x to 4.x.|
Install Service | Installs the server component as a windows service and automatically boots it. See also section [Architecture](./architecture).|


The license installation procedure is described in the section [Installing the license](license#installing-the-xtract-universal-license---xtractuniversallicensejson).

#### Installation Folder Files
The list below shows several most important files that are placed into the default directory ``C:\Program Files\XtractUniversal`` after installation:

|Filename | Description |
|:----|:---|
| ABAP folder | Folder with customer-specific function modules (.txt) corresponding to SAP transport requests (.zip).|
| logs folder| Folder with server and extraction etc. logs. See also section [Logging](../logging). |
| config folder | Folder created automatically with the first extraction, containing all extractions and the corresponding log files. See also section [Backup](#backup). |
| result-cache folder | Folder with extraction cache files, only applicable for pull destinations. See also section [Pull Destinations](../xu-destinations#pull-and-push-destinations)|
| xu.exe | Command line tool used for scheduling extractions (automation). See also section [Scheduling an Extraction](../advanced-techniques/scheduling_extraction) |
| XtractDesigner.exe | Application that launches Xtract Universal Designer to create, test and monitor extractions.|
| XtractService.exe | Application that launches Xtract Universal Server as XU Windows Service.  Usually boots automatically and runs in the background. |
| ConfigConverter.exe| Application that converts extractions, sources, destinations, etc. from previous version format to new format. Crucial when installing major releases and upgrading from e.g., version 3.x to 4.x. |
| XtractLicenseManager.exe | Application to manage and view licenses.|
| uninstall.exe| Tool for uninstalling and removing Xtract Universal with all its components from your machine. |
| Eula_xtractUniversal.rtf | Document containing the license agreement for the use of the software Xtract Universal.|
| XtractUniversalLicense.json |  License file with information about the server, the component and runtime. |


{: .box-note }
**Note:** The Xtract Universal Server can be started as a console program for test purposes.

For more details on starting Xtract Universal Server as a console program see section [Troubleshooting](./troubleshooting) and the knowledge base article [How to use target principal field](https://kb.theobald-software.com/xtract-universal/target-principal-TPN).


### New Installation and Update

{: .box-warning}
**Warning! Data loss:**
System updates or changes can restrict software functionalities and this may lead to data loss. 
Create a backup of the directory: `C:\Program Files\XtractUniversal\config` at regular intervals.

A regular update of the software is crucial for stable performance, especially major changes and high ([H]) priority
updates. Check the version history (https://kb.theobald-software.com/version-history) for updates. A newer version
can be installed over the older version. All settings and created objects are preserved. When migrating data and
settings to another server, follow the instructions described in section [Backup and Migration](./backup-and-migration).

#### Update Preparation

{: .box-tip }
**Tip:** Subscribe via [email](mailto:info@theobald-software.com) to Theobald Software’s regular newsletter that
informs about changes in the version history and release notes.

1. Check if you have a working test environment with a valid license and maintenance.
2. Make sure that the test environment is a copy of the current productive environment.
3. Check the [Version History](https://kb.theobald-software.com/version-history) and release notes in the
knowledge base to check, if update is needed.
4. Create a [backup](./backup-migration) of the current installation.
5. Conduct any necessary preparations and changes as described in the Release Note / Version History,
especially for major changes and high priority **([H])** update recommendation.

There are two ways of upgrading the product version from XU 2.x and 3.x to XU 4.x:
- Upgrade during installation
- Manual upgrade


### Upgrade During Installation
1. Start the [installation routine](../introduction/installation-and-backup).
2. Make sure to mark the checkbox **Convert config files** checkbox. <br>
The option *Convert config files* starts the *ConfigConverter* application, which ensures that all extractions, source systems, destinations, server and user settings from XU 2.x or 3.x are available in the new version. <br>
Fore more information about installation folder files see also section [Installation and Backup](../introduction/installation-and-backup). 
![XU3_Migration_1](/img/content/XU4_Migration_1.png){:class="img-responsive"}
3. Confirm the conversion process in the command line pop-up window.  
![XU3_Migration_2](/img/content/XU3_Migration_2.png){:class="img-responsive"}


### Manual Upgrade
If the *ConfigConverter* is not executed automatically during installation, it can also be started manually from the installation directory: ``C:\Program Files\XtractUniversal``. <br>

![XU3_Migration_3](/img/content/XU3_Migration_3.png){:class="img-responsive"}

{:.box-note}
**Note:** Any issues that may occur during the conversion process are displayed in the command line window. Copy and send the command line context to the support team, if required.   

****
#### Related Links
- [Backup and Migration](./backup-and-migration)