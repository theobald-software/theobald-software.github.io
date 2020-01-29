---
ref: ec-prerequisites-and-installation-03
layout: page
title: 64-Bit Environment
description: 64-bit environment
product: erpconnect
parent: prerequisites-and-installation
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /ERPConnect-EN/default.aspx?pageid=64-bit-environment
---

To use ERPConnect you need also the following SAP libraries.

**The classic librfc32.dll assemblies**
  
Please copy the 64-bit version of librfc32.dll in the \System32 folder. You can find the 64-bit version of librfc32.dll in the SAPNet download area.

The 32-Bit Version has to be copied in the \SysWoW64 folder.

Note that the files have the same file name, only the file size varies.

Download the lastest [Visual C++ 2005 Runtime](https://www.microsoft.com/en-us/download/details.aspx?id=26347). 

![librfc32dll](/img/content/librfc32dll.png){:class="img-responsive" height="300px" width="300px"}  
  
The exception for wrong or not available librfc32.dlls:

   _ERPConnect.ERPException: Cannot access librfc32.dll.Please put a 64-bit version of librfc32.dll in your System32 folder (typically C:\Windows\System32) 
   and a 32-bit version of librfc32.dll in your SysWow64 folder (typically C:\Windows\SysWow64)._