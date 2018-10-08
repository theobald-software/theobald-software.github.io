---
layout: page
title: Troubleshooting
description: Troubleshooting
product: xtract-rs
parent: requirements-and-installation
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /Xtract-RS-EN/default.aspx?pageid=troubleshooting
---

**"Edit" button for Datasource is disabled in Visual Studio**

Problem: 
Sometimes the "Edit" button, that opens the visual editor for Xtract RS connections, is disabled.

Solution:
Log on as the user that has a disabled "Edit" button.
Go to the folder VsEditButtonFix in the installation folder of Xtract RS (default: C:\Program Files\XtractRS\VsEditButtonFix) and run the corresponding .reg file for your Visual Studio version, e.g. vs2015-edit-fix.reg for VS 2015.
You would also find a readme file in the folder. 