---
layout: page
title: 64-Bit Environment
description: Description about 64-bit environment
product: erpconnect
parent: prerequisites-and-installation
permalink: /:collection/:path
weight: 3
lang: en_GB
---

To use ERPConnect you need also the following SAP libraries.

**The classic librfc32.dll assemblies**
  
Please copy the 64-bit version of librfc32.dll in the \System32 folder.

The 32-Bit Version has to be copied in the \SysWoW64 folder.

To download the librfc32.dll please refer to the following page [Theobald Products in a 64-bit environment](http://my.theobald-software.com/index.php?/Knowledgebase/Article/View/71/0/theobald--products-in-a-64-bit-environment). 
The assemblies have the same name and but a different file size.

Please make sure you also have the latest Visual C++ 2005 Runtime. You can get it [here](http://www.microsoft.com/downloads/en/details.aspx?FamilyID=766a6af7-ec73-40ff-b072-9112bab119c2).

![librfc32dll](/img/content/librfc32dll.png){:class="img-responsive" height="300px" width="300px"}  
  
The exception for wrong or not available librfc32.dlls:

   _ERPConnect.ERPException: Cannot access librfc32.dll.Please put a 64-bit version of librfc32.dll in your System32 folder (typically C:\Windows\System32) 
   and a 32-bit version of librfc32.dll in your SysWow64 folder (typically C:\Windows\SysWow64)._