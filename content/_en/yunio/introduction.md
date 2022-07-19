---
ref: yunio-03
layout: page
title: Introduction to yunIO
description: Introduction
product: yunio
parent: yunio
childidentifier: introduction
permalink: /:collection/:path
weight: 5
lang: en_GB
redirect_from:
  - en/yunio/introduction/requirements
  - en/yunio/introduction/installation-and-update
  - en/yunio/introduction/license
progressstate: 5
---

yunIO is a connector focused on cloud environments that provides REST-based services for read and write access to connected SAP systems. <br>
The web services can be easily integrated into your process automation solutions, e.g. Power Automate, Nintex, etc.

#### Automation
![yunIO-Automation](/img/content/yunio/yunio-automation.png){:class="img-responsive" width="800px" }<br>
#### Business Processes
![yunIO-Business-Processes](/img/content/yunio/yunio-business.png){:class="img-responsive" width="800px" }<br>
#### Data Management
![yunIO-Data-Management](/img/content/yunio/yunio-data-management.png){:class="img-responsive" width="800px" }

## Requirements

### Supported SAP Systems and releases
All communication with SAP is performed via the RFC protocol. 
All SAP ABAP based systems that provide RFC connectivity are supported.
The integration occurs at SAP application server level. Therefore, the database used by the SAP system is irrelevant. 
SAP ABAP Systems on any database (including HANA) are supported. 
This means that the operating system of the SAP system is irrelevant - all operating systems are supported.
SAP Systems running on Big Endian and Little Endian hardware are supported.

SAP Releases 4.6C and newer are supported. Including the following:
<br/> 	
* mySAP
* SAP Application Server ABAP, Message Server, Router, Standalone Gateway
* SAP Business Suite 7 (CRM, SRM, SCM etc.)
* SAP Business All in One, CAR, APO, PI, IS-U etc.
* SAP BW 3.1 and later
* SAP BW/BI 7.x
* SAP BW/4HANA
* SAP ERP / ECC 5.0 / ECC 6.0 (including all EhPs)
* SAP R/3 Version 4.6C and later
* SAP S/4HANA

The following SAP Releases have only limited support:
- SAP S/4HANA Cloud Extended Edition (EX)

{% include _content/en/requirements/sap-authentication-xtract.md %}
{% include _content/en/requirements/sap-misc.md %}
{% include _content/en/requirements/operating-systems.md %}

### Supported Web Browsers
yunIO supports current versions of the following web browsers: 
- Firefox 
- Chrome
- Edge
- Safari

### Hardware 
#### Processor Cores
Minimum: 2 Cores. 
1 additional core is required for each additional parallel extraction. 

#### Processor Speed   
Minimum: Processor: 1.4 GHz, Recommended: 2.0 GHz or faster.

#### Main Memory
Minimum: 8 GB, Recommended: 12 GB for up two parallel extractions.
4 GB dedicated memory in average for each additional parallel extraction.
You must check the exact storage requirements of an extraction in your scenario.<br>

Memory consumption depends on many factors including component type (i.e. Table, Extractor or BW Query), number of columns and number of rows in each data package (i.e. package size). <br> 
E.g. the BW Cube component needs for extracting and processing data more main memory space than the Table component for the same data amount. 


#### Disk space
For the installation 150 MB disk space is required.

#### 64-Bit Environment	
The product can be installed on 64-Bit operating systems only.


## Installation and Update

yunIO provides a Windows service for the communication with the SAP system and comes with an embedded Web UI, the yunIO Designer.<br>
The yunIO service is installed on a local or cloud-hosted Windows server environment. 

### Setup

{: .box-note }																   
**Note:** Administrator rights are required to install yunIO.

`yunIOSetup.exe` is an industry standard setup. Execute the `yunIOSetup.exe` file and follow the instructions of the setup.

When starting the setup the following components can be selected during the installation. 

![XU-Setup](/img/content/yunio/yunio-setup.png){:class="img-responsive"}

|Component | Sub Component| Description |
|:----|:---|:---|
|Main Product Files | | All required files to use yunIO. |
|<!---->| Install Service| Installs the server component as a windows service. |
|Start Menu Shortcuts |- |Component that adds shortcuts to the start menu.|
| Enable .NET updates via Windows Update <br>for Windows Server Edition. |- | Adds a registry entry that automatically updates .NET.|
|Open the yunIO Designer after installation |- |Opens the yunIO Designer in your standard web browser.|

The license installation procedure is described in the section [Installing the license](./license).

#### Enable .NET updates via Windows Update for Windows Server Edition

This setup option is only available on Windows Server Editions and only if the option is not already active.<br>
It adds a registry entry (`[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\.NET]//"AllowAUOnServerOS"=dword:00000001`) that automatically updates .NET via Windows Update. 
To deactivate this option, delete the registry entry.

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

## License

### About the licensing concept of yunIO

yunIO is licensed per Windows server where the solution is installed.
A demo license valid for 30 days is automatically provided with the installation of yunIO.

A regular license is provided in the [costumer portal - My Theobald Software](https://my.theobald-software.com/) after purchasing the product. 
The product license is bound to your company and the server on which the yunIO server runs.<br>
 

### Installing the yunIO license - yunIOLicense.json
For installing the regular license, place the regular yunIOLicense.json into the following directory of the server: <br>
`C:\Program Files\Theobald Software\YunIO`

A restart of the yunIO service is not necessary.

### About yunIO - Info Menu

{: .box-tip }
**Tip:** To inspect your current license data, go to the main menu of yunIO and navigate to **[About]**. The version number is displayed next to the page title.

The *About* menu also provides direct links to the following Theobald Software support pages:
- Customer Portal
- Online Help
- Knowledge Base
- Support

![Demo_License](/img/content/yunio/About.png){:class="img-responsive"}

### Maintenance
General information on maintenance pricing is available on the [official website](https://theobald-software.com/en/yunio/) of Theobald Software and at [My Theobald Software - Portal for Customers and Partners](https://my.theobald-software.com/). 
Contact the [sales department](mailto:sales@theobald-software.com) for more information about available maintenance options.<br>
In case of technical difficulties, contact the support team by email: [https://support.theobald-software.com](https://support.theobald-software.com).


****
#### Related links
- [My Theobald Software - Portal for Customers and Partners](https://my.theobald-software.com/)