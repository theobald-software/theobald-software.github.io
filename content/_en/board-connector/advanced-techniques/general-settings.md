---
ref: bc-advanced-techniques-03
layout: page
title: General Settings
description: General Settings
product: board-connector
parent: advanced-techniques
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /BOARD-Connector-EN/default.aspx?pageid=general-settings
---	

Each extraction dialog has the link General Settings, which provides general settings that are independent of the extraction type.

**Misc. tab**

![General-Settings](/img/content/General-Settings.jpg){:class="img-responsive"}

 
**Disable Buffer**<br>
This setting disables the extractions buffering and overwrites the server settings BufferExtractionCount  and BufferLifespanMinutes.

If the data is in very short time intervals (see server setting BufferLifespanMinutes) is requested, the data is delivered from the buffer. This increases the performance and limits the impact on the SAP system. If this behavior is not desired (for example, because the data must be always 100% up to date), the buffer must be explicitly turned off.

**Preview Mode**<br>
If it is activated, only a small portion of data is extracted from SAP or (if that's not possible) sample data is generated instead.


**Keywords**<br>
You can assign one or more keywords (Tags) to an extraction. Within the designer you can use these keywords as a filter for the extraction.

The security tab is described in the chapter [Extraction Security](../security/extraction-security).