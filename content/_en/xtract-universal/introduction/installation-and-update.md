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

{% include _content/en/requirements/productversion.md %}	

### Setup

*XtractUniversalSetup.exe* is an industry standard setup. Execute the *XtractUniversalSetup.exe* file and follow the instructions of the setup.

When starting the setup, components can be selected during the installation. 

![XU-Setup](/img/content/xu/XU_Setup_2.png){:class="img-responsive"}

|Component | Sub Component| Description |
|:----|:---|:---|
|Main Product Files |- | All required files to use Xtract Universal. |
|Designer | -| Installs the Designer application, uncheck the option if you want to use Xtract Universal without a graphical interface. |
|Server | | Installs the Xtract Universal Server |
|<!---->| Install Service| Installs the server component as a windows service. See also section [Start Server](../server/start-server). |
| <!---->  |  Convert config files | Converts extractions, sources, destinations, etc. from previous version format to new format. Crucial when installing major releases and upgrading from e.g., version 3.x to 4.x.|
|Start Menu Shortcuts |- |Component that adds shortcuts to the start menu.|

{: .box-note }
**Note:** Mark the option “Server > Install Service” during the installation, as installing a server without the service is only used for development purposes.

The license installation procedure is described in the section [Installing the license](./license#installing-the-xtract-universal-license---xtractuniversallicensejson).

### Program Directory Files
The list below shows several most important files that are placed into the default directory ``C:\Program Files\XtractUniversal`` after installation:

|Filename | Description |
|:----|:---|
| ABAP directory | Directory with SAP function modules. Read the readme.txt within the directory for more information. See also [SAP Customizing](../sap-customizing).|
| Alteryx directory| Directory with a plugin setup for the [Alteryx destination](../destinations/alteryx#requirements).|
| logs directory| Directory with server and extraction etc. logs. See also section [Logging](../logging). |
| config directory | Directory containing all SAP connections, extractions, destinations and other settings. See also [Backup and Migration](../advanced-techniques/backup-and-migration).|
| powerbi directory| Directory containing files related to [Power BI Connector Destination](../destinations/Power-BI-Connector).|
| result-cache directory | Directory with extraction cache files, only applicable for pull destinations. See also sections [Pull Destinations](../destinations#pull-and-push-destinations) and [General Settings > Misc. Tab > Cache Result Setting](../getting-started/general-settings#misc-tab).|
| xu.exe | Command line tool used for executing extractions. See also section [Scheduling an Extraction](../execute-and-automate-extractions). |
| xu-config.exe | Command line tool used for creating extractions. For more information, refer to the knowledge base article [Creating extractions without using the Xtract Universal designer GUI](https://kb.theobald-software.com/xtract-universal/using-config-command-line-tool). |
| XtractDesigner.exe | [Xtract Universal Designer](../getting-started/designer-overview) application to create, test and monitor extractions.|
| ConfigConverter.exe| Application that converts extractions, sources, destinations, etc. from previous version format to new format. Crucial when installing major releases and upgrading from e.g., version 3.x to 4.x. |
| uninstall.exe| Tool for uninstalling and removing Xtract Universal with all its components from your machine. |
|XtractUniversalSetup.exe| Setup of the currently installed version. See also [Migrating to a Different Machine](../advanced-techniques/backup-and-migration#migration-to-a-different-machine).|
| Eula_XtractUniversal.rtf | Document containing the license agreement for the use of the software Xtract Universal.|
| XtractUniversalLicense.json |  License file with information about the server, the component and runtime. |


{: .box-note }																   
**Note:** For more details on starting the Xtract Universal Server as a console application see the knowledge base article [How to use target principal field](https://kb.theobald-software.com/xtract-universal/target-principal-TPN).

### Unattended Installation
{% include _content/en/silent-setup.md %}	

### How to use the Standalone Designer

[My Theobald Software - Portal for Customers and Partners](https://my.theobald-software.com/) offers a download option for a standalone version of the Xtract Universal Designer for Windows.
The standalone Designer can be used to connect to a central Xtract Universal repository without any software installation.

#### Prerequisites
The [Xtract Universal Service](../server/start-server) has to be installed on a central server instance e.g., a company-wide application server.<br>
As a result, access to a common Xtract Universal repository (`C:\Program Files\XtractUniversal\config`) is possible and can be used by several Xtract Universal users.

#### Starting the Standalone-Designer
When the download of the standalone Designer is completed, unpack the files from the `.zip` folder to any directory.<br>
The folder contains two executable files:<br>
- `XtractDesigner.exe` starts the Designer.
- `xu.exe` is the command line tool used for executing extractions, see [Call via Commandline](../execute-and-automate-extractions/call-via-commandline).

Use the `XtractDesigner.exe` file to start the Designer. Before you connect to a central XU-Server make sure you have access rights to the server and repository, see [Access Management](../security/access-management).

{: .box-note }																   
**Note:** When updating the software, you have to manually download the latest version of the standalone Designer from [My Theobald Software - Portal for Customers and Partners](https://my.theobald-software.com/) and replace the old files.

{: .box-note }																   
**Note:** The standalone Designer might be classified as 'dangerous' by antivirus software. Make sure the Designer is not blocked by antivirus software.

### New Installation and Update																																										   

{: .box-warning}
**Warning! Data loss:**
System updates or changes can restrict software functionalities and this may lead to data loss. 
Create a backup of the directory: `C:\Program Files\XtractUniversal\config` at regular intervals.

A regular update of the software is crucial for stable performance, especially major changes and high ([H]) priority
updates. Check the [Version history](https://kb.theobald-software.com/version-history) for updates. A newer version
can be installed over the older version. All settings and created objects are preserved. When migrating data and
settings to another server, follow the instructions described in section [Backup and Migration](../advanced-techniques/backup-and-migration).

#### Update Preparation

{: .box-tip }
**Tip:** Subscribe via [email](mailto:info@theobald-software.com) to Theobald Software’s regular newsletter that
informs about changes in the version history and release notes.

1. Check if you have a working test environment with a valid license and maintenance.
2. Make sure that the test environment is a copy of the current production environment.
3. Check the [Version History](https://kb.theobald-software.com/version-history) and release notes in the
knowledge base to check, if an update is needed.
4. Create a [backup](../advanced-techniques/backup-and-migration) of the current installation.
5. Conduct any necessary preparations and changes as described in the Release Note / Version History. In case of major changes, use the ConfigConverter.

### Upgrading Major Releases - ConfigConverter

There are two ways of upgrading the product version:
- Upgrade during installation
- Manual upgrade


#### Upgrade During Installation
1. Start the Xtract Universal setup.
2. Make sure to mark the checkbox **Convert config files** checkbox. <br>
The option *Convert config files* starts the *ConfigConverter* application, which ensures that all extractions, source systems, destinations, server and user settings are available in the new version. <br> 
![XU-Setup](/img/content/xu/XU_Setup_2.png){:class="img-responsive"}
3. Confirm the conversion process in the command line pop-up window.  
![XU3_Migration_2](/img/content/XU3_Migration_2.png){:class="img-responsive"}


#### Manual Upgrade
If the *ConfigConverter* is not executed automatically during installation, the converter can also be started manually from the installation directory: ``C:\Program Files\XtractUniversal``. <br>

![XU3_Migration_3](/img/content/XU3_Migration_3.png){:class="img-responsive"}

{:.box-note}
**Note:** Any issues that may occur during the conversion process are displayed in the command line window. Copy and send the command line context to the support team, if required.   

****
#### Related Links
- [Backup and Migration](../advanced-techniques/backup-and-migration)
