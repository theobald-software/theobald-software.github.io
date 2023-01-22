---
ref: xi-bw-loader-04
layout: page
title: Settings
description: Settings
product: xtract-is
parent: bw-loader
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-IS-EN/default.aspx?pageid=bw-loader-settings
---
Use the *Setting* link to open up the settings dialog.

![BWLoader-Preferences](/img/content/BWLoader-Preferences.png){:class="img-responsive"}

### General
**Package Size**<br>
This defines how many data rows will be transferred with one single access. This parameter depends on the BW system and what will be done with the data in further processes. Values between 2000 and 20000 usually offer the best performance.

**Wait data transfer to be finished**<br>
If this option is checked, the component waits until data processing is completed. You will receive additional error messages if data processing fails.

**Trigger Process Chain**<br>
If you want to trigger a process chain after uploading just type in the name of the process chain here.

### SAP BI 3rd party notification
**No InfoPackage Start**<br>
The best way to upload data is to trigger the InfoPackage (default value). Under some conditions it might be useful not to trigger the InfoPackage but only to wait for notification (sleeping mode). In this case check this option.

**Use external Notifier**<br>
See chapter [External Notification](./external-notification).

**Request ID variable**<br>
See chapter [External Notification](./external-notification).

### Performance Improvement
**Debug Details**<br>
Generates more detailed log entries to enable easier error detection

**Enable Parallel Processing**<br>
Enables multiple Uploads at the same time.

**Allow multiple SAP connections**<br>
Allows to establish more than one connection to SAP which improves performance.

**Max. Number of Threads**<br>
Maximum number of application threads that prepare the packages to be uploaded.

