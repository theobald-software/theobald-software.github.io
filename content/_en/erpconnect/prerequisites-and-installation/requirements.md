---
ref: ec-prerequisites-and-installation-01
layout: page
title: Requirements
description: System Requirements
product: erpconnect
parent: prerequisites-and-installation
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=prerequisites
---

### .NET Framework

ERPConnect (without LINQ to ERP) consists of three .NET assemblies that [target different frameworks](https://docs.microsoft.com/en-US/dotnet/standard/frameworks):
-	ERPConnect35.dll (targets .NET Framework 3.5 SP1)
-	ERPConnect45.dll (targets .NET Framework 4.5.2)
-	ERPConnectStandard20.dll (targets .NET Standard 2.0)

That results in the following compatibility matrix: <!--- bei den Sätzen fehlen Verben. Die Personalpronomen müssen ersetzt werden--->

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

{% include _content/en/sap-releases.md %}

Installation of custom function modules / transport requests is not required.

{% include _content/en/operating-systems.md %}


### Visual Studio

- Visual Studio 2017
- Visual Studio 2015 (until 14.10.2025)
- Visual Studio 2013 (until 09.04.2024)
- Visual Studio 2012 Update 5 (until 10.01.2023)

{: .box-note }
**Note:** Visual Studio Express versions don't support the LINQ to ERP Designer.


### Other Applications and Frameworks

- [SAP NetWeaver RFC Library 7.50](https://launchpad.support.sap.com/#/notes/2573790) and [Visual C++ 2013 Runtime](https://www.microsoft.com/en-US/download/details.aspx?id=40784)


### Memory
* 2 GB or more recommended (depends on actual use case)


### Disk Space
* About 12 MB disk space are required for a full installation.


### 32/64-Bit Environment
* Both x86 and x64 platforms are supported.


### Security Settings
 	
* For logging on to SAP, a system or dialog user with appropriate [authority objects](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights) is required.
* Plain authentication (user/password), Secure Network Communications (SNC) with and without Single Sign-On (SSO) and SAP Logon Tickets (MYSAPSSO2) are supported.


### Network Settings
 	
Ports need to be opened depending on the SAP System connection technique.
Details can be found in the knowledge base article [Authority Objects - SAP User Rights](https://kb.theobald-software.com/sap/how-to-check-the-accessibility-to-a-sap-system).
