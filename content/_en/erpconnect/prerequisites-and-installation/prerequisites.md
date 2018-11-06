---
ref: ec-prerequisites-and-installation-01
layout: page
title: Prerequisites
description: Prerequisites
product: erpconnect
parent: prerequisites-and-installation
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=prerequisites
---

## .NET Framework

ERPConnect (without LINQ to ERP) consists of three .NET assemblies, that [target different frameworks]((https://docs.microsoft.com/en-US/dotnet/standard/frameworks):
-	ERPConnect35.dll (targets .NET Framework 3.5 SP1)
-	ERPConnect45.dll (targets .NET Framework 4.5.2)
-	ERPConnectStandard20.dll (targets .NET Standard 2.0)

That results in the following compatibility matrix:

| |	ERPConnectStandard20.dll	| ERPConnect45.dll	| ERPConnect35.dll|
|:------|:------|:------ |:------ |
|.NET Framework 3.5 SP1	| | |	X|
|.NET Framework 4.0     | | |	X |
|.NET Framework 4.5	    | | |	X |
|.NET Framework 4.5.1	  | | |	X |
|.NET Framework 4.5.2 	 | | X	| X |
|.NET Framework 4.6	    | |	X |	X |
|.NET Framework 4.6.1 and newer |	X	| X |	X |
|.NET Core 2.0 and newer | X |	X	| X |
|Universal Windows Platform 10.0.16299 and newer	| X | | |	 	 

## SAP Releases
 	
* SAP R/3 Version 4.0B and later versions
* SAP ECC 6.0 or later
* SAP NW 7.0 or later
* SAP S/4HANA
* Business All-in-One
* SAP BW Version 3.1 and later.


SAP Business One and SAP Objects are not supported

| Component | SAP Release | Requirements to the SAP system |
| :-------- |:--- | :--- |
| Table | Rel. above 4.0B | Nothing. |
| Query | Rel. above 4.0B | Nothing. |
| BAPI | Rel. above 4.0B | Nothing. |
| BW Cube | Rel. above BW 3.1 | Nothing. | 


## Operating System

- Windows 10
- Windows Server 2016
- Windows 8.1 (until 10.01.2023)
- Windows 7 SP1 (until 14.01.2020)
- Windows Server 2012 R2 (until 10.10.2023)
- Windows Server 2012 (until 10.10.2023)
- Windows Server 2008 R2 SP1 (until 14.01.2020)
- Windows Server 2008 SP2 (until 14.01.2020)


## Visual Studio

- Visual Studio 2017
- Visual Studio 2015 (until 14.10.2025)
- Visual Studio 2013 (until 09.04.2024)
- Visual Studio 2012 Update 5 (until 10.01.2023)
- Visual Studio 2010 (until 14.07.2020)

* **Caution:** Visual Studio Express versions don't support the LINQ to ERP Designer.


## Other Applications and Frameworks

- [SAP NetWeaver RFC Library 7.50](https://launchpad.support.sap.com/#/notes/2573790) and [Visual C++ 2013 Runtime](https://www.microsoft.com/de-DE/download/details.aspx?id=40784)


## Memory
* 2 GB or more recommended (depends on actual use case)


## Disk Space
* About 12 MB disk space are required  for a full installation.


## 32/64-Bit Environment
* Both x86 and x64 platforms are supported.


## Security Settings
 	
* For logging on to SAP, a system or dialog user with appropriate [authority objects](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/7/67/authority-objects) is required.
* Plain authentication (user/password), Secure Network Communications (SNC) with and without Single Sign-On (SSO) and SAP Logon Tickets (MYSAPSSO2) are supported.


## Network Settings
 	
Ports need to be opened depending on the technique how the connection to an SAP System is made.
Details can be found [here](https://my.theobald-software.com/index.php?/Default/Knowledgebase/Article/View/70/0/how-to-check-the-accessibility-to-a-sap-system).
