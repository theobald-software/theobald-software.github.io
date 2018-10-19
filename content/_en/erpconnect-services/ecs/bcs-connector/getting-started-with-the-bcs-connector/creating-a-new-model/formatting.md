---
ref: ecs-getting-started-creating-a-new-model-04
layout: page
title: Formatting
description: Formatting
product: erpconnect-services
parent: creating-a-new-model
permalink: /:collection/:path
weight: 4
lang: en_GB
old_url: /ERPConnect-Services-EN/default.aspx?pageid=bcs-formatting
---

You can change the format type of a column with the BCS Connector. Use the ellipsis button next to a property field to open the Localization and Formatting dialog and switch to the Formatting tab. 

![BCS-Formatting](/img/content/BCS-Formatting.jpg){:class="img-responsive"}

**Format as date (e.g. 8/28/2012)**<br>
**Format as date (e.g. Tuesday, August 28, 2012)**<br>
**Format as date (e.g.  August, 2012)**<br>
The SAP date 20120828 will be formatted as SharePoint date. The display format is dependent on the Regional Settings of your SharePoint site ("Site Action > Site Settings > Regional Settings"). 

**Format as time (e.g. 8:17 AM)**<br>
**Format as time (e.g. 8:17:29 AM)**<br>
The SAP timestamp 081729 will be formatted as SharePoint timestamp. The display format is dependent on the Regional Settings of your SharePoint site ("Site Action > Site Settings > Regional Settings"). 

**Format as number and remove leading zeros**<br>
An SAP string (e.g. customer number 0000001049) will be formatted as number (1049). Leading zeros will be removed. 