---
ref: ec-prerequisites-and-installation-02
layout: page
title: Installation
description: Installation specifics
product: erpconnect
parent: prerequisites-and-installation
permalink: /:collection/:path
weight: 2
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=installation
---

### Prerequisites

{: .box-note }
**Note:** Administrator permissions are required to install ERPConnect.

### Setup

`ERPConnectSetup.exe` is an industry standard setup. Execute the `ERPConnectSetup.exe` file and follow the instructions of the setup. <br>
The installation process copies the class library, the LINQToERPSetup and all available tools into the program directory.

![ERPConnect_Setup](/img/content/erpconnect/ERPConnect_Setup.png){:class="img-responsive" }

After the installation you are able to use ERPConnect in your .NET environment.<br>
The license installation procedure is described in the section [Installing the license](./licensing).

{: .box-note }
**Note:** To use the LINQ Designer, run the *LINQToERPSetup* for your VisualStudio environment. 
See [LINQ to SAP - Installation and First Steps](../linq-to-sap/installation-and-first-steps) for more information.


### Program Directory Files
The list below shows several most important files that are placed into the default directory ``C:\Program Files\ERPConnect`` after installation:

| Files | Explanation |
| :------ |:--- | :--- |
| ERPConnect35.dll (<b>*</b>) | The ERPConnect class library for .NET 3.5 SP1 or higher |
| ERPConnect45.dll (<b>*</b>) | The ERPConnect class library for .NET 4.5.2 or higher |
| ERPConnect35.xml  ERPConnect45.xml | Visual Studio documentation files |
| TransactionRecorder.exe | Small tool to record batch sequences and create appropriate .NET code (see [Batch Input Background Processing](../special-classes/managing-and-executing-transactions-the-class-transaction)) |
| IdocSchemeGenerator.exe | Small tool to generate XML schemas for IDocs (see [XML-Support for IDoc programming](../receiving-and-sending-idocs/xml-support-for-idoc-programming)) |
| FunctionTemplateGenerator.exe | Small tool to generate XML templates for RFCFunction objects (see [Improve your Performance by Using Templates](../calling-bapis-and-function-modules/improve-your-performance-by-using-templates)) |

All files marked with (<b>*</b>) may be redistributed to customers together with your application.  

 
