---
ref: yunio-introduction-03
layout: page
title: Installation and Update
description: Installation and Update
product: yunio
parent: introduction
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=installation
progressstate: 5
---

yunIO is a Windows service that comes with an embedded Web UI.<br>
The yunIO service is installed on a local or cloud-hosted Windows server environment. 

### Setup

{: .box-note }																   
**Note:** Administrator rights are required to install yunIO.

`yunIOSetup.exe` is an industry standard setup. Execute the `yunIOSetup.exe` file and follow the instructions of the setup.

When starting the setup, components can be selected during the installation. 

![XU-Setup](/img/content/yunio/yunio-setup.png){:class="img-responsive"}

|Component | Sub Component| Description |
|:----|:---|:---|
|Main Product Files | | All required files to use yunIO. |
|<!---->| Install Service| Installs the server component as a windows service. |
|Start Menu Shortcuts |- |Component that adds shortcuts to the start menu.|
|Open the yunIO Designer after installation |- |Opens the yunIO Designer in your standard web browser.|

The license installation procedure is described in the section [Installing the license](./license).

### Program Directory Files
The list below shows several important files that are placed into the default directory `C:\Program Files\Theobald Software\yunIO` after installation:

|Filename | Description |
|:----|:---|
| logs directory| Directory with server and extraction etc. logs.|
| config directory | Directory containing all SAP connections, extractions and other settings.|
| Uninstall yunIO shortcut| Shortcut for uninstalling and removing yunIO with all its components from your machine. |
| yunIOSetup.exe| Setup of the currently installed version.|
| yunIOLicense.json | License file with information about the component and runtime. |


### New Installation and Update																																										   

{: .box-warning}
**Warning! Data loss:**
System updates or changes can restrict software functionalities and this may lead to data loss. 
Create a backup of the directory: `C:\Program Files\Theobald Software\yunIO\config` at regular intervals.

A regular update of the software is crucial for stable performance, especially major changes and high ([H]) priority
updates. Check the [Version history](https://kb.theobald-software.com/version-history) for updates. A newer version
can be installed over the older version. All settings and created objects are preserved. 

#### Update Preparation

{: .box-tip }
**Tip:** Subscribe via [email](mailto:info@theobald-software.com) to Theobald Software’s regular newsletter that
informs about changes in the version history and release notes.

1. Check if you have a working test environment with a valid license and maintenance.
2. Make sure that the test environment is a copy of the current production environment.
3. Check the [Version History](https://kb.theobald-software.com/version-history) and release notes in the
knowledge base to check, if an update is needed.
4. Create a backup of the current installation.
5. Conduct any necessary preparations and changes as described in the Release Note / Version History.

