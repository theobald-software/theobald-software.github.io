---
ref: ecs-requirements-and-installation-01
layout: page
title: System Requirements
description: System Requirements
product: erpconnect-services
parent: requirements-and-installation
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=ecs-system-requirements
---

**SharePoint Server System**

- Microsoft SharePoint Server, Foundation, Standard or Enterprise Edition, version 2013, 2016, or 2019. SharePoint 2010 is not actively supported any longer!
- In an SharePoint farm the installation must be executed on the SharePoint server hosting the Central Administration.
- The **SharePoint Administration service** must be started to be able the install ERPConnect Services.
- The **SharePoint Timer service** must be started to be able the install ERPConnect Services.
- On a SharePoint server the **Microsoft SharePoint Foundation Web Application Service** must be started to be able to start the ERPConnect Service.
- .NET-Framework 4.5.2 (SP2010-2016)
- .NET-Framework 4.7.2 (SP2019)

**Privileges**

- Farm Administrator privileges are required to install ERPConnect Services.

**Development System for ERPConnect Services**

The development system provides all the tools necessary for the solution developer to create and maintain ERPConnect Services solutions. The development system can be combined with the SharePoint Server system (see below) on a single machine.

- 32-bit oder 64-bit Windows client- or server operating system
- Visual Studio, version 2010, 2012, 2013, 2015
- .NET-Framework 4.5.2
- Librfc32.dll or SAPGUI client

**Supported SAP Releases**

- SAP R/3 Version 4.0B and higher versions or SAP ECC.
- SAP S/4 HANA
- SAP BW Version 3.1 and higher.
- SAP BW/4 HANA

The Integration occurs on the SAP application server level. The database under the SAP system is irrelevant. 
SAP systems on HANA particularly are supported without any restrictions.  

**SAP Authentication**  

- Custom authentication.
- SAP authentication: SSO (Single Sign On) or SAP credentials.
- SAP system or dialog user with appropriate [authority objects](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights).

**Ports**

Following ports have to be opened depending on the SAP system, 
where nn is the instance number of the SAP system (e.g. 00 or 99).

- SAP Application Server: Port 33nn
- SAP Message Server (Load Balancing): Port 36nn
- Secure Network Communications (SNC): Port 48nn
- SAP Router: Port 3399

**SAP Licenses**

Additional SAP licenses might be required for extracting data from SAP. Contact SAP to verify these requirements.

**SAP RFC libraries**

On all SharePoint servers where the ECS Service is installed and used the RFC libraries relevant for your SAP system environment have to be available and accessable:  

- librfc32.dll 64-bit or 32-bit version OR NetWeaver RFC libraries 64-bit or 32-bit version. 

You can download the libraries from the SAP Service Marketplace.