---
ref: xfa-introduction-02
layout: page
title: Installation and First Steps
description: Installation and First Steps
product: xtract-for-alteryx
parent: introduction
permalink: /:collection/:path
weight: 2
lang: en_GB
---

The installation program is a standard installation routine which copies all necessary files into the program directory.
The setup installs the Visual C++ 2005 Runtime library.  


### Installation and First Steps

The installation is carried out using the supplied installation program in the standard folder C:\Program Files\XtractForAlteryx. <br>
During installation, certain libraries and programs are stored in the Alteryx installation on the same machine to make the components available later in the Alteryx UI. <br>
This installation in the target environment is done by the program XtractForAlteryxPluginInstaller.exe. It is triggered by the setup program under the hood. <br>
In the log file XtractForAlteryxSetup.txt you can read exactly which modifications were made to the system and whether errors occurred during installation.
If you start Alteryx after installation, the XfA components are available in a separate tab in the toolbox within the Alteryx UI and can be dragged and dropped onto the workflow as usual.
If you don't see the tab immediately, scroll to the right of the Toolbox tabs. You should find it there.

![Designer](/img/content/xfa/designer01.png){:class="img-responsive"}

