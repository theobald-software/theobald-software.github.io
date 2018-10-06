---
layout: page
title: 64-Bit Environment
description: 64-Bit Environment
product: xtract-rs
parent: requirements-and-installation
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-RS-EN/default.aspx?pageid=installation-in-64-bit-environment
---

The Xtract RS Component Suite fully supports 64-bit environments.

The installation package installs the DLLs described in Chapter [Installation](./installation) on your computer, ready to be used in 32 and 64-bit modes.

To run Xtract RS in 32-bit mode, the 32-bit version of librfc32.dll must be placed in [WindowsDir]\SysWow64.This is valid for x64 processors only. A 32-bit version is not available for iA64 processors.

To run Xtract RS in 64-bit mode, the 64-bit version of librfc32.dll must be placed in [WindowsDir]\System32. This is valid for x64 and IA64 processor types. You will find a copy of the 64-bit version of the librfc32.dll in the SAPNet download center or you can ask your SAP system administrator for it.

To download the librfc32.dll please refer to the following page [Theobald Products in a 64-bit environment](https://my.theobald-software.com/index.php?/Knowledgebase/Article/View/71/0/theobald--products-in-a-64-bit-environment). 
The assemblies have the same name and but a different file size.