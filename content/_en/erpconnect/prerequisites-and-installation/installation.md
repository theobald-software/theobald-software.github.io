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

The installation process copies the class library, the LINQToERPSetup and all a few tools into your program files directory.
The following list explains the most important files.
All files marked with (<b>*</b>) may be redistributed to customers together with your application.  
  
| Files | Explanation |
| :------ |:--- | :--- |
| ERPConnect35.dll (<b>*</b>) | The ERPConnect class library for .NET 3.5 SP1 or higher |
| ERPConnect35.xml  | Visual Studio documentation files |
| TransactionRecorder.exe | Small tool to record batch sequences and create appropriate .NET code (see [Batch Input Background Processing](../special-classes/batch-input-background-processing)) |
| IdocSchemeGenerator.exe | 	Small tool to generate XML schemas for IDocs (see [XML-Support for IDoc programming](../receiving-and-sending-idocs/xml-support-for-idoc-programming)) |
| FunctionTemplateGenerator.exe | Small tool to generate XML templates for RFCFunction objects (see [Improve your Perfor-mance by Using Templates](../calling-bapis-and-function-modules/improve-your-performance-by-using-templates)) |

After the installation you are able to use ERPConnect in your .NET environment. If you want to use the LINQ Designer, run the right LINQToERPSetup for your VisualStudio environment. Details you can find in the LINQToERP chapter.
