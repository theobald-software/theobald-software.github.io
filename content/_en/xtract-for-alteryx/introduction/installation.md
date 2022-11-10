---
ref: xfa-introduction-03
layout: page
title: Installation 
description: Installation and First Steps
product: xtract-for-alteryx
parent: introduction
permalink: /:collection/:path
weight: 3
lang: en_GB
---

### Prerequisites

{: .box-note }
**Note:** Administrator permissions are required to install Xtract for Alteryx.

1. Install Alteryx Designer before installing Xtract for Alteryx.
2. Close Alteryx Designer and then install Xtract for Alteryx as described in the following section. Closing Alteryx Designer ensures that the Xtract for Alteryx components are installed properly.
3. Reopen Alteryx Designer and check if Xtract for Alteryx components are available.

{% include _content/en/requirements/productversion.md %}	

### Installation of Xtract for Alteryx

The installation program *XtractForAlteryxSetup.exe* is an industry standard installation routine. Execute the *XtractForAlteryxSetup.exe* file and follow the instructions of the installation program.<br>

![Xtract for Alteryx Installation](/img/content/xfa/xfa_install.png){:class="img-responsive"}

{: .box-note }
**Note:** During the setup you need to specify the installation directory for Xtract for Alteryx and also the installation directory of Alteryx.
If you have multiple instances of Alteryx installed, choose the instance on which you want to use Xtract for Alteryx.

After installation of Xtract for Alteryx the setup creates the following entries and extensions in the Alteryx installation directory:
- `Alteryx\Settings\AdditionalPlugins\XtractForAlteryx.ini`
- `Alteryx\bin\RuntimeData\icons\categories\XtractForAlteryx.png`
- `Alteryx\bin\RuntimeData\DefaultSettings.xml`

### Unattended Installation
{% include _content/en/silent-setup.md %}

### Installation Directory Files
The list below shows several important files that are placed into the default directory `C:\Program Files\XtractForAlteryx`: <br>

|Filename | Description |
|:----|:---|
|ABAP directory | Directory with SAP transport requests (.zip) and a README file (.txt).|
|XtractForAlteryxSetup.exe |Main installation application that installs Xtract for Alteryx as a plug-in to the Alteryx Designer / Server running on the system.|
|Uninstall Xtract for Alteryx | Shortcut to uninstall and remove Xtract for Alteryx with all its components from your machine.|
|Eula_Xtract_for_Alteryx.rtf |Document containing the license agreement for the use of the software Xtract for Alteryx. |
|XtractForAlteryxLicense.json| License file with information about the server, the component and runtime.|
|XtractForAlteryxSetup.log| Log file to see the exact modifications performed on your system and check whether any errors occurred during installation |

****
#### Related Links
- [Update Installation](./update)
- [Licensing](./licensing)


