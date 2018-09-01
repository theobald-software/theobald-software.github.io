---
layout: page
title: Prerequisites
description: Prerequisites
product: erpconnect
parent: prerequisites-and-installation
permalink: /:collection/:path
weight: 1
lang: en_GB
---

**.NET Framework**
 	
* .NET Famework 3.5 SP1 (for CLR2)
* .NET Famework 4.5.2 or later (for CLR4)  


**SAP Releases**
 	
* SAP R/3 Version 4.0B and later versions
* SAP ECC 6.0 or later
* SAP NW 7.0 or later
* SAP S/4HANA
* Business All-in-One
* SAP BW Version 3.1 and later.


SAP Business One and SAP Objects are not supported

| Component | SAP Release | Requirements to the SAP system |
| :------ |:--- | :--- |
| Table | Rel. above 4.0B | For most tasks, the installation of a Z-module is necessary, but not for all. |
| Query | Rel. above 4.0B | Nothing. |
| BAPI | Rel. above 4.0B | Nothing. |
| BW Cube | Rel. above BW 3.1 | Nothing. | 


**Operating System**

* Windows Vista
* Windows 7
* Windows 8
* Windows 10
* Windows Server 2003
* Windows Server 2008
* Windows Server 2008 R2
* Windows Server 2012
* Windows Server 2012 R2
* Windows Server 2016


**Visual Studio**

* Visual Studio 2008
* Visual Studio 2010
* Visual Studio 2012
* Visual Studio 2013
* Visual Studio 2015
* Visual Studio 2017
* **Caution:** Visual Studio Express versions don't support the LINQ to SAP Designer.


**Other Applications and Frameworks**
 	
* Visual C++ 2005 Runtime. You can get it [here](http://www.microsoft.com/download/en/details.aspx?id=14431).
* Librfc32.dll if no SAP GUI is installed (for32 bit applications only)
* NetWeaver RFC Library


**Memory**
* 2 GB minimum, depending on data volume, more may be required.


**Disk space**
* For the installation 30 MB total required to install.


**32/64-Bit Environment**
* The product can be installed on 32-Bit and 64-Bit operating systems.


**Security Settings**
 	
* SAP authentication: SSO (Single Sign On) or SAP credentials.
* SAP system or dialog user with appropriate [authority objects](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/7/67/authority-objects).


**Network Settings**
 	
Ports need to be opened depending on the technique how the connection to an SAP System is made.
Details can be found [here](https://my.theobald-software.com/index.php?/Default/Knowledgebase/Article/View/70/0/how-to-check-the-accessibility-to-a-sap-system).