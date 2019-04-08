---
ref: xu-advanced-techniques-04
layout: page
title: General Settings
description: General Settings
product: xtract-universal
parent: advanced-techniques
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=general-settings-of-the-extractions
---

Each extraction dialog has the link *General Settings*, which provides general settings that are independent of the extraction type.

**Misc. tab**

![General-Settings](/img/content/General-Settings.jpg){:class="img-responsive"}

**Disable Buffer**<br>
This setting disables the extractions buffering and overwrites the server settings BufferExtractionCount  and BufferLifespanMinutes.

If the data is in very short time intervals (see server setting BufferLifespanMinutes) is requested, the data is delivered from the buffer. This increases the performance and limits the impact on the SAP system. If this behavior is not desired (for example, because the data must be always 100% up to date), the buffer must be explicitly turned off.

With DeltaQ extractions buffering can only be used with update mode 'F'.

**Preview Mode**<br>
If it is activated, only a small portion of data is extracted from SAP or (if that's not possible) sample data is generated instead.

**Keywords**<br>
You can assign one or more keywords (Tags) to an extraction. Within the designer you can use these keywords as a filter for the extraction.

**Primary Key Tab**<br>
Select the primary key fields of the extraction. This is required for the merge operation.

**Security Tab**<br>
The security tab is described in the chapter [access management](../security-xu3/access-management).