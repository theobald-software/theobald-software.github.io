---
layout: page
title: Settings
description: Settings
product: xtract-universal
parent: sharepoint
permalink: /:collection/:path
weight: 3
lang: en_GB
old_url: /Xtract-Universal-EN/default.aspx?pageid=settings1
---

You can define the following extraction-specific settings:


![SharePointExtractionSpecificSettings](/img/content/SharePointExtractionSpecificSettings.png){:class="img-responsive"}

**SharePoint list name**<br>
Specify the name of the target SharePoint list here. You can choose between the SAP object name and the extraction identifier or specify a custom name yourself.
            

**Mode**<br>
You can choose between the following export modes:

**Drop & Create**: Creates a new list on the SharePoint system, deleting any previous list with the same name.

**Create if not exists & Merge**: Merges data with an existing list or creates a new list, if none with the specified name is found.

**Truncate & Insert**: Deletes all rows in the list and fills it with the new exported data. It differs from "Drop & Create" by not deleting the list or any associated information.

**Merge only**: Merges rows, without deleting rows or the list itself.


**Max. threads** (expert option):<br>
You can specify the number of threads for communication with the SharePoint server. Increasing it may or may not increase upload speed, depending on your server and network setup. Setting it to '1' will slow down speed significantly, but may help if your SharePoint server experiences heavy load or when connection problems occur. In general, we recommend keeping the default value for most users.
