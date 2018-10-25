---
ref: xu-alteryx-01
layout: page
title: Requirements
description: Requirements
product: xtract-universal
parent: alteryx
permalink: /:collection/:path
weight: 1
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=requirements-alteryx-en
---

In order to use the Alteryx destination the Xtract Universal Alteryx plugin for the Alteryx designer is required. 

**Installation using the Xtract Universal Setup:** <br>
The Xtract Universal Setup will install the Xtract Universal Alteryx plugin if there is a valid Alteryx installation on the current system.
If you install Alteryx after installing Xtract Universal, either run the Xtract Universal setup again or do a manual installation of the plugin (see below)

At installation of Xtract Universal the setup creates a file in the alteryx installation directory. This file can be found at [alteryx]\Settings\AdditionalPlugins\Xtract Universal.ini. This file is needed for using the Xtract Universal Plugin in alteryx designer. Furthermore the setup will add a few entries to the DefaultSettings.xml at [alteryx]\bin\RuntimeData. A picture file of Xtract Universal will be placed at [alteryx]\bin\RuntimeData\icons\categories.

**Attention:** Should you have more than one installation of alteryx on your system, our setup will only detect one installation and place above files in the folders mentioned above. Our setup.log  (see below) will log the detected alteryx installation. For any other alteryx installations on your system, you need to place above files in the respective folders manually.

**Manual installation (for a separate Alteryx system):**<br>
Copy the alteryx folder *[XtractUniversal]\alteryx* (e.g. C:\Program Files\XtractUniversal\alteryx) from your local Xtract Universal installation directory to any directory on the system you want to install the plugin on. 

Open the alteryx folder and run the setup file AlteryxPluginSetup.exe (right mouse - Run as Administrator). Done.

Should you encounter issues with the installation of the plugin, such as the plugin is not showing in alteryx, please send the setup.log file from the alteryx folder to Theobald Software support.