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

The Xtract Universal Alteryx plugin for the Alteryx designer is required to use the Alteryx destination. 

### Installation using the Xtract Universal Setup

The Xtract Universal Setup will install the Xtract Universal Alteryx plugin if there is a valid Alteryx installation on the current system. <br>
If you install Alteryx after installing Xtract Universal, either run the Xtract Universal setup again or do a manual installation of the plugin.

After installation of Xtract Universal the setup creates the following entries and extensions in the Alteryx installation directory:
- `Alteryx\Settings\AdditionalPlugins\XtractUniversal.ini`
- `Alteryx\bin\RuntimeData\icons\categories\XtractUniversal.png`
- `Alteryx\bin\RuntimeData\DefaultSettings.xml`

{: .box-note }
**Note:** Should you have more than one Alteryx installation on your system, the setup will only detect one installation. 
The files for the Xtract Universal Alteryx plugin are only placed into the folders of that one installation.
For any other Alteryx installations on your system, the plugin must be installed manually.

### Manual installation (for a separate Alteryx system)

1. Copy the Alteryx folder `C:\Program Files\XtractUniversal\alteryx` from your local Xtract Universal installation directory to any directory on the server you want to install the plug-in. 
2. Run the `C:\Program Files\XtractUniversal\alteryx\AlteryxPluginSetup.exe` from a Windows command shell. 

The following commands are supported followed by a parameter pointing at the Alteryx installation directory: 
- */i* (for install) e.g., `C:\Program Files\XtractUniversal\alteryx>AlteryxPluginSetup /i "C:\Users\mywindowsuser\AppData\Local\Alteryx"`
- */u* (for uninstall)

{: .box-note }
**Note:** Should you encounter issues with the installation of the plugin, such as the plugin is not showing in Alteryx, send the setup.log file in `C:\Program Files\XtractUniversal\alteryx\setup.log` to [Theobald Support](mailto:support@theobald-software.com).