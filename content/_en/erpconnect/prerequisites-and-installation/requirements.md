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
-	ERPConnectStandard20.dll (targets .NET Standard 2.0)

That results in the following compatibility matrix: <!--- bei den Sätzen fehlen Verben. Die Personalpronomen müssen ersetzt werden--->

| |	ERPConnectStandard20.dll	| ERPConnect35.dll|
|:------|:------|:------ |
|.NET Framework 3.5 SP1	| |	X|
|.NET Framework 4.0     | |	X |
|.NET Framework 4.5	    | |	X |
|.NET Framework 4.5.1	  | |	X |
|.NET Framework 4.5.2 	 | | X |
|.NET Framework 4.6	    | |	X |
|.NET Framework 4.6.1 and newer |	X |	X |
|.NET Core 2.0 and newer | X | X |
|Universal Windows Platform 10.0.16299 and newer	| X | |	 	 

{% include _content/en/sap-releases.md %}

Installation of custom function modules / transport requests is not required.

{% include _content/en/operating-systems.md %}


### Visual Studio

- Visual Studio 2022
- Visual Studio 2019
- Visual Studio 2017
- Visual Studio 2015 (until 14.10.2025)
- Visual Studio 2013 (until 09.04.2024)
- Visual Studio 2012 Update 5 (until 10.01.2023)


### Other Applications and Frameworks

- [SAP NetWeaver RFC Library 7.50](https://launchpad.support.sap.com/#/notes/2573790) 
- [Visual C++ 2013 Runtime](https://www.microsoft.com/en-US/download/details.aspx?id=40784)

#### Netweaver RFC Library
ERPConnect supports the Netweaver RFC (SDK) as of version 4.6.0.  
To use it, set the Property *Protocol* of the *R3Connection* object to *ClientProtocol.NWRFC* before opening the connection (default setting). 

```
R3Connection.Protocol = ClientProtocol.NWRFC;
```

For 64-Bit environments the following DLLs are required:
- ERPConnect35.dll or ERPConnect45.dll
- sapnwrfc.dll
- icuucXX.dll
- icudtXX.dll
- icuinXX.dll 

XX can vary depending on the version of the NW RRC Libraries.<br>
The ERPConnect*.dll is delivered with ERPConnect. The other DLLs can be downloaded from the SAP web site.

### Memory
* 2 GB or more recommended (depends on actual use case)


### Disk Space
* About 50 MB disk space are required for a full installation.


### 32/64-Bit Environment
* Both x86 and x64 platforms are supported.

Copy the 64-bit version of librfc32.dll to the `\System32` folder. <br>
Copy the 32-Bit Version of librfc32.dll to the `\SysWoW64` folder.

{: .box-warning }
**Warning! ERPConnect.ERPException: Cannot access librfc32.dll.** <br>
To use ERPConnect in 64-Bit mode, you need a 64-Bit version of the SAP library **librfc32.dll**. 
Copy the 64-bit version of librfc32.dll to the direcory `C:\Windows\System32`.
To use ERPConnect in 32-Bit mode, copy the 32-Bit version of the librfc32.dll to the directory `C:\Windows\SysWOW64`. 

![librfc32dll](/img/content/librfc32dll.png){:class="img-responsive" width="300px" }

### Security Settings
 	
- For logging on to SAP, a system or dialog user with appropriate [authority objects](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights) is required.
- Plain authentication (user/password), Secure Network Communications (SNC) with and without Single Sign-On (SSO) and SAP Logon Tickets (MYSAPSSO2) are supported.


### Network Settings
 	
Ports need to be opened depending on the SAP System connection technique.
Details can be found in the knowledge base article [How to check the accessibility to a SAP System](https://kb.theobald-software.com/sap/how-to-check-the-accessibility-to-a-sap-system).
