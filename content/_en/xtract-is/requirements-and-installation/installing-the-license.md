---
layout: page
title: Installing the License
description: Installing the License
product: xtract-is
parent: requirements-and-installation
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=installing-the-license
---

A demo license is automatically installed with the installation of Xtract IS. After having purchased Xtract IS, a regular license is provided. This license is bound to your company and a specific server name. For installing this license, please use the Xtract License Manager, XtractLicenseManager.exe. You can find the Xtract License Manager in the installation directory of Xtract IS.

![XIS_License_Manager](/img/content/XIS_License_Manager.jpg){:class="img-responsive" width="600px"}


Click Install. A file dialog is shown to locate the regular XtractISLicense.json file (fromerly Xtract.License.dll). Select the license file, close and restart the license manager to view the properly installed license. If you want to inspect your current license data, you may also click the Xtract IS Info link located at the top of each component editor.

The picture shows a properly installed regular license.

![XIS_License_Info](/img/content/XIS_License_Info.jpg){:class="img-responsive" width="400px"}


Xtract.License.dll files will be registered in the GAC. 
XtractISLicense.json files are copied to CSIDL_COMMON_APPDATA\TheobaldSoftware\XtractIS\ or C:\ProgramData\TheobaldSoftware\XtractIS\