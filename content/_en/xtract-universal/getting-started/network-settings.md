---
ref: xu-getting-started-01
layout: page
title: 0. Setting Up Xtract Universal
description:  0. Setting Up Xtract Universal
product: xtract-universal
parent: getting-started
permalink: /:collection/:path
weight: 1
lang: en_GB
progressstate: 5
---

This section shows how to set up Xtract Universal with your SAP system. <br>
It also includes information on which SAP installations and customizations are mandatory for using components of the SAP connector.

### Network Settings

#### SAP Ports

The following ports between the Windows server that runs Xtract Universal and the SAP server, from which data is extracted, must be open:

| SAP NetWeaver Component | Port<br> NN = System number of the SAP system, <br>see [TCP/IP Ports of All SAP Products](https://help.sap.com/viewer/ports) |
| ------------- |:-------------:|
| SAP Application Server | 33\<NN> |
| SAP Message Server | 36\<NN> |
| Secure Network Communication (SNC)| 48\<NN\> |
| SAP-Router | 3399 |

#### Xtract Universal Ports

- The default port for the communication between the Xtract Universal Designer and the Xtract Universal (configuration) server is 8064.
- The default ports for the communication with the Xtract Universal (web) server are 8065 (HTTP) or 8165 (HTTPS).

The ports can be changed in the [Server Settings](../server/server-settings) of the Designer.

### SAP User Rights

To connect and extract data from an SAP system an SAP user with dedicated user rights is needed.
The required user rights are dependant on the [components](../index#extractiontypes) that are used for the data extraction.

- The user rights needed to establish an SAP Connection via RFC are listed in the knowledge base article [Authority Objects - SAP User Rights: General Authorization Objects](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#general-authorization-objects).
- The user rights needed for each component (e.g,. Table, Report, ODP, ect.) are also listed in the knowledge base article [Authority Objects - SAP User Rights](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).

Have the SAP Basis team set up a user with the designated user rights.
The SAP user can be a system user or a dialog user. 

{: .box-tip }
**Tipp:** We recommend using an SAP system user for the production environment and an SAP dialog user with further administration rights (SE37, SE16, RSA3, ...)for the evaluation phase.
During evaluation a consultant might need to check data in the SAP system using the SAP GUI. An SAP system user cannot be used to acces SAP via the SAP GUI.

### Installation & Customization of SAP

The installation of function modules or a customization of your SAP system is dependant on the [components](../index#extractiontypes) that are used for the data extraction.
The following table shows components and their respective SAP customization:

| Component | Details |
| ------------- |:-------------:|
| Table <br>Extraction & Joining of SAP Tables and Views | Installation of a function module is recommended and depending on your scenario required, see [Custom function module for Table](../sap-customizing/custom-function-module-for-table-extraction). |
| Report <br>Extraction of ABAP reports | Installation of a function module is required, see [Custom function module for Reports](../sap-customizing/install-report-custom-function-module). |
| DeltaQ <br>Extraction of (OLTP / Export) DataSources and (BW) Extractors | SAP customization is required, see [Customizing for DeltaQ](../sap-customizing/customizing-for-deltaq). |
| OHS (Open Hub Services) Extraction of OHS destinations from a BW system | SAP customization is required, see [Preparation for OHS in BW](../sap-customizing/preparation-for-ohs-in-bw). |

All other components do not require any kind of customization on your SAP system.<br>
For more information on components and their SAP dependencies, see [Requirements: Installation and Configuration on SAP](../introduction/requirements#installation-and-configuration-on-sap).

#### Installation of Function Modules

SAP transport requests for the installation of function modules are provided.<br>
The transport requests are located in the installation directory: `C:\ProgramFiles\[XtractProduct]\ABAP\`.
