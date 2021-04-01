---
ref: xi-bapi-06
layout: page
title: Settings
description: Settings
product: xtract-is-for-azure
parent: bapi
permalink: /:collection/:path
weight: 6
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=bapi-settings
---

The dialog below will open after clicking the Settings button.

![BAPI-Settings](/img/content/BAPI-Settings.png){:class="img-responsive" }

**Automatic String Conversion**<br>
All strings are converted into VarChar strings if the source system is non-Unicode, and all strings are converted into NVarChar if the source system is Unicode.

**Convert Strings to VarChar**<br>
All strings are converted to VarChar regardless if the source system is Unicode or not.

**Convert Strings to NVarChar**<br>
All strings are converted to NVarChar regardless if the source system is Unicode or not.

**Commit Work after Execution**<br>
Executes a Commit automatically after the execution of the component.

**Send Export params to Pipeline**<br>
Sends the Export parameters to the outline pipeline.

**Do not treat ABAP exception as Error**<br>
Defines whether an error message is given when there is an ABAP exception.