---
ref: xi-query-03
layout: page
title: Settings
description: Settings
product: xtract-is
parent: query
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=query-settings
---

### Xtract IS Query Preferences

In the main window of the component, click *Settings*.  The window “Xtract IS Query Preferences” opens.

![Query-Settings](/img/content/Query-Settings.png){:class="img-responsive" }

**Max Rows**<br>
Maximum numbers of rows to be extracted. 0 is unlimited.

**Automatic String Conversion**<br>
All strings are converted into VarChar strings if the source system is non-Unicode, and all strings are converted into NVarChar if the source system is Unicode.

**Convert Strings to VarChar**<br>
All strings are converted to VarChar regardless if the source system is Unicode or not.

**Convert Strings to NVarChar**<br>
All strings are converted to NVarChar regardless if the source system is Unicode or not.

**Use Variant Variable**<br>
The text field for the variant will open for user editing and an SSIS variable can be entered. A dynamic variant can be assigned this way.

**Treat “No Data Selected” as Error**<br>
If activated an error message is displayed when there is no data to be extracted.